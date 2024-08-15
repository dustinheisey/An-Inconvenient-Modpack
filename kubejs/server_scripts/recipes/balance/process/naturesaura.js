onEvent('recipes', event => {
  setBalanceRecipes({
    animal_spawner: () => {
      event.remove({
        input: ['minecraft:ender_pearl', 'minecraft:phantom_membrane'],
        type: 'naturesaura:animal_spawner',
      });
    },
    aura_infusion: () => {
      event.remove({
        output: [
          'minecraft:milk_bucket',
          'minecraft:egg',
          'minecraft:crimson_fungus',
          'minecraft:warped_fungus',
          'minecraft:nether_wart',
          'minecraft:chorus_flower',
          'minecraft:gilded_blackstone',
          'naturesaura:infused_stone',
        ],
        type: 'naturesaura:altar',
      });
    },
    offering: () => {},
    tree_ritual: () => {
      event.remove({
        output: [
          'naturesaura:nature_altar',
          'naturesaura:token_anger',
          'naturesaura:token_fear',
          'naturesaura:token_joy',
          'naturesaura:token_sorrow',
          'naturesaura:eye',
          'naturesaura:eye_improved',
        ],
        type: 'naturesaura:tree_ritual',
      });

      event.custom({
        type: 'naturesaura:tree_ritual',
        sapling: {item: 'hexerei:mahogany_sapling'},
        ingredients: [
          {item: 'botania:rune_gluttony'},
          {item: 'botania:rune_greed'},
          {item: 'naturesaura:sky_ingot'},
          {item: 'naturesaura:sky_ingot'},
          {item: 'naturesaura:gold_powder'},
          {item: 'naturesaura:gold_powder'},
          {item: 'naturesaura:eye'},
          {item: 'botania:rune_pride'},
        ],
        time: 250,
        output: {item: 'naturesaura:eye_improved'},
      });
    },
  });
});
