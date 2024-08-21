onEvent('recipes', event => {
  setBalanceRecipes({
    basic_table: () => {
      event.remove({
        output: [
          'extendedcrafting:ultimate_singularity',
          'extendedcrafting:crystaltine_ingot',
          'immersiveengineering:windmill',
          'immersiveengineering:watermill',
          'immersive_aircraft:hull',
          'immersive_aircraft:propeller',
          'immersive_aircraft:sail',
          'rankine:air_distillation_packing',
          'rankine:gas_bottler',
          'rankine:gas_vent',
          'rankine:distillation_tower',
          'rankine:evaporation_tower',
          'extendedcrafting:advanced_table',
          'cold_sweat:soulspring_lamp',
          'rankine:wood_tier_crushing_head',
          'create:shaft',
          'create:cogwheel',
          'create:large_cogwheel',
          'create:hand_crank',
          'create:millstone',
          'minecraft:smoker',
          'minecraft:blast_furnace',
          'minecraft:cartography_table',
          'minecraft:fletching_table',
          'minecraft:grindstone',
          'minecraft:stonecutter',
          'minecraft:piston',
          'minecraft:compass',
          'minecraft:brewing_stand',
          'minecraft:crossbow',
          'minecraft:map',
          'blue_skies:tool_box',
          'charcoal_pit:mechanical_bellows',
          'twilightforest:magic_map',
          'twilightforest:maze_map',
          'twilightforest:ore_map',
          'explorerscompass:explorerscompass',
          'create:andesite_alloy',
        ],
        type: 'extendedcrafting:shaped_table',
      });

      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'immersiveengineering:windmill',
        },
        pattern: ['aaa', 'aba', 'aaa'],
        key: {
          a: 'immersiveengineering:windmill_blade',
          b: 'rankine:steel_ingot',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'immersiveengineering:watermill',
        },
        pattern: [' a ', 'aba', ' a '],
        key: {
          a: 'immersiveengineering:waterwheel_segment',
          b: 'rankine:steel_ingot',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'immersive_aircraft:hull',
        },
        pattern: ['aaa', 'bbb', 'aaa'],
        key: {
          a: 'create:shadow_steel_casing',
          b: 'rankine:promethium_ingot',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'immersive_aircraft:propeller',
        },
        pattern: ['aa ', ' a ', ' aa'],
        key: {
          a: 'rankine:promethium_ingot',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'immersive_aircraft:sail',
        },
        pattern: ['aab', 'aab', 'aab'],
        key: {
          a: 'immersiveengineering:hemp_fabric',
          b: 'immersiveengineering:hemp_fiber',
        },
      });

      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'cold_sweat:soulspring_lamp',
        },
        pattern: [' a ', 'bcb', ' d '],
        key: {
          a: 'tconstruct:slimesteel_nugget',
          b: 'twilightforest:knightmetal_ingot',
          c: 'minecraft:soul_lantern',
          d: 'minecraft:chain',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'rankine:wood_tier_crushing_head',
        },
        pattern: [' a ', 'aba', 'cdc'],
        key: {
          a: 'undergarden:wigglewood_planks',
          b: 'twilightforest:carminite',
          c: 'minecraft:sticky_piston',
          d: 'blue_skies:horizonite_block',
        },
      });

      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:smoker',
        },
        pattern: [' a ', 'aba', ' a '],
        key: {
          a: 'undergarden:wigglewood_log',
          b: 'minecraft:furnace',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:blast_furnace',
        },
        pattern: ['aaa', 'aba', 'ccc'],
        key: {
          a: 'minecraft:iron_ingot',
          b: 'minecraft:furnace',
          c: 'minecraft:smooth_stone',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:cartography_table',
        },
        pattern: ['aa', 'bb', 'bb'],
        key: {
          a: 'minecraft:paper',
          b: 'undergarden:wigglewood_planks',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:fletching_table',
        },
        pattern: ['aa', 'bb', 'bb'],
        key: {
          a: 'minecraft:flint',
          b: 'undergarden:wigglewood_planks',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:grindstone',
        },
        pattern: ['aba', 'c c'],
        key: {
          a: 'undergarden:twistytwig',
          b: 'minecraft:stone_slab',
          c: 'undergarden:wigglewood_planks',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:stonecutter',
        },
        pattern: [' a ', 'bbb'],
        key: {a: 'minecraft:iron_ingot', b: 'minecraft:smooth_stone'},
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:piston',
        },
        pattern: ['aaa', 'bcb', 'bdb'],
        key: {
          a: 'blue_skies:dusk_planks',
          b: 'rankine:gray_marble',
          c: 'twilightforest:carminite',
          d: 'blue_skies:horizonite_ingot',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:compass',
        },
        pattern: [' a ', 'aba', ' a '],
        key: {
          a: 'blue_skies:horizonite_ingot',
          b: 'minecraft:redstone',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:brewing_stand',
        },
        pattern: [' a ', 'bbb'],
        key: {
          a: 'minecraft:blaze_rod',
          b: 'twilightforest:mazestone',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:crossbow',
        },
        pattern: ['aba', 'cdc', ' a '],
        key: {
          a: 'undergarden:twistytwig',
          b: 'minecraft:iron_ingot',
          c: 'minecraft:string',
          d: 'minecraft:tripwire_hook',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'minecraft:map',
        },
        pattern: ['aaa', 'aba', 'aaa'],
        key: {
          a: 'minecraft:paper',
          b: 'minecraft:compass',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'blue_skies:tool_box',
        },
        pattern: ['aa', 'bb', 'bb'],
        key: {
          a: 'blue_skies:ventium_ingot',
          b: 'blue_skies:maple_planks',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'charcoal_pit:mechanical_bellows',
        },
        pattern: [' a ', 'bcd', ' a '],
        key: {
          a: 'minecraft:smooth_stone',
          b: 'minecraft:redstone',
          c: 'charcoal_pit:bellows',
          d: 'minecraft:iron_ingot',
        },
      });

      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'twilightforest:magic_map',
        },
        pattern: ['aaa', 'aba', 'aaa'],
        key: {
          a: 'minecraft:paper',
          b: 'twilightforest:magic_map_focus',
        },
      });

      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'twilightforest:maze_map',
        },
        pattern: ['aaa', 'aba', 'aaa'],
        key: {
          a: 'minecraft:paper',
          b: 'twilightforest:maze_map_focus',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'twilightforest:ore_map',
        },
        pattern: ['aaa', 'aba', 'aaa'],
        key: {
          a: 'minecraft:paper',
          b: 'blue_skies:horizonite_block',
        },
      });

      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'extendedcrafting:advanced_table',
        },
        pattern: ['aba', 'cdc', 'aea'],
        key: {
          a: 'extendedcrafting:advanced_component',
          b: 'extendedcrafting:advanced_catalyst',
          c: 'extendedcrafting:basic_table',
          d: 'bloodmagic:demonslate',
          e: 'extendedcrafting:black_iron_slate',
        },
      });

      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {
          item: 'extendedcrafting:basic_auto_table',
        },
        pattern: ['aba', 'cdc', 'aba'],
        key: {
          a: 'extendedcrafting:black_iron_ingot',
          b: 'extendedcrafting:redstone_component',
          c: 'extendedcrafting:redstone_catalyst',
          d: 'extendedcrafting:basic_table',
        },
      });
    },
    advanced_table: () => {
      event.remove({
        output: [
          'immersive_aircraft:quadrocopter',
          'immersive_aircraft:biplane',
          'immersive_aircraft:gyrodyne',
          'immersive_aircraft:airship',
          'immersive_aircraft:engine',
          'extendedcrafting:elite_table',
        ],
        type: 'extendedcrafting:shaped_table',
      });

      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {item: 'immersive_aircraft:quadrocopter'},
        pattern: ['aba', 'bcb', 'aba'],
        key: {
          a: 'immersive_aircraft:hull',
          b: 'immersive_aircraft:propeller',
          c: 'immersive_aircraft:engine',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {item: 'immersive_aircraft:biplane'},
        pattern: ['   a ', 'abbac', 'ab dc', 'abbac', '   a '],
        key: {
          a: 'immersive_aircraft:hull',
          b: 'rankine:aluminum_sheetmetal',
          c: 'immersive_aircraft:propeller',
          d: 'immersive_aircraft:engine',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {item: 'immersive_aircraft:gyrodyne'},
        pattern: ['  a  ', ' bcb ', 'acdca', ' bcb ', '  a  '],
        key: {
          a: 'immersive_aircraft:hull',
          b: 'rankine:aluminum_sheetmetal',
          c: 'immersive_aircraft:propeller',
          d: 'immersive_aircraft:engine',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {item: 'immersive_aircraft:airship'},
        pattern: ['aaaaa', 'abbba', 'aaaaa', 'cd ef', 'cdddc'],
        key: {
          a: 'immersive_aircraft:sail',
          b: 'rankine:carbon_dioxide_gas_bottle',
          c: 'immersive_aircraft:hull',
          d: 'rankine:aluminum_sheetmetal',
          e: 'immersive_aircraft:engine',
          f: 'immersive_aircraft:propeller',
        },
      });
      event.custom({
        type: 'extendedcrafting:shaped_table',
        result: {item: 'immersive_aircraft:engine'},
        pattern: ['a a a', 'bbcbb', 'fdgdf', 'fdgdf', 'eeeee'],
        key: {
          a: 'bloodmagic:demonslate',
          b: 'rankine:vulcanized_rubber',
          c: 'hem:teir_one_computer',
          d: 'rankine:carbon',
          e: 'create:sturdy_sheet',
          f: 'create:shadow_steel_casing',
          g: 'create:electron_tube',
        },
      });
    },
    elite_table: () => {
      event.remove({
        output: ['pneumaticcraft:amadron_tablet', 'adpother:aerometer'],
        type: 'extendedcrafting:shaped_table',
      });
    },
    ultimate_table: () => {},
  });
});
