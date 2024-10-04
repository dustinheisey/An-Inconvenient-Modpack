# Testing Workflow for Minecraft Modpack

This document describes the testing process for the Minecraft modpack to ensure the quality and consistency of the final release. The goal is to systematically validate different aspects of the modpack, ranging from configuration settings to world generation and custom features.

## Testing Checklist

### Config

- **Incontrol Spawning**: Verify that all incontrol spawning configurations are working as intended.
- **Tips Loading**: Ensure that all tips are correctly loaded in the game.

### Advancements

- **Advancement Order**: Verify that the order of advancements looks aesthetic on each page.
- **Visibility**: Ensure that all advancements are correctly displayed or hidden based on the requirements.
- **Titles & Descriptions**: Validate that all advancements have the correct title and description.
- **Requirements & Rewards**: Confirm that all advancements have the correct requirements and provide the correct rewards.
- **Restrictions**: Check that utility advancements correctly restrict things like gamestage, dimension travel, end eyes, and patchouli pages.
- **Spirit Orbs**: Verify that the correct number of spirit orbs are dropped from advancements.

### Loot

- **Log Errors**: Ensure there are no errors related to loot generation in the game log.
- **Block Loot**: Confirm that all block loot is correctly dropping and removed where required.
- **Chest Loot**: Validate that chest loot is correctly showing up, and removed where necessary.
- **Mob Loot**: Ensure all mob loot is correctly dropping or removed as required.
- **Lost Pages**: Check that lost pages are correctly loading in chests.

### Recipes

- **Chapter Recipes**: Verify that all recipes from chapters 1 through 7 (including sub-chapters) are correct.
- **Special Recipes**: Ensure that armor, eye, gateways, lost pages, and gateways-related recipes are correct.

### Staging

- **Stages**: Verify the correctness of mod, tag, recipe, override, item, dimension, and armor stages.
- **Collection Staging**: Ensure all collections are staged correctly and there are no duplicate stages for items.

### Tags

- **Biome Tags**: Validate that biome tags are correctly applied.
- **Collection Tags**: Ensure all collection tags are correctly working and all tag removals are functioning as expected.
- **Other Tags**: Verify miscellaneous tags like wheat growing and Twilight Forest portal are working correctly.
- **Mining Level Tags**: Verify that all mining level tags are correctly applied.
- **Block Tag Changes**: Ensure all block tag changes are being applied.
- **Collection Tag Additions**: Confirm that all collection tag additions are showing as expected.
- **Item Tag Changes**: Validate that all item tag removals, additions, and replacements are working as intended.
- **Structure Tags**: Ensure that all structure tags are functioning properly.

### Armor

- **Protection Values**: Ensure all armor items have the correct protection values.

### Custom Registration

- **Fluids & Items**: Confirm that all custom fluids and items are showing up correctly in the game and functioning as intended.

### Worldgen

- **Removed Features**: Validate that all removed features are correctly removed from world generation.

### Patchouli

- **Categories & Entries**: Ensure that all Patchouli categories and entries are correctly loaded.
- **Locking/Unlocking**: Validate that entries are correctly locked and unlocked.
- **Content**: Verify that lost pages, journal entries, Strange Places, Nightmares, and Handbook are correct.

### Code Quality

- **Dead Code**: Remove all dead code from the scripts.
- **Testing**: Ensure that all code tests are passing.
- **Documentation**: Document all new mechanics and features thoroughly.
- **Checklist Review**: Confirm that the checklist has been run through.

### Client Scripts

- **JEI Visibility**: Ensure that all items that should be hidden in JEI are hidden and all items that should be visible are showing.
- **Recipe Categories**: Confirm that all recipe categories that should be hidden in JEI are correctly hidden.
- **Splash Screen**: Verify that the splash screen looks as intended.
- **Item Unification**: Ensure item unification is working correctly, including unified items showing up and unified recipes being cleaned up.

### Chapters

- **Chapter JEI Validation**: Verify that JEI integration is correct for each chapter:
  - Chapter 1
  - Chapter 2
  - Chapter 3
  - Chapter 4
  - Chapter 5
  - Chapter 5.1
  - Chapter 5.2
  - Chapter 6
  - Chapter 7
  - Chapter 7.1
  - Chapter 7.2

## Recommendations for Automation

1. **Automated Unit Tests**: Create unit tests for validating critical functionality like recipes, stages, and loot tables. Consider using a testing framework for Minecraft mods like [TestUtils](https://github.com/AuthorsCraft/TestUtils).

2. **Integration Testing**: Automate game environment setup with tools like [Mineunit](https://github.com/AuthorsCraft/Mineunit) to test in-game features like advancements, loot, and world generation.

3. **Recipe Validation Script**: Develop a script that automatically parses all recipes and checks them for correctness, including stages and dependencies.

4. **World Generation Validation**: Use world generation preview tools to validate that worldgen features are correctly spawning, and removed features are not appearing.

5. **Patchouli Entry Tests**: Automate checks to verify that all Patchouli entries load without errors. Scripts could iterate over entries to ensure they exist and meet requirements.

6. **GitHub Actions Integration**: Integrate automated tests into your GitHub Actions workflow so that every commit triggers a series of automated tests to catch errors early.

7. **Log File Analysis**: Automate log analysis to check for errors related to loot generation, worldgen, and custom item registration.

8. **Changelog Consistency**: Automatically generate a changelog that includes a summary of features, fixes, and new additions to ensure the updates are communicated effectively.

9. **Visual Validation Tools**: Use visual diff tools to compare in-game screenshots of features like advancements, loot tables, and worldgen changes to spot discrepancies.

10. **Pre-Release Testing Server**: Set up a testing server that runs the latest build. Use automated scripts to run through common actions to validate that all major features are working as intended.

11. **Checklists Automation**: Convert the manual checklist into an automated testing suite, using assertions and conditions to validate different features. This could be broken into smaller Python or Java-based test scripts.

12. **Error Notification System**: Implement a notification system that alerts you via Discord or email whenever automated tests fail or logs contain critical errors.
