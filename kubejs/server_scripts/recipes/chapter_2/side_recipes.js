onEvent('recipes', (event) => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        { id: 'gateways', recipe: () => {}, children: [] },
        {
          id: 'end_eyes',
          recipe: () => {
            ['endrem:exotic_eye'].forEach((id) => event.remove({ id: id }));
            event
              .shaped('endrem:exotic_eye', ['aba', 'bcb', 'aba'], {
                a: 'tconstruct:seared_brick',
                b: 'minecraft:copper_ingot',
                c: 'occultism:datura'
              })
              .stage('eye_exotic')
              .id('inconvenient:exotic_eye');

            event
              .shaped('endrem:guardian_eye', ['aba', 'bcb', 'aba'], {
                a: 'minecraft:prismarine_shard',
                b: 'naturesaura:gold_powder',
                c: 'minecraft:prismarine_crystals'
              })
              .stage('eye_guardian')
              .id('inconvenient:guardian_eye');
          }
        },
        {
          id: 'lost_stories',
          recipe: () => {
            event
              .shaped(`kubejs:everbright_lost_story`, ['abb', 'bcc', 'bcc'], {
                a: 'paragon_textiles:silk',
                b: 'minecraft:leather',
                c: `kubejs:everbright_lost_page`
              })
              .stage('chapter_2');
          }
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'blue_skies:charoite_helmet',
              'blue_skies:charoite_chestplate',
              'blue_skies:charoite_leggings',
              'blue_skies:charoite_boots'
            ].forEach((id) => event.remove({ id: id }));

            stageArmors(event, [
              {
                tier: 'blue_skies:charoite',
                input: 'blue_skies:charoite',
                previousTier: 'minecraft:iron',
                stage: 'chapter_2',
                master: 'charoite'
              }
            ]);
          }
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
              'tconstruct:common/materials_and_you'
            ].forEach((id) => event.remove({ id: id }));

            event.custom({
              type: 'tconstruct:casting_table',
              fluid: { name: 'tconstruct:seared_stone', amount: 250 },
              cast: { item: 'farmersdelight:canvas', cast_consumed: true },
              result: 'tconstruct:mighty_smelting',
              cooling_time: 100
            });

            event
              .shapeless('tconstruct:puny_smelting', [
                'farmersdelight:canvas',
                'kubejs:grout_ball'
              ])
              .stage('chapter_2');

            event
              .shapeless('tconstruct:materials_and_you', [
                'farmersdelight:canvas',
                'tconstruct:pattern'
              ])
              .stage('chapter_2');

            event
              .shaped(
                Item.of(
                  'patchouli:guide_book',
                  '{"patchouli:book":"naturesaura:book"}'
                ),
                ['ab'],
                { a: 'farmersdelight:canvas', b: 'naturesaura:gold_leaf' }
              )
              .stage('chapter_2');
            event
              .shaped(
                Item.of(
                  'patchouli:guide_book',
                  '{"patchouli:book":"totemic:totempedia"}'
                ),
                ['ab'],
                { a: 'farmersdelight:canvas', b: 'blue_skies:winter_leaves' }
              )
              .stage('chapter_2');
            event
              .shaped('malum:encyclopedia_arcana', ['ab'], {
                a: 'farmersdelight:canvas',
                b: 'malum:holy_sap'
              })
              .stage('chapter_2');
            event
              .shaped('blue_skies:blue_journal', ['ab'], {
                a: 'farmersdelight:canvas',
                b: 'blue_skies:turquoise_stone'
              })
              .stage('chapter_2');
            event
              .shaped('occultism:dictionary_of_spirits', ['ab'], {
                a: 'farmersdelight:canvas',
                b: 'occultism:datura'
              })
              .stage('chapter_2');
          }
        },
        {
          id: 'totems',
          recipe: () => {
            ['rankine:totem_of_cobbling'].forEach((id) =>
              event.remove({ id: id })
            );

            event
              .custom({
                type: 'hexerei:mixingcauldron',
                liquid: {
                  fluid: 'minecraft:lava'
                },
                liquidOutput: {
                  fluid: 'minecraft:lava'
                },
                ingredients: [
                  {
                    item: 'rankine:pewter_hammer'
                  },
                  {
                    item: 'minecraft:cobblestone'
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot'
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot'
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot'
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot'
                  },
                  {
                    item: 'tconstruct:amethyst_bronze_ingot'
                  },
                  {
                    item: 'minecraft:cobblestone'
                  }
                ],
                output: {
                  item: 'rankine:totem_of_cobbling',
                  count: 1
                },
                fluidLevelsConsumed: 2000,
                global: true
              })
              .id('inconvenient:totem_of_cobbling');
          }
        }
      ]
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
          'architects_palette:heavy_stone_bricks'
        ].forEach((id) => event.remove({ id: id }));
        event.shaped('2x charcoal_pit:sandy_brick', ['ab', 'ba'], {
          a: 'charcoal_pit:sandy_brick_item',
          b: 'rankine:mortar'
        });
        event.shaped('4x architects_palette:iron_ore_bricks', ['ab', 'bc'], {
          a: 'minecraft:iron_ingot',
          b: 'rankine:mortar',
          c: 'minecraft:stone_bricks'
        });
        event.shaped('2x minecraft:polished_blackstone_bricks', ['ab', 'ba'], {
          a: 'minecraft:polished_blackstone',
          b: 'rankine:mortar'
        });
        event.shaped('2x architects_palette:heavy_stone_bricks', ['ab', 'ba'], {
          a: 'minecraft:stone_bricks',
          b: 'rankine:mortar'
        });
        event.shaped('2x architects_palette:myonite_bricks', ['ab', 'ba'], {
          a: 'architects_palette:myonite',
          b: 'rankine:mortar'
        });
        event.shaped('2x architects_palette:dripstone_bricks', ['ab', 'ba'], {
          a: 'minecraft:dripstone_block',
          b: 'rankine:mortar'
        });
        event.shaped(
          '2x architects_palette:heavy_dripstone_bricks',
          ['ab', 'ba'],
          {
            a: 'architects_palette:dripstone_bricks',
            b: 'rankine:mortar'
          }
        );
        event.shaped(
          '2x architects_palette:heavy_calcite_bricks',
          ['ab', 'ba'],
          {
            a: 'architects_palette:calcite_bricks',
            b: 'rankine:mortar'
          }
        );
        event.shaped('2x architects_palette:calcite_bricks', ['ab', 'ba'], {
          a: 'minecraft:calcite',
          b: 'rankine:mortar'
        });
        event.shaped('2x minecraft:deepslate_bricks', ['ab', 'ba'], {
          a: 'minecraft:polished_deepslate',
          b: 'rankine:mortar'
        });
      }
    },

    {
      id: 'ground_tap',
      recipe: () => {},
      children: [
        {
          id: 'metal_pipe',
          recipe: () => {
            event.shaped(`3x rankine:metal_pipe`, ['aaa'], {
              a: 'tconstruct:amethyst_bronze_ingot'
            });
          }
        }
      ]
    },
    {
      // place carved pumpkin on a hay block
      id: 'straw_golem',
      recipe: () => {
        ['strawgolem:straw_hat'].forEach((id) => event.remove({ id: id }));

        event.shaped('strawgolem:straw_hat', [' a ', 'aaa'], {
          a: 'minecraft:hay_block'
        });
      },
      children: [
        {
          id: 'carved_pumpkin',
          children: [
            {
              id: 'shears',
              recipe: () => {
                event.shaped(`minecraft:shears`, [' a', 'a '], {
                  a: `rankine:pewter_ingot`
                });
              }
            }
          ]
        },
        {
          id: 'hay',
          recipe: () => {
            event.replaceInput(
              { input: 'minecraft:wheat' },
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
                  'immersiveengineering:cloche/wheat'
                ].forEach((id) => event.remove({ id: id }));

                event.custom({
                  type: 'immersiveengineering:cloche',
                  results: [
                    { item: 'kubejs:wheat', count: 2 },
                    { item: 'minecraft:wheat_seeds' }
                  ],
                  input: { item: 'minecraft:wheat_seeds' },
                  soil: { tag: 'forge:dirt' },
                  time: 560,
                  render: { type: 'stacking', block: 'minecraft:wheat' }
                });
                event.shapeless('9x kubejs:wheat', ['minecraft:hay_block']);
              }
            }
          ]
        }
      ]
    },
    {
      id: 'cooking',
      recipe: () => {
        event.shaped('farmersdelight:cooking_pot', ['aba', 'cdc', 'ccc'], {
          a: 'minecraft:brick',
          b: 'rankine:pewter_shovel',
          c: 'rankine:pewter_ingot',
          d: 'minecraft:water_bucket'
        });

        event.replaceInput(
          { output: 'farmersdelight:stove' },
          'minecraft:iron_ingot',
          'rankine:pewter_ingot'
        );

        event.replaceInput(
          { output: 'farmersdelight:skillet' },
          'minecraft:iron_ingot',
          'rankine:pewter_ingot'
        );
      }
    },
    {
      id: 'tea_kettle',
      recipe: () => {
        event.shaped('farmersrespite:kettle', ['aba', 'cdc', 'cec'], {
          a: `#forge:rods/wooden`,
          b: 'minecraft:leather',
          c: 'minecraft:copper_ingot',
          d: 'minecraft:bucket',
          e: 'rankine:pewter_ingot'
        });
      }
    },
    {
      id: 'tinkers_tables',
      recipe: () => {
        event.replaceInput(
          {
            output: ['tconstruct:cast_chest', 'tconstruct:part_chest']
          },
          '#forge:chests',
          'paragon_textiles:basket'
        );
      },
      children: [
        {
          id: 'pattern',
          recipe: () => {
            event.shaped('tconstruct:pattern', ['ab', 'ba'], {
              a: 'rankine:jute',
              b: '#forge:rods/wooden'
            });
          }
        }
      ]
    },
    {
      id: 'carts',
      recipe: () => {
        [
          'astikorcarts:supply_cart',
          'astikorcarts:plow',
          'astikorcarts:animal_cart',
          'astikorcarts:wheel'
        ].forEach((id) => event.remove({ id: id }));

        event.shaped('astikorcarts:plow', ['aaa', 'bcb', 'dbd'], {
          a: 'minecraft:iron_hoe',
          b: '#forge:rods/wooden',
          c: '#minecraft:planks',
          d: 'astikorcarts:wheel'
        });
        event.shaped('astikorcarts:wheel', ['aba', 'bcb', 'aba'], {
          a: '#forge:rods/wooden',
          b: 'minecraft:iron_ingot',
          c: '#minecraft:planks'
        });
        event.shaped('astikorcarts:animal_cart', ['aaa', 'aba', 'cac'], {
          a: '#minecraft:planks',
          b: 'minecraft:iron_ingot',
          c: 'astikorcarts:wheel'
        });
        event.shaped('astikorcarts:supply_cart', ['aba', 'aba', 'cac'], {
          a: '#minecraft:planks',
          b: 'paragon_textiles:basket',
          c: 'astikorcarts:wheel'
        });
      }
    },
    {
      id: 'organic_compost',
      recipe: () => {
        ['farmersdelight:organic_compost_from_rotten_flesh'].forEach((id) =>
          event.remove({ id: id })
        );

        event.shapeless('farmersdelight:organic_compost', [
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost'
        ]);
      },
      children: []
    },
    {
      id: 'thermometer',
      recipe: () => {
        event.custom({
          type: 'tconstruct:casting_table',
          cast: { item: 'kubejs:glass_tube' },
          cast_consumed: true,
          fluid: { name: 'rankine:liquid_mercury', amount: 810 },
          result: 'cold_sweat:thermometer',
          cooling_time: 100
        });
      },
      children: [
        {
          id: 'glass_tube',
          recipe: () => {
            event.custom({
              type: 'tconstruct:casting_table',
              cast: { item: 'tconstruct:ingot_cast' },
              cast_consumed: false,
              fluid: { name: 'tconstruct:molten_glass', amount: 90 },
              result: 'kubejs:glass_tube',
              cooling_time: 100
            });
          },
          children: [
            {
              id: 'molten_glass',
              recipe: () => {
                event.custom({
                  type: 'tconstruct:melting',
                  ingredient: { item: 'ecofriendly:sea_glass_ym' },
                  result: { fluid: 'tconstruct:molten_glass', amount: 1000 },
                  temperature: 605,
                  time: 54
                });
              }
            }
          ]
        },
        {
          id: 'mercury_smelting',
          recipe: () => {
            event.custom({
              type: 'tconstruct:melting',
              ingredient: { item: 'rankine:mercury' },
              result: { fluid: 'rankine:liquid_mercury', amount: 90 },
              temperature: 1450,
              time: 158
            });
            event.custom({
              type: 'tconstruct:melting',
              ingredient: { item: 'rankine:mercury_nugget' },
              result: { fluid: 'rankine:liquid_mercury', amount: 10 },
              temperature: 1450,
              time: 158
            });
            event.custom({
              type: 'tconstruct:melting',
              ingredient: { item: 'rankine:mercury_block' },
              result: { fluid: 'rankine:liquid_mercury', amount: 810 },
              temperature: 1450,
              time: 158
            });

            event.custom({
              type: 'tconstruct:casting_table',
              cast: { item: 'tconstruct:ingot_cast' },
              cast_consumed: false,
              fluid: { name: 'rankine:mercury', amount: 90 },
              result: 'rankine:mercury',
              cooling_time: 100
            });

            event.custom({
              type: 'tconstruct:casting_table',
              cast: { item: 'tconstruct:ingot_cast' },
              cast_consumed: false,
              fluid: { name: 'rankine:mercury', amount: 10 },
              result: 'rankine:mercury_nugget',
              cooling_time: 100
            });

            event.custom({
              type: 'tconstruct:casting_basin',
              fluid: { name: 'rankine:liquid_mercury', amount: 810 },
              result: 'rankine:mercury_block',
              cooling_time: 203
            });
          },
          children: [
            {
              id: 'mercury',
              recipe: () => {
                [
                  'blue_skies:pyrope_gem_from_blasting_everdawn_pyrope_ore',
                  'blue_skies:pyrope_gem_from_blasting_everbright_pyrope_ore',
                  'blue_skies:pyrope_gem_from_smelting_everbright_pyrope_ore',
                  'blue_skies:pyrope_gem_from_smelting_everdawn_pyrope_ore'
                ].forEach((id) => event.remove({ id: id }));
                event.custom({
                  type: 'rankine:crushing',
                  input: { item: 'blue_skies:everbright_pyrope_ore' },
                  guaranteed: [{ item: 'minecraft:cobblestone' }],
                  outputs: [
                    { weight: 80, remove: false },
                    {
                      item: 'blue_skies:pyrope_gem',
                      weight: 40,
                      remove: false
                    },
                    {
                      item: 'blue_skies:pyrope_gem',
                      weight: 20,
                      remove: false
                    },
                    {
                      item: 'rankine:mercury',
                      weight: 5,
                      remove: false,
                      tier: 'minecraft:diamond'
                    }
                  ]
                });

                event.custom({
                  type: 'rankine:crushing',
                  input: { item: 'blue_skies:everdawn_pyrope_ore' },
                  guaranteed: [{ item: 'minecraft:cobblestone' }],
                  outputs: [
                    { weight: 80, remove: false },
                    {
                      item: 'blue_skies:pyrope_gem',
                      weight: 40,
                      remove: false
                    },
                    {
                      item: 'blue_skies:pyrope_gem',
                      weight: 20,
                      remove: false
                    },
                    {
                      item: 'rankine:mercury',
                      weight: 5,
                      remove: false,
                      tier: 'minecraft:diamond'
                    }
                  ]
                });
              },
              children: [{ id: 'pyrope_ore', recipe: () => {}, children: [] }]
            }
          ]
        }
      ]
    },
    {
      id: 'recycled_carrier_bag',
      recipe: () => {
        ['ecofriendly:reusable_bag_recipe_ym'].forEach((id) =>
          event.remove({ id: id })
        );

        event.shaped(
          `ecofriendly:recycled_carrier_bag_ym`,
          ['abc', 'bda', 'caa'],
          {
            a: 'farmersdelight:canvas',
            b: 'paragon_textiles:silk',
            c: 'paragon_textiles:fabric_plain',
            d: 'ecofriendly:plastic_bag_ym'
          }
        );
      }
    },
    {
      id: 'f3_tools',
      recipe: () => {
        [
          'rankine:photometer',
          'rankine:speedometer',
          'rankine:biometer'
        ].forEach((id) => event.remove({ id: id }));
        event.shaped(`rankine:photometer`, [' a ', 'aba', ' a '], {
          a: 'rankine:sterling_silver_ingot',
          b: 'blue_skies:charoite'
        });
        event.shaped(`rankine:speedometer`, [' a ', 'bcb', ' a '], {
          a: 'blue_skies:ventium_ingot',
          b: 'blue_skies:falsite_ingot',
          c: 'blue_skies:aquite'
        });
        event.shaped(`rankine:biometer`, [' a ', 'aba', ' a '], {
          a: 'tconstruct:amethyst_bronze_ingot',
          b: 'blue_skies:diopside_gem'
        });
      }
    },
    {
      id: 'sewing_table',
      recipe: () => {
        ['cold_sweat:sewing_table'].forEach((id) => event.remove({ id: id }));
        event.shaped(`cold_sweat:sewing_table`, ['aaa', 'bbb', 'bbb'], {
          a: 'paragon_textiles:fabric_red',
          b: '#minecraft:planks'
        });
      },
      children: [
        {
          id: 'fabric_red',
          recipe: () => {
            ['paragon_textiles:fabric_red'].forEach((id) =>
              event.remove({ id: id })
            );
            event.shapeless('paragon_textiles:fabric_red', [
              'paragon_textiles:fabric_plain',
              'minecraft:red_dye'
            ]);
          }
        }
      ]
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
          'minecraft:bucket'
        ].forEach((id) => event.remove({ id: id }));
        event.custom({
          type: 'tconstruct:casting_table',
          cast: { item: 'ceramicbucket:ceramic_bucket' },
          cast_consumed: true,
          fluid: { name: 'tconstruct:molten_iron', amount: 270 },
          result: 'minecraft:bucket',
          cooling_time: 100
        });
      }
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
            fluidInput: { fluid: 'rankine:resin', amount: 250 },
            input1: {
              item: 'kubejs:dried_hide',
              required: true,
              min: 1.0,
              max: 1.0
            },
            result: { item: 'kubejs:wet_tanned_hide' }
          })
          .id('inconvenient:wet_tanned_hide_from_resin');
      }
    },
    {
      id: 'tipi',
      recipe: () => {
        ['totemic:tipi_from_hide', 'totemic:tipi_from_wool'].forEach((id) =>
          event.remove({ id: id })
        );
        event.shaped('totemic:tipi', ['aba', 'bcb', 'b b'], {
          a: '#forge:rods/wooden',
          b: 'rankine:gun_cotton',
          c: 'minecraft:leather'
        });
      }
    },
    {
      id: 'fishing_rod',
      recipe: () => {
        ['minecraft:fishing_rod', 'paragon_textiles:fishing_rod'].forEach(
          (id) => event.remove({ id: id })
        );

        event.shaped(`minecraft:fishing_rod`, ['  a', ' ab', 'a b'], {
          a: `#forge:rods/wooden`,
          b: 'paragon_textiles:silk'
        });
      }
    },
    {
      id: 'drakkars',
      recipe: () => {
        overworldWoods.forEach((wood) => {
          event.remove({ id: `smallships:${wood}_drakkar` });
          event.shaped(`smallships:${wood}_drakkar`, ['aba', 'cdc', 'eee'], {
            a: 'paragon_textiles:silk',
            b: 'smallships:sail',
            c: 'paragon_textiles:basket_sturdy',
            d: 'minecraft:lead',
            e: `smallships:${wood}_cog`
          });
        });
      },
      children: [
        {
          id: 'cogs',
          recipe: () => {
            overworldWoods.forEach((wood) => {
              event.remove({ id: `smallships:${wood}_cog` });
              event.shaped(`smallships:${wood}_cog`, ['aaa', 'bcb', 'ddd'], {
                a: 'paragon_textiles:silk',
                b: 'paragon_textiles:basket',
                c: 'smallships:sail',
                d: `justaraftmod:${wood}_raft`
              });
            });
          },
          children: [
            {
              id: 'silk',
              recipe: () => {
                event.shaped('paragon_textiles:silk', ['aaa', 'aba', 'aaa'], {
                  a: 'rankine:cotton',
                  b: '#forge:rods/wooden'
                });
              }
            },
            {
              id: 'sail',
              recipe: () => {
                event.shaped('smallships:sail', ['aaa', 'aba', 'cbc'], {
                  a: 'rankine:gun_cotton',
                  b: '#minecraft:logs',
                  c: 'minecraft:lead'
                });
              },
              children: [
                {
                  id: 'lead',
                  recipe: () => {
                    event.shaped('minecraft:lead', [' aa', ' aa', 'a  '], {
                      a: 'paragon_textiles:silk'
                    });
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'cutting_board',
      recipe: () => {
        [
          'farmersdelight:cutting_board',
          'undergardendelight:cutting/knife/blood_mushroom',
          'farmersdelight:cutting/azure_bluet',
          'farmersdelight:cutting/pink_tulip',
          'farmersdelight:cutting/ink_sac',
          'undergardendelight:cutting/knife/veil_mushroom',
          'farmersdelight:cutting/allium',
          'undergardendelight:cutting/knife/blood_mushroom_globule',
          'farmersdelight:cutting/beef',
          'undergardendelight:cutting/knife/ink_mushroom',
          'farmersdelight:cutting/blue_orchid',
          'farmersdelight:cutting/lily_of_the_valley',
          'farmersdelight:cutting/cornflower',
          'farmersdelight:cutting/dandelion',
          'farmersdelight:cutting/poppy',
          'undergardendelight:cutting/knife/indigo_mushroom',
          'farmersdelight:cutting/red_tulip',
          'farmersdelight:cutting/white_tulip',
          'farmersdelight:cutting/orange_tulip',
          'undergardendelight:cutting/knife/mogmoss',
          'farmersdelight:cutting/oxeye_daisy',
          'farmersdelight:cutting/wither_rose'
        ].forEach((id) => event.remove({ id: id }));

        event.shaped('farmersdelight:cutting_board', ['abb', 'abb'], {
          a: '#forge:rods/wooden',
          b: 'malum:runewood_planks'
        });
      },
      children: []
    },
    {
      id: 'research_table',
      recipe: () => {
        event.remove({
          output: [`relics:researching_table`],
          type: 'minecraft:shaped'
        });
        event.shaped(`relics:researching_table`, ['aba', 'bcb', 'cdc'], {
          a: `naturesaura:gold_powder`,
          b: 'paragon_textiles:fabric_red',
          c: 'malum:runewood_log',
          d: 'malum:sacred_spirit'
        });
      }
    },
    {
      id: 'hopper',
      recipe: () => {
        ['minecraft:hopper'].forEach((id) => event.remove({ id: id }));

        event.shaped('minecraft:hopper', ['a a', 'aba', ' a '], {
          a: 'minecraft:iron_ingot',
          b: 'thirst:terracotta_bowl'
        });
      }
    }
  ]);
});
