onEvent('recipes', event => {
  setMilestoneRecipes({
    id: 'purulent_tea',
    recipe: () => {
      event
        .custom({
          type: 'farmersrespite:brewing',
          ingredients: [
            {
              item: 'bloodmagic:weakbloodshard',
            },
            {
              item: 'minecraft:fermented_spider_eye',
            },
          ],
          result: {
            item: 'farmersrespite:purulent_tea',
          },
          experience: 0.35,
          brewingtime: 2400,
          needwater: true,
        })
        .id('inconvenient:brewing_purulent_tea');
    },
    children: [
      {
        id: 'blaze_cake',
        recipe: () => {
          event.remove({output: 'create:blaze_cake'});
          event.recipes
            .createSequencedAssembly(
              ['create:blaze_cake'],
              'create:blaze_cake_base',
              [
                event.recipes.createFilling('create:blaze_cake_base', [
                  'create:blaze_cake_base',
                  Fluid.of('createaddition:seed_oil', 500000),
                ]),
                event.recipes.createFilling('create:blaze_cake_base', [
                  'create:blaze_cake_base',
                  Fluid.of('kubejs:liquid_tau', 100000),
                ]),
                event.recipes.createFilling('create:blaze_cake_base', [
                  'create:blaze_cake_base',
                  Fluid.of('tconstruct:magma', 500000),
                ]),
                event.recipes.createFilling('create:blaze_cake_base', [
                  'create:blaze_cake_base',
                  Fluid.of('bloodmagic:life_essence_fluid', 1000000),
                ]),
                event.recipes.createFilling('create:blaze_cake', [
                  'create:blaze_cake_base',
                  Fluid.of('minecraft:lava', 500000),
                ]),
              ]
            )
            .transitionalItem('create:blaze_cake_base')
            .loops(1)
            .id('inconvenient:sequenced_assembly_blaze_cake');
        },
        children: [
          {
            id: 'blaze_cake_base',
            recipe: () => {
              event.remove({output: 'create:blaze_cake_base'});
              event.recipes
                .createCompacting(
                  'create:blaze_cake_base',
                  Fluid.of('kubejs:blaze_cake_batter', 1000000)
                )
                .heated()
                .id('inconvenient:compacting_blaze_cake_base');
            },
            children: [
              {
                id: 'cake_batter',
                recipe: () => {
                  event.recipes.create
                    .mixing(Fluid.of('kubejs:blaze_cake_batter', 1000), [
                      Fluid.of('charcoal_pit:sunflower_oil', 1000),
                      'kubejs:egg_whip',
                      'kubejs:cake_mix',
                    ])
                    .id('inconvenient:mixing_blaze_cake_batter');
                },
                children: [
                  {
                    id: 'sunflower_oil',
                    recipe: () => {
                      event.recipes
                        .createCompacting(
                          Fluid.of('charcoal_pit:sunflower_oil', 250),
                          'minecraft:sunflower'
                        )
                        .id('inconvenient:compacting_sunflower_oil');
                    },
                  },
                  {
                    id: 'vinegar',
                    recipe: () => {
                      event
                        .custom({
                          type: 'charcoal_pit:barrel',
                          item_in: {
                            tag: 'forge:mushrooms',
                          },
                          fluid_in: {
                            fluid: 'kubejs:wine',
                            amount: 1000,
                          },
                          fluid_out: {
                            fluid: 'charcoal_pit:vinegar_still',
                            amount: 250,
                          },
                          flags: 1,
                          time: 6000,
                        })
                        .id('inconvenient:barrel_vinegar_still');
                    },
                    children: [
                      {
                        id: 'wine',
                        recipe: () => {
                          event
                            .custom({
                              type: 'charcoal_pit:barrel',
                              item_in: {
                                tag: 'forge:mushrooms',
                              },
                              fluid_in: {
                                fluid: 'kubejs:berry_juice',
                                amount: 16000,
                              },
                              fluid_out: {
                                fluid: 'kubejs:wine',
                                amount: 4000,
                              },
                              item_out: {
                                item: 'kubejs:tartaric_acid',
                              },
                              flags: 1,
                              time: 6000,
                            })
                            .id('inconvenient:barrel_tartaric_acid');
                        },
                        children: [
                          {
                            id: 'berry_juice',
                            recipe: () => {
                              event.recipes
                                .createCompacting(
                                  Fluid.of('kubejs:berry_juice', 50),
                                  '#forge:berries'
                                )
                                .id('inconvenient:compacting_berry_juice');
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'egg_whip',
                    recipe: () => {
                      event.recipes.create
                        .mixing('kubejs:egg_whip', ['2x minecraft:egg'])
                        .id('inconvenient:mixing_egg_whip');
                    },
                  },
                  {
                    id: 'cake_mix',
                    recipe: () => {
                      event.recipes.create
                        .mixing('kubejs:cake_mix', [
                          '3x minecraft:sugar',
                          'kubejs:baking_powder',
                          '2x create:cinder_flour',
                        ])
                        .id('inconvenient:mixing_cake_mix');
                    },
                    children: [
                      {
                        id: 'sugar',
                        recipe: () => {
                          event.remove({output: 'minecraft:sugar'});
                          event.recipes.create
                            .crushing(
                              ['minecraft:sugar'],
                              'minecraft:sugar_cane'
                            )
                            .id('inconvenient:crushing_wheel_sugar');
                        },
                        children: [
                          {
                            id: 'crushing_wheel',
                            recipe: () => {
                              event
                                .custom({
                                  type: 'create:mechanical_crafting',
                                  result: {item: '2x create:crushing_wheel'},
                                  pattern: [
                                    ' aaa ',
                                    'aabaa',
                                    'abcba',
                                    'aabaa',
                                    ' aaa ',
                                  ],
                                  key: {
                                    a: 'create:andesite_alloy',
                                    b: 'rankine:promethium_ingot',
                                    c: 'rankine:rose_marble',
                                  },
                                })
                                .id('inconvenient:mechanical_crushing_wheel');
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        id: 'baking_powder',
                        recipe: () => {
                          event.recipes.create
                            .mixing('kubejs:baking_powder', [
                              'kubejs:baking_soda',
                              'kubejs:cream_of_tartar',
                            ])
                            .id('inconvenient:mixing_baking_powder');
                        },
                        children: [
                          {
                            id: 'baking_soda',
                            recipe: () => {
                              event.recipes.create
                                .mixing('kubejs:baking_soda', [
                                  'kubejs:soda_ash',
                                  'rankine:carbon_dioxide_gas_bottle',
                                ])
                                .heated()
                                .id('inconvenient:mixing_baking_soda');
                            },
                            children: [
                              {
                                id: 'soda_ash',
                                recipe: () => {
                                  event
                                    .custom({
                                      type: 'rankine:evaporation',
                                      processTime: 12000,
                                      input: {
                                        fluid: 'kubejs:carbonate_slurry',
                                      },
                                      outputs: [
                                        {item: 'kubejs:soda_ash', weight: 100},
                                      ],
                                    })
                                    .id('inconvenient:evaporation_soda_ash');
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
                                            'kubejs:trona_dust',
                                          ]
                                        )
                                        .heated()
                                        .id(
                                          'inconvenient:mixing_carbonate_slurry'
                                        );
                                    },
                                    children: [
                                      {
                                        id: 'trona_dust',
                                        recipe: () => {
                                          event.recipes.create
                                            .crushing(
                                              ['kubejs:trona_dust'],
                                              'kubejs:crushed_trona'
                                            )
                                            .id(
                                              'inconvenient:crushing_wheel_trona_dust'
                                            );
                                        },
                                        children: [
                                          {
                                            id: 'crushed_trona',
                                            recipe: () => {
                                              event.recipes.create
                                                .crushing(
                                                  ['kubejs:crushed_trona'],
                                                  'rankine:trona'
                                                )
                                                .id(
                                                  'inconvenient:crushing_wheel_crushed_trona'
                                                );
                                            },
                                            children: [
                                              {
                                                id: 'trona',
                                                recipe: () => {
                                                  event.remove({
                                                    id: 'rankine:evaporation/water_river_evaporation',
                                                  });
                                                  event
                                                    .custom({
                                                      type: 'rankine:evaporation',
                                                      processTime: 12000,
                                                      biomes: {
                                                        biomeTags: [
                                                          'minecraft:is_river',
                                                          'forge:is_swamp',
                                                        ],
                                                      },
                                                      input: {
                                                        fluid:
                                                          'minecraft:water',
                                                      },
                                                      outputs: [
                                                        {
                                                          item: 'minecraft:sand',
                                                          weight: 30,
                                                        },
                                                        {
                                                          item: 'rankine:silt',
                                                          weight: 50,
                                                        },
                                                        {
                                                          item: 'minecraft:clay_ball',
                                                          weight: 20,
                                                        },
                                                        {
                                                          item: 'rankine:trona',
                                                          weight: 4,
                                                        },
                                                      ],
                                                    })
                                                    .id(
                                                      'inconvenient:evaporation_trona'
                                                    );
                                                },
                                                children: [
                                                  {
                                                    id: 'evaporation_tower',
                                                    recipe: () => {
                                                      [
                                                        'rankine:evaporation_tower',
                                                      ].forEach(id =>
                                                        event.remove({id: id})
                                                      );
                                                      event
                                                        .custom({
                                                          type: 'extendedcrafting:shaped_table',
                                                          result: {
                                                            item: 'rankine:evaporation_tower',
                                                          },
                                                          pattern: [
                                                            'aaa',
                                                            'bcb',
                                                            'ada',
                                                          ],
                                                          key: {
                                                            a: 'kubejs:cinder_ingot',
                                                            b: 'minecraft:magma_block',
                                                            c: 'immersivepetroleum:crudeoil_bucket',
                                                            d: 'minecraft:hopper',
                                                          },
                                                        })
                                                        .id(
                                                          'inconvenient:basic_table_evaporation_tower'
                                                        );
                                                    },
                                                    children: [
                                                      {
                                                        id: 'mechanical_crafter',
                                                        recipe: () => {},
                                                        children: [
                                                          {
                                                            id: 'copper_plate',
                                                            recipe: () => {
                                                              event
                                                                .custom({
                                                                  type: 'create:pressing',
                                                                  results: [
                                                                    {
                                                                      item: 'chemlib:copper_plate',
                                                                    },
                                                                  ],
                                                                  ingredients: [
                                                                    {
                                                                      item: 'minecraft:copper_ingot',
                                                                    },
                                                                  ],
                                                                })
                                                                .id(
                                                                  'inconvenient:pressing_copper_plate'
                                                                );
                                                            },
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
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
                                        'kubejs:calcium_carbonate_dust',
                                      ]
                                    )
                                    .heated()
                                    .id(
                                      'inconvenient:mixing_carbon_dioxide_gas_bottle'
                                    );
                                },
                                children: [
                                  {
                                    id: 'calcium_carbonate',
                                    recipe: () => {
                                      event.recipes.create
                                        .crushing(
                                          ['kubejs:calcium_carbonate_dust'],
                                          'rankine:gray_marble'
                                        )
                                        .id(
                                          'inconvenient:crushing_wheel_calcium_carbonate_dust'
                                        );
                                    },
                                    children: [
                                      {
                                        id: 'gray_marble',
                                        recipe: () => {
                                          event.remove({
                                            id: 'rankine:stonegen_metamorphic/gray_marble_generator',
                                          });
                                          event.recipes.create
                                            .mixing('rankine:gray_marble', [
                                              'rankine:white_marble',
                                              'rankine:black_marble',
                                            ])
                                            .heated()
                                            .id(
                                              'inconvenient:mixing_gray_marble'
                                            );
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            id: 'cream_of_tartar',
                            recipe: () => {
                              event.recipes.create
                                .crushing(
                                  ['kubejs:cream_of_tartar'],
                                  'kubejs:tartaric_acid'
                                )
                                .id(
                                  'inconvenient:crushing_wheel_cream_of_tartar'
                                );
                            },
                          },
                        ],
                      },
                      {
                        id: 'cinder_flour',
                        recipe: () => {
                          event.remove({output: 'create:cinder_flour'});
                          event.recipes.create
                            .mixing('create:cinder_flour', [
                              'kubejs:cinder_dust',
                            ])
                            .heated()
                            .id('inconvenient:mixing_cinder_flour');
                        },
                        children: [
                          {
                            id: 'cinder_dust',
                            recipe: () => {
                              event.recipes.create
                                .mixing('kubejs:cinder_dust', [
                                  'create:powdered_obsidian',
                                ])
                                .heated()
                                .id('inconvenient:mixing_cinder_dust');
                            },
                          },
                        ],
                      },
                    ],
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
                              event
                                .custom({
                                  type: 'create:pressing',
                                  results: [{item: 'chemlib:iron_plate'}],
                                  ingredients: [{item: 'minecraft:iron_ingot'}],
                                })
                                .id('inconvenient:pressing_iron_plate');
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'liquid_tau',
            recipe: () => {
              event
                .custom({
                  type: 'tconstruct:melting',
                  ingredient: {
                    item: 'bloodmagic:strong_tau',
                  },
                  result: {
                    fluid: 'kubejs:liquid_tau',
                    amount: 1000,
                  },
                  temperature: 1200,
                  time: 30,
                })
                .id('inconvenient:melting_liquid_tau');
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
                          ['bloodmagic:weak_activation_crystal'].forEach(id =>
                            event.remove({id: id})
                          );
                          event
                            .custom({
                              type: 'bloodmagic:altar',
                              input: {
                                item: 'create:sturdy_sheet',
                              },
                              upgradeLevel: 2,
                              altarSyphon: 40000,
                              consumptionRate: 40,
                              drainRate: 40,
                              output: {
                                item: 'bloodmagic:activationcrystalweak',
                              },
                            })
                            .id('inconvenient:altar_activationcrystalweak');
                        },
                        children: [{id: 'sturdy_sheet', recipe: () => {}}],
                      },
                      {
                        id: 'ritual_diviner',
                        recipe: () => {
                          event
                            .custom({
                              type: 'occultism:ritual',
                              ritual_type: 'occultism:craft',
                              activation_item: {item: 'create:sturdy_sheet'},
                              pentacle_id: 'occultism:craft_marid',
                              ritual_dummy: {
                                item: 'occultism:ritual_dummy/custom_ritual',
                              },
                              ingredients: [
                                {
                                  item: 'bloodmagic:airscribetool',
                                },
                                {
                                  item: 'bloodmagic:waterscribetool',
                                },
                                {
                                  item: 'bloodmagic:firescribetool',
                                },
                                {
                                  item: 'bloodmagic:earthscribetool',
                                },
                              ],
                              result: {
                                item: 'bloodmagic:ritualdiviner',
                              },
                            })
                            .id('inconvenient:ritual_ritual_diviner');
                        },
                        children: [
                          {
                            id: 'air_scribe_tool',
                            recipe: () => {
                              ['bloodmagic:altar/air_tool'].forEach(id =>
                                event.remove({id: id})
                              );
                              event
                                .custom({
                                  type: 'bloodmagic:altar',
                                  input: {
                                    item: 'bloodmagic:bow_velocity_anointment',
                                  },
                                  upgradeLevel: 2,
                                  altarSyphon: 2000,
                                  consumptionRate: 2,
                                  drainRate: 2,
                                  output: {
                                    item: 'bloodmagic:airscribetool',
                                  },
                                })
                                .id('inconvenient:altar_air_scribe_tool');
                            },
                            children: [
                              {
                                id: 'alchemy_table',
                                recipe: () => {
                                  event
                                    .shaped(
                                      'bloodmagic:alchemytable',
                                      ['aaa', 'bcb', 'ded'],
                                      {
                                        a: `rankine:black_marble`,
                                        b: '#minecraft:planks',
                                        c: 'blue_skies:horizonite_ingot',
                                        d: 'extendedcrafting:black_iron_ingot',
                                        e: 'bloodmagic:blankslate',
                                      }
                                    )
                                    .id('inconvenient:shaped_alchemytable');
                                },
                              },
                              {
                                id: 'bow_velocity',
                                recipe: () => {
                                  event
                                    .custom({
                                      type: 'bloodmagic:alchemytable',
                                      input: [
                                        {item: 'bloodmagic:slate_vial'},
                                        {item: 'hexerei:yellow_dock_flowers'},
                                        {item: 'minecraft:bow'},
                                        {item: 'extendedcrafting:luminessence'},
                                      ],
                                      output: {
                                        item: 'bloodmagic:bow_velocity_anointment',
                                      },
                                      syphon: 500,
                                      ticks: 100,
                                      upgradeLevel: 1,
                                    })
                                    .id(
                                      'inconvenient:alchemy_bow_velocity_anointment'
                                    );
                                },
                              },
                            ],
                          },
                          {
                            id: 'earth_scribe_tool',
                            recipe: () => {
                              ['bloodmagic:altar/earth_tool'].forEach(id =>
                                event.remove({id: id})
                              );
                              event
                                .custom({
                                  type: 'bloodmagic:altar',
                                  input: {
                                    item: 'bloodmagic:fortune_anointment',
                                  },
                                  upgradeLevel: 2,
                                  altarSyphon: 2000,
                                  consumptionRate: 2,
                                  drainRate: 2,
                                  output: {
                                    item: 'bloodmagic:earthscribetool',
                                  },
                                })
                                .id('inconvenient:altar_earth_scribe_tool');
                            },
                            children: [
                              {
                                id: 'fortuna_extract',
                                recipe: () => {
                                  event
                                    .custom({
                                      type: 'bloodmagic:alchemytable',
                                      input: [
                                        {item: 'bloodmagic:slate_vial'},
                                        {
                                          item: 'hexerei:dried_mandrake_flowers',
                                        },
                                        {item: 'minecraft:redstone'},
                                        {item: 'create:powdered_obsidian'},
                                      ],
                                      output: {
                                        item: 'bloodmagic:fortune_anointment',
                                      },
                                      syphon: 500,
                                      ticks: 100,
                                      upgradeLevel: 1,
                                    })
                                    .id(
                                      'inconvenient:alchemy_fortune_anointment'
                                    );
                                },
                              },
                            ],
                          },
                          {
                            id: 'fire_scribe_tool',
                            recipe: () => {
                              ['bloodmagic:altar/fire_tool'].forEach(id =>
                                event.remove({id: id})
                              );
                              event
                                .custom({
                                  type: 'bloodmagic:altar',
                                  input: {
                                    item: 'bloodmagic:smelting_anointment',
                                  },
                                  upgradeLevel: 2,
                                  altarSyphon: 2000,
                                  consumptionRate: 2,
                                  drainRate: 2,
                                  output: {
                                    item: 'bloodmagic:firescribetool',
                                  },
                                })
                                .id('inconvenient:altar_fire_scribe_tool');
                            },
                            children: [
                              {
                                id: 'smelting_anointment',
                                recipe: () => {
                                  event
                                    .custom({
                                      type: 'bloodmagic:alchemytable',
                                      input: [
                                        {item: 'bloodmagic:slate_vial'},
                                        {item: 'blue_skies:blaze_bud'},
                                        {item: 'minecraft:furnace'},
                                        {item: 'create:cinder_flour'},
                                      ],
                                      output: {
                                        item: 'bloodmagic:smelting_anointment',
                                      },
                                      syphon: 500,
                                      ticks: 100,
                                      upgradeLevel: 1,
                                    })
                                    .id(
                                      'inconvenient:alchemy_smelting_anointment'
                                    );
                                },
                              },
                            ],
                          },
                          {
                            id: 'water_scribe_tool',
                            recipe: () => {
                              ['bloodmagic:altar/water_tool'].forEach(id =>
                                event.remove({id: id})
                              );
                              event
                                .custom({
                                  type: 'bloodmagic:altar',
                                  input: {
                                    item: 'bloodmagic:holy_water_anointment',
                                  },
                                  upgradeLevel: 2,
                                  altarSyphon: 2000,
                                  consumptionRate: 2,
                                  drainRate: 2,
                                  output: {
                                    item: 'bloodmagic:waterscribetool',
                                  },
                                })
                                .id('inconvenient:altar_water_scribe_tool');
                            },
                            children: [
                              {
                                id: 'holy_water',
                                recipe: () => {
                                  event
                                    .custom({
                                      type: 'bloodmagic:alchemytable',
                                      input: [
                                        {item: 'bloodmagic:slate_vial'},
                                        {
                                          item: 'hexerei:dried_belladonna_flowers',
                                        },
                                        {item: 'minecraft:redstone'},
                                        {item: 'minecraft:sugar'},
                                      ],
                                      output: {
                                        item: 'bloodmagic:holy_water_anointment',
                                      },
                                      syphon: 500,
                                      ticks: 100,
                                      upgradeLevel: 1,
                                    })
                                    .id(
                                      'inconvenient:alchemy_holy_water_anointment'
                                    );
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'lava',
            recipe: () => {
              event.remove({
                id: 'rankine:treetapping/crimson_stem_treetapping',
              });
              event.remove({id: 'rankine:treetapping/warped_stem_treetapping'});
              event
                .custom({
                  type: 'tconstruct:melting',
                  ingredient: {
                    item: 'kubejs:mixed_pebble',
                  },
                  result: {
                    fluid: 'minecraft:lava',
                    amount: 50,
                  },
                  temperature: 600,
                  time: 30,
                })
                .id('inconvenient:melting_mixed_pebble');
            },
            children: [
              {
                id: 'mixed_pebble',
                recipe: () => {
                  event.recipes.create
                    .mixing('kubejs:mixed_pebble', [
                      'kubejs:turquoise_pebble',
                      'undergarden:depthrock_pebble',
                      'kubejs:lunar_pebble',
                      'kubejs:deadrock_pebble',
                    ])
                    .id('inconvenient:mixing_mixed_pebble');
                },
                children: [
                  {
                    id: 'turquoise_pebble',
                    recipe: () => {
                      event.recipes.create
                        .crushing(
                          [Item.of('kubejs:turquoise_pebble').withChance(0.5)],
                          'blue_skies:turquoise_stone'
                        )
                        .id('inconvenient:crushing_wheel_turquoise_pebble');
                    },
                  },
                  {
                    id: 'depthrock_pebble',
                    recipe: () => {
                      event.remove({output: 'undergarden:depthrock_pebble'});
                      event.recipes.create
                        .crushing(
                          [
                            Item.of('undergarden:depthrock_pebble').withChance(
                              0.5
                            ),
                          ],
                          'undergarden:depthrock'
                        )
                        .id('inconvenient:crushing_wheel_depthrock_pebble');
                    },
                  },
                  {
                    id: 'lunar_pebble',
                    recipe: () => {
                      event.recipes.create
                        .crushing(
                          [Item.of('kubejs:lunar_pebble').withChance(0.5)],
                          'blue_skies:lunar_stone'
                        )
                        .id('inconvenient:crushing_wheel_lunar_pebble');
                    },
                  },
                  {
                    id: 'deadrock_pebble',
                    recipe: () => {
                      event.recipes.create
                        .crushing(
                          [Item.of('kubejs:deadrock_pebble').withChance(0.5)],
                          'twilightforest:deadrock'
                        )
                        .id('inconvenient:crushing_wheel_deadrock_pebble');
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'magma_cream',
            recipe: () => {
              event.remove({
                output: `minecraft:magma_cream`,
                type: 'minecraft:crafting_shapeless',
              });
              event.recipes.create
                .haunting('minecraft:magma_cream', 'malum:unholy_sapball')
                .id('inconvenient:haunting_magma_cream');
            },
          },
        ],
      },
    ],
  });
});
