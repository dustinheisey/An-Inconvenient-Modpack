// MODLIST.html, Manifest.json, README.md Updating Script
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import {
  MODPACK_NAME,
  MODPACK_VERSION,
  AUTHOR,
  INSTANCE_ROOT,
  MANIFEST_FILE,
  MINECRAFT_INSTANCE_FILE,
  MC_VERSION,
  FORGE_VERSION
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

// Remove existing manifest file if exists
const manifestPath = path.join(INSTANCE_ROOT, MANIFEST_FILE);
if (fs.existsSync(manifestPath)) {
  fs.unlinkSync(manifestPath);
}

// Write the manifest JSON to file
const jsonString = JSON.stringify(jsonOutput, null, 2); // Pretty print with 2 spaces
fs.writeFileSync(manifestPath, jsonString, 'utf-8');

console.log(`${MANIFEST_FILE} created!`);

// Update Modlist and README
axios
  .get('https://curse.melanx.de/projects', {
    data: minecraftInstanceJson.installedAddons.map(
      (installedAddon) => installedAddon.addonID
    )
  })
  .then((response) => {
    const projects = Object.values(response.data).sort(byProjectName);
    const fileFor = [];

    // Mapping installed addon file details from minecraftinstance.json
    minecraftInstanceJson.installedAddons.forEach((installedAddon) => {
      fileFor[installedAddon.addonID] = {
        id: installedAddon.installedFile.id,
        name: installedAddon.installedFile.fileName
      };
    });

    const mdLines = [];
    const htmlLines = [`<ul>`];

    projects.forEach((project) => {
      mdLines.push(
        `- [${fileFor[project.project].name}](${
          project.website
        }/files/${fileFor[project.project].id}) (by [${
          project.owner
        }](https://www.curseforge.com/members/${project.owner.toLowerCase()}/projects))`
      );
      htmlLines.push(
        `<li><a href="${project.website}/files/${
          fileFor[project.project].id
        }">${fileFor[project.project].name}</a> (by <a href="https://www.curseforge.com/members/${project.owner.toLowerCase()}/projects">${project.owner}</a>)</li>`
      );
    });

    htmlLines.push(`</ul>`);

    // Overwrite README.md with modpack description and modlist
    const readmeContent = `# ${MODPACK_NAME}

${MODPACK_NAME} is a philosophical story of our current times and scathing political commentary about the issues that affect all of us, packaged in the form of an epic minecraft modpack. This is not your average modpack. There is an enormous amount to do here including but not limited to 9 large chapters of content and many collections of side quests, hundreds of advancements and intricately handcrafted progression changes to the more than 200 mods included with the pack. The narrative that will guide you through the content of this pack will make you think deeply about the issues affecting all of us right now.

## Modlist - v${MODPACK_VERSION} | ${MC_VERSION} | Forge ${FORGE_VERSION}

${mdLines.join('\n')}`;

    fs.writeFileSync(path.join(INSTANCE_ROOT, 'README.md'), readmeContent);
    fs.writeFileSync(
      path.join(INSTANCE_ROOT, 'MODLIST.html'),
      htmlLines.join('\n')
    );
  })
  .catch((error) => {
    console.error('Error fetching project data:', error);
  });

// Helper function to sort projects by name
const byProjectName = (projectA, projectB) => {
  if (projectA.name.toLowerCase() > projectB.name.toLowerCase()) return +1;
  else if (projectA.name.toLowerCase() < projectB.name.toLowerCase()) return -1;
  return 0;
};
