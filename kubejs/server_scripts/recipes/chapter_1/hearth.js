// You need to make a hearth because the hearth allows you to have a stable temperature and its you marking your flag in the soil and making a place that is safe, a home base.
// cold eye

onEvent('recipes', (event) => {
  setMilestoneRecipes({
    id: 'hearth',
    recipe: () => {
      event.remove({ output: 'cold_sweat:hearth' });
      event
        .shaped('cold_sweat:hearth', ['  a', 'bcb', 'dda'], {
          a: 'minecraft:iron_ingot',
          b: 'minecraft:leather',
          c: 'endrem:undead_soul',
          d: 'rankine:high_refractory_bricks'
        })
        .stage('chapter_1')
        .id('inconvenient:hearth');

      event
        .shaped('cold_sweat:hearth', ['  a', 'bcb', 'aba'], {
          a: 'minecraft:iron_ingot',
          b: '#forge:bricks',
          c: 'minecraft:furnace'
        })
        .stage('chapter_2')
        .id('inconvenient:hearth_2');
    },
    children: [
      {
        id: 'iron_ingot',
        recipe: () => {
          [
            'ecofriendly:smelted_iron_can_recipe',
            'charcoal_pit:cooking_recipes/pig_iron_smelting',
            'bloodmagic:smelting/ingot_iron',
            'occultism:smelting/iron_ingot_from_dust',
            'undergarden:smelt_depthrock_iron_ore',
            'immersiveengineering:smelting/iron_ingot_from_dust',
            'undergarden:smelt_shiverstone_iron_ore',
            'rankine:iron_ingot_from_rankine_iron_ore_smelting',
            'alchemistry:iron_ingot_from_smelting_iron_dust'
          ].forEach((id) => event.remove({ id: id }));
          event
            .smelting('minecraft:iron_ingot', 'rankine:hematite')
            .id('inconvenient:iron_ingot_from_hematite');
        },
        children: [
          {
            id: 'iron_nugget',
            recipe: () => {
              [
                'rankine:foraging/black_sand_foraging',
                'rankine:compat/create/crimsite_crushing',
                'rankine:crushing/antitaenite_ore_crushing',
                'rankine:crushing/banded_iron_formation_crushing',
                'rankine:crushing/black_sandstone_crushing',
                'rankine:crushing/chalcopyrite_block_crushing',
                'rankine:crushing/ferric_dripstone_block_crushing',
                'rankine:crushing/interspinifex_ore_crushing',
                'rankine:crushing/kamacite_ore_crushing',
                'rankine:crushing/taenite_ore_crushing',
                'rankine:crushing/tetrataenite_ore_crushing',
                'charcoal_pit:blooming_recipes/iron_ore',
                'charcoal_pit:blooming_recipes/iron_raw'
              ].forEach((id) => event.remove({ id: id }));
              event
                .custom({
                  type: 'charcoal_pit:blooming',
                  ingredient: { item: 'ecofriendly:smelted_iron_can_ym' },
                  result: 'minecraft:iron_nugget',
                  experience: 0.7,
                  cookingtime: 200
                })
                .id('inconvenient:iron_nugget_from_smelted_iron_can');
            },
            children: [
              {
                id: 'bloomery',
                recipe: () => {
                  event.remove({
                    id: 'charcoal_pit:bloomery'
                  });
                  event
                    .shaped('charcoal_pit:bloomeryy', ['aaa', 'aba', 'ccc'], {
                      a: 'rankine:refractory_bricks',
                      b: 'minecraft:furnace',
                      c: 'rankine:bronze_ingot'
                    })
                    .id('inconvenient:bloomery');
                },
                children: [
                  {
                    id: 'refractory_bricks',
                    children: [
                      {
                        id: 'refractory_brick',
                        recipe: () => {
                          [
                            'rankine:refractory_brick_campfire_cooking',
                            'rankine:refractory_brick_from_fire_clay_ball_smelting'
                          ].forEach((id) => event.remove({ id: id }));

                          event.smelting(
                            'rankine:refractory_brick',
                            'kubejs:dry_unfired_refractory_brick'
                          );
                        },
                        children: [
                          {
                            id: 'dry_unfired_refractory_brick',
                            recipe: () => {
                              event
                                .custom({
                                  type: 'hexerei:drying_rack',
                                  ingredients: [
                                    { item: 'kubejs:unfired_refractory_brick' }
                                  ],
                                  output: {
                                    item: 'kubejs:dry_unfired_refractory_brick'
                                  },
                                  dryingTimeInTicks: 3000
                                })
                                .id(
                                  'inconvenient:dry_unfired_refractory_brick'
                                );
                            },
                            children: [
                              {
                                id: 'unfired_refractory_brick',
                                recipe: () => {
                                  event.shaped(
                                    '2x kubejs:unfired_refractory_brick',
                                    ['aa'],
                                    { a: 'rankine:fire_clay_ball' }
                                  );
                                },
                                children: [
                                  {
                                    id: 'fire_clay_ball',
                                    recipe: () => {
                                      [
                                        'rankine:mixing/fire_clay_ball_mixing',
                                        'rankine:mixing/fire_clay_ball_mixing_alt'
                                      ].forEach((id) =>
                                        event.remove({ id: id })
                                      );
                                      event.custom({
                                        type: 'rankine:mixing',
                                        mixTime: 100,
                                        ingredientTotal: 3,
                                        matScale: 2,
                                        fluidInput: {
                                          fluid: 'minecraft:water',
                                          amount: 50
                                        },
                                        input1: {
                                          tag: 'forge:sand',
                                          required: true,
                                          min: 0.4,
                                          max: 0.6
                                        },
                                        input2: {
                                          item: 'rankine:kaolinite',
                                          required: true,
                                          min: 0.2,
                                          max: 0.3
                                        },
                                        input3: {
                                          item: 'minecraft:clay_ball',
                                          required: true,
                                          min: 0.1,
                                          max: 0.2
                                        },
                                        result: {
                                          item: 'rankine:fire_clay_ball'
                                        }
                                      });
                                    },
                                    children: [
                                      {
                                        id: 'kaolinite',
                                        recipe: () => {
                                          [
                                            'rankine:crushing/gray_granite_crushing',
                                            'rankine:crushing/kaolin_crushing',
                                            'rankine:crushing/mudstone_crushing',
                                            'rankine:crushing/phosphorite_crushing',
                                            'rankine:crushing/rose_marble_crushing',
                                            'rankine:crushing/shale_crushing',
                                            'rankine:crushing/sylvinite_crushing',
                                            'rankine:crushing/bauxite_ore_crushing',
                                            'rankine:crushing/granite_crushing',
                                            'rankine:sluicing/laterite_sluicing'
                                          ].forEach((id) =>
                                            event.remove({ id: id })
                                          );
                                          event.custom({
                                            type: 'rankine:crushing',
                                            input: { item: 'rankine:kaolin' },
                                            guaranteed: [
                                              {
                                                item: 'rankine:kaolinite',
                                                count: 2
                                              }
                                            ],
                                            outputs: [
                                              { weight: 80, remove: false },
                                              {
                                                item: 'rankine:kaolinite',
                                                weight: 20,
                                                remove: false
                                              }
                                            ]
                                          });
                                        },
                                        children: [
                                          {
                                            // ? TODO: kaolin spawns in badlands in between terracotta stripes at y level [x-y]
                                            id: 'kaolin'
                                          }
                                        ]
                                      },
                                      {
                                        id: 'sand',
                                        recipe: () => {
                                          [
                                            'rankine:crushing/end_stone_crushing',
                                            'rankine:crushing/white_sandstone_crushing'
                                          ].forEach((id) =>
                                            event.remove({ id: id })
                                          );
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: 'mortar',
                        recipe: () => {
                          [
                            'rankine:mortar_with_perlite',
                            'rankine:mortar'
                          ].forEach((id) => event.remove({ id: id }));
                          event
                            .custom({
                              type: 'rankine:mixing',
                              mixTime: 100,
                              ingredientTotal: 2,
                              matScale: 1,
                              fluidInput: {
                                fluid: 'minecraft:water',
                                amount: 100
                              },
                              input1: {
                                tag: 'minecraft:sand',
                                required: true,
                                min: 0.5,
                                max: 0.8
                              },
                              input2: {
                                item: 'rankine:quicklime',
                                required: true,
                                min: 0.2,
                                max: 0.5
                              },
                              result: { item: 'rankine:mortar' }
                            })
                            .id('inconvenient:mortar');
                        },
                        children: [
                          // mix mortar with brick items to get 4 bricks. make bricks collection in each chapter supplementary recipes. make calcite come from limestone crushed with a diamond hammer. head calcite or calcite block to make quicklime or quicklime block.

                          //  hammer ceramic pots to get grog. mix grog with kaolinite and sand to get high refractory clay. use high refractory bricks in bloomery production. use ultra high in chapter 4 or 5.2
                          {
                            id: 'quicklime',
                            recipe: () => {
                              [
                                'rankine:compat/create/scoria_crushing',
                                'rankine:crushing/scoria_crushing',
                                'rankine:beehive_oven/quicklime_from_limestone_beehive_oven_cooking'
                              ].forEach((id) => event.remove({ id: id }));
                              event
                                .smelting('rankine:quicklime', 'rankine:chalk')
                                .id('inconvenient:quicklime');

                              event.custom({
                                type: 'rankine:beehive_oven',
                                input: { item: 'rankine:chalk' },
                                result: 'rankine:quicklime_block',
                                minCookTime: 2400,
                                maxCookTime: 4800
                              });
                            },
                            children: [
                              {
                                id: 'chalk',
                                recipe: () => {
                                  [
                                    'rankine:stonegen_sedimentary/chalk_generator',
                                    'rankine:stonegen_sedimentary/chalk_generator2'
                                  ].forEach((id) => event.remove({ id: id }));

                                  [
                                    'minecraft:dead_tube_coral_block',
                                    'minecraft:dead_brain_coral_block',
                                    'minecraft:dead_bubble_coral_block',
                                    'minecraft:dead_fire_coral_block',
                                    'minecraft:dead_horn_coral_block',
                                    'upgrade_aquatic:dead_acan_coral_block',
                                    'upgrade_aquatic:dead_finger_coral_block',
                                    'upgrade_aquatic:dead_star_coral_block',
                                    'upgrade_aquatic:dead_moss_coral_block',
                                    'upgrade_aquatic:dead_petal_coral_block',
                                    'upgrade_aquatic:dead_branch_coral_block',
                                    'upgrade_aquatic:dead_rock_coral_block',
                                    'upgrade_aquatic:dead_pillow_coral_block',
                                    'upgrade_aquatic:dead_silk_coral_block',
                                    'upgrade_aquatic:dead_chrome_coral_block'
                                  ].forEach((coral, index) => {
                                    event
                                      .custom({
                                        type: 'rankine:crushing',
                                        input: { item: coral },
                                        outputs: [
                                          { weight: 60, remove: false },
                                          {
                                            item: 'rankine:chalk',
                                            weight: 40,
                                            remove: false
                                          }
                                        ]
                                      })
                                      .id(`inconvenient:chalk_${index++}`);
                                  });
                                }
                              }
                            ]
                          },
                          {
                            id: 'ceramic_bucket',
                            children: [
                              {
                                id: 'unfired_clay_bucket',
                                children: [
                                  {
                                    // ? spawns near water
                                    id: 'clay',
                                    recipe: () => {
                                      [
                                        'biomancy:clay_ball_from_stone_powder',
                                        'rankine:compat/create/limestone_crushing',
                                        'rankine:crushing/chalk_crushing',
                                        'rankine:crushing/limestone_crushing',
                                        'rankine:crushing/marlstone_crushing',
                                        'rankine:crushing/siltstone_crushing',
                                        'rankine:crushing/slate_crushing',
                                        'rankine:crushing/white_marble_crushing',
                                        'tconstruct:tools/severing/terracube_clay'
                                      ].forEach((id) =>
                                        event.remove({ id: id })
                                      );
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'furnace',
                    recipe: () => {
                      [
                        'minecraft:furnace',
                        'blue_skies:furnace_compat'
                      ].forEach((id) => event.remove({ id: id }));
                      event
                        .shaped('minecraft:furnace', ['aaa', 'a a', 'aaa'], {
                          a: 'minecraft:brick'
                        })
                        .id('iconvenient:furnace')
                        .stage('chapter_1');

                      event
                        .shaped('minecraft:furnace', ['aaa', 'a a', 'aaa'], {
                          a: '#forge:cobblestone'
                        })
                        .id('iconvenient:furnace_2')
                        .stage('chapter_2');
                    },
                    children: [
                      {
                        id: 'brick',
                        recipe: () => {
                          [
                            'minecraft:brick',
                            'charcoal_pit:cooking_recipes/brick'
                          ].forEach((id) => event.remove({ id: id }));
                          event
                            .campfireCooking(
                              'minecraft:brick',
                              'kubejs:dry_unfired_brick'
                            )
                            .id('inconvenient:brick');
                          event
                            .smelting(
                              'minecraft:brick',
                              'kubejs:dry_unfired_brick'
                            )
                            .id('inconvenient:brick_2');
                        },
                        children: [
                          {
                            id: 'dry_unfired_brick',
                            recipe: () => {
                              event
                                .custom({
                                  type: 'hexerei:drying_rack',
                                  ingredients: [
                                    {
                                      item: 'charcoal_pit:unfired_brick'
                                    }
                                  ],
                                  output: {
                                    item: 'kubejs:dry_unfired_brick'
                                  },
                                  dryingTimeInTicks: 3000
                                })
                                .id('inconvenient:dry_unfired_brick');
                            }
                          },
                          {
                            id: 'campfire',
                            children: [
                              {
                                // ? bury log piles underground light on fire and cover. mine the charcoal ones it stops smoking
                                id: 'charcoal',
                                recipe: () => {
                                  [
                                    'architects_palette:charcoal_from_charcoal_blocks',
                                    'mekanism:charcoal',
                                    'mekanism:storage_blocks/charcoal',
                                    'charcoal_pit:fire_starter'
                                  ].forEach((id) => event.remove({ id: id }));

                                  event.shaped(
                                    'charcoal_pit:fire_starter',
                                    [' a', 'b '],
                                    {
                                      a: '#forge:rods/wooden',
                                      b: 'minecraft:flint'
                                    }
                                  );
                                },
                                children: [
                                  {
                                    id: 'log_pile',
                                    children: [
                                      {
                                        id: 'flint_axe',
                                        children: [
                                          {
                                            id: 'rope',
                                            recipe: () => {
                                              [
                                                'farmersdelight:rope',
                                                'farmersdelight:rope_from_safety_net'
                                              ].forEach((id) =>
                                                event.remove({ id: id })
                                              );
                                              event
                                                .shaped(
                                                  'farmersdelight:rope',
                                                  ['aa', 'aa'],
                                                  {
                                                    a: 'paragon_textiles:plant_fibers'
                                                  }
                                                )
                                                .id('inconvenient:rope');

                                              event.replaceInput(
                                                'rankine:rope',
                                                'farmersdelight:rope'
                                              );
                                            },
                                            children: [
                                              {
                                                // ? strip grass with a knife
                                                id: 'plant_fibers',
                                                recipe: () => {
                                                  event.remove({
                                                    id: 'paragon_textiles:plant_fibers'
                                                  });

                                                  event.shapeless(
                                                    'paragon_textiles:plant_fibers',
                                                    [
                                                      '#createaddition:plants',
                                                      '#createaddition:plants',
                                                      '#createaddition:plants',
                                                      '#createaddition:plants'
                                                    ]
                                                  );
                                                },
                                                children: [
                                                  {
                                                    id: 'flint_knife',
                                                    recipe: () => {
                                                      [
                                                        'rankine:flint_knife'
                                                      ].forEach((id) =>
                                                        event.remove({ id: id })
                                                      );

                                                      event
                                                        .shaped(
                                                          'rankine:flint_knife',
                                                          [' a', 'b '],
                                                          {
                                                            a: 'minecraft:flint',
                                                            b: '#forge:rods/wooden'
                                                          }
                                                        )
                                                        .stage('chapter_1');
                                                    },
                                                    children: [
                                                      {
                                                        // ? get flint from gravel. shovel to get easier
                                                        id: 'flint',
                                                        recipe: () => {
                                                          event
                                                            .shapeless(
                                                              'minecraft:flint',
                                                              [
                                                                '#forge:gravel',
                                                                '#forge:gravel',
                                                                '#forge:gravel'
                                                              ]
                                                            )
                                                            .stage('chapter_1');
                                                        },
                                                        recipe: () => {
                                                          [
                                                            'rankine:crushing/black_marble_crushing',
                                                            'rankine:crushing/blackstone_crushing',
                                                            'rankine:crushing/cobblestone_crushing',
                                                            'rankine:crushing/gilded_blackstone_crushing',
                                                            'rankine:crushing/graywacke_crushing'
                                                          ].forEach((id) =>
                                                            event.remove({
                                                              id: id
                                                            })
                                                          );
                                                        },
                                                        children: [
                                                          {
                                                            id: 'flint_shovel'
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'bronze_ingot',
                    children: [
                      {
                        id: 'kiln',
                        recipe: () => {
                          [
                            'immersiveengineering:crafting/plate_aluminum_hammering',
                            'immersiveengineering:alloysmelter/insulating_glass',
                            'immersiveengineering:alloysmelter/brass',
                            'immersiveengineering:alloysmelter/rose_gold',
                            'immersiveengineering:alloysmelter/constantan',
                            'immersiveengineering:alloysmelter/invar',
                            'immersiveengineering:alloysmelter/electrum'
                          ].forEach((id) => event.remove({ id: id }));
                        },
                        children: [
                          {
                            id: 'engineers_hammer',
                            recipe: () => {
                              [
                                'immersiveengineering:crafting/plate_iron_hammering',
                                'immersiveengineering:crafting/plate_silver_hammering',
                                'immersiveengineering:crafting/plate_gold_hammering',
                                'immersiveengineering:crafting/plate_steel_hammering',
                                'immersiveengineering:crafting/plate_electrum_hammering',
                                'immersiveengineering:crafting/plate_uranium_hammering',
                                'immersiveengineering:crafting/plate_copper_hammering',
                                'immersiveengineering:crafting/plate_nickel_hammering',
                                'immersiveengineering:crafting/plate_lead_hammering',
                                'immersiveengineering:crafting/plate_constantan_hammering',
                                'immersiveengineering:crafting/hammer'
                              ].forEach((id) => event.remove({ id: id }));

                              event.remove({
                                input: 'immersiveengineering:hammer'
                              });

                              event
                                .shaped(
                                  'immersiveengineering:hammer',
                                  [' ab', ' ca', 'c  '],
                                  {
                                    a: 'rankine:refractory_brick',
                                    b: 'farmersdelight:rope',
                                    c: '#forge:rods/wooden'
                                  }
                                )
                                .id('inconvenient:engineers_hammer');
                            }
                          },
                          {
                            id: 'kiln_brick',
                            recipe: () => {
                              [
                                'immersiveengineering:alloybrick',
                                'createaddition:compat/immersiveengineering/item_application/kiln_brick',
                                'immersiveengineering:crafting/alloybrick'
                              ].forEach((id) => event.remove({ id: id }));

                              event
                                .shaped(
                                  'immersiveengineering:alloybrick',
                                  ['aba', 'bab', 'aba'],
                                  {
                                    a: 'rankine:refractory_brick',
                                    b: 'rankine:mortar'
                                  }
                                )
                                .id('inconvenient:kiln_brick');
                            }
                          }
                        ]
                      },
                      {
                        id: 'tin_ingot',
                        recipe: () => {
                          [
                            'rankine:tin_ingot_from_native_ore_smelting',
                            'mekanism:processing/tin/ingot/from_raw_smelting'
                          ].forEach((id) => event.remove({ id: id }));

                          event.custom({
                            type: 'charcoal_pit:orekiln',
                            ingredients: [{ item: 'rankine:cassiterite' }],
                            result: { item: 'rankine:tin_ingot' },
                            amount: 1
                          });

                          event.custom({
                            type: 'rankine:beehive_oven',
                            input: { item: 'rankine:cassiterite_block' },
                            result: 'rankine:tin_block',
                            minCookTime: 2400,
                            maxCookTime: 4800
                          });
                        },
                        children: [
                          {
                            id: 'cassiterite',
                            recipe: () => {
                              [
                                'rankine:crushing/cassiterite_ore_crushing',
                                'rankine:crushing/bismuthinite_ore_crushing',
                                'rankine:crushing/petalite_ore_crushing',
                                'rankine:crushing/wolframite_ore_crushing',
                                'mekanism:processing/tin/raw_storage_blocks/from_raw',
                                'mekanism:processing/tin/ingot/from_raw_blasting'
                              ].forEach((id) => event.remove({ id: id }));
                              event
                                .custom({
                                  input: { item: 'rankine:cassiterite_ore' },
                                  type: 'rankine:crushing',
                                  guaranteed: [
                                    {
                                      item: 'rankine:cassiterite',
                                      tier: 'minecraft:stone',
                                      count: 1
                                    },
                                    {
                                      item: 'rankine:cassiterite',
                                      count: 1,
                                      tier: 'minecraft:diamond'
                                    }
                                  ]
                                })
                                .id('inconvenient:cassiterite');
                            },
                            children: [
                              {
                                id: 'stone_hammer',
                                recipe: () => {
                                  event.remove({ id: 'rankine:stone_hammer' });
                                  event
                                    .shaped(
                                      'rankine:stone_hammer',
                                      ['aaa', 'aba', ' b '],
                                      {
                                        a: '#forge:stone',
                                        b: '#forge:rods/wooden'
                                      }
                                    )
                                    .id('inconvenient:stone_hammer');
                                },
                                children: [
                                  {
                                    id: 'flint_pickaxe'
                                  }
                                ]
                              },
                              {
                                // ? TODO spawns in taigas at y level [x-y]
                                id: 'cassiterite_ore'
                              }
                            ]
                          },
                          {
                            id: 'alloy_mold',
                            recipe: () => {
                              event.remove({ type: 'charcoal_pit:orekiln' });
                            }
                          }
                        ]
                      },
                      {
                        id: 'copper_ingot',
                        recipe: () => {
                          [
                            'immersiveengineering:smelting/copper_ingot_from_dust',
                            'alchemistry:copper_ingot_from_smelting_copper_dust',
                            'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
                            'malum:copper_ingot_from_nugget',
                            'tconstruct:common/materials/copper_ingot_from_nuggets',
                            'create:crafting/materials/copper_ingot',
                            'rankine:copper_ingot_from_porphyry_copper_smelting',
                            'minecraft:copper_ingot_from_smelting_deepslate_copper_ore',
                            'occultism:smelting/copper_ingot_from_dust',
                            'rankine:copper_ingot_from_rankine_copper_ore_smelting',
                            'minecraft:copper_ingot_from_smelting_raw_copper',
                            'minecraft:copper_ingot_from_smelting_copper_ore',
                            'bloodmagic:smelting/ingot_copper'
                          ].forEach((id) => event.remove({ id: id }));
                          event.custom({
                            type: 'charcoal_pit:orekiln',
                            ingredients: [{ item: 'rankine:malachite' }],
                            result: { item: 'minecraft:copper_ingot' },
                            amount: 1
                          });

                          event.custom({
                            type: 'rankine:beehive_oven',
                            input: { item: 'rankine:malachite_block' },
                            result: 'minecraft:copper_block',
                            minCookTime: 2400,
                            maxCookTime: 4800
                          });
                        },
                        children: [
                          {
                            id: 'malachite',
                            recipe: () => {
                              [
                                'rankine:crushing/malachite_ore_crushing',
                                'rankine:crushing/chalcocite_ore_crushing',
                                'rankine:crushing/rankine_copper_ore_crushing',
                                'rankine:crushing/rankine_gold_ore_crushing',
                                'rankine:green_dye_from_malachite'
                              ].forEach((id) => event.remove({ id: id }));

                              event
                                .custom({
                                  input: { item: 'rankine:malachite_ore' },
                                  type: 'rankine:crushing',
                                  guaranteed: [
                                    {
                                      item: 'rankine:malachite',
                                      tier: 'minecraft:stone',
                                      count: 1
                                    },
                                    {
                                      item: 'rankine:malachite',
                                      count: 2,
                                      tier: 'minecraft:diamond'
                                    }
                                  ]
                                })
                                .id('inconvenient:malachite');
                            },
                            children: [
                              {
                                id: 'prospecting_stick',
                                recipe: () => {
                                  event.remove({
                                    id: 'rankine:prospecting_stick'
                                  });
                                  event
                                    .shaped(
                                      'rankine:prospecting_stick',
                                      [' ab', ' ca', 'a  '],
                                      {
                                        a: '#forge:rods/wooden',
                                        b: 'minecraft:flint',
                                        c: 'farmersdelight:rope'
                                      }
                                    )
                                    .id('inconvenient:prospecting_stick');
                                },
                                children: [
                                  {
                                    id: 'stick',
                                    recipe: () => {
                                      [
                                        'rankine:crushing/leaves_crushing',
                                        'rankine:crushing/sapling_crushing',
                                        'rankine:foraging/badlands_foraging',
                                        'rankine:foraging/desert_foraging',
                                        'rankine:foraging/podzol_foraging'
                                      ].forEach((id) =>
                                        event.remove({ id: id })
                                      );
                                    }
                                  }
                                ]
                              },
                              {
                                // ? malachite is found in swamps a y level [x-y]
                                id: 'malachite_ore'
                              },
                              {
                                id: 'altimeter',
                                recipe: () => {
                                  ['rankine:altimeter'].forEach((id) =>
                                    event.remove({ id: id })
                                  );
                                  event
                                    .shaped(
                                      'rankine:altimeter',
                                      ['aaa', 'aba', 'aaa'],
                                      {
                                        a: 'rankine:tin_ingot',
                                        b: 'ecofriendly:smelted_iron_can_ym'
                                      }
                                    )
                                    .id('inconvenient:altimeter');
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { id: 'bellows' },
              {
                id: 'smelted_iron_can_ym',
                recipe: () => {
                  event
                    .smelting(
                      'ecofriendly:smelted_iron_can_ym',
                      'ecofriendly:iron_can_ym'
                    )
                    .id('inconvenient:smelted_iron_can');
                },
                children: [
                  {
                    // ? spawns on the ground in forests and beaches
                    id: 'ecofriendly:iron_can_ym'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'leather',
        recipe: () => {
          // TODO figure out ['minecraft:rabbit_hide', 'rankine:synthetic_leather', 'cold_sweat:hoglin_hide', 'rankine:beaver_pelt', 'totemic:buffalo_hide', 'ecofriendly:mush_skin_leather_ym', 'za:fox_hide'] leather?
          [
            'rankine:leather_from_beaver_pelt',
            'cold_sweat:hoglin_leather',
            'rankine:leather_from_synthetic_leather',
            'minecraft:leather',
            'totemic:leather_from_hide',
            'ecofriendly:muskin_leather_recipe',
            'hexerei:leather_from_drying_rack',
            'rankine:foraging/plains_foraging',
            'rankine:foraging/savanna_foraging'
          ].forEach((id) => event.remove({ id: id }));
          event
            .custom({
              type: 'hexerei:drying_rack',
              ingredients: [{ item: 'kubejs:wet_tanned_hide' }],
              output: { item: 'minecraft:leather' },
              dryingTimeInTicks: 3000
            })
            .id('inconvenient:leather');
        },
        children: [
          {
            id: 'wet_tanned_hide',
            recipe: () => {
              event
                .custom({
                  type: 'rankine:mixing',
                  mixTime: 100,
                  ingredientTotal: 1,
                  matScale: 1,
                  fluidInput: { fluid: 'kubejs:tanning_fluid', amount: 250 },
                  input1: {
                    item: 'kubejs:dried_hide',
                    required: true,
                    min: 1.0,
                    max: 1.0
                  },
                  result: { item: 'kubejs:wet_tanned_hide' }
                })
                .id('inconvenient:wet_tanned_hide');
            },
            children: [
              {
                id: 'dried_hide',
                recipe: () => {
                  event
                    .custom({
                      type: 'hexerei:drying_rack',
                      ingredients: [{ item: 'kubejs:salted_hide' }],
                      output: { item: 'kubejs:dried_hide' },
                      dryingTimeInTicks: 3000
                    })
                    .id('inconvenient:dried_hide');
                },
                children: [
                  {
                    id: 'salted_hide',
                    recipe: () => {
                      event.remove({
                        output: 'kubejs:salted_hide',
                        type: 'minecraft:crafting_shapeless'
                      });
                      event
                        .shapeless('kubejs:salted_hide', [
                          'kubejs:stitched_hide',
                          'salt:salt',
                          'salt:salt',
                          'salt:salt'
                        ])
                        .id('inconvenient:salted_hide');
                    },
                    children: [
                      {
                        id: 'stitched_hide',
                        recipe: () => {
                          event
                            .shaped(
                              'kubejs:stitched_hide',
                              [' a ', 'aaa', ' a '],
                              { a: 'minecraft:rotten_flesh' }
                            )
                            .id('inconvenient:stitched_hide');
                          event
                            .shapeless('kubejs:stitched_hide', [
                              'biomancy:living_flesh',
                              'biomancy:living_flesh'
                            ])
                            .id('inconvenient:stitched_hide_2');
                        },
                        children: [
                          {
                            // ? drops from zombies
                            id: 'rotten_flesh',
                            children: [
                              {
                                id: 'flint_spear'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: 'salt',
                        children: [
                          {
                            // ? TODO found in beaches at y level [x-y]
                            id: 'rock_salt'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'tanning_fluid',
                recipe: () => {
                  event
                    .custom({
                      type: 'charcoal_pit:barrel',
                      item_in: { item: 'kubejs:rotten_brain' },
                      in_amount: 1,
                      fluid_in: { fluid: 'minecraft:water', amount: 1000 },
                      fluid_out: {
                        fluid: 'kubejs:tanning_fluid',
                        amount: 1000
                      },
                      time: 24000
                    })
                    .id('inconvenient:tanning_fluid');
                },
                children: [
                  {
                    id: 'barrel',
                    recipe: () => {
                      ['charcoal_pit:barrel', 'charcoal_pit:barrel2'].forEach(
                        (id) => event.remove({ id: id })
                      );
                      event
                        .shaped('charcoal_pit:barrel', ['aba', 'a a', 'aca'], {
                          a: 'rankine:cork',
                          b: '#forge:rods/wooden',
                          c: '#minecraft:wooden_slabs'
                        })
                        .id('inconvenient:barrel');
                    },
                    children: [
                      {
                        // ? strip from cork oat trees found in savannah
                        id: 'cork'
                      }
                    ]
                  },
                  // TODO: Figure out loot?
                  {
                    // ? drops from zombies & & husks & flesh blobs
                    id: 'rotten_brain'
                  }
                ]
              },
              {
                id: 'mixing_barrel',
                recipe: () => {
                  event.remove({ id: 'rankine:mixing_barrel' });
                  event
                    .shaped('rankine:mixing_barrel', ['aba', 'ccc'], {
                      a: 'ecofriendly:smelted_iron_can_ym',
                      b: 'charcoal_pit:barrel',
                      c: '#minecraft:slabs'
                    })
                    .id('inconvenient:mixing_barrel');
                }
              }
            ]
          },
          {
            id: 'drying_rack',
            recipe: () => {
              ['hexerei:herb_drying_rack'].forEach((id) =>
                event.remove({ id: id })
              );
              event
                .shaped('hexerei:herb_drying_rack', [' a ', 'bcb'], {
                  a: 'farmersdelight:rope',
                  b: '#forge:rods/wooden',
                  c: '#minecraft:wooden_slabs'
                })
                .id('inconvenient:drying_rack');
            }
          }
        ]
      },
      {
        // ? drops from flesh blobs in lost city. lost city found in badlands
        id: 'undead_soul',
        recipe: () => {
          ['endrem:undead_eye'].forEach((id) => event.remove({ id: id }));
        },
        children: [
          {
            id: 'natures_compass',
            recipe: () => {
              event.remove({ id: 'naturescompass:natures_compass' });
              event
                .shaped(
                  'naturescompass:naturescompass',
                  ['aba', 'bcb', 'aba'],
                  {
                    a: '#minecraft:saplings',
                    b: 'farmersdelight:tree_bark',
                    c: 'minecraft:copper_ingot'
                  }
                )
                .id('inconvenient:naturescompass');
            },
            children: [
              {
                id: 'dowsing_rod',
                recipe: () => {
                  event.remove({ id: 'hexerei:dowsing_rod' });
                  event
                    .shaped('hexerei:dowsing_rod', [' a ', 'aba', 'aca'], {
                      a: '#forge:rods/wooden',
                      b: 'minecraft:flint',
                      c: 'farmersdelight:rope'
                    })
                    .id('inconvenient:dowsing_rod');
                }
              },
              {
                id: 'tree_bark',
                recipe: () => {
                  [
                    'rankine:stripping/birch_log_stripping',
                    'rankine:stripping/black_birch_log_stripping',
                    'rankine:stripping/red_birch_log_stripping',
                    'rankine:stripping/yellow_birch_log_stripping'
                  ].forEach((id) => event.remove({ id: id }));

                  event.custom({
                    type: 'rankine:stripping',
                    chance: 0.3,
                    input: { item: 'rankine:juniper_log' },
                    result: { item: 'kubejs:juniper_bark', count: 1 }
                  });

                  [
                    'minecraft:birch_log',
                    'rankine:black_birch_log',
                    'rankine:red_birch',
                    'rankine:yellow_birch_log'
                  ].forEach((wood) => {
                    event.custom({
                      type: 'rankine:stripping',
                      chance: 0.3,
                      input: { item: wood },
                      result: { item: 'farmersdelight:tree_bark', count: 1 }
                    });
                  });
                }
              }
            ]
          }
        ]
      },
      {
        id: 'high_refractory_bricks',
        // use grog from pottery only made in the beehive oven and filtered water made with bone char
        children: [
          {
            id: 'high_refractory_brick',
            recipe: () => {
              [
                'rankine:high_refractory_brick_from_carbon',
                'rankine:high_refractory_brick_from_magnesite',
                'rankine:high_refractory_brick_from_silicon_carbide',
                'rankine:high_refractory_brick_from_magnesia'
              ].forEach((id) => event.remove({ id: id }));
              event.smelting(
                'rankine:high_refractory_brick',
                'kubejs:dry_unfired_high_refractory_brick'
              );
            },
            children: [
              {
                id: 'dry_unfired_high_refractory_brick',
                recipe: () => {
                  event
                    .custom({
                      type: 'hexerei:drying_rack',
                      ingredients: [
                        { item: 'kubejs:unfired_high_refractory_brick' }
                      ],
                      output: {
                        item: 'kubejs:dry_unfired_high_refractory_brick'
                      },
                      dryingTimeInTicks: 3000
                    })
                    .id('inconvenient:dry_unfired_high_refractory_brick');
                },
                children: [
                  {
                    id: 'unfired_high_refractory_brick',
                    recipe: () => {
                      event
                        .shaped(
                          '2x kubejs:unfired_high_refractory_brick',
                          ['aa'],
                          { a: 'kubejs:high_fire_clay_ball' }
                        )
                        .stage('chapter_1');
                    },
                    children: [
                      {
                        id: 'high_fire_clay_ball',
                        recipe: () => {
                          event.custom({
                            type: 'rankine:mixing',
                            mixTime: 100,
                            ingredientTotal: 3,
                            matScale: 2,
                            fluidInput: {
                              fluid: 'minecraft:water',
                              amount: 50
                            },
                            input1: {
                              item: 'rankine:fire_clay_ball',
                              required: true,
                              min: 0.4,
                              max: 0.6
                            },
                            input2: {
                              item: 'rankine:bone_char',
                              required: true,
                              min: 0.1,
                              max: 0.2
                            },
                            input3: {
                              item: 'kubejs:grog',
                              required: true,
                              min: 0.3,
                              max: 0.4
                            },
                            result: { item: 'kubejs:high_fire_clay_ball' }
                          });
                        },
                        children: [
                          {
                            id: 'grog',
                            recipe: () => {
                              event
                                .custom({
                                  type: 'rankine:crushing',
                                  input: { item: 'rankine:porcelain' },
                                  guaranteed: [{ item: 'kubejs:grog' }]
                                })
                                .id('inconvenient:grog');
                            },
                            children: [
                              {
                                id: 'porcelain',
                                children: [
                                  {
                                    id: 'porcelain_clay_ball',
                                    recipe: () => {
                                      [
                                        'rankine:mixing/porcelain_clay_ball_mixing'
                                      ].forEach((id) =>
                                        event.remove({ id: id })
                                      );

                                      event.custom({
                                        type: 'rankine:mixing',
                                        mixTime: 100,
                                        ingredientTotal: 4,
                                        matScale: 2,
                                        fluidInput: {
                                          fluid: 'minecraft:water',
                                          amount: 25
                                        },
                                        input1: {
                                          item: 'rankine:kaolinite',
                                          required: true,
                                          min: 0.2,
                                          max: 0.4
                                        },
                                        input2: {
                                          item: 'rankine:plagioclase_feldspar',
                                          required: true,
                                          min: 0.2,
                                          max: 0.4
                                        },
                                        input3: {
                                          item: 'minecraft:flint',
                                          required: true,
                                          min: 0.2,
                                          max: 0.4
                                        },
                                        input4: {
                                          item: 'minecraft:clay_ball',
                                          required: true,
                                          min: 0.2,
                                          max: 0.4
                                        },
                                        result: {
                                          item: 'rankine:porcelain_clay_ball'
                                        }
                                      });
                                    },
                                    children: [
                                      {
                                        id: 'plagioclase_feldspar',
                                        recipe: () => {
                                          [
                                            'rankine:crushing/stone_crushing',
                                            'rankine:crushing/anorthosite_crushing',
                                            'rankine:crushing/baddeleyite_ore_crushing',
                                            'rankine:crushing/basaltic_tuff_crushing',
                                            'rankine:crushing/coltan_ore_crushing',
                                            'rankine:crushing/comendite_crushing',
                                            'rankine:crushing/crying_obsidian_crushing',
                                            'rankine:crushing/desert_sandstone_crushing',
                                            'rankine:crushing/diorite_crushing',
                                            'rankine:crushing/episyenite_crushing',
                                            'rankine:crushing/gabbro_crushing',
                                            'rankine:crushing/gneiss_crushing',
                                            'rankine:crushing/granodiorite_crushing',
                                            'rankine:crushing/hornblende_andesite_crushing',
                                            'rankine:crushing/ilmenite_ore_crushing',
                                            'rankine:crushing/komatiite_crushing',
                                            'rankine:crushing/phyllite_crushing',
                                            'rankine:crushing/rhyolite_crushing',
                                            'rankine:crushing/ringwoodine_crushing',
                                            'rankine:crushing/sandstone_crushing',
                                            'rankine:crushing/snowflake_obsidian_crushing',
                                            'rankine:crushing/tholeiitic_basalt_crushing',
                                            'rankine:crushing/troctolite_crushing',
                                            'rankine:crushing/tuff_crushing',
                                            'rankine:crushing/wadsleyone_crushing'
                                          ].forEach((id) =>
                                            event.remove({ id: id })
                                          );

                                          event.custom({
                                            type: 'rankine:crushing',
                                            input: {
                                              item: 'minecraft:stone'
                                            },
                                            guaranteed: [
                                              { item: 'minecraft:cobblestone' }
                                            ],
                                            outputs: [
                                              { weight: 80, remove: false },
                                              {
                                                item: 'rankine:plagioclase_feldspar',
                                                weight: 40,
                                                remove: false,
                                                tier: 'minecraft:iron'
                                              }
                                            ]
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
                            id: 'bone_char',
                            children: [
                              {
                                // ? build a beehive oven multiblock and fire bone blocks
                                id: 'beehive_oven_pit',
                                recipe: () => {
                                  event.replaceInput(
                                    { output: 'rankine:beehive_oven_pit' },
                                    '#forge:storage_blocks/coal',
                                    'charcoal_pit:charcoal_block'
                                  );

                                  event.replaceInput(
                                    { output: 'minecraft:flint_and_steel' },
                                    'minecraft:iron_ingot',
                                    'minecraft:copper_ingot'
                                  );

                                  event.remove({
                                    id: 'tconstruct:tools/building/flint_and_brick'
                                  });
                                  event.shapeless(
                                    'tconstruct:flint_and_brick',
                                    ['minecraft:flint', 'minecraft:brick']
                                  );
                                }
                              },
                              {
                                id: 'bone_block',
                                recipe: () => {
                                  [
                                    'minecraft:bone_meal_from_bone_block',
                                    'minecraft:bone_block'
                                  ].forEach((id) => event.remove({ id: id }));

                                  event.shaped(
                                    'minecraft:bone_block',
                                    ['aaa', 'aaa', 'aaa'],
                                    {
                                      a: 'minecraft:bone'
                                    }
                                  );
                                },
                                children: [
                                  {
                                    id: 'bone',
                                    recipe: () => {
                                      [
                                        'rankine:crushing/netherrack_crushing',
                                        'rankine:crushing/soul_sandstone_crushing',
                                        'rankine:foraging/soul_sand_foraging',
                                        'rankine:foraging/soul_soil_foraging'
                                      ].forEach((id) =>
                                        event.remove({ id: id })
                                      );
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });
});
