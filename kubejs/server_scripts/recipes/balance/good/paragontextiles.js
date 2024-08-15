onEvent('recipes', event => {
  setBalanceRecipes({
    shapeless: () => {
      ['paragon_textiles:silk_wisps'].forEach(id => event.remove({id: id}));
      event.shapeless('3x paragon_textiles:silk_wisps', [
        'blue_skies:spider_webbing',
      ]);

      colors.forEach(color => {
        if (color !== 'red') {
          [`paragon_textiles:fabric_${color}`].forEach(id =>
            event.remove({id: id})
          );

          if (color !== 'red' && color !== 'white') {
            event.shapeless(`paragon_textiles:fabric_${color}`, [
              `minecraft:${color}_dye`,
              'paragon_textiles:fabric_plain',
            ]);
          }
        }
      });
    },
  });
});
