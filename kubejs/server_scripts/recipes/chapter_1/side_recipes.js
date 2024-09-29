onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      children: [
        {
          id: 'end_eyes',
          recipe: () => {
            event
              .shaped('endrem:cold_eye', ['aba', 'bcb', 'aba'], {
                a: 'rankine:refractory_brick',
                b: 'minecraft:leather',
                c: 'minecraft:iron_ingot',
              })
              .stage('eye_cold')
              .id('inconvenient:cold_eye');
          },
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'charcoal_pit:copper_boots',
              'charcoal_pit:copper_helmet',
              'charcoal_pit:copper_chestplate',
              'charcoal_pit:copper_leggings',
              'charcoal_pit:bronze_boots',
              'charcoal_pit:bronze_helmet',
              'charcoal_pit:bronze_chestplate',
              'charcoal_pit:bronze_leggings',
              'minecraft:iron_boots',
              'minecraft:iron_helmet',
              'minecraft:iron_chestplate',
              'minecraft:iron_leggings',
            ].forEach(id => event.remove({id: id}));

            stageArmors(event, [
              {
                tier: 'charcoal_pit:copper',
                input: 'minecraft:copper_ingot',
                previousTier: 'minecraft:leather',
                stage: 'chapter_1',
                master: 'copper',
              },
              {
                tier: 'charcoal_pit:bronze',
                input: 'rankine:bronze_ingot',
                previousTier: 'charcoal_pit:copper',
                stage: 'chapter_1',
                master: 'bronze',
              },
              {
                tier: 'minecraft:iron',
                input: 'minecraft:iron_ingot',
                previousTier: 'charcoal_pit:bronze',
                stage: 'chapter_1',
                master: 'iron',
              },
            ]);
          },
        },
        {
          id: 'guidebooks',
          recipe: () => {
            ['rankine:rankine_journal'].forEach(id => event.remove({id: id}));

            event
              .shaped(
                Item.of(
                  'patchouli:guide_book',
                  '{"patchouli:book":"rankine:rankine_journal"}'
                ),
                ['ab'],
                {a: 'farmersdelight:canvas', b: 'minecraft:flint'}
              )
              .stage('chapter_1');
            event
              .shaped(
                Item.of(
                  'patchouli:guide_book',
                  '{"patchouli:book":"patchouli:journal"}'
                ),
                ['a'],
                {a: 'farmersdelight:canvas'}
              )
              .stage('chapter_1');
          },
        },
      ],
    },

    {
      id: 'bricks',
      recipe: () => {
        [
          'minecraft:deepslate_bricks',
          'minecraft:polished_blackstone_bricks',
          'architects_palette:myonite_bricks',
          'architects_palette:iron_ore_bricks',
          'architects_palette:heavy_dripstone_bricks',
          'architects_palette:dripstone_bricks',
          'architects_palette:heavy_calcite_bricks',
          'charcoal_pit:sandy_bricks',
          'architects_palette:calcite_bricks',
          'architects_palette:heavy_stone_bricks',
        ].forEach(id => event.remove({id: id}));
        event
          .shaped('2x charcoal_pit:sandy_brick', ['ab', 'ba'], {
            a: 'charcoal_pit:sandy_brick_item',
            b: 'rankine:mortar',
          })
          .stage('chapter_1');
        event
          .shaped('4x architects_palette:iron_ore_bricks', ['ab', 'bc'], {
            a: 'minecraft:iron_ingot',
            b: 'rankine:mortar',
            c: 'minecraft:stone_bricks',
          })
          .stage('chapter_1');
        event
          .shaped('2x minecraft:polished_blackstone_bricks', ['ab', 'ba'], {
            a: 'minecraft:polished_blackstone',
            b: 'rankine:mortar',
          })
          .stage('chapter_1');
        event
          .shaped('2x architects_palette:heavy_stone_bricks', ['ab', 'ba'], {
            a: 'minecraft:stone_bricks',
            b: 'rankine:mortar',
          })
          .stage('chapter_1');
        event
          .shaped('2x architects_palette:myonite_bricks', ['ab', 'ba'], {
            a: 'architects_palette:myonite',
            b: 'rankine:mortar',
          })
          .stage('chapter_1');
        event
          .shaped('2x architects_palette:dripstone_bricks', ['ab', 'ba'], {
            a: 'minecraft:dripstone_block',
            b: 'rankine:mortar',
          })
          .stage('chapter_1');
        event
          .shaped(
            '2x architects_palette:heavy_dripstone_bricks',
            ['ab', 'ba'],
            {
              a: 'architects_palette:dripstone_bricks',
              b: 'rankine:mortar',
            }
          )
          .stage('chapter_1');
        event
          .shaped('2x architects_palette:heavy_calcite_bricks', ['ab', 'ba'], {
            a: 'architects_palette:calcite_bricks',
            b: 'rankine:mortar',
          })
          .stage('chapter_1');
        event
          .shaped('2x architects_palette:calcite_bricks', ['ab', 'ba'], {
            a: 'minecraft:calcite',
            b: 'rankine:mortar',
          })
          .stage('chapter_1');
        event
          .shaped('2x minecraft:deepslate_bricks', ['ab', 'ba'], {
            a: 'minecraft:polished_deepslate',
            b: 'rankine:mortar',
          })
          .stage('chapter_1');
      },
    },
    {
      id: 'brick_hopper',
      recipe: () => {
        ['brickhopper:brick_hopper'].forEach(id => event.remove({id: id}));
        event
          .shaped('brickhopper:brick_hopper', ['a a', 'aba', ' a '], {
            a: '#forge:ingots/brick',
            b: 'thirst:terracotta_bowl',
          })
          .stage('chapter_1');
      },
    },
    {
      id: 'jerky',
      recipe: () => {
        event.custom({
          type: 'hexerei:drying_rack',
          ingredients: [{item: 'minecraft:rotten_flesh'}],
          output: {item: 'kubejs:rotten_jerky'},
          dryingTimeInTicks: 5000,
        });
      },
    },
    {
      id: 'labels',
      recipe: () => {
        ['labels:label'].forEach(id => event.remove({id: id}));
        event
          .shaped('4x labels:label', ['aa', 'aa'], {
            a: 'farmersdelight:canvas',
          })
          .id('inconvenient:labels');
      },
    },
    {
      id: 'torches',
      recipe: () => {
        // ? torches don't last forever until chapter 3/4
        event.remove({id: 'realistictorches:matchbox'});
        event
          .shaped('realistictorches:matchbox', ['abb', 'ccc'], {
            a: 'farmersdelight:canvas',
            b: 'minecraft:flint',
            c: '#minecraft:wooden_slabs',
          })
          .id('inconvenient:matchbox');
      },
      children: [
        {
          id: 'canvas',
          recipe: () => {},
          children: [
            {
              id: 'straw',
              recipe: () => {
                [
                  'rankine:compat/farmersdelight/plant_fiber_campfire_cooking',
                  'rankine:compat/farmersdelight/plant_fiber_smelting',
                ].forEach(id => event.remove({id: id}));

                event.custom({
                  type: 'hexerei:drying_rack',
                  ingredients: [
                    {
                      item: 'paragon_textiles:plant_fibers',
                    },
                  ],
                  output: {
                    item: 'farmersdelight:straw',
                  },
                  dryingTimeInTicks: 3000,
                });
              },
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'antique_atlas',
      recipe: () => {
        // ? Map until end of chapter 3
        ['antiqueatlas:empty_atlas', 'antiqueatlas:empty_atlas_new'].forEach(
          id => event.remove({id: id})
        );
        event
          .shaped('antiqueatlas:empty_antique_atlas', ['aaa', 'abc', 'ccc'], {
            a: 'minecraft:leather',
            b: 'endrem:undead_soul',
            c: 'farmersdelight:canvas',
          })
          .id('inconvenient:antique_atlas');
      },
    },
    {
      id: 'rafts',
    },
    {
      // ? method to cool down and heat yourself
      id: 'waterskin',
      recipe: () => {
        ['cold_sweat:waterskin'].forEach(id => event.remove({id: id}));
        event
          .shaped('8x cold_sweat:waterskin', ['  a', ' b ', 'b  '], {
            a: 'farmersdelight:rope',
            b: 'minecraft:leather',
          })
          .id('inconvenient:waterskin');
      },
    },
    {
      // ? float around using stamina
      id: 'paraglider',
    },
    {
      // ? first bed, increases sanity
      id: 'bedroll',
      recipe: () => {
        event.remove({id: 'upgrade_aquatic:bedroll'});
        event
          .shaped('upgrade_aquatic:bedroll', ['aaa', 'bbb'], {
            a: 'farmersdelight:straw',
            b: 'minecraft:leather',
          })
          .id('inconvenient:bedroll');
      },
    },
    {
      id: 'thirst',
      recipe: () => {
        ['tofucraft:foodplate', 'thirst:clay_bowl'].forEach(id =>
          event.remove({id: id})
        );

        event
          .shaped('4x thirst:clay_bowl', ['aaa'], {
            a: '#forge:clay_balls',
          })
          .id('inconvenient:clay_bowl');
      },
    },
    {
      id: 'roman_concrete',
      recipe: () => {
        event.remove({id: 'rankine:mixing/roman_concrete_mixing'});
        event
          .custom({
            type: 'rankine:mixing',
            mixTime: 100,
            matScale: 1,
            ingredientTotal: 3,
            fluidInput: {
              fluid: 'minecraft:water',
              amount: 100,
            },
            input1: {
              item: 'charcoal_pit:ash',
              required: true,
              min: 0.1,
              max: 0.2,
            },
            input2: {
              item: 'kubejs:grog',
              required: true,
              min: 0.7,
              max: 0.8,
            },
            input3: {
              item: 'rankine:quicklime',
              required: true,
              min: 0.1,
              max: 0.2,
            },
            result: {item: 'rankine:roman_concrete'},
          })
          .id('inconvenient:roman_concrete');
      },
    },
    {
      id: 'bronze_tools',
      recipe: () => {
        [
          'rankine:brass_crowbar',
          'rankine:brass_knife',
          'rankine:brass_spear',
          'rankine:brass_hammer',
          'rankine:brass_axe',
          'rankine:brass_pickaxe',
          'rankine:brass_shovel',
          'rankine:brass_sword',
        ].forEach(id => event.remove({id: id}));
      },
    },
    {
      id: 'stuffed_pumpkin',
      recipe: () => {
        [
          'sliceanddice:cooking/farmersdelight/cooking/stuffed_pumpkin_block',
          'farmersdelight:cooking/stuffed_pumpkin_block',
        ].forEach(id => event.remove({id: id}));
        event
          .shaped(
            'farmersdelight:stuffed_pumpkin_block',
            ['abc', 'def', 'ghi'],
            {
              a: 'rankine:oyster_mushroom',
              b: 'rankine:artist_conk_mushroom',
              c: 'rankine:turkey_tail_mushroom',
              d: 'rankine:cinnabar_polypore_mushroom',
              f: 'rankine:honey_mushroom',
              e: 'biomancy:living_flesh',
              g: 'rankine:sulfur_shelf_mushroom',
              i: 'rankine:lions_mane_mushroom',
              h: 'minecraft:pumpkin',
            }
          )
          .stage('chapter_1');
      },
    },
    {
      id: 'goddess_statue',
      recipe: () => {
        event
          .shaped('paraglider:goddess_statue', ['aba', 'cdc', 'ccc'], {
            a: 'rankine:graphite',
            b: 'minecraft:amethyst_shard',
            c: 'rankine:porcelain',
            d: 'kubejs:goddess_heart',
          })
          .stage('chapter_1');
      },
      children: [
        {
          id: 'goddess_heart',
          recipe: () => {
            event
              .shaped('kubejs:goddess_heart', ['aba', 'cdc', 'aba'], {
                a: 'rankine:lead_ingot',
                b: 'hexerei:selenite_shard',
                c: 'rankine:silver_ingot',
                d: 'paraglider:spirit_orb',
              })
              .stage('chapter_1');
          },
          children: [
            {
              id: 'silver_ingot',
              recipe: () => {
                [
                  'rankine:silver_ingot_from_native_ore_smelting',
                  'rankine:crushing/native_arsenic_ore_crushing',
                  'rankine:crushing/native_silver_ore_crushing',
                  'occultism:blasting/silver_ingot_from_raw',
                  'occultism:smelting/silver_ingot_from_raw',
                ].forEach(id => event.remove({id: id}));
                event.custom({
                  type: 'charcoal_pit:orekiln',
                  ingredients: [{item: 'rankine:acanthite'}],
                  result: {item: 'rankine:silver_ingot'},
                  amount: 1,
                });

                event.custom({
                  type: 'rankine:beehive_oven',
                  input: {item: 'rankine:acanthite_block'},
                  result: 'rankine:silver_block',
                  minCookTime: 2400,
                  maxCookTime: 4800,
                });
              },
              children: [
                {
                  id: 'acanthite',
                  recipe: () => {
                    [
                      'rankine:crushing/acanthite_ore_crushing',
                      'immersiveengineering:crafting/raw_silver_to_raw_block_silver',
                    ].forEach(id => event.remove({id: id}));
                  },
                  children: [
                    {
                      // ? acanthite is found in deserts a y level [x-y]
                      id: 'acanthite_ore',
                    },
                    {id: 'bronze_hammer'},
                  ],
                },
              ],
            },
            {
              id: 'lead_ingot',
              recipe: () => {
                [
                  'rankine:lead_ingot_from_native_ore_smelting',
                  'rankine:lead_ingot_from_native_ore_blasting',
                  'rankine:lead_ingot_from_native_ore_blasting',
                  'immersiveengineering:arcfurnace/ore_lead',
                  'mekanism:processing/lead/ingot/from_raw_blasting',
                  'mekanism:processing/lead/ingot/from_raw_smelting',
                ].forEach(id => event.remove({id: id}));
                event.custom({
                  type: 'charcoal_pit:orekiln',
                  ingredients: [{item: 'rankine:galena'}],
                  result: {item: 'rankine:lead_ingot'},
                  amount: 1,
                });

                event.custom({
                  type: 'rankine:beehive_oven',
                  input: {item: 'rankine:galena_block'},
                  result: 'rankine:lead_block',
                  minCookTime: 2400,
                  maxCookTime: 4800,
                });
              },
              children: [
                {
                  id: 'galena',
                  recipe: () => {
                    [
                      'rankine:crushing/galena_ore_crushing',
                      'rankine:crushing/cobaltite_ore_crushing',
                      'rankine:crushing/cryolite_ore_crushing',
                      'rankine:crushing/greenockite_ore_crushing',
                      'rankine:crushing/stibnite_ore_crushing',
                      'mekanism:processing/lead/raw_storage_blocks/from_raw',
                      'immersiveengineering:crafting/raw_lead_to_raw_block_lead',
                    ].forEach(id => event.remove({id: id}));

                    event.custom({
                      input: {
                        item: 'rankine:galena_ore',
                      },
                      type: 'rankine:crushing',
                      guaranteed: [
                        {
                          item: 'rankine:galena',
                          count: 1,
                          tier: 'minecraft:iron',
                        },
                        {
                          item: 'rankine:galena',
                          count: 1,
                          tier: 'minecraft:netherite',
                        },
                      ],
                    });
                  },
                  children: [
                    {
                      // ? galena is found in swamps a y level [x-y]
                      id: 'galena_ore',
                    },
                  ],
                },
              ],
            },
            {id: 'selenite_shard'},
            {id: 'spirit_orb'},
          ],
        },
        {
          id: 'amethyst_shard',
          recipe: () => {
            [
              'rankine:crushing/hematite_ore_crushing',
              'rankine:crushing/pyrite_ore_crushing',
            ].forEach(id => event.remove({id: id}));
          },
        },
        {
          id: 'graphite',
          recipe: () => {
            [
              'rankine:carbon_from_graphite',
              'rankine:graphite_electrode',
              'rankine:crushing/deepslate_crushing',
              'rankine:crushing/enstatite_chondrite_crushing',
              'rankine:crushing/frozen_meteorite_crushing',
              'rankine:crushing/gray_marble_crushing',
              'rankine:crushing/greenschist_crushing',
              'rankine:crushing/meteorite_crushing',
              'rankine:crushing/mica_schist_crushing',
              'rankine:crushing/plumbago_ore_crushing',
              'rankine:beehive_oven/silicon_carbide_block_beehive_oven_cooking',
            ].forEach(id => event.remove({id: id}));
            event.custom({
              type: 'rankine:crushing',
              input: {item: 'rankine:plumbago_ore'},
              guaranteed: [{item: 'rankine:graphite'}],
              outputs: [{weight: 100, remove: false}],
            });
          },
          children: [
            {
              // ? graphite is found in extreme hills at y level [x-y]
              id: 'graphite_ore',
            },
          ],
        },
        {id: 'porcelain'},
      ],
    },
  ]);
});
