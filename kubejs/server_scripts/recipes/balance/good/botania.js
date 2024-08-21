onEvent('recipes', event => {
  setBalanceRecipes({
    elven_trade: () => {
    },
    mana_pool: () => {
      event.custom({
        type: 'botania:mana_infusion',
        input: {
          item: 'minecraft:book',
        },
        output: {
          item: 'botania:lexicon',
        },
        mana: 500,
      }).id('inconvenient:lexicon');
    },
    orechid_ignem: () => {},
    orechid: () => {
    },
    petals: () => {
    },
    pure_daisy: () => {
    },
    runic_altar: () => {
    },
    terra_plate: () => {},
  });
});
