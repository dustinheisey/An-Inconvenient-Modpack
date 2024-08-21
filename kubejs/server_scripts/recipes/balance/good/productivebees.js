onEvent('recipes', event => {
  setBalanceRecipes({
    shapeless: () => {
      ['productivebees:bee_nest_helmet'].forEach(id => event.remove({id: id}));

      event.shapeless('productivebees:bee_nest_diamond_helmet', [
        'minecraft:bee_nest',
        'botania:manasteel_helmet',
      ]).id('inconvenient:bee_nest_manasteel_helmet');
    },
    bee_breeding: () => {},
    bee_fishing: () => {
      event.remove({type: 'productivebees:bee_fishing'});
    },
    bee_spawning: () => {
      event.remove({type: 'productivebees:bee_spawning'});
    },
    block_conversion: () => {},
  });
});
