onEvent('recipes', (event) => {
  setBalanceRecipes({
    warping: () => {
      event.remove({
        id: 'architects_palette:warping/unobtanium_from_netherite_ingot_warping'
      });
    }
  });
});
