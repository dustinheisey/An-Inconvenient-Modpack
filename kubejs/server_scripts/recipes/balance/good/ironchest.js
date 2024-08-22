onEvent('recipes', event => {
  setBalanceRecipes({
    shaped: () => {
      [
        'ironchest:upgrades/gold_to_diamond_chest_upgrade',
        'ironchest:chests/gold_diamond_chest',
      ].forEach(id => event.remove({id: id}));
      event
        .shaped('ironchest:diamond_chest', ['aaa', 'bcb', 'aaa'], {
          a: '#forge:glass',
          b: 'occultism:iesnium_ingot',
          c: 'ironchest:gold_chest',
        })
        .id('iconvenient:diamond_chest');
      event
        .shaped(
          'ironchest:gold_to_diamond_chest_upgrade',
          ['aaa', 'bcb', 'aaa'],
          {
            a: '#forge:glass',
            b: 'occultism:iesnium_ingot',
            c: 'minecraft:gold_ingot',
          }
        )
        .id('inconvenient:gold_to_diamond_chest_upgrade');
    },
  });
});
