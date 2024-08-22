onEvent('recipes', event => {
  setMilestoneRecipes({
    id: 'cinder_dust',
    recipe: () => {
      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'ecofriendly:garbage_item_ym',
          },
          {
            item: 'create:powdered_obsidian',
          },
          {
            item: 'kubejs:fiery_dust',
          },
          {
            item: 'create:powdered_obsidian',
          },
          {
            item: 'kubejs:fiery_dust',
          },
          {
            item: 'create:powdered_obsidian',
          },
          {
            item: 'ecofriendly:garbage_item_ym',
          },
          {
            item: 'create:powdered_obsidian',
          },
        ],
        output: {
          item: 'kubejs:cinder_dust',
          count: 1,
        },
        liquid: {
          fluid: 'minecraft:lava',
        },
        liquidOutput: {
          fluid: 'minecraft:lava',
        },
        fluidLevelsConsumed: 1000,
      });
    },
    children: [
      {id: 'garbage', recipe: () => {}, children: []},
      {
        id: 'fiery_dust',
        recipe: () => {
          event.custom({
            type: 'tconstruct:alloy',
            result: {fluid: 'twilightforest:molten_fiery', amount: 180},

            inputs: [
              {name: 'kubejs:fiery_blood', amount: 90},
              {name: 'kubejs:fiery_tears', amount: 90},
            ],
            temperature: 605,
          });

          event.custom({
            type: 'create:milling',
            ingredients: [{item: 'twilightforest:fiery_ingot'}],
            results: [{item: 'kubejs:fiery_dust'}],
            processingTime: 50,
          });
        },
        children: [
          {
            id: 'fiery_ingot',
            recipe: () => {},
            children: [
              {
                id: 'molten_fiery',
                recipe: () => {},
                children: [
                  {
                    id: 'fiery_tears',
                    recipe: () => {
                      event.custom({
                        type: 'tconstruct:melting',
                        ingredient: {item: 'twilightforest:fiery_tears'},
                        result: {fluid: 'kubejs:fiery_tears', amount: 90},
                        temperature: 605,
                        time: 54,
                      });
                    },
                    children: [],
                  },
                  {
                    id: 'fiery_blood',
                    recipe: () => {
                      event.custom({
                        type: 'tconstruct:melting',
                        ingredient: {item: 'twilightforest:fiery_blood'},
                        result: {fluid: 'kubejs:fiery_blood', amount: 90},
                        temperature: 605,
                        time: 54,
                      });
                    },
                    children: [],
                  },
                  {
                    id: 'fiery_essence',
                    recipe: () => {
                      event.custom({
                        type: 'tconstruct:melting',
                        ingredient: {item: 'occultism:afrit_essence'},
                        result: {fluid: 'kubejs:fiery_essence', amount: 90},
                        temperature: 605,
                        time: 54,
                      });
                    },
                    children: [
                      {
                        id: 'afrit_essence',
                        recipe: () => {
                          event.custom({
                            type: 'occultism:ritual',
                            ritual_type: 'occultism:summon',
                            activation_item: {
                              item: 'occultism:book_of_binding_bound_afrit',
                            },
                            pentacle_id: 'occultism:summon_wild_afrit',
                            duration: 60,
                            entity_to_summon: 'occultism:afrit_wild',
                            ritual_dummy: {
                              item: 'occultism:ritual_dummy/summon_wild_afrit',
                            },
                            ingredients: [
                              {
                                item: 'blue_skies:horizonite_ingot',
                              },
                              {
                                item: 'bloodmagic:infusedslate',
                              },
                              {
                                item: 'blue_skies:dusk_arc',
                              },
                              {
                                item: 'extendedcrafting:black_iron_block',
                              },
                              {
                                type: 'forge:nbt',
                                item: 'naturesaura:aura_bottle',
                                count: 1,
                                nbt: '{stored_type:"naturesaura:nether"}',
                              },
                            ],
                            result: {
                              item: 'occultism:jei_dummy/none',
                            },
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
          {
            id: 'millstone',
            recipe: () => {
              event
                .custom({
                  type: 'extendedcrafting:shaped_table',
                  result: {
                    item: 'create:millstone',
                  },
                  pattern: [' a ', ' b ', 'cdc'],
                  key: {
                    a: 'create:cogwheel',
                    b: 'create:andesite_casing',
                    c: 'rankine:gray_marble',
                    d: 'occultism:afrit_essence',
                  },
                })
                .id('inconvenient:millstone');
            },
            children: [
              {
                id: 'basic_table',
                recipe: () => {
                  ['extendedcrafting:basic_table'].forEach(id =>
                    event.remove({id: id})
                  );
                  event
                    .shaped(
                      'extendedcrafting:basic_table',
                      ['aba', 'bcb', 'dad'],
                      {
                        a: 'extendedcrafting:black_iron_ingot',
                        b: 'extendedcrafting:basic_component',
                        c: 'extendedcrafting:basic_catalyst',
                        d: 'extendedcrafting:black_iron_slate',
                      }
                    )
                    .id('inconvenient:basic_table');
                },
                children: [
                  {
                    id: 'black_iron_ingot',
                    recipe: () => {},
                    children: [
                      {
                        id: 'horizonite_ingot',
                        recipe: () => {
                          event.custom({
                            type: 'tconstruct:casting_table',
                            fluid: {
                              name: 'tconstruct:molten_obsidian',
                              amount: 250,
                            },
                            cast: {
                              item: 'blue_skies:horizonite_ingot',
                              cast_consumed: true,
                            },
                            result: 'extendedcrafting:black_iron_ingot',
                            cooling_time: 100,
                          });
                          event.custom({
                            type: 'tconstruct:casting_table',
                            result: 'blue_skies:horizonite_nugget',
                            fluid: {
                              name: 'kubejs:molten_horizonite',
                              amount: 10,
                            },
                            cast: {
                              item: 'tconstruct:nugget_cast',
                              cast_consumed: false,
                            },
                            cooling_time: 100,
                          });
                          event.custom({
                            type: 'tconstruct:casting_table',
                            result: 'blue_skies:horizonite_ingot',
                            fluid: {
                              name: 'kubejs:molten_horizonite',
                              amount: 90,
                            },
                            cast: {
                              item: 'tconstruct:ingot_cast',
                              cast_consumed: false,
                            },
                            cooling_time: 100,
                          });
                          event.custom({
                            type: 'tconstruct:casting_basin',
                            result: 'blue_skies:horizonite_block',
                            cooling_time: 100,
                            fluid: {
                              name: 'kubejs:molten_horizonite',
                              amount: 810,
                            },
                          });
                        },
                        children: [
                          {
                            id: 'molten_horizonite',
                            recipe: () => {
                              event.custom({
                                type: 'tconstruct:melting',
                                ingredient: {item: 'blue_skies:raw_horizonite'},
                                result: {
                                  fluid: 'kubejs:molten_horizonite',
                                  amount: 90,
                                },
                                temperature: 605,
                                time: 54,
                              });
                              event.custom({
                                type: 'tconstruct:melting',
                                ingredient: {
                                  item: 'blue_skies:horizonite_nugget',
                                },
                                result: {
                                  fluid: 'kubejs:molten_horizonite',
                                  amount: 10,
                                },
                                temperature: 605,
                                time: 54,
                              });
                              event.custom({
                                type: 'tconstruct:melting',
                                ingredient: {
                                  item: 'blue_skies:horizonite_ingot',
                                },
                                result: {
                                  fluid: 'kubejs:molten_horizonite',
                                  amount: 90,
                                },
                                temperature: 605,
                                time: 54,
                              });
                              event.custom({
                                type: 'tconstruct:melting',
                                ingredient: {
                                  item: 'blue_skies:horizonite_block',
                                },
                                result: {
                                  fluid: 'kubejs:molten_horizonite',
                                  amount: 810,
                                },
                                temperature: 605,
                                time: 54,
                              });
                              event.custom({
                                type: 'tconstruct:melting',
                                ingredient: {
                                  item: 'blue_skies:raw_horizonite_block',
                                },
                                result: {
                                  fluid: 'kubejs:molten_horizonite',
                                  amount: 810,
                                },
                                temperature: 605,
                                time: 54,
                              });
                            },
                            children: [
                              {
                                id: 'raw_horizonite',
                                recipe: () => {
                                  event.custom({
                                    input: {item: 'blue_skies:horizonite_ore'},
                                    type: 'rankine:crushing',
                                    guaranteed: [
                                      {
                                        item: 'blue_skies:raw_horizonite',
                                        count: 1,
                                        tier: 'minecraft:diamond',
                                      },
                                      {
                                        item: 'blue_skies:raw_horizonite',
                                        count: 1,
                                        tier: 'minecraft:netherite',
                                      },
                                    ],
                                  });
                                },
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {id: 'molten_obsidian', recipe: () => {}, children: []},
                    ],
                  },
                  {
                    id: 'basic_component',
                    recipe: () => {
                      event.shaped(
                        'extendedcrafting:basic_component',
                        ['ab', 'cc'],
                        {
                          a: 'extendedcrafting:black_iron_slate',
                          b: 'twilightforest:carminite',
                          c: 'twilightforest:ironwood_ingot',
                        }
                      );
                    },
                    children: [
                      {
                        id: 'ironwood',
                        recipe: () => {
                          event.custom({
                            type: 'tconstruct:casting_table',
                            result: 'twilightforest:ironwood_ingot',
                            fluid: {
                              name: 'kubejs:molten_ironwood',
                              amount: 90,
                            },
                            cast: {
                              item: 'tconstruct:ingot_cast',
                              cast_consumed: false,
                            },
                            cooling_time: 100,
                          });
                          event.custom({
                            type: 'tconstruct:casting_basin',
                            result: 'twilightforest:ironwood_block',
                            cooling_time: 100,
                            fluid: {
                              name: 'kubejs:molten_ironwood',
                              amount: 810,
                            },
                          });
                        },
                        children: [
                          {
                            id: 'molten_ironwood',
                            recipe: () => {
                              event.custom({
                                type: 'tconstruct:melting',
                                ingredient: {
                                  item: 'twilightforest:raw_ironwood',
                                },
                                result: {
                                  fluid: 'kubejs:molten_ironwood',
                                  amount: 90,
                                },
                                temperature: 605,
                                time: 54,
                              });
                              event.custom({
                                type: 'tconstruct:melting',
                                ingredient: {
                                  item: 'twilightforest:ironwood_ingot',
                                },
                                result: {
                                  fluid: 'kubejs:molten_ironwood',
                                  amount: 90,
                                },
                                temperature: 605,
                                time: 54,
                              });
                              event.custom({
                                type: 'tconstruct:melting',
                                ingredient: {
                                  item: 'twilightforest:ironwood_block',
                                },
                                result: {
                                  fluid: 'kubejs:molten_ironwood',
                                  amount: 810,
                                },
                                temperature: 605,
                                time: 54,
                              });
                            },
                            children: [
                              {
                                id: 'raw_ironwood',
                                recipe: () => {
                                  [
                                    'twilightforest:material/raw_ironwood',
                                  ].forEach(id => event.remove({id: id}));
                                  event.shapeless(
                                    '2x twilightforest:raw_ironwood',
                                    [
                                      'twilightforest:liveroot',
                                      'rankine:hematite',
                                      'blue_skies:horizonite_ingot',
                                    ]
                                  );
                                },
                                children: [
                                  {
                                    id: 'hematite',
                                    recipe: () => {},
                                    children: [
                                      {
                                        id: 'hematite_ore',
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
                    ],
                  },
                  {id: 'basic_catalyst', recipe: () => {}, children: []},
                  {id: 'black_iron_slate', recipe: () => {}, children: []},
                ],
              },
              {
                id: 'gray_marble',
                recipe: () => {},
                children: [
                  {
                    id: 'white_marble',
                    recipe: () => {},
                    children: [
                      {id: 'moonstone', recipe: () => {}, children: []},
                    ],
                  },
                  {
                    id: 'black_marble',
                    recipe: () => {
                      event.custom({
                        type: 'rankine:rock_generator',
                        genType: 'metamorphic',
                        input1: {item: 'twilightforest:carminite_block'},
                        result: {
                          block: 'rankine:black_marble',
                        },
                      });
                    },
                    children: [
                      {id: 'carminite', recipe: () => {}, children: []},
                    ],
                  },
                ],
              },
              {
                id: 'andesite_casing',
                recipe: () => {},
                children: [
                  {
                    id: 'andesite_alloy',
                    recipe: () => {
                      [
                        'create:crafting/materials/andesite_alloy_from_zinc',
                        'create:mixing/andesite_alloy_from_zinc',
                      ].forEach(id => event.remove({id: id}));
                      event
                        .custom({
                          type: 'extendedcrafting:shaped_table',
                          result: {
                            item: 'create:andesite_alloy',
                          },
                          pattern: ['aba', 'bab', 'aba'],
                          key: {
                            a: 'minecraft:andesite',
                            b: 'ecofriendly:garbage_item_ym',
                          },
                        })
                        .id('inconvenient:andesite_alloy');
                    },
                    children: [],
                  },
                ],
              },
              {
                id: 'cogwheel',
                recipe: () => {
                  event
                    .custom({
                      type: 'extendedcrafting:shaped_table',
                      result: {
                        item: 'create:cogwheel',
                      },
                      pattern: ['ab'],
                      key: {
                        a: 'create:shaft',
                        b: 'undergarden:wigglewood_planks',
                      },
                    })
                    .id('inconvenient:cogwheel');
                  event
                    .custom({
                      type: 'extendedcrafting:shaped_table',
                      result: {
                        item: 'create:large_cogwheel',
                      },
                      pattern: ['ab'],
                      key: {
                        a: 'create:cogwheel',
                        b: 'undergarden:wigglewood_planks',
                      },
                    })
                    .id('inconvenient:large_cogwheel');
                },
                children: [
                  {
                    id: 'shaft',
                    recipe: () => {
                      event
                        .custom({
                          type: 'extendedcrafting:shaped_table',
                          result: {
                            item: 'create:shaft',
                          },
                          pattern: ['a', 'a'],
                          key: {a: 'create:andesite_alloy'},
                        })
                        .id('inconvenient:shaft');
                    },
                    children: [],
                  },
                  {id: 'wigglewood_planks', recipe: () => {}, children: []},
                ],
              },
            ],
          },
          {
            id: 'hand_crank',
            recipe: () => {
              event
                .custom({
                  type: 'extendedcrafting:shaped_table',
                  result: {
                    item: 'create:hand_crank',
                  },
                  pattern: ['aaa', '  b'],
                  key: {
                    a: 'undergarden:wigglewood_planks',
                    b: 'create:andesite_alloy',
                  },
                })
                .id('inconvenient:hand_crank');
            },
          },
        ],
      },
    ],
  });
});
