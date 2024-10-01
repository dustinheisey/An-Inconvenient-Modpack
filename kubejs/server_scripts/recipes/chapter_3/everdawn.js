onEvent('recipes', (event) => {
  setMilestoneRecipes({
    id: 'lunar_stone_brick',
    recipe: () => {
      event.shaped(`2x blue_skies:lunar_stonebrick`, ['ab', 'ba'], {
        a: `blue_skies:lunar_stone`,
        b: 'rankine:mortar'
      });
    },
    children: [
      {
        id: 'lunar_stone',
        recipe: () => {
          event.custom({
            type: 'hexerei:mixingcauldron',
            ingredients: [
              {
                item: 'create:powdered_obsidian'
              },
              {
                item: 'malum:twisted_rock'
              },
              {
                item: 'create:powdered_obsidian'
              },
              {
                item: 'malum:twisted_rock'
              },
              {
                item: 'create:powdered_obsidian'
              },
              {
                item: 'malum:twisted_rock'
              },
              {
                item: 'create:powdered_obsidian'
              },
              {
                item: 'malum:twisted_rock'
              }
            ],
            output: {
              item: 'blue_skies:lunar_stone',
              count: 1
            },
            output_count: 4,
            liquid: {
              fluid: 'minecraft:lava'
            },
            liquidOutput: {
              fluid: 'minecraft:lava'
            },
            fluidLevelsConsumed: 1000
          });
        },
        children: [
          {
            id: 'twisted_rock',
            recipe: () => {
              event.custom({
                type: 'malum:spirit_infusion',
                input: { item: 'rankine:shale', count: 16 },
                output: { item: 'malum:twisted_rock', count: 16 },
                extra_items: [{ item: 'malum:processed_soulstone', count: 4 }],
                spirits: [
                  {
                    type: 'wicked',
                    count: 1
                  },
                  {
                    type: 'arcane',
                    count: 1
                  }
                ]
              });
            },
            children: [
              {
                id: 'spirit_altar',
                recipe: () => {
                  event.shaped('malum:spirit_altar', [' a ', 'bcb', 'cdc'], {
                    a: 'undergarden:forgotten_nugget',
                    b: 'naturesaura:infused_iron',
                    c: 'malum:runewood_planks',
                    d: 'undergarden:regalium_crystal'
                  });
                },
                children: [
                  {
                    id: 'forgotten_nugget',
                    recipe: () => {
                      event.custom({
                        type: 'tconstruct:casting_table',
                        result: 'undergarden:forgotten_nugget',
                        fluid: {
                          name: 'kubejs:molten_forgotten_metal',
                          amount: 10
                        },
                        cast: {
                          item: 'tconstruct:nugget_cast',
                          cast_consumed: false
                        },
                        cooling_time: 100
                      });
                      event.custom({
                        type: 'tconstruct:casting_table',
                        result: 'undergarden:forgotten_ingot',
                        fluid: {
                          name: 'kubejs:molten_forgotten_metal',
                          amount: 90
                        },
                        cast: {
                          item: 'tconstruct:ingot_cast',
                          cast_consumed: false
                        },
                        cooling_time: 100
                      });
                      event.custom({
                        type: 'tconstruct:casting_basin',
                        result: 'undergarden:forgotten_block',
                        cooling_time: 100,
                        fluid: {
                          name: 'kubejs:molten_forgotten_metal',
                          amount: 810
                        }
                      });
                    },
                    children: [
                      {
                        id: 'molten_forgotten_metal',
                        recipe: () => {
                          event.custom({
                            type: 'tconstruct:melting',
                            ingredient: {
                              item: 'undergarden:forgotten_nugget'
                            },
                            result: {
                              fluid: 'kubejs:molten_forgotten_metal',
                              amount: 10
                            },
                            temperature: 605,
                            time: 54
                          });
                          event.custom({
                            type: 'tconstruct:melting',
                            ingredient: { item: 'undergarden:forgotten_ingot' },
                            result: {
                              fluid: 'kubejs:molten_forgotten_metal',
                              amount: 90
                            },
                            temperature: 605,
                            time: 54
                          });
                          event.custom({
                            type: 'tconstruct:melting',
                            ingredient: { item: 'undergarden:forgotten_block' },
                            result: {
                              fluid: 'kubejs:molten_forgotten_metal',
                              amount: 810
                            },
                            temperature: 605,
                            time: 54
                          });
                        }
                      }
                    ]
                  },
                  {
                    id: 'regalium_crystal',
                    recipe: () => {
                      event.custom({
                        input: { item: 'undergarden:depthrock_regalium_ore' },
                        type: 'rankine:crushing',
                        guaranteed: [
                          {
                            item: 'undergarden:regalium_crystal',
                            count: 1,
                            tier: 'minecraft:diamond'
                          },
                          {
                            item: 'undergarden:regalium_crystal',
                            count: 1,
                            tier: 'minecraft:netherite'
                          }
                        ]
                      });

                      event.custom({
                        input: { item: 'undergarden:shiverstone_regalium_ore' },
                        type: 'rankine:crushing',
                        guaranteed: [
                          {
                            item: 'undergarden:regalium_crystal',
                            count: 1,
                            tier: 'minecraft:diamond'
                          },
                          {
                            item: 'undergarden:regalium_crystal',
                            count: 1,
                            tier: 'minecraft:netherite'
                          }
                        ]
                      });
                    }
                  }
                ]
              },
              {
                id: 'shale',
                recipe: () => {
                  event.custom({
                    type: 'rankine:rock_generator',
                    genType: 'sedimentary',
                    input1: { item: 'naturesaura:infused_stone' },
                    result: {
                      block: 'rankine:shale'
                    }
                  });
                }
              }
            ]
          },
          {
            id: 'powdered_obsidian',
            recipe: () => {
              event.custom({
                type: 'occultism:crushing',
                ingredient: { item: 'rankine:blood_obsidian' },
                result: { item: 'create:powdered_obsidian', count: 1 },
                crushing_time: 200
              });
              event.custom({
                type: 'create:milling',
                ingredients: [{ item: 'rankine:blood_obsidian' }],
                results: [{ item: 'create:powdered_obsidian' }],
                processingTime: 50
              });
            },
            children: [
              {
                id: 'blood_obsidian',
                recipe: () => {
                  event.custom({
                    type: 'bloodmagic:altar',
                    input: {
                      item: 'rankine:snowflake_obsidian'
                    },
                    output: {
                      item: 'rankine:blood_obsidian'
                    },
                    altarSyphon: 2000,
                    upgradeLevel: 1,
                    consumptionRate: 2,
                    drainRate: 2
                  });
                },
                children: [
                  {
                    id: 'blood_altar',
                    recipe: () => {
                      event.shaped('bloodmagic:altar', ['a a', 'bcb', 'aba'], {
                        a: 'undergarden:utherium_crystal',
                        b: 'rankine:slate',
                        c: 'hexerei:blood_bottle'
                      });
                    },
                    children: [
                      {
                        id: 'bottle_of_blood',
                        recipe: () => {},
                        children: [
                          {
                            id: 'blood_sigil',
                            recipe: () => {
                              event.custom({
                                type: 'malum:spirit_infusion',
                                input: {
                                  item: 'undergarden:masticator_scales'
                                },
                                output: { item: 'hexerei:blood_sigil' },
                                extra_items: [
                                  {
                                    item: 'rankine:shale',
                                    count: 5
                                  },
                                  {
                                    item: 'undergarden:utherium_crystal',
                                    count: 8
                                  }
                                ],
                                spirits: [
                                  {
                                    type: 'wicked',
                                    count: 4
                                  },
                                  {
                                    type: 'earthen',
                                    count: 4
                                  },
                                  {
                                    type: 'arcane',
                                    count: 4
                                  }
                                ]
                              });
                            },
                            children: [
                              {
                                id: 'masticator_scales',
                                recipe: () => {},
                                children: [
                                  {
                                    id: 'undergarden_gateway',
                                    recipe: () => {},
                                    children: []
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      { id: 'slate', recipe: () => {}, children: [] }
                    ]
                  },
                  {
                    id: 'sacrificial_knife',
                    recipe: () => {
                      event.replaceInput(
                        {
                          output: 'bloodmagic:sacrificialdagger'
                        },
                        'minecraft:gold_ingot',
                        'hexerei:blood_bottle'
                      );
                      event.replaceInput(
                        {
                          output: 'bloodmagic:sacrificialdagger'
                        },
                        'minecraft:iron_ingot',
                        'naturesaura:infused_iron'
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
  });
});
