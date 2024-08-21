onEvent('recipes', event => {
  event.custom({
    type: 'botania:runic_altar',
    output: {item: 'botania:rune_mana'},
    mana: 6250,
    ingredients: [
      {item: 'botania:manasteel_ingot'},
      {item: 'botania:manasteel_ingot'},
      {item: 'botania:manasteel_ingot'},
      {item: 'botania:manasteel_ingot'},
      {item: 'botania:manasteel_ingot'},
      {item: 'naturesaura:sky_ingot'},
    ],
  });

  event.custom({
    type: 'botania:petal_apothecary',
    output: {item: 'botania:pure_daisy'},
    ingredients: [
      {item: 'naturesaura:token_joy'},
      {item: 'naturesaura:token_fear'},
      {item: 'naturesaura:token_anger'},
      {item: 'naturesaura:token_sorrow'},
      {item: 'botania:white_petal'},
      {item: 'botania:white_petal'},
      {item: 'botania:white_petal'},
      {item: 'botania:white_petal'},
      {item: 'farmersdelight:squid_ink_pasta'},
      {item: 'farmersdelight:roast_chicken_block'},
      {item: 'farmersdelight:stuffed_pumpkin_block'},
      {item: 'farmersdelight:ratatouille'},
      {item: 'farmersdelight:grilled_salmon'},
    ],
  }).id('inconvenient:pure_daisy');

  event.custom({
    type: 'botania:petal_apothecary',
    output: {item: 'botania:fertilizer'},
    ingredients: [
      {item: 'minecraft:bone_meal'},
      {tag: 'forge:dyes'},
      {tag: 'forge:dyes'},
      {tag: 'forge:dyes'},
      {tag: 'forge:dyes'},
    ],
  }).id('inconveient:petal_apothecary_fertilizer');

  event.custom({
    type: 'bloodmagic:altar',
    input: {
      item: 'botania:diluted_pool',
    },
    output: {
      item: 'botania:mana_pool',
    },
    upgradeLevel: 3,
    altarSyphon: 20000,
    consumptionRate: 200,
    drainRate: 200,
  });

  event.shaped('botania:diluted_pool', ['a a', 'aaa'], {
    a: 'botania:livingrock_slab',
  });

  event.shaped('botania:mana_spreader', ['aaa', 'bc ', 'aaa'], {
    a: 'botania:livingwood',
    b: 'minecraft:gold_ingot',
    c: '#botania:petals',
  });

  colors.forEach(color => {
    event.custom({
      type: 'create:milling',
      ingredients: [{item: `botania:${color}_double_flower`}],
      results: [{item: `botania:${color}_petal`, count: 4}],
      processingTime: 50,
    });
    event.custom({
      type: 'create:milling',

      ingredients: [{item: `botania:${color}_mystical_flower`}],
      results: [{item: `botania:${color}_petal`, count: 2}],
      processingTime: 50,
    });
  });

  ['botania:pure_daisy/livingrock','productivebees:block_conversion/botania/stone_to_livingrock'].forEach(id => event.remove({ id: id }));
  

   event.custom({
    type: 'botania:pure_daisy',
    input: {type: 'block', block: 'rankine:rose_marble'},
    output: {name: 'botania:livingrock'},
   }).id('iconvenient:livingrock');
  
  event.custom({
    type: 'productivebees:block_conversion',
    bee: 'productivebees:pure',
    from: {
      Name: 'rankine:rose_marble',
    },
    to: {
      Name: 'botania:livingrock',
    },
    chance: 0.25,
    conditions: [
      {
        type: 'productivebees:bee_exists',
        bee: 'productivebees:pure',
      },
    ],
  });

  event.custom({
    type: 'create:mixing',
    results: [{item: 'botania:fertilizer'}],
    ingredients: [
      {item: 'create:refined_radiance'},
      {item: 'tconstruct:pig_iron_ingot'},
      {item: 'hem:copparite'},
      {count: 4, item: 'rankine:bone_char'},
    ],
    heatRequirement: 'superheated',
  }).id('inconvenient:fertilizer');
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:runic_altar'},
    pattern: ['aaa', 'aba'],
    key: {
      a: 'botania:livingrock',
      b: 'botania:manasteel_ingot',
    },
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_forest'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'botania:metamorphic_forest_cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_plains'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'botania:metamorphic_plains_cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_mountain'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'botania:metamorphic_mountain_cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_fungal'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'botania:metamorphic_fungal_cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_swamp'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'botania:metamorphic_swamp_cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_desert'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'botania:metamorphic_desert_cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_taiga'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'botania:metamorphic_taiga_cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_mesa'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'botania:metamorphic_mesa_cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_mossy'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'minecraft:mossy_cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:apothecary_default'},
    pattern: ['aba', ' c ', 'aaa'],
    key: {
      a: 'minecraft:cobblestone',
      b: '#botania:petals',
      c: 'create:refined_radiance_casing',
    },
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'botania:mana_spreader'},
    pattern: ['aaaaa', 'bccc ', 'bd   ', 'bccc ', 'aaaaa'],
    key: {
      a: 'botania:livingwood',
      b: 'rankine:rose_gold_ingot',
      c: 'create:refined_radiance',
      d: '#botania:petals',
    },
  });
  setMilestoneRecipes({
    id: 'gingerbread_man',
    recipe: () => {
      event.remove({output: 'create_confectionery:gingerbread_man'});
      event.recipes
        .createSequencedAssembly(
          ['create_confectionery:gingerbread_man'],
          'create_confectionery:gingerdough',
          [
            // press dough, cut shape out of flat dough, fire, add black parts, add white parts, add red parts, add green parts,
            event.recipes.createPressing(
              'create_confectionery:gingerdough',
              'create_confectionery:gingerdough'
            ),
            event.recipes.createDeploying('create_confectionery:gingerdough', [
              'create_confectionery:gingerdough',
              'kubejs:cookie_cutter',
            ]),
            event.recipes.createDeploying('create_confectionery:gingerdough', [
              'create_confectionery:gingerdough',
              'create_confectionery:black_chocolate_candy',
            ]),
            event.recipes.createDeploying('create_confectionery:gingerdough', [
              'create_confectionery:gingerdough',
              'create_confectionery:marshmallow',
            ]),
            event.recipes.createDeploying('create_confectionery:gingerdough', [
              'create_confectionery:gingerdough',
              'create_confectionery:black_chocolate_glazed_berries',
            ]),
          ]
        )
        .transitionalItem('create_confectionery:gingerdough')
        .loops(1);
    },
    children: [
      {
        id: 'cookie_cutter',
        recipe: () => {
          event.custom({
            type: 'vintageimprovements:curving',
            ingredients: [
              {
                item: 'kubejs:round_manasteel_sheet',
              },
            ],
            results: [
              {
                item: 'kubejs:cookie_cutter',
              },
            ],
          });
        },
        children: [
          {
            id: 'round_manasteel_sheet',
            recipe: () => {
              event.custom({
                type: 'vintageimprovements:curving',
                ingredients: [
                  {
                    item: 'kubejs:curved_manasteel_sheet',
                  },
                ],
                results: [
                  {
                    item: 'kubejs:round_manasteel_sheet',
                  },
                ],
              });
            },
            children: [
              {
                id: 'manasteel_sheet',
                recipe: () => {
                  event.recipes.createPressing(
                    'kubejs:manasteel_sheet',
                    'botania:manasteel_block'
                  );
                },
              },
            ],
          },
        ],
      },
      {
        id: 'ginger_dough',
        recipe: () => {
          event.remove({output: 'create_confectionery:gingerdough'});
          event.recipes.create.mixing('create_confectionery:gingerdough', [
            'kubejs:dry_ingredients',
            Fluid.of('kubejs:wet_ingredients', 1000),
          ]);
        },
        children: [
          {
            id: 'dry_ingredients',
            recipe: () => {
              event.recipes.create.mixing('kubejs:dry_ingredients', [
                'kubejs:multigrain_flour',
                'kubejs:baking_soda',
                'kubejs:ginger_powder',
                'kubejs:cinnamon_powder',
                'kubejs:nutmeg_powder',
                'salt:salt',
              ]);
            },
            children: [
              {
                id: 'multigrain_flour',
                recipe: () => {
                  event.recipes.create.mixing('kubejs:multigrain_flour', [
                    'rankine:wheat_grain',
                    'rankine:sorghum_grain',
                    'rankine:rye_grain',
                    'rankine:rice_grain',
                    'rankine:oat_grain',
                    'rankine:millet_grain',
                    'rankine:barley_grain',
                    'kubejs:soy_flour',
                  ]);
                },
                children: [
                  {
                    id: 'barley_grain',
                    recipe: () => {
                      event.remove({output: 'rankine:barley_grain'});
                      event.recipes.create.crushing(
                        ['rankine:barley_grain'],
                        'kubejs:barley_meal'
                      );
                    },
                    children: [
                      {
                        id: 'barley_meal',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:barley_meal'],
                            'kubejs:barley_flakes'
                          );
                        },
                        children: [
                          {
                            id: 'barley_flakes',
                            recipe: () => {
                              event.recipes.create.milling(
                                ['kubejs:barley_flakes'],
                                'rankine:barley'
                              );
                            },
                            children: [
                              {
                                id: 'barley',
                                recipe: () => {
                                  event.custom({
                                    type: 'botania:mana_infusion',
                                    input: {
                                      item: 'minecraft:wheat_seeds',
                                    },
                                    output: {
                                      item: 'rankine:barley_seeds',
                                    },
                                    mana: 5000,
                                    catalyst: {
                                      type: 'block',
                                      block: 'botania:alchemy_catalyst',
                                    },
                                  });
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'millet_grain',
                    recipe: () => {
                      event.remove({output: 'rankine:millet_grain'});
                      event.recipes.create.crushing(
                        ['rankine:millet_grain'],
                        'kubejs:millet_meal'
                      );
                    },
                    children: [
                      {
                        id: 'millet_meal',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:millet_meal'],
                            'kubejs:millet_flakes'
                          );
                        },
                        children: [
                          {
                            id: 'millet_flakes',
                            recipe: () => {
                              event.recipes.create.milling(
                                ['kubejs:millet_flakes'],
                                'rankine:millet'
                              );
                            },
                            children: [
                              {
                                id: 'millet',
                                recipe: () => {
                                  event.custom({
                                    type: 'botania:mana_infusion',
                                    input: {
                                      item: 'rankine:barley_seeds',
                                    },
                                    output: {
                                      item: 'rankine:millet_seeds',
                                    },
                                    mana: 5000,
                                    catalyst: {
                                      type: 'block',
                                      block: 'botania:alchemy_catalyst',
                                    },
                                  });
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'oat_grain',
                    recipe: () => {
                      event.remove({output: 'rankine:oat_grain'});
                      event.recipes.create.crushing(
                        ['rankine:oat_grain'],
                        'kubejs:oat_meal'
                      );
                    },
                    children: [
                      {
                        id: 'oat_meal',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:oat_meal'],
                            'kubejs:oat_flakes'
                          );
                        },
                        children: [
                          {
                            id: 'oat_flakes',
                            recipe: () => {
                              event.recipes.create.milling(
                                ['kubejs:oat_flakes'],
                                'rankine:oats'
                              );
                            },
                            children: [
                              {
                                id: 'oats',
                                recipe: () => {
                                  event.custom({
                                    type: 'botania:mana_infusion',
                                    input: {
                                      item: 'rankine:millet_seeds',
                                    },
                                    output: {
                                      item: 'rankine:oat_seeds',
                                    },
                                    mana: 5000,
                                    catalyst: {
                                      type: 'block',
                                      block: 'botania:alchemy_catalyst',
                                    },
                                  });
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'rice_grain',
                    recipe: () => {
                      event.remove({output: 'rankine:rice_grain'});
                      event.recipes.create.crushing(
                        ['rankine:rice_grain'],
                        'kubejs:rice_meal'
                      );
                    },
                    children: [
                      {
                        id: 'rice_meal',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:rice_meal'],
                            'kubejs:rice_flakes'
                          );
                        },
                        children: [
                          {
                            id: 'rice_flakes',
                            recipe: () => {
                              event.recipes.create.milling(
                                ['kubejs:rice_flakes'],
                                'rankine:rice'
                              );
                            },
                            children: [
                              {
                                id: 'rice',
                                recipe: () => {
                                  event.custom({
                                    type: 'botania:mana_infusion',
                                    input: {
                                      item: 'rankine:oat_seeds',
                                    },
                                    output: {
                                      item: 'rankine:rice_seeds',
                                    },
                                    mana: 5000,
                                    catalyst: {
                                      type: 'block',
                                      block: 'botania:alchemy_catalyst',
                                    },
                                  });
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'rye_grain',
                    recipe: () => {
                      event.remove({output: 'rankine:rye_grain'});
                      event.recipes.create.crushing(
                        ['rankine:rye_grain'],
                        'kubejs:rye_meal'
                      );
                    },
                    children: [
                      {
                        id: 'rye_meal',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:rye_meal'],
                            'kubejs:rye_flakes'
                          );
                        },
                        children: [
                          {
                            id: 'rye_flakes',
                            recipe: () => {
                              event.recipes.create.milling(
                                ['kubejs:rye_flakes'],
                                'rankine:rye'
                              );
                            },
                            children: [
                              {
                                id: 'rye',
                                recipe: () => {
                                  event.custom({
                                    type: 'botania:mana_infusion',
                                    input: {
                                      item: 'rankine:rice_seeds',
                                    },
                                    output: {
                                      item: 'rankine:rye_seeds',
                                    },
                                    mana: 5000,
                                    catalyst: {
                                      type: 'block',
                                      block: 'botania:alchemy_catalyst',
                                    },
                                  });
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'sorghum_grain',
                    recipe: () => {
                      event.remove({output: 'rankine:sorghum_grain'});
                      event.recipes.create.crushing(
                        ['rankine:sorghum_grain'],
                        'kubejs:sorghum_meal'
                      );
                    },
                    children: [
                      {
                        id: 'sorghum_meal',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:sorghum_meal'],
                            'kubejs:sorghum_flakes'
                          );
                        },
                        children: [
                          {
                            id: 'sorghum_flakes',
                            recipe: () => {
                              event.recipes.create.milling(
                                ['kubejs:sorghum_flakes'],
                                'rankine:sorghum'
                              );
                            },
                            children: [
                              {
                                id: 'sorghum',
                                recipe: () => {
                                  event.custom({
                                    type: 'botania:mana_infusion',
                                    input: {
                                      item: 'rankine:rye_seeds',
                                    },
                                    output: {
                                      item: 'rankine:sorghum_seeds',
                                    },
                                    mana: 5000,
                                    catalyst: {
                                      type: 'block',
                                      block: 'botania:alchemy_catalyst',
                                    },
                                  });
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'wheat_grain',
                    recipe: () => {
                      event.remove({output: 'rankine:wheat_grain'});
                      event.recipes.create.crushing(
                        ['rankine:wheat_grain'],
                        'kubejs:wheat_meal'
                      );
                    },
                    children: [
                      {
                        id: 'wheat_meal',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:wheat_meal'],
                            'kubejs:wheat_flakes'
                          );
                        },
                        children: [
                          {
                            id: 'wheat_flakes',
                            recipe: () => {
                              event.recipes.create.milling(
                                ['kubejs:wheat_flakes'],
                                'kubejs:wheat'
                              );
                            },
                            children: [
                              {
                                id: 'wheat',
                                recipe: () => {
                                  event.custom({
                                    type: 'botania:mana_infusion',
                                    input: {
                                      item: 'rankine:soybeans',
                                    },
                                    output: {
                                      item: 'minecraft:wheat_seeds',
                                    },
                                    mana: 5000,
                                    catalyst: {
                                      type: 'block',
                                      block: 'botania:alchemy_catalyst',
                                    },
                                  });
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'soy_flour',
                    recipe: () => {
                      event.recipes.create.crushing(
                        ['kubejs:soy_flour'],
                        'kubejs:soy_meal'
                      );
                    },
                    children: [
                      {
                        id: 'soy_meal',
                        recipe: () => {
                          event.recipes.create.crushing(
                            ['kubejs:soy_meal'],
                            'kubejs:soy_flakes'
                          );
                        },
                        children: [
                          {
                            id: 'soy_flakes',
                            recipe: () => {
                              event.recipes.create.milling(
                                ['kubejs:soy_flakes'],
                                'rankine:soybeans'
                              );
                            },
                            children: [
                              {
                                id: 'soybeans',
                                recipe: () => {
                                  event.custom({
                                    type: 'botania:mana_infusion',
                                    input: {
                                      item: 'rankine:sorghum_seeds',
                                    },
                                    output: {
                                      item: 'rankine:soybeans',
                                    },
                                    mana: 5000,
                                    catalyst: {
                                      type: 'block',
                                      block: 'botania:alchemy_catalyst',
                                    },
                                  });
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
                id: 'ginger_powder',
                recipe: () => {
                  event.recipes.create.crushing(
                    ['kubejs:ginger_powder'],
                    'croptopia:ginger'
                  );
                },
                children: [
                  {
                    id: 'ginger_seed',
                    recipe: () => {
                      event.custom({
                        type: 'botania:mana_infusion',
                        input: {
                          item: 'occultism:datura_seeds',
                        },
                        output: {
                          item: 'croptopia:ginger_seed',
                        },
                        mana: 5000,
                        catalyst: {
                          type: 'block',
                          block: 'botania:alchemy_catalyst',
                        },
                      });
                    },
                  },
                ],
              },
              {
                id: 'cinnamon_powder',
                recipe: () => {
                  event.recipes.create.crushing(
                    ['kubejs:cinnamon_powder'],
                    'rankine:cinnamon'
                  );
                },
                children: [
                  {
                    id: 'cinnamon_sapling',
                    recipe: () => {
                      event.remove({output: 'rankine:cinnamon_sapling'});
                      event.custom({
                        type: 'botania:mana_infusion',
                        input: {
                          item: 'blue_skies:maple_sapling',
                        },
                        output: {
                          item: 'rankine:cinnamon_sapling',
                        },
                        mana: 5000,
                        catalyst: {
                          type: 'block',
                          block: 'botania:alchemy_catalyst',
                        },
                      });
                    },
                  },
                ],
              },
              {
                id: 'nutmeg_powder',
                recipe: () => {
                  event.recipes.create.crushing(
                    ['kubejs:nutmeg_powder'],
                    'croptopia:nutmeg'
                  );
                },
                children: [
                  {
                    id: 'nutmeg_sapling',
                    recipe: () => {
                      event.remove({output: 'croptopia:nutmeg_sapling'});
                      event.custom({
                        type: 'botania:mana_infusion',
                        input: {
                          item: 'blue_skies:cherry_sapling',
                        },
                        output: {
                          item: 'croptopia:nutmeg_sapling',
                        },
                        mana: 5000,
                        catalyst: {
                          type: 'block',
                          block: 'botania:alchemy_catalyst',
                        },
                      });
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'wet_ingredients',
            recipe: () => {
              event.recipes.create.mixing(
                Fluid.of('kubejs:wet_ingredients', 1000),
                [
                  'kubejs:lard_whip',
                  'kubejs:brown_sugar',
                  Fluid.of('create:honey', 1000),
                  'kubejs:egg_whip',
                ]
              );
            },
            children: [
              // slaughter the pig. get fat from the pig. boil the fat mixed with water to get lard liquid. evaporate lard liquid to get lard item. mix to make whipped lard
              {
                id: 'lard_whip',
                recipe: () => {
                  event.recipes.create.mixing('kubejs:lard_whip', [
                    '2x kubejs:lard',
                  ]);
                },
                children: [
                  {
                    id: 'lard',
                    recipe: () => {
                      event.remove({output: 'kubejs:lard'});
                      event.custom({
                        type: 'rankine:evaporation',
                        processTime: 12000,
                        input: {
                          fluid: 'kubejs:lard',
                        },
                        outputs: [{item: 'kubejs:lard', weight: 100}],
                      });
                    },
                    children: [
                      {
                        id: 'lard_liquid',
                        recipe: () => {
                          event.recipes.create
                            .mixing(Fluid.of('kubejs:lard', 100), [
                              Fluid.of('minecraft:water', 1000),
                              '3x kubejs:pork_fat',
                            ])
                            .heated();
                        },
                        children: [
                          {
                            id: 'butcher_knife',
                            recipe: () => {
                              event.remove({
                                output: 'kubejs:butcher_knife',
                              });
                              event.recipes.createMechanicalCrafting(
                                'kubejs:butcher_knife',
                                [' ac', ' cc', 'b  '],
                                {
                                  a: 'botania:manasteel_ingot',
                                  b: '#forge:rods/wooden',
                                  c: 'botania:manasteel_nugget',
                                }
                              );
                            },
                            children: [
                              {
                                id: 'manasteel',
                                recipe: () => {
                                  event.remove({
                                    output: [
                                      'botania:manasteel_ingot',
                                      'botania:manasteel_block',
                                    ],
                                  });
                                  event.recipes.botania.mana_infusion(
                                    'botania:manasteel_ingot',
                                    'tconstruct:pig_iron_ingot',
                                    2000
                                  );

                                  event.recipes.botania.mana_infusion(
                                    'botania:manasteel_block',
                                    'tconstruct:pig_iron_block',
                                    18000
                                  );
                                },
                              },
                            ],
                          },
                          {
                            id: 'skinning_knife',
                            recipe: () => {
                              event.remove({
                                output: 'kubejs:skinning_knife',
                              });
                              event.recipes.createMechanicalCrafting(
                                'kubejs:skinning_knife',
                                [' ac', 'b  '],
                                {
                                  a: 'botania:manasteel_ingot',
                                  b: '#forge:rods/wooden',
                                  c: 'botania:manasteel_nugget',
                                }
                              );
                            },
                          },
                          {
                            id: 'bone_saw',
                            recipe: () => {
                              event.remove({output: 'kubejs:bone_saw'});
                              event.recipes.createMechanicalCrafting(
                                'kubejs:bone_saw',
                                ['acb', 'ccb'],
                                {
                                  a: 'botania:manasteel_ingot',
                                  b: '#forge:rods/wooden',
                                  c: 'botania:manasteel_nugget',
                                }
                              );
                            },
                          },
                          {
                            id: 'gut_knife',
                            recipe: () => {
                              event.remove({output: 'kubejs:gut_knife'});
                              event.recipes.createMechanicalCrafting(
                                'kubejs:gut_knife',
                                ['a  ', ' c ', ' b '],
                                {
                                  a: 'botania:manasteel_ingot',
                                  b: '#forge:rods/wooden',
                                  c: 'botania:manasteel_nugget',
                                }
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
                id: 'brown_sugar',
                recipe: () => {
                  event.recipes.create.filling('kubejs:brown_sugar', [
                    'minecraft:sugar',
                    Fluid.of('kubejs:molasses', 1000),
                  ]);
                },
                children: [
                  {
                    id: 'molasses',
                    recipe: () => {
                      event.recipes.create
                        .mixing(Fluid.of('kubejs:molasses', 100), [
                          Fluid.of('kubejs:sugar_cane_juice', 1000),
                        ])
                        .heated();
                    },
                    children: [
                      {
                        id: 'sugar_cane_juice',
                        recipe: () => {
                          event.recipes.createCompacting(
                            Fluid.of('kubejs:sugar_cane_juice', 250),
                            'minecraft:sugar_cane'
                          );
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: 'beehive',
                recipe: () => {
                  event.remove({output: 'minecraft:beehive'});
                  event.recipes.createMechanicalCrafting(
                    'minecraft:beehive',
                    ['a', 'b', 'b', 'b'],
                    {
                      a: 'kubejs:beehive_cover',
                      b: 'kubejs:brood_box',
                    }
                  );
                },
                children: [
                  {
                    id: 'beehive_cover',
                    recipe: () => {
                      event.recipes.createMechanicalCrafting(
                        'kubejs:beehive_cover',
                        ['aba', 'bcb', 'aba'],
                        {
                          a: 'kubejs:shadow_steel_casing_knob',
                          b: 'kubejs:shadow_steel_casing_strip',
                          c: 'kubejs:curved_manasteel_sheet',
                        }
                      );
                    },
                    children: [
                      {
                        id: 'shadow_steel_casing_knob',
                        recipe: () => {
                          event.recipes
                            .createCutting(
                              '2x kubejs:shadow_steel_casing_knob',
                              'kubejs:shadow_steel_casing_strip'
                            )
                            .processingTime(50); // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
                        },
                        children: [
                          {
                            id: 'shadow_steel_casing_panel',
                            recipe: () => {
                              event.recipes
                                .createCutting(
                                  '2x kubejs:shadow_steel_casing_strip',
                                  'kubejs:shadow_steel_casing_panel'
                                )
                                .processingTime(50); // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
                            },
                            children: [
                              {
                                id: 'shadow_steel_casing_panel',
                                recipe: () => {
                                  event.recipes
                                    .createCutting(
                                      '2x kubejs:shadow_steel_casing_panel',
                                      'create:shadow_steel_casing'
                                    )
                                    .processingTime(50); // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
                                },
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'brood_box',
                    recipe: () => {
                      event.recipes
                        .createSequencedAssembly(
                          ['kubejs:brood_box'],
                          'kubejs:empty_brood_box',
                          [
                            event.recipes.createDeploying(
                              'kubejs:empty_brood_box',
                              ['kubejs:empty_brood_box', 'kubejs:empty_frame']
                            ),
                            event.recipes.createDeploying(
                              'kubejs:empty_brood_box',
                              ['kubejs:empty_brood_box', 'kubejs:empty_frame']
                            ),
                            event.recipes.createDeploying(
                              'kubejs:empty_brood_box',
                              ['kubejs:empty_brood_box', 'kubejs:empty_frame']
                            ),
                            event.recipes.createDeploying(
                              'kubejs:empty_brood_box',
                              ['kubejs:empty_brood_box', 'kubejs:empty_frame']
                            ),
                            event.recipes.createDeploying(
                              'kubejs:empty_brood_box',
                              ['kubejs:empty_brood_box', 'kubejs:empty_frame']
                            ),
                          ]
                        )
                        .transitionalItem('kubejs:empty_brood_box')
                        .loops(1);
                    },
                    children: [
                      {
                        id: 'empty_brood_box',
                        recipe: () => {
                          event.recipes.createMechanicalCrafting(
                            'kubejs:empty_brood_box',
                            [' a ', 'a a', ' a '],
                            {
                              a: 'kubejs:shadow_steel_casing_panel',
                            }
                          );
                        },
                        children: [],
                      },
                      {
                        id: 'empty_frame',
                        recipe: () => {
                          event.recipes.createMechanicalCrafting(
                            'kubejs:empty_frame',
                            [' a ', 'a a', ' a '],
                            {
                              a: 'kubejs:shadow_steel_casing_strip',
                            }
                          );
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                id: 'bee',
                recipe: () => {
                  event.remove({output: 'naturesaura:animal_spawner'});
                  event.custom({
                    type: 'naturesaura:animal_spawner',
                    ingredients: [
                      {item: 'naturesaura:birth_spirit'},
                      {item: 'naturesaura:token_joy'},
                      {item: 'kubejs:elements_rune'},
                      {item: 'bloodmagic:demonslate'},
                    ],
                    entity: 'minecraft:bee',
                    aura: 50000,
                    time: 1000,
                  });
                  // sheep - elements rune, token of sonder, demonic slate, nutrients
                  // bee - elements rune, token of ??, demonic slate, black lotus,
                  // cow - seasons rune, token of monachopsis, demonic slate, default crystal, strange dna
                  // apple cow - sins rune, token of schadenfreude, demonic slate, steadfast crystal, cow dna, hungry dna
                  // golden apple cow - sins rune, token of kenopsia, ethereal slate, corrosive crystal, high grade cow dna, primordial dna
                  // miracle cow - sins rune, token of kuebiko, ethereal slate, vengeful crystal, extra hide grade cow dna, malignant dna
                },
                children: [
                  {
                    id: 'birthing_altar',
                    recipe: () => {
                      event.recipes.botania.runic_altar(
                        'naturesaura:animal_spawner',
                        [
                          'kubejs:shadow_steel_casing_frame',
                          'kubejs:elements_rune',
                          'naturesaura:birth_spirit',
                          'naturesaura:token_joy',
                          'naturesaura:token_fear',
                          'naturesaura:token_anger',
                          'naturesaura:token_sorrow',
                        ],
                        10000
                      );
                    },
                    children: [
                      {
                        id: 'shadow_steel_casing_frame',
                        recipe: () => {
                          event.recipes.createMechanicalCrafting(
                            'kubejs:shadow_steel_casing_frame',
                            ['abbba', 'b   b', 'b   b', 'b   b', 'abbba'],
                            {
                              a: 'kubejs:shadow_steel_casing_knob',
                              b: 'kubejs:shadow_steel_casing_strip',
                            }
                          );
                        },
                      },
                    ],
                  },
                  {
                    id: 'demon_slate',
                    recipe: () => {
                      event.remove({output: 'bloodmagic:demonslate'});
                      event.custom({
                        type: 'bloodmagic:altar',
                        input: {
                          item: 'create:shadow_steel',
                        },
                        output: {
                          item: 'bloodmagic:demonslate',
                        },
                        upgradeLevel: 3,
                        altarSyphon: 12500,
                        consumptionRate: 100,
                        drainRate: 100,
                      });
                    },
                  },
                  {
                    id: 'elements_rune',
                    recipe: () => {
                      event.recipes.botania.runic_altar(
                        `2x kubejs:elements_rune`,
                        [
                          'botania:rune_earth',
                          'botania:rune_water',
                          'botania:rune_fire',
                          'botania:rune_air',
                          'create:shadow_steel',
                        ],
                        9000
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
  });
});
