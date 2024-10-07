onEvent('recipes', (event) => {
  setBalanceRecipes({
    shapeless: () => {
      ['farmersdelight:yellow_canvas_sign'].forEach((id) =>
        event.remove({ id: id })
      );
      event.shapeless('farmersdelight:yellow_canvas_sign', [
        '#farmersdelight:canvas_signs',
        'minecraft:yellow_dye'
      ]);
    },
    cooking_pot: () => {
      event.remove({
        output: [
          'undergarden:veiled_stew',
          'undergarden:bloody_stew',
          'undergarden:inky_stew',
          'undergarden:indigo_stew',
          'minecraft:fermented_spider_eye'
        ]
      });

      event.custom({
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'meals',
        result: {
          item: 'farmersrespite:blazing_chili',
          count: 1
        },
        ingredients: [
          { item: 'minecraft:blaze_powder' },
          { item: 'minecraft:blaze_powder' },
          { item: 'minecraft:nether_wart' },
          { item: 'minecraft:nether_wart' },
          { item: 'farmersrespite:coffee_beans' },
          { item: 'minecraft:porkchop' }
        ],
        cookingtime: 200
      });

      event.custom({
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'meals',
        result: {
          item: 'minecraft:fermented_spider_eye',
          count: 1
        },
        ingredients: [
          { item: 'minecraft:spider_eye' },
          { item: 'minecraft:sugar' },
          { item: 'undergarden:blood_mushroom' }
        ],
        cookingtime: 200
      });
      event.custom({
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'meals',
        result: {
          item: 'undergarden:veiled_stew',
          count: 1
        },
        ingredients: [
          { item: 'undergarden:veil_mushroom' },
          { item: 'undergarden:veil_mushroom' },
          { item: 'undergarden:veil_mushroom' }
        ],
        cookingtime: 200,
        container: { item: 'minecraft:bowl' }
      });
      event.custom({
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'meals',
        result: {
          item: 'undergarden:bloody_stew',
          count: 1
        },
        ingredients: [
          { item: 'undergarden:blood_mushroom' },
          { item: 'undergarden:blood_mushroom' },
          { item: 'undergarden:blood_mushroom' }
        ],
        cookingtime: 200,
        container: { item: 'minecraft:bowl' }
      });
      event.custom({
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'meals',
        result: {
          item: 'undergarden:inky_stew',
          count: 1
        },
        ingredients: [
          { item: 'undergarden:ink_mushroom' },
          { item: 'undergarden:ink_mushroom' },
          { item: 'undergarden:ink_mushroom' }
        ],
        cookingtime: 200,
        container: { item: 'minecraft:bowl' }
      });
      event.custom({
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'meals',
        result: {
          item: 'undergarden:indigo_stew',
          count: 1
        },
        ingredients: [
          { item: 'undergarden:indigo_mushroom' },
          { item: 'undergarden:indigo_mushroom' },
          { item: 'undergarden:indigo_mushroom' }
        ],
        cookingtime: 200,
        container: { item: 'minecraft:bowl' }
      });
      event.custom({
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'meals',
        result: {
          item: 'farmersdelight:dog_food',
          count: 1
        },
        ingredients: [
          {
            item: 'minecraft:rotten_flesh'
          },
          {
            item: 'minecraft:bone_meal'
          },
          {
            tag: 'farmersdelight:wolf_prey'
          },
          {
            tag: 'forge:crops/rice'
          }
        ],
        cookingtime: 200,
        container: { item: 'minecraft:bowl' }
      });
    },
    cutting_board: () => {
      event.remove({
        output: [
          'farmersdelight:cabbage_seeds',
          'minecraft:yellow_dye',
          'farmersdelight:rice',
          'minecraft:potato',
          'minecraft:purple_dye',
          'farmersdelight:tomato',
          'farmersdelight:tomato_seeds',
          'minecraft:green_dye',
          'minecraft:black_dye',
          'minecraft:light_gray_dye',
          'farmersdelight:onion',
          'minecraft:pink_dye',
          'minecraft:magenta_dye',
          'minecraft:lime_dye',
          'minecraft:orange_dye',
          'minecraft:white_dye',
          'minecraft:blue_dye',
          'minecraft:carrot',
          'minecraft:light_blue_dye',
          'minecraft:red_dye',
          'minecraft:beetroot_seeds',
          'minecraft:stripped_birch_wood',
          'minecraft:quartz',
          'minecraft:brick',
          'minecraft:jungle_planks',
          'minecraft:stripped_acacia_log',
          'minecraft:clay_ball',
          'minecraft:stripped_spruce_log',
          'minecraft:stripped_acacia_wood',
          'minecraft:acacia_planks',
          'minecraft:stripped_jungle_wood',
          'minecraft:stripped_warped_stem',
          'minecraft:spruce_planks',
          'minecraft:stripped_birch_log',
          'minecraft:iron_nugget',
          'minecraft:stripped_jungle_log',
          'minecraft:dark_oak_planks',
          'minecraft:cobblestone',
          'minecraft:stripped_dark_oak_log',
          'minecraft:cobbled_deepslate',
          'minecraft:nether_brick',
          'minecraft:stripped_warped_hyphae',
          'minecraft:oak_planks',
          'minecraft:warped_planks',
          'minecraft:stripped_oak_log',
          'minecraft:stripped_dark_oak_wood',
          'minecraft:crimson_planks',
          'minecraft:stripped_crimson_stem',
          'minecraft:birch_planks',
          'minecraft:stripped_oak_wood',
          'minecraft:leather',
          'minecraft:stripped_spruce_wood',
          'minecraft:stripped_crimson_hyphae',
          'farmersdelight:tree_bark',
          'minecraft:amethyst_shard'
        ],
        type: 'farmersdelight:cutting'
      });
    }
  });
});
