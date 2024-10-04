import fs from 'fs-extra';
import archiver from 'archiver';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { MODPACK_NAME, MODPACK_VERSION } from './settings.js';

// Get the current file's path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Script started...');

// Resolve the output folder and zip file path based on the current file location
const outputFolder = path.join(__dirname, '../output');
const zipFilePath = path.join(
  outputFolder,
  `${MODPACK_NAME} ${MODPACK_VERSION}.zip`
);
console.log(`Output folder resolved to: ${outputFolder}`);
console.log(`Zip file path resolved to: ${zipFilePath}`);

// List of files and folders to include in the zip file
const overrides = [
  'config',
  'defaultconfigs',
  'kubejs',
  'patchouli_books',
  'template',
  'packmenu',
  'xaeroworldmap.txt',
  'xaerominimap.txt'
];

const outputFiles = ['MODLIST.html', 'manifest.json'];
const bccCommonTomlPath = path.join(__dirname, '../config/bcc-common.toml');
const changelogsFolder = path.join(__dirname, '../changelogs');
const changelogFilePath = path.join(
  changelogsFolder,
  `Release ${MODPACK_VERSION}.md`
);

// Create the output folder if it doesn't exist
console.log('Ensuring output folder exists...');
fs.ensureDirSync(outputFolder);

// Create the changelogs folder if it doesn't exist
console.log('Ensuring changelogs folder exists...');
fs.ensureDirSync(changelogsFolder);

// Create a file to stream archive data to
console.log('Creating write stream for the zip file...');
const output = fs.createWriteStream(zipFilePath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level to maximum
});

// Listen for the `close` event to confirm that the zip file has been finalized
output.on('close', () => {
  console.log(`${archive.pointer()} total bytes`);
  console.log('Modpack has been zipped successfully');
});

// Catch any errors while zipping
archive.on('error', (err) => {
  console.error('An error occurred while creating the zip archive:', err);
  throw err;
});

// Pipe the archive data to the file
console.log('Piping archive data to the output file...');
archive.pipe(output);

// Add the files and folders to the "overrides" directory inside the zip
console.log('Adding overrides to the zip...');
overrides.forEach((fileOrFolder) => {
  const fullPath = path.join(__dirname, '../', fileOrFolder);
  console.log(`Processing: ${fileOrFolder}`);

  if (fs.existsSync(fullPath)) {
    const relativePath = path.join('overrides', fileOrFolder);

    if (fs.lstatSync(fullPath).isDirectory()) {
      console.log(`Adding directory to archive: ${relativePath}`);
      // Add directory to the zip
      archive.directory(fullPath, relativePath);
    } else if (fs.lstatSync(fullPath).isFile()) {
      console.log(`Adding file to archive: ${relativePath}`);
      // Add file to the zip
      archive.file(fullPath, { name: relativePath });
    }
  } else {
    // Log a warning if the file or folder doesn't exist
    console.log(`Warning: ${fileOrFolder} not found`);
  }
});

// Add the output files to the zip
console.log('Adding output files to the zip...');
outputFiles.forEach((file) => {
  const fullPath = path.join(__dirname, '../', file);
  console.log(`Processing output file: ${file}`);

  if (fs.existsSync(fullPath)) {
    const relativePath = file;

    if (fs.lstatSync(fullPath).isDirectory()) {
      console.log(`Adding directory to archive: ${relativePath}`);
      // Add directory to the zip
      archive.directory(fullPath, relativePath);
    } else if (fs.lstatSync(fullPath).isFile()) {
      console.log(`Adding file to archive: ${relativePath}`);
      // Add file to the zip
      archive.file(fullPath, { name: relativePath });
    }
  } else {
    // Log a warning if the output file doesn't exist
    console.log(`Warning: ${file} not found`);
  }
});

// Update bcc-common.toml with the new version number
console.log('Updating bcc-common.toml with the new version number...');
if (fs.existsSync(bccCommonTomlPath)) {
  console.log('bcc-common.toml found. Reading file...');
  let bccCommonToml = fs.readFileSync(bccCommonTomlPath, 'utf-8');

  // Use regex to replace the modpackVersion value
  console.log('Replacing version number in bcc-common.toml...');
  bccCommonToml = bccCommonToml.replace(
    /(modpackVersion\s*=\s*")([^\"]+)(")/,
    `$1${MODPACK_VERSION}$3`
  );

  // Write the updated content back to bcc-common.toml
  console.log('Writing updated version back to bcc-common.toml...');
  fs.writeFileSync(bccCommonTomlPath, bccCommonToml, 'utf-8');
  console.log('bcc-common.toml updated successfully!');
} else {
  // Log a warning if bcc-common.toml doesn't exist
  console.log('Warning: bcc-common.toml not found');
}

// Generate changelog from conventional commits
console.log('Generating changelog from conventional commits...');
try {
  // Use git log to get all commit messages that are part of the current branch (excluding commits from main)
  const branchName = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim();
  const commitMessages = execSync(
    `git log main..${branchName} --pretty=format:"%s"`
  )
    .toString()
    .split('\n');
  const conventionalCommits = commitMessages.filter((msg) =>
    /^(feat|fix|chore|docs|tech):/.test(msg)
  );

  if (conventionalCommits.length > 0) {
    // Group commits by type
    const categorizedCommits = {
      Mods: [],
      feat: [],
      fix: [],
      docs: [],
      tech: []
    };

    conventionalCommits.forEach((msg) => {
      const [type, ...messageParts] = msg.split(': ');
      const message = messageParts.join(': ');
      if (type === 'chore') {
        categorizedCommits.Mods.push(`- ${message}`);
      } else if (categorizedCommits[type]) {
        categorizedCommits[type].push(`- ${message}`);
      }
    });

    // Create the changelog content with categories
    let changelogContent = `# Changelog for Release ${MODPACK_VERSION}\n\n`;
    if (categorizedCommits.Mods.length > 0) {
      changelogContent += `## Mods\n`;
      changelogContent += categorizedCommits.Mods.join('\n') + '\n\n';
    }
    for (const [category, messages] of Object.entries(categorizedCommits)) {
      if (category !== 'Mods' && messages.length > 0) {
        changelogContent += `## ${category.charAt(0).toUpperCase() + category.slice(1)}\n`;
        changelogContent += messages.join('\n') + '\n\n';
      }
    }

    // Write the changelog to a markdown file
    console.log('Writing changelog to file...');
    fs.writeFileSync(changelogFilePath, changelogContent, 'utf-8');
    console.log(`Changelog created at ${changelogFilePath}`);
  } else {
    console.log('No conventional commits found for changelog.');
  }
} catch (error) {
  console.error('Error generating changelog:', error);
}

// Finalize the zip file creation
console.log('Finalizing the zip archive...');
archive.finalize();
console.log('Script completed.');
