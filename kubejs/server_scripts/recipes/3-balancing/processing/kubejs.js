onEvent('recipes', event => {
  setBalanceRecipes({
    staging: () => {
      chapters.forEach(chapter => {
        event.forEachRecipe(
          {
            output: `#im:${chapter}`,
            or: [
              {
                type: 'minecraft:crafting_shaped',
              },
              {
                type: 'minecraft:crafting_shapeless',
              },
            ],
          },
          recipe => {
            recipe.stage(chapter);
          }
        );
      });
    },
    recipeCategories: () => {
      global.filteredRecipeCategories.forEach(type => {
        event.remove({type: type});
      });
    },
    itemFiltering: () => {
      global.filteredItems.forEach(item => {
        event.remove({output: item});
      });
    },
    // replaceInput: () => {
    //   event.replaceInput(
    //     {output: 'botania:dodge_ring'},
    //     'minecraft:emerald',
    //     'botania:terrasteel_nugget'
    //   );
    //   event.replaceInput(
    //     {output: 'botania:itemfinder'},
    //     'minecraft:emerald',
    //     'botania:terrasteel_ingot'
    //   );
    //   event.replaceInput(
    //     {output: 'naturesaura:shockwave_creator'},
    //     'minecraft:diamond_boots',
    //     'botania:elementium_boots'
    //   );
    //   event.replaceInput(
    //     {output: 'rankine:saddle_tree'},
    //     'rankine:steel_ingot',
    //     'naturesaura:sky_ingot'
    //   );
    //   event.replaceInput(
    //     {output: 'minecraft:enchanted_golden_apple'},
    //     'rankine:mischmetal_block',
    //     'rankine:amalgam_block'
    //   );
    //   event.replaceInput(
    //     {output: 'immersiveengineering:rs_engineering'},
    //     'minecraft:redstone',
    //     'extendedcrafting:redstone_ingot'
    //   );
    //   event.replaceInput(
    //     {
    //       output: [
    //         'extendedcrafting:elite_component',
    //         'pneumaticcraft:gps_tool',
    //         'compactcrafting:base',
    //         'immersiveengineering:rockcutter',
    //         'pneumaticcraft:jackhammer',
    //         'pneumaticcraft:gun_ammo_ap',
    //         'pneumaticcraft:assembly_drill',
    //         'pneumaticcraft:large_tank',
    //         'pneumaticcraft:smart_chest',
    //       ],
    //     },
    //     'minecraft:diamond',
    //     'rankine:titanium_ingot'
    //   );
    //   event.replaceInput('charcoal_pit:straw', 'farmersdelight:straw');

    //   event.replaceInput(
    //     {output: 'minecraft:bone_block'},
    //     'minecraft:bone_meal',
    //     'minecraft:bone'
    //   );

    //   event.replaceInput(
    //     {output: 'framedblocks:framed_torch'},
    //     'rankine:coke',
    //     'realistictorches:glowstone_crystal'
    //   );
    //   event.replaceInput(
    //     {output: 'framedblocks:framed_soul_torch'},
    //     'rankine:coke',
    //     'realistictorches:glowstone_crystal'
    //   );
    //   event.replaceInput(
    //     {input: 'farmersdelight:wheat_dough'},
    //     'farmersdelight:wheat_dough',
    //     'create:dough'
    //   );
    //   event.replaceInput(
    //     {output: 'rankine:sodium_arc_tube'},
    //     'rankine:xenon_nugget',
    //     'rankine:cobalt_nugget'
    //   );
    //   event.replaceInput(
    //     {output: 'rankine:sodium_arc_tube'},
    //     'rankine:sodium_ingot',
    //     'rankine:pink_salt'
    //   );
    //   event.replaceInput(
    //     {output: 'rankine:glass_cutter'},
    //     'rankine:alloy_rod',
    //     'rankine:black_gold_ingot'
    //   );

    //   event.replaceInput(
    //     {
    //       output: [
    //         'bloodmagic:masterritualstone',
    //         'bloodmagic:ritualstone',
    //         'waystones:waystone',
    //         'bloodmagic:bettercapacityrune',
    //       ],
    //     },
    //     '#forge:obsidian',
    //     'rankine:blood_obsidian'
    //   );
    //   event.replaceInput(
    //     {
    //       output: 'pneumaticcraft:drill_bit_diamond',
    //     },
    //     '#forge:storage_blocks/diamond',
    //     'rankine:titanium_alloy_block'
    //   );
    //   event.replaceInput(
    //     {
    //       output: 'rankine:ore_detector',
    //     },
    //     'rankine:indium_tin_oxide',
    //     'rankine:silicon_carbide'
    //   );
    //   event.replaceInput(
    //     {output: 'bloodmagic:orbcapacityrune'},
    //     '#forge:stone',
    //     'rankine:blood_obsidian'
    //   );
    //   event.replaceInput(
    //     {output: 'charcoal_pit:dynamite_remote'},
    //     'minecraft:ender_pearl',
    //     'minecraft:gunpowder'
    //   );
    //   event.replaceInput(
    //     {output: 'minecraft:comparator'},
    //     'minecraft:quartz',
    //     'undergarden:regalium_crystal'
    //   );
    //   event.replaceInput(
    //     {output: 'rankine:flood_gate'},
    //     '#forge:ingots/aluminum',
    //     'minecraft:iron_ingot'
    //   );

    //   event.replaceInput(
    //     {output: 'hexerei:book_of_shadows'},
    //     '#forge:dyes',
    //     'minecraft:red_dye'
    //   );

    //   event.replaceInput(
    //     {
    //       output: [
    //         'malum:gilded_ring',
    //         'malum:gilded_belt',
    //         'malum:spirit_jar',
    //       ],
    //     },
    //     'malum:hallowed_gold_ingot',
    //     'blue_skies:horizonite_ingot'
    //   );

    //   event.replaceInput(
    //     {input: 'paragon_textiles:wood_stain'},
    //     'minecraft:pink_dye',
    //     'minecraft:red_dye'
    //   );
    //   event.replaceInput(
    //     {
    //       output: [
    //         'naturesaura:infused_iron_sword',
    //         'naturesaura:infused_iron_hoe',
    //         'naturesaura:infused_iron_shovel',
    //         'naturesaura:infused_iron_axe',
    //         'naturesaura:infused_iron_pickaxe',
    //       ],
    //     },
    //     'naturesaura:ancient_stick',
    //     '#forge:rods/wooden'
    //   );
    //   event.replaceInput(
    //     {
    //       output: 'farmersdelight:roast_chicken_block',
    //     },
    //     'minecraft:bread',
    //     '#forge:flour'
    //   );
    //   event.replaceInput(
    //     {
    //       output: 'blue_skies:bag_of_spoils',
    //     },
    //     'farmersdelight:rope',
    //     'minecraft:string'
    //   );
    //   event.replaceInput(
    //     {
    //       output: ['bloodmagic:speedrune'],
    //     },
    //     '#forge:stone',
    //     'rankine:gray_marble'
    //   );

    //   event.replaceInput(
    //     {
    //       output: ['bloodmagic:altarcapacityrune'],
    //     },
    //     '#forge:stone',
    //     'rankine:black_marble'
    //   );
    //   event.replaceInput(
    //     {
    //       output: ['bloodmagic:dislocationrune', 'bloodmagic:accelerationrune'],
    //     },
    //     '#forge:stone',
    //     'rankine:rose_marble'
    //   );

    //   event.replaceInput(
    //     {
    //       output: 'sliceanddice:sprinkler',
    //     },
    //     '#forge:plates/copper',
    //     'naturesaura:sky_ingot'
    //   );
    //   event.replaceInput(
    //     {output: 'minecraft:piston'},
    //     'minecraft:iron_ingot',
    //     'create:andesite_alloy'
    //   );
    // },
    // remove: () => {
    //   [
    //     'occultism:ritual/possess_endermite',
    //     'occultism:ritual/possess_skeleton',
    //     'occultism:ritual/summon_wild_afrit',
    //     'occultism:ritual/summon_wild_hunt',
    //     'malum:spirit_transformation/netherrack',
    //     'malum:spirit_transformation/tuff',
    //     'malum:spirit_crucible/quartz',
    //     'malum:spirit_crucible/gunpowder',
    //     'malum:spirit_crucible/blazing_quartz',
    //     'extendedcrafting:black_iron_ingot',
    //     'extendedcrafting:basic_component',
    //     'twilightforest:equipment/fiery_ingot_crafting',
    //     'rankine:alloy_crafting/flint_and_steel',
    //     'immersiveengineering:arcfurnace/alloy_rose_gold',
    //     'immersiveengineering:alloysmelter/rose_gold',
    //     'bloodmagic:arc/reversion/magician_blood_orb',
    //     'bloodmagic:arc/reversion/apprentice_blood_orb',
    //     'bloodmagic:arc/reversion/weak_blood_orb',
    //     'create:kjs_2rln2i2207ucys433qklpuflr',
    //     'rankine:evaporation/water_ocean_evaporation',
    //     'rankine:evaporation/water_groundwater_evaporation',
    //     'rankine:evaporation/water_desert_evaporation',
    //     'rankine:alloying/damascus_steel_alloying',
    //     'rankine:alloying/crucible_steel_alloying',
    //     'rankine:alloying/stainless_steel_alloying',
    //     'immersiveengineering:crusher/ore_copper',
    //     'immersiveengineering:crusher/raw_ore_iron',
    //     'immersiveengineering:crusher/ore_nickel',
    //     'immersiveengineering:crusher/ore_iron',
    //     'immersiveengineering:crusher/ore_quartz',
    //     'immersiveengineering:crusher/raw_block_uranium',
    //     'immersiveengineering:crusher/raw_ore_uranium',
    //     'immersiveengineering:crusher/raw_block_iron',
    //     'immersiveengineering:crusher/ore_lead',
    //     'immersiveengineering:crusher/ore_nickel',
    //     'immersiveengineering:crusher/ore_iron',
    //     'immersiveengineering:crusher/ore_coal',
    //     'immersiveengineering:crusher/raw_ore_gold',
    //     'immersiveengineering:crusher/raw_ore_lead',
    //     'immersiveengineering:crusher/raw_ore_nickel',
    //     'immersiveengineering:crusher/ore_uranium',
    //     'immersiveengineering:crusher/raw_block_nickel',
    //     'immersiveengineering:crusher/raw_block_copper',
    //     'immersiveengineering:crusher/raw_block_gold',
    //     'immersiveengineering:crusher/raw_block_lead',
    //     // 'antiqueatlas:atlas_clone',
    //     // 'antiqueatlas:atlas_combine',
    //     'immersivepetroleum:hydrotreater/ethylene_plastic',
    //     'immersivepetroleum:hydrotreater/propylene_plastic',
    //     'pneumaticcraft:thermo_plant/plastic_from_lpg',
    //     'pneumaticcraft:thermo_plant/plastic_from_biodiesel',
    //     'farmersdelight:kjs_8tfqgi45o01oyyr06w45v3il2',
    //     'immersiveengineering:refinery/acetaldehyde',
    //     'pneumaticcraft:explosion_crafting/compressed_iron_block',
    //     'pneumaticcraft:thermo_plant/diamond_drill_bit',
    //     'immersiveengineering:crafting/nugget_constantan_to_ingot_constantan',
    //     'immersiveengineering:crafting/storage_constantan_to_ingot_constantan',
    //     'immersiveengineering:crafting/nugget_steel_to_ingot_steel',
    //     'immersiveengineering:crafting/storage_steel_to_ingot_steel',
    //     'immersiveengineering:crafting/ingot_constantan_to_nugget_constantan',
    //     'immersiveengineering:crafting/ingot_steel_to_nugget_steel',
    //     'immersiveengineering:crafting/ingot_constantan_to_storage_constantan',
    //     'immersiveengineering:crafting/ingot_steel_to_storage_steel',
    //     'immersiveengineering:squeezer/graphite_dust',
    //     'productivebees:honey_bucket',
    //     'productivebees:bee_produce/gems/opal_bee',
    //     'productivebees:bee_produce/gems/diamond_bee',
    //     'productivebees:bee_produce/fluids/oily_bee',
    //     'productivebees:bee_produce/ingots/steel_bee',
    //     'productivebees:bee_produce/pneumaticcraft/compressed_iron_bee',
    //     'productivebees:bee_produce/gems/tourmaline_bee',
    //     'productivebees:bee_produce/ingots/bismuth_bee',
    //     'productivebees:bee_produce/gems/pearl_bee',
    //     'productivebees:bee_produce/gems/fluorite_bee',
    //     'productivebees:bee_produce/gems/emerald_bee',
    //     'productivebees:bee_produce/gems/ruby_bee',
    //     'productivebees:bee_produce/gems/aquamarine_bee',
    //     'productivebees:bee_produce/gems/amber_bee',
    //     'productivebees:bee_produce/ingots/nickel_bee',
    //     'productivebees:bee_produce/ingots/platinum_bee',
    //     'productivebees:bee_produce/ingots/constantan_bee',
    //     'productivebees:bee_produce/ingots/osmium_bee',
    //     'productivebees:bee_produce/gems/topaz_bee',
    //     'productivebees:bee_produce/ingots/invar_bee',
    //     'productivebees:bee_produce/gems/sapphire_bee',
    //     'productivebees:bee_produce/gems/peridot_bee',
    //     'productivebees:bee_produce/gems/garnet_bee',
    //     'productivebees:bee_produce/ingots/iridium_bee',
    //     'productivebees:bee_produce/rancher_bee',
    //     'productivebees:bee_produce/ingots/electrum_bee',
    //     'productivebees:bee_produce/ingots/titanium_bee',
    //     'productivebees:bee_produce/ingots/tungsten_bee',
    //     'productivebees:stone_chip_block_hive_compressed_stone',
    //     'productivebees:stone_chip_block_hive_reinforced_stone',
    //     'productivebees:stone_chip_block_hive_tuff',
    //     'productivebees:bee_breeding/ingots/steel_bee',
    //     'productivebees:bee_breeding/gems/emerald_bee',
    //     'productivebees:bee_breeding/ingots/platinum_bee',
    //     'productivebees:bee_breeding/gems/amber_bee',
    //     'productivebees:bee_breeding/ingots/constantan_bee',
    //     'productivebees:bee_breeding/ingots/invar_bee',
    //     'productivebees:bee_breeding/ingots/osmium_bee',
    //     'productivebees:bee_breeding/ingots/electrum_bee',
    //     'productivebees:bee_breeding/ingots/nickel_bee',
    //     'productivebees:bee_breeding/ingots/titanium_bee',
    //     'productivebees:bee_breeding/ingots/bismuth_bee',
    //     'productivebees:bee_breeding/ingots/iridium_bee',
    //     'productivebees:bee_breeding/experience_bee',
    //     'productivebees:bee_breeding/gems/diamond_bee',
    //     'productivebees:bee_breeding/ingots/tungsten_bee',
    //     'productivebees:bee_breeding/ingots/radioactive_bee',
    //     'productivebees:centrifuge/fluids/honeycomb_oily',
    //     'productivebees:centrifuge/pneumaticcraft/honeycomb_compressed_iron',
    //     'productivebees:centrifuge/fluids/honeycomb_milky_fluid',
    //     'productivebees:bee_conversion/gems/sapphire_bee',
    //     'productivebees:bee_conversion/gems/ruby_bee',
    //     'productivebees:bee_conversion/gems/fluorite_bee',
    //     'productivebees:bee_conversion/gems/garnet_bee',
    //     'productivebees:bee_conversion/gems/topaz_bee',
    //     'productivebees:bee_conversion/gems/peridot_bee',
    //     'productivebees:bee_conversion/gems/opal_bee',
    //     'productivebees:bee_conversion/gems/aquamarine_bee',
    //     'productivebees:bee_conversion/gems/pearl_bee',
    //     'productivebees:bee_conversion/gems/amber_bee',
    //     'productivebees:bee_conversion/ingots/netherite_bee',
    //     'productivebees:bee_conversion/gems/amethyst_bee',
    //     'productivebees:garnet_incubation',
    //     'productivebees:invar_incubation',
    //     'productivebees:pearl_incubation',
    //     'productivebees:osmium_incubation',
    //     'productivebees:nickel_incubation',
    //     'productivebees:aquamarine_incubation',
    //     'productivebees:emerald_incubation',
    //     'productivebees:electrum_incubation',
    //     'productivebees:amber_incubation',
    //     'ecofriendly:detergent_banner_recipe',
    //     'ecofriendly:desertgent_carpet_recipe',
    //     'ecofriendly:detergent_wool_recipe',

    //     'productivebees:create/mixing/fluids/honeycomb_milky_fluid',
    //     'tconstruct:smeltery/entity_melting/heads/skeleton',
    //     'farmersdelight:milk_bucket_from_bottles',
    //     'rankine:alloy_crafting/rock_drill',
    //     'naturesaura:bottle_two_the_rebottling',
    //     'bloodsmeltery:smeltery/alloy/blood_stone',
    //     'hem:blueleafbarrel',
    //     'hem:composterblueleaf',
    //     'charcoal_pit:coke_torch',
    //     'rankine:alloying/rose_gold_alloying',
    //     'rankine:alloying/rose_gold_nr_alloying',
    //     'rankine:rose_gold_ingot',
    //     'rankine:rose_gold_nugget',
    //     'rankine:rose_gold_block',
    //     'immersiveengineering:redstone_acid_bucket',
    //     'pneumaticcraft:explosion_crafting/compressed_iron_ingot',

    //     'paragon_textiles:wicker_from_sugar_cane',
    //     'paragon_textiles:raw_fibers_from_plant_fibers',
    //     'paragon_textiles:red_bed',
    //     'paragon_textiles:orange_bed',
    //     'paragon_textiles:yellow_bed',
    //     'paragon_textiles:lime_bed',
    //     'paragon_textiles:green_bed',
    //     'paragon_textiles:cyan_bed',
    //     'paragon_textiles:light_blue_bed',
    //     'paragon_textiles:blue_bed',
    //     'paragon_textiles:magenta_bed',
    //     'paragon_textiles:purple_bed',
    //     'paragon_textiles:light_gray_bed',
    //     'paragon_textiles:gray_bed',
    //     'paragon_textiles:brown_bed',
    //     'paragon_textiles:black_bed',
    //     'paragon_textiles:white_bed',
    //     'paragon_textiles:pink_bed',
    //     'paragon_textiles:red_carpet',
    //     'paragon_textiles:orange_carpet',
    //     'paragon_textiles:yellow_carpet',
    //     'paragon_textiles:lime_carpet',
    //     'paragon_textiles:green_carpet',
    //     'paragon_textiles:cyan_carpet',
    //     'paragon_textiles:light_blue_carpet',
    //     'paragon_textiles:blue_carpet',
    //     'paragon_textiles:magenta_carpet',
    //     'paragon_textiles:purple_carpet',
    //     'paragon_textiles:light_gray_carpet',
    //     'paragon_textiles:gray_carpet',
    //     'paragon_textiles:brown_carpet',
    //     'paragon_textiles:black_carpet',
    //     'paragon_textiles:white_carpet',
    //     'paragon_textiles:pink_carpet',
    //     'paragon_textiles:red_banner',
    //     'paragon_textiles:orange_banner',
    //     'paragon_textiles:yellow_banner',
    //     'paragon_textiles:lime_banner',
    //     'paragon_textiles:green_banner',
    //     'paragon_textiles:cyan_banner',
    //     'paragon_textiles:light_blue_banner',
    //     'paragon_textiles:blue_banner',
    //     'paragon_textiles:magenta_banner',
    //     'paragon_textiles:purple_banner',
    //     'paragon_textiles:light_gray_banner',
    //     'paragon_textiles:gray_banner',
    //     'paragon_textiles:brown_banner',
    //     'paragon_textiles:black_banner',
    //     'paragon_textiles:white_banner',
    //     'paragon_textiles:pink_banner',
    //     'hexerei:leather_from_drying_rack',
    //     'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
    //     'immersiveengineering:crafting/copper_ingot_to_nugget_copper',
    //     'tconstruct:common/materials/copper_ingot_from_nuggets',
    //     'tconstruct:common/materials/copper_nugget_from_ingot',
    //     'tconstruct:smeltery/seared/chute_retextured',
    //     'tconstruct:smeltery/seared/drain_retextured',
    //     'create:crafting/materials/copper_ingot',
    //     'create:crafting/materials/copper_nugget',
    //     'charcoal_pit:coke_oven',
    //     'charcoal_pit:steam_press',
    //     'immersiveengineering:crafting/paper_from_sawdust',
    //     'rankine:zinc_ingot_from_zinc_block',
    //     'rankine:zinc_ingot_from_zinc_nugget',
    //     'rankine:zinc_block',
    //     'rankine:zinc_nugget',
    //     'rankine:aluminum_ingot_from_aluminum_block',
    //     'rankine:aluminum_ingot_from_aluminum_nugget',
    //     'rankine:aluminum_block',
    //     'rankine:aluminum_nugget',
    //     'rankine:cobalt_ingot_from_cobalt_block',
    //     'rankine:cobalt_ingot_from_cobalt_nugget',
    //     'rankine:cobalt_block',
    //     'rankine:cobalt_nugget',
    //   ].forEach(id => {
    //     event.remove({id: id});
    //   });

    //   event.remove({
    //     output: [
    //       'rankine:sodium_chloride_block',
    //       'botania:lexicon',
    //       'rankine:pancake_breakfast',
    //       'minecraft:beef',
    //       'minecraft:cooked_beef',
    //       'minecraft:mutton',
    //       'minecraft:cooked_mutton',
    //       'minecraft:porkchop',
    //       'minecraft:cooked_porkchop',
    //       'minecraft:soul_campfire',
    //       'hem:hot_air_balloon_item',
    //       'hem:airshipitem',
    //       'farmersdelight:hamburger',
    //       'charcoal_pit:mechanical_bellows',
    //       'minecraft:sugar',
    //       'minecraft:gunpowder',
    //       'waystones:warp_stone',
    //       'minecraft:netherite_ingot',
    //       'minecraft:soul_torch',
    //       'rankine:steel_gold_pan',
    //       'paragon_textiles:flaxseed_oil_bucket',
    //       'minecraft:beetroot_soup',
    //       'naturesaura:gold_powder',
    //       'naturesaura:gold_fiber',
    //       'hexerei:candle',
    //       'cold_sweat:thermometer',
    //       'blue_skies:winter_leaf_seeds',
    //       'blue_skies:pine_fruit_seeds',
    //       'charcoal_pit:mortar_pestle',
    //       'blue_skies:zeal_lighter',
    //       'minecraft:diorite',
    //       'minecraft:granite',
    //       'minecraft:andesite',
    //       'rankine:fire_clay_ball',
    //       'minecraft:rotten_flesh',
    //       'minecraft:leather',
    //       '#forge:dyes',
    //       'minecraft:bone_meal',
    //       'minecraft:rabbit_stew',
    //       'minecraft:string',
    //       'minecraft:paper',
    //       'rankine:pulp',
    //       'explorerscompass:explorerscompass',
    //       'minecraft:enchanting_table',
    //       'occultism:book_of_calling_foliot_lumberjack',
    //       'occultism:book_of_calling_foliot_cleaner',
    //       'occultism:book_of_calling_djinni_manage_machine',
    //       'minecraft:book',
    //       'immersiveengineering:redstone_acid_bucket',

    //       'immersiveengineering:stick_iron',
    //       'immersiveengineering:stick_steel',
    //       'occultism:book_of_calling_foliot_transport_items',
    //     ],
    //     or: [
    //       {type: 'minecraft:crafting_shaped'},
    //       {type: 'minecraft:crafting_shapeless'},
    //     ],
    //   });

    //   event.remove({
    //     input: [
    //       'ecofriendly:detergent_item_ym',
    //       '#rankine:cobbles',
    //       'minecraft:raw_copper_block',
    //       'minecraft:raw_iron_block',
    //     ],
    //     or: [
    //       {type: 'minecraft:crafting_shaped'},
    //       {type: 'minecraft:crafting_shapeless'},
    //     ],
    //   });

    //   event.remove({
    //     output: [
    //       'blue_skies:lunar_bookshelf',
    //       'blue_skies:bluebright_bookshelf',
    //       'naturesaura:ancient_sapling',
    //       'rankine:plant_fiber',
    //       'rankine:rope',
    //       'immersiveengineering:raw_block_silver',
    //       'immersiveengineering:raw_block_lead',
    //       'totemic:totem_whittling_knife',
    //       'rankine:alloy_helmet',
    //       'rankine:alloy_chestplate',
    //       'rankine:alloy_leggings',
    //       'rankine:alloy_boots',
    //       'mekanism:block_salt',
    //       'charcoal_pit:thatch',
    //       'hem:boileritem',
    //       'rankine:glass_cutter',
    //       'hexerei:mindful_trance_blend',
    //       'charcoal_pit:xp_crystal',
    //       'twilightforest:uncrafting_table',
    //       'extendedcrafting:basic_auto_table',
    //       'rankine:piston_crusher',
    //       'smallships:oak_brigg',
    //       'smallships:spruce_brigg',
    //       'smallships:birch_brigg',
    //       'smallships:jungle_brigg',
    //       'smallships:acacia_brigg',
    //       'smallships:dark_oak_brigg',
    //       'occultism:candle_white',
    //       'occultism:spirit_attuned_gem',
    //       'farmersdelight:cooking_pot',
    //       'minecraft:trident',
    //     ],
    //   });

    //   event.remove({
    //     input: [
    //       'malum:brilliant_stone',
    //       'malum:brilliant_deepslate',
    //       'malum:deepslate_soulstone_ore',
    //       'malum:soulstone_ore',
    //       'immersiveengineering:raw_block_silver',
    //       'immersiveengineering:raw_block_lead',
    //       '#farmersdelight:wild_crops',
    //       'ecofriendly:smelted_iron_can_ym',
    //       'minecraft:barrier',
    //     ],
    //   });

    //   event.remove({
    //     output: 'minecraft:black_dye',
    //     input: ['architects_palette:withered_bone'],
    //   });
    //   event.remove({
    //     output: 'extendedcrafting:luminessence',
    //     input: ['minecraft:glowstone_dust'],
    //   });
    //   event.remove({
    //     output: 'rankine:carbon_nugget',
    //     input: ['minecraft:charcoal', 'rankine:graphite', '#forge:coal_coke'],
    //   });
    //   event.remove({
    //     output: [
    //       'rankine:bronze_blunderbuss',
    //       'rankine:bronze_crowbar',
    //       'rankine:bronze_knife',
    //       'rankine:bronze_spear',
    //       'rankine:bronze_axe',
    //       'rankine:bronze_pickaxe',
    //       'rankine:bronze_shovel',
    //       'rankine:bronze_sword',
    //       'rankine:bronze_hammer',
    //       'rankine:bronze_hoe',
    //     ],
    //     input: ['rankine:brass_ingot'],
    //   });

    //   event.remove({
    //     output: 'minecraft:white_wool',
    //     input: ['minecraft:string'],
    //   });
    //   event.remove({
    //     output: 'paragon_textiles:raw_fibers',
    //     input: ['paragon_textiles:plant_fibers'],
    //   });
    //   event.remove({
    //     output: 'paragon_textiles:wicker',
    //     input: ['minecraft:sugar_cane'],
    //   });
    //   event.remove({
    //     output: 'minecraft:torch',
    //     input: [
    //       'minecraft:coal',
    //       'twilightforest:torchberries',
    //       'undergarden:ditchbulb_paste',
    //     ],
    //   });
    //   event.remove({
    //     input: Item.of('immersiveengineering:hammer').ignoreNBT(),
    //     output: ['#forge:plates'],
    //   });
    //   event.remove({
    //     output: [
    //       'minecraft:minecart',
    //       'minecraft:detector_rail',
    //       'minecraft:activator_rail',
    //       'minecraft:rail',
    //     ],
    //     input: [
    //       'rankine:aluminum_ingot',
    //       'rankine:osmium_ingot',
    //       'rankine:steel_ingot',
    //     ],
    //   });
    //   event.remove({
    //     output: 'extendedcrafting:luminessence',
    //     input: 'minecraft:redstone',
    //   });
    //   event.remove({
    //     output: 'minecraft:hopper',
    //     input: '#forge:ingots/aluminum',
    //   });
    //   event.remove({
    //     output: 'twilightforest:fiery_ingot',
    //     input: 'minecraft:iron_ingot',
    //   });
    //   event.remove({
    //     output: 'extendedcrafting:black_iron_ingot',
    //     input: 'minecraft:black_dye',
    //   });
    //   event.remove({
    //     output: 'extendedcrafting:redstone_ingot',
    //     input: 'minecraft:redstone',
    //   });
    //   event.remove({output: 'minecraft:painting', input: '#minecraft:wool'});
    //   event.remove({
    //     output: 'paragon_textiles:wicker',
    //     input: 'minecraft:sugar_cane',
    //   });
    //   event.remove({
    //     output: 'paragon_textiles:raw_fibers',
    //     input: 'paragon_textiles:plant_fibers',
    //   });
    //   event.remove({output: 'minecraft:jukebox', input: 'minecraft:diamond'});
    //   event.remove({
    //     output: '/rankine:bronze_.*/',
    //     input: 'rankine:brass_ingot',
    //   });
    //   event.remove({input: 'minecraft:clay_ball', output: 'minecraft:brick'});
    //   event.remove({
    //     output: 'minecraft:slime_ball',
    //     input: 'create:dough',
    //   });
    //   event.remove({
    //     output: 'minecraft:brewing_stand',
    //     input: 'rankine:alloy_rod',
    //   });
    //   event.remove({
    //     output: ['minecraft:bow', 'minecraft:crossbow'],
    //     input: 'farmersdelight:rope',
    //   });

    //   event.remove({
    //     input: ['rankine:cast_iron_ingot', 'rankine:bismuth_ingot'],
    //     output: 'rankine:cannonball',
    //   });
    //   event.remove({output: '#create:seats', input: '#minecraft:wool'});
    //   event.remove({
    //     output: 'productivebees:spawn_egg_configurable_bee',
    //     type: 'tconstruct:casting_table',
    //   });
    // },
    // stage: () => {
    //   [
    //     {
    //       input: [
    //         'paraglider:deku_leaf',
    //         'minecraft:bone_meal',
    //         'farmersdelight:safety_net',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       output: [
    //         'minecraft:red_terracotta',
    //         'paraglider:deku_leaf',
    //         'minecraft:stone_bricks',
    //         'minecraft:mossy_stone_bricks',
    //         'smallships:sail',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //   ].forEach(target => {
    //     event.forEachRecipe(target, recipe => {
    //       recipe.stage('chapter_2');
    //     });
    //   });

    //   [
    //     {
    //       input: [
    //         'hexerei:herb_drying_rack_full',
    //         'paragon_textiles:silk_wisps',
    //         'create:powdered_obsidian',
    //         '#create:seats',
    //         'minecraft:black_dye',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       output: [
    //         '#forge:bookshelves',
    //         'blue_skies:glowing_nature_stone',
    //         'blue_skies:glowing_blinding_stone',
    //         'minecraft:terracotta',
    //         'minecraft:white_terracotta',
    //         'minecraft:orange_terracotta',
    //         'minecraft:magenta_terracotta',
    //         'minecraft:light_blue_terracotta',
    //         'minecraft:lime_terracotta',
    //         'minecraft:gray_terracotta',
    //         'minecraft:light_gray_terracotta',
    //         'minecraft:cyan_terracotta',
    //         'minecraft:yellow_terracotta',
    //         'minecraft:black_terracotta',
    //         'minecraft:pink_terracotta',
    //         'minecraft:green_terracotta',
    //         'minecraft:brown_terracotta',
    //         'minecraft:blue_terracotta',
    //         'minecraft:purple_terracotta',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       output: [
    //         'minecraft:dark_oak_pressure_plate',
    //         'minecraft:acacia_pressure_plate',
    //         'minecraft:jungle_pressure_plate',
    //         'minecraft:birch_pressure_plate',
    //         'minecraft:spruce_pressure_plate',
    //         'minecraft:oak_pressure_plate',
    //         'minecraft:dark_oak_button',
    //         'minecraft:acacia_button',
    //         'minecraft:jungle_button',
    //         'minecraft:birch_button',
    //         'minecraft:spruce_button',
    //         'minecraft:oak_button',
    //         'architects_palette:plating_block',
    //         'architects_palette:plating_slab',
    //         'architects_palette:plating_stairs',
    //         'architects_palette:plating_wall',
    //         'architects_palette:plating_nub',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //   ].forEach(target => {
    //     event.forEachRecipe(target, recipe => {
    //       recipe.stage('chapter_3');
    //     });
    //   });

    //   [
    //     {
    //       input: [
    //         'tconstruct:necrotic_bone',
    //         'create:furnace_minecart_contraption',
    //         'paragon_textiles:wood_bleach',
    //         'paragon_textiles:wood_stain',
    //         'rankine:aluminum_nugget',
    //         'create:andesite_alloy',
    //         'minecraft:golden_apple',
    //         'realistictorches:glowstone_crystal',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       output: [
    //         'create:hand_crank',
    //         'minecraft:smoker',
    //         'minecraft:fletching_table',
    //         'minecraft:stonecutter',
    //         'create:shaft',
    //         'create:cogwheel',
    //         'minecraft:blast_furnace',
    //         'minecraft:grindstone',
    //         'create:large_cogwheel',
    //         'create:millstone',
    //         'minecraft:cartography_table',
    //         'minecraft:piston',
    //         'architects_palette:pipe',
    //         'cataclysm:ignitium_block',
    //         'cataclysm:witherite_block',
    //         'minecraft:smooth_quartz',
    //         'minecraft:smooth_quartz_stairs',
    //         'create:andesite_alloy',
    //         'minecraft:magma_block',
    //         'naturesaura:crimson_meal',
    //         'minecraft:enchanted_golden_apple',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //   ].forEach(target => {
    //     event.forEachRecipe(target, recipe => {
    //       recipe.stage('chapter_4');
    //     });
    //   });

    //   [
    //     {
    //       input: [
    //         'minecraft:waxed_copper_block',
    //         '#minecraft:wool',
    //         'botania:mana_string',
    //         'minecraft:ender_pearl',
    //         'naturesaura:token_euphoria',
    //         'naturesaura:token_terror',
    //         'naturesaura:token_rage',
    //         'naturesaura:token_grief',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       output: [
    //         'blue_skies:trough',
    //         '#minecraft:wool',
    //         'minecraft:black_bed',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       input: Item.of('productivebees:stone_chip').ignoreNBT(),
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       input: Item.of('productivebees:wood_chip').ignoreNBT(),
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       input: '@productivebees',
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //   ].forEach(target => {
    //     event.forEachRecipe(target, recipe => {
    //       recipe.stage('chapter_5_1');
    //     });
    //   });

    //   [
    //     {id: 'rankine:crafting/tree_tap'},
    //     {id: 'immersiveengineering:crafting/torch'},
    //     {
    //       output: [
    //         'pneumaticcraft:wall_lamp_inverted_white',
    //         'pneumaticcraft:display_table',
    //         'create:display_board',
    //         'create:display_link',
    //         'pneumaticcraft:aerial_interface',
    //         'create:mechanical_arm',
    //         'createaddition:rolling_mill',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       input: [
    //         'rankine:steel_nugget',
    //         'immersiveengineering:creosote_bucket',
    //         'rankine:graphite_electrode',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //   ].forEach(target => {
    //     event.forEachRecipe(target, recipe => {
    //       recipe.stage('chapter_5_2');
    //     });
    //   });

    //   [
    //     {
    //       input: [
    //         'rankine:perlite',
    //         'rankine:saltpeter',
    //         'rankine:stainless_steel',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //   ].forEach(target => {
    //     event.forEachRecipe(target, recipe => {
    //       recipe.stage('chapter_7');
    //     });
    //   });

    //   [
    //     {
    //       input: [
    //         'ecofriendly:garbage_item_ym',
    //         'rankine:pumice_soap',
    //         'rankine:cadmium_telluride_cell',
    //       ],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //     {
    //       output: ['ecofriendly:oil_drum_ym'],
    //       or: [
    //         {type: 'minecraft:crafting_shaped'},
    //         {type: 'minecraft:crafting_shapeless'},
    //       ],
    //     },
    //   ].forEach(target => {
    //     event.forEachRecipe(target, recipe => {
    //       recipe.stage('chapter_7_1');
    //     });
    //   });

    //   [].forEach(target => {
    //     event.forEachRecipe(target, recipe => {
    //       recipe.stage('chapter_7_2');
    //     });
    //   });
    // },
  });
});
