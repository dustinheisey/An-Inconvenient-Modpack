onEvent('recipes', event => {
  setBalanceRecipes({
    shapeless: () => {
      ['farmersdelight:yellow_canvas_sign'].forEach(id =>
        event.remove({id: id})
      );
      event
        .shapeless('farmersdelight:yellow_canvas_sign', [
          '#farmersdelight:canvas_signs',
          'minecraft:yellow_dye',
        ])
        .id('inconvenient:yellow_canvas_sign');
    },
    cooking_pot: () => {
      [
        'undergarden:veiled_stew',
        'undergarden:indigo_stew',
        'undergarden:inky_stew',
        'undergarden:bloody_stew',
        'minecraft:fermented_spider_eye',
      ].forEach(id => event.remove({id: id}));

      event
        .custom({
          type: 'farmersdelight:cooking',
          recipe_book_tab: 'meals',
          result: {
            item: 'minecraft:fermented_spider_eye',
            count: 1,
          },
          ingredients: [
            {item: 'minecraft:spider_eye'},
            {item: 'minecraft:sugar'},
            {item: 'undergarden:blood_mushroom'},
          ],
          cookingtime: 200,
        })
        .id('inconvenient:fermented_spider_eye');
    },
    cutting_board: () => {
      [
        'farmersdelight:cutting_board',
        'undergardendelight:cutting/knife/blood_mushroom',
        'farmersdelight:cutting/azure_bluet',
        'farmersdelight:cutting/pink_tulip',
        'farmersdelight:cutting/ink_sac',
        'undergardendelight:cutting/knife/veil_mushroom',
        'farmersdelight:cutting/allium',
        'undergardendelight:cutting/knife/blood_mushroom_globule',
        'farmersdelight:cutting/beef',
        'undergardendelight:cutting/knife/ink_mushroom',
        'farmersdelight:cutting/blue_orchid',
        'farmersdelight:cutting/lily_of_the_valley',
        'farmersdelight:cutting/cornflower',
        'farmersdelight:cutting/dandelion',
        'farmersdelight:cutting/poppy',
        'undergardendelight:cutting/knife/indigo_mushroom',
        'farmersdelight:cutting/red_tulip',
        'farmersdelight:cutting/white_tulip',
        'farmersdelight:cutting/orange_tulip',
        'undergardendelight:cutting/knife/mogmoss',
        'farmersdelight:cutting/oxeye_daisy',
        'farmersdelight:cutting/wither_rose',
      ].forEach(id => event.remove({id: id}));
    },
  });
});
