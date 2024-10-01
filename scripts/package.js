const fs = require('fs-extra');
const archiver = require('archiver');
const path = require('path');

const outputFolder = path.join(__dirname, '../output');
const zipFilePath = path.join(outputFolder, 'modpack.zip');

// List of files and folders to include in the zip file
const filesAndFolders = [
  'config',
  'defaultconfigs',
  'kubejs',
  'patchouli_books',
  'template',
  'xaeroworldmap.txt',
  'xaerominimap.txt'
];

// Create the output folder if it doesn't exist
fs.ensureDirSync(outputFolder);

// Create a file to stream archive data to
const output = fs.createWriteStream(zipFilePath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for the `close` event to confirm that the zip file has been finalized
output.on('close', () => {
  console.log(`${archive.pointer()} total bytes`);
  console.log('Modpack has been zipped successfully');
});

// Catch any errors while zipping
archive.on('error', (err) => {
  throw err;
});

// Pipe the archive data to the file
archive.pipe(output);

// Add the files and folders to the "overrides" directory inside the zip
filesAndFolders.forEach((fileOrFolder) => {
  const fullPath = path.join(__dirname, '../', fileOrFolder);

  if (fs.existsSync(fullPath)) {
    const relativePath = path.join('overrides', fileOrFolder);

    if (fs.lstatSync(fullPath).isDirectory()) {
      // Add directory to the zip
      archive.directory(fullPath, relativePath);
    } else if (fs.lstatSync(fullPath).isFile()) {
      // Add file to the zip
      archive.file(fullPath, { name: relativePath });
    }
  } else {
    console.log(`Warning: ${fileOrFolder} not found`);
  }
});

archive.file(path.join(__dirname, '../MODLIST.html'), { name: 'MODLIST.html' });

// Finalize the zip file creation
archive.finalize();
