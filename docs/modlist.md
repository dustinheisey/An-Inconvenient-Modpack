# Modlist Update Workflow

This document describes the automated workflow for updating the mod list whenever changes are made to `minecraftinstance.json`. The goal is to ensure that all related files are kept up-to-date with the latest mod configurations, including the manifest, mod list, and project documentation.

## Workflow Overview

### 1. Trigger Workflow

- **Event**: The workflow is triggered whenever changes are committed to `minecraftinstance.json`.
- **Actions**:
  - Pull the latest changes from the branch.

### 2. Update Modlist.html

- **Action**: Update `Modlist.html` to reflect the changes in mods.
- **Details**:
  - Read `minecraftinstance.json` for the list of installed addons.
  - Generate an updated `Modlist.html` including:
    - Mod name.
    - Mod version.
    - Author.
    - Links to mod pages.
  - Save the updated `Modlist.html` file.

### 3. Update README.md

- **Action**: Update `README.md` to include the latest information about the mods.
- **Details**:
  - Extract the list of mods from `minecraftinstance.json`.
  - Update the relevant sections in `README.md` with new mod details, including:
    - Version numbers.
    - New additions or removals.
    - Updated descriptions where necessary.
  - Save the updated `README.md` file.

### 4. Update manifest.json

- **Action**: Update `manifest.json` to reflect the current mod list.
- **Details**:
  - Use `minecraftinstance.json` to update the list of mods in `manifest.json`.
  - Ensure that mod version IDs and metadata are correct.
  - Save the updated `manifest.json`.

### 5. Continuous Integration

- **GitHub Actions**:

  - Use GitHub Actions to automate this workflow whenever `minecraftinstance.json` changes.
  - Define a `.github/workflows/modlist_update.yml` to handle this process:

    ```yaml
    name: Modlist Update Workflow

    on:
      push:
        paths:
          - 'minecraftinstance.json'

    jobs:
      update_modlist:
        runs-on: ubuntu-latest

        steps:
          - name: Checkout Repository
            uses: actions/checkout@v2

          - name: Set up Node.js
            uses: actions/setup-node@v2
            with:
              node-version: '16'

          - name: Install Dependencies
            run: npm install

          - name: Update Modlist
            run: node updateModlist.js

          - name: Commit and Push Changes
            run: |
              git config --global user.name 'github-actions'
              git config --global user.email 'github-actions@github.com'
              git add README.md Modlist.html manifest.json
              git commit -m 'Automated update of mod list and manifest'
              git push
    ```

### 6. Automation Script (`generate-modlist.js`)

- **Details**:
  - This script should read `minecraftinstance.json` and update `Modlist.html`, `README.md`, and `manifest.json` accordingly.
  - Ensure all changes are properly formatted and no information is lost.

## Recommendations for Improvement

1. **Automated Change Detection**: Add a mechanism to highlight changes in mods (e.g., additions, removals) and include them in the commit message or changelog.
2. **Notification System**: Integrate a notification system (e.g., Discord webhook) to alert contributors whenever the mod list is updated.
3. **Error Handling**: Add error handling in the GitHub Action to catch any issues during the update process, and log useful debugging information.
4. **Data Validation**: Include validation to ensure `minecraftinstance.json` contains all required fields and the data structure is correct before updates are made.
5. **Testing**: Integrate automated tests to verify that updated files (`Modlist.html`, `README.md`, `manifest.json`) are correctly updated without introducing syntax errors.
