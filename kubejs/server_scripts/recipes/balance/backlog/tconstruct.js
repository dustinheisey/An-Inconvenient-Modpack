onEvent('recipes', event => {
  setBalanceRecipes({
    shaped: () => {
      [
        'tconstruct:armor/building/travelers_goggles',
        'tconstruct:armor/building/travelers_chestplate',
        'tconstruct:armor/building/travelers_pants',
        'tconstruct:armor/building/travelers_boots',
        'tconstruct:armor/building/plate_helmet',
        'tconstruct:armor/building/plate_chestplate',
        'tconstruct:armor/building/plate_leggings',
        'tconstruct:armor/building/plate_boots',
      ].forEach(id => event.remove({id: id}));

      event.shaped('tconstruct:travelers_helmet', ['a a', 'bab', 'c c'], {
        a: 'minecraft:leather',
        b: 'minecraft:glass_pane',
        c: 'tconstruct:amethyst_bronze_ingot',
      });

      event.shaped('tconstruct:travelers_chestplate', ['a a', 'aba', 'aba'], {
        a: 'minecraft:leather',
        b: 'tconstruct:amethyst_bronze_ingot',
      });

      event.shaped('tconstruct:travelers_leggings', ['aaa', 'b b', 'a a'], {
        a: 'minecraft:leather',
        b: 'tconstruct:amethyst_bronze_ingot',
      });

      event.shaped('tconstruct:travelers_boots', ['a a', 'b b'], {
        a: 'tconstruct:amethyst_bronze_ingot',
        b: 'minecraft:leather',
      });

      event.shaped('tconstruct:plate_helmet', ['aaa', 'bbb'], {
        a: 'tconstruct:manyullyn_ingot',
        b: 'minecraft:chain',
      });

      event.shaped('tconstruct:plate_chestplate', ['a a', 'aaa', 'bab'], {
        a: 'tconstruct:manyullyn_ingot',
        b: 'minecraft:chain',
      });

      event.shaped('tconstruct:plate_leggings', ['aaa', 'a a', 'b b'], {
        a: 'tconstruct:manyullyn_ingot',
        b: 'minecraft:chain',
      });

      event.shaped('tconstruct:plate_boots', ['a a', 'a a'], {
        a: 'tconstruct:manyullyn_ingot',
      });
    },
    severing: () => {
      event.remove({id: 'tconstruct:tools/severing/blaze_rod'});
      event.remove({
        output: ['minecraft:blaze_rod'],
        type: 'tconstruct:severing',
      });
    },
    melting: () => {
      event.remove({
        output: Fluid.of('tconstruct:blood'),
      });

      event.remove({
        input: [
          'minecraft:ender_chest',
          'rankine:snowflake_obsidian',
          'minecraft:obsidian',
          'minecraft:crying_obsidian',
          'minecraft:redstone',
          'tconstruct:grout',
          'tconstruct:nether_grout',
          'minecraft:rotten_flesh',
          'minecraft:zombie_head',
          'tconstruct:husk_head',
          'tconstruct:piglin_head',
          'tconstruct:piglin_brute_head',
          'tconstruct:zombified_piglin_head',
          '#minecraft:sand',
          '#tconstruct:casts',
          // "rankine:sphalerite_ore",
          // "rankine:bauxite_ore",
          // "rankine:cobaltite_ore",
          // "minecraft:gold_ore",
          // "minecraft:deepslate_gold_ore",
          // "undergarden:depthrock_gold_ore",
          // "mythicbotany:gold_ore",
          // "minecraft:nether_gold_ore",
        ],
        type: 'tcsontruct:melting',
      });

      [
        'tconstruct:smeltery/melting/metal/gold/gilded_blackstone',
        'twilightforest:smeltery/melting/metal/knightmetal/nugget',
        'twilightforest:smeltery/melting/metal/fiery/nugget',
        'tconstruct:smeltery/alloys/molten_pig_iron',
        'tconstruct:__default',
        'tconstruct:smeltery/entity_melting/zombie',
        'tconstruct:smeltery/entity_melting/villager',
        'bloodsmeltery:smeltery/entity_melting/vex',
        'tconstruct:smeltery/entity_melting/skeletons',
        'tconstruct:smeltery/entity_melting/illager',
        'tconstruct:smeltery/alloys/molten_obsidian_from_soup',
        'tconstruct:smeltery/melting/obsidian/beacon',
        'tconstruct:smeltery/melting/obsidian/foundry_io',
        'tconstruct:smeltery/melting/obsidian/foundry_controller',
        'tconstruct:smeltery/melting/obsidian/block',
      ].forEach(id => {
        event.remove({id: id});
      });

      [
        'aluminum',
        'iron',
        'cobalt',
        'copper',
        'gold',
        'lead',
        'nickel',
        'osmium',
        'silver',
        'tin',
        'tungsten',
        'uranium',
        'zinc',
      ].forEach(id => {
        event.remove({
          id: `tconstruct:smeltery/melting/metal/${id}/ore_singular`,
        });
      });

      ['emerald', 'diamond', 'quartz'].forEach(id => {
        event.remove({
          id: `tconstruct:smeltery/melting/${id}/ore_singular`,
        });
      });

      ['gold'].forEach(id => {
        event.remove({
          id: `tconstruct:smeltery/melting/metal/${id}/ore_sparse`,
        });
      });

      ['copper'].forEach(id => {
        event.remove({
          id: `tconstruct:smeltery/melting/metal/${id}/ore_dense`,
        });
      });

      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'architects_palette:plating_block'},
        result: {fluid: 'tconstruct:molten_iron', amount: 30},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'architects_palette:plating_slab'},
        result: {fluid: 'tconstruct:molten_iron', amount: 15},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'architects_palette:plating_stairs'},
        result: {fluid: 'tconstruct:molten_iron', amount: 45},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'architects_palette:plating_wall'},
        result: {fluid: 'tconstruct:molten_iron', amount: 5},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'hexerei:blood_bottle'},
        result: {fluid: 'tconstruct:blood', amount: 250},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'create:crushed_raw_aluminum'},
        result: {fluid: 'tconstruct:molten_aluminum', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'chemlib:nickel_dust'},
        result: {fluid: 'tconstruct:molten_nickel', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'chemlib:uranium_dust'},
        result: {fluid: 'tconstruct:molten_uranium', amount: 90},
        temperature: 605,
        time: 54,
      });

      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'create:crushed_raw_tin'},
        result: {fluid: 'tconstruct:molten_tin', amount: 90},
        temperature: 605,
        time: 54,
      });

      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'create:crushed_raw_osmium'},
        result: {fluid: 'tconstruct:molten_osmium', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'create:crushed_raw_zinc'},
        result: {fluid: 'tconstruct:molten_zinc', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'create:crushed_raw_copper'},
        result: {fluid: 'tconstruct:molten_copper', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'create:crushed_raw_gold'},
        result: {fluid: 'tconstruct:molten_gold', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'create:crushed_raw_iron'},
        result: {fluid: 'tconstruct:molten_iron', amount: 90},
        temperature: 605,
        time: 54,
      });

      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'occultism:iesnium_dust'},
        result: {fluid: 'kubejs:molten_iesnium', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:raw_aquite'},
        result: {fluid: 'kubejs:molten_aquite', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:aquite'},
        result: {fluid: 'kubejs:molten_aquite', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:aquite_block'},
        result: {fluid: 'kubejs:molten_aquite', amount: 810},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:raw_aquite_block'},
        result: {
          fluid: 'kubejs:molten_aquite',
          amount: 810,
        },
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:raw_charoite'},
        result: {fluid: 'kubejs:molten_charoite', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:charoite'},
        result: {fluid: 'kubejs:molten_charoite', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:charoite_block'},
        result: {fluid: 'kubejs:molten_charoite', amount: 810},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:raw_charoite_block'},
        result: {
          fluid: 'kubejs:molten_charoite',
          amount: 810,
        },
        temperature: 605,
        time: 54,
      });

      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:raw_ventium'},
        result: {fluid: 'kubejs:molten_ventium', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:ventium_ingot'},
        result: {fluid: 'kubejs:molten_ventium', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:ventium_nugget'},
        result: {fluid: 'kubejs:molten_ventium', amount: 10},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:ventium_block'},
        result: {fluid: 'kubejs:molten_ventium', amount: 810},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:raw_ventium_block'},
        result: {
          fluid: 'kubejs:molten_ventium',
          amount: 810,
        },
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:midnight_sand'},
        result: {fluid: 'kubejs:molten_midnight_glass', amount: 1000},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'blue_skies:crystal_sand'},
        result: {fluid: 'kubejs:molten_crystal_glass', amount: 1000},
        temperature: 605,
        time: 54,
      });

      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:raw_froststeel'},
        result: {fluid: 'kubejs:molten_froststeel', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:froststeel_nugget'},
        result: {fluid: 'kubejs:molten_froststeel', amount: 10},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:froststeel_ingot'},
        result: {fluid: 'kubejs:molten_froststeel', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:froststeel_block'},
        result: {fluid: 'kubejs:molten_froststeel', amount: 810},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:raw_froststeel_block'},
        result: {
          fluid: 'kubejs:molten_froststeel',
          amount: 810,
        },
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:raw_cloggrum'},
        result: {fluid: 'kubejs:molten_cloggrum', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:cloggrum_nugget'},
        result: {fluid: 'kubejs:molten_cloggrum', amount: 10},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:cloggrum_ingot'},
        result: {fluid: 'kubejs:molten_cloggrum', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:cloggrum_block'},
        result: {fluid: 'kubejs:molten_cloggrum', amount: 810},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:raw_cloggrum_block'},
        result: {
          fluid: 'kubejs:molten_cloggrum',
          amount: 810,
        },
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:regalium_crystal'},
        result: {fluid: 'kubejs:molten_regalium', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:regalium_block'},
        result: {
          fluid: 'kubejs:molten_regalium',
          amount: 810,
        },
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:utherium_crystal'},
        result: {fluid: 'kubejs:molten_utherium', amount: 90},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:utheric_shard'},
        result: {fluid: 'kubejs:molten_utherium', amount: 10},
        temperature: 605,
        time: 54,
      });
      event.custom({
        type: 'tconstruct:melting',
        ingredient: {item: 'undergarden:utherium_block'},
        result: {
          fluid: 'kubejs:molten_utherium',
          amount: 810,
        },
        temperature: 605,
        time: 54,
      });
    },
    casts: () => {
      event.remove({
        output: [
          'tconstruct:rod_cast',
          'tconstruct:gear_cast',
          'tconstruct:wire_cast',
          'tconstruct:gem_cast',
          'tconstruct:ingot_cast',
          'tconstruct:nugget_cast',
          'tconstruct:pick_head_cast',
          'tconstruct:repair_kit_cast',
          'tconstruct:small_axe_head_cast',
          'tconstruct:small_blade_cast',
          'tconstruct:tool_binding_cast',
          'tconstruct:tool_handle_cast',
          'tconstruct:hammer_head_cast',
          'tconstruct:round_plate_cast',
          'tconstruct:broad_blade_cast',
          'tconstruct:broad_axe_head_cast',
          'tconstruct:large_plate_cast',
          'tconstruct:tough_handle_cast',
        ],
      });

      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {tag: 'forge:gems'},
        result: 'tconstruct:gem_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {tag: 'forge:ingots'},
        result: 'tconstruct:ingot_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {tag: 'forge:nuggets'},
        result: 'tconstruct:nugget_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:pick_head'},
        result: 'tconstruct:pick_head_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:repair_kit'},
        result: 'tconstruct:repair_kit_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:small_axe_head'},
        result: 'tconstruct:small_axe_head_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:small_blade'},
        result: 'tconstruct:small_blade_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:tool_binding'},
        result: 'tconstruct:tool_binding_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:tool_handle'},
        result: 'tconstruct:tool_handle_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:hammer_head'},
        result: 'tconstruct:hammer_head_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:round_plate'},
        result: 'tconstruct:round_plate_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:broad_blade'},
        result: 'tconstruct:broad_blade_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:broad_axe_head'},
        result: 'tconstruct:broad_axe_head_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:large_plate'},
        result: 'tconstruct:large_plate_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
      event.custom({
        type: 'tconstruct:casting_table',
        cast_consumed: true,
        switch_slots: true,
        cooling_time: 57,
        cast: {item: 'tconstruct:tough_handle'},
        result: 'tconstruct:tough_handle_cast',
        fluid: {name: 'tconstruct:molten_bronze', amount: 180},
      });
    },
    alloy: () => {},
    casting_basin: () => {
      event.remove({
        input: ['#forge:stone'],
        type: 'tconstruct:casting_basin',
      });
      event.remove({
        output: [
          'create:andesite_alloy',
          'minecraft:ender_chest',
          'tconstruct:pig_iron_block',
          'tconstruct:polished_scorched_stone',
          'minecraft:soul_soil',
          'tconstruct:foundry_controller',
        ],
        type: 'tconstruct:casting_basin',
      });

      event.custom({
        type: 'tconstruct:casting_basin',
        fluid: {name: 'tconstruct:blazing_blood', amount: 40},
        cast: 'tconstruct:scorched_bricks',
        result: 'tconstruct:foundry_controller',
        cooling_time: 900,
      });
      event.custom({
        type: 'tconstruct:casting_basin',
        fluid: {name: 'kubejs:molten_crystal_glass', amount: 1000},
        result: 'blue_skies:crystal_glass',
        cooling_time: 900,
      });
      event.custom({
        type: 'tconstruct:casting_basin',
        fluid: {name: 'kubejs:molten_midnight_glass', amount: 1000},
        result: 'blue_skies:midnight_glass',
        cooling_time: 900,
      });

      event.custom({
        type: 'tconstruct:casting_basin',
        result: 'blue_skies:aquite_block',
        fluid: {name: 'kubejs:molten_aquite', amount: 810},
        cooling_time: 900,
      });

      event.custom({
        type: 'tconstruct:casting_basin',
        result: 'blue_skies:charoite_block',
        fluid: {name: 'kubejs:molten_charoite', amount: 810},
        cooling_time: 900,
      });

      event.custom({
        type: 'tconstruct:casting_basin',
        result: 'blue_skies:ventium_block',
        fluid: {name: 'kubejs:molten_ventium', amount: 810},
        cooling_time: 900,
      });

      event.custom({
        type: 'tconstruct:casting_basin',
        result: 'undergarden:froststeel_block',
        fluid: {name: 'kubejs:molten_froststeel', amount: 810},
        cooling_time: 900,
      });

      event.custom({
        type: 'tconstruct:casting_basin',
        result: 'undergarden:cloggrum_block',
        fluid: {name: 'kubejs:molten_cloggrum', amount: 810},
        cooling_time: 900,
      });

      event.custom({
        type: 'tconstruct:casting_basin',
        result: 'undergarden:regalium_block',
        fluid: {name: 'kubejs:molten_regalium', amount: 810},
        cooling_time: 900,
      });

      event.custom({
        type: 'tconstruct:casting_basin',
        result: 'undergarden:utherium_block',
        fluid: {name: 'kubejs:molten_utherium', amount: 810},
        cooling_time: 900,
      });
    },
    casting_table: () => {
      event.remove({
        input: ['minecraft:stone_button'],
        type: 'tconstruct:casting_table',
      });

      event.remove({
        output: [
          'twilightforest:fiery_pickaxe',
          'twilightforest:fiery_sword',
          'minecraft:blaze_rod',
          'minecraft:magma_cream',
          'createaddition:zinc_sheet',
          'immersiveengineering:plate_uranium',
          'immersiveengineering:plate_steel',
          'immersiveengineering:plate_silver',
          'immersiveengineering:plate_lead',
          'create:iron_sheet',
          'create:golden_sheet',
          'immersiveengineering:plate_electrum',
          'create:copper_sheet',
          'immersiveengineering:plate_constantan',
          'immersiveengineering:plate_aluminum',
          'immersiveengineering:stick_aluminum',
          'immersiveengineering:wire_aluminum',
          'createaddition:brass_rod',
          'createaddition:copper_rod',
          'immersiveengineering:wire_copper',
          'immersiveengineering:wire_electrum',
          'industrialforegoing:gold_gear',
          'createaddition:gold_rod',
          'createaddition:gold_wire',
          'industrialforegoing:iron_gear',
          'immersiveengineering:stick_iron',
          'createaddition:iron_wire',
          'immersiveengineering:wire_lead',
          'immersiveengineering:stick_steel',
          'immersiveengineering:wire_steel',
          'tconstruct:molten_pig_iron_bucket',
          'tconstruct:pig_iron_ingot',
          'tconstruct:pig_iron_nugget',
          'createaddition:zinc_sheet',
          'immersiveengineering:plate_uranium',
          'immersiveengineering:plate_steel',
          'immersiveengineering:plate_silver',
          'immersiveengineering:plate_nickel',
          'immersiveengineering:plate_lead',
          'create:iron_sheet',
          'create:golden_sheet',
          'immersiveengineering:plate_electrum',
          'create:copper_sheet',
          'immersiveengineering:plate_constantan',
          'immersiveengineering:plate_aluminum',
          'realistictorches:glowstone_crystal',
          'pneumaticcraft:plastic',
          'rankine:steel_gold_pan',
        ],
        type: 'tconstruct:casting_table',
      });

      event.custom({
        type: 'tconstruct:casting_table',
        fluid: {name: 'tconstruct:blazing_blood', amount: 10},
        cast: {item: 'minecraft:coal', cast_consumed: true},
        result: 'realistictorches:glowstone_crystal',
        cooling_time: 100,
      });

      event.custom({
        type: 'tconstruct:casting_table',
        fluid: {name: 'twilightforest:molten_fiery', amount: 270},
        cast: {
          item: 'twilightforest:knightmetal_pickaxe',
          cast_consumed: true,
        },
        result: 'twilightforest:fiery_pickaxe',
        cooling_time: 100,
      });
      event.custom({
        type: 'tconstruct:casting_table',
        fluid: {name: 'twilightforest:molten_fiery', amount: 180},
        cast: {item: 'twilightforest:knightmetal_sword', cast_consumed: true},
        result: 'twilightforest:fiery_sword',
        cooling_time: 100,
      });

      event.custom({
        type: 'tconstruct:casting_table',
        result: 'blue_skies:aquite',
        fluid: {name: 'kubejs:molten_aquite', amount: 90},
        cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
        cooling_time: 100,
      });

      event.custom({
        type: 'tconstruct:casting_table',
        result: 'blue_skies:charoite',
        fluid: {name: 'kubejs:molten_charoite', amount: 90},
        cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
        cooling_time: 100,
      });

      event.custom({
        type: 'tconstruct:casting_table',
        result: 'blue_skies:ventium_ingot',
        fluid: {name: 'kubejs:molten_ventium', amount: 90},
        cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
        cooling_time: 100,
      });

      event.custom({
        type: 'tconstruct:casting_table',
        result: 'blue_skies:ventium_nugget',
        fluid: {name: 'kubejs:molten_ventium', amount: 10},
        cast: {item: 'tconstruct:nugget_cast', cast_consumed: false},
        cooling_time: 100,
      });

      event.custom({
        type: 'tconstruct:casting_table',
        result: 'undergarden:froststeel_nugget',
        fluid: {name: 'kubejs:molten_froststeel', amount: 10},
        cast: {item: 'tconstruct:nugget_cast', cast_consumed: false},
        cooling_time: 100,
      });
      event.custom({
        type: 'tconstruct:casting_table',
        result: 'undergarden:froststeel_ingot',
        fluid: {name: 'kubejs:molten_froststeel', amount: 90},
        cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
        cooling_time: 100,
      });

      event.custom({
        type: 'tconstruct:casting_table',
        result: 'undergarden:cloggrum_nugget',
        fluid: {name: 'kubejs:molten_cloggrum', amount: 10},
        cast: {item: 'tconstruct:nugget_cast', cast_consumed: false},
        cooling_time: 100,
      });
      event.custom({
        type: 'tconstruct:casting_table',
        result: 'undergarden:cloggrum_ingot',
        fluid: {name: 'kubejs:molten_cloggrum', amount: 90},
        cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
        cooling_time: 100,
      });

      event.custom({
        type: 'tconstruct:casting_table',
        result: 'undergarden:regalium_crystal',
        fluid: {name: 'kubejs:molten_regalium', amount: 90},
        cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
        cooling_time: 100,
      });

      event.custom({
        type: 'tconstruct:casting_table',
        result: 'undergarden:utherium_crystal',
        fluid: {name: 'kubejs:molten_utherium', amount: 90},
        cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
        cooling_time: 100,
      });
      event.custom({
        type: 'tconstruct:casting_table',
        result: 'undergarden:utheric_shard',
        fluid: {name: 'kubejs:molten_utherium', amount: 10},
        cast: {item: 'tconstruct:nugget_cast', cast_consumed: false},
        cooling_time: 100,
      });
    },
  });
});

onEvent('server.datapack.high_priority', event => {
  [
    'molten_rose_gold',
    'molten_invar',
    'molten_electrum',
    'molten_constantan',
    'molten_brass',
    'molten_obsidian',
  ].forEach(id =>
    event.addJson(`tconstruct:recipes/smeltery/alloys/${id}`, {})
  );
});
