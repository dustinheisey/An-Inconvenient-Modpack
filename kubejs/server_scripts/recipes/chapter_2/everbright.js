onEvent('recipes', (event) => {
  setMilestoneRecipes({
    id: 'blue_skies:zeal_lighter',
    recipe: () => {
      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'rankine:snowflake_obsidian'
          },
          {
            item: 'rankine:snowflake_obsidian'
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
            item: 'rankine:snowflake_obsidian'
          },
          {
            item: 'rankine:snowflake_obsidian'
          },
          {
            item: 'rankine:snowflake_obsidian'
          }
        ],
        liquid: {
          fluid: 'minecraft:water'
        },
        liquidOutput: {
          fluid: 'minecraft:water'
        },
        output: {
          item: 'blue_skies:zeal_lighter',
          count: 1
        },
        fluidLevelsConsumed: 1000,
        global: true
      });
    },
    children: [
      {
        id: 'amethyst_bronze_ingot',
        recipe: () => {},
        children: [{ id: 'cast', recipe: () => {}, children: [] }]
      },
      {
        id: 'turquoise_stone_bricks',
        recipe: () => {
          ['blue_skies:turquoise_stonebrick'].forEach((id) =>
            event.remove({ id: id })
          );

          event.shaped('4x blue_skies:turquoise_stonebrick', ['ab', 'ba'], {
            a: 'blue_skies:turquoise_stone',
            b: 'kubejs:grout_ball'
          });
        },
        children: [
          {
            id: 'turquoise_stone',
            recipe: () => {
              event.custom({
                type: 'hexerei:dipper',
                output: {
                  item: 'blue_skies:turquoise_stone'
                },
                ingredients: [
                  {
                    item: 'minecraft:stone'
                  }
                ],
                liquid: {
                  fluid: 'kubejs:freezing_sap'
                },
                fluidLevelsConsumed: 250,
                dippingTimeInTicks: 200,
                dryingTimeInTicks: 200,
                numberOfDips: 3
              });
            },
            children: [
              {
                id: 'snowflake_obsidian',
                recipe: () => {
                  [
                    'rankine:stonegen_volcanic/snowflake_obsidian_generator'
                  ].forEach((id) => event.remove({ id: id }));
                  event.custom({
                    type: 'tconstruct:casting_basin',
                    fluid: { name: 'kubejs:freezing_sap', amount: 250 },
                    cast: { item: 'minecraft:obsidian' },
                    cooling_time: 100,
                    result: 'rankine:snowflake_obsidian'
                  });
                },
                children: []
              },
              {
                id: 'freezing_sap',
                recipe: () => {
                  event.custom({
                    type: 'rankine:treetapping',
                    tapTime: 400,
                    input: {
                      item: 'blue_skies:bluebright_log'
                    },
                    result: {
                      fluid: 'kubejs:freezing_sap',
                      amount: 200
                    }
                  });
                },
                children: [
                  {
                    id: 'tree_tap',
                    recipe: () => {
                      ['rankine:alloy_crafting/tree_tap'].forEach((id) =>
                        event.remove({ id: id })
                      );
                      event.shaped(`8x rankine:tap_line`, ['aaa'], {
                        a: 'minecraft:leather'
                      });
                      event.shaped(`rankine:tree_tap`, [' a ', 'bbb', 'c  '], {
                        a: 'minecraft:red_dye',
                        b: 'rankine:sterling_silver_ingot',
                        c: 'minecraft:bucket'
                      });
                    },
                    children: [
                      {
                        id: 'sterling_silver_ingot',
                        recipe: () => {
                          event.custom({
                            type: 'tconstruct:casting_table',
                            fluid: {
                              name: 'kubejs:molten_sterling_silver',
                              amount: 90
                            },
                            cast: {
                              item: 'tconstruct:ingot_cast',
                              cast_consumed: false
                            },
                            result: 'rankine:sterling_silver_ingot',
                            cooling_time: 100
                          });

                          event.custom({
                            type: 'tconstruct:casting_table',
                            fluid: {
                              name: 'kubejs:molten_sterling_silver',
                              amount: 10
                            },
                            cast: {
                              item: 'tconstruct:nugget_cast',
                              cast_consumed: false
                            },
                            result: 'rankine:sterling_silver_nugget',
                            cooling_time: 100
                          });
                          event.custom({
                            type: 'tconstruct:casting_basin',
                            fluid: {
                              name: 'kubejs:molten_sterling_silver',
                              amount: 810
                            },
                            cooling_time: 100,
                            result: 'rankine:sterling_silver_block'
                          });
                        },
                        children: [
                          {
                            id: 'sterling_silver_allloy',
                            recipe: () => {
                              event.custom({
                                type: 'tconstruct:alloy',
                                result: {
                                  fluid: 'kubejs:molten_sterling_silver',
                                  amount: 180
                                },
                                inputs: [
                                  {
                                    name: 'tconstruct:molten_silver',
                                    amount: 90
                                  },
                                  {
                                    name: 'tconstruct:molten_copper',
                                    amount: 90
                                  }
                                ],
                                temperature: 605
                              });
                            },
                            children: [
                              {
                                id: 'molten_silver',
                                children: [
                                  {
                                    id: 'acanthite',
                                    recipe: () => {
                                      event.custom({
                                        input: {
                                          item: 'rankine:acanthite_ore'
                                        },
                                        type: 'rankine:crushing',
                                        guaranteed: [
                                          {
                                            item: 'rankine:acanthite',
                                            count: 1,
                                            tier: 'minecraft:iron'
                                          },
                                          {
                                            item: 'rankine:acanthite',
                                            count: 1,
                                            tier: 'minecraft:netherite'
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
                        id: 'red_dye',
                        recipe: () => {},
                        children: [
                          {
                            id: 'madder_root',
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
                                    { item: 'rankine:silt', weight: 1 },
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
                                    { item: 'rankine:silt', weight: 1 },
                                    {
                                      item: 'minecraft:beetroot_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'minecraft:potato',
                                      weight: 1
                                    },
                                    {
                                      item: 'minecraft:carrot',
                                      weight: 1
                                    },
                                    {
                                      item: 'minecraft:melon_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'minecraft:pumpkin_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'minecraft:wheat_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:asparagus_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:barley_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:camphor_basil_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:corn_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:jute_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:millet_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:oat_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:rice_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:rye_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'rankine:sorghum_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'paragon_textiles:flax_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'farmersdelight:cabbage_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'farmersdelight:tomato_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'farmersdelight:onion',
                                      weight: 1
                                    },
                                    {
                                      item: 'occultism:datura_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'farmersrespite:coffee_berries',
                                      weight: 1
                                    },
                                    {
                                      item: 'farmersrespite:tea_seeds',
                                      weight: 1
                                    },
                                    {
                                      item: 'kubejs:madder_root',
                                      weight: 1
                                    }
                                  ],
                                  tool: {
                                    item: 'rankine:pewter_gold_pan'
                                  }
                                });
                              });
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
                                            id: 'molten_lead'
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
                    id: 'bluebright_sapling',
                    // dip otherworld sapling in freezing sap
                    recipe: () => {
                      ['hexerei:candle_dipper_from_mixing_cauldron'].forEach(
                        (id) => event.remove({ id: id })
                      );
                      event.custom({
                        type: 'hexerei:dipper',
                        output: {
                          item: 'blue_skies:bluebright_sapling'
                        },
                        ingredients: [
                          {
                            item: 'occultism:otherworld_sapling'
                          }
                        ],
                        liquid: {
                          fluid: 'tconstruct:molten_amethyst_bronze'
                        },
                        fluidLevelsConsumed: 1000,
                        dippingTimeInTicks: 200,
                        dryingTimeInTicks: 200,
                        numberOfDips: 3
                      });
                    },
                    children: [
                      {
                        id: 'otherworld_sapling',
                        recipe: () => {},
                        children: []
                      }
                    ]
                  },
                  { id: 'bucket', recipe: () => {}, children: [] }
                ]
              },
              {
                id: 'dipper',
                recipe: () => {
                  event.custom({
                    type: 'hexerei:mixingcauldron',
                    ingredients: [
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
                        item: 'tconstruct:amethyst_bronze_nugget'
                      },
                      {
                        item: 'tconstruct:amethyst_bronze_nugget'
                      },
                      {
                        item: 'tconstruct:amethyst_bronze_nugget'
                      },
                      {
                        item: 'tconstruct:amethyst_bronze_ingot'
                      },
                      {
                        item: 'tconstruct:amethyst_bronze_ingot'
                      }
                    ],
                    output: {
                      item: 'hexerei:candle_dipper',
                      count: 1
                    },
                    liquid: {
                      fluid: 'minecraft:lava'
                    },
                    liquidOutput: {
                      fluid: 'minecraft:lava'
                    },
                    fluidLevelsConsumed: 333
                  });
                },
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 'mixing_cauldron',
        recipe: () => {
          event.shaped('hexerei:mixing_cauldron', ['a a', 'bcb', 'bbb'], {
            a: 'hexerei:selenite_shard',
            b: 'tconstruct:amethyst_bronze_ingot',
            c: 'minecraft:cauldron'
          });
        },
        children: [{ id: 'selenite_shard', recipe: () => {}, children: [] }]
      }
    ]
  });
});
