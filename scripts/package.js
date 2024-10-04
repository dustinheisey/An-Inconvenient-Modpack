import fs from 'fs-extra';
import archiver from 'archiver';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the output folder and zip file path based on the current file location
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

const outputFiles = ['MODLIST.html', 'manifest.json'];

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

// Add the output files to the zip
outputFiles.forEach((file) => {
  const fullPath = path.join(__dirname, '../output/', file);

  if (fs.existsSync(fullPath)) {
    const relativePath = file;

    if (fs.lstatSync(fullPath).isDirectory()) {
      // Add directory to the zip
      archive.directory(fullPath, relativePath);
    } else if (fs.lstatSync(fullPath).isFile()) {
      // Add file to the zip
      archive.file(fullPath, { name: relativePath });
    }
  } else {
    console.log(`Warning: ${file} not found`);
  }
});

// Finalize the zip file creation
archive.finalize();
