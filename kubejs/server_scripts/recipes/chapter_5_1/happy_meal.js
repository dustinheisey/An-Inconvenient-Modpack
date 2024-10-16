onEvent('recipes', (event) => {
  event.custom({
    type: 'productivebees:block_conversion',
    bee: 'productivebees:pure',
    from: {
      Name: 'botania:dreamwood_log'
    },
    to: {
      Name: 'naturesaura:ancient_log'
    },
    chance: 0.25,
    conditions: [
      {
        type: 'productivebees:bee_exists',
        bee: 'productivebees:pure'
      }
    ]
  });

  event.custom({
    type: 'productivebees:bee_breeding',
    parent1: 'productivebees:elementium',
    parent2: 'productivebees:radioactive',
    offspring: ['productivebees:ender']
  });

  event.custom({
    type: 'productivebees:bee_breeding',
    parent1: 'productivebees:regenerative',
    parent2: 'productivebees:glowing',
    offspring: ['productivebees:radioactive']
  });

  event.custom({
    type: 'productivebees:bee_breeding',
    parent1: 'productivebees:ashy_mining_bee',
    parent2: 'productivebees:silky',
    offspring: ['productivebees:crystalline']
  });

  event.remove({
    output: ['botania:terrasteel_ingot'],
    type: 'botania:terra_plate'
  });
  event.custom({
    type: 'botania:terra_plate',
    mana: 500000,
    ingredients: [
      { item: 'naturesaura:sky_ingot' },
      { item: 'naturesaura:token_euphoria' },
      { item: 'naturesaura:tainted_gold' }
    ],
    result: { item: 'botania:terrasteel_ingot' }
  });

  event.custom({
    type: 'botania:elven_trade',
    ingredients: [{ item: 'minecraft:honeycomb' }],
    output: [{ item: 'botania:pixie_dust' }]
  });

  event.custom({
    type: 'botania:elven_trade',
    ingredients: [{ item: 'minecraft:wheat_seeds' }],
    output: [{ item: 'immersiveengineering:seed' }]
  });

  event.custom({
    type: 'bloodmagic:altar',
    input: {
      item: 'minecraft:dragon_breath'
    },
    output: {
      item: 'minecraft:chorus_fruit'
    },
    upgradeLevel: 3,
    altarSyphon: 150000,
    consumptionRate: 300,
    drainRate: 300
  });

  event.shaped('botania:mana_pylon', [' a ', 'bcb', ' a '], {
    a: 'naturesaura:tainted_gold',
    b: 'naturesaura:sky_ingot',
    c: 'naturesaura:infused_iron_block'
  });

  event.custom({
    type: 'create:item_application',
    ingredients: [
      { tag: 'minecraft:planks' },
      { item: 'create:refined_radiance' }
    ],
    results: [{ item: 'create:refined_radiance_casing' }]
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'productivebees:advanced_snake_block_beehive' },
    pattern: ['aaaaa', 'abbba', 'acdca', 'aebfa', 'aaaaa'],
    key: {
      a: 'botania:metamorphic_forest_stone',
      b: 'minecraft:dark_prismarine',
      c: '#forge:honeycombs',
      d: 'minecraft:beehive',
      e: 'the_bumblezone:honey_crystal_shards',
      f: '#forge:shears'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'productivebees:advanced_warped_beehive' },
    pattern: ['aaaaa', 'abbba', 'acdca', 'aebfa', 'aaaaa'],
    key: {
      a: 'botania:metamorphic_forest_stone',
      b: 'minecraft:warped_planks',
      c: '#forge:honeycombs',
      d: 'minecraft:beehive',
      e: 'the_bumblezone:honey_crystal_shards',
      f: '#forge:shears'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'productivebees:advanced_birch_beehive' },
    pattern: ['aaaaa', 'abbba', 'acdca', 'aebfa', 'aaaaa'],
    key: {
      a: 'botania:metamorphic_plains_stone',
      b: 'minecraft:birch_planks',
      c: '#forge:honeycombs',
      d: 'minecraft:beehive',
      e: 'the_bumblezone:honey_crystal_shards',
      f: '#forge:shears'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'productivebees:advanced_spruce_beehive' },
    pattern: ['aaaaa', 'abbba', 'acdca', 'aebfa', 'aaaaa'],
    key: {
      a: 'botania:metamorphic_swamp_stone',
      b: 'minecraft:spruce_planks',
      c: '#forge:honeycombs',
      d: 'minecraft:beehive',
      e: 'the_bumblezone:honey_crystal_shards',
      f: '#forge:shears'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'productivebees:advanced_dark_oak_beehive' },
    pattern: ['aaaaa', 'abbba', 'acdca', 'aebfa', 'aaaaa'],
    key: {
      a: 'botania:metamorphic_taiga_stone',
      b: 'minecraft:dark_oak_planks',
      c: '#forge:honeycombs',
      d: 'minecraft:beehive',
      e: 'the_bumblezone:honey_crystal_shards',
      f: '#forge:shears'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'productivebees:advanced_oak_beehive' },
    pattern: ['aaaaa', 'abbba', 'acdca', 'aebfa', 'aaaaa'],
    key: {
      a: 'botania:metamorphic_mountain_stone',
      b: 'minecraft:oak_planks',
      c: '#forge:honeycombs',
      d: 'minecraft:beehive',
      e: 'the_bumblezone:honey_crystal_shards',
      f: '#forge:shears'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'productivebees:advanced_jungle_beehive' },
    pattern: ['aaaaa', 'abbba', 'acdca', 'aebfa', 'aaaaa'],
    key: {
      a: 'botania:metamorphic_mesa_stone',
      b: 'minecraft:jungle_planks',
      c: '#forge:honeycombs',
      d: 'minecraft:beehive',
      e: 'the_bumblezone:honey_crystal_shards',
      f: '#forge:shears'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'productivebees:advanced_acacia_beehive' },
    pattern: ['aaaaa', 'abbba', 'acdca', 'aebfa', 'aaaaa'],
    key: {
      a: 'botania:metamorphic_desert_stone',
      b: 'minecraft:acacia_planks',
      c: '#forge:honeycombs',
      d: 'minecraft:beehive',
      e: 'the_bumblezone:honey_crystal_shards',
      f: '#forge:shears'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'productivebees:advanced_crimson_beehive' },
    pattern: ['aaaaa', 'abbba', 'acdca', 'aebfa', 'aaaaa'],
    key: {
      a: 'botania:metamorphic_fungal_stone',
      b: 'minecraft:crimson_planks',
      c: '#forge:honeycombs',
      d: 'minecraft:beehive',
      e: 'the_bumblezone:honey_crystal_shards',
      f: '#forge:shears'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'botania:terra_plate' },
    pattern: ['aaa', 'bcd', 'efg'],
    key: {
      a: 'tconstruct:pig_iron_block',
      b: 'botania:rune_water',
      c: 'botania:manasteel_block',
      d: 'botania:rune_fire',
      e: 'botania:rune_earth',
      f: 'botania:rune_mana',
      g: 'botania:rune_air'
    }
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: { item: 'create:mechanical_saw' },
    pattern: [' a ', 'aba', ' c '],
    key: {
      a: 'chemlib:iron_plate',
      b: 'cataclysm:witherite_ingot',
      c: 'create:andesite_casing'
    }
  });

  event.replaceInput(
    {
      output: 'productivebees:bottler'
    },
    '#forge:glass',
    'the_bumblezone:honey_crystal_shards'
  );
  event.replaceInput(
    {
      output: 'productivebees:centrifuge'
    },
    'minecraft:grindstone',
    'the_bumblezone:honey_crystal_shards'
  );
  event.replaceInput(
    {
      output: 'productivebees:catcher'
    },
    'minecraft:dirt',
    'the_bumblezone:honey_crystal_shards'
  );
  event.replaceInput(
    {
      output: 'productivebees:incubator'
    },
    'minecraft:hay_block',
    'the_bumblezone:honey_crystal_shards'
  );
  event.replaceInput(
    {
      output: 'productivebees:gene_indexer'
    },
    '#forge:workbenches',
    'the_bumblezone:honey_crystal_shards'
  );

  event.replaceInput(
    { output: 'botania:natura_pylon' },
    'minecraft:ender_eye',
    'botania:rune_envy'
  );
  setMilestoneRecipes({
    id: 'happy_meal',
    recipe: () => {
      event.recipes
        .createSequencedAssembly(
          ['kubejs:happy_meal'],
          'croptopia:cheeseburger',
          [
            event.recipes.createDeploying('croptopia:cheeseburger', [
              'croptopia:cheeseburger',
              'kubejs:fries_and_ketchup'
            ]),
            event.recipes.createDeploying('croptopia:cheeseburger', [
              'croptopia:cheeseburger',
              'kubejs:bottle_of_soda'
            ])
          ]
        )
        .transitionalItem('croptopia:cheeseburger')
        .loops(1);
    },
    children: [
      {
        id: 'fries_and_ketchup',
        recipe: () => {
          event.recipes.createDeploying('kubejs:fries_and_ketchup', [
            'croptopia:french_fries',
            'kubejs:ketchup'
          ]);
        },
        children: [
          {
            id: 'fries',
            recipe: () => {
              event.remove({ output: 'croptopia:french_fries' });
              event.recipes
                .createSequencedAssembly(
                  ['croptopia:french_fries'],
                  'kubejs:uncooked_fries',
                  [
                    event.recipes.create.filling('kubejs:uncooked_fries', [
                      'kubejs:uncooked_fries',
                      Fluid.of('kubejs:beef_oil', 1000)
                    ]),
                    event.recipes.create.filling('kubejs:uncooked_fries', [
                      'kubejs:uncooked_fries',
                      Fluid.of('kubejs:beef_oil', 1000)
                    ]),
                    event.recipes.create.filling('kubejs:uncooked_fries', [
                      'kubejs:uncooked_fries',
                      Fluid.of('kubejs:beef_oil', 1000)
                    ]),
                    event.recipes.createDeploying('kubejs:uncooked_fries', [
                      'kubejs:uncooked_fries',
                      'kubejs:ton_of_salt'
                    ])
                  ]
                )
                .transitionalItem('kubejs:uncooked_fries')
                .loops(1);
            },
            children: [
              {
                id: 'ton_of_salt',
                recipe: () => {
                  event.recipes.create.compacting(
                    'kubejs:ton_of_salt',
                    '64x salt:salt_block'
                  );
                },
                children: [
                  {
                    id: 'salt_block',
                    recipe: () => {
                      event.remove({ output: 'salt:salt_block' });
                      event.recipes.create.mechanicalCrafting(
                        'salt:salt_block',
                        ['aaaaa', 'aaaaa', 'aaaaa', 'aaaaa', 'aaaaa'],
                        { a: 'salt:salt' }
                      );
                    }
                  }
                ]
              },
              {
                id: 'uncooked_fries',
                recipe: () => {
                  event.recipes
                    .createCutting(
                      'kubejs:uncooked_fries',
                      'kubejs:skinned_potato'
                    )
                    .processingTime(50);
                },
                children: [
                  {
                    id: 'skinned_potato',
                    recipe: () => {
                      event.custom({
                        type: 'vintageimprovements:polishing',
                        speed_limits: 1,
                        ingredients: [
                          {
                            item: 'kubejs:washed_potato'
                          }
                        ],
                        results: [
                          {
                            item: 'kubejs:skinned_potato',
                            count: 1
                          }
                        ],
                        processingTime: 20
                      });
                    },
                    children: [
                      {
                        id: 'washed_potato',
                        recipe: () => {
                          // TODO: splashing
                          event.recipes.create.mixing('kubejs:washed_potato', [
                            'minecraft:potato',
                            Fluid.of('minecraft:water', 1000)
                          ]);
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 'beef_oil',
                recipe: () => {
                  event.recipes.create.mixing(
                    Fluid.of('kubejs:beef_oil', 1000),
                    [
                      Fluid.of('kubejs:beef_tallow', 100),
                      Fluid.of('pneumaticcraft:vegetable_oil', 1000)
                    ]
                  );
                },
                // vegetable oil mixed with beef tallow / vegetable oil, canola oil, corn oil, soybean oil,hydrogenated soybean oil,natural beef flavor, dextrose,
                children: [
                  {
                    id: 'beef_tallow',
                    recipe: () => {
                      event.recipes.create
                        .mixing(Fluid.of('kubejs:beef_tallow', 100), [
                          Fluid.of('minecraft:water', 1000),
                          '3x kubejs:beef_fat'
                        ])
                        .heated();
                    }
                  },
                  {
                    id: 'vegetable_oil',
                    recipe: () => {
                      event.remove({
                        id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_crops'
                      });
                      event.remove({
                        id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds'
                      });
                      event.recipes.create.mixing(
                        Fluid.of('pneumaticcraft:vegetable_oil', 1000),
                        [
                          Fluid.of('kubejs:corn_oil', 250),
                          Fluid.of('charcoal_pit:olive_oil', 250),
                          Fluid.of('kubejs:soybean_oil', 250),
                          'kubejs:hydrogenated_soybean_oil'
                        ]
                      );
                    },
                    children: [
                      {
                        id: 'corn_oil',
                        recipe: () => {
                          event.recipes.create.compacting(
                            Fluid.of('kubejs:corn_oil', 100),
                            'kubejs:distillers_grain'
                          );
                        },
                        children: [
                          {
                            id: 'corn_seed',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: {
                                  item: 'biomancy:organic_compound'
                                },
                                result: {
                                  item: 'croptopia:corn_seed'
                                },
                                processingTime: 80,
                                nutrientsCost: 8
                              });
                            }
                          }
                        ]
                      },
                      {
                        id: 'olive_oil',
                        recipe: () => {
                          event.recipes.create.compacting(
                            Fluid.of('charcoal_pit:olive_oil', 100),
                            'croptopia:olive'
                          );
                        },
                        children: [
                          {
                            id: 'olive_seed',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: {
                                  item: 'biomancy:organic_compound'
                                },
                                result: {
                                  item: 'croptopia:olive_seed'
                                },
                                processingTime: 80,
                                nutrientsCost: 8
                              });
                            }
                          }
                        ]
                      },
                      {
                        id: 'soybean_oil',
                        recipe: () => {
                          event.recipes.create.compacting(
                            Fluid.of('kubejs:soybean_oil', 100),
                            'croptopia:soybean'
                          );
                        },
                        children: [
                          {
                            id: 'soybean_seed',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: {
                                  item: 'biomancy:organic_compound'
                                },
                                result: {
                                  item: 'croptopia:soybean_seed'
                                },
                                processingTime: 80,
                                nutrientsCost: 8
                              });
                            }
                          }
                        ]
                      },
                      {
                        id: 'hydrogenated_soybean_oil',
                        // add hydrogen to soybean oil to make solid soybean oil
                        recipe: () => {
                          event.custom({
                            type: 'vintageimprovements:vacuumizing',
                            ingredients: [
                              {
                                item: 'kubejs:soybean_oil_bucket'
                              },
                              {
                                item: 'kubejs:palladium_catalyst'
                              },
                              {
                                item: 'rankine:hydrogen_gas_bottle',
                                count: 3
                              }
                            ],
                            results: [
                              {
                                item: 'kubejs:hydrogenated_soybean_oil',
                                count: 1
                              }
                            ],
                            processingTime: 600
                          });
                        },
                        children: [
                          {
                            id: 'hydrogen_gas_bottle',
                            recipe: () => {
                              event.custom({
                                type: 'rankine:air_distillation',
                                dimensions: ['the_bumblezone:bumblezone'],
                                outputs: [
                                  {
                                    item: 'rankine:carbon_dioxide_gas_block',
                                    chance: 0.8
                                  },
                                  {
                                    item: 'rankine:hydrogen_gas_block',
                                    chance: 0.2
                                  }
                                ]
                              });
                            }
                          },
                          {
                            id: 'palladium_catalyst',
                            //Dissolve sodium tetrachloropalladate in water. Add sodium hydroxide to change the solution's properties. Add potassium borohydride to create palladium nanoparticles. Mix these nanoparticles with a carbon material to support them. Use this mixture as your catalyst for hydrogenation.
                            recipe: () => {
                              event.recipes
                                .createSequencedAssembly(
                                  ['kubejs:palladium_catalyst'],
                                  'kubejs:sodium_tetrachloropalladate',
                                  [
                                    // event.recipes.create
                                    //   .mixing(
                                    //     'kubejs:sodium_tetrachloropalladate',
                                    //     [
                                    //       'kubejs:sodium_tetrachloropalladate',
                                    //       Fluid.of('minecraft:water', 1000),
                                    //     ]
                                    //   )
                                    //   .superheated(),
                                    event.recipes.create.filling(
                                      'kubejs:sodium_tetrachloropalladate',
                                      [
                                        'kubejs:sodium_tetrachloropalladate',
                                        Fluid.of(
                                          'kubejs:sodium_hydroxide',
                                          1000
                                        )
                                      ]
                                    )
                                    // event.recipes.create.mixing(
                                    //   'kubejs:sodium_tetrachloropalladate',
                                    //   [
                                    //     'kubejs:sodium_tetrachloropalladate',
                                    //     'kubejs:potassium_borohydride',
                                    //   ]
                                    // ),
                                    // event.recipes.create.mixing(
                                    //   'kubejs:sodium_tetrachloropalladate',
                                    //   [
                                    //     'kubejs:sodium_tetrachloropalladate',
                                    //     'rankine:carbon',
                                    //   ]
                                    // ),
                                  ]
                                )
                                .transitionalItem(
                                  'kubejs:sodium_tetrachloropalladate'
                                )
                                .loops(1);
                            },
                            children: [
                              {
                                id: 'sodium_tetrachloropalladate',
                                recipe: () => {
                                  // event.recipes
                                  //   .createSequencedAssembly(
                                  //     ['kubejs:sodium_tetrachloropalladate'],
                                  //     'chemlib:palladium_ingot',
                                  //     [
                                  //       event.recipes.create
                                  //         .mixing('chemlib:palladium_ingot', [
                                  //           'chemlib:palladium_ingot',
                                  //           Fluid.of('kubejs:aqua_regia', 1000),
                                  //         ])
                                  //         .superheated(),
                                  //       event.recipes.create
                                  //         .mixing('chemlib:palladium_ingot', [
                                  //           'chemlib:palladium_ingot',
                                  //           'kubejs:soda_ash',
                                  //         ])
                                  //         .superheated(),
                                  //       event.recipes.create
                                  //         .mixing('chemlib:palladium_ingot', [
                                  //           'chemlib:palladium_ingot',
                                  //           'salt:salt',
                                  //         ])
                                  //         .superheated(),
                                  //     ]
                                  //   )
                                  //   .transitionalItem('chemlib:palladium_ingot')
                                  //   .loops(1);
                                },
                                children: [
                                  {
                                    id: 'aqua_regia',
                                    recipe: () => {},
                                    children: [
                                      {
                                        // TODO: nitric acid
                                        id: 'nitric_acid',
                                        recipe: () => {},
                                        children: []
                                      },
                                      {
                                        // TODO: hydrochloric acid
                                        id: 'hydrochloric_acid',
                                        recipe: () => {},
                                        children: []
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                id: 'sodium_hydroxide_fluid',
                                recipe: () => {
                                  event.recipes.create
                                    .mixing(
                                      Fluid.of('kubejs:sodium_hydroxide', 1000),
                                      ['rankine:sodium_hydroxide']
                                    )
                                    .superheated();
                                },
                                children: [
                                  {
                                    id: 'sodium_hydroxide',
                                    recipe: () => {
                                      event.custom({
                                        type: 'createaddition:charging',
                                        input: {
                                          item: 'mekanism:brine_bucket',
                                          count: 1
                                        },
                                        result: {
                                          item: 'rankine:sodium_hydroxide',
                                          count: 1
                                        },
                                        energy: 10000
                                      });
                                    },
                                    children: []
                                  }
                                ]
                              },
                              {
                                id: 'potassium_borohydride_fluid',
                                // recipe: () => {
                                //   event.recipes
                                //     .createSequencedAssembly(
                                //       ['kubejs:potassium_borohydride'],
                                //       'rankine:borax',
                                //       [
                                //         event.recipes.create
                                //           .mixing('rankine:borax', [
                                //             'rankine:borax',
                                //             Fluid.of(
                                //               'rankine:sulfuric_acid',
                                //               1000
                                //             ),
                                //           ])
                                //           .superheated(),
                                //         event.recipes.create
                                //           .mixing('rankine:borax', [
                                //             'rankine:borax',
                                //             Fluid.of(
                                //               'kubejs:potassium_hydroxide',
                                //               1000
                                //             ),
                                //             'chemlib:magnesium_dust',
                                //           ])
                                //           .superheated(),
                                //         event.recipes.create
                                //           .mixing('rankine:borax', [
                                //             'rankine:borax',
                                //             Fluid.of(
                                //               'immersiveengineering:ethanol',
                                //               1000
                                //             ),
                                //           ])
                                //           .superheated(),
                                //         event.recipes.create
                                //           .mixing('rankine:borax', [
                                //             'rankine:borax',
                                //           ])
                                //           .superheated(),
                                //       ]
                                //     )
                                //     .transitionalItem('rankine:borax')
                                //     .loops(1);
                                // },
                                children: [
                                  {
                                    id: 'borax',
                                    recipe: () => {},
                                    children: []
                                  },
                                  {
                                    id: 'sulfuric_acid',
                                    recipe: () => {},
                                    children: []
                                  },
                                  {
                                    id: 'potassium_hydroxide',
                                    recipe: () => {},
                                    children: []
                                  },
                                  {
                                    id: 'magnesium_dust',
                                    recipe: () => {},
                                    children: [
                                      {
                                        id: 'magnesium',
                                        recipe: () => {},
                                        children: []
                                      }
                                    ]
                                  }
                                ]
                              },
                              { id: 'carbon', recipe: () => {} }
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
            id: 'ketchup',
            recipe: () => {
              event.recipes.create.filling('kubejs:ketchup', [
                'minecraft:glass_bottle',
                Fluid.of('kubejs:ketchup', 1000)
              ]);
            },
            children: [
              // tomato paste mixes with water, sugar, vinegar, brine, secret spices
              {
                id: 'ketchup_fluid',
                recipe: () => {
                  event.recipes.create.mixing(
                    Fluid.of('kubejs:ketchup', 1000),
                    [
                      Fluid.of('kubejs:tomato_paste', 1000),
                      Fluid.of('charcoal_pit:vinegar_still', 1000),
                      Fluid.of('minecraft:water', 1000),
                      'kubejs:brown_sugar',
                      'salt:salt',
                      'kubejs:ketchup_spices'
                    ]
                  );
                },
                children: [
                  {
                    // wash the tomatos, skin them, slice them, crush them into sauce, boil them 3 times to make paste fluid
                    id: 'tomato_paste',
                    recipe: () => {
                      event.recipes.create.mixing(
                        Fluid.of('kubejs:tomato_paste', 10),
                        [Fluid.of('create_central_kitchen:tomato_sauce', 1000)]
                      );
                    },
                    children: [
                      {
                        id: 'tomato_sauce',
                        recipe: () => {
                          event.remove({
                            id: 'create_central_kitchen:mixing/tomato_sauce'
                          });
                          event.recipes.create.compacting(
                            Fluid.of(
                              'create_central_kitchen:tomato_sauce',
                              1000
                            ),
                            '9x kubejs:skinned_tomato'
                          );
                        },
                        children: [
                          {
                            id: 'skinned_tomato',
                            recipe: () => {
                              event.custom({
                                type: 'vintageimprovements:polishing',
                                speed_limits: 1,
                                ingredients: [
                                  {
                                    item: 'kubejs:washed_tomato'
                                  }
                                ],
                                results: [
                                  {
                                    item: 'kubejs:skinned_tomato',
                                    count: 1
                                  }
                                ],
                                processingTime: 20
                              });
                            },
                            children: [
                              {
                                id: 'washed_tomato',
                                recipe: () => {
                                  event.recipes.create.mixing(
                                    'kubejs:washed_tomato',
                                    [
                                      'croptopia:tomato',
                                      Fluid.of('minecraft:water', 1000)
                                    ]
                                  );
                                },
                                children: [
                                  {
                                    id: 'tomato_seed',
                                    recipe: () => {
                                      event.custom({
                                        type: 'biomancy:bio_brewing',
                                        ingredients: [
                                          { item: 'minecraft:potato' }
                                        ],
                                        reactant: {
                                          item: 'biomancy:organic_compound'
                                        },
                                        result: {
                                          item: 'croptopia:tomato_seed'
                                        },
                                        processingTime: 80,
                                        nutrientsCost: 8
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
                    id: 'ketchup_spices',
                    recipe: () => {
                      event.recipes.create.mixing('kubejs:ketchup_spices', [
                        'kubejs:onion_powder',
                        'kubejs:garlic_powder',
                        'kubejs:celery_powder',
                        'kubejs:mustard_powder'
                      ]);
                    },
                    children: [
                      {
                        id: 'onion_powder',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:onion_powder'],
                            'croptopia:onion'
                          );
                        },
                        children: [
                          {
                            id: 'onion_seed',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: { item: 'biomancy:organic_compound' },
                                result: { item: 'croptopia:onion_seed' },
                                processingTime: 80,
                                nutrientsCost: 8
                              });
                            }
                          }
                        ]
                      },
                      {
                        id: 'garlic_powder',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:garlic_powder'],
                            'croptopia:garlic'
                          );
                        },
                        children: [
                          {
                            id: 'garlic_seed',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: { item: 'biomancy:organic_compound' },
                                result: { item: 'croptopia:garlic_seed' },
                                processingTime: 80,
                                nutrientsCost: 8
                              });
                            }
                          }
                        ]
                      },
                      {
                        id: 'celery_powder',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:celery_powder'],
                            'croptopia:celery'
                          );
                        },
                        children: [
                          {
                            id: 'celery_seed',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: { item: 'biomancy:organic_compound' },
                                result: { item: 'croptopia:celery_seed' },
                                processingTime: 80,
                                nutrientsCost: 8
                              });
                            }
                          }
                        ]
                      },
                      {
                        id: 'mustard_powder',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:mustard_powder'],
                            'croptopia:mustard'
                          );
                        },
                        children: [
                          {
                            id: 'mustard_seed',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: { item: 'biomancy:organic_compound' },
                                result: { item: 'croptopia:mustard_seed' },
                                processingTime: 80,
                                nutrientsCost: 8
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
        id: 'bottle_of_soda',
        recipe: () => {
          event.recipes.create.filling('kubejs:bottle_of_soda', [
            'minecraft:glass_bottle',
            Fluid.of('kubejs:soda', 1000)
          ]);
        },
        children: [
          {
            id: 'soda',
            recipe: () => {
              event.recipes.create.mixing(Fluid.of('kubejs:soda'), [
                Fluid.of('kubejs:carbonated_water', 750),
                Fluid.of('kubejs:soda_syrup', 250)
              ]);
            },
            children: [
              {
                id: 'carbonated_water',
                recipe: () => {
                  event.custom({
                    type: 'charcoal_pit:barrel',
                    item_in: {
                      item: 'kubejs:yeast'
                    },
                    fluid_in: {
                      fluid: 'the_bumblezone:sugar_water_still',
                      amount: 1000
                    },
                    fluid_out: {
                      fluid: 'kubejs:carbonated_water',
                      amount: 1000
                    },
                    flags: 1,
                    time: 6000
                  });
                }
              },
              {
                id: 'soda_syrup',
                recipe: () => {
                  event.recipes.create.mixing(
                    Fluid.of('kubejs:soda_syrup', 1000),
                    [
                      Fluid.of('kubejs:high_fructose_corn_syrup', 750),
                      'chemlib:caffeine_dust',
                      'kubejs:pectin_gel',
                      Fluid.of('kubejs:natural_flavors', 250)
                    ]
                  );
                },
                children: [
                  {
                    id: 'high_fructose_corn_syrup',
                    recipe: () => {
                      event.recipes.create
                        .mixing(
                          Fluid.of('kubejs:high_fructose_corn_syrup', 1000),
                          ['11x kubejs:fructose', '9x kubejs:corn_syrup']
                        )
                        .superheated();
                    },
                    children: [
                      {
                        id: 'fructose',
                        recipe: () => {
                          event.custom({
                            type: 'biomancy:digesting',
                            ingredient: { item: 'kubejs:corn_syrup' },
                            result: { item: 'kubejs:fructose', count: 1 },
                            processingTime: 600,
                            nutrientsCost: 4
                          });
                        },
                        children: [
                          {
                            id: 'corn_syrup',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:decomposing',
                                ingredient: { item: 'kubejs:maltodextrin' },
                                results: [
                                  {
                                    item: 'kubejs:corn_syrup',
                                    countRange: { type: 'constant', value: 1 }
                                  }
                                ],
                                processingTime: 600,
                                nutrientsCost: 4
                              });
                            },
                            children: [
                              {
                                id: 'maltodextrin',
                                recipe: () => {
                                  event.custom({
                                    type: 'biomancy:bio_brewing',
                                    ingredients: [
                                      { item: 'kubejs:corn_starch' }
                                    ],
                                    reactant: [
                                      { item: 'kubejs:alpha_amylase' }
                                    ],
                                    result: { item: 'kubejs:maltodextrin' },
                                    processingTime: 80,
                                    nutrientsCost: 4
                                  });
                                },
                                children: [
                                  {
                                    id: 'corn_starch',
                                    recipe: () => {
                                      event.custom({
                                        type: 'vintageimprovements:centrifugation',
                                        ingredients: [
                                          {
                                            item: 'kubejs:corn_starch_slurry_bucket'
                                          }
                                        ],
                                        results: [
                                          { item: 'kubejs:corn_starch' },
                                          { item: 'kubejs:gluten' }
                                        ],
                                        processingTime: 600
                                      });
                                    },
                                    children: [
                                      {
                                        id: 'corn_starch_slurry',
                                        recipe: () => {
                                          event.recipes.create
                                            .mixing(
                                              Fluid.of(
                                                'kubejs:corn_starch_slurry',
                                                1000
                                              ),
                                              [
                                                'rankine:corn_grain',
                                                Fluid.of(
                                                  'minecraft:water',
                                                  1000
                                                )
                                              ]
                                            )
                                            .heated();
                                        },
                                        children: [
                                          {
                                            id: 'corn_grain',
                                            recipe: () => {
                                              event.recipes.create.crushing(
                                                'rankine:corn_grain',
                                                'kubejs:corn_meal'
                                              );
                                            },
                                            children: [
                                              {
                                                id: 'corn_meal',
                                                recipe: () => {
                                                  event.recipes.create.crushing(
                                                    'kubejs:corn_meal',
                                                    'kubejs:corn_flakes'
                                                  );
                                                },
                                                children: [
                                                  {
                                                    id: 'corn_flakes',
                                                    recipe: () => {
                                                      event.recipes.create.crushing(
                                                        'kubejs:corn_flakes',
                                                        'croptopia:corn'
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
                                    id: 'alpha_amylase',
                                    recipe: () => {
                                      event.custom({
                                        type: 'vintageimprovements:centrifugation',
                                        ingredients: [
                                          {
                                            item: 'kubejs:specimen_264'
                                          }
                                        ],
                                        results: [
                                          {
                                            item: 'kubejs:alpha_amylase',
                                            count: 1
                                          },
                                          {
                                            item: 'kubejs:bacillus_subtilis',
                                            count: 3
                                          }
                                        ],
                                        processingTime: 1000
                                      });
                                    },
                                    children: [
                                      {
                                        id: 'specimen_264',
                                        recipe: () => {
                                          // fermenting innoculated petri dish
                                          event.custom({
                                            type: 'biomancy:bio_brewing',
                                            ingredients: [
                                              { item: 'kubejs:petri_dish_264' }
                                            ],
                                            reactant: {
                                              item: 'kubejs:bacillus_subtilis'
                                            },
                                            result: {
                                              item: 'kubejs:specimen_264'
                                            },
                                            processingTime: 80,
                                            nutrientsCost: 8
                                          });
                                        },
                                        children: [
                                          {
                                            id: 'petri_dish_264',
                                            recipe: () => {
                                              event.recipes.create.filling(
                                                'kubejs:petri_dish_264',
                                                [
                                                  'kubejs:empty_petri_dish',
                                                  Fluid.of(
                                                    'pneumaticcraft:yeast_culture',
                                                    1000
                                                  )
                                                ]
                                              );
                                            },
                                            children: [
                                              {
                                                id: 'yeast_culture',
                                                recipe: () => {
                                                  event.recipes.create.mixing(
                                                    Fluid.of(
                                                      'pneumaticcraft:yeast_culture',
                                                      10
                                                    ),
                                                    [
                                                      'kubejs:sourdough_starter',
                                                      Fluid.of(
                                                        'minecraft:water',
                                                        10
                                                      )
                                                    ]
                                                  );
                                                }
                                              },
                                              {
                                                id: 'fungal_spores',
                                                recipe: () => {
                                                  event.custom({
                                                    type: 'biomancy:decomposing',
                                                    ingredient: {
                                                      item: 'undergarden:blood_mushroom'
                                                    },
                                                    results: [
                                                      {
                                                        item: 'kubejs:fungal_spores',
                                                        countRange: {
                                                          type: 'uniform',
                                                          min: 0,
                                                          max: 2
                                                        }
                                                      }
                                                    ],
                                                    processingTime: 250,
                                                    nutrientsCost: 1
                                                  });
                                                }
                                              }
                                            ]
                                          },
                                          {
                                            id: 'bacillus_subtilis',
                                            recipe: () => {
                                              event.custom({
                                                type: 'biomancy:decomposing',
                                                ingredient: {
                                                  item: 'rankine:compost'
                                                },
                                                results: [
                                                  {
                                                    item: 'kubejs:bacillus_subtilis',
                                                    countRange: {
                                                      type: 'uniform',
                                                      min: 0,
                                                      max: 1
                                                    }
                                                  },
                                                  {
                                                    item: 'biomancy:organic_matter',
                                                    countRange: {
                                                      type: 'uniform',
                                                      min: 0,
                                                      max: 1
                                                    }
                                                  }
                                                ],
                                                processingTime: 600,
                                                nutrientsCost: 4
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
                  },
                  {
                    id: 'caffeine_dust',
                    recipe: () => {
                      event.recipes.create.crushing(
                        'chemlib:caffeine_dust',
                        'kubejs:caffeine_crystals'
                      );
                    },
                    children: [
                      {
                        id: 'caffeine_crystals',
                        recipe: () => {
                          event.recipes.create
                            .mixing('kubejs:caffeine_crystals', [
                              Fluid.of('create_central_kitchen:coffee', 10000)
                            ])
                            .heated();
                        },
                        children: [
                          {
                            id: 'coffee_fluid',
                            recipe: () => {
                              event.remove({
                                id: 'create_central_kitchen:mixing/coffee'
                              });
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'pectin_gel',
                    // get apple peels. mix with superheated acidic water or citric acid. drain through a drain or strain or something. boil again and mix with sugar to make pectin gel.
                    recipe: () => {
                      // event.recipes
                      //   .createSequencedAssembly(
                      //     ['kubejs:pectin_gel'],
                      //     'kubejs:apple_peel',
                      //     [
                      //       event.recipes.create
                      //         .mixing('kubejs:apple_peel', [
                      //           'kubejs:apple_peel',
                      //           Fluid.of('kubejs:citric_acid', 1000),
                      //         ])
                      //         .heated(),
                      //       event.recipes.create
                      //         .mixing('kubejs:apple_peel', [
                      //           'kubejs:apple_peel',
                      //           'kubejs:brown_sugar',
                      //         ])
                      //         .heated(),
                      //     ]
                      //   )
                      //   .transitionalItem('kubejs:apple_peel')
                      //   .loops(1);
                    },
                    children: [
                      {
                        id: 'apple_peel',
                        recipe: () => {
                          event.custom({
                            type: 'vintageimprovements:polishing',
                            speed_limits: 1,
                            ingredients: [
                              {
                                item: 'minecraft:apple'
                              }
                            ],
                            results: [
                              {
                                item: 'kubejs:apple_peel',
                                count: 1
                              }
                            ],
                            processingTime: 20
                          });
                        },
                        children: []
                      },
                      {
                        id: 'citric_acid_fluid',
                        recipe: () => {
                          event.recipes.create.mixing(
                            Fluid.of('kubejs:citric_acid', 1000),
                            [
                              'kubejs:citric_acid',
                              Fluid.of('minecraft:water', 1000)
                            ]
                          );
                          // put sugarcane juice in a petri dish. add bacteria to it and put it in a fermentation barrel or bio lab. centrifuge the mixture to get citric acid. mix with water to get citric acid fluid.
                        },
                        children: [
                          {
                            id: 'citric_acid',
                            recipe: () => {
                              event.custom({
                                type: 'vintageimprovements:centrifugation',
                                ingredients: [
                                  {
                                    item: 'kubejs:specimen_143'
                                  }
                                ],
                                results: [
                                  {
                                    item: 'minecraft:sugar',
                                    count: 1
                                  },
                                  {
                                    item: 'kubejs:citric_acid',
                                    count: 1
                                  },
                                  {
                                    item: 'kubejs:fungal_spores',
                                    count: 3
                                  }
                                ],
                                processingTime: 1000
                              });
                            },
                            children: [
                              {
                                id: 'specimen_143',
                                recipe: () => {
                                  // fermenting innoculated petri dish
                                  event.custom({
                                    type: 'biomancy:bio_brewing',
                                    ingredients: [
                                      { item: 'kubejs:petri_dish_143' }
                                    ],
                                    reactant: {
                                      item: 'kubejs:fungal_spores'
                                    },
                                    result: {
                                      item: 'kubejs:specimen_143'
                                    },
                                    processingTime: 80,
                                    nutrientsCost: 8
                                  });
                                },
                                children: [
                                  {
                                    id: 'petri_dish_143',
                                    recipe: () => {
                                      // pour sugarcane juice into petri dish then deploy spores on it
                                      event.recipes.create.filling(
                                        'kubejs:petri_dish_143',
                                        [
                                          'kubejs:empty_petri_dish',
                                          Fluid.of(
                                            'kubejs:sugar_cane_juice',
                                            1000
                                          )
                                        ]
                                      );
                                    },
                                    children: [
                                      {
                                        id: 'fungal_spores',
                                        recipe: () => {
                                          event.custom({
                                            type: 'biomancy:decomposing',
                                            ingredient: {
                                              item: 'undergarden:blood_mushroom'
                                            },
                                            results: [
                                              {
                                                item: 'kubejs:fungal_spores',
                                                countRange: {
                                                  type: 'uniform',
                                                  min: 0,
                                                  max: 2
                                                }
                                              }
                                            ],
                                            processingTime: 250,
                                            nutrientsCost: 1
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
                    id: 'natural_flavors',
                    recipe: () => {
                      event.recipes.create.mixing(
                        Fluid.of('kubejs:natural_flavors', 1000),
                        [
                          Fluid.of('kubejs:vanilla_extract', 250),
                          Fluid.of('kubejs:blackberry_extract', 250),
                          Fluid.of('kubejs:lemon_extract', 250),
                          Fluid.of('kubejs:ender_extract', 250)
                        ]
                      );
                    },
                    children: [
                      {
                        id: 'vanilla_extract',
                        recipe: () => {
                          event.custom({
                            type: 'charcoal_pit:barrel',
                            item_in: {
                              item: 'croptopia:vanilla'
                            },
                            fluid_in: {
                              fluid: 'immersiveengineering:ethanol',
                              amount: 1000
                            },
                            fluid_out: {
                              fluid: 'kubejs:vanilla_extract',
                              amount: 1000
                            },
                            flags: 1,
                            time: 6000
                          });
                        },
                        children: [
                          {
                            id: 'vanilla_seed',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: {
                                  item: 'biomancy:organic_compound'
                                },
                                result: {
                                  item: 'croptopia:vanilla_seeds'
                                },
                                processingTime: 80,
                                nutrientsCost: 8
                              });
                            }
                          }
                        ]
                      },
                      {
                        id: 'blackberry_extract',
                        recipe: () => {
                          event.custom({
                            type: 'charcoal_pit:barrel',
                            item_in: {
                              item: 'croptopia:blackberry'
                            },
                            fluid_in: {
                              fluid: 'immersiveengineering:ethanol',
                              amount: 1000
                            },
                            fluid_out: {
                              fluid: 'kubejs:blackberry_extract',
                              amount: 1000
                            },
                            flags: 1,
                            time: 6000
                          });
                        },
                        children: [
                          {
                            id: 'blackberry_seed',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: {
                                  item: 'biomancy:organic_compound'
                                },
                                result: {
                                  item: 'croptopia:blackberry_seed'
                                },
                                processingTime: 80,
                                nutrientsCost: 8
                              });
                            }
                          }
                        ]
                      },
                      {
                        id: 'lemon_extract',
                        recipe: () => {
                          event.custom({
                            type: 'charcoal_pit:barrel',
                            item_in: {
                              item: 'croptopia:lemon'
                            },
                            fluid_in: {
                              fluid: 'immersiveengineering:ethanol',
                              amount: 1000
                            },
                            fluid_out: {
                              fluid: 'kubejs:lemon_extract',
                              amount: 1000
                            },
                            flags: 1,
                            time: 6000
                          });
                        },
                        children: [
                          {
                            id: 'lemon_sapling',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'minecraft:potato' }],
                                reactant: {
                                  item: 'biomancy:organic_compound'
                                },
                                result: {
                                  item: 'croptopia:lemon_sapling'
                                },
                                processingTime: 80,
                                nutrientsCost: 8
                              });
                            }
                          }
                        ]
                      },
                      {
                        id: 'ender_extract',
                        recipe: () => {
                          event.custom({
                            type: 'charcoal_pit:barrel',
                            item_in: {
                              item: 'minecraft:ender_pearl'
                            },
                            fluid_in: {
                              fluid: 'immersiveengineering:ethanol',
                              amount: 1000
                            },
                            fluid_out: {
                              fluid: 'kubejs:ender_extract',
                              amount: 1000
                            },
                            flags: 1,
                            time: 6000
                          });
                        },
                        children: [
                          // corn syrup -> yeast is added ferments into beer -> superheated to make impure ethanol -> evaporated to make ethanol,dried distillers grains with solubles (DDGS) for feed and corn oil
                          {
                            id: 'ethanol',
                            recipe: () => {
                              event.recipes.create.mixing(
                                Fluid.of('immersiveengineering:ethanol', 100),
                                [Fluid.of('kubejs:beer', 1000)]
                              );
                            },
                            children: [
                              {
                                id: 'beer',
                                recipe: () => {
                                  event.custom({
                                    type: 'charcoal_pit:barrel',
                                    item_in: {
                                      item: 'kubejs:yeast'
                                    },
                                    fluid_in: {
                                      fluid: 'kubejs:corn_syrup',
                                      amount: 1000
                                    },
                                    fluid_out: {
                                      fluid: 'kubejs:beer',
                                      amount: 1000
                                    },
                                    flags: 1,
                                    time: 6000
                                  });
                                },
                                children: [
                                  {
                                    id: 'yeast',
                                    recipe: () => {
                                      event.custom({
                                        type: 'rankine:evaporation',
                                        processTime: 12000,
                                        input: {
                                          fluid: 'pneumaticcraft:yeast_culture'
                                        },
                                        outputs: [
                                          { item: 'kubejs:yeast', weight: 100 }
                                        ]
                                      });
                                    }
                                  },
                                  {
                                    id: 'corn_syrup',
                                    recipe: () => {
                                      event.recipes.create.mixing(
                                        Fluid.of('kubejs:corn_syrup', 1000),
                                        ['kubejs:corn_syrup']
                                      );
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          { id: 'ender_pearl', children: [] }
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
        id: 'cheeseburger',
        recipe: () => {
          event.recipes
            .createSequencedAssembly(
              ['croptopia:cheeseburger'],
              'croptopia:hamburger',
              [
                event.recipes.create.filling('croptopia:hamburger', [
                  'croptopia:hamburger',
                  Fluid.of('kubejs:mayonnaise', 1000)
                ]),
                event.recipes.createDeploying('croptopia:hamburger', [
                  'croptopia:hamburger',
                  'rankine:cheese'
                ]),
                event.recipes.createDeploying('croptopia:hamburger', [
                  'croptopia:hamburger',
                  'charcoal_pit:pickled_olives'
                ]),
                event.recipes.createDeploying('croptopia:hamburger', [
                  'croptopia:hamburger',
                  'kubejs:onion_slices'
                ])
              ]
            )
            .transitionalItem('croptopia:hamburger')
            .loops(1);
        },
        children: [
          {
            id: 'hamburger',
            recipe: () => {
              event.recipes
                .createSequencedAssembly(
                  ['croptopia:hamburger'],
                  'kubejs:burger_bun',
                  [
                    event.recipes.createDeploying('kubejs:burger_bun', [
                      'kubejs:burger_bun',
                      'farmersdelight:cabbage_leaf'
                    ]),
                    event.recipes.createDeploying('kubejs:burger_bun', [
                      'kubejs:burger_bun',
                      'kubejs:tomato_slices'
                    ]),
                    event.recipes.createDeploying('kubejs:burger_bun', [
                      'kubejs:burger_bun',
                      'farmersdelight:beef_patty'
                    ]),
                    event.recipes.createDeploying('kubejs:burger_bun', [
                      'kubejs:burger_bun',
                      'kubejs:burger_bun'
                    ])
                  ]
                )
                .transitionalItem('kubejs:burger_bun')
                .loops(1);
            },
            children: [
              {
                // yeast
                id: 'burger_bun',
                recipe: () => {
                  event.recipes
                    .createSequencedAssembly(
                      ['kubejs:burger_bun'],
                      'pneumaticcraft:sourdough_bread',
                      [
                        event.recipes.create.deploying(
                          'pneumaticcraft:sourdough_bread',
                          [
                            'pneumaticcraft:sourdough_bread',
                            'kubejs:sesame_seeds'
                          ]
                        ),
                        event.recipes.create.deploying(
                          'pneumaticcraft:sourdough_bread',
                          [
                            'pneumaticcraft:sourdough_bread',
                            'kubejs:sesame_seeds'
                          ]
                        ),
                        event.recipes.create.deploying(
                          'pneumaticcraft:sourdough_bread',
                          [
                            'pneumaticcraft:sourdough_bread',
                            'kubejs:sesame_seeds'
                          ]
                        )
                      ]
                    )
                    .transitionalItem('pneumaticcraft:sourdough_bread')
                    .loops(1);
                },
                children: [
                  {
                    id: 'sesame_seeds',
                    recipe: () => {
                      event.custom({
                        type: 'biomancy:bio_brewing',
                        ingredients: [{ item: 'minecraft:potato' }],
                        reactant: {
                          item: 'biomancy:organic_compound'
                        },
                        result: {
                          item: 'kubejs:sesame_seeds'
                        },
                        processingTime: 80,
                        nutrientsCost: 8
                      });
                    },
                    children: []
                  },
                  //
                  {
                    id: 'sourdough_bread',
                    recipe: () => {
                      event.smoking(
                        'pneumaticcraft:sourdough_bread',
                        'pneumaticcraft:sourdough'
                      );
                    },
                    children: [
                      {
                        id: 'sourdough',
                        recipe: () => {
                          event.remove({ output: 'pneumaticcraft:sourdough' });
                          event.recipes.create.mixing(
                            'pneumaticcraft:sourdough',
                            [
                              'kubejs:all_purpose_flour',
                              'kubejs:sourdough_starter',
                              'salt:salt'
                            ]
                          );
                        },
                        children: [
                          {
                            id: 'sourdough_starter',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [{ item: 'kubejs:ripe_mix' }],
                                // reactant: [{item: reactant}],
                                result: { item: 'kubejs:sourdough_starter' },
                                processingTime: 600,
                                nutrientsCost: 8
                              });
                              event.custom({
                                type: 'biomancy:bio_brewing',
                                ingredients: [
                                  { item: 'kubejs:sourdough_starter' }
                                ],
                                reactant: [
                                  { item: 'kubejs:all_purpose_flour' }
                                ],
                                result: {
                                  item: 'kubejs:sourdough_starter',
                                  count: 2
                                },
                                processingTime: 600,
                                nutrientsCost: 8
                              });
                            },
                            children: [
                              {
                                id: 'ripe_mix',
                                recipe: () => {
                                  event.recipes.create.mixing(
                                    'kubejs:ripe_mix',
                                    [
                                      'rankine:rye_grain',
                                      Fluid.of('minecraft:water', 1000),
                                      'kubejs:ripe_ferment'
                                    ]
                                  );
                                },
                                children: [
                                  {
                                    id: 'ripe_ferment',
                                    recipe: () => {
                                      event.custom({
                                        type: 'biomancy:bio_brewing',
                                        ingredients: [
                                          { item: 'kubejs:bubbly_mix' }
                                        ],
                                        // reactant: [{item: reactant}],
                                        result: { item: 'kubejs:ripe_ferment' },
                                        processingTime: 600,
                                        nutrientsCost: 8
                                      });
                                    },
                                    children: [
                                      {
                                        id: 'bubbly_mix',
                                        recipe: () => {
                                          event.recipes.create.mixing(
                                            'kubejs:bubbly_mix',
                                            [
                                              'rankine:rye_grain',
                                              Fluid.of('minecraft:water', 1000),
                                              'kubejs:bubbly_ferment'
                                            ]
                                          );
                                        },
                                        children: [
                                          {
                                            id: 'bubbly_ferment',
                                            recipe: () => {
                                              event.custom({
                                                type: 'biomancy:bio_brewing',
                                                ingredients: [
                                                  { item: 'kubejs:active_mix' }
                                                ],
                                                // reactant: [{item: reactant}],
                                                result: {
                                                  item: 'kubejs:bubbly_ferment'
                                                },
                                                processingTime: 600,
                                                nutrientsCost: 8
                                              });
                                            },
                                            children: [
                                              {
                                                id: 'active_mix',
                                                recipe: () => {
                                                  event.recipes.create.mixing(
                                                    'kubejs:active_mix',
                                                    [
                                                      'rankine:rye_grain',
                                                      Fluid.of(
                                                        'minecraft:water',
                                                        1000
                                                      ),
                                                      'kubejs:active_ferment'
                                                    ]
                                                  );
                                                },
                                                children: [
                                                  {
                                                    id: 'active_ferment',
                                                    recipe: () => {
                                                      event.custom({
                                                        type: 'biomancy:bio_brewing',
                                                        ingredients: [
                                                          {
                                                            item: 'kubejs:starter_mix'
                                                          }
                                                        ],
                                                        // reactant: [{item: reactant}],
                                                        result: {
                                                          item: 'kubejs:active_ferment'
                                                        },
                                                        processingTime: 600,
                                                        nutrientsCost: 8
                                                      });
                                                    },
                                                    children: [
                                                      {
                                                        id: 'starter_mix',
                                                        recipe: () => {
                                                          event.recipes.create.mixing(
                                                            'kubejs:starter_mix',
                                                            [
                                                              'rankine:rye_grain',
                                                              Fluid.of(
                                                                'minecraft:water',
                                                                1000
                                                              )
                                                            ]
                                                          );
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
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                // animal agriculture
                id: 'patty',
                recipe: () => {
                  event.smoking(
                    'farmersdelight:beef_patty',
                    'farmersdelight:minced_beef'
                  );
                },
                children: [
                  {
                    id: 'minced_beef',
                    recipe: () => {
                      event.recipes.create.compacting(
                        'farmersdelight:minced_beef',
                        '9x kubejs:ground_beef'
                      );
                    },
                    children: [
                      {
                        id: 'ground_beef',
                        recipe: () => {
                          event.recipes.create.crushing(
                            'kubejs:ground_beef',
                            'kubejs:partially_ground_beef'
                          );
                        },
                        children: [
                          {
                            id: 'partially_ground_beef',
                            recipe: () => {
                              event.recipes.create.crushing(
                                'kubejs:partially_ground_beef',
                                'kubejs:trimmed_beef'
                              );
                            },
                            children: [
                              {
                                id: 'trimmed_beef',
                                recipe: () => {
                                  event.custom({
                                    type: 'farmersdelight:cutting',
                                    ingredients: [
                                      { item: 'kubejs:prime_beef' }
                                    ],
                                    tool: { tag: 'forge:tools/knives' },
                                    result: [{ item: 'kubejs:trimmed_beef' }]
                                  });
                                },
                                children: [
                                  {
                                    id: 'prime_beef',
                                    recipe: () => {
                                      event.recipes.create.crushing(
                                        [
                                          Item.of(
                                            'kubejs:prime_beef'
                                          ).withChance(0.01),
                                          Item.of(
                                            'kubejs:subprime_beef'
                                          ).withChance(0.2),
                                          Item.of('kubejs:secondary_beef')
                                        ],
                                        'kubejs:aged_cow_carcass'
                                      );
                                    },
                                    children: [
                                      {
                                        id: 'aged_cow_carcass',
                                        recipe: () => {
                                          event.custom({
                                            type: 'biomancy:decomposing',
                                            ingredient: {
                                              item: 'kubejs:washed_cow_carcass'
                                            },
                                            results: [
                                              {
                                                item: 'kubejs:aged_cow_carcass',
                                                countRange: {
                                                  type: 'constant',
                                                  value: 1
                                                }
                                              }
                                            ],
                                            processingTime: 6000,
                                            nutrientsCost: 32
                                          });
                                        },
                                        children: [
                                          {
                                            id: 'washed_cow_carcass',
                                            recipe: () => {
                                              event.recipes.createSplashing(
                                                'kubejs:washed_cow_carcass',
                                                'kubejs:gutted_cow_carcass'
                                              );
                                            },
                                            children: [
                                              {
                                                id: 'gutted_cow_carcass',
                                                recipe: () => {
                                                  event.recipes.create.deploying(
                                                    'kubejs:gutted_cow_carcass',
                                                    [
                                                      'kubejs:skinned_cow_carcass',
                                                      'kubejs:gut_knife'
                                                    ]
                                                  );
                                                },
                                                children: [
                                                  {
                                                    id: 'skinned_cow_carcass',
                                                    recipe: () => {
                                                      event.recipes.create.deploying(
                                                        'kubejs:skinned_cow_carcass',
                                                        [
                                                          'kubejs:drained_cow_carcass',
                                                          'kubejs:skinning_knife'
                                                        ]
                                                      );
                                                    },
                                                    children: [
                                                      {
                                                        id: 'drained_cow_carcass',
                                                        recipe: () => {
                                                          event.recipes.create.deploying(
                                                            'kubejs:drained_cow_carcass',
                                                            [
                                                              'kubejs:cow_carcass',
                                                              'kubejs:butcher_knife'
                                                            ]
                                                          );
                                                        },
                                                        children: [
                                                          {
                                                            id: 'cow_carcass',
                                                            recipe: () => {
                                                              // loot change so killing a cow drops a cow carcass and nothing else
                                                            },
                                                            children: [
                                                              {
                                                                id: 'cow',
                                                                recipe: () => {
                                                                  event.custom({
                                                                    type: 'naturesaura:animal_spawner',
                                                                    ingredients:
                                                                      [
                                                                        {
                                                                          item: 'naturesaura:birth_spirit'
                                                                        },
                                                                        {
                                                                          item: 'kubejs:monachopsis_token'
                                                                        },
                                                                        {
                                                                          item: 'kubejs:seasons_rune'
                                                                        },
                                                                        {
                                                                          item: 'bloodmagic:demonslate'
                                                                        },
                                                                        {
                                                                          item: 'bloodmagic:defaultcrystal'
                                                                        },
                                                                        {
                                                                          item: 'kubejs:strange_dna'
                                                                        }
                                                                      ],
                                                                    entity:
                                                                      'minecraft:cow',
                                                                    aura: 50000,
                                                                    time: 1000
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
                id: 'cabbage_seeds',
                recipe: () => {
                  event.custom({
                    type: 'biomancy:bio_brewing',
                    ingredients: [{ item: 'minecraft:potato' }],
                    reactant: {
                      item: 'biomancy:organic_compound'
                    },
                    result: {
                      item: 'farmersdelight:cabbage_seeds'
                    },
                    processingTime: 80,
                    nutrientsCost: 8
                  });
                }
              },
              {
                id: 'tomato_slices',
                recipe: () => {
                  event.custom({
                    type: 'farmersdelight:cutting',
                    ingredients: [
                      {
                        item: 'croptopia:tomato'
                      }
                    ],
                    tool: {
                      tag: 'forge:tools/knives'
                    },
                    result: [
                      {
                        item: 'kubejs:tomato_slices'
                      }
                    ]
                  });
                },
                children: []
              }
            ]
          },
          {
            id: 'mayonnaise',
            // egg yolks are sepperated from the egg. vinegar is added. mustard salt and pepper are added. mixed. slowly the oil is added and mixed in
            recipe: () => {
              event.recipes.create.mixing(Fluid.of('kubejs:mayonnaise', 1000), [
                '2x kubejs:egg_yolk',
                Fluid.of('kubejs:mustard', 1000),
                Fluid.of('charcoal_pit:vinegar_still', 1000),
                Fluid.of('pneumaticcraft:vegetable_oil', 1000)
              ]);
            },
            children: [
              {
                id: 'egg_yolk',
                recipe: () => {
                  event.custom({
                    type: 'vintageimprovements:centrifugation',
                    ingredients: [{ item: 'minecraft:egg' }],
                    results: [
                      { item: 'kubejs:egg_yolk' },
                      { item: 'kubejs:egg_whites' }
                    ],
                    processingTime: 600
                  });
                }
              },
              {
                id: 'mustard',
                recipe: () => {
                  event.recipes.create.mixing(
                    Fluid.of('kubejs:mustard', 1000),
                    [
                      '24x kubejs:mustard_powder',
                      Fluid.of('minecraft:water', 1000),
                      Fluid.of('charcoal_pit:vinegar_still', 1000),
                      Fluid.of('kubejs:wine', 1000),
                      '3x salt:salt',
                      '3x croptopia:pepper'
                    ]
                  );
                },
                children: [
                  {
                    id: 'pepper',
                    recipe: () => {
                      event.recipes.create.crushing(
                        'croptopia:pepper',
                        'croptopia:pepper_seed'
                      );
                    },
                    children: [
                      {
                        id: 'pepper_seeds',
                        recipe: () => {
                          event.custom({
                            type: 'biomancy:bio_brewing',
                            ingredients: [{ item: 'minecraft:potato' }],
                            reactant: {
                              item: 'biomancy:organic_compound'
                            },
                            result: {
                              item: 'croptopia:pepper_seed'
                            },
                            processingTime: 80,
                            nutrientsCost: 8
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
            id: 'cheese_slice',
            recipe: () => {
              event.remove({ output: 'rankine:cheese' });
              event.custom({
                type: 'farmersdelight:cutting',
                ingredients: [{ item: 'rankine:aged_cheese' }],
                tool: { tag: 'forge:tools/knives' },
                result: [{ item: 'rankine:cheese' }]
              });
            },
            children: [
              {
                id: 'aged_cheese',
                recipe: () => {
                  event.remove({ output: 'rankine:aged_cheese' });
                  event.custom({
                    type: 'biomancy:decomposing',
                    ingredient: {
                      item: 'rankine:unaged_cheese'
                    },
                    results: [
                      {
                        item: 'rankine:aged_cheese',
                        countRange: { type: 'constant', value: 1 }
                      }
                    ],
                    processingTime: 6000,
                    nutrientsCost: 32
                  });
                },
                children: [
                  {
                    id: 'unaged_cheese',
                    recipe: () => {
                      event.remove({ output: 'rankine:unaged_cheese' });
                      event.recipes.create.compacting(
                        'rankine:unaged_cheese',
                        '9x kubejs:brined_cheese_curds'
                      );
                    },
                    children: [
                      {
                        id: 'brined_cheese_curds',
                        recipe: () => {
                          event.recipes.create.mixing(
                            'kubejs:brined_cheese_curds',
                            [
                              Fluid.of('minecraft:water', 1000),
                              'kubejs:ton_of_salt',
                              'kubejs:pressed_cheese_curds'
                            ]
                          );
                        },
                        children: [
                          {
                            id: 'pressed_cheese_curds',
                            recipe: () => {
                              event.recipes.create.compacting(
                                'kubejs:pressed_cheese_curds',
                                '9x kubejs:cheese_curds'
                              );
                            },
                            children: [
                              {
                                id: 'cheese_curds',
                                recipe: () => {
                                  event.recipes.createEmptying(
                                    [
                                      'kubejs:cheese_curds',
                                      Fluid.of('kubejs:whey', 2750)
                                    ],
                                    'kubejs:curdled_milk_bucket'
                                  );
                                },
                                children: [
                                  {
                                    id: 'curdled_milk',
                                    recipe: () => {
                                      event.recipes.create.mixing(
                                        Fluid.of('kubejs:curdled_milk', 1000),
                                        [
                                          Fluid.of(
                                            'kubejs:pasteurized_milk',
                                            1000
                                          ),
                                          'kubejs:lactobacillus',
                                          'kubejs:rennet'
                                        ]
                                      );
                                    },
                                    children: [
                                      {
                                        id: 'pasteurized_milk',
                                        recipe: () => {
                                          event.recipes.create
                                            .mixing(
                                              Fluid.of(
                                                'kubejs:pasteurized_milk',
                                                500
                                              ),
                                              [
                                                Fluid.of(
                                                  'kubejs:skim_milk',
                                                  1000
                                                )
                                              ]
                                            )
                                            .superheated();
                                        },
                                        children: [
                                          {
                                            id: 'skim_milk',
                                            recipe: () => {
                                              event.custom({
                                                type: 'vintageimprovements:centrifugation',
                                                ingredients: [
                                                  {
                                                    item: 'minecraft:milk_bucket'
                                                  }
                                                ],
                                                results: [
                                                  { item: 'kubejs:cream' },
                                                  {
                                                    item: 'kubejs:skim_milk_bucket'
                                                  }
                                                ],
                                                processingTime: 6000
                                              });
                                            }
                                          }
                                        ]
                                      },
                                      {
                                        id: 'rennet',
                                        recipe: () => {
                                          event.custom({
                                            type: 'charcoal_pit:barrel',
                                            item_in: {
                                              item: 'kubejs:aged_stomach_slice'
                                            },
                                            fluid_in: {
                                              fluid:
                                                'immersiveengineering:ethanol',
                                              amount: 1000
                                            },
                                            fluid_out: {
                                              fluid: 'kubejs:rennet',
                                              amount: 1000
                                            },
                                            flags: 1,
                                            time: 6000
                                          });
                                        },
                                        children: [
                                          {
                                            id: 'aged_stomach_slice',
                                            recipe: () => {
                                              event.custom({
                                                type: 'biomancy:decomposing',
                                                ingredient: {
                                                  item: 'kubejs:stomach_slice'
                                                },
                                                results: [
                                                  {
                                                    item: 'kubejs:aged_stomach_slice',
                                                    countRange: {
                                                      type: 'constant',
                                                      value: 1
                                                    }
                                                  }
                                                ],
                                                processingTime: 6000,
                                                nutrientsCost: 32
                                              });
                                            },
                                            children: [
                                              {
                                                id: 'stomach_slice',
                                                recipe: () => {
                                                  event.custom({
                                                    type: 'farmersdelight:cutting',
                                                    ingredients: [
                                                      {
                                                        item: 'kubejs:stomach'
                                                      }
                                                    ],
                                                    tool: {
                                                      tag: 'forge:tools/knives'
                                                    },
                                                    result: [
                                                      {
                                                        item: 'kubejs:stomach_slice'
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
                  }
                ]
              }
            ]
          },
          {
            id: 'onion_slices',
            recipe: () => {
              event.custom({
                type: 'farmersdelight:cutting',
                ingredients: [
                  {
                    item: 'croptopia:onion'
                  }
                ],
                tool: {
                  tag: 'forge:tools/knives'
                },
                result: [
                  {
                    item: 'kubejs:onion_slices'
                  }
                ]
              });
            },
            children: []
          },
          {
            id: 'pickles',
            // olive seeds are bioengineered. olive washed, sliced,put in jars, salt is added, vinegar is added, is fermented, then washed again, put back in jar with vinegar and spices and herbs. jar is heated to be pasturized.
            // make olive seeds, slice olive, put in jar. deploy salt. deploy spices. pour vinegar. ferment in something.
            recipe: () => {
              event.custom({
                type: 'biomancy:bio_brewing',
                ingredients: [{ item: 'kubejs:olive_jar' }],
                reactant: {
                  item: 'kubejs:lactobacillus'
                },
                result: {
                  item: 'charcoal_pit:pickled_olives'
                },
                processingTime: 80,
                nutrientsCost: 8
              });
            },
            children: [
              {
                id: 'olive_jar',
                recipe: () => {
                  event.recipes
                    .createSequencedAssembly(
                      ['kubejs:olive_jar'],
                      'kubejs:empty_jar',
                      [
                        event.recipes.create.deploying('kubejs:empty_jar', [
                          'kubejs:empty_jar',
                          'charcoal_pit:olives'
                        ]),
                        event.recipes.create.deploying('kubejs:empty_jar', [
                          'kubejs:empty_jar',
                          'kubejs:ton_of_salt'
                        ]),
                        event.recipes.create.filling('kubejs:empty_jar', [
                          'kubejs:empty_jar',
                          Fluid.of('charcoal_pit:vinegar_still', 1000)
                        ])
                      ]
                    )
                    .transitionalItem('kubejs:empty_jar')
                    .loops(1);
                },
                children: [
                  {
                    id: 'olive_sapling',
                    recipe: () => {
                      event.custom({
                        type: 'biomancy:bio_brewing',
                        ingredients: [{ item: 'minecraft:potato' }],
                        reactant: {
                          item: 'biomancy:organic_compound'
                        },
                        result: {
                          item: 'charcoal_pit:olive_sapling'
                        },
                        processingTime: 80,
                        nutrientsCost: 8
                      });
                    }
                  }
                ]
              },
              {
                id: 'lactobacillus',
                recipe: () => {
                  event.custom({
                    type: 'biomancy:decomposing',
                    ingredient: {
                      item: 'charcoal_pit:olives'
                    },
                    results: [
                      {
                        item: 'kubejs:lactobacillus',
                        countRange: {
                          type: 'uniform',
                          min: 0,
                          max: 1
                        }
                      },
                      {
                        item: 'biomancy:organic_matter',
                        countRange: {
                          type: 'uniform',
                          min: 0,
                          max: 1
                        }
                      }
                    ],
                    processingTime: 600,
                    nutrientsCost: 4
                  });
                  event.custom({
                    type: 'vintageimprovements:centrifugation',
                    ingredients: [
                      {
                        item: 'kubejs:specimen_725'
                      }
                    ],
                    results: [
                      {
                        item: 'kubejs:lactobacillus',
                        count: 32
                      }
                    ],
                    processingTime: 1000
                  });
                },
                children: []
              },
              {
                id: 'specimen_725',
                recipe: () => {
                  // fermenting innoculated petri dish
                  event.custom({
                    type: 'biomancy:bio_brewing',
                    ingredients: [{ item: 'kubejs:petri_dish_725' }],
                    reactant: {
                      item: 'kubejs:lactobacillus'
                    },
                    result: {
                      item: 'kubejs:specimen_725'
                    },
                    processingTime: 80,
                    nutrientsCost: 8
                  });
                },
                children: [
                  {
                    id: 'petri_dish_725',
                    recipe: () => {
                      event.recipes.create.filling('kubejs:petri_dish_725', [
                        'kubejs:empty_petri_dish',
                        Fluid.of('kubejs:beef_tallow', 1000)
                      ]);
                    }
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
