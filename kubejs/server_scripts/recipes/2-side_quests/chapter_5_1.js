onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        {
          id: 'gateways',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                duration: 60,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/custom_ritual',
                },
                activation_item: {item: 'blue_skies:soul_fragment'},
                pentacle_id: 'occultism:craft_marid',
                ingredients: [
                  {
                    item: 'hem:copparite',
                  },
                  {
                    item: 'rankine:vulcanized_rubber',
                  },
                  {
                    item: 'hem:lush_flower_1',
                  },
                  {
                    item: 'hem:shotgun_shell',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    item: 'hem:copparite',
                  },
                  {
                    item: 'rankine:vulcanized_rubber',
                  },
                  {
                    item: 'hem:lush_flower_1',
                  },
                  {
                    item: 'hem:shotgun_shell',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    item: 'rankine:steel_ingot',
                  },
                  {
                    item: 'rankine:steel_ingot',
                  },
                ],
                result: {
                  item: 'gateways:gate_pearl',
                  nbt: '{gateway:"gateways:small_bumblezone_gateway"}',
                },
              })
              .id('inconvenient:ritual_bumblezone_gateway');
          },
          children: [],
        },
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
        {
          id: 'bricks',
          recipe: () => {
            [
              'architects_palette:tuff_bricks',
              'botania:metamorphic_forest_bricks',
              'botania:metamorphic_plains_bricks',
              'botania:metamorphic_mountain_bricks',
              'botania:metamorphic_fungal_bricks',
              'botania:metamorphic_swamp_bricks',
              'botania:metamorphic_desert_bricks',
              'botania:metamorphic_taiga_bricks',
              'botania:metamorphic_mesa_bricks',
            ].forEach(id => event.remove({id: id}));
            overrideBricksRecipes('chapter_5_1', event, [
              {
                output: 'architects_palette:tuff_bricks',
                input: 'minecraft:tuff',
              },
              {
                output: 'botania:metamorphic_forest_bricks',
                input: 'botania:metamorphic_forest_stone',
              },
              {
                output: 'botania:metamorphic_plains_bricks',
                input: 'botania:metamorphic_plains_stone',
              },
              {
                output: 'botania:metamorphic_mountain_bricks',
                input: 'botania:metamorphic_mountain_stone',
              },
              {
                output: 'botania:metamorphic_fungal_bricks',
                input: 'botania:metamorphic_fungal_stone',
              },
              {
                output: 'botania:metamorphic_swamp_bricks',
                input: 'botania:metamorphic_swamp_stone',
              },
              {
                output: 'botania:metamorphic_desert_bricks',
                input: 'botania:metamorphic_desert_stone',
              },
              {
                output: 'botania:metamorphic_taiga_bricks',
                input: 'botania:metamorphic_taiga_stone',
              },
              {
                output: 'botania:metamorphic_mesa_bricks',
                input: 'botania:metamorphic_mesa_stone',
              },
            ]);
          },
        },
      ],
    },
    {
      id: 'bumblezone_crushing',
      recipe: () => {
        event.remove({type: 'rankine:crushing'});

        setCrushingRecipes(event, {});
      },
    },
    {
      id: 'bakery',
      recipe: () => {
        [
          'createaddition:compacting/cake_base',
          'rankine:mixing/pancake_batter_mixing',
          'create_central_kitchen:compacting/cookie',
          'minecraft:cookie',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'create:sequenced_assembly',
            ingredient: {item: 'rankine:pancake'},
            transitionalItem: {item: 'rankine:pancake'},
            sequence: [
              {
                type: 'create:deploying',
                ingredients: [
                  {item: 'rankine:pancake'},
                  {item: 'rankine:pancake'},
                ],
                results: [{item: 'rankine:pancake'}],
              },
              {
                type: 'create:deploying',
                ingredients: [
                  {item: 'rankine:pancake'},
                  {item: 'rankine:pancake'},
                ],
                results: [{item: 'rankine:pancake'}],
              },
              {
                type: 'create:deploying',
                ingredients: [
                  {item: 'rankine:pancake'},
                  {item: 'rankine:pancake'},
                ],
                results: [{item: 'rankine:pancake'}],
              },
              {
                type: 'create:deploying',
                ingredients: [
                  {item: 'rankine:pancake'},
                  {item: 'rankine:pancake'},
                ],
                results: [{item: 'rankine:pancake'}],
              },
            ],
            results: [{item: 'rankine:pancake_breakfast'}],
            loops: 1,
          })
          .id('inconvenient:sequenced_assembly_pancake_breakfast');
        [
          'bucketlib:create/dough',
          'create:crafting/appliances/dough',
          'create_central_kitchen:crafting/dough_4',
          'create_central_kitchen:crafting/dough_3',
          'create_central_kitchen:crafting/dough_2',
          'create_central_kitchen:crafting/dough_1',
          'create:splashing/wheat_flour',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'create:mixing',
            results: [{count: 8, item: 'minecraft:cookie'}],
            ingredients: [
              {item: 'create:dough'},
              {item: 'minecraft:cocoa_beans'},
            ],
            heatRequirement: 'heated',
          })
          .id('inconvenient:mixing_cookie');
        event
          .custom({
            type: 'create:mixing',
            results: [{item: 'rankine:maple_syrup'}],
            ingredients: [
              {fluid: 'rankine:maple_sap', amount: 1000},
              {item: 'minecraft:glass_bottle'},
            ],
            heatRequirement: 'heated',
          })
          .id('inconvenient:mixing_maple_syrup');
        event
          .custom({
            type: 'create:mixing',
            results: [{item: 'rankine:pancake_batter'}],
            ingredients: [
              {fluid: 'minecraft:milk', amount: 1000},
              {item: 'minecraft:sugar'},
              {tag: 'forge:flour'},
              {item: 'minecraft:egg'},
              {tag: 'forge:salt'},
            ],
          })
          .id('inconvenient:mixing_pancake_batter');
        event
          .custom({
            type: 'create:compacting',
            ingredients: [
              {tag: 'forge:eggs'},
              {item: 'minecraft:sugar', count: 2},
              {item: 'create:dough'},
              {fluid: 'minecraft:milk', amount: 1000},
            ],
            results: [{item: 'createaddition:cake_base'}],
          })
          .id('inconvenient:compacting_cake_base');
      },
    },
    {
      id: 'mechanical_farming',
      recipe: () => {
        [
          'create:crafting/kinetics/mechanical_harvester',
          'create:crafting/kinetics/mechanical_plough',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'create:mechanical_plough'},
            pattern: ['aaa', 'bbb', ' c '],
            key: {
              a: 'naturesaura:sky_ingot',
              b: 'create:andesite_alloy',
              c: 'create:andesite_casing',
            },
          })
          .id('inconvenient:mechanical_mechanical_plough');
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'create:mechanical_harvester'},
            pattern: ['bab', 'bab', ' c '],
            key: {
              a: 'naturesaura:sky_ingot',
              b: 'create:andesite_alloy',
              c: 'create:andesite_casing',
            },
          })
          .id('inconvenient:mechanical_mechanical_harvester');
      },
    },
    {
      id: 'mana_tablet',
      recipe: () => {
        ['botania:mana_tablet'].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'botania:mana_tablet'},
            pattern: ['aaa', 'aba', 'aaa'],
            key: {
              a: 'botania:livingrock',
              b: 'botania:mana_pearl',
            },
          })
          .id('inconvenient:mechanical_mana_tablet');
      },
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
});

onEvent('server.datapack.high_priority', event => {
  // Bumblezone
  registerGateways(event, {
    id: 'bumblezone',
    color: '#d1a054',
    dimension: 'the Bumblezone',
    waves: [
      {
        type: 'mob',
        entities: ['minecraft:bee'],
      },
    ],
    restorations: [{id: 'minecraft:bee', name: 'Bee'}],
    relics: [
      'relics:leather_belt',
      'relics:wool_mitten',
      'relics:infinity_ham',
      'artifacts:vampiric_glove',
      'artifacts:bunny_hoppers',
      'artifacts:whoopee_cushion',
    ],
    rewards: [{id: 'kubejs:bumblezone_token', count: 1}],
  });
});
