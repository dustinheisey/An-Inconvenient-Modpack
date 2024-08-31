onEvent('recipes', event => {
  setMilestoneRecipes({
    id: 'chromatic_compound',
    recipe: () => {
      event.remove({output: 'create:chromatic_compound'});
      event.recipes.create
        .sequenced_assembly(
          ['create:chromatic_compound'],
          'kubejs:inert_compound',
          [
            event.recipes.create.filling('kubejs:inert_compound', [
              'kubejs:inert_compound',
              Fluid.of('kubejs:polar_pigments', 1000000),
            ]),
            event.recipes.create.filling('kubejs:inert_compound', [
              'kubejs:inert_compound',
              Fluid.of('kubejs:verdant_variants', 1000000),
            ]),
            event.recipes.create.filling('kubejs:inert_compound', [
              'kubejs:inert_compound',
              Fluid.of('kubejs:sunset_shades', 1000000),
            ]),
            event.recipes.create.filling('kubejs:inert_compound', [
              'kubejs:inert_compound',
              Fluid.of('kubejs:twilight_tones', 1000000),
            ]),
          ]
        )
        .transitionalItem('kubejs:inert_compound')
        .loops(1)
        .id('inconvenient:sequenced_assembly_chromatic_compound');
    },
    children: [
      {
        id: 'inert_compound',
        recipe: () => {
          event.recipes.create
            .sequenced_assembly(
              ['kubejs:inert_compound'],
              'create:polished_rose_quartz',
              [
                event.recipes.create.filling('create:polished_rose_quartz', [
                  'create:polished_rose_quartz',
                  Fluid.of('kubejs:mysterious_adhesive', 250000),
                ]),
                event.recipes.create.filling('create:polished_rose_quartz', [
                  'create:polished_rose_quartz',
                  Fluid.of('kubejs:mysterious_adhesive', 250000),
                ]),
                event.recipes.create.filling('create:polished_rose_quartz', [
                  'create:polished_rose_quartz',
                  Fluid.of('kubejs:mysterious_adhesive', 250000),
                ]),
                event.recipes.create.filling('create:polished_rose_quartz', [
                  'create:polished_rose_quartz',
                  Fluid.of('kubejs:mysterious_adhesive', 250000),
                ]),
              ]
            )
            .transitionalItem('create:polished_rose_quartz')
            .loops(1)
            .id('inconvenient:sequenced_assembly_inert_compound');
        },
        children: [
          {
            id: 'rose_quartz',
            recipe: () => {
              event.recipes.create
                .filling('create:rose_quartz', [
                  'minecraft:quartz',
                  Fluid.of('tconstruct:molten_rose_gold', 1000000),
                ])
                .id('inconvenient:filling_rose_quartz');
            },
            children: [
              {
                id: 'quartz',
                recipe: () => {
                  event
                    .custom({
                      input: {item: 'rankine:nether_quartz_ore'},
                      type: 'rankine:crushing',
                      guaranteed: [
                        {
                          item: 'minecraft:quartz',
                          count: 1,
                          tier: 'minecraft:iron',
                        },
                        {
                          item: 'minecraft:quartz',
                          count: 1,
                          tier: 'minecraft:netherite',
                        },
                      ],
                    })
                    .id('inconvenient:crushing_nether_quartz_ore');
                },
              },
              {
                id: 'molten_rose_gold',
                recipe: () => {},
                children: [
                  {
                    id: 'rose_gold_ingot',
                    recipe: () => {
                      event
                        .custom({
                          type: 'create:mixing',
                          results: [{item: 'rankine:rose_gold_ingot'}],
                          ingredients: [
                            {item: 'rankine:green_gold_ingot'},
                            {item: 'rankine:white_gold_ingot'},
                            {item: 'rankine:blue_gold_ingot'},
                            {item: 'rankine:purple_gold_ingot'},
                            {item: 'rankine:black_gold_ingot'},
                          ],
                          heatRequirement: 'heated',
                        })
                        .id('inconvenient:mixing_rose_gold_ingot');
                    },
                    children: [
                      {
                        id: 'tainted_gold',
                        recipe: () => {},
                        children: [
                          {
                            id: 'gold',
                            recipe: () => {
                              event
                                .custom({
                                  input: {item: 'rankine:nether_gold_ore'},
                                  type: 'rankine:crushing',
                                  guaranteed: [
                                    {
                                      item: 'minecraft:gold_nugget',
                                      tier: 'minecraft:iron',
                                      count: 3,
                                    },
                                  ],
                                })
                                .id('inconvenient:crushing_nether_gold_ore');
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
            id: 'mysterious_adhesive',
            recipe: () => {
              event.recipes
                .createMixing(Fluid.of('kubejs:mysterious_adhesive', 1000), [
                  'biomancy:tough_fibers',
                  'biomancy:elastic_fibers',
                  'kubejs:mixed_dust',
                  Fluid.of('kubejs:pure_tar', 1000),
                  Fluid.of('kubejs:crimson_resin', 1000),
                  Fluid.of('kubejs:warped_resin', 1000),
                ])
                .superheated()
                .id('inconvenient:mixing_mysterious_adhesive');
            },
            children: [
              {
                id: 'pure_tar',
                recipe: () => {
                  event.recipes
                    .createMixing(Fluid.of('kubejs:pure_tar', 1000), [
                      '3x kubejs:drop_of_tar',
                    ])
                    .superheated()
                    .id('inconvenient:mixing_pure_tar');
                },
                children: [
                  {
                    id: 'drop_of_tar',
                    recipe: () => {
                      event
                        .custom({
                          type: 'rankine:evaporation',
                          processTime: 12000,
                          input: {
                            fluid: 'kubejs:tar_slurry',
                          },
                          outputs: [{item: 'kubejs:drop_of_tar', weight: 100}],
                        })
                        .id('inconvenient:evaporation_drop_of_tar');
                    },
                    children: [
                      {
                        id: 'tar_slurry',
                        recipe: () => {
                          event.recipes
                            .createMixing(Fluid.of('kubejs:tar_slurry', 1000), [
                              'kubejs:tar_sand',
                              Fluid.of('minecraft:water', 1000),
                            ])
                            .id('inconvenient:mixing_tar_slurry');
                        },
                        children: [
                          {
                            id: 'tar_sand',
                            recipe: () => {
                              event.remove({output: 'minecraft:netherrack'});
                              event
                                .custom({
                                  type: 'rankine:crushing',
                                  input: {
                                    item: 'minecraft:netherrack',
                                  },
                                  guaranteed: [
                                    {
                                      item: 'kubejs:cinder_dust',
                                    },
                                  ],
                                  outputs: [
                                    {
                                      weight: 99,
                                      remove: false,
                                    },
                                    {
                                      item: 'kubejs:tar_sand',
                                      weight: 1,
                                      remove: false,
                                    },
                                  ],
                                })
                                .id('inconvenient:crushing_tar_sand');
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: 'mixed_dust',
                recipe: () => {
                  event.recipes.create
                    .mixing('kubejs:mixed_dust', [
                      'kubejs:witherite_dust',
                      'immersiveengineering:dust_electrum',
                      'minecraft:gunpowder',
                      'chemlib:zinc_oxide_dust',
                    ])
                    .superheated()
                    .id('inconvenient:mixing_mixed_dust');
                },
                children: [
                  {
                    id: 'witherite_dust',
                    recipe: () => {
                      event.recipes.create
                        .crushing(
                          ['kubejs:witherite_dust'],
                          'cataclysm:witherite_ingot'
                        )
                        .id('inconvenient:crushing_wheel_witherite_dust');
                    },
                    children: [
                      {
                        id: 'witherite_ingot',
                        recipe: () => {
                          event.recipes.create
                            .mixing('cataclysm:witherite_ingot', [
                              'minecraft:netherite_ingot',
                              '3x charcoal_pit:nether_shard',
                            ])
                            .superheated()
                            .id('inconvenient:mixing_witherite_ingot');
                        },
                      },
                    ],
                  },
                  {
                    id: 'electrum_dust',
                    recipe: () => {
                      event.recipes.create
                        .crushing(
                          ['immersiveengineering:dust_electrum'],
                          'immersiveengineering:ingot_electrum'
                        )
                        .id('inconvenient:crushing_wheel_electrum_dust');
                    },
                    children: [
                      {
                        id: 'electrum_ingot',
                        recipe: () => {
                          event.recipes.create
                            .mixing('immersiveengineering:ingot_electrum', [
                              'naturesaura:tainted_gold',
                              'rankine:silver_ingot',
                            ])
                            .superheated()
                            .id('inconvenient:mixing_electrum_ingot');
                        },
                      },
                    ],
                  },
                  {
                    id: 'gunpowder',
                    recipe: () => {
                      event.remove({output: 'minecraft:gunpowder'});
                      event.recipes
                        .createCompacting(
                          'minecraft:gunpowder',
                          '64x charcoal_pit:tiny_gunpowder'
                        )
                        .id('inconvenient:compacting_gunpowder');
                    },
                    children: [
                      {
                        id: 'tiny_gunpowder',
                        recipe: () => {
                          event
                            .custom({
                              type: 'bloodmagic:alchemytable',
                              input: [
                                {item: 'bloodmagic:saltpeter'},
                                {item: 'chemlib:sulfur_dust'},
                                {item: 'malum:arcane_charcoal'},
                              ],
                              output: {
                                item: 'charcoal_pit:tiny_gunpowder',
                                count: 1,
                              },
                              syphon: 4000,
                              ticks: 200,
                              upgradeLevel: 1,
                            })
                            .id('inconvenient:alchemytable_tiny_gunpowder');
                        },
                        children: [
                          {
                            id: 'saltpeter',
                            recipe: () => {
                              ['bloodmagic:alchemytable/saltpeter'].forEach(
                                id => event.remove({id: id})
                              );
                              event.recipes.create
                                .crushing(
                                  ['bloodmagic:saltpeter'],
                                  'kubejs:potassium_nitrate_chunks'
                                )
                                .id('inconvenient:crushing_wheel_saltpeter');
                            },
                            children: [
                              {
                                id: 'potassium_nitrate_chunks',
                                recipe: () => {
                                  event.recipes.create
                                    .mixing('kubejs:potassium_nitrate_chunks', [
                                      Fluid.of('kubejs:compost', 1000),
                                    ])
                                    .superheated()
                                    .id(
                                      'inconvenient:mixing_potassium_nitrate_chunks'
                                    );
                                },
                                children: [
                                  {
                                    id: 'compost',
                                    recipe: () => {
                                      event.recipes.create
                                        .mixing(
                                          Fluid.of('kubejs:compost', 1000),
                                          [
                                            Fluid.of('minecraft:water', 1000),
                                            'nethersdelight:rich_soul_soil',
                                          ]
                                        )
                                        .id('inconvenient:mixing_compost');
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
                    id: 'zinc_oxide',
                    recipe: () => {
                      event.recipes.create
                        .mixing('chemlib:zinc_oxide_dust', [
                          'chemlib:zinc_dust',
                          'rankine:oxygen_gas_bottle',
                        ])
                        .id('inconvenient:mixing_zinc_oxide_dust');
                    },
                    children: [
                      {
                        id: 'zinc_dust',
                        recipe: () => {
                          event.recipes.create
                            .crushing(
                              ['chemlib:zinc_dust'],
                              'rankine:zinc_ingot'
                            )
                            .id('inconvenient:crushing_wheel_zinc_dust');
                        },
                        children: [
                          {
                            id: 'zinc_ingot',
                            children: [
                              {
                                id: 'molten_zinc',
                                children: [
                                  {
                                    id: 'sphalerite',
                                    recipe: () => {
                                      event
                                        .custom({
                                          input: {
                                            item: 'rankine:sphalerite_ore',
                                          },
                                          type: 'rankine:crushing',
                                          guaranteed: [
                                            {
                                              item: 'rankine:sphalerite',
                                              count: 1,
                                              tier: 'minecraft:iron',
                                            },
                                            {
                                              item: 'rankine:sphalerite',
                                              count: 1,
                                              tier: 'minecraft:iron',
                                            },
                                          ],
                                        })
                                        .id(
                                          'inconvenient:crushing_sphalerite_ore'
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
                        id: 'oxygen_gas_block',
                        recipe: () => {
                          event
                            .custom({
                              type: 'rankine:air_distillation',
                              dimensions: ['minecraft:the_nether'],
                              outputs: [
                                {
                                  item: 'rankine:carbon_dioxide_gas_block',
                                  chance: 0.8,
                                },
                                {
                                  item: 'rankine:sulfur_dioxide_gas_block',
                                  chance: 0.2,
                                },
                                {item: 'rankine:oxygen_gas_block', chance: 0.4},
                              ],
                            })
                            .id(
                              'inconvenient:air_distillation_oxygen_gas_block'
                            );
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: 'warped_resin',
                recipe: () => {
                  event
                    .custom({
                      type: 'rankine:treetapping',
                      tapTime: 400,
                      input: {
                        item: 'minecraft:warped_stem',
                      },
                      result: {
                        fluid: 'kubejs:warped_resin',
                        amount: 50,
                      },
                    })
                    .id('inconvenient:treetapping_warped_resin');
                },
              },
              {
                id: 'crimson_resin',
                recipe: () => {
                  event
                    .custom({
                      type: 'rankine:treetapping',
                      tapTime: 400,
                      input: {
                        item: 'minecraft:crimson_stem',
                      },
                      result: {
                        fluid: 'kubejs:warped_resin',
                        amount: 50,
                      },
                    })
                    .id('inconvenient:treetapping_crimson_resin');
                },
              },
            ],
          },
        ],
      },
      {
        id: 'polar_pigments',
        recipe: () => {
          event.recipes.create
            .mixing(Fluid.of('kubejs:polar_pigments', 1000), [
              Fluid.of('kubejs:blue_dye', 1000),
              Fluid.of('kubejs:light_blue_dye', 1000),
              Fluid.of('kubejs:cyan_dye', 1000),
              Fluid.of('kubejs:white_dye', 1000),
            ])
            .superheated()
            .id('inconvenient:mixing_polar_pigments');
        },
        children: [
          {
            id: 'blue_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:blue_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:blue_dye',
                ])
                .heated()
                .id('inconvenient:mixing_blue_dye_liquid');
            },
            children: [
              {
                id: 'blue_dye',
                recipe: () => {
                  event.recipes.create
                    .crushing(
                      ['minecraft:blue_dye'],
                      'mekanism:dust_lapis_lazuli'
                    )
                    .id('inconvenient:crushing_wheel_blue_dye');

                  event.recipes.create
                    .crushing(
                      ['mekanism:dust_lapis_lazuli'],
                      'minecraft:lapis_lazuli'
                    )
                    .id('inconvenient:crushing_wheel_dust_lapis_lazuli');
                },
              },
            ],
          },
          {
            id: 'light_blue_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:light_blue_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:light_blue_dye',
                ])
                .heated()
                .id('inconvenient:mixing_light_blue_dye_liquid');
            },
            children: [
              {
                id: 'light_blue_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:light_blue_dye', [
                      'minecraft:white_dye',
                      'minecraft:blue_dye',
                    ])
                    .id('inconvenient:mixing_light_blue_dye');
                },
              },
            ],
          },
          {
            id: 'cyan_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:cyan_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:cyan_dye',
                ])
                .heated()
                .id('inconvenient:mixing_cyan_dye_liquid');
            },
            children: [
              {
                id: 'cyan_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:cyan_dye', [
                      'minecraft:green_dye',
                      'minecraft:blue_dye',
                    ])
                    .id('inconvenient:mixing_cyan_dye');
                },
              },
            ],
          },
          {
            id: 'white_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:white_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:white_dye',
                ])
                .heated()
                .id('inconvenient:mixing_white_dye_liquid');
            },
            children: [
              {
                id: 'white_dye',
                recipe: () => {
                  event.recipes.create
                    .milling('minecraft:white_dye', 'minecraft:bone_meal')
                    .id('inconvenient:milling_white_dye');
                },
              },
            ],
          },
        ],
      },
      {
        id: 'verdant_variants',
        recipe: () => {
          event.recipes.create
            .mixing(Fluid.of('kubejs:verdant_variants', 1000), [
              Fluid.of('kubejs:green_dye', 1000),
              Fluid.of('kubejs:lime_dye', 1000),
              Fluid.of('kubejs:gray_dye', 1000),
              Fluid.of('kubejs:black_dye', 1000),
            ])
            .superheated()
            .id('inconvenient:mixing_verdant_variants');
        },
        children: [
          {
            id: 'green_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:green_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:green_dye',
                ])
                .heated()
                .id('inconvenient:mixing_green_dye_liquid');
            },
            children: [
              {
                id: 'green_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:green_dye', [
                      'minecraft:yellow_dye',
                      'minecraft:blue_dye',
                    ])
                    .id('inconvenient:mixing_green_dye');
                },
              },
            ],
          },
          {
            id: 'lime_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:lime_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:lime_dye',
                ])
                .heated()
                .id('inconvenient:mixing_lime_dye_liquid');
            },
            children: [
              {
                id: 'lime_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:lime_dye', [
                      'minecraft:green_dye',
                      'minecraft:white_dye',
                    ])
                    .id('inconvenient:mixing_lime_dye');
                },
              },
            ],
          },
          {
            id: 'gray_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:gray_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:gray_dye',
                ])
                .heated()
                .id('inconvenient:mixing_gray_dye_liquid');
            },
            children: [
              {
                id: 'gray_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:gray_dye', [
                      Fluid.of('minecraft:water', 1000),
                      'rankine:oyster_mushroom',
                    ])
                    .superheated()
                    .id('inconvenient:mixing_gray_dye');
                },
              },
            ],
          },
          {
            id: 'black_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:black_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:black_dye',
                ])
                .heated()
                .id('inconvenient:mixing_black_dye_liquid');
            },
            children: [
              {
                id: 'black_dye',
                recipe: () => {
                  event.recipes.create
                    .milling('minecraft:black_dye', 'rankine:bone_char')
                    .id('inconvenient:milling_black_dye');
                },
              },
            ],
          },
        ],
      },
      {
        id: 'sunset_shades',
        recipe: () => {
          event.recipes.create
            .mixing(Fluid.of('kubejs:sunset_shades', 1000), [
              Fluid.of('kubejs:red_dye', 1000),
              Fluid.of('kubejs:orange_dye', 1000),
              Fluid.of('kubejs:yellow_dye', 1000),
              Fluid.of('kubejs:brown_dye', 1000),
            ])
            .superheated()
            .id('inconvenient:mixing_sunset_shades');
        },
        children: [
          {
            id: 'red_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:red_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:red_dye',
                ])
                .heated()
                .id('inconvenient:mixing_red_dye_liquid');
            },
            children: [
              {
                id: 'red_dye',
                recipe: () => {
                  event
                    .custom({
                      type: 'hexerei:mixingcauldron',
                      liquid: {
                        fluid: 'minecraft:water',
                      },
                      ingredients: [
                        {item: 'kubejs:madder_root'},
                        {item: 'kubejs:madder_root'},
                        {item: 'kubejs:madder_root'},
                        {item: 'kubejs:madder_root'},
                        {item: 'kubejs:madder_root'},
                        {item: 'kubejs:madder_root'},
                        {item: 'kubejs:madder_root'},
                        {item: 'kubejs:madder_root'},
                      ],
                      output: {
                        item: 'minecraft:red_dye',
                        count: 1,
                      },
                      liquidOutput: {
                        fluid: 'minecraft:water',
                      },
                      fluidLevelsConsumed: 1000,
                    })
                    .id('inconvenient:mixing_red_dye');

                  event.recipes.create
                    .milling('minecraft:red_dye', 'kubejs:madder_root')
                    .id('inconvenient:milling_red_dye');
                },
              },
            ],
          },
          {
            id: 'orange_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:orange_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:orange_dye',
                ])
                .heated()
                .id('inconvenient:mixing_orange_dye_liquid');
            },
            children: [
              {
                id: 'orange_dye',
                recipe: () => {
                  event
                    .custom({
                      type: 'hexerei:mixingcauldron',
                      liquid: {
                        fluid: 'minecraft:water',
                      },
                      ingredients: [
                        {item: 'kubejs:juniper_bark'},
                        {item: 'kubejs:juniper_bark'},
                        {item: 'kubejs:juniper_bark'},
                        {item: 'kubejs:juniper_bark'},
                        {item: 'kubejs:juniper_bark'},
                        {item: 'kubejs:juniper_bark'},
                        {item: 'kubejs:juniper_bark'},
                        {item: 'kubejs:juniper_bark'},
                      ],
                      output: {
                        item: 'minecraft:orange_dye',
                        count: 1,
                      },
                      liquidOutput: {
                        fluid: 'minecraft:water',
                      },
                      fluidLevelsConsumed: 1000,
                    })
                    .id('inconvenient:cauldron_orange_dye');

                  event.recipes.create
                    .milling('minecraft:orange_dye', 'kubejs:juniper_bark')
                    .id('inconvenient:milling_orange_dye');
                },
              },
            ],
          },
          {
            id: 'yellow_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:yellow_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:yellow_dye',
                ])
                .heated()
                .id('inconvenient:mixing_yellow_dye_liquid');
            },
            children: [
              {
                id: 'yellow_dye',
                recipe: () => {
                  event
                    .custom({
                      type: 'hexerei:mixingcauldron',
                      liquid: {
                        fluid: 'minecraft:water',
                      },
                      ingredients: [
                        {item: 'kubejs:onion_skin'},
                        {item: 'kubejs:onion_skin'},
                        {item: 'kubejs:onion_skin'},
                        {item: 'kubejs:onion_skin'},
                        {item: 'kubejs:onion_skin'},
                        {item: 'kubejs:onion_skin'},
                        {item: 'kubejs:onion_skin'},
                        {item: 'kubejs:onion_skin'},
                      ],
                      output: {
                        item: 'minecraft:yellow_dye',
                        count: 1,
                      },
                      liquidOutput: {
                        fluid: 'minecraft:water',
                      },
                      fluidLevelsConsumed: 1000,
                    })
                    .id('inconvenient:cauldron_yellow_dye');

                  event.recipes.create
                    .milling('minecraft:yellow_dye', 'kubejs:onion_skin')
                    .id('inconvenient:milling_yellow_dye');
                },
              },
            ],
          },
          {
            id: 'brown_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:brown_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:brown_dye',
                ])
                .heated()
                .id('inconvenient:mixing_brown_dye_liquid');
            },
            children: [
              {
                id: 'brown_dye',
                recipe: () => {
                  event.recipes.create
                    .milling('minecraft:brown_dye', 'rankine:roasted_walnut')
                    .id('inconvenient:milling_brown_dye');
                },
              },
            ],
          },
        ],
      },
      {
        id: 'twilight_tones',
        recipe: () => {
          event.recipes.create
            .mixing(Fluid.of('kubejs:twilight_tones', 1000), [
              Fluid.of('kubejs:purple_dye', 1000),
              Fluid.of('kubejs:magenta_dye', 1000),
              Fluid.of('kubejs:pink_dye', 1000),
              Fluid.of('kubejs:light_gray_dye', 1000),
            ])
            .superheated()
            .id('inconvenient:mixing_twilight_tones');
        },
        children: [
          {
            id: 'purple_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:purple_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:purple_dye',
                ])
                .heated()
                .id('inconvenient:mixing_purple_dye_liquid');
            },
            children: [
              {
                id: 'purple_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:purple_dye', [
                      Fluid.of('minecraft:water', 1000),
                      'naturalist:snail_shell',
                    ])
                    .superheated()
                    .id('inconvenient:mixing_purple_dye');
                },
              },
            ],
          },
          {
            id: 'magenta_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:magenta_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:magenta_dye',
                ])
                .heated()
                .id('inconvenient:mixing_magenta_dye_liquid');
            },
            children: [
              {
                id: 'magenta_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:magenta_dye', [
                      'minecraft:purple_dye',
                      'minecraft:white_dye',
                    ])
                    .id('inconvenient:mixing_magenta_dye');
                },
              },
            ],
          },
          {
            id: 'pink_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:pink_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:pink_dye',
                ])
                .heated()
                .id('inconvenient:mixing_pink_dye_liquid');
            },
            children: [
              {
                id: 'pink_dye',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:pink_dye', [
                      'minecraft:magenta_dye',
                      'minecraft:white_dye',
                    ])
                    .id('inconvenient:mixing_pink_dye');
                },
              },
            ],
          },
          {
            id: 'light_gray_dye_liquid',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:light_gray_dye', 1000), [
                  Fluid.of('charcoal_pit:vinegar_still', 500),
                  Fluid.of('minecraft:water', 500),
                  'bloodmagic:saltpeter',
                  '3x minecraft:light_gray_dye',
                ])
                .heated()
                .id('inconvenient:mixing_light_gray_dye_liquid');
            },
            children: [
              {
                id: 'mixing_',
                recipe: () => {
                  event.recipes.create
                    .mixing('minecraft:light_gray_dye', [
                      'minecraft:gray_dye',
                      'minecraft:white_dye',
                    ])
                    .id('inconvenient:mixing_mixing_light_gray_dye');
                },
              },
            ],
          },
        ],
      },
    ],
  });

  // Shadow Steel
  event
    .custom({
      type: 'bloodmagic:altar',
      input: {
        item: 'create:chromatic_compound',
      },
      output: {
        item: 'create:shadow_steel',
      },
      upgradeLevel: 3,
      altarSyphon: 25000,
      consumptionRate: 25,
      drainRate: 25,
    })
    .id('inconvenient:altar_shadow_steel');

  // Refined Radiance
  event
    .custom({
      type: 'createaddition:charging',
      input: {
        item: 'create:chromatic_compound',
        count: 1,
      },
      result: {
        item: 'create:refined_radiance',
        count: 1,
      },
      energy: 10000,
    })
    .id('inconvenient:charging_refined_radiance');

  ['extendedcrafting:advanced_table'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'extendedcrafting:advanced_table',
      },
      pattern: ['aba', 'cdc', 'aea'],
      key: {
        a: 'extendedcrafting:advanced_component',
        b: 'extendedcrafting:advanced_catalyst',
        c: 'extendedcrafting:basic_table',
        d: 'bloodmagic:demonslate',
        e: 'extendedcrafting:black_iron_slate',
      },
    })
    .id('inconvenient:basic_table_advanced_table');
});
