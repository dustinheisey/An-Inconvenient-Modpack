settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;
settings.logOverrides = false;

onEvent('lootjs', (event) => {
  event.enableLogging();
});
