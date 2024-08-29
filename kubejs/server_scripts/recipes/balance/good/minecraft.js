onEvent('recipes', event => {
  setBalanceRecipes({
    blasting: () => {},
    campfire_cooking: () => {
      [
        'croptopia:campfire_caramel',
        'croptopia:campfire_molasses',
        'croptopia:campfire_popcorn',
        'farmersdelight:beef_patty_from_campfire_cooking',
        'croptopia:campfire_toast',
        'charcoal_pit:torches',
      ].forEach(id => event.remove({id: id}));
    },
    smelting: () => {
      event.remove({
        output: [
          '#forge:ingots',
          '#forge:gems',
          '#forge:nuggets',
          '#forge:glass',
          '#forge:glass_panes',
          'minecraft:blue_glazed_terracotta',
          'minecraft:lime_glazed_terracotta',
          'minecraft:pink_glazed_terracotta',
          'minecraft:red_glazed_terracotta',
          'minecraft:white_glazed_terracotta',
          'minecraft:cyan_glazed_terracotta',
          'minecraft:magenta_glazed_terracotta',
          'minecraft:black_glazed_terracotta',
          'minecraft:green_glazed_terracotta',
          'minecraft:orange_glazed_terracotta',
          'minecraft:gray_glazed_terracotta',
          'minecraft:yellow_glazed_terracotta',
          'minecraft:brown_glazed_terracotta',
          'minecraft:light_gray_glazed_terracotta',
          'minecraft:light_blue_glazed_terracotta',
          'minecraft:purple_glazed_terracotta',
        ],
        type: 'minecraft:smelting',
      });
    },
    smithing: () => {},
    smoking: () => {
      [
        'croptopia:popcorn_from_smoking_corn',
        'croptopia:caramel_from_smoking_sugar',
        'croptopia:toast_from_smoking_bread',
        'croptopia:molasses_from_smoking_sugar_cane',
        'croptopia:salt_from_smoking_water_bottle',
      ].forEach(id => event.remove({id: id}));
    },
  });
});
