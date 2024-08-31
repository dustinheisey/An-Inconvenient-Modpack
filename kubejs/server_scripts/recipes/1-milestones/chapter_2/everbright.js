onEvent('recipes', event => {
  setMilestoneRecipes({
    id: 'blue_skies:zeal_lighter',
    recipe: () => {
      event
        .custom({
          type: 'hexerei:mixingcauldron',
          ingredients: [
            {
              item: 'rankine:snowflake_obsidian',
            },
            {
              item: 'rankine:snowflake_obsidian',
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
              item: 'rankine:snowflake_obsidian',
            },
            {
              item: 'rankine:snowflake_obsidian',
            },
            {
              item: 'rankine:snowflake_obsidian',
            },
          ],
          liquid: {
            fluid: 'minecraft:water',
          },
          liquidOutput: {
            fluid: 'minecraft:water',
          },
          output: {
            item: 'blue_skies:zeal_lighter',
            count: 1,
          },
          fluidLevelsConsumed: 1000,
        })
        .id('inconvenient:cauldron_zeal_lighter');
    },
    children: [
      {
        id: 'amethyst_bronze_ingot',
        recipe: () => {},
        children: [{id: 'cast', recipe: () => {}, children: []}],
      },
      {
        id: 'turquoise_stone_bricks',
        recipe: () => {
          ['blue_skies:turquoise_stonebrick'].forEach(id =>
            event.remove({id: id})
          );

          overrideBricksRecipes('chapter_2', event, [
            {
              output: 'blue_skies:turquoise_stonebrick',
              input: 'blue_skies:turquoise_stone',
            },
          ]);
        },
        children: [
          {
            id: 'turquoise_stone',
            recipe: () => {
              event
                .custom({
                  type: 'hexerei:dipper',
                  output: {
                    item: 'blue_skies:turquoise_stone',
                  },
                  ingredients: [
                    {
                      item: 'minecraft:stone',
                    },
                  ],
                  liquid: {
                    fluid: 'kubejs:freezing_sap',
                  },
                  fluidLevelsConsumed: 250,
                  dippingTimeInTicks: 200,
                  dryingTimeInTicks: 200,
                  numberOfDips: 3,
                })
                .id('inconvenient:dipper_turquoise_stone');
            },
            children: [
              {
                id: 'snowflake_obsidian',
                recipe: () => {
                  [
                    'rankine:stonegen_volcanic/snowflake_obsidian_generator',
                  ].forEach(id => event.remove({id: id}));
                  event
                    .custom({
                      type: 'tconstruct:casting_basin',
                      fluid: {name: 'kubejs:freezing_sap', amount: 250},
                      cast: 'minecraft:obsidian',
                      cooling_time: 100,
                      result: 'rankine:snowflake_obsidian',
                    })
                    .id('inconvenient:casting_basin_snowflake_obsidian');
                },
                children: [],
              },
              {
                id: 'freezing_sap',
                recipe: () => {
                  event
                    .custom({
                      type: 'rankine:treetapping',
                      tapTime: 400,
                      input: {
                        item: 'blue_skies:bluebright_log',
                      },
                      result: {
                        fluid: 'kubejs:freezing_sap',
                        amount: 200,
                      },
                    })
                    .id('inconvenient:treetapping_freezing_sap');
                },
                children: [
                  {
                    id: 'tree_tap',
                    recipe: () => {
                      ['rankine:alloy_crafting/tree_tap'].forEach(id =>
                        event.remove({id: id})
                      );
                      event
                        .shaped(`8x rankine:tap_line`, ['aaa'], {
                          a: 'minecraft:leather',
                        })
                        .id('inconvenient:shaped_tap_line');
                      event
                        .shaped(`rankine:tree_tap`, [' a ', 'bbb', 'c  '], {
                          a: 'minecraft:red_dye',
                          b: 'rankine:sterling_silver_ingot',
                          c: 'minecraft:bucket',
                        })
                        .id('inconvenient:shaped_tree_tap');
                    },
                    children: [
                      {
                        id: 'sterling_silver_ingot',
                        recipe: () => {
                          event
                            .custom({
                              type: 'tconstruct:casting_table',
                              fluid: {
                                name: 'kubejs:molten_sterling_silver',
                                amount: 90,
                              },
                              cast: {
                                item: 'tconstruct:ingot_cast',
                                cast_consumed: false,
                              },
                              result: 'rankine:sterling_silver_ingot',
                              cooling_time: 100,
                            })
                            .id(
                              'inconvenient:casting_table_sterling_silver_ingot'
                            );

                          event
                            .custom({
                              type: 'tconstruct:casting_table',
                              fluid: {
                                name: 'kubejs:molten_sterling_silver',
                                amount: 10,
                              },
                              cast: {
                                item: 'tconstruct:nugget_cast',
                                cast_consumed: false,
                              },
                              result: 'rankine:sterling_silver_nugget',
                              cooling_time: 100,
                            })
                            .id(
                              'inconvenient:casting_table_sterling_silver_nugget'
                            );
                          event
                            .custom({
                              type: 'tconstruct:casting_basin',
                              fluid: {
                                name: 'kubejs:molten_sterling_silver',
                                amount: 810,
                              },
                              cooling_time: 100,
                              result: 'rankine:sterling_silver_block',
                            })
                            .id(
                              'inconvenient:casting_basin_sterling_silver_block'
                            );
                        },
                        children: [
                          {
                            id: 'sterling_silver_allloy',
                            recipe: () => {
                              event
                                .custom({
                                  type: 'tconstruct:alloy',
                                  result: {
                                    fluid: 'kubejs:molten_sterling_silver',
                                    amount: 180,
                                  },
                                  inputs: [
                                    {
                                      name: 'tconstruct:molten_silver',
                                      amount: 90,
                                    },
                                    {
                                      name: 'tconstruct:molten_copper',
                                      amount: 90,
                                    },
                                  ],
                                  temperature: 605,
                                })
                                .id(
                                  'inconvenient:alloy_molten_sterling_silver'
                                );
                            },
                            children: [
                              {
                                id: 'molten_silver',
                                children: [
                                  {
                                    id: 'acanthite',
                                    recipe: () => {
                                      event
                                        .custom({
                                          input: {
                                            item: 'rankine:acanthite_ore',
                                          },
                                          type: 'rankine:crushing',
                                          guaranteed: [
                                            {
                                              item: 'rankine:acanthite',
                                              count: 1,
                                              tier: 'minecraft:iron',
                                            },
                                            {
                                              item: 'rankine:acanthite',
                                              count: 1,
                                              tier: 'minecraft:netherite',
                                            },
                                          ],
                                        })
                                        .id('inconvenient:crushing_acanthite');
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: 'red_dye',
                        recipe: () => {},
                        children: [
                          {
                            id: 'madder_root',
                            recipe: () => {
                              event
                                .custom({
                                  type: 'rankine:sluicing',
                                  input: {tag: 'forge:grass_blocks'},
                                  outputs: [
                                    {
                                      item: 'minecraft:dirt',
                                      weight: 50,
                                    },
                                    {
                                      item: 'minecraft:sand',
                                      weight: 25,
                                    },
                                    {item: 'rankine:silt', weight: 1},
                                    {
                                      item: 'minecraft:beetroot_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'minecraft:potato',
                                      weight: 1,
                                    },
                                    {
                                      item: 'minecraft:carrot',
                                      weight: 1,
                                    },
                                    {
                                      item: 'minecraft:melon_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'minecraft:pumpkin_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'minecraft:wheat_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:asparagus_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:barley_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:camphor_basil_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:corn_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:jute_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:millet_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:oat_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:rice_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:rye_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'rankine:sorghum_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'paragon_textiles:flax_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'farmersdelight:cabbage_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'farmersdelight:tomato_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'farmersdelight:onion',
                                      weight: 1,
                                    },
                                    {
                                      item: 'occultism:datura_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'farmersrespite:coffee_berries',
                                      weight: 1,
                                    },
                                    {
                                      item: 'farmersrespite:tea_seeds',
                                      weight: 1,
                                    },
                                    {
                                      item: 'kubejs:madder_root',
                                      weight: 1,
                                    },
                                  ],
                                  tool: {
                                    item: 'rankine:pewter_gold_pan',
                                  },
                                })
                                .id('inconvenient:sluicing_pewter_gold_pan');
                            },
                            children: [
                              {
                                id: 'pewter_sifter',
                                recipe: () => {},
                                children: [
                                  {
                                    id: 'pewter_ingot',
                                    recipe: () => {},
                                    children: [
                                      {
                                        id: 'pewter_alloy',
                                        children: [
                                          {
                                            id: 'molten_lead',
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
                    id: 'bluebright_sapling',
                    // dip otherworld sapling in freezing sap
                    recipe: () => {
                      ['hexerei:candle_dipper_from_mixing_cauldron'].forEach(
                        id => event.remove({id: id})
                      );
                      event
                        .custom({
                          type: 'hexerei:dipper',
                          output: {
                            item: 'blue_skies:bluebright_sapling',
                          },
                          ingredients: [
                            {
                              item: 'occultism:otherworld_sapling',
                            },
                          ],
                          liquid: {
                            fluid: 'tconstruct:molten_amethyst_bronze',
                          },
                          fluidLevelsConsumed: 1000,
                          dippingTimeInTicks: 200,
                          dryingTimeInTicks: 200,
                          numberOfDips: 3,
                        })
                        .id('inconvenient:dipping_bluebright_sapling');
                    },
                    children: [
                      {
                        id: 'otherworld_sapling',
                        recipe: () => {},
                        children: [],
                      },
                    ],
                  },
                  {id: 'bucket', recipe: () => {}, children: []},
                ],
              },
              {
                id: 'dipper',
                recipe: () => {
                  event
                    .custom({
                      type: 'hexerei:mixingcauldron',
                      ingredients: [
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
                          item: 'tconstruct:amethyst_bronze_nugget',
                        },
                        {
                          item: 'tconstruct:amethyst_bronze_nugget',
                        },
                        {
                          item: 'tconstruct:amethyst_bronze_nugget',
                        },
                        {
                          item: 'tconstruct:amethyst_bronze_ingot',
                        },
                        {
                          item: 'tconstruct:amethyst_bronze_ingot',
                        },
                      ],
                      output: {
                        item: 'hexerei:candle_dipper',
                        count: 1,
                      },
                      liquid: {
                        fluid: 'minecraft:lava',
                      },
                      liquidOutput: {
                        fluid: 'minecraft:lava',
                      },
                      fluidLevelsConsumed: 333,
                    })
                    .id('inconvenient:cauldron_dipper');
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 'mixing_cauldron',
        recipe: () => {
          event
            .shaped('hexerei:mixing_cauldron', ['a a', 'bcb', 'bbb'], {
              a: 'hexerei:selenite_shard',
              b: 'tconstruct:amethyst_bronze_ingot',
              c: 'minecraft:cauldron',
            })
            .id('inconvenient:shaped_mixing_cauldron');
        },
        children: [{id: 'selenite_shard', recipe: () => {}, children: []}],
      },
    ],
  });
});
