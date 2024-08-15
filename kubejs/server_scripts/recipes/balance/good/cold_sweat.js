onEvent('recipes', event => {
  setBalanceRecipes({
    shaped: () => {
      ['cold_sweat:insul_minecart_raw'].forEach(id => event.remove({id: id}));
    },
  });
});
