onEvent('recipes', (event) => {
  setBalanceRecipes({
    cauldron: () => {
      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'minecraft:conduit'
          },
          {
            item: 'minecraft:dark_prismarine'
          },
          {
            item: 'minecraft:prismarine_shard'
          },
          {
            item: 'minecraft:dark_prismarine'
          },
          {
            item: 'blue_skies:lunar_stone'
          },
          {
            item: 'minecraft:dark_prismarine'
          },
          {
            item: 'minecraft:prismarine_shard'
          },
          {
            item: 'minecraft:dark_prismarine'
          }
        ],
        output: {
          item: 'hexerei:broom_waterproof_tip',
          count: 1
        },
        liquid: {
          fluid: 'minecraft:water'
        },
        liquidOutput: {
          fluid: 'minecraft:water'
        },
        fluidLevelsConsumed: 2000
      });
      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'hexerei:blood_bottle'
          },
          {
            item: 'hexerei:willow_log'
          },
          {
            item: 'undergarden:regalium_block'
          },
          {
            item: 'kubejs:wheat'
          },
          {
            item: 'hexerei:mandrake_root'
          },
          {
            item: 'kubejs:wheat'
          },
          {
            item: 'undergarden:regalium_block'
          },
          {
            item: 'hexerei:willow_log'
          }
        ],
        output: {
          item: 'hexerei:willow_broom',
          count: 1
        },
        liquid: {
          fluid: 'minecraft:water'
        },
        liquidOutput: {
          fluid: 'minecraft:water'
        },
        fluidLevelsConsumed: 1000
      });

      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'undergarden:regalium_crystal'
          },
          {
            item: 'undergarden:regalium_crystal'
          },
          {
            item: 'undergarden:regalium_crystal'
          },
          {
            item: 'undergarden:regalium_crystal'
          },
          {
            item: 'undergarden:regalium_crystal'
          },
          {
            item: 'undergarden:regalium_crystal'
          },
          {
            item: 'undergarden:regalium_crystal'
          },
          {
            item: 'undergarden:regalium_crystal'
          }
        ],
        output: {
          item: 'hexerei:sage_burning_plate',
          count: 1
        },
        liquid: {
          fluid: 'minecraft:lava'
        },
        liquidOutput: {
          fluid: 'minecraft:lava'
        },
        fluidLevelsConsumed: 1500
      });
      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'minecraft:netherite_ingot'
          },
          {
            item: 'minecraft:gold_ingot'
          },
          {
            item: 'minecraft:iron_ingot'
          },
          {
            item: 'hexerei:mahogany_planks'
          },
          {
            item: 'hexerei:mahogany_planks'
          },
          {
            item: 'hexerei:mahogany_planks'
          },
          {
            item: 'minecraft:iron_ingot'
          },
          {
            item: 'minecraft:gold_ingot'
          }
        ],
        output: {
          item: 'hexerei:warhammer',
          count: 1
        },
        liquid: {
          fluid: 'minecraft:lava'
        },
        liquidOutput: {
          fluid: 'minecraft:lava'
        },
        fluidLevelsConsumed: 1500
      });

      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'occultism:purified_ink'
          },
          {
            item: 'minecraft:leather'
          },
          {
            item: 'paragon_textiles:silk'
          },
          {
            item: 'minecraft:leather'
          },
          {
            item: 'occultism:purified_ink'
          },
          {
            item: 'minecraft:leather'
          },
          {
            item: 'paragon_textiles:silk'
          },
          {
            item: 'minecraft:leather'
          }
        ],
        liquid: {
          fluid: 'minecraft:water'
        },
        liquidOutput: {
          fluid: 'minecraft:water'
        },
        output: {
          item: 'hexerei:infused_fabric',
          count: 1
        },
        fluidLevelsConsumed: 500
      });
      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'blue_skies:soul_fragment'
          },
          {
            item: 'tconstruct:amethyst_bronze_ingot'
          },
          {
            item: 'rankine:sterling_silver_ingot'
          },
          {
            item: 'tconstruct:amethyst_bronze_ingot'
          },
          {
            item: 'rankine:sterling_silver_ingot'
          },
          {
            item: 'tconstruct:amethyst_bronze_ingot'
          },
          {
            item: 'rankine:sterling_silver_ingot'
          },
          {
            item: 'tconstruct:amethyst_bronze_ingot'
          }
        ],
        liquid: {
          fluid: 'minecraft:water'
        },
        liquidOutput: {
          fluid: 'minecraft:water'
        },
        output: {
          item: 'rankine:sediment_fan',
          count: 1
        },
        fluidLevelsConsumed: 1000
      });

      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'minecraft:chain'
          },
          {
            item: 'hexerei:candle'
          },
          {
            item: 'hexerei:candle'
          },
          {
            item: 'rankine:pewter_ingot'
          },
          {
            item: 'rankine:pewter_ingot'
          },
          {
            item: 'rankine:pewter_ingot'
          },
          {
            item: 'hexerei:candle'
          },
          {
            item: 'hexerei:candle'
          }
        ],
        liquid: {
          fluid: 'minecraft:water'
        },
        liquidOutput: {
          fluid: 'minecraft:water'
        },
        output: {
          item: 'hexerei:candelabra',
          count: 1
        },
        fluidLevelsConsumed: 2000
      });
      event.custom({
        type: 'hexerei:mixingcauldron',
        ingredients: [
          {
            item: 'rankine:pewter_ingot'
          },
          {
            item: 'minecraft:glass_pane'
          },
          {
            item: 'rankine:pewter_ingot'
          },
          {
            item: 'rankine:pewter_ingot'
          },
          {
            item: 'minecraft:spyglass'
          },
          {
            item: 'rankine:pewter_ingot'
          },
          {
            item: 'rankine:pewter_ingot'
          },
          {
            item: 'minecraft:glass_pane'
          }
        ],
        output: {
          item: 'hexerei:reading_glasses',
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
    dipper: () => {},
    drying: () => {},
    pestle: () => {
      event.remove({
        output: [
          'naturesaura:gold_fiber',
          'minecraft:bone_meal',
          'naturesaura:gold_powder',
          'charcoal_pit:nether_shard'
        ]
      });

      event.custom({
        type: 'hexerei:pestle_and_mortar',
        output: { item: 'minecraft:bone_meal', count: 3 },
        ingredients: [
          {
            item: 'minecraft:bone'
          }
        ],
        grindingTime: 300
      });

      event.custom({
        type: 'hexerei:pestle_and_mortar',
        output: { item: 'charcoal_pit:nether_shard', count: 3 },
        ingredients: [
          {
            item: 'minecraft:nether_star'
          }
        ],
        grindingTime: 300
      });
    }
  });
});
