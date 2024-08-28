onEvent('recipes', event => {
  setBalanceRecipes({
    shaped: () => {},
    severing: () => {},
    melting: () => {},
    casts: () => {},
    alloy: () => {},
    casting_basin: () => {
      ['tconstruct:smeltery/casting/obsidian/chest'].forEach(id =>
        event.remove({id: id})
      );
    },
    casting_table: () => {},
  });
});
