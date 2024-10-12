onEvent('recipes', (event) => {
  setBalanceRecipes({
    shapeless: () => {
      ['paragon_textiles:silk_wisps'].forEach((id) => event.remove({ id: id }));
      event.shapeless('3x paragon_textiles:silk_wisps', [
        'blue_skies:spider_webbing'
      ]);
    }
  });
});
