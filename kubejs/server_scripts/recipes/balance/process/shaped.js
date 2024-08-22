onEvent('recipes', event => {
  setBalanceRecipes({
    chapter_2: () => {
      event.remove({
        output: [
          'totemic:wind_chime',
          'cold_sweat:minecart_insulation',
          'tconstruct:pattern',
          'farmersrespite:kettle',
          'naturesaura:wood_stand',
          `rankine:pearl_block`,
          `3x rankine:metal_pipe`,
          `2x blue_skies:cherry_stick`,
          `2x blue_skies:frostbright_stick`,
          `2x blue_skies:starlit_stick`,
          `2x blue_skies:bluebright_stick`,
          `3x rankine:bamboo_culms_sign`,
          `8x rankine:tap_line`,
          `rankine:tree_tap`,
          `rankine:fins`,
          `rankine:ice_skates`,
          'hexerei:mixing_cauldron',
          'totemic:drum',
          'paragon_textiles:cushion_plain',
          'paragon_textiles:cushion_red',
          'occultism:brush',
          `create:red_seat`,
          `minecraft:shears`,
          `minecraft:scaffolding`,
          'farmersdelight:cooking_pot',
          'minecraft:lead',
          'smallships:sail',
          'rankine:totem_of_hastening',
          'rankine:gun_cotton',
        ],
        type: 'minecraft:crafting_shaped',
      });

      event.shaped('cold_sweat:minecart_insulation', ['a a', 'aaa'], {
        a: 'cold_sweat:fur',
      });

      event.shaped(`2x blue_skies:cherry_stick`, ['a', 'a'], {
        a: 'blue_skies:cherry_planks',
      });
      event.shaped(`2x blue_skies:frostbright_stick`, ['a', 'a'], {
        a: 'blue_skies:frostbright_planks',
      });
      event.shaped(`2x blue_skies:starlit_stick`, ['a', 'a'], {
        a: 'blue_skies:starlit_planks',
      });
      event.shaped(`2x blue_skies:bluebright_stick`, ['a', 'a'], {
        a: 'blue_skies:bluebright_planks',
      });
      event.shaped(`3x rankine:bamboo_culms_sign`, ['aaa', 'aaa', ' b '], {
        a: `rankine:bamboo_culms`,
        b: '#forge:rods/wooden',
      });

      event.shaped(`rankine:fins`, ['a  ', 'aaa'], {
        a: 'minecraft:leather',
      });
      event.shaped(`rankine:ice_skates`, ['a  ', 'bba', 'ccc'], {
        a: 'minecraft:leather',
        b: 'farmersdelight:rope',
        c: 'rankine:pewter_nugget',
      });

      event.shaped('paragon_textiles:cushion_plain', ['a', 'b'], {
        a: `paragon_textiles:fabric_plain`,
        b: '#minecraft:wooden_slabs',
      });
      event.shaped('paragon_textiles:cushion_red', ['a', 'b'], {
        a: `paragon_textiles:fabric_red`,
        b: '#minecraft:wooden_slabs',
      });
      event.shaped('occultism:brush', ['aaa', 'bbb'], {
        a: '#minecraft:planks',
        b: 'paragon_textiles:silk',
      });
      event.shaped(`create:red_seat`, ['a', 'b'], {
        a: `paragon_textiles:cushion_red`,
        b: '#minecraft:wooden_slabs',
      });

      event.shaped(`minecraft:scaffolding`, ['aba', 'a a', 'a a'], {
        a: `#forge:rods/wooden`,
        b: 'farmersdelight:canvas',
      });

      event.shaped(`rankine:oat_bale`, ['aaa', 'aaa', 'aaa'], {
        a: `rankine:oats`,
      });
      event.shaped(`rankine:lead_glass`, [' a ', 'aba', ' a '], {
        a: `rankine:lead_ingot`,
        b: '#forge:glass',
      });

      let signs = [
        'rankine:cedar_sign',
        'rankine:balsam_fir_sign',
        'rankine:eastern_hemlock_sign',
        'rankine:western_hemlock_sign',
        'rankine:pinyon_pine_sign',
        'rankine:juniper_sign',
        'rankine:black_birch_sign',
        'rankine:yellow_birch_sign',
        'rankine:red_birch_sign',
        'rankine:maple_sign',
        'rankine:magnolia_sign',
        'rankine:black_walnut_sign',
        'rankine:coconut_palm_sign',
        'rankine:cork_oak_sign',
        'rankine:sharinga_sign',
        'rankine:cinnamon_sign',
        'rankine:honey_locust_sign',
        'rankine:weeping_willow_sign',
        'rankine:erythrina_sign',
        'rankine:charred_sign',
        'rankine:bamboo_sign',
      ];

      let bricks = [
        {
          input: 'minecraft:obsidian',
          output: 'cataclysm:obsidian_bricks',
        },

        {
          input: 'charcoal_pit:sandy_brick_item',
          output: 'charcoal_pit:sandy_brick',
        },
        {
          input: 'blue_skies:nature_stone',
          output: 'blue_skies:nature_stonebrick',
        },
        {
          input: 'blue_skies:polished_brumble',
          output: 'blue_skies:polished_brumble_bricks',
        },
        {
          input: 'blue_skies:turquoise_stone',
          output: 'blue_skies:turquoise_stonebrick',
        },
        {
          input: 'minecraft:polished_deepslate',
          output: 'minecraft:deepslate_bricks',
        },
        {
          input: 'architects_palette:myonite',
          output: 'architects_palette:myonite_bricks',
        },
        {
          input: 'minecraft:dripstone_block',
          output: 'architects_palette:dripstone_bricks',
        },
        {
          input: 'architects_palette:abyssaline',
          output: 'architects_palette:abyssaline_bricks',
        },
        {
          input: 'minecraft:calcite',
          output: 'architects_palette:calcite_bricks',
        },
      ];

      let grains = ['sorghum', 'rye', 'millet', 'barley'];

      signs.forEach(id => {
        event.shaped(`3x ${id}`, ['aaa', 'aaa', ' b '], {
          a: `${id.slice(0, -5)}_planks`,
          b: '#forge:rods/wooden',
        });
      });

      bricks.forEach(item => {
        event.shaped(`2x ${item.output}`, ['ab', 'ba'], {
          a: item.input,
          b: 'rankine:mortar',
        });
      });

      grains.forEach(id => {
        event.shaped(`rankine:${id}_bale`, ['aaa', 'aaa', 'aaa'], {
          a: `rankine:${id}`,
        });
      });
    },
    chapter_3: () => {
      event.remove({
        output: [
          'occultism:book_of_binding_foliot',
          'undergarden:catalyst',
          'malum:spirit_pouch',
          'extendedcrafting:basic_component',
          'malum:spirit_altar',
          'minecraft:torch',
          'rankine:totem_of_timesaving',
          'undergarden:depthrock_bed',
          'rankine:totem_of_enduring',
          'rankine:totem_of_promising',
          'blue_skies:lunar_stonebrick',
          'architects_palette:withered_osseous_bricks',
          'architects_palette:osseous_bricks',
          `twilightforest:twilight_oak_chest`,
          `twilightforest:canopy_chest`,
          `twilightforest:mangrove_chest`,
          `twilightforest:time_chest`,
          `twilightforest:transformation_chest`,
          `twilightforest:mining_chest`,
          `twilightforest:sorting_chest`,
          'occultism:chalk_gold_impure',
          'occultism:chalk_purple_impure',
          'minecraft:book',
          'bloodmagic:sacrificerune',
          'naturesaura:bottle_two_the_rebottling',
          'rankine:rock_drill',
          'bloodmagic:selfsacrificerune',
          'minecraft:bow',
          'bloodmagic:altar',
          'minecraft:sticky_piston',
          'minecraft:lectern',
          'minecraft:book',
          'naturesaura:infused_brick',
          'undergarden:twistytwig',
          'blue_skies:maple_stick',
          'blue_skies:dusk_stick',
          'blue_skies:lunar_stick',
          `twilightforest:darkwood_chest`,
        ],
        type: 'minecraft:crafting_shaped',
      });

      colors.forEach(color => {
        if (color !== 'red') {
          event.shaped(`paragon_textiles:cushion_${color}`, ['a', 'b'], {
            a: `paragon_textiles:fabric_${color}`,
            b: '#minecraft:wooden_slabs',
          });
        }
      });

      event.shaped('malum:spirit_pouch', [' a ', 'b b', ' b '], {
        a: 'minecraft:string',
        b: 'malum:spirit_fabric',
      });

      event.shaped(
        '2x architects_palette:withered_osseous_bricks',
        ['ab', 'ba'],
        {
          a: `architects_palette:withered_bone_block`,
          b: 'rankine:mortar',
        }
      );
      event.shaped('architects_palette:osseous_bricks', ['ab', 'ba'], {
        a: `minecraft:bone_block`,
        b: 'rankine:mortar',
      });
      event.shaped(`twilightforest:twilight_oak_chest`, ['aaa', 'a a', 'aaa'], {
        a: `twilightforest:twilight_oak_planks`,
      });
      event.shaped(`twilightforest:canopy_chest`, ['aaa', 'a a', 'aaa'], {
        a: `twilightforest:canopy_planks`,
      });
      event.shaped(`twilightforest:mangrove_chest`, ['aaa', 'a a', 'aaa'], {
        a: `twilightforest:mangrove_planks`,
      });
      event.shaped(`twilightforest:time_chest`, ['aaa', 'a a', 'aaa'], {
        a: `twilightforest:time_planks`,
      });
      event.shaped(
        `twilightforest:transformation_chest`,
        ['aaa', 'a a', 'aaa'],
        {a: `twilightforest:transformation_planks`}
      );
      event.shaped(`twilightforest:mining_chest`, ['aaa', 'a a', 'aaa'], {
        a: `twilightforest:mining_planks`,
      });
      event.shaped(`twilightforest:sorting_chest`, ['aaa', 'a a', 'aaa'], {
        a: `twilightforest:sorting_planks`,
      });

      event.shaped('bloodmagic:sacrificerune', ['aba', 'cdc', 'aba'], {
        a: 'rankine:black_marble',
        b: 'bloodmagic:reinforcedslate',
        c: 'minecraft:glowstone_dust',
        d: 'bloodmagic:blankrune',
      });

      event.shaped('rankine:rock_drill', [' a ', 'bcb', ' b '], {
        a: 'create:shaft',
        b: 'rankine:bronze_ingot',
        c: 'create:powdered_obsidian',
      });
      event.shaped('bloodmagic:selfsacrificerune', ['aba', 'cdc', 'aba'], {
        a: 'rankine:gray_marble',
        b: 'bloodmagic:reinforcedslate',
        c: 'minecraft:redstone',
        d: 'bloodmagic:blankrune',
      });
      event.shaped('minecraft:bow', [' ab', 'a b', ' ab'], {
        a: '#forge:rods/wooden',
        b: 'minecraft:string',
      });

      event.shaped('minecraft:sticky_piston', ['a', 'b'], {
        a: 'tconstruct:sky_slime_ball',
        b: 'minecraft:piston',
      });
      event.shaped('minecraft:lectern', ['aaa', ' b ', ' a '], {
        a: '#minecraft:wooden_slabs',
        b: '#forge:bookshelves',
      });
      event.shaped('minecraft:book', ['aa', 'ab'], {
        a: 'minecraft:paper',
        b: 'minecraft:leather',
      });
      event.shaped('2x naturesaura:infused_brick', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'naturesaura:infused_stone',
      });
      event.shaped('2x undergarden:twistytwig', [' a', 'a '], {
        a: 'undergarden:wigglewood_planks',
      });
      event.shaped('2x blue_skies:maple_stick', ['a', 'a'], {
        a: 'blue_skies:maple_planks',
      });
      event.shaped('2x blue_skies:dusk_stick', ['a', 'a'], {
        a: 'blue_skies:dusk_planks',
      });
      event.shaped('2x blue_skies:lunar_stick', ['a', 'a'], {
        a: 'blue_skies:lunar_planks',
      });
      event.shaped(`twilightforest:darkwood_chest`, ['aaa', 'a a', 'aaa'], {
        a: `twilightforest:dark_planks`,
      });
    },
    chapter_4: () => {
      event.remove({
        output: [
          'hexerei:book_of_shadows',
          `create:controls`,
          'bloodmagic:alchemytable',
          `chipped:carpenters_table`,
          `create:electron_tube`,
          'bloodmagic:bloodstonebrick',
          'immersiveengineering:sheetmetal_gold',
          'immersiveengineering:sheetmetal_silver',
          'rankine:copper_sheetmetal',
          'rankine:iron_sheetmetal',
          'immersiveengineering:sheetmetal_gold',
          'rankine:brass_sheetmetal',
          'rankine:copper_sheetmetal',
          'tconstruct:scorched_bricks',
          'botania:livingrock_bricks',
          `cataclysm:witherite_block`,
          `rankine:alloy_furnace`,
          'rankine:totem_of_blazing',
          'rankine:totem_of_infusing',
          'rankine:totem_of_softening',
          'rankine:glass_cutter',
        ],
        type: 'minecraft:crafting_shaped',
      });

      event.shaped('hexerei:book_of_shadows', ['aba', 'cde', 'aaa'], {
        a: `minecraft:leather`,
        b: 'architects_palette:twisted_sapling',
        c: 'hexerei:animal_fat',
        d: 'minecraft:book',
        e: 'hexerei:sage_seed',
      });
      event.shaped(`create:controls`, ['a', 'b', 'c'], {
        a: `minecraft:lever`,
        b: 'create:railway_casing',
        c: 'create:electron_tube',
      });

      event.shaped(
        `2x immersiveengineering:sheetmetal_gold`,
        ['aba', 'aba', 'aba'],
        {a: `minecraft:gold_nugget`, b: `minecraft:gold_ingot`}
      );

      event.shaped(
        `2x immersiveengineering:sheetmetal_silver`,
        ['aba', 'aba', 'aba'],
        {a: `rankine:silver_nugget`, b: `rankine:silver_ingot`}
      );
      event.shaped(`2x rankine:copper_sheetmetal`, ['aba', 'aba', 'aba'], {
        a: `rankine:copper_nugget`,
        b: `minecraft:copper_ingot`,
      });
      event.shaped(`4x rankine:iron_sheetmetal`, [' a ', 'a a', ' a '], {
        a: `create:iron_sheet`,
      });
      event.shaped(
        `4x immersiveengineering:sheetmetal_gold`,
        [' a ', 'a a', ' a '],
        {a: `create:golden_sheet`}
      );
      event.shaped(`4x rankine:brass_sheetmetal`, [' a ', 'a a', ' a '], {
        a: `create:brass_sheet`,
      });
      event.shaped(`4x rankine:copper_sheetmetal`, [' a ', 'a a', ' a '], {
        a: `create:copper_sheet`,
      });
      event.shaped(`2x tconstruct:scorched_bricks`, ['ab', 'ba'], {
        a: `tconstruct:scorched_brick`,
        b: 'rankine:mortar',
      });
      event.shaped(`2x botania:livingrock_bricks`, ['ab', 'ba'], {
        a: `botania:livingrock`,
        b: 'rankine:mortar',
      });
      event.shaped(`cataclysm:witherite_block`, ['aaa', 'aaa', 'aaa'], {
        a: `cataclysm:witherite_ingot`,
      });

      event.shaped('rankine:glass_cutter', [' aa', ' ba', 'b  '], {
        a: 'minecraft:quartz',
        b: 'rankine:black_gold_ingot',
      });

      [
        'rose_gold',
        'white_gold',
        'green_gold',
        'blue_gold',
        'purple_gold',
        'black_gold',
        'pewter',
        'bronze',
        'brass',
        'sterling_silver',
        'amalgam',
      ].forEach(id => {
        event.shaped(`2x rankine:${id}_sheetmetal`, ['aba', 'aba', 'aba'], {
          a: `rankine:${id}_nugget`,
          b: `rankine:${id}_ingot`,
        });
      });

      ['aluminum', 'tin', 'lead'].forEach(id => {
        event.shaped(`2x rankine:${id}_sheetmetal`, ['aba', 'aba', 'aba'], {
          a: `rankine:${id}_nugget`,
          b: `rankine:${id}_ingot`,
        });
      });
    },
    chapter_5_1: () => {
      event.remove({
        output: [
          'naturesaura:calling_spirit',
          'botania:diluted_pool',
          'botania:mana_pylon',
          'architects_palette:tuff_bricks',
          'botania:metamorphic_forest_bricks',
          'botania: metamorphic_mountain_bricks',
          'botania: metamorphic_fungal_bricks',
          'botania: metamorphic_swamp_bricks',
          'botania: metamorphic_desert_bricks',
          'botania: metamorphic_taiga_bricks',
          'tconstruct:earth_cake',
          'tconstruct:sky_cake',
          'tconstruct:blood_cake',
        ],
        type: 'minecraft:crafting_shaped',
      });

      event.shaped('2x architects_palette:tuff_bricks', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'minecraft:tuff',
      });
      event.shaped('2x botania:metamorphic_forest_bricks', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'botania:metamorphic_forest_stone',
      });
      event.shaped('2x botania:metamorphic_plains_bricks', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'botania:metamorphic_plains_stone',
      });
      event.shaped('2x botania:metamorphic_mountain_bricks', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'botania:metamorphic_mountain_stone',
      });
      event.shaped('2x botania:metamorphic_fungal_bricks', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'botania:metamorphic_fungal_stone',
      });
      event.shaped('2x botania:metamorphic_swamp_bricks', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'botania:metamorphic_swamp_stone',
      });
      event.shaped('2x botania:metamorphic_desert_bricks', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'botania:metamorphic_desert_stone',
      });
      event.shaped('2x botania:metamorphic_taiga_bricks', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'botania:metamorphic_taiga_stone',
      });
      event.shaped('2x botania:metamorphic_mesa_bricks', ['ab', 'ba'], {
        a: 'rankine:mortar',
        b: 'botania:metamorphic_mesa_stone',
      });
      event.shaped('tconstruct:earth_cake', ['aaa', 'bcb', 'ddd'], {
        a: 'tconstruct:earth_slime_bucket',
        b: 'minecraft:glowstone_dust',
        c: 'minecraft:egg',
        d: 'minecraft:grass',
      });
      event.shaped('tconstruct:sky_cake', ['aaa', 'bcb', 'ddd'], {
        a: 'tconstruct:sky_slime_bucket',
        b: 'minecraft:glowstone_dust',
        c: 'minecraft:egg',
        d: 'hem:blueleaf_grass',
      });
      event.shaped('tconstruct:blood_cake', ['aaa', 'bcb', 'ddd'], {
        a: 'tconstruct:blood_bucket',
        b: 'tconstruct:blood_slime_ball',
        c: 'minecraft:egg',
        d: 'blue_skies:cherry_grass',
      });

      event.shaped('naturesaura:tainted_gold_block', ['aaa', 'aaa', 'aaa'], {
        a: 'naturesaura:tainted_gold',
      });
    },
    chapter_5_2: () => {
      event.remove({
        output: [
          'pneumaticcraft:compressed_bricks',
          'pneumaticcraft:reinforced_bricks',
          'rankine:simple_magnet',
          'rankine:cast_iron_sheetmetal',
          'rankine:invar_sheetmetal',
          'rankine: nickel_silver_sheetmetal',
          'rankine: titanium_alloy_sheetmetal',
          'rankine: nitinol_sheetmetal',
          'rankine: alnico_sheetmetal',
          `pneumaticcraft:turbine_blade`,
          'rankine: nickel_superalloy_sheetmetal',
          'rankine: titanium_sheetmetal',
          'rankine: nickel_sheetmetal',
          'rankine:silver_zinc_battery',
          'rankine:lead_acid_battery',
          `rankine:magnetometer`,
        ],
        type: 'minecraft:crafting_shaped',
      });

      event.shaped('pneumaticcraft:compressed_bricks', ['ab', 'ba'], {
        a: 'pneumaticcraft:compressed_stone',
        b: 'rankine:mortar',
      });
      event.shaped('pneumaticcraft:reinforced_bricks', ['ab', 'ba'], {
        a: 'pneumaticcraft:reinforced_stone',
        b: 'rankine:mortar',
      });

      event.shaped(`2x rankine:cast_iron_sheetmetal`, ['aba', 'aba', 'aba'], {
        a: `rankine:cast_iron_nugget`,
        b: `rankine:cast_iron_ingot`,
      });
      event.shaped(`2x rankine:invar_sheetmetal`, ['aba', 'aba', 'aba'], {
        a: `rankine:invar_nugget`,
        b: `rankine:invar_ingot`,
      });
      event.shaped(`2x rankine:cupronickel_sheetmetal`, ['aba', 'aba', 'aba'], {
        a: `rankine:cupronickel_nugget`,
        b: `rankine:cupronickel_ingot`,
      });
      event.shaped(
        `2x rankine:nickel_silver_sheetmetal`,
        ['aba', 'aba', 'aba'],
        {
          a: `rankine:nickel_silver_nugget`,
          b: `rankine:nickel_silver_ingot`,
        }
      );
      event.shaped(
        `2x rankine:titanium_alloy_sheetmetal`,
        ['aba', 'aba', 'aba'],
        {
          a: `rankine:titanium_alloy_nugget`,
          b: `rankine:titanium_alloy_ingot`,
        }
      );
      event.shaped(`2x rankine:nitinol_sheetmetal`, ['aba', 'aba', 'aba'], {
        a: `rankine:nitinol_nugget`,
        b: `rankine:nitinol_ingot`,
      });
      event.shaped(`2x rankine:alnico_sheetmetal`, ['aba', 'aba', 'aba'], {
        a: `rankine:alnico_nugget`,
        b: `rankine:alnico_ingot`,
      });

      event.shaped(
        `2x rankine:nickel_superalloy_sheetmetal`,
        ['aba', 'aba', 'aba'],
        {
          a: `rankine:nickel_superalloy_nugget`,
          b: `rankine:nickel_superalloy_ingot`,
        }
      );
      event.shaped(`2x rankine:titanium_sheetmetal`, ['aba', 'aba', 'aba'], {
        a: `rankine:titanium_nugget`,
        b: `rankine:titanium_ingot`,
      });
      event.shaped(`2x rankine:nickel_sheetmetal`, ['aba', 'aba', 'aba'], {
        a: `rankine:nickel_nugget`,
        b: `rankine:nickel_ingot`,
      });
      event.shaped('rankine:silver_zinc_battery', ['aba', 'cdc', 'aea'], {
        a: `rankine:vulcanized_rubber`,
        b: `rankine:silver_ingot`,
        c: 'minecraft:redstone',
        d: 'rankine:graphite_electrode',
        e: 'rankine:zinc_ingot',
      });
      event.shaped('rankine:lead_acid_battery', ['aba', 'cdc', 'aba'], {
        a: `rankine:vulcanized_rubber`,
        b: `rankine:lead_ingot`,
        c: 'minecraft:redstone',
        d: 'immersiveengineering:redstone_acid_bucket',
      });
    },
  });
});
