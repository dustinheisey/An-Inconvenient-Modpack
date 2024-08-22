onEvent('recipes', event => {
  setBalanceRecipes({
    basic_table: () => {},
    advanced_table: () => {},
    elite_table: () => {
      ['extendedcrafting:crystaltine_ingot'].forEach(id =>
        event.remove({id: id})
      );
    },
    ultimate_table: () => {},
  });
});
