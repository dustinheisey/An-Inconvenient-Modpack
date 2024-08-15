onEvent('recipes', event => {
  setBalanceRecipes({
    elven_trade: () => {
      event.remove({
        output: ['botania:pixie_dust'],
        type: 'botania:elven_trade',
      });
    },
    mana_pool: () => {
      event.remove({
        output: ['minecraft:ender_pearl', 'minecraft:tuff', 'botania:lexicon'],
        type: 'botania:mana_infusion',
      });
      event.remove({
        output: Item.of(
          'productivebees:spawn_egg_configurable_bee',
          '{EntityTag:{type:"productivebees:manasteel"}}'
        ),
      });

      event.custom({
        type: 'botania:mana_infusion',
        input: {
          type: 'forge:nbt',
          item: 'productivebees:spawn_egg_configurable_bee',
          nbt: '{EntityTag:{type:"productivebees:rose_gold"}}',
        },
        output: {
          type: 'forge:nbt',
          item: 'productivebees:spawn_egg_configurable_bee',
          nbt: '{EntityTag:{type:"productivebees:manasteel"}}',
        },
        mana: 10000,
      });

      event.custom({
        type: 'botania:mana_infusion',
        input: {
          item: 'minecraft:book',
        },
        output: {
          item: 'botania:lexicon',
        },
        mana: 500,
      });
    },
    orechid_ignem: () => {},
    orechid: () => {
      event.remove({
        output: [
          '#forge:ores/emerald',
          '#forge:ores/copper',
          '#forge:ores/coal',
          '#forge:ores/diamond',
          '#forge:ores/gold',
          '#forge:ores/redstone',
          '#forge:ores/lapis',
          // "#forge:ores/iron",
        ],
        type: 'botania:orechid',
      });
    },
    petals: () => {
      event.remove({
        output: [
          'botania:pure_daisy',
          'botania:kekimurus',
          'botania:gourmaryllis',
          'botania:spectrolus',
          'botania:marimorphosis',
          'botania:fertilizer',
        ],
      });

      event.custom({
        type: 'botania:petal_apothecary',
        output: {item: 'botania:kekimurus'},
        ingredients: [
          {item: 'botania:white_petal'},
          {item: 'botania:white_petal'},
          {item: 'botania:orange_petal'},
          {item: 'botania:orange_petal'},
          {item: 'botania:brown_petal'},
          {item: 'botania:brown_petal'},
          {item: 'botania:pixie_dust'},
          {item: 'botania:rune_pride'},
          {item: 'botania:rune_lust'},
        ],
        global: true,
      });
      event.custom({
        type: 'botania:petal_apothecary',
        output: {item: 'botania:gourmaryllis'},
        ingredients: [
          {item: 'botania:light_gray_petal'},
          {item: 'botania:light_gray_petal'},
          {item: 'botania:yellow_petal'},
          {item: 'botania:yellow_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:rune_greed'},
          {item: 'botania:rune_wrath'},
        ],
        global: true,
      });
      event.custom({
        type: 'botania:petal_apothecary',
        output: {item: 'botania:spectrolus'},
        ingredients: [
          {item: 'botania:white_petal'},
          {item: 'botania:white_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:green_petal'},
          {item: 'botania:green_petal'},
          {item: 'botania:blue_petal'},
          {item: 'botania:blue_petal'},
          {item: 'botania:pixie_dust'},
          {item: 'botania:rune_gluttony'},
          {item: 'botania:rune_sloth'},
        ],
        global: true,
      });
      event.custom({
        type: 'botania:petal_apothecary',
        output: {item: 'botania:marimorphosis'},
        ingredients: [
          {item: 'botania:gray_petal'},
          {item: 'botania:yellow_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:green_petal'},
          {item: 'botania:redstone_root'},
          {item: 'botania:rune_pride'},
        ],
        global: true,
      });
    },
    pure_daisy: () => {
      event.remove({
        output: ['botania:livingrock'],
        type: 'botania:pure_daisy',
      });
    },
    runic_altar: () => {
      event.remove({output: [], type: 'botania:runic_altar'});
    },
    terra_plate: () => {},
  });
});
