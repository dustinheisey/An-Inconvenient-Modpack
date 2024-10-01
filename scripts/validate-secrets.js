import fs from 'fs';
import path from 'path';

// Function to validate the existence of the secrets file and create one if missing
export function validateSecretsFile() {
  const secretsFileFullPath = path.resolve('./scripts/secrets.js');

  // Check if the secrets file exists
  if (!fs.existsSync(secretsFileFullPath)) {
    console.error(
      `You need a valid CurseForge API Token in a ${secretsFileFullPath} file`
    );

    // Create the secrets file with instructions
    const content = `// To generate an API token go to: https://authors.curseforge.com/account/api-tokens\n$CURSEFORGE_TOKEN = "your-curseforge-token-here"`;
    fs.writeFileSync(secretsFileFullPath, content, 'utf-8');
    console.log(`Created ${secretsFileFullPath}`);
  }
}

validateSecretsFile();
