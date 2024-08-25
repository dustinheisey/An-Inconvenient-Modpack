onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        {id: 'gateways', recipe: () => {}, children: []},
        {
          id: 'guidebooks',
          recipe: () => {
            ['croptopia:documentation', 'industrialforegoing:manual'].forEach(
              id => event.remove({id: id})
            );
            // croptopia guide
            event
              .shapeless('croptopia:guide', [
                'minecraft:book',
                'croptopia:knife',
              ])
              .id('inconvenient:shapeless_croptopia_guide');

            // industrial foregoing manual
            event
              .shapeless(
                Item.of(
                  'patchouli:guide_book',
                  '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'
                ),
                ['minecraft:book', 'industrialforegoing:dryrubber']
              )
              .id('inconvenient:shapeless_industrial_foregoing');

            // big book of bees

            // lexica botanica
          },
        },
        {
          id: 'end_eyes',
          recipe: () => {
            event
              .shaped('endrem:cursed_eye', ['aba', 'bcb', 'aba'], {
                a: 'naturesaura:tainted_gold',
                b: 'botania:pixie_dust',
                c: 'farmersdelight:hamburger',
              })
              .stage('eye_cursed')
              .id('inconvenient:shaped_cursed_eye');
          },
        },
        {
          id: 'lost_stories',
          recipe: () => {
            event
              .shaped(`kubejs:bumblezone_lost_story`, ['abb', 'bcc', 'bcc'], {
                a: 'paragon_textiles:silk',
                b: 'minecraft:leather',
                c: `kubejs:bumblezone_lost_page`,
              })
              .id('inconvenient:shaped_bumblezone_lost_story');
          },
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'botania:manasteel_helmet',
              'botania:manasteel_chestplate',
              'botania:manasteel_leggings',
              'botania:manasteel_boots',
              'botania:elementium_helmet',
              'botania:elementium_chestplate',
              'botania:elementium_leggings',
              'botania:elementium_boots',
              'botania:terrasteel_helmet',
              'botania:terrasteel_chestplate',
              'botania:terrasteel_leggings',
              'botania:terrasteel_boots',
            ].forEach(id => event.remove({id: id}));
            stageArmors(event, [
              {
                tier: 'botania:manasteel',
                previousTier: 'hem:steampunkoutfit',
                input: 'botania:manasteel_ingot',
                stage: 'chapter_5_1',
                master: 'manasteel',
              },
              {
                tier: 'botania:terrasteel',
                previousTier: 'botania:manasteel',
                input: 'botania:terrasteel_ingot',
                stage: 'chapter_5_1',
                master: 'terrasteel',
              },
              {
                tier: 'botania:elementium',
                previousTier: 'botania:terrasteel',
                input: 'botania:elementium_ingot',
                stage: 'chapter_5_1',
                master: 'elementium',
              },
            ]);
          },
        },
      ],
    },
    {
      id: 'petals',
      recipe: () => {
        [
          'botania:petal_apothecary/pure_daisy',
          'botania:fertilizer_dye',
          'botania:petal_apothecary/marimorphosis',
          'botania:petal_apothecary/kekimurus',
          'botania:petal_apothecary/gourmaryllis',
          'botania:petal_apothecary/spectrolus',
          'botania:elven_trade/pixie_dust',
        ].forEach(id => event.remove({id: id}));

        event
          .custom({
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
          })
          .id('inconvenient:petal_apothecary_kekimurus');
        event
          .custom({
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
          })
          .id('inconvenient:petal_apothecary_gourmaryllis');
        event
          .custom({
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
          })
          .id('inconvenient:petal_apothecary_spectrolus');
        event
          .custom({
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
          })
          .id('inconvenient:petal_apothecary_marimorphosis');
      },
    },
  ]);

  event
    .custom({
      type: 'bloodmagic:altar',
      output: {
        item: 'bloodmagic:archmagebloodorb',
      },
      input: {
        item: 'bloodmagic:dungeon_metal',
      },
      altarSyphon: 10000000,
      upgradeLevel: 4,
      consumptionRate: 1500,
      drainRate: 1500,
    })
    .id('inconvenient:altar_archmagebloodorb');
});
