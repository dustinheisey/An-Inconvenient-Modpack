# Git Workflow and Pipeline

## 1. Main Branch

**Purpose:** Stable, production-ready branch.  
**Merge Into:** `main` is the final destination for release branches.  
**Automation on Merge:**

-   **Trigger Production Builds**
-   **Generate Changelog** (via conventional commits)
-   **Upload Modpack to CurseForge**
-   **Generate Server Files**
-   **Deploy Artifacts**
-   **Post-release Announcement on Discord, Reddit, etc.**

---

## 2. Develop Branch

**Purpose:** Central branch for ongoing development. All features, fixes, and chores are integrated here.  
**Merge Into:** `release` at specific points for final preparation for production.  
**Merge From:**

-   **`feat/feature-name`**
-   **`fix/fix-name`**
-   **`chore/chore-name`**
-   **`tech/tech-name`**  
    **Automation on Merge:**
-   **Run Automated Tests (CI)**
-   **Generate Pre-Release Builds for Testing**
-   **Create Pre-Release Changelog** (optional)

---

## 3. Release Branch (`release/vX.X.X`)

**Purpose:** Final staging area for new releases. This branch is created off `develop` and used to finalize new versions.  
**Merge Into:** `main` and `develop` after release.  
**Merge From:** `develop`.  
**Automation on Merge:**

-   **Trigger Full Release Builds**
-   **Generate Release Changelog** (using conventional commits)
-   **Upload to CurseForge and Modrinth**
-   **Generate and Upload Server Files**
-   **Tag Release Version**

---

## 4. Feature Branch (`feat/feature-name`)

**Purpose:** Development of new features.  
**Merge Into:** `develop` after feature completion and testing.  
**Automation on Merge:**

-   **Run Unit and Integration Tests**
-   **Generate Documentation**

---

## 5. Fix Branch (`fix/fix-name`)

**Purpose:** Fixes bugs identified during development or testing.  
**Merge Into:** `develop`.  
**Automation on Merge:**

-   **Run Regression Tests**
-   **Close GitHub Issues for Fixed Bugs**

---

## 6. Chore Branch (`chore/chore-name`)

**Purpose:** Updates for non-feature changes like refactoring, dependency updates, and clean-up tasks.  
**Merge Into:** `develop`.  
**Automation on Merge:**

-   **Run Static Code Analysis**
-   **Update Dependencies and Reports**

---

## 7. Tech Branch (`tech/tech-name`)

**Purpose:** Experimental or technical upgrades such as infrastructure updates, performance optimization, or major refactors.  
**Merge Into:** `develop`.  
**Automation on Merge:**

-   **Run Integration and Stress Tests**
-   **Generate Performance Reports**

---

## Automated Tasks:

1. **On `main` Merge (Release)**

    - **Generate Full Changelog**
    - **Upload to CurseForge/Modrinth**
    - **Generate Server Files**
    - **Post-Release Announcement (Discord, Reddit, Social Media)**

2. **On `develop` Merge (Feature/Tech/Fix/Chore)**
    - **Run Full CI Tests** (unit, integration, and regression)
    - **Generate Pre-Release Build**
    - **Optional Pre-Release Changelog**

---

## Workflow Summary:

1. **Development Cycle**: All new features, fixes, technical upgrades, and chores are merged into `develop`.
2. **Release Preparation**: At key points, a release branch (`release/vX.X.X`) is created from `develop` for finalizing a new version.
3. **Production Release**: The `release` branch is merged into `main` after testing and final approval, triggering changelog generation, modpack uploads, and server files creation.
4. **Reintegration**: After merging `release` into `main`, it is also merged back into `develop` to ensure the latest changes are reflected for ongoing development.
