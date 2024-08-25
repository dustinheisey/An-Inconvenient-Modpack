onEvent('recipes', event => {
  event
    .custom({
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
    })
    .id('inconvenient:runic_altar_rune_mana');

  event
    .custom({
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
    })
    .id('inconvenient:petal_apothecary_pure_daisy');

  event
    .custom({
      type: 'botania:petal_apothecary',
      output: {item: 'botania:fertilizer'},
      ingredients: [
        {item: 'minecraft:bone_meal'},
        {tag: 'forge:dyes'},
        {tag: 'forge:dyes'},
        {tag: 'forge:dyes'},
        {tag: 'forge:dyes'},
      ],
    })
    .id('inconveient:petal_apothecary_fertilizer');

  event
    .custom({
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
    })
    .id('inconvenient:altar_mana_pool');

  event
    .shaped('botania:diluted_pool', ['a a', 'aaa'], {
      a: 'botania:livingrock_slab',
    })
    .id('inconvenient:shaped_diluted_pool');

  event
    .shaped('botania:mana_spreader', ['aaa', 'bc ', 'aaa'], {
      a: 'botania:livingwood',
      b: 'minecraft:gold_ingot',
      c: '#botania:petals',
    })
    .id('inconvenient:shaped_mana_spreader');

  colors.forEach(color => {
    event
      .custom({
        type: 'create:milling',
        ingredients: [{item: `botania:${color}_double_flower`}],
        results: [{item: `botania:${color}_petal`, count: 4}],
        processingTime: 50,
      })
      .id(`inconvenient:milling_${color}_petal`);
    event
      .custom({
        type: 'create:milling',

        ingredients: [{item: `botania:${color}_mystical_flower`}],
        results: [{item: `botania:${color}_petal`, count: 2}],
        processingTime: 50,
      })
      .id(`inconvenient:milling_${color}_mystical_flower`);
  });

  [
    'botania:pure_daisy/livingrock',
    'productivebees:block_conversion/botania/stone_to_livingrock',
  ].forEach(id => event.remove({id: id}));

  event
    .custom({
      type: 'botania:pure_daisy',
      input: {type: 'block', block: 'rankine:rose_marble'},
      output: {name: 'botania:livingrock'},
    })
    .id('inconvenient:pure_daisy_livingrock');

  event
    .custom({
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
    })
    .id('inconvenient:block_conversion_livingrock');

  event
    .custom({
      type: 'create:mixing',
      results: [{item: 'botania:fertilizer'}],
      ingredients: [
        {item: 'create:refined_radiance'},
        {item: 'tconstruct:pig_iron_ingot'},
        {item: 'hem:copparite'},
        {count: 4, item: 'rankine:bone_char'},
      ],
      heatRequirement: 'superheated',
    })
    .id('inconvenient:mixing_fertilizer');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:runic_altar'},
      pattern: ['aaa', 'aba'],
      key: {
        a: 'botania:livingrock',
        b: 'botania:manasteel_ingot',
      },
    })
    .id('inconvenient:mechanical_runic_altar');

  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_forest'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'botania:metamorphic_forest_cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_forest');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_plains'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'botania:metamorphic_plains_cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_plains');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_mountain'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'botania:metamorphic_mountain_cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_mountain');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_fungal'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'botania:metamorphic_fungal_cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_fungal');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_swamp'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'botania:metamorphic_swamp_cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_swamp');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_desert'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'botania:metamorphic_desert_cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_desert');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_taiga'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'botania:metamorphic_taiga_cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_taiga');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_mesa'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'botania:metamorphic_mesa_cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_mesa');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_mossy'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'minecraft:mossy_cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_mossy');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:apothecary_default'},
      pattern: ['aba', ' c ', 'aaa'],
      key: {
        a: 'minecraft:cobblestone',
        b: '#botania:petals',
        c: 'create:refined_radiance_casing',
      },
    })
    .id('inconvenient:mechanical_apothecary_default');

  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'botania:mana_spreader'},
      pattern: ['aaaaa', 'bccc ', 'bd   ', 'bccc ', 'aaaaa'],
      key: {
        a: 'botania:livingwood',
        b: 'rankine:rose_gold_ingot',
        c: 'create:refined_radiance',
        d: '#botania:petals',
      },
    })
    .id('inconvenient:mechanical_mana_spreader');
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
        .loops(1)
        .id('inconvenient:sequenced_assembly_gingerbread_man');
    },
    children: [
      {
        id: 'cookie_cutter',
        recipe: () => {
          event
            .custom({
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
            })
            .id('inconvenient:curving_cookie_cutter');
        },
        children: [
          {
            id: 'round_manasteel_sheet',
            recipe: () => {
              event
                .custom({
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
                })
                .id('inconvenient:curving_round_manasteel_sheet');
            },
            children: [
              {
                id: 'manasteel_sheet',
                recipe: () => {
                  event.recipes
                    .createPressing(
                      'kubejs:manasteel_sheet',
                      'botania:manasteel_block'
                    )
                    .id('inconvenient:pressing_manasteel_sheet');
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
          event.recipes.create
            .mixing('create_confectionery:gingerdough', [
              'kubejs:dry_ingredients',
              Fluid.of('kubejs:wet_ingredients', 1000),
            ])
            .id('inconvenient:mixing_gingerdough');
        },
        children: [
          {
            id: 'dry_ingredients',
            recipe: () => {
              event.recipes.create
                .mixing('kubejs:dry_ingredients', [
                  'kubejs:multigrain_flour',
                  'kubejs:baking_soda',
                  'kubejs:ginger_powder',
                  'kubejs:cinnamon_powder',
                  'kubejs:nutmeg_powder',
                  'salt:salt',
                ])
                .id('inconvenient:mixing_dry_ingredients');
            },
            children: [
              {
                id: 'multigrain_flour',
                recipe: () => {
                  event.recipes.create
                    .mixing('kubejs:multigrain_flour', [
                      'rankine:wheat_grain',
                      'rankine:sorghum_grain',
                      'rankine:rye_grain',
                      'rankine:rice_grain',
                      'rankine:oat_grain',
                      'rankine:millet_grain',
                      'rankine:barley_grain',
                      'kubejs:soy_flour',
                    ])
                    .id('inconvenient:mixing_multigrain_flour');
                },
                children: [
                  {
                    id: 'barley_grain',
                    recipe: () => {
                      event.remove({output: 'rankine:barley_grain'});
                      event.recipes.create
                        .crushing(
                          ['rankine:barley_grain'],
                          'kubejs:barley_meal'
                        )
                        .id('inconvenient:crushing_wheel_barley_grain');
                    },
                    children: [
                      {
                        id: 'barley_meal',
                        recipe: () => {
                          event.recipes.create
                            .crushing(
                              ['kubejs:barley_meal'],
                              'kubejs:barley_flakes'
                            )
                            .id('inconvenient:crushing_wheel_barley_meal');
                        },
                        children: [
                          {
                            id: 'barley_flakes',
                            recipe: () => {
                              event.recipes.create
                                .milling(
                                  ['kubejs:barley_flakes'],
                                  'rankine:barley'
                                )
                                .id('inconvenient:milling_barley_flakes');
                            },
                            children: [
                              {
                                id: 'barley',
                                recipe: () => {
                                  event
                                    .custom({
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
                                    })
                                    .id('inconvenient:mana_infusion_barley');
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
                      event.recipes.create
                        .crushing(
                          ['rankine:millet_grain'],
                          'kubejs:millet_meal'
                        )
                        .id('inconvenient:crushing_wheel_millet_grain');
                    },
                    children: [
                      {
                        id: 'millet_meal',
                        recipe: () => {
                          event.recipes.create
                            .crushing(
                              ['kubejs:millet_meal'],
                              'kubejs:millet_flakes'
                            )
                            .id('inconvenient:crushing_wheel_millet_meal');
                        },
                        children: [
                          {
                            id: 'millet_flakes',
                            recipe: () => {
                              event.recipes.create
                                .milling(
                                  ['kubejs:millet_flakes'],
                                  'rankine:millet'
                                )
                                .id('inconvenient:milling_millet_flakes');
                            },
                            children: [
                              {
                                id: 'millet',
                                recipe: () => {
                                  event
                                    .custom({
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
                                    })
                                    .id('inconvenient:mana_infusion_millet');
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
                      event.recipes.create
                        .crushing(['rankine:oat_grain'], 'kubejs:oat_meal')
                        .id('inconvenient:crushing_wheel_oat_grain');
                    },
                    children: [
                      {
                        id: 'oat_meal',
                        recipe: () => {
                          event.recipes.create
                            .crushing(['kubejs:oat_meal'], 'kubejs:oat_flakes')
                            .id('inconvenient:crushing_wheel_oat_meal');
                        },
                        children: [
                          {
                            id: 'oat_flakes',
                            recipe: () => {
                              event.recipes.create
                                .milling(['kubejs:oat_flakes'], 'rankine:oats')
                                .id('inconvenient:milling_oat_flakes');
                            },
                            children: [
                              {
                                id: 'oats',
                                recipe: () => {
                                  event
                                    .custom({
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
                                    })
                                    .id('inconvenient:mana_infusion_oats');
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
                      event.recipes.create
                        .crushing(['rankine:rice_grain'], 'kubejs:rice_meal')
                        .id('inconvenient:crushing_wheel_rice_grain');
                    },
                    children: [
                      {
                        id: 'rice_meal',
                        recipe: () => {
                          event.recipes.create
                            .crushing(
                              ['kubejs:rice_meal'],
                              'kubejs:rice_flakes'
                            )
                            .id('inconvenient:crushing_wheel_rice_meal');
                        },
                        children: [
                          {
                            id: 'rice_flakes',
                            recipe: () => {
                              event.recipes.create
                                .milling(['kubejs:rice_flakes'], 'rankine:rice')
                                .id('inconvenient:milling_rice_flakes');
                            },
                            children: [
                              {
                                id: 'rice',
                                recipe: () => {
                                  event
                                    .custom({
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
                                    })
                                    .id('inconvenient:mana_infusion_rice');
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
                      event.recipes.create
                        .crushing(['rankine:rye_grain'], 'kubejs:rye_meal')
                        .id('inconvenient:crushing_wheel_rye_grain');
                    },
                    children: [
                      {
                        id: 'rye_meal',
                        recipe: () => {
                          event.recipes.create
                            .crushing(['kubejs:rye_meal'], 'kubejs:rye_flakes')
                            .id('inconvenient:crushing_wheel_rye_meal');
                        },
                        children: [
                          {
                            id: 'rye_flakes',
                            recipe: () => {
                              event.recipes.create
                                .milling(['kubejs:rye_flakes'], 'rankine:rye')
                                .id('inconvenient:milling_rye_flakes');
                            },
                            children: [
                              {
                                id: 'rye',
                                recipe: () => {
                                  event
                                    .custom({
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
                                    })
                                    .id('inconvenient:mana_infusion_rye');
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
                      event.recipes.create
                        .crushing(
                          ['rankine:sorghum_grain'],
                          'kubejs:sorghum_meal'
                        )
                        .id('inconvenient:crushing_wheel_sorghum_grain');
                    },
                    children: [
                      {
                        id: 'sorghum_meal',
                        recipe: () => {
                          event.recipes.create
                            .crushing(
                              ['kubejs:sorghum_meal'],
                              'kubejs:sorghum_flakes'
                            )
                            .id('inconvenient:crushing_wheel_sorghum_meal');
                        },
                        children: [
                          {
                            id: 'sorghum_flakes',
                            recipe: () => {
                              event.recipes.create
                                .milling(
                                  ['kubejs:sorghum_flakes'],
                                  'rankine:sorghum'
                                )
                                .id('inconvenient:milling_sorghum_flakes');
                            },
                            children: [
                              {
                                id: 'sorghum',
                                recipe: () => {
                                  event
                                    .custom({
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
                                    })
                                    .id('inconvenient:mana_infusion_sorghum');
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
                      event.recipes.create
                        .crushing(['rankine:wheat_grain'], 'kubejs:wheat_meal')
                        .id('inconvenient:crushing_wheel_wheat_grain');
                    },
                    children: [
                      {
                        id: 'wheat_meal',
                        recipe: () => {
                          event.recipes.create
                            .crushing(
                              ['kubejs:wheat_meal'],
                              'kubejs:wheat_flakes'
                            )
                            .id('inconvenient:crushing_wheel_wheat_meal');
                        },
                        children: [
                          {
                            id: 'wheat_flakes',
                            recipe: () => {
                              event.recipes.create
                                .milling(
                                  ['kubejs:wheat_flakes'],
                                  'kubejs:wheat'
                                )
                                .id('inconvenient:milling_wheat_flakes');
                            },
                            children: [
                              {
                                id: 'wheat',
                                recipe: () => {
                                  event
                                    .custom({
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
                                    })
                                    .id('inconvenient:mana_infusion_wheat');
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
                      event.recipes.create
                        .crushing(['kubejs:soy_flour'], 'kubejs:soy_meal')
                        .id('inconvenient:crushing_wheel_soy_flour');
                    },
                    children: [
                      {
                        id: 'soy_meal',
                        recipe: () => {
                          event.recipes.create
                            .crushing(['kubejs:soy_meal'], 'kubejs:soy_flakes')
                            .id('inconvenient:crushing_wheel_soy_meal');
                        },
                        children: [
                          {
                            id: 'soy_flakes',
                            recipe: () => {
                              event.recipes.create
                                .milling(
                                  ['kubejs:soy_flakes'],
                                  'rankine:soybeans'
                                )
                                .id('inconvenient:milling_soy_flakes');
                            },
                            children: [
                              {
                                id: 'soybeans',
                                recipe: () => {
                                  event
                                    .custom({
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
                                    })
                                    .id('inconvenient:mana_infusion_soybeans');
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
                  event.recipes.create
                    .crushing(['kubejs:ginger_powder'], 'croptopia:ginger')
                    .id('inconvenient:crushing_wheel_ginger_powder');
                },
                children: [
                  {
                    id: 'ginger_seed',
                    recipe: () => {
                      event
                        .custom({
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
                        })
                        .id('inconvenient:mana_infusion_ginger_seed');
                    },
                  },
                ],
              },
              {
                id: 'cinnamon_powder',
                recipe: () => {
                  event.recipes.create
                    .crushing(['kubejs:cinnamon_powder'], 'rankine:cinnamon')
                    .id('inconvenient:crushing_wheel_cinnamon_powder');
                },
                children: [
                  {
                    id: 'cinnamon_sapling',
                    recipe: () => {
                      event.remove({output: 'rankine:cinnamon_sapling'});
                      event
                        .custom({
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
                        })
                        .id('inconvenient:mana_infusion_cinnamon_sapling');
                    },
                  },
                ],
              },
              {
                id: 'nutmeg_powder',
                recipe: () => {
                  event.recipes.create
                    .crushing(['kubejs:nutmeg_powder'], 'croptopia:nutmeg')
                    .id('inconvenient:crushing_wheel_nutmeg_powder');
                },
                children: [
                  {
                    id: 'nutmeg_sapling',
                    recipe: () => {
                      event.remove({output: 'croptopia:nutmeg_sapling'});
                      event
                        .custom({
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
                        })
                        .id('inconvenient:mana_infusion_nutmeg_sapling');
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'wet_ingredients',
            recipe: () => {
              event.recipes.create
                .mixing(Fluid.of('kubejs:wet_ingredients', 1000), [
                  'kubejs:lard_whip',
                  'kubejs:brown_sugar',
                  Fluid.of('create:honey', 1000),
                  'kubejs:egg_whip',
                ])
                .id('inconvenient:mixing_wet_ingredients');
            },
            children: [
              // slaughter the pig. get fat from the pig. boil the fat mixed with water to get lard liquid. evaporate lard liquid to get lard item. mix to make whipped lard
              {
                id: 'lard_whip',
                recipe: () => {
                  event.recipes.create
                    .mixing('kubejs:lard_whip', ['2x kubejs:lard'])
                    .id('inconvenient:mixing_lard_whip');
                },
                children: [
                  {
                    id: 'lard',
                    recipe: () => {
                      event.remove({output: 'kubejs:lard'});
                      event
                        .custom({
                          type: 'rankine:evaporation',
                          processTime: 12000,
                          input: {
                            fluid: 'kubejs:lard',
                          },
                          outputs: [{item: 'kubejs:lard', weight: 100}],
                        })
                        .id('inconvenient:evaporation_lard');
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
                            .heated()
                            .id('inconvenient:mixing_lard_liquid');
                        },
                        children: [
                          {
                            id: 'butcher_knife',
                            recipe: () => {
                              event.remove({
                                output: 'kubejs:butcher_knife',
                              });
                              event.recipes
                                .createMechanicalCrafting(
                                  'kubejs:butcher_knife',
                                  [' ac', ' cc', 'b  '],
                                  {
                                    a: 'botania:manasteel_ingot',
                                    b: '#forge:rods/wooden',
                                    c: 'botania:manasteel_nugget',
                                  }
                                )
                                .id('inconvenient:mechanical_butcher_knife');
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
                                  event.recipes.botania
                                    .mana_infusion(
                                      'botania:manasteel_ingot',
                                      'tconstruct:pig_iron_ingot',
                                      2000
                                    )
                                    .id(
                                      'inconvenient:mana_infusion_manasteel_ingot'
                                    );

                                  event.recipes.botania
                                    .mana_infusion(
                                      'botania:manasteel_block',
                                      'tconstruct:pig_iron_block',
                                      18000
                                    )
                                    .id(
                                      'inconvenient:mana_infusion_manasteel_block'
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
                              event.recipes
                                .createMechanicalCrafting(
                                  'kubejs:skinning_knife',
                                  [' ac', 'b  '],
                                  {
                                    a: 'botania:manasteel_ingot',
                                    b: '#forge:rods/wooden',
                                    c: 'botania:manasteel_nugget',
                                  }
                                )
                                .id('inconvenient:mechanical_skinning_knife');
                            },
                          },
                          {
                            id: 'bone_saw',
                            recipe: () => {
                              event.remove({output: 'kubejs:bone_saw'});
                              event.recipes
                                .createMechanicalCrafting(
                                  'kubejs:bone_saw',
                                  ['acb', 'ccb'],
                                  {
                                    a: 'botania:manasteel_ingot',
                                    b: '#forge:rods/wooden',
                                    c: 'botania:manasteel_nugget',
                                  }
                                )
                                .id('inconvenient:mechanical_bone_saw');
                            },
                          },
                          {
                            id: 'gut_knife',
                            recipe: () => {
                              event.remove({output: 'kubejs:gut_knife'});
                              event.recipes
                                .createMechanicalCrafting(
                                  'kubejs:gut_knife',
                                  ['a  ', ' c ', ' b '],
                                  {
                                    a: 'botania:manasteel_ingot',
                                    b: '#forge:rods/wooden',
                                    c: 'botania:manasteel_nugget',
                                  }
                                )
                                .id('inconvenient:mechanical_gut_knife');
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
                  event.recipes.create
                    .filling('kubejs:brown_sugar', [
                      'minecraft:sugar',
                      Fluid.of('kubejs:molasses', 1000),
                    ])
                    .id('inconvenient:filling_brown_sugar');
                },
                children: [
                  {
                    id: 'molasses',
                    recipe: () => {
                      event.recipes.create
                        .mixing(Fluid.of('kubejs:molasses', 100), [
                          Fluid.of('kubejs:sugar_cane_juice', 1000),
                        ])
                        .heated()
                        .id('inconvenient:mixing_molasses');
                    },
                    children: [
                      {
                        id: 'sugar_cane_juice',
                        recipe: () => {
                          event.recipes
                            .createCompacting(
                              Fluid.of('kubejs:sugar_cane_juice', 250),
                              'minecraft:sugar_cane'
                            )
                            .id('inconvenient:compacting_sugar_cane_juice');
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
                  event.recipes
                    .createMechanicalCrafting(
                      'minecraft:beehive',
                      ['a', 'b', 'b', 'b'],
                      {
                        a: 'kubejs:beehive_cover',
                        b: 'kubejs:brood_box',
                      }
                    )
                    .id('inconvenient:mechanical_beehive');
                },
                children: [
                  {
                    id: 'beehive_cover',
                    recipe: () => {
                      event.recipes
                        .createMechanicalCrafting(
                          'kubejs:beehive_cover',
                          ['aba', 'bcb', 'aba'],
                          {
                            a: 'kubejs:shadow_steel_casing_knob',
                            b: 'kubejs:shadow_steel_casing_strip',
                            c: 'kubejs:curved_manasteel_sheet',
                          }
                        )
                        .id('inconvenient:mechanical_beehive_cover');
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
                            .processingTime(50)
                            .id(
                              'inconvenient:cutting_shadow_steel_casing_knob'
                            ); // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
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
                                .processingTime(50)
                                .id(
                                  'inconvenient:cutting_shadow_steel_casing_panel'
                                ); // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
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
                                    .processingTime(50)
                                    .id(
                                      'inconvenient:cutting_shadow_steel_casing_panel'
                                    ); // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
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
                        .loops(1)
                        .id('inconvenient:sequenced_assembly_brood_box');
                    },
                    children: [
                      {
                        id: 'empty_brood_box',
                        recipe: () => {
                          event.recipes
                            .createMechanicalCrafting(
                              'kubejs:empty_brood_box',
                              [' a ', 'a a', ' a '],
                              {
                                a: 'kubejs:shadow_steel_casing_panel',
                              }
                            )
                            .id('inconvenient:mechanical_empty_brood_box');
                        },
                        children: [],
                      },
                      {
                        id: 'empty_frame',
                        recipe: () => {
                          event.recipes
                            .createMechanicalCrafting(
                              'kubejs:empty_frame',
                              [' a ', 'a a', ' a '],
                              {
                                a: 'kubejs:shadow_steel_casing_strip',
                              }
                            )
                            .id('inconvenient:mechanical_empty_frame');
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
                  event
                    .custom({
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
                    })
                    .id('inconvenient:animal_spawner_bee');
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
                      event.recipes.botania
                        .runic_altar(
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
                        )
                        .id('inconvenient:runic_altar_birthing_altar');
                    },
                    children: [
                      {
                        id: 'shadow_steel_casing_frame',
                        recipe: () => {
                          event.recipes
                            .createMechanicalCrafting(
                              'kubejs:shadow_steel_casing_frame',
                              ['abbba', 'b   b', 'b   b', 'b   b', 'abbba'],
                              {
                                a: 'kubejs:shadow_steel_casing_knob',
                                b: 'kubejs:shadow_steel_casing_strip',
                              }
                            )
                            .id(
                              'inconvenient:mechanical_shadow_steel_casing_frame'
                            );
                        },
                      },
                    ],
                  },
                  {
                    id: 'demon_slate',
                    recipe: () => {
                      event.remove({output: 'bloodmagic:demonslate'});
                      event
                        .custom({
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
                        })
                        .id('inconvenient:altar_demon_slate');
                    },
                  },
                  {
                    id: 'elements_rune',
                    recipe: () => {
                      event.recipes.botania
                        .runic_altar(
                          `2x kubejs:elements_rune`,
                          [
                            'botania:rune_earth',
                            'botania:rune_water',
                            'botania:rune_fire',
                            'botania:rune_air',
                            'create:shadow_steel',
                          ],
                          9000
                        )
                        .id('inconvenient:runic_altar_elements_rune');
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
