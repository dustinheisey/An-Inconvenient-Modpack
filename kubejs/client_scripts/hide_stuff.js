onEvent('jei.remove.categories', event => {
  global.filteredRecipeTypes.forEach(category => {
    event.remove(category);
  });
});

onEvent('jei.hide.items', event => {
  global.filteredItems.forEach(item => {
    event.hide(item);
  });

  [
    'charcoal_pit:alcohol_bottle',
    'blue_skies:life_arc',
    'blue_skies:aquatic_arc',
    'minecraft:structure_block',
    'blue_skies:runic_arc',
    'modonomicon:modonomicon',
  ].forEach(item => {
    event.hide(item.of(item).ignoreNBT());
  });
});
