onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        {id: 'gateways', recipe: () => {}, children: []},
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
                global: true,
              })
              .id('inconvenient:cauldron_totem_of_cobbling');
          },
        },
      ],
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
                fluid: {name: 'rankine:mercury', amount: 90},
                result: 'rankine:mercury',
                cooling_time: 100,
              })
              .id('inconvenient:casting_table_mercury');

            event
              .custom({
                type: 'tconstruct:casting_table',
                cast: {item: 'tconstruct:ingot_cast'},
                cast_consumed: false,
                fluid: {name: 'rankine:mercury', amount: 10},
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
  ]);

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

  event
    .shaped(`rankine:lead_glass`, [' a ', 'aba', ' a '], {
      a: `rankine:lead_ingot`,
      b: '#forge:glass',
    })
    .id('inconvenient:shaped_lead_glass');
});
