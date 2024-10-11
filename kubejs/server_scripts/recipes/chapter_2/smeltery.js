// You have a strange dream that has something to do with a smeltery and you feel stable enough to begin searching for answers to the following questions: 1. Why was I in the bunker? 2. What happened to this world

// make grout with otherstone. burn grout in beehive oven to get seared stone. melt seared stone in melter to get seared stone liquid. pour into ingot cast to get seared brick.

const grasses = [
  'rankine:humus_grass_block',
  'rankine:loam_grass_block',
  'rankine:silty_loam_grass_block',
  'rankine:loamy_sand_grass_block',
  'rankine:sandy_loam_grass_block',
  'rankine:clay_loam_grass_block',
  'rankine:sandy_clay_loam_grass_block',
  'rankine:silty_clay_loam_grass_block',
  'rankine:sandy_clay_grass_block',
  'rankine:silty_clay_grass_block'
];

onEvent('recipes', (event) => {
  setMilestoneRecipes({
    id: 'smeltery',
    children: [
      {
        id: 'casting_basin'
      },
      {
        id: 'casting_table'
      },
      {
        id: 'seared_stones',
        recipe: () => {
          [
            'tconstruct:smeltery/casting/seared/stone/slab',
            'tconstruct:smeltery/casting/seared/stone/stairs',
            'tconstruct:smeltery/casting/seared/cobble/slab',
            'tconstruct:smeltery/casting/seared/cobble/stairs',
            'tconstruct:smeltery/casting/seared/cobble/wall',
            'tconstruct:smeltery/casting/seared/paver'
          ].forEach((id) => event.remove({ id: id }));

          event.custom({
            input: { item: 'tconstruct:seared_stone' },
            type: 'rankine:crushing',
            guaranteed: [
              {
                item: 'tconstruct:seared_cobble',
                tier: 'minecraft:stone',
                count: 1
              }
            ]
          });
        }
      },
      {
        id: 'seared_glasses',
        recipe: () => {
          [
            'tconstruct:smeltery/melting/glass/sand',
            'tconstruct:smeltery/melting/glass/sand_cast',
            'tconstruct:smeltery/entity_melting/heads/creeper'
          ].forEach((id) => event.remove({ id: id }));
        }
      },
      {
        id: 'seared_drain'
      },
      {
        id: 'seared_chute'
      },
      {
        id: 'seared_fuel_tanks'
      },
      {
        id: 'seared_ingot_tanks'
      },
      {
        id: 'seared_lantern'
      },
      {
        id: 'seared_faucet'
      },
      {
        id: 'seared_channel'
      },
      {
        id: 'smeltery_controller',
        children: [
          {
            id: 'molten_copper',
            recipe: () => {
              ['tconstruct:smeltery/melting/metal/copper/raw'].forEach((id) =>
                event.remove({ id: id })
              );

              event.custom({
                type: 'tconstruct:melting',
                ingredient: { item: 'rankine:malachite' },
                result: { fluid: 'tconstruct:molten_copper', amount: 90 },
                temperature: 500,
                time: 158
              });
            },
            children: []
          },
          {
            id: 'seared_melter',
            recipe: () => {
              ['tconstruct:smeltery/seared/melter'].forEach((id) =>
                event.remove({ id: id })
              );
              event.shaped('tconstruct:seared_melter', ['a a', 'aaa'], {
                a: 'tconstruct:seared_bricks'
              });
            },
            children: [
              {
                id: 'seared_bricks',
                recipe: () => {
                  [
                    'tconstruct:smeltery/casting/seared/bricks/block',
                    'tconstruct:smeltery/casting/seared/bricks/slab',
                    'tconstruct:smeltery/casting/seared/bricks/stairs',
                    'tconstruct:smeltery/casting/seared/bricks/wall',
                    'tconstruct:smeltery/casting/seared/cracked',
                    'tconstruct:smeltery/casting/seared/chiseled',
                    'tconstruct:smeltery/seared/seared_bricks_from_brick',
                    'tconstruct:smeltery/seared/seared_bricks_crafting'
                  ].forEach((id) => event.remove({ id: id }));

                  event.shaped('2x tconstruct:seared_bricks', ['ab', 'ba'], {
                    a: 'tconstruct:seared_brick',
                    b: 'rankine:mortar'
                  });

                  event.shaped('4x tconstruct:seared_bricks', ['ab', 'ba'], {
                    a: 'tconstruct:seared_brick',
                    b: 'kubejs:grout_ball'
                  });
                },
                children: [
                  {
                    id: 'seared_brick',
                    recipe: () => {
                      [
                        'tconstruct:smeltery/seared/seared_brick_kiln',
                        'tconstruct:smeltery/seared/seared_brick'
                      ].forEach((id) => event.remove({ id: id }));
                      event.smelting(
                        'tconstruct:seared_brick',
                        'kubejs:dry_unfired_seared_brick'
                      );
                    },
                    children: [
                      {
                        id: 'seared_stone_fluid',
                        recipe: () => {
                          ['tconstruct:smeltery/melting/seared/grout'].forEach(
                            (id) => event.remove({ id: id })
                          );
                        }
                      },
                      {
                        id: 'dry_unfired_seared_brick',
                        recipe: () => {
                          event.custom({
                            type: 'hexerei:drying_rack',
                            ingredients: [
                              { item: 'kubejs:unfired_seared_brick' }
                            ],
                            output: { item: 'kubejs:dry_unfired_seared_brick' },
                            dryingTimeInTicks: 3000
                          });
                        },
                        children: [
                          {
                            id: 'unfired_seared_brick',
                            recipe: () => {
                              event.shaped(
                                'kubejs:unfired_seared_brick',
                                ['aa'],
                                {
                                  a: 'kubejs:grout_ball'
                                }
                              );
                            },
                            children: [
                              {
                                id: 'grout_ball',
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
                                      item: 'rankine:cement_mix',
                                      required: true,
                                      min: 0.3,
                                      max: 0.4
                                    },
                                    input2: {
                                      tag: 'forge:sand',
                                      required: true,
                                      min: 0.55,
                                      max: 0.65
                                    },
                                    input3: {
                                      item: 'occultism:burnt_otherstone',
                                      required: true,
                                      min: 0.1,
                                      max: 0.2
                                    },
                                    result: { item: 'kubejs:grout_ball' }
                                  });
                                },
                                children: [
                                  {
                                    id: 'cement_mix',
                                    recipe: () => {
                                      event.custom({
                                        type: 'hexerei:pestle_and_mortar',
                                        ingredients: [
                                          { item: 'kubejs:clinker' },
                                          { item: 'rankine:gypsum' }
                                        ],
                                        output: {
                                          item: 'rankine:cement_mix',
                                          count: 1
                                        },
                                        grindingTime: 300
                                      });
                                    },
                                    children: [
                                      {
                                        id: 'clinker',
                                        recipe: () => {
                                          event.custom({
                                            type: 'rankine:beehive_oven',
                                            input: {
                                              item: 'kubejs:kiln_feed_block'
                                            },
                                            result: 'kubejs:clinker',
                                            minCookTime: 2400,
                                            maxCookTime: 4800
                                          });
                                        },
                                        children: [
                                          {
                                            id: 'kiln_feed_block',
                                            recipe: () => {
                                              event.shapeless(
                                                'kubejs:kiln_feed_block',
                                                [
                                                  'kubejs:kiln_feed',
                                                  'kubejs:kiln_feed',
                                                  'kubejs:kiln_feed',
                                                  'kubejs:kiln_feed'
                                                ]
                                              );
                                            },
                                            children: [
                                              {
                                                id: 'kiln_feed',
                                                recipe: () => {
                                                  event.custom({
                                                    type: 'hexerei:pestle_and_mortar',
                                                    ingredients: [
                                                      {
                                                        item: 'rankine:limestone'
                                                      },
                                                      {
                                                        tag: 'forge:clay_balls'
                                                      }
                                                    ],
                                                    output: {
                                                      item: 'kubejs:kiln_feed',
                                                      count: 1
                                                    },
                                                    grindingTime: 300
                                                  });
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        id: 'gypsum',
                                        recipe: () => {
                                          [
                                            'rankine:crushing/dolostone_crushing',
                                            'rankine:crushing/gypsic_dripstone_block_crushing',
                                            'rankine:crushing/honeystone_crushing',
                                            'rankine:crushing/nitric_dripstone_block_crushing',
                                            'rankine:crushing/red_sandstone_crushing'
                                          ].forEach((id) =>
                                            event.remove({ id: id })
                                          );

                                          event.custom({
                                            type: 'hexerei:pestle_and_mortar',
                                            ingredients: [
                                              {
                                                item: 'rankine:dolostone'
                                              },
                                              {
                                                item: 'rankine:dolostone'
                                              },
                                              {
                                                item: 'rankine:dolostone'
                                              },
                                              {
                                                item: 'rankine:dolostone'
                                              },
                                              { item: 'rankine:dolostone' }
                                            ],
                                            output: {
                                              item: 'rankine:gypsum',
                                              count: 3
                                            },
                                            grindingTime: 300
                                          });
                                        },
                                        children: [
                                          {
                                            id: 'dolostone',
                                            recipe: () => {
                                              event.custom({
                                                type: 'rankine:rock_generator',
                                                genType: 'sedimentary',
                                                input1: {
                                                  item: 'rankine:dolomite_block'
                                                },
                                                result: {
                                                  block: 'rankine:dolostone'
                                                }
                                              });
                                            },
                                            children: [
                                              {
                                                id: 'dolomite_block',
                                                children: [
                                                  {
                                                    id: 'dolomite',
                                                    recipe: () => {
                                                      [
                                                        'rankine:crushing/boracitic_dripstone_block_crushing',
                                                        'rankine:crushing/breccia_crushing',
                                                        'rankine:crushing/cinnabar_ore_crushing',
                                                        'rankine:crushing/dripstone_block_crushing',
                                                        'rankine:crushing/eclogite_crushing',
                                                        'rankine:crushing/halitic_dripstone_block_crushing',
                                                        'rankine:crushing/magnesitic_dripstone_block_crushing',
                                                        'rankine:crushing/mariposite_crushing',
                                                        'rankine:crushing/rankine_quartz_ore_crushing',
                                                        'rankine:crushing/skarn_crushing',
                                                        'rankine:crushing/zirconic_dripstone_block_crushing'
                                                      ].forEach((id) =>
                                                        event.remove({ id: id })
                                                      );

                                                      event.custom({
                                                        type: 'rankine:crushing',
                                                        input: {
                                                          item: 'rankine:boracitic_dripstone_block'
                                                        },
                                                        guaranteed: [
                                                          {
                                                            item: 'rankine:dolomite',
                                                            tier: 'minecraft:diamond'
                                                          }
                                                        ],
                                                        outputs: [
                                                          {
                                                            weight: 60,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'rankine:calcite',
                                                            weight: 30,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'rankine:dolomite',
                                                            weight: 10,
                                                            remove: false
                                                          }
                                                        ]
                                                      });

                                                      event.custom({
                                                        type: 'rankine:crushing',
                                                        input: {
                                                          item: 'minecraft:dripstone_block'
                                                        },
                                                        guaranteed: [
                                                          {
                                                            item: 'rankine:calcite',
                                                            tier: 'minecraft:diamond'
                                                          }
                                                        ],
                                                        outputs: [
                                                          {
                                                            weight: 30,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'rankine:calcite',
                                                            weight: 50,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'rankine:dolomite',
                                                            weight: 20,
                                                            remove: false
                                                          }
                                                        ]
                                                      });

                                                      event.custom({
                                                        type: 'rankine:crushing',
                                                        input: {
                                                          item: 'rankine:halitic_dripstone_block'
                                                        },
                                                        guaranteed: [
                                                          {
                                                            item: 'salt:salt',
                                                            tier: 'minecraft:diamond'
                                                          }
                                                        ],
                                                        outputs: [
                                                          {
                                                            weight: 20,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'salt:salt',
                                                            weight: 30,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'rankine:dolomite',
                                                            weight: 50,
                                                            remove: false
                                                          }
                                                        ]
                                                      });

                                                      event.custom({
                                                        type: 'rankine:crushing',
                                                        input: {
                                                          item: 'rankine:magnesitic_dripstone_block'
                                                        },
                                                        guaranteed: [
                                                          {
                                                            item: 'rankine:dolomite',
                                                            tier: 'minecraft:diamond'
                                                          }
                                                        ],
                                                        outputs: [
                                                          {
                                                            weight: 30,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'rankine:calcite',
                                                            weight: 50,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'rankine:dolomite',
                                                            weight: 20,
                                                            remove: false
                                                          }
                                                        ]
                                                      });

                                                      event.custom({
                                                        type: 'rankine:crushing',
                                                        input: {
                                                          item: 'rankine:zirconic_dripstone_block'
                                                        },
                                                        guaranteed: [
                                                          {
                                                            item: 'rankine:dolomite',
                                                            tier: 'minecraft:diamond'
                                                          }
                                                        ],
                                                        outputs: [
                                                          {
                                                            weight: 30,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'rankine:calcite',
                                                            weight: 50,
                                                            remove: false
                                                          },
                                                          {
                                                            item: 'rankine:dolomite',
                                                            weight: 20,
                                                            remove: false
                                                          }
                                                        ]
                                                      });
                                                    },
                                                    children: [
                                                      {
                                                        id: 'diorite',
                                                        recipe: () => {
                                                          event.custom({
                                                            type: 'rankine:rock_generator',
                                                            genType:
                                                              'intrusive_igneous',
                                                            result: {
                                                              block:
                                                                'minecraft:diorite'
                                                            },
                                                            input1: {
                                                              item: 'rankine:cassiterite_block'
                                                            },
                                                            input2: {
                                                              item: 'rankine:graphite_block'
                                                            }
                                                          });
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
                                  },
                                  {
                                    id: 'burnt_otherstone',
                                    recipe: () => {},
                                    children: [
                                      {
                                        id: 'otherstone',
                                        recipe: () => {},
                                        children: [
                                          {
                                            id: 'datura',
                                            recipe: () => {
                                              grasses.forEach((id) => {
                                                event.custom({
                                                  type: 'rankine:sluicing',
                                                  input: { item: id },
                                                  outputs: [
                                                    {
                                                      item: 'minecraft:dirt',
                                                      weight: 100
                                                    },
                                                    {
                                                      item: 'minecraft:sand',
                                                      weight: 16.5
                                                    },
                                                    {
                                                      item: 'rankine:silt',
                                                      weight: 1
                                                    },
                                                    {
                                                      item: 'rankine:compost',
                                                      weight: 25
                                                    },
                                                    {
                                                      item: 'rankine:jute_seeds',
                                                      weight: 1
                                                    },
                                                    {
                                                      item: 'occultism:datura_seeds',
                                                      weight: 1
                                                    }
                                                  ],
                                                  tool: {
                                                    item: 'rankine:wooden_gold_pan'
                                                  }
                                                });
                                              });
                                            },
                                            children: [
                                              {
                                                id: 'wooden_sifter',
                                                recipe: () => {},
                                                children: []
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
            id: 'seared_heater',
            recipe: () => {
              ['tconstruct:smeltery/seared/heater'].forEach((id) =>
                event.remove({ id: id })
              );
              event.shaped('tconstruct:seared_heater', ['aaa', 'a a', 'aaa'], {
                a: 'tconstruct:seared_bricks'
              });
            }
          }
        ]
      }
    ]
  });
});

// dream about being inside a forging area where lots of smelteries are pumping out iron casings for the bunker you see bellows in the dream. you walk to the car and drive to the bunker and go sleep in it. how is a hearth connected to the smeltery
