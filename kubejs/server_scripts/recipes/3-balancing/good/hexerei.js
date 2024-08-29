onEvent('recipes', event => {
  setBalanceRecipes({
    cauldron: () => {
      [
        'hexerei:reading_glasses_from_mixing_cauldron',
        'hexerei:broom_waterproof_tip_from_mixing_cauldron',
        'hexerei:willow_broom_from_mixing_cauldron',
        'hexerei:warhammer_from_mixing_cauldron',
        'hexerei:sage_burning_plate_from_mixing_cauldron',
        'hexerei:infused_fabric_from_mixing_cauldron',
        'hexerei:candelabra_from_mixing_cauldron',
      ].forEach(id => event.remove({id: id}));

      event
        .custom({
          type: 'hexerei:mixingcauldron',
          ingredients: [
            {
              item: 'minecraft:conduit',
            },
            {
              item: 'minecraft:dark_prismarine',
            },
            {
              item: 'minecraft:prismarine_shard',
            },
            {
              item: 'minecraft:dark_prismarine',
            },
            {
              item: 'blue_skies:lunar_stone',
            },
            {
              item: 'minecraft:dark_prismarine',
            },
            {
              item: 'minecraft:prismarine_shard',
            },
            {
              item: 'minecraft:dark_prismarine',
            },
          ],
          output: {
            item: 'hexerei:broom_waterproof_tip',
            count: 1,
          },
          liquid: {
            fluid: 'minecraft:water',
          },
          liquidOutput: {
            fluid: 'minecraft:water',
          },
          fluidLevelsConsumed: 2000,
        })
        .id('inconvenient:cauldron_broom_waterproof_tip');
      event
        .custom({
          type: 'hexerei:mixingcauldron',
          ingredients: [
            {
              item: 'hexerei:blood_bottle',
            },
            {
              item: 'hexerei:willow_log',
            },
            {
              item: 'undergarden:regalium_block',
            },
            {
              item: 'kubejs:wheat',
            },
            {
              item: 'hexerei:mandrake_root',
            },
            {
              item: 'kubejs:wheat',
            },
            {
              item: 'undergarden:regalium_block',
            },
            {
              item: 'hexerei:willow_log',
            },
          ],
          output: {
            item: 'hexerei:willow_broom',
            count: 1,
          },
          liquid: {
            fluid: 'minecraft:water',
          },
          liquidOutput: {
            fluid: 'minecraft:water',
          },
          fluidLevelsConsumed: 1000,
        })
        .id('inconvenient:cauldron_willow_broom');

      event
        .custom({
          type: 'hexerei:mixingcauldron',
          ingredients: [
            {
              item: 'undergarden:regalium_crystal',
            },
            {
              item: 'undergarden:regalium_crystal',
            },
            {
              item: 'undergarden:regalium_crystal',
            },
            {
              item: 'undergarden:regalium_crystal',
            },
            {
              item: 'undergarden:regalium_crystal',
            },
            {
              item: 'undergarden:regalium_crystal',
            },
            {
              item: 'undergarden:regalium_crystal',
            },
            {
              item: 'undergarden:regalium_crystal',
            },
          ],
          output: {
            item: 'hexerei:sage_burning_plate',
            count: 1,
          },
          liquid: {
            fluid: 'minecraft:lava',
          },
          liquidOutput: {
            fluid: 'minecraft:lava',
          },
          fluidLevelsConsumed: 1500,
        })
        .id('inconvenient:cauldron_sage_burning_plate');
      event
        .custom({
          type: 'hexerei:mixingcauldron',
          ingredients: [
            {
              item: 'minecraft:netherite_ingot',
            },
            {
              item: 'minecraft:gold_ingot',
            },
            {
              item: 'minecraft:iron_ingot',
            },
            {
              item: 'hexerei:mahogany_planks',
            },
            {
              item: 'hexerei:mahogany_planks',
            },
            {
              item: 'hexerei:mahogany_planks',
            },
            {
              item: 'minecraft:iron_ingot',
            },
            {
              item: 'minecraft:gold_ingot',
            },
          ],
          output: {
            item: 'hexerei:warhammer',
            count: 1,
          },
          liquid: {
            fluid: 'minecraft:lava',
          },
          liquidOutput: {
            fluid: 'minecraft:lava',
          },
          fluidLevelsConsumed: 1500,
        })
        .id('inconvenient:cauldron_warhammer');

      event
        .custom({
          type: 'hexerei:mixingcauldron',
          ingredients: [
            {
              item: 'occultism:purified_ink',
            },
            {
              item: 'minecraft:leather',
            },
            {
              item: 'paragon_textiles:silk',
            },
            {
              item: 'minecraft:leather',
            },
            {
              item: 'occultism:purified_ink',
            },
            {
              item: 'minecraft:leather',
            },
            {
              item: 'paragon_textiles:silk',
            },
            {
              item: 'minecraft:leather',
            },
          ],
          liquid: {
            fluid: 'minecraft:water',
          },
          liquidOutput: {
            fluid: 'minecraft:water',
          },
          output: {
            item: 'hexerei:infused_fabric',
            count: 1,
          },
          fluidLevelsConsumed: 500,
        })
        .id('inconvenient:cauldron_infused_fabric');

      event
        .custom({
          type: 'hexerei:mixingcauldron',
          ingredients: [
            {
              item: 'minecraft:chain',
            },
            {
              item: 'hexerei:candle',
            },
            {
              item: 'hexerei:candle',
            },
            {
              item: 'rankine:pewter_ingot',
            },
            {
              item: 'rankine:pewter_ingot',
            },
            {
              item: 'rankine:pewter_ingot',
            },
            {
              item: 'hexerei:candle',
            },
            {
              item: 'hexerei:candle',
            },
          ],
          liquid: {
            fluid: 'minecraft:water',
          },
          liquidOutput: {
            fluid: 'minecraft:water',
          },
          output: {
            item: 'hexerei:candelabra',
            count: 1,
          },
          fluidLevelsConsumed: 2000,
        })
        .id('inconvenient:cauldron_candelabra');
      event
        .custom({
          type: 'hexerei:mixingcauldron',
          ingredients: [
            {
              item: 'rankine:pewter_ingot',
            },
            {
              item: 'minecraft:glass_pane',
            },
            {
              item: 'rankine:pewter_ingot',
            },
            {
              item: 'rankine:pewter_ingot',
            },
            {
              item: 'minecraft:spyglass',
            },
            {
              item: 'rankine:pewter_ingot',
            },
            {
              item: 'rankine:pewter_ingot',
            },
            {
              item: 'minecraft:glass_pane',
            },
          ],
          output: {
            item: 'hexerei:reading_glasses',
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
        .id('inconvenient:cauldron_reading_glasses');
    },
    dipper: () => {},
    drying: () => {},
    pestle: () => {
      // event.remove({
      //   output: [
      //     'naturesaura:gold_fiber',
      //     'minecraft:bone_meal',
      //     'naturesaura:gold_powder',
      //     'charcoal_pit:nether_shard',
      //   ],
      // });

      event
        .custom({
          type: 'hexerei:pestle_and_mortar',
          output: {item: 'minecraft:bone_meal', count: 3},
          ingredients: [
            {
              item: 'minecraft:bone',
            },
          ],
          grindingTime: 300,
        })
        .id('inconvenient:pestle_bone_meal');
    },
  });
});
