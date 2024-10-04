# Release Workflow

- When a release branch is merged into main

1. update bcc-common.toml version number

# Release Workflow for Minecraft Modpack

This document outlines the automated release workflow that is triggered when a release branch is merged into the `main` branch of the Minecraft modpack repository. The goal is to streamline the process of releasing a new version of the modpack, including generating server files, creating a changelog, and publishing GitHub releases, among other tasks.

## Workflow Overview

### 1. Trigger Release Workflow

- **Event**: Workflow is triggered by merging a release branch into the `main` branch.
- **Actions**:
  - Pull the latest changes from the `main` branch.
  - Update all version references.

### 2. Update Readme, Modlist, and Manifest

- **Actions**:
  - Update `README.md` to include new modpack details.
  - Generate `MODLIST.html` with details of all mods in the pack.
  - Generate `manifest.json` for the modpack, containing metadata and mod list.

### 3. Package Overrides

- **Action**: Prepare all files and configurations required for the modpack.
- **Details**:
  - Package the following folders: `config`, `defaultconfigs`, `kubejs`, `patchouli_books`, `template`, `packmenu`.
  - Include additional files: `xaeroworldmap.txt` and `xaerominimap.txt`.
  - Combine all the folders and files into an `overrides` folder.
  - Add `manifest.json` and `MODLIST.html` to the `overrides` folder.

### 4. Create Release Zip

- **Action**: Create a zip archive for the release.
- **Details**:
  - Combine the `overrides` folder, `manifest.json`, and `MODLIST.html` into a single zip file.
  - Place the zip file in the output directory for distribution.

## Recommendations for Improvements

1. **Automate Server Files Packaging**:

   - Include an automated step to package server-side configuration files if required.
   - This will ensure consistency between the client and server versions.

2. **Automated Changelog Generation**:

   - Extract commit messages from the merged branch and generate a `CHANGELOG.md` automatically.
   - Include this changelog in the release zip and GitHub release notes.

3. **GitHub Release Automation**:

   - Use GitHub Actions to create a new release automatically.
   - Tag the commit, create the release, and upload the release zip, `manifest.json`, and changelog.

4. **Publish to CurseForge**:

   - Automate publishing to CurseForge using their API.
   - Ensure metadata such as version, description, and changelog are included.

5. **Discord and Social Media Notifications**:

   - Use webhooks to automatically post notifications to Discord and other social media channels.
   - Include links to the new release, changelog, and download locations.

6. **Error Handling and Logging**:

   - Implement detailed error handling and logging for each step.
   - Ensure any failure during the workflow triggers notifications to prevent unnoticed errors.

7. **Version Control and Backup**:

   - Automate backup of the current release before making updates.
   - Store backups in a secure location to facilitate rollback if needed.

8. **Testing**:

   - Add automated tests to verify the integrity of the packaged modpack.
   - Ensure that all required files are included and that there are no configuration issues.

9. **Metrics Tracking**:
   - Implement release metrics tracking to collect data such as download counts, user feedback, and issues.
   - Use this information to continuously improve future releases.
