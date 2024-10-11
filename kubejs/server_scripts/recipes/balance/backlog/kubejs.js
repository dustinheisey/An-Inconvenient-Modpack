onEvent('recipes', (event) => {
  chapters.forEach((chapter) => {
    event.forEachRecipe(
      {
        output: `#im:${chapter}`,
        or: [
          {
            type: 'minecraft:crafting_shaped'
          },
          {
            type: 'minecraft:crafting_shapeless'
          }
        ]
      },
      (recipe) => {
        recipe.stage(chapter);
      }
    );
  });

  [
    'charcoal_pit:distill',
    'charcoal_pit:hot_blasting',
    'charcoal_pit:squish',
    'rankine:crucible',
    'rankine:foraging',
    'rankine:cauldron_drying'
  ].forEach((type) => {
    event.remove({ type: type });
  });

  setBalanceRecipes({
    replaceInput: () => {
      event.replaceInput(
        { output: 'botania:dodge_ring' },
        'minecraft:emerald',
        'botania:terrasteel_nugget'
      );
      event.replaceInput(
        { output: 'botania:itemfinder' },
        'minecraft:emerald',
        'botania:terrasteel_ingot'
      );
      event.replaceInput(
        { output: 'naturesaura:shockwave_creator' },
        'minecraft:diamond_boots',
        'botania:elementium_boots'
      );
      event.replaceInput(
        { output: 'rankine:saddle_tree' },
        'rankine:steel_ingot',
        'naturesaura:sky_ingot'
      );
      event.replaceInput(
        { output: 'minecraft:enchanted_golden_apple' },
        'rankine:mischmetal_block',
        'rankine:amalgam_block'
      );
      event.replaceInput(
        { output: 'immersiveengineering:rs_engineering' },
        'minecraft:redstone',
        'extendedcrafting:redstone_ingot'
      );
      event.replaceInput(
        {
          output: [
            'extendedcrafting:elite_component',
            'pneumaticcraft:gps_tool',
            'compactcrafting:base',
            'immersiveengineering:rockcutter',
            'pneumaticcraft:jackhammer',
            'pneumaticcraft:gun_ammo_ap',
            'pneumaticcraft:assembly_drill',
            'pneumaticcraft:large_tank',
            'pneumaticcraft:smart_chest'
          ]
        },
        'minecraft:diamond',
        'rankine:titanium_ingot'
      );
      event.replaceInput('charcoal_pit:straw', 'farmersdelight:straw');

      event.replaceInput(
        { output: 'minecraft:bone_block' },
        'minecraft:bone_meal',
        'minecraft:bone'
      );

      event.replaceInput(
        { output: 'framedblocks:framed_torch' },
        'rankine:coke',
        'realistictorches:glowstone_crystal'
      );
      event.replaceInput(
        { output: 'framedblocks:framed_soul_torch' },
        'rankine:coke',
        'realistictorches:glowstone_crystal'
      );
      event.replaceInput(
        { input: 'farmersdelight:wheat_dough' },
        'farmersdelight:wheat_dough',
        'create:dough'
      );
      event.replaceInput(
        { output: 'rankine:sodium_arc_tube' },
        'rankine:xenon_nugget',
        'rankine:cobalt_nugget'
      );
      event.replaceInput(
        { output: 'rankine:sodium_arc_tube' },
        'rankine:sodium_ingot',
        'rankine:pink_salt'
      );
      event.replaceInput(
        { output: 'rankine:glass_cutter' },
        'rankine:alloy_rod',
        'rankine:black_gold_ingot'
      );

      event.replaceInput(
        {
          output: [
            'bloodmagic:masterritualstone',
            'bloodmagic:ritualstone',
            'waystones:waystone',
            'bloodmagic:bettercapacityrune'
          ]
        },
        '#forge:obsidian',
        'rankine:blood_obsidian'
      );
      event.replaceInput(
        {
          output: 'pneumaticcraft:drill_bit_diamond'
        },
        '#forge:storage_blocks/diamond',
        'rankine:titanium_alloy_block'
      );
      event.replaceInput(
        {
          output: 'rankine:ore_detector'
        },
        'rankine:indium_tin_oxide',
        'rankine:silicon_carbide'
      );
      event.replaceInput(
        { output: 'bloodmagic:orbcapacityrune' },
        '#forge:stone',
        'rankine:blood_obsidian'
      );
      event.replaceInput(
        { output: 'charcoal_pit:dynamite_remote' },
        'minecraft:ender_pearl',
        'minecraft:gunpowder'
      );
      event.replaceInput(
        { output: 'minecraft:comparator' },
        'minecraft:quartz',
        'undergarden:regalium_crystal'
      );
      event.replaceInput(
        { output: 'rankine:flood_gate' },
        '#forge:ingots/aluminum',
        'minecraft:iron_ingot'
      );

      event.replaceInput(
        { output: 'hexerei:book_of_shadows' },
        '#forge:dyes',
        'minecraft:red_dye'
      );

      event.replaceInput(
        {
          output: ['malum:gilded_ring', 'malum:gilded_belt', 'malum:spirit_jar']
        },
        'malum:hallowed_gold_ingot',
        'blue_skies:horizonite_ingot'
      );

      event.replaceInput(
        { input: 'paragon_textiles:wood_stain' },
        'minecraft:pink_dye',
        'minecraft:red_dye'
      );
      event.replaceInput(
        {
          output: [
            'naturesaura:infused_iron_sword',
            'naturesaura:infused_iron_hoe',
            'naturesaura:infused_iron_shovel',
            'naturesaura:infused_iron_axe',
            'naturesaura:infused_iron_pickaxe'
          ]
        },
        'naturesaura:ancient_stick',
        '#forge:rods/wooden'
      );
      event.replaceInput(
        {
          output: 'farmersdelight:roast_chicken_block'
        },
        'minecraft:bread',
        '#forge:flour'
      );
      event.replaceInput(
        {
          output: 'blue_skies:bag_of_spoils'
        },
        'farmersdelight:rope',
        'minecraft:string'
      );
      event.replaceInput(
        {
          output: ['bloodmagic:speedrune']
        },
        '#forge:stone',
        'rankine:gray_marble'
      );

      event.replaceInput(
        {
          output: ['bloodmagic:altarcapacityrune']
        },
        '#forge:stone',
        'rankine:black_marble'
      );
      event.replaceInput(
        {
          output: ['bloodmagic:dislocationrune', 'bloodmagic:accelerationrune']
        },
        '#forge:stone',
        'rankine:rose_marble'
      );

      event.replaceInput(
        {
          output: 'sliceanddice:sprinkler'
        },
        '#forge:plates/copper',
        'naturesaura:sky_ingot'
      );
      event.replaceInput(
        { output: 'minecraft:piston' },
        'minecraft:iron_ingot',
        'create:andesite_alloy'
      );
    },
    remove: () => {
      [
        'occultism:ritual/possess_endermite',
        'occultism:ritual/possess_skeleton',
        'occultism:ritual/summon_wild_afrit',
        'occultism:ritual/summon_wild_hunt',
        'malum:spirit_transformation/netherrack',
        'malum:spirit_transformation/tuff',
        'malum:spirit_infusion/soul_stained_steel_helmet',
        'malum:spirit_infusion/soul_stained_steel_chestplate',
        'malum:spirit_infusion/soul_stained_steel_leggings',
        'malum:spirit_infusion/soul_stained_steel_boots',
        'malum:spirit_infusion/soul_stained_steel_ingot',
        'malum:spirit_infusion/corrupted_resonance',
        'malum:spirit_infusion/alchemical_impetus',
        'malum:spirit_infusion/ether',
        'malum:spirit_infusion/spirit_fabric',
        'malum:spirit_infusion/twisted_rock',
        'malum:spirit_infusion/tainted_rock',
        'malum:spirit_infusion/hex_ash',
        'malum:spirit_crucible/quartz',
        'malum:spirit_crucible/gunpowder',
        'malum:spirit_crucible/blazing_quartz',
        'extendedcrafting:black_iron_ingot',
        'extendedcrafting:basic_component',
        'twilightforest:equipment/fiery_ingot_crafting',
        'rankine:crushing/leaves_crushing',
        'rankine:crushing/sapling_crushing',
        'rankine:alloy_crafting/flint_and_steel',
        'immersiveengineering:arcfurnace/alloy_rose_gold',
        'immersiveengineering:alloysmelter/rose_gold',
        'bloodmagic:arc/reversion/magician_blood_orb',
        'bloodmagic:arc/reversion/apprentice_blood_orb',
        'bloodmagic:arc/reversion/weak_blood_orb',
        'create:kjs_2rln2i2207ucys433qklpuflr',
        'rankine:evaporation/water_ocean_evaporation',
        'rankine:evaporation/water_groundwater_evaporation',
        'rankine:evaporation/water_desert_evaporation',
        'rankine:alloying/damascus_steel_alloying',
        'rankine:alloying/crucible_steel_alloying',
        'rankine:alloying/stainless_steel_alloying',
        'immersiveengineering:crusher/ore_copper',
        'immersiveengineering:crusher/raw_ore_iron',
        'immersiveengineering:crusher/ore_nickel',
        'immersiveengineering:crusher/ore_iron',
        'immersiveengineering:crusher/ore_quartz',
        'immersiveengineering:crusher/raw_block_uranium',
        'immersiveengineering:crusher/raw_ore_uranium',
        'immersiveengineering:crusher/raw_block_iron',
        'immersiveengineering:crusher/ore_lead',
        'immersiveengineering:crusher/ore_nickel',
        'immersiveengineering:crusher/ore_iron',
        'immersiveengineering:crusher/ore_coal',
        'immersiveengineering:crusher/raw_ore_gold',
        'immersiveengineering:crusher/raw_ore_lead',
        'immersiveengineering:crusher/raw_ore_nickel',
        'immersiveengineering:crusher/ore_uranium',
        'immersiveengineering:crusher/raw_block_nickel',
        'immersiveengineering:crusher/raw_block_copper',
        'immersiveengineering:crusher/raw_block_gold',
        'immersiveengineering:crusher/raw_block_lead',
        // 'antiqueatlas:atlas_clone',
        // 'antiqueatlas:atlas_combine',
        'immersivepetroleum:hydrotreater/ethylene_plastic',
        'immersivepetroleum:hydrotreater/propylene_plastic',
        'pneumaticcraft:thermo_plant/plastic_from_lpg',
        'pneumaticcraft:thermo_plant/plastic_from_biodiesel',
        'farmersdelight:kjs_8tfqgi45o01oyyr06w45v3il2',
        'immersiveengineering:refinery/acetaldehyde',
        'pneumaticcraft:explosion_crafting/compressed_iron_block',
        'pneumaticcraft:thermo_plant/diamond_drill_bit',
        'immersiveengineering:crafting/nugget_constantan_to_ingot_constantan',
        'immersiveengineering:crafting/storage_constantan_to_ingot_constantan',
        'immersiveengineering:crafting/nugget_steel_to_ingot_steel',
        'immersiveengineering:crafting/storage_steel_to_ingot_steel',
        'immersiveengineering:crafting/ingot_constantan_to_nugget_constantan',
        'immersiveengineering:crafting/ingot_steel_to_nugget_steel',
        'immersiveengineering:crafting/ingot_constantan_to_storage_constantan',
        'immersiveengineering:crafting/ingot_steel_to_storage_steel',
        'immersiveengineering:squeezer/graphite_dust',
        'productivebees:honey_bucket',
        'productivebees:bee_produce/gems/opal_bee',
        'productivebees:bee_produce/gems/diamond_bee',
        'productivebees:bee_produce/fluids/oily_bee',
        'productivebees:bee_produce/ingots/steel_bee',
        'productivebees:bee_produce/pneumaticcraft/compressed_iron_bee',
        'productivebees:bee_produce/gems/tourmaline_bee',
        'productivebees:bee_produce/ingots/bismuth_bee',
        'productivebees:bee_produce/gems/pearl_bee',
        'productivebees:bee_produce/gems/fluorite_bee',
        'productivebees:bee_produce/gems/emerald_bee',
        'productivebees:bee_produce/gems/ruby_bee',
        'productivebees:bee_produce/gems/aquamarine_bee',
        'productivebees:bee_produce/gems/amber_bee',
        'productivebees:bee_produce/ingots/nickel_bee',
        'productivebees:bee_produce/ingots/platinum_bee',
        'productivebees:bee_produce/ingots/constantan_bee',
        'productivebees:bee_produce/ingots/osmium_bee',
        'productivebees:bee_produce/gems/topaz_bee',
        'productivebees:bee_produce/ingots/invar_bee',
        'productivebees:bee_produce/gems/sapphire_bee',
        'productivebees:bee_produce/gems/peridot_bee',
        'productivebees:bee_produce/gems/garnet_bee',
        'productivebees:bee_produce/ingots/iridium_bee',
        'productivebees:bee_produce/rancher_bee',
        'productivebees:bee_produce/ingots/electrum_bee',
        'productivebees:bee_produce/ingots/titanium_bee',
        'productivebees:bee_produce/ingots/tungsten_bee',
        'productivebees:stone_chip_block_hive_compressed_stone',
        'productivebees:stone_chip_block_hive_reinforced_stone',
        'productivebees:stone_chip_block_hive_tuff',
        'productivebees:bee_breeding/ingots/steel_bee',
        'productivebees:bee_breeding/gems/emerald_bee',
        'productivebees:bee_breeding/ingots/platinum_bee',
        'productivebees:bee_breeding/gems/amber_bee',
        'productivebees:bee_breeding/ingots/constantan_bee',
        'productivebees:bee_breeding/ingots/invar_bee',
        'productivebees:bee_breeding/ingots/osmium_bee',
        'productivebees:bee_breeding/ingots/electrum_bee',
        'productivebees:bee_breeding/ingots/nickel_bee',
        'productivebees:bee_breeding/ingots/titanium_bee',
        'productivebees:bee_breeding/ingots/bismuth_bee',
        'productivebees:bee_breeding/ingots/iridium_bee',
        'productivebees:bee_breeding/experience_bee',
        'productivebees:bee_breeding/gems/diamond_bee',
        'productivebees:bee_breeding/ingots/tungsten_bee',
        'productivebees:bee_breeding/ingots/radioactive_bee',
        'productivebees:centrifuge/fluids/honeycomb_oily',
        'productivebees:centrifuge/pneumaticcraft/honeycomb_compressed_iron',
        'productivebees:centrifuge/fluids/honeycomb_milky_fluid',
        'productivebees:bee_conversion/gems/sapphire_bee',
        'productivebees:bee_conversion/gems/ruby_bee',
        'productivebees:bee_conversion/gems/fluorite_bee',
        'productivebees:bee_conversion/gems/garnet_bee',
        'productivebees:bee_conversion/gems/topaz_bee',
        'productivebees:bee_conversion/gems/peridot_bee',
        'productivebees:bee_conversion/gems/opal_bee',
        'productivebees:bee_conversion/gems/aquamarine_bee',
        'productivebees:bee_conversion/gems/pearl_bee',
        'productivebees:bee_conversion/gems/amber_bee',
        'productivebees:bee_conversion/ingots/netherite_bee',
        'productivebees:bee_conversion/gems/amethyst_bee',
        'productivebees:garnet_incubation',
        'productivebees:invar_incubation',
        'productivebees:pearl_incubation',
        'productivebees:osmium_incubation',
        'productivebees:nickel_incubation',
        'productivebees:aquamarine_incubation',
        'productivebees:emerald_incubation',
        'productivebees:electrum_incubation',
        'productivebees:amber_incubation',
        'ecofriendly:detergent_banner_recipe',
        'ecofriendly:desertgent_carpet_recipe',
        'ecofriendly:detergent_wool_recipe',

        'productivebees:create/mixing/fluids/honeycomb_milky_fluid',
        'tconstruct:smeltery/entity_melting/heads/skeleton',
        'farmersdelight:milk_bucket_from_bottles',
        'rankine:alloy_crafting/rock_drill',
        'naturesaura:bottle_two_the_rebottling',
        'bloodsmeltery:smeltery/alloy/blood_stone',
        'hem:blueleafbarrel',
        'hem:composterblueleaf',
        'charcoal_pit:coke_torch',
        'rankine:alloying/rose_gold_alloying',
        'rankine:alloying/rose_gold_nr_alloying',
        'rankine:rose_gold_ingot',
        'rankine:rose_gold_nugget',
        'rankine:rose_gold_block',
        'immersiveengineering:redstone_acid_bucket',
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'immersiveengineering:crafting/sheetmetal_copper',
        'paragon_textiles:wicker_from_sugar_cane',
        'paragon_textiles:raw_fibers_from_plant_fibers',
        'paragon_textiles:red_bed',
        'paragon_textiles:orange_bed',
        'paragon_textiles:yellow_bed',
        'paragon_textiles:lime_bed',
        'paragon_textiles:green_bed',
        'paragon_textiles:cyan_bed',
        'paragon_textiles:light_blue_bed',
        'paragon_textiles:blue_bed',
        'paragon_textiles:magenta_bed',
        'paragon_textiles:purple_bed',
        'paragon_textiles:light_gray_bed',
        'paragon_textiles:gray_bed',
        'paragon_textiles:brown_bed',
        'paragon_textiles:black_bed',
        'paragon_textiles:white_bed',
        'paragon_textiles:pink_bed',
        'paragon_textiles:red_carpet',
        'paragon_textiles:orange_carpet',
        'paragon_textiles:yellow_carpet',
        'paragon_textiles:lime_carpet',
        'paragon_textiles:green_carpet',
        'paragon_textiles:cyan_carpet',
        'paragon_textiles:light_blue_carpet',
        'paragon_textiles:blue_carpet',
        'paragon_textiles:magenta_carpet',
        'paragon_textiles:purple_carpet',
        'paragon_textiles:light_gray_carpet',
        'paragon_textiles:gray_carpet',
        'paragon_textiles:brown_carpet',
        'paragon_textiles:black_carpet',
        'paragon_textiles:white_carpet',
        'paragon_textiles:pink_carpet',
        'paragon_textiles:red_banner',
        'paragon_textiles:orange_banner',
        'paragon_textiles:yellow_banner',
        'paragon_textiles:lime_banner',
        'paragon_textiles:green_banner',
        'paragon_textiles:cyan_banner',
        'paragon_textiles:light_blue_banner',
        'paragon_textiles:blue_banner',
        'paragon_textiles:magenta_banner',
        'paragon_textiles:purple_banner',
        'paragon_textiles:light_gray_banner',
        'paragon_textiles:gray_banner',
        'paragon_textiles:brown_banner',
        'paragon_textiles:black_banner',
        'paragon_textiles:white_banner',
        'paragon_textiles:pink_banner',
        'hexerei:leather_from_drying_rack',
        'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
        'immersiveengineering:crafting/copper_ingot_to_nugget_copper',
        'tconstruct:common/materials/copper_ingot_from_nuggets',
        'tconstruct:common/materials/copper_nugget_from_ingot',
        'tconstruct:smeltery/seared/chute_retextured',
        'tconstruct:smeltery/seared/drain_retextured',
        'create:crafting/materials/copper_ingot',
        'create:crafting/materials/copper_nugget',
        'charcoal_pit:coke_oven',
        'charcoal_pit:steam_press',
        'immersiveengineering:crafting/paper_from_sawdust',
        'rankine:zinc_ingot_from_zinc_block',
        'rankine:zinc_ingot_from_zinc_nugget',
        'rankine:zinc_block',
        'rankine:zinc_nugget',
        'rankine:aluminum_ingot_from_aluminum_block',
        'rankine:aluminum_ingot_from_aluminum_nugget',
        'rankine:aluminum_block',
        'rankine:aluminum_nugget',
        'rankine:cobalt_ingot_from_cobalt_block',
        'rankine:cobalt_ingot_from_cobalt_nugget',
        'rankine:cobalt_block',
        'rankine:cobalt_nugget'
      ].forEach((id) => {
        event.remove({ id: id });
      });

      event.remove({
        output: [
          'rankine:sodium_chloride_block',
          'botania:lexicon',
          'rankine:pancake_breakfast',
          'minecraft:beef',
          'minecraft:cooked_beef',
          'minecraft:mutton',
          'minecraft:cooked_mutton',
          'minecraft:porkchop',
          'minecraft:cooked_porkchop',
          'minecraft:soul_campfire',
          'hem:hot_air_balloon_item',
          'hem:airshipitem',
          'farmersdelight:hamburger',
          'charcoal_pit:mechanical_bellows',
          'minecraft:sugar',
          'minecraft:gunpowder',
          'waystones:warp_stone',
          'minecraft:netherite_ingot',
          'minecraft:soul_torch',
          'rankine:steel_gold_pan',

          'paragon_textiles:flaxseed_oil_bucket',
          'minecraft:beetroot_soup',
          'naturesaura:gold_powder',
          'naturesaura:gold_fiber',
          'hexerei:candle',
          'cold_sweat:thermometer',
          'blue_skies:winter_leaf_seeds',
          'blue_skies:pine_fruit_seeds',
          'rankine:refractory_brick',
          'rankine:high_refractory_brick',
          'rankine:ultra_high_refractory_brick',
          'charcoal_pit:mortar_pestle',
          'blue_skies:zeal_lighter',
          'minecraft:diorite',
          'minecraft:granite',
          'minecraft:andesite',
          'rankine:fire_clay_ball',
          'minecraft:rotten_flesh',
          'minecraft:leather',
          '#forge:dyes',
          'minecraft:bone_meal',
          'minecraft:rabbit_stew',
          'minecraft:string',
          'minecraft:paper',
          'rankine:pulp',
          'explorerscompass:explorerscompass',
          'minecraft:enchanting_table',
          'occultism:book_of_calling_foliot_lumberjack',
          'occultism:book_of_calling_foliot_cleaner',
          'occultism:book_of_calling_djinni_manage_machine',
          'minecraft:book',
          'immersiveengineering:redstone_acid_bucket',

          'immersiveengineering:stick_iron',
          'immersiveengineering:stick_steel',
          'occultism:book_of_calling_foliot_transport_items'
        ],
        or: [
          { type: 'minecraft:crafting_shaped' },
          { type: 'minecraft:crafting_shapeless' }
        ]
      });

      event.remove({
        input: [
          'ecofriendly:detergent_item_ym',
          '#rankine:cobbles',
          'minecraft:raw_copper_block',
          'minecraft:raw_iron_block'
        ],
        or: [
          { type: 'minecraft:crafting_shaped' },
          { type: 'minecraft:crafting_shapeless' }
        ]
      });

      event.remove({
        output: [
          'blue_skies:lunar_bookshelf',
          'blue_skies:bluebright_bookshelf',
          'naturesaura:ancient_sapling',
          'rankine:plant_fiber',
          'rankine:rope',
          'immersiveengineering:raw_block_silver',
          'immersiveengineering:raw_block_lead',
          'totemic:totem_whittling_knife',
          'rankine:alloy_helmet',
          'rankine:alloy_chestplate',
          'rankine:alloy_leggings',
          'rankine:alloy_boots',
          'mekanism:block_salt',
          'charcoal_pit:thatch',
          'hem:boileritem',
          'rankine:glass_cutter',
          'hexerei:mindful_trance_blend',
          'charcoal_pit:xp_crystal',
          'twilightforest:uncrafting_table',
          'minecraft:compass',
          'minecraft:brewing_stand',
          'minecraft:crossbow',
          'minecraft:map',
          'blue_skies:tool_box',
          'extendedcrafting:basic_auto_table',
          'rankine:piston_crusher',
          'rankine:sediment_fan',
          'smallships:oak_brigg',
          'smallships:spruce_brigg',
          'smallships:birch_brigg',
          'smallships:jungle_brigg',
          'smallships:acacia_brigg',
          'smallships:dark_oak_brigg',
          'twilightforest:magic_map',
          'twilightforest:maze_map',
          'twilightforest:ore_map',
          'occultism:candle_white',
          'occultism:spirit_attuned_gem',
          'farmersdelight:cooking_pot',
          'minecraft:trident'
        ]
      });

      event.remove({
        input: [
          'malum:brilliant_stone',
          'malum:brilliant_deepslate',
          'malum:deepslate_soulstone_ore',
          'malum:soulstone_ore',
          'immersiveengineering:raw_block_silver',
          'immersiveengineering:raw_block_lead',
          '#farmersdelight:wild_crops',
          'ecofriendly:smelted_iron_can_ym',
          'minecraft:barrier'
        ]
      });

      event.remove({
        output: 'minecraft:black_dye',
        input: ['architects_palette:withered_bone']
      });
      event.remove({
        output: 'extendedcrafting:luminessence',
        input: ['minecraft:glowstone_dust']
      });
      event.remove({
        output: 'rankine:carbon_nugget',
        input: ['minecraft:charcoal', 'rankine:graphite', '#forge:coal_coke']
      });
      event.remove({
        output: [
          'rankine:bronze_blunderbuss',
          'rankine:bronze_crowbar',
          'rankine:bronze_knife',
          'rankine:bronze_spear',
          'rankine:bronze_axe',
          'rankine:bronze_pickaxe',
          'rankine:bronze_shovel',
          'rankine:bronze_sword',
          'rankine:bronze_hammer',
          'rankine:bronze_hoe'
        ],
        input: ['rankine:brass_ingot']
      });

      event.remove({
        output: 'minecraft:white_wool',
        input: ['minecraft:string']
      });
      event.remove({
        output: 'paragon_textiles:raw_fibers',
        input: ['paragon_textiles:plant_fibers']
      });
      event.remove({
        output: 'paragon_textiles:wicker',
        input: ['minecraft:sugar_cane']
      });
      event.remove({
        output: 'minecraft:torch',
        input: [
          'minecraft:coal',
          'twilightforest:torchberries',
          'undergarden:ditchbulb_paste'
        ]
      });
      event.remove({
        input: Item.of('immersiveengineering:hammer').ignoreNBT(),
        output: ['#forge:plates']
      });
      event.remove({
        output: [
          'minecraft:minecart',
          'minecraft:detector_rail',
          'minecraft:activator_rail',
          'minecraft:rail'
        ],
        input: [
          'rankine:aluminum_ingot',
          'rankine:osmium_ingot',
          'rankine:steel_ingot'
        ]
      });
      event.remove({
        output: 'extendedcrafting:luminessence',
        input: 'minecraft:redstone'
      });
      event.remove({
        output: 'minecraft:hopper',
        input: '#forge:ingots/aluminum'
      });
      event.remove({
        output: 'twilightforest:fiery_ingot',
        input: 'minecraft:iron_ingot'
      });
      event.remove({
        output: 'extendedcrafting:black_iron_ingot',
        input: 'minecraft:black_dye'
      });
      event.remove({
        output: 'extendedcrafting:redstone_ingot',
        input: 'minecraft:redstone'
      });
      event.remove({ output: 'minecraft:painting', input: '#minecraft:wool' });
      event.remove({
        output: 'paragon_textiles:wicker',
        input: 'minecraft:sugar_cane'
      });
      event.remove({
        output: 'paragon_textiles:raw_fibers',
        input: 'paragon_textiles:plant_fibers'
      });
      event.remove({ output: 'minecraft:jukebox', input: 'minecraft:diamond' });
      event.remove({
        output: '/rankine:bronze_.*/',
        input: 'rankine:brass_ingot'
      });
      event.remove({ input: 'minecraft:clay_ball', output: 'minecraft:brick' });
      event.remove({
        output: 'minecraft:slime_ball',
        input: 'create:dough'
      });
      event.remove({
        output: 'minecraft:brewing_stand',
        input: 'rankine:alloy_rod'
      });
      event.remove({
        output: ['minecraft:bow', 'minecraft:crossbow'],
        input: 'farmersdelight:rope'
      });

      event.remove({
        input: ['rankine:cast_iron_ingot', 'rankine:bismuth_ingot'],
        output: 'rankine:cannonball'
      });
      event.remove({ output: '#create:seats', input: '#minecraft:wool' });
      event.remove({
        output: 'productivebees:spawn_egg_configurable_bee',
        type: 'tconstruct:casting_table'
      });
    },
    filter: () => {
      event.remove({
        output: [
          'ceramics:porcelain_brick',
          'croptopia:salt_ore',
          'salt:rock_salt_ore',
          'salt:deepslate_rock_salt_ore',
          'salt:raw_rock_salt_block',
          'salt:salt_cluster',
          'salt:large_salt_bud',
          'salt:medium_salt_bud',
          'salt:small_salt_bud',
          'salt:raw_rock_salt',
          // start new stuff
          'minecraft:stone_hoe',
          'blue_skies:turquoise_stone_hoe',
          'charcoal_pit:copper_hoe',
          'rankine:bronze_hoe',
          // end new stuff
          'minecraft:composter',
          'rankine:thermometer',
          'za:sea_urchin',
          'artifacts:mimic_spawn_egg',
          'artifacts:everlasting_beef',
          'artifacts:eternal_steak',
          'malum:brilliant_stone',
          'malum:brilliant_deepslate',
          'malum:deepslate_soulstone_ore',
          'malum:soulstone_ore',
          'paraglider:horned_statue',
          'blue_skies:bag_of_spoils',
          'rankine:steel_sheetmetal',
          'tconstruct:plate_cast',
          'tconstruct:plate_sand_cast',
          'tconstruct:plate_red_sand_cast',
          'createaddition:gold_spool',
          'createaddition:copper_spool',
          'createaddition:spool',
          'createaddition:gold_wire',
          'createaddition:iron_wire',
          'createaddition:redstone_relay',
          'createaddition:connector',
          'productivebees:nest_locator',
          'minecraft:loom',
          'farmersdelight:basket',
          'createaddition:copper_rod',
          'createaddition:gold_rod',
          'createaddition:brass_rod',
          'architects_palette:charcoal_block',
          'farmersdelight:bacon',
          'productivebees:adv_breed_all_bees',
          'productivebees:sand_nest',
          'immersiveengineering:raw_block_lead',
          'hexerei:quicksilver_bottle',
          'rankine:polished_pegmatite_stairs',
          'hem:blueleafwheatmedium',
          'rankine:yellow_birch_boat',
          'immersiveengineering:nugget_uranium',
          'immersiveengineering:deepslate_ore_lead',
          'blue_skies:glowing_aquatic_stone',
          'occultism:silver_ore',
          'immersiveengineering:sword_steel',
          'ecofriendly:vertical_beet_ym_2',
          'occultism:lighted_air',
          'tconstruct:bloodshroom_wood',
          'tconstruct:greenheart_planks_stairs',
          'tconstruct:greenheart_log',
          'rankine:nepheline_syenite_bricks_stairs',
          'charcoal_pit:popcorn',
          'rankine:garland',
          'rankine:norite',
          'immersiveengineering:shovel_steel',
          'rankine:gray_granite_bricks_slab',
          'ecofriendly:bilberry_ground_2',
          'minecraft:birch_boat',
          'rankine:polished_kimberlite_slab',
          'rankine:honey_locust_boat',
          'createaddition:bioethanol_bucket',
          'charcoal_pit:wing',
          'create:copper_nugget',
          'charcoal_pit:sakura_sapling',
          'rankine:native_bismuth_ore',
          'immersiveengineering:raw_block_aluminum',
          'immersiveengineering:fake_icon_drillbreak',
          'tconstruct:earth_slime_crystal',
          'charcoal_pit:mortar_pestle',
          'blue_skies:maple_sword',
          'tconstruct:gear_cast',
          'rankine:pegmatite_bricks_pressure_plate',
          // "ecofriendly:billberry_ground_0",
          'productivebees:dark_oak_wood_nest',
          'rocks:soul_soil_splitter',
          'tconstruct:soulsteel_nugget',
          'tconstruct:earth_ichor_slime_grass',
          'tconstruct:ender_ichor_slime_grass',
          'structure_gel:orange_gel',
          'charcoal_pit:glycerine',
          'rankine:kimberlite_bricks_wall',
          'hem:blueleafmediumwheat',
          'farmersdelight:wild_tomatoes',
          'rankine:kimberlite_column',
          'tconstruct:gear_sand_cast',
          'charcoal_pit:cherry_sapling',
          'tconstruct:ender_sky_slime_grass',
          'charcoal_pit:forsythia_sapling',
          'minecraft:wooden_hoe',
          'rankine:purple_morning_glory',
          'rankine:xenotime_ore',
          'rankine:native_gold_ore',
          'minecraft:nether_gold_ore',
          'rankine:polished_pegmatite',
          'immersiveengineering:deepslate_ore_nickel',
          'rankine:cinnamon_boat',
          'rankine:geode',
          'tconstruct:greenheart_planks_slab',
          'minecraft:cyan_candle',
          'createaddition:seed_oil_bucket',
          'rankine:charred_boat',
          'minecraft:deepslate_lapis_ore',
          'rankine:polished_nepheline_syenite_wall',
          'rankine:beaver_pelt',
          'tconstruct:earth_slime_dirt',
          'rankine:infested_granodiorite',
          'tconstruct:earth_slime_tall_grass',
          'charcoal_pit:cedar_sapling',
          'charcoal_pit:orange_leaves',
          'charcoal_pit:straw',
          'rankine:kimberlitic_tuff',
          'rankine:balsam_fir_boat',
          'rankine:polished_kimberlite_wall',
          'blue_skies:dusk_sword',
          'rankine:kimberlite_bricks_slab',
          'tconstruct:knightslime_block',
          'minecraft:wooden_sword',
          'rankine:polished_gray_granite_slab',
          'tconstruct:earth_earth_slime_grass',
          'rankine:charred_slab',
          'productivebees:birch_wood_nest',
          'charcoal_pit:orange',
          'immersiveengineering:storage_aluminum',
          'tconstruct:earth_slime_leaves',
          'minecraft:debug_stick',
          'immersiveengineering:armor_faraday_head',
          'ecofriendly:vertical_potato_ym_1',
          'rankine:piston_crusher',
          'tconstruct:sky_slime_crystal_cluster',
          'rankine:kimberlite_button',
          'tconstruct:ichor_ichor_slime_grass',
          'bloodmagic:nether_soil',
          'rankine:monazite_ore',
          'structure_gel:building_tool',
          'charcoal_pit:orange_leaves',
          'rankine:willow_branchlet',
          'rankine:norite_pressure_plate',
          'charcoal_pit:maple_sap',
          'rankine:peridot_geode',
          'rankine:biome_indicator_generic',
          'minecraft:raw_iron_block',
          'charcoal_pit:cooked_calamari',
          'rankine:kimberlite_pressure_plate',
          'rankine:redstone_ore',
          'rankine:plant_fiber',
          'rankine:diamond_anvil_cell',
          'tconstruct:greenheart_door',
          'immersiveengineering:ingot_nickel',
          'tconstruct:bloodshroom_planks',
          'rankine:sharinga_boat',
          'productivebees:end_stone_nest',
          'charcoal_pit:winglet',
          'immersiveengineering:ingot_uranium',
          'rankine:granodiorite_stairs',
          'titanium:block_test',
          'hexerei:quicksilver_bucket',
          'immersiveengineering:ore_nickel',
          'charcoal_pit:maple_leaves',
          'rocks:granite_splitter',
          'productivebees:jungle_wood_nest',
          'immersiveengineering:fake_icon_fried',
          'tconstruct:bloodshroom_button',
          'charcoal_pit:calamari',
          'rankine:trona',
          'immersiveengineering:slab_storage_nickel',
          'immersiveengineering:slab_storage_uranium',
          'blue_skies:maple_hoe',
          'rankine:polished_episyenite_stairs',
          'naturesaura:crimson_aura_mushroom',
          'rankine:polished_shonkinite_wall',
          'rocks:geyser',
          'rocks:gravel_rock',
          'blue_skies:glowing_aquatic_slab',
          'productivebees:sugar_cane_nest',
          'hem:birchtreemiddle',
          'charcoal_pit:sushi',
          'tconstruct:blood_slime',
          'charcoal_pit:maple_leaves',
          'rankine:interspinifex_ore',
          'minecraft:orange_candle',
          'ecofriendly:vertical_beet_ym_3',
          'rankine:black_morning_glory',
          'rankine:shonkinite_bricks',
          'tconstruct:skyroot_pressure_plate',
          'hem:meltedsteel',
          'immersiveengineering:raw_silver',
          'rankine:hydrogen_chloride_fumarole',
          'tconstruct:blood_ichor_slime_grass',
          'charcoal_pit:aeternalis_fuel',
          'rankine:pyrite_ore',
          'tconstruct:earth_ender_slime_grass',
          'ecofriendly:vertical_carrot_ym_stage_1',
          'blue_skies:bluebright_sword',
          'blue_skies:dusk_hoe',
          'tconstruct:ichor_slime_grass_seeds',
          'rankine:kimberlite_bricks',
          'immersiveengineering:storage_silver',
          'undergarden:shiverstone_diamond_ore',
          'rankine:short_grass',
          'hem:blueleafbirchbranch',
          'rankine:aquamarine_geode',
          'minecraft:white_candle',
          'rankine:polished_granodiorite',
          'rankine:diamond_geode',
          'rankine:stump',
          'productivebees:spruce_wood_nest',
          'rankine:bamboo_culms_boat',
          'rankine:ruby_geode',
          'rocks:soul_soil_rock',
          'charcoal_pit:apple_leaves',
          'occultism:dictionary_of_spirits_icon',
          'rankine:cork_oak_boat',
          'charcoal_pit:dragon_leaves',
          'immersiveengineering:deepslate_ore_silver',
          'create:zinc_block',
          'charcoal_pit:maple_syrup',
          'createaddition:accumulator',
          'tconstruct:greenheart_planks',
          'tconstruct:sky_slime_leaves',
          'immersiveengineering:armor_faraday_chest',
          'rankine:goldenrod',
          'ecofriendly:sponge_cake_ym_2',
          'immersiveengineering:ore_aluminum',
          'blue_skies:starlit_axe',
          'blue_skies:glowing_life_stone',
          'rankine:polished_gray_granite',
          'immersiveengineering:fake_icon_lucky',
          'blue_skies:life_stairs',
          'rankine:nepheline_syenite_column',
          'rankine:native_tin_ore',
          'tconstruct:skyroot_planks_slab',
          'rankine:iron_ore',
          'minecraft:deepslate_iron_ore',
          'blue_skies:dusk_axe',
          'productivebees:stone_nest',
          'charcoal_pit:apple_leaves',
          'charcoal_pit:apple_sapling',
          'tconstruct:knightslime_ingot',
          'immersiveengineering:ore_lead',
          'charcoal_pit:dragon_leaves',
          'rocks:pinecone',
          'tconstruct:sky_slime_sapling',
          'tconstruct:skyroot_button',
          'rankine:bamboo_boat',
          'tconstruct:sky_ichor_slime_grass',
          'tconstruct:blood_slime_tall_grass',
          'rankine:magnesite_ore',
          'tconstruct:greenheart_fence_gate',
          'tconstruct:earth_sky_slime_grass',
          'immersiveengineering:raw_block_nickel',
          'rankine:enstatite_chondrite_bricks',
          'tconstruct:blood_slime_sapling',
          'tconstruct:ender_slime_crystal_cluster',
          'rankine:norite_slab',
          'rankine:enstatite_chondrite',
          'minecraft:jigsaw',
          'charcoal_pit:alloy_steel',
          'structure_gel:red_gel',
          'tconstruct:large_earth_slime_crystal_bud',
          'blue_skies:dusk_pickaxe',
          'rankine:carbon_dioxide_fumarole',
          'minecraft:jungle_boat',
          'tconstruct:ender_slime_tall_grass',
          'charcoal_pit:sakura_leaves',
          'rankine:norite_bricks_pressure_plate',
          'rankine:gray_granite_slab',
          'farmersdelight:wheat_dough',
          'farmersdelight:wild_rice',
          'ecofriendly:vertical_carrot_ym_stage_2',
          'rankine:lignite_ore',
          'rocks:red_sandstone_splitter',
          'rankine:tetrataenite_ore',
          'tconstruct:greenheart_button',
          'ecofriendly:tossed_detergent_ym',
          'tconstruct:large_ender_slime_crystal_bud',
          'rankine:polished_granodiorite_wall',
          'rocks:warped_stick',
          'rankine:native_indium_ore',
          'rankine:gray_granite_bricks_stairs',
          'minecraft:deepslate_gold_ore',
          'ecofriendly:bilberry_ground_3',
          'rankine:infested_norite',
          'rankine:enderball',
          'productivebees:nether_gold_nest',
          'tconstruct:ender_slime_dirt',
          'hem:blueleafwheattallplant',
          'rankine:granodiorite_bricks_slab',
          'rankine:packaged_armor',
          'occultism:candle_white',
          'blue_skies:dusk_shovel',
          'farmersdelight:rice_bale',
          'bloodmagic:spectral',
          'charcoal_pit:sakura_leaves',
          'blue_skies:frostbright_sword',
          'charcoal_pit:forsythia_leaves',
          'minecraft:command_block',
          'blue_skies:multi_portal_item',
          'immersiveengineering:ingot_lead',
          'rankine:pegmatite_column',
          'productivebees:nether_brick_nest',
          'rocks:seashell',
          'tconstruct:ender_slime_crystal',
          'charcoal_pit:steel_boots',
          'rankine:native_lead_ore',
          'charcoal_pit:cedar_leaves',
          'rankine:charred_log',
          'tconstruct:earth_slime_spawn_egg',
          'simpletomb:grave_key',
          'ecofriendly:sponge_cake_ym_3',
          'blue_skies:frostbright_axe',
          'blue_skies:life_slab',
          'rankine:coconut_palm_boat',
          'tconstruct:sky_slime_grass_seeds',
          'ecofriendly:vertical_bilberry_ym_2',
          'rankine:maple_boat',
          'tconstruct:greenheart_fence',
          'createaddition:biomass',
          'tconstruct:cobalt_ore',
          'occultism:raw_silver',
          'rankine:nepheline_syenite_slab',
          'occultism:debug_foliot_transport_items',
          'charcoal_pit:forsythia_leaves',
          'immersiveengineering:storage_uranium',
          'hexerei:belladonna_flower',
          'minecraft:magenta_candle',
          'citadel:effect_item',
          'minecraft:lime_candle',
          'hem:blueleafpinetreetop',
          'immersiveengineering:ore_silver',
          'rankine:charred_fence_gate',
          'rankine:pyrolusite_ore',
          'blue_skies:life_stone',
          'immersiveengineering:raw_block_silver',
          'blue_skies:glowing_aquatic_stairs',
          'rankine:episyenite_column',
          'tconstruct:large_sky_slime_crystal_bud',
          'rankine:lonsdaleite_ore',
          'rankine:nepheline_syenite_stairs',
          'rankine:episyenite_wall',
          'tconstruct:sky_slime_spawn_egg',
          'rankine:emerald_geode',
          'tconstruct:rose_gold_nugget',
          'create:wheat_flour',
          'productivebees:snow_nest',
          'tconstruct:earth_slime_sapling',
          'rankine:granodiorite_bricks_wall',
          'blue_skies:life_arc',
          'occultism:obsidian_dust',
          'rankine:pia',
          'blue_skies:glowing_life_wall',
          'charcoal_pit:sandy_collector',
          'rankine:garnet_geode',
          'blue_skies:lunar_hoe',
          'rankine:gray_granite_column',
          'tconstruct:sky_earth_slime_grass',
          'rankine:granodiorite_wall',
          'create:raw_zinc_block',
          'rankine:polished_pegmatite_slab',
          'rankine:polished_norite_slab',
          'rankine:gray_granite_stairs',
          'occultism:silver_dust',
          'rankine:western_hemlock_boat',
          'rankine:coal_ore',
          'rankine:granodiorite',
          'tconstruct:sky_slime_dirt',
          'productivebees:adv_breed_bee',
          'rankine:native_tellurium_ore',
          'blue_skies:lunar_pickaxe',
          'immersiveengineering:nugget_lead',
          'tconstruct:small_ender_slime_crystal_bud',
          'blue_skies:maple_shovel',
          'immersiveengineering:armor_faraday_feet',
          'rankine:charred_door',
          'minecraft:diamond_ore',
          'citadel:citadel_book',
          'create:zinc_ore',
          'hem:blueleaf_bush',
          'tconstruct:wire_cast',
          'rankine:wooden_hammer',
          'immersiveengineering:nugget_nickel',
          'rankine:kimberlite_wall',
          'charcoal_pit:dragon_sapling',
          'charcoal_pit:banana',
          'tconstruct:wire_red_sand_cast',
          'hem:raw_rose_copper',
          'immersiveengineering:fake_icon_ravenholm',
          'blue_skies:starlit_sword',
          'minecraft:blue_candle',
          'titanium:block_asset_test',
          'charcoal_pit:jacaranda_leaves',
          'blue_skies:cherry_pickaxe',
          'rankine:leather_canteen',
          'rocks:end_stone_rock',
          'rankine:polished_norite',
          'charcoal_pit:bio_diesel_bucket',
          'blue_skies:cherry_shovel',
          'tconstruct:bloodshroom_pressure_plate',
          'rankine:infested_pegmatite',
          'tconstruct:budding_earth_slime_crystal',
          'botania:living_root',
          'tconstruct:small_earth_slime_crystal_bud',
          'structure_gel:blue_gel',
          'productivebees:oak_wood_nest',
          'immersiveengineering:ingot_silver',
          'occultism:copper_dust',
          'hem:birchtreetop',
          'create:copper_backtank_placeable',
          'blue_skies:cherry_sword',
          'tconstruct:skyroot_planks_stairs',
          'tconstruct:ender_slime_leaves',
          'charcoal_pit:jacaranda_leaves',
          'blue_skies:starlit_pickaxe',
          'minecraft:green_candle',
          'productivebees:nether_quartz_nest',
          'charcoal_pit:seed_oil_bucket',
          'productivebees:acacia_wood_nest',
          'rankine:pegmatite_bricks_wall',
          'rankine:diamond_ore',
          'tconstruct:greenheart_wood',
          'charcoal_pit:alloy_pig_iron',
          'lootr:lootr_shulker',
          'charcoal_pit:douglas_sapling',
          'hexerei:yellow_dock_bush',
          'rankine:episyenite_bricks_wall',
          'minecraft:bundle',
          'minecraft:red_candle',
          'blue_skies:bluebright_pickaxe',
          'extendedcrafting:recipe_maker',
          'rankine:rheniite_ore',
          'rocks:netherrack_rock',
          'tconstruct:sky_slime_crystal',
          'rankine:locust_spine',
          'rankine:shonkinite_bricks_pressure_plate',
          'charcoal_pit:steel_helmet',
          'rankine:norite_button',
          'tconstruct:bloodshroom_trapdoor',
          'productivebees:glowstone_nest',
          'rankine:cryolite_ore',
          'rankine:polished_shonkinite_slab',
          'tconstruct:bloodshroom_planks_slab',
          'rankine:charred_planks',
          'rankine:pineapple_sleeves',
          'rankine:shonkinite_bricks_stairs',
          'create:zinc_ingot',
          'minecraft:wooden_axe',
          'rankine:sperrylite_ore',
          'charcoal_pit:douglas_leaves',
          'tconstruct:earth_slime_crystal_cluster',
          'rankine:hydrogen_sulfide_fumarole',
          'hem:smallwheatblueleaf',
          'charcoal_pit:chestnut_sapling',
          'rocks:cobblestone_splitter',
          'tconstruct:greenheart_trapdoor',
          'rankine:polished_kimberlite',
          'tconstruct:ichor_slime_tall_grass',
          'tconstruct:medium_ender_slime_crystal_bud',
          'minecraft:candle',
          'ecofriendly:recyclager_item',
          'rankine:celestine_ore',
          'rankine:biome_indicator_river',
          'rankine:red_lily',
          'paragon_textiles:flaxseed_oil_bottle',
          'charcoal_pit:decorative_sapling',
          'rankine:shonkinite_bricks_wall',
          'rocks:end_stone_splitter',
          'create:zinc_nugget',
          'tconstruct:stripped_greenheart_wood',
          'create:unprocessed_obsidian_sheet',
          'farmersdelight:wild_carrots',
          'tconstruct:ender_vanilla_slime_grass',
          'immersiveengineering:nugget_aluminum',
          'minecraft:emerald_ore',
          'occultism:silver_block',
          'rankine:pegmatite',
          'rocks:diorite_splitter',
          'rankine:polished_shonkinite',
          'rankine:pegmatite_bricks_slab',
          'minecraft:structure_void',
          'minecraft:repeating_command_block',
          'bloodmagic:dungeon_tester',
          'minecraft:raw_iron',
          'minecraft:barrier',
          'blue_skies:frostbright_shovel',
          'rankine:thermometer',
          'blue_skies:bluebright_axe',
          'rankine:greenockite_ore',
          'blue_skies:maple_axe',
          'tconstruct:ichor_ender_slime_grass',
          'occultism:silver_nugget',
          'rankine:granodiorite_column',
          'rankine:episyenite_button',
          'hem:bronze_ore',
          'tconstruct:skyroot_fence',
          'productivebees:bamboo_hive',
          'rankine:shonkinite_pressure_plate',
          'rankine:erythrina_boat',
          'charcoal_pit:steam_press',
          'rankine:nepheline_syenite_pressure_plate',
          'charcoal_pit:brick_collector',
          'tconstruct:blood_earth_slime_grass',
          'rankine:norite_bricks_stairs',
          'tconstruct:skyroot_door',
          'minecraft:spruce_boat',
          'create:brass_nugget',
          'create:brass_ingot',
          'create:brass_block',
          'rankine:violet_bellflower',
          'rankine:eastern_hemlock_boat',
          'charcoal_pit:enchanted_sapling',
          'rankine:pozzolana',
          'rocks:sand_rock',
          'charcoal_pit:cherry_leaves',
          'rankine:dough',
          'rankine:porphyry_copper',
          'rankine:polished_granodiorite_stairs',
          'immersiveengineering:sheetmetal_lead',
          'rankine:polished_episyenite_wall',
          'tconstruct:budding_sky_slime_crystal',
          'rankine:charred_stairs',
          'immersiveengineering:pickaxe_steel',
          'rankine:gray_granite_bricks_pressure_plate',
          'blue_skies:aquatic_arc',
          'rankine:pegmatite_pressure_plate',
          'charcoal_pit:cherry',
          'minecraft:light',
          'blue_skies:aquatic_slab',
          'minecraft:light_blue_candle',
          'create:deepslate_zinc_ore',
          'charcoal_pit:jacaranda_sapling',
          'relics:solid_snowball',
          'blue_skies:life_wall',
          'rankine:nepheline_syenite_wall',
          'charcoal_pit:choco_powder',
          'rankine:asbestos',
          'charcoal_pit:steel_leggings',
          'rankine:norite_stairs',
          'farmersdelight:wild_onions',
          'hem:crackedstoneadvancemneticon',
          'charcoal_pit:cherry_leaves',
          'immersiveengineering:nugget_silver',
          'hem:birchtreebottom',
          'rankine:nepheline_syenite_bricks_pressure_plate',
          'tconstruct:soulsteel_ingot',
          'tconstruct:ender_slime_fern',
          'undergarden:depthrock_gold_ore',
          'tconstruct:sky_slime_vine',
          'hem:blueleafwheatplant',
          'rankine:shonkinite',
          'charcoal_pit:blast_furnace',
          'tconstruct:ichor_slime_leaves',
          'ecofriendly:vertical_potato_ym_2',
          'tconstruct:sky_ender_slime_grass',
          'immersiveengineering:ingot_aluminum',
          'minecraft:deepslate_emerald_ore',
          'rankine:episyenite_bricks_pressure_plate',
          'rankine:nepheline',
          'rankine:anthracite_ore',
          'rankine:reaction_chamber_core',
          'rankine:gray_granite_wall',
          'rankine:granodiorite_bricks_stairs',
          'tconstruct:ender_ender_slime_grass',
          'charcoal_pit:dragon_fruit',
          'tconstruct:bloodshroom_log',
          'blue_skies:frostbright_hoe',
          'rankine:petalite_ore',
          'tconstruct:sky_slime_crystal_block',
          'occultism:jei_dummy/require_sacrifice',
          'rankine:pink_bellflower',
          'rankine:weeping_willow_boat',
          'occultism:pentacle',
          'rankine:norite_bricks_wall',
          'minecraft:nether_quartz_ore',
          'tconstruct:ender_slime_spawn_egg',
          'tconstruct:gear_red_sand_cast',
          'charcoal_pit:tree_tap',
          'charcoal_pit:steel_chestplate',
          'hem:blueleafpinetreetrunkmiddle',
          'rankine:polished_kimberlite_stairs',
          'blue_skies:aquatic_stairs',
          'charcoal_pit:tuyere',
          'tconstruct:ichor_vanilla_slime_grass',
          'rankine:sapphire_geode',
          'charcoal_pit:corn',
          'immersiveengineering:deepslate_ore_uranium',
          'rankine:granodiorite_button',
          'charcoal_pit:fugu',
          'minecraft:deepslate_redstone_ore',
          'minecraft:oak_boat',
          'rankine:wolframite_ore',
          'tconstruct:ichor_slime_sapling',
          'rankine:thenardite',
          'rankine:black_walnut_boat',
          'blue_skies:lunar_shovel',
          'blue_skies:frostbright_pickaxe',
          'minecraft:gray_candle',
          'productivebees:gravel_nest',
          'tconstruct:terracube_spawn_egg',
          'charcoal_pit:leek',
          'structure_gel:data_handler',
          'occultism:debug_foliot_trader',
          'rankine:corn_stalk',
          'tconstruct:ender_earth_slime_grass',
          'rocks:starfish',
          'rankine:petrified_chorus_boat',
          'tconstruct:skyroot_log',
          'create:incomplete_track',
          'rankine:shonkinite_stairs',
          'rankine:gray_granite_bricks',
          'rankine:packaged_tool',
          'tconstruct:ichor_slime_dirt',
          'lootr:lootr_barrel',
          'charcoal_pit:alloy_bronze',
          'botania:pebble',
          'tconstruct:earth_slime_fern',
          'rankine:infested_kimberlite',
          'tconstruct:medium_sky_slime_crystal_bud',
          'rankine:gray_granite_bricks_wall',
          'blue_skies:glowing_life_stairs',
          'rocks:sandstone_splitter',
          'charcoal_pit:chestnut',
          'hem:blueleafpinetreesmalltrunk',
          'rankine:polished_gray_granite_wall',
          'charcoal_pit:alcohol_bottle',
          'rankine:shonkinite_bricks_slab',
          'productivebees:dragon_egg_hive',
          // "occultism:ritual_dummy/possess_enderman",
          'rankine:tourmaline_geode',
          'immersiveengineering:nugget_copper',
          'immersiveengineering:ore_uranium',
          'rankine:biome_indicator_ocean',
          'minecraft:light_gray_candle',
          'charcoal_pit:nether_collector',
          'rankine:molybdenite_ore',
          'rankine:native_gallium_ore',
          'rankine:fulgurite',
          'rankine:nepheline_syenite',
          'rankine:stinging_nettle',
          'rankine:orange_lily',
          'immersiveengineering:storage_lead',
          'tconstruct:ichor_slime_fern',
          'farmersdelight:wild_beetroots',
          'tconstruct:sky_slime_fern',
          'hem:blueleafwheattall',
          'rankine:kimberlite_slab',
          'rankine:juniper_boat',
          'tconstruct:skyroot_wood',
          'tconstruct:bloodshroom_door',
          'occultism:iron_dust',
          'citadel:debug',
          'immersiveengineering:fake_icon_birthday',
          'minecraft:wooden_pickaxe',
          'rankine:polished_gray_granite_stairs',
          'undergarden:depthrock_diamond_ore',
          'rankine:stainless_steel_canteen',
          'lootr:lootr_inventory',
          'minecraft:deepslate_copper_ore',
          'rankine:granodiorite_slab',
          'minecraft:black_candle',
          'charcoal_pit:chestnut_leaves',
          'ecofriendly:vertical_bilberry_ym_3',
          'ecofriendly:sponge_cake_ym_5',
          'tconstruct:blood_ender_slime_grass',
          'rankine:pinyon_pine_boat',
          'minecraft:knowledge_book',
          'tconstruct:knightslime_nugget',
          'productivebees:slimy_nest',
          'rankine:native_silver_ore',
          'tconstruct:stripped_bloodshroom_log',
          'tconstruct:earth_slime_crystal_block',
          'immersiveengineering:sheetmetal_aluminum',
          'rankine:topaz_geode',
          'rocks:red_sand_rock',
          'ecofriendly:vertical_potato_ym_3',
          'rankine:episyenite_stairs',
          'rankine:black_birch_boat',
          'lootr:lootr_chest',
          'tconstruct:stripped_skyroot_log',
          'rankine:kimberlite_bricks_pressure_plate',
          'occultism:debug_djinni_manage_machine',
          'rankine:pcf',
          'minecraft:copper_ore',
          'charcoal_pit:musket',
          'minecraft:brown_candle',
          'rankine:polished_episyenite',
          'rankine:ash',
          'rankine:red_birch_boat',
          'charcoal_pit:chestnut_leaves',
          'rankine:yellow_clover',
          'rankine:norite_bricks',
          'occultism:debug_djinni_test',
          'ecofriendly:sponge_cake_ym_4',
          'rankine:norite_wall',
          'rankine:episyenite_bricks_slab',
          'rankine:bone_ash',
          'hem:blueleafwheatsmall',
          'rankine:malachite_ore',
          'lootr:lootr_trapped_chest',
          'minecraft:purple_candle',
          'tconstruct:small_sky_slime_crystal_bud',
          'tconstruct:skyroot_fence_gate',
          'rankine:nepheline_syenite_bricks_slab',
          'rankine:episyenite_slab',
          'charcoal_pit:coal_ash',
          'occultism:debug_foliot_lumberjack',
          'rankine:polished_shonkinite_stairs',
          'minecraft:raw_gold_block',
          'tconstruct:bloodshroom_sign',
          'charcoal_pit:end_collector',
          'charcoal_pit:ethoxide_bucket',
          'tconstruct:ender_slime_vine',
          'tconstruct:medium_earth_slime_crystal_bud',
          'immersiveengineering:raw_block_uranium',
          'tconstruct:sky_vanilla_slime_grass',
          'tconstruct:soulsteel_block',
          'rankine:red_clover',
          'tconstruct:greenheart_sign',
          'rankine:pegmatite_bricks_stairs',
          'ecofriendly:bilberry_ground_1',
          'rankine:norite_bricks_slab',
          'ecofriendly:trash_sifter_full_ym',
          'immersiveengineering:raw_uranium',
          'charcoal_pit:maple_sapling',
          'tconstruct:wire_sand_cast',
          'minecraft:deepslate_coal_ore',
          'citadel:fancy_item',
          'rankine:polished_norite_stairs',
          'minecraft:deepslate_diamond_ore',
          'farmersdelight:rice_bag',
          'blue_skies:cherry_hoe',
          'blue_skies:aquatic_wall',
          'rankine:shonkinite_button',
          'rankine:chalcocite_ore',
          'charcoal_pit:bunny_stew',
          'rankine:charred_fence',
          'blue_skies:cherry_axe',
          'tconstruct:blood_congealed_slime',
          'farmersdelight:wild_cabbages',
          'rankine:fumarole_deposit',
          'rankine:reaction_chamber_cell',
          'blue_skies:glowing_aquatic_wall',
          'tconstruct:ichor_sky_slime_grass',
          'rocks:andesite_splitter',
          'rankine:episyenite',
          'tconstruct:skyroot_trapdoor',
          'rankine:enstatite_block',
          'charcoal_pit:distillery',
          'pneumaticcraft:wheat_flour',
          'tconstruct:bacon',
          'tconstruct:blood_sky_slime_grass',
          'productivebees:soul_sand_nest',
          'charcoal_pit:cheese',
          'croptopia:cheese',
          'croptopia:olive',
          'croptopia:olive_seed',
          'croptopia:olive_oil',
          'rankine:cedar_boat',
          'occultism:jei_dummy/require_item_use',
          'hem:rose_copper_ore',
          'occultism:jei_dummy/none',
          'farmersdelight:cooked_bacon',
          'immersiveengineering:raw_aluminum',
          'rocks:crimson_stick',
          'titanium:machine_test',
          'rankine:gray_granite',
          'rankine:norite_column',
          'rankine:opal_geode',
          'minecraft:bee_nest',
          'tconstruct:rose_gold_ingot',
          'immersiveengineering:raw_nickel',
          'rankine:polished_granodiorite_slab',
          'rankine:episyenite_bricks_stairs',
          'tconstruct:blood_vanilla_slime_grass',
          'rankine:charred_wood',
          'minecraft:wooden_shovel',
          'charcoal_pit:airplane',
          'hem:planespawner',
          'tconstruct:bloodshroom_fence',
          'rankine:taenite_ore',
          'tconstruct:bloodshroom_fence_gate',
          'immersiveengineering:sheetmetal_copper',
          'rankine:charcoal_pit',
          'ecofriendly:vertical_wheat_ym_stage_2',
          'hexerei:mugwort_bush',
          'rankine:coltan_ore',
          'hem:tallblueleafplant',
          'minecraft:chain_command_block',
          'rankine:infested_episyenite',
          'tconstruct:ender_slime_sapling',
          'minecraft:pink_candle',
          'rankine:magnetite_ore',
          'rocks:netherrack_splitter',
          'tconstruct:ender_slime_grass_seeds',
          'lootr:trophy',
          'rankine:potash',
          'minecraft:suspicious_stew',
          'charcoal_pit:pancakes',
          'rankine:blue_morning_glory',
          'minecraft:lapis_ore',
          'ecofriendly:vertical_wheat_ym_stage_1',
          'rankine:pegmatite_button',
          'rankine:botanist_station',
          'rankine:native_selenium_ore',
          'structure_gel:cyan_gel',
          'charcoal_pit:sunflower_seeds',
          'blue_skies:glowing_life_slab',
          'rankine:diopside',
          'tconstruct:earth_vanilla_slime_grass',
          'rankine:infested_gray_granite',
          'charcoal_pit:ethoxide_bottle',
          'rankine:episyenite_pressure_plate',
          'minecraft:structure_block',
          'rankine:shonkinite_slab',
          'charcoal_pit:ethanol_bucket',
          'productivebees:obsidian_nest',
          'tconstruct:bloodshroom_planks_stairs',
          'rankine:pegmatite_wall',
          'charcoal_pit:random_sapling',
          'structure_gel:yellow_gel',
          'occultism:spawn_egg/possessed_enderman',
          'tconstruct:stripped_bloodshroom_wood',
          'rankine:gray_granite_button',
          'ecofriendly:tossed_milk_carton_ym',
          'tconstruct:skyroot_sign',
          'blue_skies:starlit_shovel',
          'rankine:chromite_ore',
          'charcoal_pit:serinan_stew',
          'rankine:granodiorite_bricks_pressure_plate',
          'rankine:episyenite_bricks',
          'blue_skies:bluebright_shovel',
          'tconstruct:greenheart_pressure_plate',
          'rankine:stripped_charred_log',
          'tconstruct:skyroot_planks',
          'ecofriendly:polluttor_phase_2_ym_spawn_egg',
          'minecraft:dark_oak_boat',
          'rankine:stibnite_ore',
          'minecraft:acacia_boat',
          'occultism:gold_dust',
          'ecofriendly:pollutioner_item',
          'rankine:bog_iron',
          'immersiveengineering:armor_faraday_legs',
          'immersiveengineering:hoe_steel',
          'charcoal_pit:farfetch_stew',
          'minecraft:coal_ore',
          'tconstruct:sky_sky_slime_grass',
          'rankine:sulfur_dioxide_fumarole',
          'rankine:pegmatite_bricks',
          'rankine:shonkinite_column',
          'charcoal_pit:chocolate',
          'tconstruct:rose_gold_block',
          'rankine:crimson_clover',
          'rankine:stripped_charred_wood',
          'rankine:polished_nepheline_syenite_slab',
          'blue_skies:lunar_sword',
          'tconstruct:earth_slime_grass_seeds',
          'rankine:nepheline_syenite_button',
          'rankine:shonkinite_wall',
          'rankine:infested_shonkinite',
          'tconstruct:blood_slime_leaves',
          'charcoal_pit:creosote_bucket',
          'charcoal_pit:corn_flour',
          'charcoal_pit:flux',
          'rankine:lapis_ore',
          'immersiveengineering:axe_steel',
          'charcoal_pit:enchanted_leaves',
          'immersiveengineering:raw_lead',
          'rankine:antitaenite_ore',
          'rankine:granodiorite_bricks',
          'rankine:diopside_block',
          'rankine:gray_granite_pressure_plate',
          'tconstruct:blood_slime_grass_seeds',
          'charcoal_pit:coconut',
          'rankine:nepheline_syenite_bricks_wall',
          'charcoal_pit:corn_stew',
          'blue_skies:bluebright_hoe',
          'blue_skies:runic_arc',
          'rankine:bismuthinite_ore',
          'rankine:charred_trapdoor',
          'occultism:advancement_icon',
          'charcoal_pit:croissant',
          'blue_skies:aquatic_stone',
          'rankine:kimberlite',
          'charcoal_pit:flour',
          'tconstruct:ichor_earth_slime_grass',
          'rankine:gyratory_crusher',
          'rankine:polished_norite_wall',
          'charcoal_pit:coke',
          'immersiveengineering:sheetmetal_uranium',
          'rankine:kamacite_ore',
          'rankine:polished_pegmatite_wall',
          'structure_gel:dynamic_spawner',
          'tconstruct:stripped_greenheart_log',
          'charcoal_pit:enchanted_leaves',
          'farmersrespite:wild_tea_bush',
          'createaddition:biomass_pellet',
          'rankine:infested_nepheline_syenite',
          'create:raw_zinc',
          'tconstruct:budding_ender_slime_crystal',
          'rankine:kimberlite_bricks_stairs',
          'immersiveengineering:deepslate_ore_aluminum',
          'occultism:silver_ingot',
          'charcoal_pit:oil_lamp',
          'hem:blueleafpinetreemiddle',
          'ecofriendly:filled_milk_carton_ym',
          'tconstruct:blood_slime_fern',
          'rocks:nether_geyser',
          'rankine:particle_accelerator',
          'tconstruct:sky_slime_tall_grass',
          'minecraft:iron_ore',
          'rankine:four_leaf_clover',
          'minecraft:command_block_minecart',
          'charcoal_pit:orange_sapling',
          'ecofriendly:vertical_carrot_ym_stage_3',
          'rankine:polished_episyenite_slab',
          'hexerei:mandrake_flower',
          'rankine:granodiorite_pressure_plate',
          'tconstruct:stripped_skyroot_wood',
          'rankine:polished_nepheline_syenite',
          'minecraft:gold_ore',
          'rankine:nepheline_block',
          'charcoal_pit:coke_block',
          'blue_skies:lunar_axe',
          'ecofriendly:vertical_beet_ym_1',
          'blue_skies:starlit_hoe',
          'rankine:baddeleyite_ore',
          'rankine:pegmatite_slab',
          'rankine:pegmatite_stairs',
          'naturesaura:warped_aura_mushroom',
          'occultism:silver_ore_deepslate',
          'charcoal_pit:kebabs',
          'titanium:block_twenty_four_test',
          'titanium:creative_generator',
          'immersiveengineering:storage_nickel',
          'charcoal_pit:wrath_lantern',
          'immersiveengineering:sheetmetal_nickel',
          'minecraft:redstone_ore',
          'productivebees:coarse_dirt_nest',
          'rankine:kimberlitic_diamond_ore',
          'charcoal_pit:walnut_oil_bucket',
          'rankine:white_clover',
          'ecofriendly:tossed_tire_ym',
          'occultism:debug_foliot_cleaner',
          'ecofriendly:vertical_bilberry_ym_1',
          'rankine:nepheline_syenite_bricks',
          'blue_skies:maple_pickaxe',
          'rankine:enstatite',
          'rankine:emerald_ore',
          'rankine:white_lily',
          'minecraft:yellow_candle',
          'rankine:sodium_carbonate',
          'rankine:kimberlite_stairs',
          'rankine:magnolia_boat',
          'rankine:polished_nepheline_syenite_stairs',
          'structure_gel:green_gel',
          'ecofriendly:vertical_wheat_ym_stage_3',
          'farmersdelight:wild_potatoes',
          'tconstruct:ender_slime_crystal_block',
          'charcoal_pit:tricolor_dango',
          'charcoal_pit:engine'
        ]
      });
    },
    stage: () => {
      [
        {
          input: [
            'paraglider:deku_leaf',
            'minecraft:bone_meal',
            'farmersdelight:safety_net'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          output: [
            'minecraft:red_terracotta',
            'paraglider:deku_leaf',
            'minecraft:stone_bricks',
            'minecraft:mossy_stone_bricks',
            'smallships:sail'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        }
      ].forEach((target) => {
        event.forEachRecipe(target, (recipe) => {
          recipe.stage('chapter_2');
        });
      });

      [
        { id: 'ceramics:white_porcelain_cistern' },
        { id: 'ceramics:white_porcelain' },
        {
          input: [
            'hexerei:herb_drying_rack_full',
            'paragon_textiles:silk_wisps',
            'create:powdered_obsidian',
            '#create:seats',
            'minecraft:black_dye'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          output: [
            '#forge:bookshelves',
            'blue_skies:glowing_nature_stone',
            'blue_skies:glowing_blinding_stone',
            'minecraft:terracotta',
            'minecraft:white_terracotta',
            'minecraft:orange_terracotta',
            'minecraft:magenta_terracotta',
            'minecraft:light_blue_terracotta',
            'minecraft:lime_terracotta',
            'minecraft:gray_terracotta',
            'minecraft:light_gray_terracotta',
            'minecraft:cyan_terracotta',
            'minecraft:yellow_terracotta',
            'minecraft:black_terracotta',
            'minecraft:pink_terracotta',
            'minecraft:green_terracotta',
            'minecraft:brown_terracotta',
            'minecraft:blue_terracotta',
            'minecraft:purple_terracotta'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          output: [
            'minecraft:dark_oak_pressure_plate',
            'minecraft:acacia_pressure_plate',
            'minecraft:jungle_pressure_plate',
            'minecraft:birch_pressure_plate',
            'minecraft:spruce_pressure_plate',
            'minecraft:oak_pressure_plate',
            'minecraft:dark_oak_button',
            'minecraft:acacia_button',
            'minecraft:jungle_button',
            'minecraft:birch_button',
            'minecraft:spruce_button',
            'minecraft:oak_button',
            'architects_palette:plating_block',
            'architects_palette:plating_slab',
            'architects_palette:plating_stairs',
            'architects_palette:plating_wall',
            'architects_palette:plating_nub'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        }
      ].forEach((target) => {
        event.forEachRecipe(target, (recipe) => {
          recipe.stage('chapter_3');
        });
      });

      [
        {
          input: [
            'tconstruct:necrotic_bone',
            'create:furnace_minecart_contraption',
            'paragon_textiles:wood_bleach',
            'paragon_textiles:wood_stain',
            'rankine:aluminum_nugget',
            'create:andesite_alloy',
            'minecraft:golden_apple',
            'realistictorches:glowstone_crystal'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          output: [
            'create:hand_crank',
            'minecraft:smoker',
            'minecraft:fletching_table',
            'minecraft:stonecutter',
            'create:shaft',
            'create:cogwheel',
            'minecraft:blast_furnace',
            'minecraft:grindstone',
            'create:large_cogwheel',
            'create:millstone',
            'minecraft:cartography_table',
            'minecraft:piston',
            'architects_palette:pipe',
            'cataclysm:ignitium_block',
            'cataclysm:witherite_block',
            'rankine:aluminum_sheetmetal',
            'rankine:iron_sheetmetal',
            'rankine:copper_sheetmetal',
            'rankine:lead_sheetmetal',
            'minecraft:smooth_quartz',
            'minecraft:smooth_quartz_stairs',
            'create:andesite_alloy',
            'minecraft:magma_block',
            'naturesaura:crimson_meal',
            'minecraft:enchanted_golden_apple'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        }
      ].forEach((target) => {
        event.forEachRecipe(target, (recipe) => {
          recipe.stage('chapter_4');
        });
      });

      [
        {
          input: [
            'minecraft:waxed_copper_block',
            '#minecraft:wool',
            'botania:mana_string',
            'minecraft:ender_pearl',
            'naturesaura:token_euphoria',
            'naturesaura:token_terror',
            'naturesaura:token_rage',
            'naturesaura:token_grief'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          output: [
            'blue_skies:trough',
            '#minecraft:wool',
            'minecraft:black_bed'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          input: Item.of('productivebees:stone_chip').ignoreNBT(),
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          input: Item.of('productivebees:wood_chip').ignoreNBT(),
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          input: '@productivebees',
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        }
      ].forEach((target) => {
        event.forEachRecipe(target, (recipe) => {
          recipe.stage('chapter_5_1');
        });
      });

      [
        { id: 'rankine:crafting/tree_tap' },
        { id: 'immersiveengineering:crafting/torch' },
        {
          output: [
            'pneumaticcraft:wall_lamp_inverted_white',
            'pneumaticcraft:display_table',
            'create:display_board',
            'create:display_link',
            'pneumaticcraft:aerial_interface',
            'create:mechanical_arm',
            'createaddition:rolling_mill'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          input: [
            'rankine:steel_nugget',
            'immersiveengineering:creosote_bucket',
            'rankine:graphite_electrode'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        }
      ].forEach((target) => {
        event.forEachRecipe(target, (recipe) => {
          recipe.stage('chapter_5_2');
        });
      });

      [
        {
          input: [
            'rankine:perlite',
            'rankine:saltpeter',
            'rankine:stainless_steel'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        }
      ].forEach((target) => {
        event.forEachRecipe(target, (recipe) => {
          recipe.stage('chapter_7');
        });
      });

      [
        {
          input: [
            'ecofriendly:garbage_item_ym',
            'rankine:pumice_soap',
            'rankine:cadmium_telluride_cell'
          ],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        },
        {
          output: ['ecofriendly:oil_drum_ym'],
          or: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
          ]
        }
      ].forEach((target) => {
        event.forEachRecipe(target, (recipe) => {
          recipe.stage('chapter_7_1');
        });
      });

      [].forEach((target) => {
        event.forEachRecipe(target, (recipe) => {
          recipe.stage('chapter_7_2');
        });
      });
    }
  });
});
