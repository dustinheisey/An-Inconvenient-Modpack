import fs from 'fs';
import path from 'path';
import {
  MODPACK_NAME,
  MODPACK_VERSION,
  AUTHOR,
  INSTANCE_ROOT,
  MANIFEST_FILE,
  MINECRAFT_INSTANCE_FILE
} from './settings.js';

// Check if minecraftinstance.json exists
if (!fs.existsSync(MINECRAFT_INSTANCE_FILE)) {
  console.error(
    `Generating a ${MANIFEST_FILE} requires a ${MINECRAFT_INSTANCE_FILE} file.`
  );
  process.exit();
}

// Read minecraftinstance.json and parse it as JSON
const minecraftInstanceJson = JSON.parse(
  fs.readFileSync(MINECRAFT_INSTANCE_FILE, 'utf-8')
);

// Prepare mods array for manifest
const mods = minecraftInstanceJson.installedAddons.map((addon) => {
  return {
    required: true,
    projectID: addon.addonID,
    fileID: addon.installedFile.id,
    downloadUrl: addon.installedFile.downloadUrl
  };
});

// Get modloader ID
let modloaderId = minecraftInstanceJson.baseModLoader.name;

// Prepare manifest JSON structure
const jsonOutput = {
  minecraft: {
    version: minecraftInstanceJson.baseModLoader.minecraftVersion,
    modLoaders: [
      {
        id: modloaderId,
        primary: true
      }
    ]
  },
  manifestType: 'minecraftModpack',
  manifestVersion: 1,
  name: MODPACK_NAME,
  version: MODPACK_VERSION,
  author: AUTHOR,
  files: mods,
  overrides: 'overrides'
};

// TESTING

// Remove existing manifest file if exists
const manifestPath = path.join(INSTANCE_ROOT, MANIFEST_FILE);
if (fs.existsSync(manifestPath)) {
  fs.unlinkSync(manifestPath);
}

// Write the manifest JSON to file
const jsonString = JSON.stringify(jsonOutput, null, 2); // Pretty print with 2 spaces
fs.writeFileSync(manifestPath, jsonString, 'utf-8');

console.log(`${MANIFEST_FILE} created!`);
