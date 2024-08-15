onEvent('recipes', event => {
  setMilestoneRecipes({
    id: 'naturesaura:eye',
    recipe: () => {
      event.custom({
        type: 'naturesaura:tree_ritual',
        sapling: {item: 'blue_skies:starlit_sapling'},
        ingredients: [
          {item: 'minecraft:heart_of_the_sea'}, // 1
          {item: 'rankine:white_marble'}, // 3 or 4 or 5 or 6
          {item: 'malum:runewood_log'}, // 2 or 7
          {item: 'malum:runewood_log'}, // 3 or 4 or 5 or 6
          {item: 'malum:runewood_log'}, // 8
          {item: 'naturesaura:gold_powder'}, // 3 or 4 or 5 or 6
          {item: 'rankine:white_marble'}, // 2 or 7
          {item: 'malum:runewood_log'}, // 3 or 4 or 5 or 6
        ],
        time: 250,
        output: {item: 'naturesaura:eye'},
      });
    },

    // get heart of the sea from gateway. gateway is filled with ocean mobs and can only be summoned in the water. iridescent scales from elder guardian boss. scales are part of dream. ocean monument spawns in everbright. everbright is the country that was flooded. maybe get rid of the underwater palace and make guardians spawn in everbright waters naturally.
    children: [
      {
        id: 'heart_of_the_sea',
        recipe: () => {},
        children: [
          {
            id: 'aquatic_gateway',
            recipe: () => {},
            children: [
              {
                id: 'aviars_circle',
                recipe: () => {
                  event.replaceInput(
                    {output: 'occultism:brush'},
                    '#minecraft:wool',
                    'rankine:gun_cotton'
                  );
                },
                children: [
                  {
                    id: 'golden_sacrificial_bowl',
                    recipe: () => {
                      event.replaceInput(
                        {output: 'occultism:golden_sacrificial_bowl'},
                        'minecraft:gold_ingot',
                        'blue_skies:ventium_ingot'
                      );
                    },
                    children: [
                      {
                        id: 'ventium_ingot',
                        recipe: () => {
                          [
                            'blue_skies:ventium_ingot_from_blasting_raw_ventium',
                            'blue_skies:ventium_ingot_from_blasting_ventium_ore',
                            'blue_skies:ventium_ingot_from_smelting_raw_ventium',
                            'blue_skies:ventium_ingot_from_smelting_ventium_ore',
                          ].forEach(id => event.remove({id: id}));
                        },
                        children: [
                          {
                            id: 'molten_ventium',
                            recipe: () => {},
                            children: [
                              {
                                id: 'raw_ventium',
                                recipe: () => {},
                                children: [
                                  {
                                    id: 'ventium_ore',
                                    recipe: () => {},
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {id: 'sacrificial_bowl', recipe: () => {}, children: []},
                    ],
                  },
                  {
                    id: 'white_chalk',
                    recipe: () => {},
                    children: [
                      {
                        id: 'impure_white_chalk',
                        recipe: () => {
                          ['occultism:crafting/chalk_white_impure'].forEach(
                            id => event.remove({id: id})
                          );

                          event.shaped(
                            'occultism:chalk_white_impure',
                            ['abc', 'abc', 'abc'],
                            {
                              a: 'occultism:burnt_otherstone',
                              b: 'occultism:otherworld_ashes',
                              c: 'rankine:chalk',
                            }
                          );
                        },
                        children: [
                          {
                            id: 'otherworld_ashes',
                            recipe: () => {
                              event.custom({
                                type: 'occultism:spirit_fire',
                                ingredient: {
                                  item: 'malum:block_of_arcane_charcoal',
                                },
                                result: {
                                  item: 'occultism:otherworld_ashes',
                                },
                              });
                            },
                            children: [
                              {
                                id: 'arcane_charcoal',
                                recipe: () => {},
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'candle',
                    recipe: () => {
                      ['hexerei:candle_from_dipper'].forEach(id =>
                        event.remove({id: id})
                      );
                      event.custom({
                        type: 'hexerei:dipper',
                        output: {
                          item: 'hexerei:candle',
                        },
                        ingredients: [
                          {
                            item: 'paragon_textiles:silk',
                          },
                        ],
                        liquid: {
                          fluid: 'hexerei:tallow_fluid',
                        },
                        fluidLevelsConsumed: 250,
                        dippingTimeInTicks: 200,
                        dryingTimeInTicks: 200,
                        numberOfDips: 3,
                      });
                    },
                    children: [
                      {
                        id: 'tallow',
                        recipe: () => {
                          ['hexerei:tallow_from_mixing_cauldron'].forEach(id =>
                            event.remove({id: id})
                          );
                          event.custom({
                            type: 'hexerei:mixingcauldron',
                            ingredients: [
                              {
                                item: 'hexerei:animal_fat',
                              },
                              {
                                item: 'hexerei:animal_fat',
                              },
                              {
                                item: 'blue_skies:cryo_root',
                              },
                              {
                                item: 'hexerei:animal_fat',
                              },
                              {
                                item: 'hexerei:animal_fat',
                              },
                              {
                                item: 'hexerei:animal_fat',
                              },
                              {
                                item: 'blue_skies:cryo_root',
                              },
                              {
                                item: 'hexerei:animal_fat',
                              },
                            ],
                            liquid: {
                              fluid: 'minecraft:water',
                            },
                            liquidOutput: {
                              fluid: 'hexerei:tallow_fluid',
                            },
                            output: {
                              item: 'hexerei:tallow_impurity',
                              count: 1,
                            },
                            fluidLevelsConsumed: 0,
                          });
                        },
                        children: [
                          {
                            id: 'animal_fat',
                            recipe: () => {},
                            children: [
                              {
                                id: 'scythe',
                                recipe: () => {},
                                children: [
                                  {
                                    id: 'summoner_loot_bag',
                                    recipe: () => {},
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {id: 'silk_thread', recipe: () => {}, children: []},
                    ],
                  },
                ],
              },
              {
                id: 'aquite',
                recipe: () => {
                  [
                    'blue_skies:aquite_from_blasting_raw_aquite',
                    'blue_skies:aquite_from_blasting_everbright_aquite_ore',
                    'blue_skies:aquite_from_blasting_everdawn_aquite_ore',
                    'blue_skies:aquite_from_smelting_everdawn_aquite_ore',
                    'blue_skies:aquite_from_smelting_raw_aquite',
                    'blue_skies:aquite_from_smelting_everbright_aquite_ore',
                  ].forEach(id => event.remove({id: id}));
                },
                children: [
                  {
                    id: 'raw_aquite',
                    recipe: () => {},
                    children: [
                      {id: 'aquite_ore', recipe: () => {}, children: []},
                    ],
                  },
                ],
              },
              {id: 'soul_fragment', recipe: () => {}, children: []},
            ],
          },
        ],
      },
      {
        id: 'runewood_log',
        recipe: () => {},
        children: [{id: 'runewood_sapling', recipe: () => {}, children: []}],
      },
      {
        id: 'white_marble',
        recipe: () => {
          event.custom({
            type: 'rankine:rock_generator',
            genType: 'metamorphic',
            input1: {item: 'blue_skies:moonstone_block'},
            result: {
              block: 'rankine:white_marble',
            },
          });
        },
        children: [
          {
            id: 'moonstone',
            recipe: () => {
              [
                'blue_skies:moonstone_from_blasting_everdawn_moonstone_ore',
                'blue_skies:moonstone_from_blasting_everbright_moonstone_ore',
                'blue_skies:moonstone_from_smelting_everdawn_moonstone_ore',
                'blue_skies:moonstone_from_smelting_everbright_moonstone_ore',
                'blue_skies:moonstone_block_from_moonstone_crystal',
              ].forEach(id => event.remove({id: id}));
              event.custom({
                input: {item: 'blue_skies:everbright_moonstone_ore'},
                type: 'rankine:crushing',
                guaranteed: [
                  {
                    item: 'blue_skies:moonstone_shard',
                    count: 1,
                    tier: 'minecraft:iron',
                  },
                  {
                    item: 'blue_skies:moonstone_shard',
                    tier: 'minecraft:diamond',
                    count: 3,
                  },
                ],
              });
            },
          },
        ],
      },
      {id: 'iridescent_scales', recipe: () => {}, children: []},
      {id: 'starlit_sapling', recipe: () => {}, children: []},
      {
        id: 'forest_ritual',
        recipe: () => {},
        children: [
          {
            id: 'wood_stand',
            recipe: () => {
              event.shaped('naturesaura:wood_stand', ['a', 'b'], {
                a: `naturesaura:gold_leaf`,
                b: 'totemic:cedar_log',
              });
            },
            children: [
              {
                id: 'red_cedar_sapling',
                recipe: () => {},
                children: [
                  {
                    id: 'flute',
                    recipe: () => {
                      event.replaceInput(
                        {
                          output: [
                            'totemic:flute',
                            'totemic:jingle_dress',
                            'totemic:totemic_staff',
                          ],
                        },
                        '#minecraft:leaves',
                        'blue_skies:winter_leaves'
                      );
                    },
                    children: [],
                  },
                  {
                    id: 'drum',
                    recipe: () => {
                      event.shaped('totemic:drum', ['aaa', 'bcb', 'cbc'], {
                        a: 'minecraft:leather',
                        b: '#minecraft:planks',
                        c: 'rankine:gun_cotton',
                      });
                    },
                    children: [
                      {
                        id: 'gun_cotton',
                        recipe: () => {
                          event.shaped(
                            `rankine:gun_cotton`,
                            ['aaa', 'aaa', 'aaa'],
                            {
                              a: 'rankine:cotton',
                            }
                          );
                        },
                        children: [
                          {
                            id: 'cotton',
                            recipe: () => {
                              event.custom({
                                type: 'rankine:sluicing',
                                input: {
                                  item: 'blue_skies:turquoise_grass_block',
                                },
                                outputs: [
                                  {
                                    item: `blue_skies:turquoise_dirt`,
                                    weight: 100,
                                  },
                                  {
                                    item: 'blue_skies:winter_leaf_seeds',
                                    weight: 1,
                                  },
                                  {
                                    item: 'blue_skies:scalefruit_seeds',
                                    weight: 1,
                                  },
                                  {
                                    item: 'blue_skies:pine_fruit_seeds',
                                    weight: 1,
                                  },
                                  {item: 'rankine:cranberries', weight: 1},
                                  {item: 'rankine:pokeberries', weight: 1},
                                  {item: 'rankine:strawberries', weight: 1},
                                  {item: 'rankine:pineapple', weight: 1},
                                  {item: 'rankine:elderberries', weight: 1},
                                  {item: 'rankine:snowberries', weight: 1},
                                  {item: 'rankine:blueberries', weight: 1},
                                  {item: 'rankine:raspberries', weight: 1},
                                  {item: 'rankine:blackberries', weight: 1},
                                  {item: 'rankine:banana_yucca', weight: 1},
                                  {item: 'rankine:juniper_berries', weight: 1},
                                  {item: 'minecraft:dandelion', weight: 1},
                                  {item: 'minecraft:rose_bush', weight: 1},
                                  {item: 'rankine:cotton_seeds', weight: 1},
                                ],
                                tool: {item: 'rankine:steel_gold_pan'},
                              });
                            },
                            children: [
                              {
                                id: 'falsite_sifter',
                                recipe: () => {
                                  event.custom({
                                    type: 'tconstruct:casting_table',
                                    fluid: {
                                      name: 'kubejs:molten_falsite',
                                      amount: 810,
                                    },
                                    cast: {
                                      item: 'rankine:pewter_gold_pan',
                                      cast_consumed: true,
                                    },
                                    result: 'rankine:steel_gold_pan',
                                    cooling_time: 100,
                                  });
                                },
                                children: [
                                  {
                                    id: 'falsite_ingot',
                                    recipe: () => {
                                      [
                                        'blue_skies:falsite_ingot_from_blasting_raw_falsite',
                                        'blue_skies:falsite_ingot_from_blasting_falsite_ore',
                                        'blue_skies:falsite_ingot_from_smelting_falsite_ore',
                                        'blue_skies:falsite_ingot_from_smelting_raw_falsite',
                                      ].forEach(id => event.remove({id: id}));
                                      event.custom({
                                        type: 'tconstruct:casting_table',
                                        result: 'blue_skies:falsite_ingot',
                                        fluid: {
                                          name: 'kubejs:molten_falsite',
                                          amount: 90,
                                        },
                                        cast: {
                                          item: 'tconstruct:ingot_cast',
                                          cast_consumed: false,
                                        },
                                        cooling_time: 100,
                                      });
                                      event.custom({
                                        type: 'tconstruct:casting_table',
                                        result: 'blue_skies:falsite_nugget',
                                        fluid: {
                                          name: 'kubejs:molten_falsite',
                                          amount: 10,
                                        },
                                        cast: {
                                          item: 'tconstruct:nugget_cast',
                                          cast_consumed: false,
                                        },
                                        cooling_time: 100,
                                      });
                                    },
                                    children: [
                                      {
                                        id: 'molten_falsite',
                                        recipe: () => {
                                          event.custom({
                                            type: 'tconstruct:casting_basin',
                                            result: 'blue_skies:falsite_block',
                                            fluid: {
                                              name: 'kubejs:molten_falsite',
                                              amount: 810,
                                            },
                                            cooling_time: 100,
                                          });
                                          event.custom({
                                            type: 'tconstruct:melting',
                                            ingredient: {
                                              item: 'blue_skies:raw_falsite',
                                            },
                                            result: {
                                              fluid: 'kubejs:molten_falsite',
                                              amount: 90,
                                            },
                                            temperature: 605,
                                            time: 54,
                                          });
                                          event.custom({
                                            type: 'tconstruct:melting',
                                            ingredient: {
                                              item: 'blue_skies:falsite_ingot',
                                            },
                                            result: {
                                              fluid: 'kubejs:molten_falsite',
                                              amount: 90,
                                            },
                                            temperature: 605,
                                            time: 54,
                                          });
                                          event.custom({
                                            type: 'tconstruct:melting',
                                            ingredient: {
                                              item: 'blue_skies:falsite_nugget',
                                            },
                                            result: {
                                              fluid: 'kubejs:molten_falsite',
                                              amount: 10,
                                            },
                                            temperature: 605,
                                            time: 54,
                                          });
                                          event.custom({
                                            type: 'tconstruct:melting',
                                            ingredient: {
                                              item: 'blue_skies:falsite_block',
                                            },
                                            result: {
                                              fluid: 'kubejs:molten_falsite',
                                              amount: 810,
                                            },
                                            temperature: 605,
                                            time: 54,
                                          });
                                          event.custom({
                                            type: 'tconstruct:melting',
                                            ingredient: {
                                              item: 'blue_skies:raw_falsite_block',
                                            },
                                            result: {
                                              fluid: 'kubejs:molten_falsite',
                                              amount: 810,
                                            },
                                            temperature: 605,
                                            time: 54,
                                          });
                                        },
                                        children: [
                                          {
                                            id: 'raw_falsite',
                                            recipe: () => {
                                              event.custom({
                                                input: {
                                                  item: 'blue_skies:falsite_ore',
                                                },
                                                type: 'rankine:crushing',
                                                guaranteed: [
                                                  {
                                                    item: 'blue_skies:raw_falsite',
                                                    count: 1,
                                                    tier: 'minecraft:iron',
                                                  },
                                                  {
                                                    item: 'blue_skies:raw_falsite',
                                                    count: 1,
                                                    tier: 'minecraft:netherite',
                                                  },
                                                ],
                                              });
                                            },
                                            children: [
                                              {
                                                // can be found in everbright & everdawn
                                                id: 'falsite_ore',
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
                    id: 'totem_pole',
                    recipe: () => {},
                    children: [
                      {
                        id: 'totem_whittling_knife',
                        recipe: () => {},
                        children: [
                          {
                            id: 'nature_loot_bag',
                            recipe: () => {},
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
          {
            id: 'gold_powder',
            recipe: () => {
              event.custom({
                type: 'hexerei:pestle_and_mortar',
                output: {item: 'naturesaura:gold_powder'},
                ingredients: [
                  {
                    item: 'naturesaura:gold_leaf',
                  },
                ],
                grindingTime: 300,
              });
            },
            children: [
              {
                // put gold fibers on tree leaves and let it spread
                id: 'gold_leaf',
                children: [
                  {
                    id: 'gold_fibers',
                    recipe: () => {
                      event.custom({
                        type: 'hexerei:pestle_and_mortar',
                        output: {item: 'naturesaura:gold_fiber'},
                        ingredients: [
                          {
                            item: 'blue_skies:winter_leaves',
                          },
                          {
                            item: 'blue_skies:snowbloom',
                          },
                          {
                            item: 'blue_skies:brumble_vine_top',
                          },
                          {
                            item: 'totemic:cedar_leaves',
                          },
                          {
                            item: 'blue_skies:snowcap_pinhead',
                          },
                        ],
                        grindingTime: 300,
                      });
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
  });
});
