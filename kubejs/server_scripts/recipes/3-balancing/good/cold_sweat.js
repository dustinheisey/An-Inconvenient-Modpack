onEvent('recipes', event => {
  setBalanceRecipes({
    shaped: () => {
      [
        'cold_sweat:minecart_insulation',
        'cold_sweat:insul_minecart_raw',
      ].forEach(id => event.remove({id: id}));

      event
        .shaped('cold_sweat:minecart_insulation', ['a a', 'aaa'], {
          a: 'cold_sweat:fur',
        })
        .id('inconvenient:shaped_minecart_insulation');
    },
  });
});
