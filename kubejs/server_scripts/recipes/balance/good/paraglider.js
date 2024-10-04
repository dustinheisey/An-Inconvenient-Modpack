onEvent('recipes', (event) => {
  setBalanceRecipes({
    shaped: () => {
      event.shapeless('paraglider:rito_goddess_statue', [
        '#minecraft:flowers',
        '#paraglider:statues'
      ]);
    }
  });
});
