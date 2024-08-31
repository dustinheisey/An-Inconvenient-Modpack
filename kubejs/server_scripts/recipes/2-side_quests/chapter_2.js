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
                activation_item: {item: 'kubejs:iridescent_scales'},
                pentacle_id: 'occultism:summon_foliot',
                ingredients: [
                  {
                    item: 'blue_skies:aquite',
                  },
                  {
                    item: 'blue_skies:aquite',
                  },
                  {
                    item: 'blue_skies:soul_fragment',
                  },
                  {
                    item: 'blue_skies:cryo_root',
                  },
                  {
                    item: 'blue_skies:winter_leaves',
                  },
                  {
                    item: 'blue_skies:municipal_monkfish',
                  },
                  {
                    item: 'blue_skies:grittle_flatfish',
                  },
                  {
                    item: 'rankine:white_marble',
                  },
                  {
                    item: 'rankine:white_marble',
                  },
                  {
                    item: 'blue_skies:starlit_sapling',
                  },
                  {
                    item: 'blue_skies:chilled_lily_pad',
                  },
                  {
                    item: 'blue_skies:azulfo_horn',
                  },
                ],
                result: {
                  item: 'gateways:gate_pearl',
                  nbt: '{gateway:"gateways:small_everbright_gateway"}',
                },
              })
              .id('inconvenient:ritual_aquatic_gateway');
          },
          children: [],
        },
        {
          id: 'end_eyes',
          recipe: () => {
            ['endrem:exotic_eye'].forEach(id => event.remove({id: id}));
            event
              .shaped('endrem:exotic_eye', ['aba', 'bcb', 'aba'], {
                a: 'tconstruct:seared_brick',
                b: 'minecraft:copper_ingot',
                c: 'occultism:datura',
              })
              .stage('eye_exotic')
              .id('inconvenient:shaped_exotic_eye');

            event
              .shaped('endrem:guardian_eye', ['aba', 'bcb', 'aba'], {
                a: 'minecraft:prismarine_shard',
                b: 'naturesaura:gold_powder',
                c: 'minecraft:prismarine_crystals',
              })
              .stage('eye_guardian')
              .id('inconvenient:shaped_guardian_eye');
          },
        },
        {
          id: 'lost_stories',
          recipe: () => {
            event
              .shaped(`kubejs:everbright_lost_story`, ['abb', 'bcc', 'bcc'], {
                a: 'paragon_textiles:silk',
                b: 'minecraft:leather',
                c: `kubejs:everbright_lost_page`,
              })
              .id('inconvenient:shaped_everbright_lost_story');
          },
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'blue_skies:charoite_helmet',
              'blue_skies:charoite_chestplate',
              'blue_skies:charoite_leggings',
              'blue_skies:charoite_boots',
              'tconstruct:armor/building/travelers_goggles',
              'tconstruct:armor/building/travelers_chestplate',
              'tconstruct:armor/building/travelers_pants',
              'tconstruct:armor/building/travelers_boots',
            ].forEach(id => event.remove({id: id}));

            stageArmors(event, [
              {
                tier: 'blue_skies:charoite',
                input: 'blue_skies:charoite',
                previousTier: 'minecraft:iron',
                stage: 'chapter_2',
                master: 'charoite',
              },
            ]);

            event
              .shaped('tconstruct:travelers_helmet', ['a a', 'bab', 'c c'], {
                a: 'minecraft:leather',
                b: 'minecraft:glass_pane',
                c: 'tconstruct:amethyst_bronze_ingot',
              })
              .id('inconvenient:shaped_travelers_helmet');

            event
              .shaped(
                'tconstruct:travelers_chestplate',
                ['a a', 'aba', 'aba'],
                {
                  a: 'minecraft:leather',
                  b: 'tconstruct:amethyst_bronze_ingot',
                }
              )
              .id('inconvenient:shaped_travelers_chestplate');

            event
              .shaped('tconstruct:travelers_leggings', ['aaa', 'b b', 'a a'], {
                a: 'minecraft:leather',
                b: 'tconstruct:amethyst_bronze_ingot',
              })
              .id('inconvenient:shaped_travelers_leggings');

            event
              .shaped('tconstruct:travelers_boots', ['a a', 'b b'], {
                a: 'tconstruct:amethyst_bronze_ingot',
                b: 'minecraft:leather',
              })
              .id('inconvenient:shaped_travelers_boots');
          },
        },
        {
          id: 'guidebooks',
          recipe: () => {
            [
              'naturesaura:book',
              'totemic:totempedia',
              'malum:encyclopedia_arcana',
              'occultism:crafting/dictionary_of_spirits',
              'tconstruct:common/mighty_smelting',
              'tconstruct:common/puny_smelting',
              'tconstruct:common/materials_and_you',
            ].forEach(id => event.remove({id: id}));

            event
              .custom({
                type: 'tconstruct:casting_table',
                fluid: {name: 'tconstruct:seared_stone', amount: 250},
                cast: {item: 'farmersdelight:canvas', cast_consumed: true},
                result: 'tconstruct:mighty_smelting',
                cooling_time: 100,
              })
              .id('inconvenient:casting_table_mighty_smelting');

            event
              .shapeless('tconstruct:puny_smelting', [
                'farmersdelight:canvas',
                'kubejs:grout_ball',
              ])
              .id('inconvenient:shapeless_puny_smelting');

            event
              .shapeless('tconstruct:materials_and_you', [
                'farmersdelight:canvas',
                'tconstruct:pattern',
              ])
              .id('inconvenient:shapeless_materials_and_you');

            event
              .shaped(
                Item.of(
                  'patchouli:guide_book',
                  '{"patchouli:book":"naturesaura:book"}'
                ),
                ['ab'],
                {a: 'farmersdelight:canvas', b: 'naturesaura:gold_leaf'}
              )
              .id('inconvenient:shaped_naturesaura_book');
            event
              .shaped(
                Item.of(
                  'patchouli:guide_book',
                  '{"patchouli:book":"totemic:totempedia"}'
                ),
                ['ab'],
                {a: 'farmersdelight:canvas', b: 'blue_skies:winter_leaves'}
              )
              .id('inconvenient:shaped_totempedia');
            event
              .shaped('malum:encyclopedia_arcana', ['ab'], {
                a: 'farmersdelight:canvas',
                b: 'malum:holy_sap',
              })
              .id('inconvenient:shaped_encyclopedia_arcana');
            event
              .shaped('blue_skies:blue_journal', ['ab'], {
                a: 'farmersdelight:canvas',
                b: 'blue_skies:turquoise_stone',
              })
              .id('inconvenient:shaped_blue_journal');
            event
              .shaped('occultism:dictionary_of_spirits', ['ab'], {
                a: 'farmersdelight:canvas',
                b: 'occultism:datura',
              })
              .id('inconvenient:shaped_dictionary_of_spirits');
          },
        },
        {
          id: 'totems',
          recipe: () => {
            ['rankine:totem_of_cobbling'].forEach(id => event.remove({id: id}));

            event
              .custom({
                type: 'hexerei:mixingcauldron',
                liquid: {
                  fluid: 'minecraft:lava',
                },
                liquidOutput: {
                  fluid: 'minecraft:lava',
                },
                ingredients: [
                  {
                    item: 'rankine:pewter_hammer',
                  },
                  {
                    item: 'minecraft:cobblestone',
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot',
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot',
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot',
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot',
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot',
                  },
                  {
                    item: 'minecraft:cobblestone',
                  },
                ],
                output: {
                  item: 'rankine:totem_of_cobbling',
                  count: 1,
                },
                fluidLevelsConsumed: 2000,
              })
              .id('inconvenient:cauldron_totem_of_cobbling');
          },
        },
      ],
    },
    {
      id: 'everbright_crushing',
      recipe: () => {
        event.remove({type: 'rankine:crushing'});
        setCrushingRecipes(event, {
          'blue_skies:turquoise_cobblestone': [
            'blue_skies:turquoise_stone',
            'blue_skies:taratite',
            'blue_skies:rimestone',
          ],
          'rankine:light_gravel': ['blue_skies:turquoise_cobblestone'],
          'blue_skies:midnight_sand': ['blue_skies:midnight_sandstone'],
          'blue_skies:crystal_sand': ['blue_skies:crystal_sandstone'],
        });
      },
    },
    {
      id: 'crying_obsidian',
      recipe: () => {
        event
          .custom({
            type: 'rankine:rock_generator',
            genType: 'volcanic',
            input1: {item: 'minecraft:obsidian'},
            result: {
              block: 'minecraft:crying_obsidian',
            },
          })
          .id('inconvenient:volcanic_crying_obsidian');
      },
    },
    {
      id: 'cactus',
      recipe: () => {
        event
          .custom({
            type: 'rankine:sluicing',
            input: {item: 'rankine:desert_sand'},
            outputs: [
              {item: `minecraft:sand`, weight: 99},
              {item: 'minecraft:cactus', weight: 1},
            ],
            tool: {item: 'rankine:wooden_gold_pan'},
          })
          .id('inconvenient:sluicing_desert_sand');
      },
    },
    {
      id: 'bricks',
      recipe: () => {
        overrideBricksRecipes('chapter_2', event, [
          {
            input: 'minecraft:obsidian',
            output: 'cataclysm:obsidian_bricks',
          },
          {
            input: 'blue_skies:nature_stone',
            output: 'blue_skies:nature_stonebrick',
          },
          {
            input: 'blue_skies:polished_brumble',
            output: 'blue_skies:polished_brumble_bricks',
          },
          {
            input: 'architects_palette:abyssaline',
            output: 'architects_palette:abyssaline_bricks',
          },
        ]);
      },
    },

    {
      id: 'glass',
      recipe: () => {
        event
          .shaped(`rankine:lead_glass`, [' a ', 'aba', ' a '], {
            a: `rankine:lead_ingot`,
            b: '#forge:glass',
          })
          .id('inconvenient:shaped_lead_glass');

        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:midnight_sand'},
            result: {fluid: 'kubejs:molten_midnight_glass', amount: 1000},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_molten_midnight_glass');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:crystal_sand'},
            result: {fluid: 'kubejs:molten_crystal_glass', amount: 1000},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_molten_crystal_glass');

        event
          .custom({
            type: 'tconstruct:casting_basin',
            fluid: {name: 'kubejs:molten_crystal_glass', amount: 1000},
            result: 'blue_skies:crystal_glass',
            cooling_time: 900,
          })
          .id('inconvenient:casting_basin_crystal_glass');
        event
          .custom({
            type: 'tconstruct:casting_basin',
            fluid: {name: 'kubejs:molten_midnight_glass', amount: 1000},
            result: 'blue_skies:midnight_glass',
            cooling_time: 900,
          })
          .id('inconvenient:casting_basin_midnight_glass');
      },
    },
    {
      id: 'ground_tap',
      recipe: () => {},
      children: [
        {
          id: 'metal_pipe',
          recipe: () => {
            event
              .shaped(`3x rankine:metal_pipe`, ['aaa'], {
                a: 'tconstruct:amethyst_bronze_ingot',
              })
              .id('inconvenient:shaped_metal_pipe');
          },
        },
      ],
    },
    {
      // place carved pumpkin on a hay block
      id: 'straw_golem',
      recipe: () => {
        ['strawgolem:straw_hat'].forEach(id => event.remove({id: id}));

        event
          .shaped('strawgolem:straw_hat', [' a ', 'aaa'], {
            a: 'minecraft:hay_block',
          })
          .id('inconvenient:shaped_straw_hat');
      },
      children: [
        {
          id: 'carved_pumpkin',
          children: [
            {
              id: 'shears',
              recipe: () => {
                event
                  .shaped(`minecraft:shears`, [' a', 'a '], {
                    a: `rankine:pewter_ingot`,
                  })
                  .id('inconvenient:shaped_shears');
              },
            },
          ],
        },
        {
          id: 'hay',
          recipe: () => {
            event.replaceInput(
              {input: 'minecraft:wheat'},
              'minecraft:wheat',
              'kubejs:wheat'
            );
          },
          children: [
            {
              id: 'wheat',
              recipe: () => {
                [
                  'minecraft:wheat',
                  'charcoal_pit:barrel_recipes/beer',
                  'rankine:compat/botania/mana_infusion/barley_to_wheat',
                  'rankine:compat/botania/mana_infusion/millet_to_wheat',
                  'rankine:compat/botania/mana_infusion/oats_to_wheat',
                  'rankine:compat/botania/mana_infusion/rye_to_wheat',
                  'rankine:compat/botania/mana_infusion/sorghum_to_wheat',
                  'immersiveengineering:cloche/wheat',
                ].forEach(id => event.remove({id: id}));

                event
                  .custom({
                    type: 'immersiveengineering:cloche',
                    results: [
                      {item: 'kubejs:wheat', count: 2},
                      {item: 'minecraft:wheat_seeds'},
                    ],
                    input: {item: 'minecraft:wheat_seeds'},
                    soil: {tag: 'forge:dirt'},
                    time: 560,
                    render: {type: 'stacking', block: 'minecraft:wheat'},
                  })
                  .id('inconvenient:cloche_wheat');
                event
                  .shapeless('9x kubejs:wheat', ['minecraft:hay_block'])
                  .id('inconvenient:shapeless_wheat');
              },
            },
          ],
        },
      ],
    },
    {
      id: 'cooking',
      recipe: () => {
        event
          .shaped('farmersdelight:cooking_pot', ['aba', 'cdc', 'ccc'], {
            a: 'minecraft:brick',
            b: 'rankine:pewter_shovel',
            c: 'rankine:pewter_ingot',
            d: 'minecraft:water_bucket',
          })
          .id('inconvenient:shaped_cooking_pot');

        event.replaceInput(
          {output: 'farmersdelight:stove'},
          'minecraft:iron_ingot',
          'rankine:pewter_ingot'
        );

        event.replaceInput(
          {output: 'farmersdelight:skillet'},
          'minecraft:iron_ingot',
          'rankine:pewter_ingot'
        );
      },
    },
    {
      id: 'tea_kettle',
      recipe: () => {
        event
          .shaped('farmersrespite:kettle', ['aba', 'cdc', 'cec'], {
            a: `#forge:rods/wooden`,
            b: 'minecraft:leather',
            c: 'minecraft:copper_ingot',
            d: 'minecraft:bucket',
            e: 'rankine:pewter_ingot',
          })
          .id('inconvenient:shaped_kettle');
      },
    },
    {
      id: 'tinkers_tables',
      recipe: () => {
        event.replaceInput(
          {
            output: ['tconstruct:cast_chest', 'tconstruct:part_chest'],
          },
          '#forge:chests',
          'paragon_textiles:basket'
        );
      },
      children: [
        {
          id: 'pattern',
          recipe: () => {
            event
              .shaped('tconstruct:pattern', ['ab', 'ba'], {
                a: 'rankine:jute',
                b: '#forge:rods/wooden',
              })
              .id('inconvenient:shaped_pattern');
          },
        },
      ],
    },
    {
      id: 'carts',
      recipe: () => {
        [
          'astikorcarts:supply_cart',
          'astikorcarts:plow',
          'astikorcarts:animal_cart',
          'astikorcarts:wheel',
        ].forEach(id => event.remove({id: id}));

        event
          .shaped('astikorcarts:plow', ['aaa', 'bcb', 'dbd'], {
            a: 'minecraft:iron_hoe',
            b: '#forge:rods/wooden',
            c: '#minecraft:planks',
            d: 'astikorcarts:wheel',
          })
          .id('inconvenient:shaped_plow');
        event
          .shaped('astikorcarts:wheel', ['aba', 'bcb', 'aba'], {
            a: '#forge:rods/wooden',
            b: 'minecraft:iron_ingot',
            c: '#minecraft:planks',
          })
          .id('inconvenient:shaped_wheel');
        event
          .shaped('astikorcarts:animal_cart', ['aaa', 'aba', 'cac'], {
            a: '#minecraft:planks',
            b: 'minecraft:iron_ingot',
            c: 'astikorcarts:wheel',
          })
          .id('inconvenient:shaped_animal_cart');
        event
          .shaped('astikorcarts:supply_cart', ['aba', 'aba', 'cac'], {
            a: '#minecraft:planks',
            b: 'paragon_textiles:basket',
            c: 'astikorcarts:wheel',
          })
          .id('inconvenient:shaped_supply_cart');
      },
    },
    {
      id: 'organic_compost',
      recipe: () => {
        ['farmersdelight:organic_compost_from_rotten_flesh'].forEach(id =>
          event.remove({id: id})
        );

        event
          .shapeless('farmersdelight:organic_compost', [
            'rankine:compost',
            'rankine:compost',
            'rankine:compost',
            'rankine:compost',
            'rankine:compost',
            'rankine:compost',
            'rankine:compost',
            'rankine:compost',
            'rankine:compost',
          ])
          .id('inconvenient:shapeless_organic_compost');
      },
      children: [],
    },
    {
      id: 'thermometer',
      recipe: () => {
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast: {item: 'kubejs:glass_tube'},
            cast_consumed: true,
            fluid: {name: 'rankine:liquid_mercury', amount: 810},
            result: 'cold_sweat:thermometer',
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_thermometer');
      },
      children: [
        {
          id: 'glass_tube',
          recipe: () => {
            event
              .custom({
                type: 'tconstruct:casting_table',
                cast: {item: 'tconstruct:ingot_cast'},
                cast_consumed: false,
                fluid: {name: 'tconstruct:molten_glass', amount: 90},
                result: 'kubejs:glass_tube',
                cooling_time: 100,
              })
              .id('inconvenient:casting_table_glass_tube');
          },
          children: [
            {
              id: 'molten_glass',
              recipe: () => {
                event
                  .blasting('#forge:sand', 'minecraft:glass')
                  .id('inconvenient:blasting_glass');
                event
                  .shapeless('minecraft:glass', ['tconstruct:clear_glass'])
                  .id('inconvenient:shapeless_glass');
                event
                  .custom({
                    type: 'tconstruct:melting',
                    ingredient: {item: 'ecofriendly:sea_glass_ym'},
                    result: {fluid: 'tconstruct:molten_glass', amount: 1000},
                    temperature: 605,
                    time: 54,
                  })
                  .id('inconvenient:melting_sea_glass_ym');
              },
            },
          ],
        },
        {
          id: 'mercury_smelting',
          recipe: () => {
            event
              .custom({
                type: 'tconstruct:melting',
                ingredient: {item: 'rankine:mercury'},
                result: {fluid: 'rankine:liquid_mercury', amount: 90},
                temperature: 1450,
                time: 158,
              })
              .id('inconvenient:melting_mercury');
            event
              .custom({
                type: 'tconstruct:melting',
                ingredient: {item: 'rankine:mercury_nugget'},
                result: {fluid: 'rankine:liquid_mercury', amount: 10},
                temperature: 1450,
                time: 158,
              })
              .id('inconvenient:melting_mercury_nugget');
            event
              .custom({
                type: 'tconstruct:melting',
                ingredient: {item: 'rankine:mercury_block'},
                result: {fluid: 'rankine:liquid_mercury', amount: 810},
                temperature: 1450,
                time: 158,
              })
              .id('inconvenient:melting_mercury_block');

            event
              .custom({
                type: 'tconstruct:casting_table',
                cast: {item: 'tconstruct:ingot_cast'},
                cast_consumed: false,
                fluid: {name: 'rankine:liquid_mercury', amount: 90},
                result: 'rankine:mercury',
                cooling_time: 100,
              })
              .id('inconvenient:casting_table_mercury');

            event
              .custom({
                type: 'tconstruct:casting_table',
                cast: {item: 'tconstruct:ingot_cast'},
                cast_consumed: false,
                fluid: {name: 'rankine:liquid_mercury', amount: 10},
                result: 'rankine:mercury_nugget',
                cooling_time: 100,
              })
              .id('inconvenient:casting_table_mercury_nugget');

            event
              .custom({
                type: 'tconstruct:casting_basin',
                fluid: {name: 'rankine:liquid_mercury', amount: 810},
                result: 'rankine:mercury_block',
                cooling_time: 203,
              })
              .id('inconvenient:casting_basin_mercury_block');
          },
          children: [
            {
              id: 'mercury',
              recipe: () => {
                [
                  'blue_skies:pyrope_gem_from_blasting_everdawn_pyrope_ore',
                  'blue_skies:pyrope_gem_from_blasting_everbright_pyrope_ore',
                  'blue_skies:pyrope_gem_from_smelting_everbright_pyrope_ore',
                  'blue_skies:pyrope_gem_from_smelting_everdawn_pyrope_ore',
                ].forEach(id => event.remove({id: id}));
                event
                  .custom({
                    type: 'rankine:crushing',
                    input: {item: 'blue_skies:everbright_pyrope_ore'},
                    guaranteed: [{item: 'minecraft:cobblestone'}],
                    outputs: [
                      {weight: 80, remove: false},
                      {
                        item: 'blue_skies:pyrope_gem',
                        weight: 40,
                        remove: false,
                      },
                      {
                        item: 'blue_skies:pyrope_gem',
                        weight: 20,
                        remove: false,
                      },
                      {
                        item: 'rankine:mercury',
                        weight: 5,
                        remove: false,
                        tier: 'minecraft:diamond',
                      },
                    ],
                  })
                  .id('inconvenient:crushing_everbright_pyrope_ore');

                event
                  .custom({
                    type: 'rankine:crushing',
                    input: {item: 'blue_skies:everdawn_pyrope_ore'},
                    guaranteed: [{item: 'minecraft:cobblestone'}],
                    outputs: [
                      {weight: 80, remove: false},
                      {
                        item: 'blue_skies:pyrope_gem',
                        weight: 40,
                        remove: false,
                      },
                      {
                        item: 'blue_skies:pyrope_gem',
                        weight: 20,
                        remove: false,
                      },
                      {
                        item: 'rankine:mercury',
                        weight: 5,
                        remove: false,
                        tier: 'minecraft:diamond',
                      },
                    ],
                  })
                  .id('inconvenient:crushing_everdawn_pyrope_ore');
              },
              children: [{id: 'pyrope_ore', recipe: () => {}, children: []}],
            },
          ],
        },
      ],
    },
    {
      id: 'recycled_carrier_bag',
      recipe: () => {
        ['ecofriendly:reusable_bag_recipe_ym'].forEach(id =>
          event.remove({id: id})
        );

        event
          .shaped(
            `ecofriendly:recycled_carrier_bag_ym`,
            ['abc', 'bda', 'caa'],
            {
              a: 'farmersdelight:canvas',
              b: 'paragon_textiles:silk',
              c: 'paragon_textiles:fabric_plain',
              d: 'ecofriendly:plastic_bag_ym',
            }
          )
          .id('inconvenient:shaped_recycled_carrier_bag_ym');
      },
    },
    {
      id: 'f3_tools',
      recipe: () => {
        [
          'rankine:photometer',
          'rankine:speedometer',
          'rankine:biometer',
        ].forEach(id => event.remove({id: id}));
        event
          .shaped(`rankine:photometer`, [' a ', 'aba', ' a '], {
            a: 'rankine:sterling_silver_ingot',
            b: 'blue_skies:charoite',
          })
          .id('inconvenient:shaped_photometer');
        event
          .shaped(`rankine:speedometer`, [' a ', 'bcb', ' a '], {
            a: 'blue_skies:ventium_ingot',
            b: 'blue_skies:falsite_ingot',
            c: 'blue_skies:aquite',
          })
          .id('inconvenient:shaped_speedometer');
        event
          .shaped(`rankine:biometer`, [' a ', 'aba', ' a '], {
            a: 'tconstruct:amethyst_bronze_ingot',
            b: 'blue_skies:diopside_gem',
          })
          .id('inconvenient:shaped_biometer');
      },
    },
    {
      id: 'sewing_table',
      recipe: () => {
        ['cold_sweat:sewing_table'].forEach(id => event.remove({id: id}));
        event
          .shaped(`cold_sweat:sewing_table`, ['aaa', 'bbb', 'bbb'], {
            a: 'paragon_textiles:fabric_red',
            b: '#minecraft:planks',
          })
          .id('inconvenient:shaped_sewing_table');
      },
      children: [
        {
          id: 'fabric_red',
          recipe: () => {
            ['paragon_textiles:fabric_red'].forEach(id =>
              event.remove({id: id})
            );
            event
              .shapeless('paragon_textiles:fabric_red', [
                'minecraft:red_dye',
                'paragon_textiles:fabric_plain',
              ])
              .id('inconvenient:shapeless_fabric_red');
          },
        },
      ],
    },
    // TODO: deal with food situation over the chapters
    {
      id: 'bucket',
      recipe: () => {
        [
          'rankine:bucket_from_crafting_metals',
          'charcoal_pit:bucket',
          'rankine:bucket_from_steel',
          'rankine:bucket_from_brass',
          'minecraft:bucket',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast: {item: 'ceramicbucket:ceramic_bucket'},
            cast_consumed: true,
            fluid: {name: 'tconstruct:molten_iron', amount: 270},
            result: 'minecraft:bucket',
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_bucket');
      },
    },
    {
      id: 'resin',
      recipe: () => {
        event
          .custom({
            type: 'rankine:mixing',
            mixTime: 100,
            ingredientTotal: 1,
            matScale: 1,
            fluidInput: {fluid: 'rankine:resin', amount: 250},
            input1: {
              item: 'kubejs:dried_hide',
              required: true,
              min: 1.0,
              max: 1.0,
            },
            result: {item: 'kubejs:wet_tanned_hide'},
          })
          .id('inconvenient:mixing_barrel_wet_tanned_hide_from_resin');
      },
    },
    {
      id: 'tipi',
      recipe: () => {
        console.log('tipi recipe loaded');
        ['totemic:tipi_from_hide', 'totemic:tipi_from_wool'].forEach(id =>
          event.remove({id: id})
        );
        event
          .shaped('totemic:tipi', ['aba', 'bcb', 'b b'], {
            a: '#forge:rods/wooden',
            b: 'rankine:gun_cotton',
            c: 'minecraft:leather',
          })
          .id('inconvenient:shaped_tipi');
      },
    },
    {
      id: 'fishing_rod',
      recipe: () => {
        ['minecraft:fishing_rod', 'paragon_textiles:fishing_rod'].forEach(id =>
          event.remove({id: id})
        );

        event
          .shaped(`minecraft:fishing_rod`, ['  a', ' ab', 'a b'], {
            a: `#forge:rods/wooden`,
            b: 'paragon_textiles:silk',
          })
          .id('inconvenient:shaped_fishing_rod');
      },
    },
    {
      id: 'drakkars',
      recipe: () => {
        overworldWoods.forEach(wood => {
          event.remove({id: `smallships:${wood}_drakkar`});
          event
            .shaped(`smallships:${wood}_drakkar`, ['aba', 'cdc', 'eee'], {
              a: 'paragon_textiles:silk',
              b: 'smallships:sail',
              c: 'paragon_textiles:basket_sturdy',
              d: 'minecraft:lead',
              e: `smallships:${wood}_cog`,
            })
            .id(`inconvenient:shaped_${wood}_drakkar`);
        });
      },
      children: [
        {
          id: 'cogs',
          recipe: () => {
            overworldWoods.forEach(wood => {
              event.remove({id: `smallships:${wood}_cog`});
              event
                .shaped(`smallships:${wood}_cog`, ['aaa', 'bcb', 'ddd'], {
                  a: 'paragon_textiles:silk',
                  b: 'paragon_textiles:basket',
                  c: 'smallships:sail',
                  d: `justaraftmod:${wood}_raft`,
                })
                .id(`inconvenient:shaped_${wood}_cog`);
            });
          },
          children: [
            {
              id: 'silk',
              recipe: () => {
                event
                  .shaped('paragon_textiles:silk', ['aaa', 'aba', 'aaa'], {
                    a: 'rankine:cotton',
                    b: '#forge:rods/wooden',
                  })
                  .id('inconvenient:shaped_silk');
              },
            },
            {
              id: 'sail',
              recipe: () => {
                event
                  .shaped('smallships:sail', ['aaa', 'aba', 'cbc'], {
                    a: 'rankine:gun_cotton',
                    b: '#minecraft:logs',
                    c: 'minecraft:lead',
                  })
                  .id('inconvenient:shaped_sail');
              },
              children: [
                {
                  id: 'lead',
                  recipe: () => {
                    event
                      .shaped('minecraft:lead', [' aa', ' aa', 'a  '], {
                        a: 'paragon_textiles:silk',
                      })
                      .id('inconvenient:shaped_lead');
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cutting_board',
      recipe: () => {
        event
          .shaped('farmersdelight:cutting_board', ['abb', 'abb'], {
            a: '#forge:rods/wooden',
            b: 'malum:runewood_planks',
          })
          .id('inconvenient:shaped_cutting_board');
      },
      children: [],
    },
    {
      id: 'research_table',
      recipe: () => {
        event.remove({
          output: [`relics:researching_table`],
          type: 'minecraft:shaped',
        });
        event
          .shaped(`relics:researching_table`, ['aba', 'bcb', 'cdc'], {
            a: `naturesaura:gold_powder`,
            b: 'paragon_textiles:fabric_red',
            c: 'malum:runewood_log',
            d: 'malum:sacred_spirit',
          })
          .id('inconvenient:shaped_researching_table');
      },
    },
    {
      id: 'hopper',
      recipe: () => {
        ['minecraft:hopper'].forEach(id => event.remove({id: id}));

        event
          .shaped('minecraft:hopper', ['a a', 'aba', ' a '], {
            a: 'minecraft:iron_ingot',
            b: 'thirst:terracotta_bowl',
          })
          .id('inconvenient:shaped_hopper');
      },
    },
    {
      id: 'sediment_fan',
      recipe: () => {
        ['rankine:alloy_crafting/sediment_fan'].forEach(id =>
          event.remove({id: id})
        );

        event
          .custom({
            type: 'hexerei:mixingcauldron',
            ingredients: [
              {
                item: 'blue_skies:soul_fragment',
              },
              {
                item: 'tconstruct:amethyst_bronze_ingot',
              },
              {
                item: 'rankine:sterling_silver_ingot',
              },
              {
                item: 'tconstruct:amethyst_bronze_ingot',
              },
              {
                item: 'rankine:sterling_silver_ingot',
              },
              {
                item: 'tconstruct:amethyst_bronze_ingot',
              },
              {
                item: 'rankine:sterling_silver_ingot',
              },
              {
                item: 'tconstruct:amethyst_bronze_ingot',
              },
            ],
            liquid: {
              fluid: 'minecraft:water',
            },
            liquidOutput: {
              fluid: 'minecraft:water',
            },
            output: {
              item: 'rankine:sediment_fan',
              count: 1,
            },
            fluidLevelsConsumed: 1000,
          })
          .id('inconvenient:cauldron_sediment_fan');
      },
    },
    {
      id: 'tea',
      recipe: () => {
        event
          .campfireCooking(
            'farmersrespite:yellow_tea_leaves',
            'farmersrespite:green_tea_leaves'
          )
          .id('inconvenient:campfire_yellow_tea_leaves');
        event
          .campfireCooking(
            'farmersrespite:black_tea_leaves',
            'farmersrespite:yellow_tea_leaves'
          )
          .id('inconvenient:campfire_black_tea_leaves');

        event
          .smoking(
            'farmersrespite:yellow_tea_leaves',
            'farmersrespite:green_tea_leaves'
          )
          .id('inconvenient:smoking_yellow_tea_leaves');

        event
          .smoking(
            'farmersrespite:black_tea_leaves',
            'farmersrespite:yellow_tea_leaves'
          )
          .id('inconvenient:smoking_black_tea_leaves');
      },
    },
    {
      id: 'casts',
      recipe: () => {
        [
          'tconstruct:smeltery/casts/gold_casts/rods',
          'tconstruct:smeltery/casts/gold_casts/gears',
          'tconstruct:smeltery/casts/gold_casts/wires',
          'tconstruct:smeltery/casts/gold_casts/gems',
          'tconstruct:smeltery/casts/gold_casts/ingots',
          'tconstruct:smeltery/casts/gold_casts/nuggets',
          'tconstruct:smeltery/casts/gold_casts/pick_heads',
          'tconstruct:smeltery/casts/gold_casts/repair_kit',
          'tconstruct:smeltery/casts/gold_casts/small_axe_head',
          'tconstruct:smeltery/casts/gold_casts/small_blade',
          'tconstruct:smeltery/casts/gold_casts/tool_binding',
          'tconstruct:smeltery/casts/gold_casts/tool_handle',
          'tconstruct:smeltery/casts/gold_casts/hammer_head',
          'tconstruct:smeltery/casts/gold_casts/round_plate',
          'tconstruct:smeltery/casts/gold_casts/broad_blade',
          'tconstruct:smeltery/casts/gold_casts/broad_axe_head',
          'tconstruct:smeltery/casts/gold_casts/large_plate',
          'tconstruct:smeltery/casts/gold_casts/tough_handle',
          'tconstruct:smeltery/melting/metal/gold/cast',
        ].forEach(id => event.remove({id: id}));

        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {tag: 'forge:gems'},
            result: 'tconstruct:gem_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_gem_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {tag: 'forge:ingots'},
            result: 'tconstruct:ingot_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_ingot_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {tag: 'forge:nuggets'},
            result: 'tconstruct:nugget_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_nugget_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:pick_head'},
            result: 'tconstruct:pick_head_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_pick_head_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:repair_kit'},
            result: 'tconstruct:repair_kit_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_repair_kit_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:small_axe_head'},
            result: 'tconstruct:small_axe_head_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_small_axe_head_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:small_blade'},
            result: 'tconstruct:small_blade_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_small_blade_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:tool_binding'},
            result: 'tconstruct:tool_binding_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_tool_binding_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:tool_handle'},
            result: 'tconstruct:tool_handle_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_tool_handle_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:hammer_head'},
            result: 'tconstruct:hammer_head_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_hammer_head_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:round_plate'},
            result: 'tconstruct:round_plate_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_round_plate_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:broad_blade'},
            result: 'tconstruct:broad_blade_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_broad_blade_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:broad_axe_head'},
            result: 'tconstruct:broad_axe_head_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_broad_axe_head_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:large_plate'},
            result: 'tconstruct:large_plate_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_large_plate_cast');
        event
          .custom({
            type: 'tconstruct:casting_table',
            cast_consumed: true,
            switch_slots: true,
            cooling_time: 57,
            cast: {item: 'tconstruct:tough_handle'},
            result: 'tconstruct:tough_handle_cast',
            fluid: {name: 'tconstruct:molten_bronze', amount: 180},
          })
          .id('inconvenient:casting_table_tough_handle_cast');
      },
    },
    {
      id: 'recycling_bunker',
      recipe: () => {
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'architects_palette:plating_block'},
            result: {fluid: 'tconstruct:molten_iron', amount: 30},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_plating_block');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'architects_palette:plating_slab'},
            result: {fluid: 'tconstruct:molten_iron', amount: 15},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_plating_slab');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'architects_palette:plating_stairs'},
            result: {fluid: 'tconstruct:molten_iron', amount: 45},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_plating_stairs');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'architects_palette:plating_wall'},
            result: {fluid: 'tconstruct:molten_iron', amount: 5},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_plating_wall');
      },
    },
    {
      id: 'metals',
      recipe: () => {
        [
          'tconstruct:smeltery/melting/metal/copper/ore_dense',
          'tconstruct:smeltery/melting/metal/copper/ore_singular',
          'tconstruct:smeltery/melting/metal/iron/ore_singular',
          'tconstruct:smeltery/melting/metal/tin/ore_singular',
          'tconstruct:smeltery/melting/metal/lead/ore_singular',
          'tconstruct:smeltery/melting/metal/silver/ore_singular',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:raw_aquite'},
            result: {fluid: 'kubejs:molten_aquite', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_raw_aquite');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:aquite'},
            result: {fluid: 'kubejs:molten_aquite', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_aquite');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:aquite_block'},
            result: {fluid: 'kubejs:molten_aquite', amount: 810},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_aquite_block');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:raw_aquite_block'},
            result: {
              fluid: 'kubejs:molten_aquite',
              amount: 810,
            },
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_raw_aquite_block');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:raw_charoite'},
            result: {fluid: 'kubejs:molten_charoite', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_raw_charoite');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:charoite'},
            result: {fluid: 'kubejs:molten_charoite', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_charoite');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:charoite_block'},
            result: {fluid: 'kubejs:molten_charoite', amount: 810},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_charoite_block');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:raw_charoite_block'},
            result: {
              fluid: 'kubejs:molten_charoite',
              amount: 810,
            },
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_raw_charoite_block');

        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:raw_ventium'},
            result: {fluid: 'kubejs:molten_ventium', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_raw_ventium');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:ventium_ingot'},
            result: {fluid: 'kubejs:molten_ventium', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_ventium_ingot');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:ventium_nugget'},
            result: {fluid: 'kubejs:molten_ventium', amount: 10},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_ventium_nugget');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:ventium_block'},
            result: {fluid: 'kubejs:molten_ventium', amount: 810},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_ventium_block');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'blue_skies:raw_ventium_block'},
            result: {
              fluid: 'kubejs:molten_ventium',
              amount: 810,
            },
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_raw_ventium_block');

        event
          .custom({
            type: 'tconstruct:casting_table',
            result: 'blue_skies:aquite',
            fluid: {name: 'kubejs:molten_aquite', amount: 90},
            cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_aquite');

        event
          .custom({
            type: 'tconstruct:casting_table',
            result: 'blue_skies:charoite',
            fluid: {name: 'kubejs:molten_charoite', amount: 90},
            cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_charoite');

        event
          .custom({
            type: 'tconstruct:casting_table',
            result: 'blue_skies:ventium_ingot',
            fluid: {name: 'kubejs:molten_ventium', amount: 90},
            cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_ventium_ingot');

        event
          .custom({
            type: 'tconstruct:casting_table',
            result: 'blue_skies:ventium_nugget',
            fluid: {name: 'kubejs:molten_ventium', amount: 10},
            cast: {item: 'tconstruct:nugget_cast', cast_consumed: false},
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_ventium_nugget');
        event
          .custom({
            type: 'tconstruct:casting_basin',
            result: 'blue_skies:aquite_block',
            fluid: {name: 'kubejs:molten_aquite', amount: 810},
            cooling_time: 900,
          })
          .id('inconvenient:casting_basin_aquite_block');

        event
          .custom({
            type: 'tconstruct:casting_basin',
            result: 'blue_skies:charoite_block',
            fluid: {name: 'kubejs:molten_charoite', amount: 810},
            cooling_time: 900,
          })
          .id('inconvenient:casting_basin_charoite_block');

        event
          .custom({
            type: 'tconstruct:casting_basin',
            result: 'blue_skies:ventium_block',
            fluid: {name: 'kubejs:molten_ventium', amount: 810},
            cooling_time: 900,
          })
          .id('inconvenient:casting_basin_ventium_block');
      },
      children: [
        {
          id: 'crushing',
          recipe: () => {
            event
              .custom({
                input: {item: 'blue_skies:everbright_diopside_ore'},
                type: 'rankine:crushing',
                guaranteed: [
                  {
                    item: 'blue_skies:diopside_gem',
                    count: 1,
                    tier: 'minecraft:iron',
                  },
                  {
                    item: 'blue_skies:diopside_gem',
                    count: 1,
                    tier: 'minecraft:diamond',
                  },
                ],
              })
              .id('inconvenient:crushing_everbright_diopside_ore');
            event
              .custom({
                input: {item: 'blue_skies:everbright_aquite_ore'},
                type: 'rankine:crushing',
                guaranteed: [
                  {
                    item: 'blue_skies:raw_aquite',
                    count: 1,
                    tier: 'minecraft:iron',
                  },
                  {
                    item: 'blue_skies:raw_aquite',
                    count: 1,
                    tier: 'minecraft:diamond',
                  },
                ],
              })
              .id('inconvenient:crushing_everbright_aquite_ore');
            event
              .custom({
                input: {item: 'blue_skies:everbright_charoite_ore'},
                type: 'rankine:crushing',
                guaranteed: [
                  {
                    item: 'blue_skies:raw_charoite',
                    count: 1,
                    tier: 'minecraft:iron',
                  },
                  {
                    item: 'blue_skies:raw_charoite',
                    count: 1,
                    tier: 'minecraft:netherite',
                  },
                ],
              })
              .id('inconvenient:crushing_everbright_charoite_ore');
            event
              .custom({
                input: {item: 'blue_skies:ventium_ore'},
                type: 'rankine:crushing',
                guaranteed: [
                  {
                    item: 'blue_skies:raw_ventium',
                    count: 1,
                    tier: 'minecraft:iron',
                  },
                  {
                    item: 'blue_skies:raw_ventium',
                    count: 1,
                    tier: 'minecraft:netherite',
                  },
                ],
              })
              .id('inconvenient:crushing_ventium_ore');
          },
        },
      ],
    },
  ]);

  event
    .shaped('totemic:wind_chime', ['aaa', ' bb', '  b'], {
      a: 'minecraft:iron_ingot',
      b: 'totemic:cedar_planks',
    })
    .id('inconvenient:shaped_wind_chime');

  event
    .custom({
      type: 'occultism:spirit_fire',
      ingredient: {
        item: 'minecraft:ink_sac',
      },
      result: {
        item: 'occultism:purified_ink',
      },
    })
    .id('inconvenient:spirit_fire_purified_ink');
  event
    .custom({
      type: 'occultism:spirit_fire',
      ingredient: {
        item: 'blue_skies:charoite',
      },
      result: {
        item: 'occultism:spirit_attuned_gem',
      },
    })
    .id('inconvenient:spirit_fire_spirit_attuned_gem');
  ['occultism:ritual/craft_infused_lenses'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'occultism:ritual',
      ritual_type: 'occultism:craft',
      activation_item: {
        item: 'occultism:book_of_binding_bound_foliot',
      },
      pentacle_id: 'occultism:craft_foliot',
      duration: 60,
      ritual_dummy: {
        item: 'occultism:ritual_dummy/craft_infused_lenses',
      },
      ingredients: [
        {
          item: 'occultism:lenses',
        },
        {
          tag: 'forge:ingots/silver',
        },
        {
          tag: 'forge:ingots/silver',
        },
        {
          item: 'naturesaura:infused_iron',
        },
      ],
      result: {
        item: 'occultism:infused_lenses',
      },
    })
    .id('inconvenient:ritual_infused_lenses');
  event
    .shaped('occultism:book_of_binding_foliot', ['ab ', 'bcb', ' b '], {
      a: 'occultism:purified_ink',
      b: 'minecraft:red_dye',
      c: 'minecraft:book',
    })
    .id('inconvenient:shaped_book_of_binding_foliot');

  event.replaceInput(
    {output: 'occultism:butcher_knife'},
    'minecraft:iron_ingot',
    'rankine:pewter_ingot'
  );

  // event.remove({
  //   output: [
  //     'totemic:wind_chime',
  //     'cold_sweat:minecart_insulation',
  //     'tconstruct:pattern',
  //     'farmersrespite:kettle',
  //     'naturesaura:wood_stand',
  //     `rankine:pearl_block`,
  //     `3x rankine:metal_pipe`,
  //     `2x blue_skies:cherry_stick`,
  //     `2x blue_skies:frostbright_stick`,
  //     `2x blue_skies:starlit_stick`,
  //     `2x blue_skies:bluebright_stick`,
  //     `3x rankine:bamboo_culms_sign`,
  //     `8x rankine:tap_line`,
  //     `rankine:tree_tap`,
  //     `rankine:fins`,
  //     `rankine:ice_skates`,
  //     'hexerei:mixing_cauldron',
  //     'totemic:drum',
  //     'paragon_textiles:cushion_plain',
  //     'paragon_textiles:cushion_red',
  //     'occultism:brush',
  //     `create:red_seat`,
  //     `minecraft:shears`,
  //     `minecraft:scaffolding`,
  //     'farmersdelight:cooking_pot',
  //     'minecraft:lead',
  //     'smallships:sail',
  //     'rankine:gun_cotton',
  //   ],
  //   type: 'minecraft:crafting_shaped',
  // });

  [
    'blue_skies:bluebright_stick',
    'blue_skies:starlit_stick',
    'blue_skies:frostbright_stick',
    'blue_skies:cherry_stick',
    'rankine:fins',
    'rankine:ice_skates',
    'paragon_textiles:cushion_plain',
    'paragon_textiles:cushion_red',
    'occultism:crafting/brush',
    'create:crafting/kinetics/red_seat_from_other_seat',
  ].forEach(id => event.remove({id: id}));
  event
    .shaped(`2x blue_skies:cherry_stick`, ['a', 'a'], {
      a: 'blue_skies:cherry_planks',
    })
    .id('inconvenient:shaped_cherry_stick');
  event
    .shaped(`2x blue_skies:frostbright_stick`, ['a', 'a'], {
      a: 'blue_skies:frostbright_planks',
    })
    .id('inconvenient:shaped_frostbright_stick');
  event
    .shaped(`2x blue_skies:starlit_stick`, ['a', 'a'], {
      a: 'blue_skies:starlit_planks',
    })
    .id('inconvenient:shaped_starlit_stick');
  event
    .shaped(`2x blue_skies:bluebright_stick`, ['a', 'a'], {
      a: 'blue_skies:bluebright_planks',
    })
    .id('inconvenient:shaped_bluebright_stick');

  event
    .shaped(`rankine:fins`, ['a  ', 'aaa'], {
      a: 'minecraft:leather',
    })
    .id('inconvenient:shaped_fins');
  event
    .shaped(`rankine:ice_skates`, ['a  ', 'bba', 'ccc'], {
      a: 'minecraft:leather',
      b: 'farmersdelight:rope',
      c: 'rankine:pewter_nugget',
    })
    .id('inconvenient:shaped_ice_skates');

  event
    .shaped('paragon_textiles:cushion_plain', ['a', 'b'], {
      a: `paragon_textiles:fabric_plain`,
      b: '#minecraft:wooden_slabs',
    })
    .id('inconvenient:shaped_cushion_plain');
  event
    .shaped('paragon_textiles:cushion_red', ['a', 'b'], {
      a: `paragon_textiles:fabric_red`,
      b: '#minecraft:wooden_slabs',
    })
    .id('inconvenient:shaped_cushion_red');
  event
    .shaped('occultism:brush', ['aaa', 'bbb'], {
      a: '#minecraft:planks',
      b: 'paragon_textiles:silk',
    })
    .id('inconvenient:shaped_brush');
  event
    .shaped(`create:red_seat`, ['a', 'b'], {
      a: `paragon_textiles:cushion_red`,
      b: '#minecraft:wooden_slabs',
    })
    .id('inconvenient:shaped_red_seat');
});

onEvent('server.datapack.high_priority', event => {
  // Everbright
  registerGateways(event, {
    id: 'everbright',
    dimension: 'Everbright',
    color: '#4FA7FF',
    waves: [
      {
        type: 'mob',
        entities: ['blue_skies:artificial_golem'],
      },
      {
        type: 'mob',
        entities: ['blue_skies:armored_frost_spirit'],
      },
      {
        type: 'mob',
        entities: ['blue_skies:diophyde_prowler'],
      },
      {
        type: 'mob',
        entities: ['blue_skies:polargeist'],
      },
      {
        type: 'mob',
        entities: ['blue_skies:crynocerous'],
      },
      {
        type: 'boss',
        entities: ['blue_skies:summoner'],
        rewards: [{id: 'blue_skies:loot_bag_summoner', count: 2}],
      },
      {
        type: 'mob',
        entities: ['blue_skies:stonelet'],
      },
      {
        type: 'mob',
        entities: ['blue_skies:spewter'],
      },
      {
        type: 'boss',
        entities: ['blue_skies:starlit_crusher'],
        rewards: [
          {
            id: 'blue_skies:loot_bag_starlit_crusher',
            count: 2,
          },
        ],
      },
    ],
    restorations: [
      {id: 'blue_skies:seclam', name: 'seclam'},
      {id: 'blue_skies:whistleshell_crab', name: 'whistleshell crab'},
      {id: 'minecraft:turtle', name: 'turtle'},
      {id: 'minecraft:skeleton', name: 'skeleton'},
    ],
    relics: [
      'relics:amphibian_boot',
      'relics:drowned_belt',
      'relics:aqua_walker',
      'relics:jellyfish_necklace',
      'artifacts:flippers',
      'artifacts:snorkel',
    ],
    rewards: [
      {id: 'minecraft:cod', count: 15},
      {id: 'minecraft:salmon', count: 15},
      {id: 'minecraft:tropical_fish', count: 15},
      {id: 'minecraft:pufferfish', count: 15},
      {id: 'blue_skies:municipal_monkfish', count: 15},
      {id: 'rankine:tuna', count: 15},
      {id: 'kubejs:everbright_token', count: 1},
      {id: 'minecraft:heart_of_the_sea', count: 1},
    ],
  });
});
