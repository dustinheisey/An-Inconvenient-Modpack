onEvent('recipes', event => {
  setBalanceRecipes({
    shaped: () => {
      ['totemic:totem_torch'].forEach(id => event.remove({id: id}));

      event
        .shaped('2x totemic:totem_torch', ['aba', 'aca', ' a '], {
          a: '#forge:rods/wooden',
          b: 'realistictorches:lit_torch',
          c: '#minecraft:logs',
        })
        .id('inconvenient:totem_torch');
    },
  });
});
