# Git Workflow and Pipeline

This document outlines the Git workflow and associated automated tasks for managing the development, release, and maintenance of the Minecraft modpack. The workflow is designed to ensure stability in the `main` branch while providing flexibility for ongoing development in feature, fix, and other specialized branches.

## Workflow Overview

### 1. Main Branch

- **Purpose**: This branch contains the stable, production-ready version of the modpack.
- **Merge Into**: The `main` branch is the final destination for all release branches.
- **Automation on Merge**:
  - **Trigger Production Builds**: Automatically build a stable version of the modpack.
  - **Generate Changelog**: Generate a release changelog using conventional commits.
  - **Upload Modpack to CurseForge**: Upload the final modpack to CurseForge.
  - **Generate Server Files**: Automatically generate server-specific files for distribution.
  - **Deploy Artifacts**: Deploy necessary release artifacts.
  - **Post-Release Announcement**: Announce the release on community channels like Discord, Reddit, etc.

---

### 2. Develop Branch

- **Purpose**: This is the central branch for ongoing development. It integrates features, fixes, and other tasks.
- **Merge Into**: Merges into the `release` branch for final preparation.
- **Merge From**: Feature (`feat`), fix (`fix`), chore (`chore`), and tech (`tech`) branches.
- **Automation on Merge**:
  - **Run Automated Tests**: Continuous Integration (CI) tests, including unit and integration tests.
  - **Generate Pre-Release Builds**: Create a build for internal testing purposes.
  - **Create Pre-Release Changelog**: Optionally generate a pre-release changelog.

---

### 3. Release Branch (`release/vX.X.X`)

- **Purpose**: The release branch serves as the final staging area before a new version is published. Created off `develop` and used to finalize versions.
- **Merge Into**: Merges into both `main` and `develop` after a release.
- **Merge From**: Merges from `develop` when preparing a release.
- **Automation on Merge**:
  - **Trigger Full Release Builds**: Generate a full release build of the modpack.
  - **Generate Release Changelog**: Use conventional commits to generate the final release changelog.
  - **Upload to CurseForge and Modrinth**: Publish the new version to both CurseForge and Modrinth.
  - **Generate and Upload Server Files**: Create server files and upload them along with the modpack.
  - **Tag Release Version**: Tag the commit with the release version.

---

### 4. Feature Branch (`feat/feature-name`)

- **Purpose**: Used for the development of new features.
- **Merge Into**: Merges into `develop` after the feature is complete and tested.
- **Automation on Merge**:
  - **Run Unit and Integration Tests**: Validate that the new feature does not break existing functionality.
  - **Generate Documentation**: Automatically generate or update documentation related to the new feature.

---

### 5. Fix Branch (`fix/fix-name`)

- **Purpose**: Dedicated to bug fixes identified during development or testing.
- **Merge Into**: Merges into `develop`.
- **Automation on Merge**:
  - **Run Regression Tests**: Ensure that bug fixes have not caused regressions in existing functionality.
  - **Close GitHub Issues**: Automatically close GitHub issues related to the fixed bug.

---

### 6. Chore Branch (`chore/chore-name`)

- **Purpose**: Handles non-feature changes like refactoring, dependency updates, or maintenance tasks.
- **Merge Into**: Merges into `develop`.
- **Automation on Merge**:
  - **Run Static Code Analysis**: Use static analysis tools to maintain code quality.
  - **Update Dependencies and Reports**: Ensure dependencies are up-to-date and generate reports.

---

### 7. Tech Branch (`tech/tech-name`)

- **Purpose**: Used for experimental or technical upgrades, such as infrastructure updates, performance optimization, or large refactors.
- **Merge Into**: Merges into `develop`.
- **Automation on Merge**:
  - **Run Integration and Stress Tests**: Validate that technical upgrades work seamlessly with the existing codebase.
  - **Generate Performance Reports**: Create reports to track performance changes.

---

## Automated Tasks

### 1. On `main` Merge (Release)

- **Generate Full Changelog**: Create a detailed changelog for the release.
- **Upload to CurseForge/Modrinth**: Publish the latest version to popular modding platforms.
- **Generate Server Files**: Create server-side configuration and setup files.
- **Post-Release Announcement**: Post updates on Discord, Reddit, and social media channels.

### 2. On `develop` Merge (Feature/Tech/Fix/Chore)

- **Run Full CI Tests**: Execute unit, integration, and regression tests.
- **Generate Pre-Release Build**: Prepare a build that can be tested internally.
- **Optional Pre-Release Changelog**: Create a changelog for testing versions.

---

## Workflow Summary

1. **Development Cycle**: All new features, bug fixes, technical upgrades, and maintenance tasks are integrated into the `develop` branch.
2. **Release Preparation**: A release branch (`release/vX.X.X`) is created from `develop` to finalize a new version.
3. **Production Release**: After final testing and approval, the `release` branch is merged into `main`, triggering changelog generation, modpack uploads, and server file creation.
4. **Reintegration**: After merging into `main`, the `release` branch is also merged back into `develop` to ensure ongoing development reflects the latest changes.

## Commit Standards: Conventional Commits

All commits must follow the **conventional commit** format to maintain consistency and enable automated changelog generation.

### Commit Format

- **Format**: `type: description`
- **Types**:
  - **`chore`**: Updating a mod or performing maintenance tasks.
  - **`tech`**: Changes related to development processes and workflow.
  - **`docs`**: Updates to the wiki or project documentation.
  - **`feat`**: New feature introduction.
  - **`fix`**: Bugfix.

Using conventional commits ensures that all changes are documented consistently, making it easy to generate changelogs and understand the nature of each change.
