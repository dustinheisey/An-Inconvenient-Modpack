const fs = require('fs');
const axios = require('axios');

const minecraftinstance_json = JSON.parse(
  fs.readFileSync(`${__dirname}/../minecraftinstance.json`)
);

// grab the name and the version for the markdown header from the pwsh settings
const settings_ps1 = fs
  .readFileSync(`${__dirname}/../automation/settings.ps1`)
  .toString();
const CLIENT_NAME = settings_ps1.match(/\$CLIENT_NAME = "(.*)"/)[1];
const MODPACK_VERSION = settings_ps1.match(/\$MODPACK_VERSION = "(.*)"/)[1];

// match the sorting of MelanX/ModListCreator
function by_project_name(project_a, project_b) {
  if (project_a.name.toLowerCase() > project_b.name.toLowerCase()) return +1;
  else if (project_a.name.toLowerCase() < project_b.name.toLowerCase())
    return -1;
  return 0;
}

// fire off just a single API call to retrieve projects data
axios
  .get('https://curse.melanx.de/projects', {
    data: minecraftinstance_json.installedAddons.map(
      (installedAddon) => installedAddon.addonID
    )
  })
  .then((response) => {
    const projects = Object.values(response.data).sort(by_project_name);
    const file_for = [];

    // mapping installed addon file details from minecraftinstance.json
    minecraftinstance_json.installedAddons.forEach((installedAddon) => {
      file_for[installedAddon.addonID] = {
        id: installedAddon.installedFile.id,
        name: installedAddon.installedFile.fileName
      };
    });

    const mdLines = [];
    const htmlLines = [`<ul>`];

    projects.forEach((project) => {
      mdLines.push(
        `- [${file_for[project.project].name}](${
          project.website
        }/files/${file_for[project.project].id}) (by [${
          project.owner
        }](https://www.curseforge.com/members/${project.owner.toLowerCase()}/projects))`
      );
      htmlLines.push(
        `<li><a href="${project.website}/files/${
          file_for[project.project].id
        }">${file_for[project.project].name}</a> (by <a href="https://www.curseforge.com/members/${project.owner.toLowerCase()}/projects">${project.owner}</a>)</li>`
      );
    });

    htmlLines.push(`</ul>`);

    // write the generated HTML content to MODLIST.html

    // Overwrite README.md with modpack description and modlist
    const readmeContent = `# An Inconvenient Modpack

An Inconvenient Modpack is a philosophical story of our current times and scathing political commentary about the issues that affect all of us, packaged in the form of an epic minecraft modpack. This is not your average modpack. There is an enormous amount to do here including but not limited to 9 large chapters of content and many collections of side quests, hundreds of advancements and intricately handcrafted progression changes to the more than 200 mods included with the pack. The narrative that will guide you through the content of this pack will make you think deeply about the issues affecting all of us right now.

## Modlist - v${MODPACK_VERSION} (Latest Version) 
${mdLines.join('\n')}`;

    // write the updated content to README.md
    fs.writeFileSync(`${__dirname}/../README.md`, readmeContent);
    fs.writeFileSync(`${__dirname}/../MODLIST.html`, htmlLines.join('\n'));
  });
