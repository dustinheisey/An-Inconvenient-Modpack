onEvent('recipes', (event) => {
  setMilestoneRecipes({
    id: 'purulent_tea',
    recipe: () => {
      event.custom({
        type: 'farmersrespite:brewing',
        ingredients: [
          {
            item: 'bloodmagic:weakbloodshard'
          },
          {
            item: 'minecraft:fermented_spider_eye'
          }
        ],
        result: {
          item: 'farmersrespite:purulent_tea'
        },
        experience: 0.35,
        brewingtime: 2400,
        needwater: true
      });
    },
    children: [
      {
        id: 'blaze_cake',
        recipe: () => {
          event.remove({ output: 'create:blaze_cake' });
          event.recipes
            .createSequencedAssembly(
              ['create:blaze_cake'],
              'create:blaze_cake_base',
              [
                event.recipes.createFilling('create:blaze_cake_base', [
                  'create:blaze_cake_base',
                  Fluid.of('createaddition:seed_oil', 500000)
                ]),
                event.recipes.createFilling('create:blaze_cake_base', [
                  'create:blaze_cake_base',
                  Fluid.of('kubejs:liquid_tau', 100000)
                ]),
                event.recipes.createFilling('create:blaze_cake_base', [
                  'create:blaze_cake_base',
                  Fluid.of('tconstruct:magma', 500000)
                ]),
                event.recipes.createFilling('create:blaze_cake_base', [
                  'create:blaze_cake_base',
                  Fluid.of('bloodmagic:life_essence_fluid', 1000000)
                ]),
                event.recipes.createFilling('create:blaze_cake', [
                  'create:blaze_cake_base',
                  Fluid.of('minecraft:lava', 500000)
                ])
              ]
            )
            .transitionalItem('create:blaze_cake_base')
            .loops(1);
        },
        children: [
          {
            id: 'blaze_cake_base',
            recipe: () => {
              event.remove({ output: 'create:blaze_cake_base' });
              event.recipes
                .createCompacting(
                  'create:blaze_cake_base',
                  Fluid.of('kubejs:blaze_cake_batter', 1000000)
                )
                .heated();
            },
            children: [
              {
                id: 'cake_batter',
                recipe: () => {
                  event.recipes.create.mixing(
                    Fluid.of('kubejs:blaze_cake_batter', 1000),
                    [
                      Fluid.of('charcoal_pit:sunflower_oil', 1000),
                      'kubejs:egg_whip',
                      'kubejs:cake_mix'
                    ]
                  );
                },
                children: [
                  {
                    id: 'sunflower_oil',
                    recipe: () => {
                      event.recipes.createCompacting(
                        Fluid.of('charcoal_pit:sunflower_oil', 250),
                        'minecraft:sunflower'
                      );
                    }
                  },
                  {
                    id: 'vinegar',
                    recipe: () => {
                      event.custom({
                        type: 'charcoal_pit:barrel',
                        item_in: {
                          tag: 'forge:mushrooms'
                        },
                        fluid_in: {
                          fluid: 'kubejs:wine',
                          amount: 1000
                        },
                        fluid_out: {
                          fluid: 'charcoal_pit:vinegar_still',
                          amount: 250
                        },
                        flags: 1,
                        time: 6000
                      });
                    },
                    children: [
                      {
                        id: 'wine',
                        recipe: () => {
                          event.custom({
                            type: 'charcoal_pit:barrel',
                            item_in: {
                              tag: 'forge:mushrooms'
                            },
                            fluid_in: {
                              fluid: 'kubejs:berry_juice',
                              amount: 16000
                            },
                            fluid_out: {
                              fluid: 'kubejs:wine',
                              amount: 4000
                            },
                            item_out: {
                              item: 'kubejs:tartaric_acid'
                            },
                            flags: 1,
                            time: 6000
                          });
                        },
                        children: [
                          {
                            id: 'berry_juice',
                            recipe: () => {
                              event.recipes.createCompacting(
                                Fluid.of('kubejs:berry_juice', 50),
                                '#forge:berries'
                              );
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'egg_whip',
                    recipe: () => {
                      event.recipes.create.mixing('kubejs:egg_whip', [
                        '2x minecraft:egg'
                      ]);
                    }
                  },
                  {
                    id: 'cake_mix',
                    recipe: () => {
                      event.recipes.create.mixing('kubejs:cake_mix', [
                        '3x minecraft:sugar',
                        'kubejs:baking_powder',
                        '2x create:cinder_flour'
                      ]);
                    },
                    children: [
                      {
                        id: 'sugar',
                        recipe: () => {
                          event.remove({ output: 'minecraft:sugar' });
                          event.recipes.create.crushing(
                            ['minecraft:sugar'],
                            'minecraft:sugar_cane'
                          );
                        },
                        children: [
                          {
                            id: 'crushing_wheel',
                            recipe: () => {
                              event.custom({
                                type: 'create:mechanical_crafting',
                                result: {
                                  item: 'create:crushing_wheel',
                                  count: 2
                                },
                                pattern: [
                                  ' aaa ',
                                  'aabaa',
                                  'abcba',
                                  'aabaa',
                                  ' aaa '
                                ],
                                key: {
                                  a: 'create:andesite_alloy',
                                  b: 'rankine:promethium_ingot',
                                  c: 'rankine:rose_marble'
                                }
                              });
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        id: 'baking_powder',
                        recipe: () => {
                          event.recipes.create.mixing('kubejs:baking_powder', [
                            'kubejs:baking_soda',
                            'kubejs:cream_of_tartar'
                          ]);
                        },
                        children: [
                          {
                            id: 'baking_soda',
                            recipe: () => {
                              event.recipes.create
                                .mixing('kubejs:baking_soda', [
                                  'kubejs:soda_ash',
                                  'rankine:carbon_dioxide_gas_bottle'
                                ])
                                .heated();
                            },
                            children: [
                              {
                                id: 'soda_ash',
                                recipe: () => {
                                  event.custom({
                                    type: 'rankine:evaporation',
                                    processTime: 12000,
                                    input: {
                                      fluid: 'kubejs:carbonate_slurry'
                                    },
                                    outputs: [
                                      { item: 'kubejs:soda_ash', weight: 100 }
                                    ]
                                  });
                                },
                                children: [
                                  {
                                    id: 'carbonate_slurry',
                                    recipe: () => {
                                      event.recipes.create
                                        .mixing(
                                          Fluid.of(
                                            'kubejs:carbonate_slurry',
                                            1000
                                          ),
                                          [
                                            Fluid.of('minecraft:water', 1000),
                                            'kubejs:trona_dust'
                                          ]
                                        )
                                        .heated();
                                    },
                                    children: [
                                      {
                                        id: 'trona_dust',
                                        recipe: () => {
                                          event.recipes.create.crushing(
                                            ['kubejs:trona_dust'],
                                            'kubejs:crushed_trona'
                                          );
                                        },
                                        children: [
                                          {
                                            id: 'crushed_trona',
                                            recipe: () => {
                                              event.recipes.create.crushing(
                                                ['kubejs:crushed_trona'],
                                                'rankine:trona'
                                              );
                                            },
                                            children: [
                                              {
                                                id: 'trona',
                                                recipe: () => {
                                                  event.remove({
                                                    id: 'rankine:evaporation/water_river_evaporation'
                                                  });
                                                  event.custom({
                                                    type: 'rankine:evaporation',
                                                    processTime: 12000,
                                                    biomes: {
                                                      biomeTags: [
                                                        'minecraft:is_river',
                                                        'forge:is_swamp'
                                                      ]
                                                    },
                                                    input: {
                                                      fluid: 'minecraft:water'
                                                    },
                                                    outputs: [
                                                      {
                                                        item: 'minecraft:sand',
                                                        weight: 30
                                                      },
                                                      {
                                                        item: 'rankine:silt',
                                                        weight: 50
                                                      },
                                                      {
                                                        item: 'minecraft:clay_ball',
                                                        weight: 20
                                                      },
                                                      {
                                                        item: 'rankine:trona',
                                                        weight: 4
                                                      }
                                                    ]
                                                  });
                                                },
                                                children: [
                                                  {
                                                    id: 'evaporation_tower',
                                                    recipe: () => {
                                                      event.custom({
                                                        type: 'extendedcrafting:shaped_table',
                                                        result: {
                                                          item: 'rankine:evaporation_tower'
                                                        },
                                                        pattern: [
                                                          'aaa',
                                                          'bcb',
                                                          'ada'
                                                        ],
                                                        key: {
                                                          a: 'kubejs:cinder_ingot',
                                                          b: 'minecraft:magma_block',
                                                          c: 'immersivepetroleum:crudeoil_bucket',
                                                          d: 'minecraft:hopper'
                                                        }
                                                      });
                                                    },
                                                    children: [
                                                      {
                                                        id: 'mechanical_crafter',
                                                        recipe: () => {},
                                                        children: [
                                                          {
                                                            id: 'copper_plate',
                                                            recipe: () => {
                                                              event.custom({
                                                                type: 'create:pressing',
                                                                results: [
                                                                  {
                                                                    item: 'chemlib:copper_plate'
                                                                  }
                                                                ],
                                                                ingredients: [
                                                                  {
                                                                    item: 'minecraft:copper_ingot'
                                                                  }
                                                                ]
                                                              });
                                                            },
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
                              },
                              {
                                id: 'carbon_dioxide',
                                recipe: () => {
                                  event.recipes.create
                                    .mixing(
                                      'rankine:carbon_dioxide_gas_bottle',
                                      [
                                        Fluid.of(
                                          'charcoal_pit:vinegar_still',
                                          1000
                                        ),
                                        'kubejs:calcium_carbonate_dust'
                                      ]
                                    )
                                    .heated();
                                },
                                children: [
                                  {
                                    id: 'calcium_carbonate',
                                    recipe: () => {
                                      event.recipes.create.crushing(
                                        ['kubejs:calcium_carbonate_dust'],
                                        'rankine:gray_marble'
                                      );
                                    },
                                    children: [
                                      {
                                        id: 'gray_marble',
                                        recipe: () => {
                                          event.remove({
                                            id: 'rankine:stonegen_metamorphic/gray_marble_generator'
                                          });
                                          event.recipes.create
                                            .mixing('rankine:gray_marble', [
                                              'rankine:white_marble',
                                              'rankine:black_marble'
                                            ])
                                            .heated();
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id: 'cream_of_tartar',
                            recipe: () => {
                              event.recipes.create.crushing(
                                ['kubejs:cream_of_tartar'],
                                'kubejs:tartaric_acid'
                              );
                            }
                          }
                        ]
                      },
                      {
                        id: 'cinder_flour',
                        recipe: () => {
                          event.remove({ output: 'create:cinder_flour' });
                          event.recipes.create
                            .mixing('create:cinder_flour', [
                              'kubejs:cinder_dust'
                            ])
                            .heated();
                        },
                        children: [
                          {
                            id: 'cinder_dust',
                            recipe: () => {
                              event.recipes.create
                                .mixing('kubejs:cinder_dust', [
                                  'create:powdered_obsidian'
                                ])
                                .heated();
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'mixer',
                    recipe: () => {},
                    children: [
                      {
                        id: 'whisk',
                        recipe: () => {},
                        children: [
                          {
                            id: 'iron_plate',
                            recipe: () => {
                              event.custom({
                                type: 'create:pressing',
                                results: [{ item: 'chemlib:iron_plate' }],
                                ingredients: [{ item: 'minecraft:iron_ingot' }]
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
          },
          {
            id: 'liquid_tau',
            recipe: () => {
              event.custom({
                type: 'tconstruct:melting',
                ingredient: {
                  item: 'bloodmagic:strong_tau'
                },
                result: {
                  fluid: 'kubejs:liquid_tau',
                  amount: 1000
                },
                temperature: 1200,
                time: 30
              });
            },
            children: [
              {
                id: 'strong_tau',
                children: [
                  {
                    id: 'edge_of_the_hidden_realm',
                    recipe: () => {},
                    children: [
                      {
                        id: 'activation_crystal',
                        recipe: () => {
                          event.custom({
                            type: 'bloodmagic:altar',
                            input: {
                              item: 'create:sturdy_sheet'
                            },
                            upgradeLevel: 2,
                            altarSyphon: 40000,
                            consumptionRate: 40,
                            drainRate: 40,
                            output: {
                              item: 'bloodmagic:activationcrystalweak'
                            }
                          });
                        },
                        children: [{ id: 'sturdy_sheet', recipe: () => {} }]
                      },
                      {
                        id: 'ritual_diviner',
                        recipe: () => {
                          event.custom({
                            type: 'occultism:ritual',
                            ritual_type: 'occultism:craft',
                            activation_item: { item: 'create:sturdy_sheet' },
                            pentacle_id: 'occultism:craft_marid',
                            ritual_dummy: {
                              item: 'occultism:ritual_dummy/custom_ritual'
                            },
                            ingredients: [
                              {
                                item: 'bloodmagic:airscribetool'
                              },
                              {
                                item: 'bloodmagic:waterscribetool'
                              },
                              {
                                item: 'bloodmagic:firescribetool'
                              },
                              {
                                item: 'bloodmagic:earthscribetool'
                              }
                            ],
                            result: {
                              item: 'bloodmagic:ritualdiviner'
                            }
                          });
                        },
                        children: [
                          {
                            id: 'air_scribe_tool',
                            recipe: () => {
                              event.custom({
                                type: 'bloodmagic:altar',
                                input: {
                                  item: 'bloodmagic:bow_velocity_anointment'
                                },
                                upgradeLevel: 2,
                                altarSyphon: 2000,
                                consumptionRate: 2,
                                drainRate: 2,
                                output: {
                                  item: 'bloodmagic:airscribetool'
                                }
                              });
                            },
                            children: [
                              {
                                id: 'alchemy_table',
                                recipe: () => {
                                  event.shaped(
                                    'bloodmagic:alchemytable',
                                    ['aaa', 'bcb', 'ded'],
                                    {
                                      a: `rankine:black_marble`,
                                      b: '#minecraft:planks',
                                      c: 'blue_skies:horizonite_ingot',
                                      d: 'extendedcrafting:black_iron_ingot',
                                      e: 'bloodmagic:blankslate'
                                    }
                                  );
                                }
                              }
                            ]
                          },
                          {
                            id: 'earth_scribe_tool',
                            recipe: () => {
                              event.custom({
                                type: 'bloodmagic:altar',
                                input: {
                                  item: 'bloodmagic:fortune_anointment'
                                },
                                upgradeLevel: 2,
                                altarSyphon: 2000,
                                consumptionRate: 2,
                                drainRate: 2,
                                output: {
                                  item: 'bloodmagic:earthscribetool'
                                }
                              });
                            },
                            children: []
                          },
                          {
                            id: 'fire_scribe_tool',
                            recipe: () => {
                              event.custom({
                                type: 'bloodmagic:altar',
                                input: {
                                  item: 'bloodmagic:smelting_anointment'
                                },
                                upgradeLevel: 2,
                                altarSyphon: 2000,
                                consumptionRate: 2,
                                drainRate: 2,
                                output: {
                                  item: 'bloodmagic:firescribetool'
                                }
                              });
                            },
                            children: []
                          },
                          {
                            id: 'water_scribe_tool',
                            recipe: () => {
                              event.custom({
                                type: 'bloodmagic:altar',
                                input: {
                                  item: 'bloodmagic:holy_water_anointment'
                                },
                                upgradeLevel: 2,
                                altarSyphon: 2000,
                                consumptionRate: 2,
                                drainRate: 2,
                                output: {
                                  item: 'bloodmagic:waterscribetool'
                                }
                              });
                            },
                            children: []
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
            id: 'lava',
            recipe: () => {
              event.remove({
                id: 'rankine:treetapping/crimson_stem_treetapping'
              });
              event.remove({
                id: 'rankine:treetapping/warped_stem_treetapping'
              });
              event.custom({
                type: 'tconstruct:melting',
                ingredient: {
                  item: 'kubejs:mixed_pebble'
                },
                result: {
                  fluid: 'minecraft:lava',
                  amount: 50
                },
                temperature: 600,
                time: 30
              });
            },
            children: [
              {
                id: 'mixed_pebble',
                recipe: () => {
                  event.recipes.create.mixing('kubejs:mixed_pebble', [
                    'kubejs:turquoise_pebble',
                    'undergarden:depthrock_pebble',
                    'kubejs:lunar_pebble',
                    'kubejs:deadrock_pebble'
                  ]);
                },
                children: [
                  {
                    id: 'turquoise_pebble',
                    recipe: () => {
                      event.recipes.create.crushing(
                        [Item.of('kubejs:turquoise_pebble').withChance(0.5)],
                        'blue_skies:turquoise_stone'
                      );
                    }
                  },
                  {
                    id: 'depthrock_pebble',
                    recipe: () => {
                      event.remove({ output: 'undergarden:depthrock_pebble' });
                      event.recipes.create.crushing(
                        [
                          Item.of('undergarden:depthrock_pebble').withChance(
                            0.5
                          )
                        ],
                        'undergarden:depthrock'
                      );
                    }
                  },
                  {
                    id: 'lunar_pebble',
                    recipe: () => {
                      event.recipes.create.crushing(
                        [Item.of('kubejs:lunar_pebble').withChance(0.5)],
                        'blue_skies:lunar_stone'
                      );
                    }
                  },
                  {
                    id: 'deadrock_pebble',
                    recipe: () => {
                      event.recipes.create.crushing(
                        [Item.of('kubejs:deadrock_pebble').withChance(0.5)],
                        'twilightforest:deadrock'
                      );
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'magma_cream',
            recipe: () => {
              event.remove({
                output: `minecraft:magma_cream`,
                type: 'minecraft:crafting_shapeless'
              });
              event.recipes.create.haunting(
                'minecraft:magma_cream',
                'malum:unholy_sapball'
              );
            }
          }
        ]
      }
    ]
  });
});
