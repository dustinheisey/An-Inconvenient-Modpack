onEvent('recipes', event => {
  setBalanceRecipes({
    shapeless: () => {
      ['create:crafting/kinetics/yellow_seat_from_other_seat'].forEach(id =>
        event.remove({id: id})
      );
      event.shapeless('create:yellow_seat', [
        '#create:seats',
        'minecraft:yellow_dye',
      ]);
    },
    application: () => {},
    compacting: () => {
      event.remove({
        output: [
          'minecraft:blaze_rod',
          'paragon_textiles:flaxseed_oil_bucket',
          'createaddition:cake_base',
        ],
      });

      event.custom({
        type: 'create:compacting',
        ingredients: [{item: 'minecraft:blaze_powder', count: 3}],
        results: [{item: 'minecraft:blaze_rod'}],
      });

      event.custom({
        type: 'create:compacting',
        ingredients: [
          {tag: 'forge:eggs'},
          {item: 'minecraft:sugar', count: 2},
          {item: 'create:dough'},
          {fluid: 'minecraft:milk', amount: 1000},
        ],
        results: [{item: 'createaddition:cake_base'}],
      });
    },
    crushing: () => {
      event.remove({
        inputs: [
          '#minecraft:wool',
          'create:ochrum',
          'create:crimsite',
          '#create:stone_types/diorite',
          'minecraft:redstone_ore',
          'minecraft:deepslate_redstone_ore',
          'minecraft:deepslate_lapis_ore',
          'minecraft:emerald_ore',
          'minecraft:nether_quartz_ore',
          'minecraft:diamond_ore',
          'minecraft:deepslate_diamond_ore',
          'minecraft:lapis_ore',
          'minecraft:deepslate_emerald_ore',
          '#forge:ores/lead',
          '#forge:ores/uranium',
          '#forge:ores/aluminum',
          '#forge:ores/nickel',
          '#forge:ores/tin',
          '#forge:ores/copper',
          '#forge:ores/zinc',
          '#forge:ores/silver',
          '#forge:ores/iron',
          '#forge:ores/osmium',
          '#forge:ores/gold',
          'rankine:rice',
          '#create:stone_types/asurine',
          'minecraft:tuff',
          'minecraft:diorite',
          'create:asurine',
          'create:veridium',
          '#create:stone_types/tuff',
          '#create:stone_types/crimsite',
          '#create:stone_types/ochrum',
          '#create:stone_types/veridium',
        ],
        type: 'create:crushing',
      });
      event.remove({
        output: [
          'malum:crushed_soulstone',
          'malum:crushed_brilliance',
          'waystones:warp_dust',
          'minecraft:netherite_scrap',
          'chemlib:aluminum_dust',
          'chemlib:nickel_dust',
          'chemlib:uranium_dust',
          'chemlib:lead_dust',
          'chemlib:tin_dust',
          'chemlib:silver_dust',
          'chemlib:copper_dust',
          'chemlib:gold_dust',
          'chemlib:iron_dust',
          'occultism:iesnium_dust',
        ],
      });

      event.custom({
        results: [{count: 2, item: 'malum:crushed_soulstone'}],
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'malum:raw_soulstone'}],
      });
      event.custom({
        results: [{count: 2, item: 'malum:crushed_brilliance'}],
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'malum:cluster_of_brilliance'}],
      });

      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'minecraft:ancient_debris'}],
        results: [
          {count: 2, item: 'minecraft:netherite_scrap'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:bauxite'}],
        results: [
          {count: 2, item: 'chemlib:aluminum_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:pentlandite'}],
        results: [
          {count: 2, item: 'chemlib:nickel_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:uraninite'}],
        results: [
          {count: 2, item: 'chemlib:uranium_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:galena'}],
        results: [
          {count: 2, item: 'chemlib:lead_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:cassiterite'}],
        results: [
          {count: 2, item: 'chemlib:tin_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:acanthite'}],
        results: [
          {count: 2, item: 'chemlib:silver_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:malachite'}],
        results: [
          {count: 2, item: 'chemlib:copper_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'minecraft:raw_gold'}],
        results: [
          {count: 2, item: 'chemlib:gold_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:hematite'}],
        results: [
          {count: 2, item: 'chemlib:iron_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });

      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:horizonite_ore'}],
        results: [
          {count: 2, item: 'blue_skies:raw_horizonite'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everdawn_moonstone_ore'}],
        results: [
          {count: 2, item: 'blue_skies:moonstone_shard'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everdawn_charoite_ore'}],
        results: [
          {count: 2, item: 'blue_skies:raw_charoite'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everdawn_aquite_ore'}],
        results: [
          {count: 2, item: 'blue_skies:raw_aquite'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everdawn_pyrope_ore'}],
        results: [
          {count: 2, item: 'blue_skies:pyrope_gem'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everdawn_diopside_ore'}],
        results: [
          {count: 2, item: 'blue_skies:diopside_gem'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:ventium_ore'}],
        results: [
          {count: 2, item: 'blue_skies:raw_ventium'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:falsite_ore'}],
        results: [
          {count: 2, item: 'blue_skies:raw_falsite'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everbright_moonstone_ore'}],
        results: [
          {count: 2, item: 'blue_skies:moonstone_shard'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everbright_charoite_ore'}],
        results: [
          {count: 2, item: 'blue_skies:raw_charoite'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everbright_aquite_ore'}],
        results: [
          {count: 2, item: 'blue_skies:raw_aquite'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everbright_pyrope_ore'}],
        results: [
          {count: 2, item: 'blue_skies:pyrope_gem'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'blue_skies:everbright_diopside_ore'}],
        results: [
          {count: 2, item: 'blue_skies:diopside_gem'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'occultism:iesnium_ore'}],
        results: [
          {count: 2, item: 'occultism:iesnium_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:nether_quartz_ore'}],
        results: [
          {count: 2, item: 'minecraft:quartz'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:plumbago_ore'}],
        results: [
          {count: 2, item: 'rankine:graphite'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:native_sulfur_ore'}],
        results: [
          {count: 6, item: 'rankine:sulfur_nugget'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:cinnabar_ore'}],
        results: [
          {item: 'minecraft:redstone', count: 12},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:shiverstone_regalium_ore'}],
        results: [
          {count: 2, item: 'undergarden:regalium_crystal'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:depthrock_regalium_ore'}],
        results: [
          {count: 2, item: 'undergarden:regalium_crystal'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:depthrock_utherium_ore'}],
        results: [
          {count: 2, item: 'undergarden:utherium_crystal'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:tremblecrust_utherium_ore'}],
        results: [
          {count: 2, item: 'undergarden:utherium_crystal'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:shiverstone_utherium_ore'}],
        results: [
          {count: 2, item: 'undergarden:utherium_crystal'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:shiverstone_froststeel_ore'}],
        results: [
          {count: 2, item: 'undergarden:raw_froststeel'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:shiverstone_cloggrum_ore'}],
        results: [
          {count: 2, item: 'undergarden:raw_cloggrum'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:depthrock_cloggrum_ore'}],
        results: [
          {count: 2, item: 'undergarden:raw_cloggrum'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:shiverstone_coal_ore'}],
        results: [
          {count: 3, item: 'minecraft:coal'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'undergarden:depthrock_coal_ore'}],
        results: [
          {count: 3, item: 'minecraft:coal'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:ilmenite'}],
        results: [
          {count: 2, item: 'chemlib:titanium_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:cobaltite'}],
        results: [
          {count: 2, item: 'chemlib:cobalt_dust'},
          {item: 'create:experience_nugget', chance: 0.5},
        ],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:sulfur'}],
        results: [{item: 'chemlib:sulfur_dust'}],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:silicon'}],
        results: [{item: 'chemlib:silicon_dust'}],
      });
      event.custom({
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'rankine:sodium_chloride'}],
        results: [{item: 'chemlib:sodium_dust'}],
      });

      event.custom({
        results: [{item: 'bloodmagic:coalsand'}],
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'minecraft:coal'}],
      });

      event.custom({
        results: [{count: 9, item: 'bloodmagic:coalsand'}],
        type: 'create:crushing',
        processingTime: 250,
        ingredients: [{item: 'minecraft:coal_block'}],
      });
    },
    filling: () => {
      event.remove({output: ['minecraft:gunpowder'], type: 'create:filling'});
    },
    mechanical_crafting: () => {
      event.remove({
        output: [
          'pneumaticcraft:refinery',
          'pneumaticcraft:refinery_output',
          'pneumaticcraft:thermopneumatic_processing_plant',
          `pneumaticcraft:fluid_mixer`,
          'immersiveengineering:sample_drill',
          'pneumaticcraft:printed_circuit_board',
          'create:crushing_wheel',
          'compactmachines:personal_shrinking_device',
          'naturesaura:offering_table',
          'compactcrafting:base',
          'botania:mana_spreader',
          'createaddition:alternator',
          'botania:apothecary_forest',
          'botania:apothecary_plains',
          'botania:apothecary_mountain',
          'botania:apothecary_fungal',
          'botania:apothecary_swamp',
          'botania:apothecary_desert',
          'botania:apothecary_taiga',
          'botania:apothecary_mesa',
          'botania:apothecary_mossy',
          'botania:apothecary_default',
          'hem:circuit_board',
          'immersive_aircraft:boiler',
          'hem:teir_one_computer',
          'hem:steam_engine',
          'hem:generator_piping',
          'hem:transporter_top',
          'hem:transporter_bottom',
          'hem:shotgun',
          'rankine:diamond_tier_crushing_head',
          'rankine:netherite_tier_crushing_head',
          'rankine:induction_furnace',
          'rankine:iron_tier_crushing_head',
          'rankine:stone_tier_crushing_head',
          'create:mechanical_plough',
          'create:mechanical_harvester',
          'botania:alchemy_catalyst',
          'create:mechanical_saw',
          'botania:mana_tablet',
          'botania:runic_altar',
          'create:mechanical_drill',
          'productivebees:advanced_crimson_beehive',
          'botania:terra_plate',
          'create:steam_engine',
          'productivebees:advanced_snake_block_beehive',
          'productivebees:advanced_warped_beehive',
          'productivebees:advanced_birch_beehive',
          'productivebees:advanced_spruce_beehive',
          'productivebees:advanced_dark_oak_beehive',
          'productivebees:advanced_oak_beehive',
          'productivebees:advanced_jungle_beehive',
          'productivebees:advanced_acacia_beehive',
        ],
      });

      event.custom({
        global: true,
        result: {item: 'immersiveengineering:sample_drill'},
        pattern: ['aba', 'aba', 'cdc'],
        key: {
          a: 'immersiveengineering:steel_scaffolding_standard',
          b: 'immersiveengineering:steel_fence',
          c: 'immersiveengineering:light_engineering',
          d: 'create:precision_mechanism',
        },
      });

      event.custom({
        global: true,
        result: {item: 'rankine:diamond_tier_crushing_head'},
        pattern: [' a ', 'aba', 'cdc'],
        key: {
          a: 'rankine:titanium_alloy_ingot',
          b: 'create:precision_mechanism',
          c: 'minecraft:piston',
          d: 'rankine:titanium_alloy_block',
        },
      });
      event.custom({
        global: true,
        result: {item: 'rankine:netherite_tier_crushing_head'},
        pattern: [' a ', 'aba', 'cdc'],
        key: {
          a: 'rankine:nitinol_ingot',
          b: 'create:precision_mechanism',
          c: 'minecraft:piston',
          d: 'rankine:nitinol_block',
        },
      });

      event.custom({
        global: true,
        result: {item: 'rankine:iron_tier_crushing_head'},
        pattern: [' a ', 'aba', 'cdc'],
        key: {
          a: 'rankine:steel_ingot',
          b: 'create:precision_mechanism',
          c: 'minecraft:piston',
          d: 'rankine:steel_block',
        },
      });
      event.custom({
        global: true,
        result: {item: 'rankine:stone_tier_crushing_head'},
        pattern: [' a ', 'aba', 'cdc'],
        key: {
          a: 'rankine:brass_block',
          b: 'create:electron_tube',
          c: 'minecraft:piston',
          d: 'rankine:brass_block',
        },
      });
      event.custom({
        global: true,
        result: {item: 'create:mechanical_plough'},
        pattern: ['aaa', 'bbb', ' c '],
        key: {
          a: 'naturesaura:sky_ingot',
          b: 'create:andesite_alloy',
          c: 'create:andesite_casing',
        },
      });
      event.custom({
        global: true,
        result: {item: 'create:mechanical_harvester'},
        pattern: ['bab', 'bab', ' c '],
        key: {
          a: 'naturesaura:sky_ingot',
          b: 'create:andesite_alloy',
          c: 'create:andesite_casing',
        },
      });
      event.custom({
        global: true,
        result: {item: 'botania:alchemy_catalyst'},
        pattern: ['aba', 'cdc', 'aba'],
        key: {
          a: 'botania:livingrock',
          b: 'rankine:rose_gold_ingot',
          c: 'minecraft:brewing_stand',
          d: 'minecraft:honeycomb',
        },
      });

      event.custom({
        global: true,
        result: {item: 'botania:mana_tablet'},
        pattern: ['aaa', 'aba', 'aaa'],
        key: {
          a: 'botania:livingrock',
          b: 'botania:mana_pearl',
        },
      });

      event.custom({
        global: true,
        result: {item: 'create:mechanical_drill'},
        pattern: [' b ', 'bab', ' c '],
        key: {
          a: 'cataclysm:ignitium_ingot',
          b: 'create:andesite_alloy',
          c: 'create:andesite_casing',
        },
      });

      event.custom({
        global: true,
        result: {item: 'kubejs:tin_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:copper_coin`,
        },
      });
      event.custom({
        global: true,
        result: {item: 'kubejs:iron_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:tin_coin`,
        },
      });
      event.custom({
        global: true,
        result: {item: 'kubejs:lead_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:iron_coin`,
        },
      });
      event.custom({
        global: true,
        result: {item: 'kubejs:silver_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:lead_coin`,
        },
      });
      event.custom({
        global: true,
        result: {item: 'kubejs:zinc_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:silver_coin`,
        },
      });
      event.custom({
        global: true,
        result: {item: 'kubejs:aluminum_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:zinc_coin`,
        },
      });
      event.custom({
        global: true,
        result: {item: 'kubejs:gold_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:aluminum_coin`,
        },
      });
      event.custom({
        global: true,
        result: {item: 'kubejs:steel_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:gold_coin`,
        },
      });
      event.custom({
        global: true,
        result: {item: 'kubejs:nickel_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:steel_coin`,
        },
      });
      event.custom({
        global: true,
        result: {item: 'kubejs:platinum_coin'},
        pattern: [
          '  aaaaa  ',
          ' aaaaaaa ',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          'aaaaaaaaa',
          ' aaaaaaa ',
          '  aaaaa  ',
        ],
        key: {
          a: `kubejs:nickel_coin`,
        },
      });
    },
    milling: () => {
      event.remove({
        input: [
          '#minecraft:wool',
          'minecraft:bone_meal',
          'minecraft:cocoa_beans',
          'minecraft:oxeye_daisy',
          'minecraft:sea_pickle',
          'minecraft:ink_sac',
          'minecraft:wither_rose',
          'minecraft:lapis_lazuli',
          'minecraft:poppy',
          'minecraft:dandelion',
          'farmersdelight:wild_potatoes',
          'minecraft:lilac',
          'minecraft:white_tulip',
          'minecraft:cactus',
          'minecraft:sunflower',
          'farmersdelight:wild_tomatoes',
          'minecraft:grass',
          'farmersdelight:wild_cabbages',
          'minecraft:orange_tulip',
          'minecraft:calcite',
          'farmersdelight:wild_onions',
          'minecraft:large_fern',
          'minecraft:tall_grass',
          'farmersdelight:wild_beetroots',
          'minecraft:coal',
          'farmersdelight:rice_panicle',
          'minecraft:rose_bush',
          'minecraft:azure_bluet',
          'minecraft:lily_of_the_valley',
          'minecraft:red_tulip',
          'minecraft:allium',
          'farmersdelight:wild_rice',
          'minecraft:cornflower',
          'farmersdelight:wild_carrots',
          'minecraft:blue_orchid',
          'minecraft:peony',
          'minecraft:charcoal',
          'minecraft:pink_tulip',
          'minecraft:fern',
        ],
        type: 'create:milling',
      });

      evet.remove({output: ['minecraft:bonemeal'], type: 'create:milling'});

      event.remove({
        output: [
          'botania:red_petal',
          'botania:orange_petal',
          'botania:yellow_petal',
          'botania:lime_petal',
          'botania:green_petal',
          'botania:cyan_petal',
          'botania:light_blue_petal',
          'botania:blue_petal',
          'botania:blue_petal',
          'botania:purple_petal',
          'botania:magenta_petal',
          'botania:pink_petal',
          'botania:brown_petal',
          'botania:gray_petal',
          'botania:light_gray_petal',
          'botania:black_petal',
          'botania:white_petal',
          'undergarden:ditchbulb_paste',
          'minecraft:blaze_powder',
          'charcoal_pit:prismarine_dust',
          'extendedcrafting:luminessence',
        ],
      });

      event.custom({
        type: 'create:milling',
        ingredients: [{item: 'minecraft:bone'}],
        results: [{item: '3x minecraft:bone_meal'}],
        processingTime: 50,
      });
      event.custom({
        type: 'create:milling',
        ingredients: [{item: 'undergarden:ditchbulb'}],
        results: [
          {
            item: 'undergarden:ditchbulb_paste',
          },
        ],
        processingTime: 50,
      });
      event.custom({
        type: 'create:milling',
        ingredients: [{item: 'minecraft:blaze_rod'}],
        results: [
          {
            item: 'minecraft:blaze_powder',
          },
        ],
        processingTime: 50,
      });
      event.custom({
        type: 'create:milling',
        ingredients: [{item: 'minecraft:prismarine'}],
        results: [
          {
            item: 'charcoal_pit:prismarine_dust',
          },
        ],
        processingTime: 50,
      });

      event.custom({
        type: 'create:milling',
        ingredients: [{item: 'blue_skies:spider_webbing'}],
        results: [{item: '3x minecraft:string'}],
        processingTime: 50,
      });
    },
    mixing: () => {
      event.remove({input: ['createaddition:biomass'], type: 'create:mixing'});
      event.remove({
        output: [
          'immersiveengineering:ingot_electrum',
          'immersiveengineering:ingot_constantan',
          'rankine:zinc_nugget',
          'rankine:cupronickel_ingot',
        ],
        type: 'create:mixing',
      });

      event.remove({
        output: [
          'hem:copparite',
          'farmersdelight:pie_crust',
          'chemlib:chromium_oxide',
          'chemlib:silicon_dioxide',
          'create:dough',
          'minecraft:cookie',
          'botania:fertilizer',
          'rankine:vulcanized_rubber',
          'extendedcrafting:redstone_ingot',
          'tconstruct:pig_iron_ingot',
          'hem:rose_copper_ingot',
          'hem:bronze_ingot',
          'rankine:rose_gold_ingot',
          'hem:copparite',
        ],
      });

      event.custom({
        type: 'create:mixing',
        results: [{item: 'farmersdelight:pie_crust'}],
        ingredients: [{tag: 'forge:flour'}, Fluid.of('minecraft:milk', 1000)],
      });

      event.custom({
        type: 'create:mixing',
        results: [{item: 'create:dough'}],
        ingredients: [
          {tag: '3x #forge:flour'},
          Fluid.of('minecraft:water', 1000),
        ],
      });
      event.custom({
        type: 'create:mixing',
        results: [{count: 8, item: 'minecraft:cookie'}],
        ingredients: [{item: 'create:dough'}, {item: 'minecraft:cocoa_beans'}],
        heatRequirement: 'heated',
      });

      event.custom({
        type: 'create:mixing',
        results: [{item: 'rankine:maple_syrup'}],
        ingredients: [
          {fluid: 'rankine:maple_sap', amount: 1000},
          {item: 'minecraft:glass_bottle'},
        ],
        heatRequirement: 'heated',
      });
      event.custom({
        type: 'create:mixing',
        results: [{item: 'rankine:pancake_batter'}],
        ingredients: [
          {fluid: 'minecraft:milk', amount: 1000},
          {item: 'minecraft:sugar'},
          {tag: 'forge:flour'},
          {item: 'minecraft:egg'},
          {tag: 'forge:salt'},
        ],
      });
    },
    pressing: () => {
      event.custom({
        type: 'create:pressing',
        results: [{item: 'chemlib:silver_plate'}],
        ingredients: [{item: 'rankine:silver_ingot'}],
      });
      event.custom({
        type: 'create:pressing',
        results: [{item: 'chemlib:lead_plate'}],
        ingredients: [{item: 'rankine:lead_ingot'}],
      });
      event.custom({
        type: 'create:pressing',
        results: [{item: 'chemlib:aluminum_plate'}],
        ingredients: [{item: 'rankine:aluminum_ingot'}],
      });

      event.custom({
        type: 'create:pressing',
        results: [{item: 'chemlib:gold_plate'}],
        ingredients: [{item: 'minecraft:gold_ingot'}],
      });
      // event.custom({
      //     results: [{item: "chemlib:zinc_plate"}],
      //     ingredients: [{item: "rankine:zinc_ingot"}],
      // });
      event.custom({
        type: 'create:pressing',
        results: [{item: 'chemlib:cobalt_plate'}],
        ingredients: [{item: 'rankine:cobalt_ingot'}],
      });
      event.custom({
        type: 'create:pressing',
        results: [{item: 'chemlib:tin_plate'}],
        ingredients: [{item: 'rankine:tin_ingot'}],
      });
      event.custom({
        type: 'create:pressing',
        results: [{item: 'chemlib:sodium_plate'}],
        ingredients: [{item: 'rankine:sodium_chloride'}],
      });
      event.custom({
        type: 'create:pressing',
        results: [{item: 'chemlib:titanium_plate'}],
        ingredients: [{item: 'rankine:aluminum_ingot'}],
      });
    },
    sequenced_assembly: () => {
      event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'rankine:pancake'},
        transitionalItem: {item: 'rankine:pancake'},
        sequence: [
          event.custom({
            type: 'create:deploying',
            ingredients: [{item: 'rankine:pancake'}, {item: 'rankine:pancake'}],
            results: [{item: 'rankine:pancake'}],
          }),
          event.custom({
            type: 'create:deploying',
            ingredients: [{item: 'rankine:pancake'}, {item: 'rankine:pancake'}],
            results: [{item: 'rankine:pancake'}],
          }),
          event.custom({
            type: 'create:deploying',
            ingredients: [{item: 'rankine:pancake'}, {item: 'rankine:pancake'}],
            results: [{item: 'rankine:pancake'}],
          }),
          event.custom({
            type: 'create:deploying',
            ingredients: [{item: 'rankine:pancake'}, {item: 'rankine:pancake'}],
            results: [{item: 'rankine:pancake'}],
          }),
        ],
        results: [{item: 'rankine:pancake_breakfast'}],
        loops: 1,
      });
    },
    splashing: () => {
      event.remove({
        output: ['minecraft:red_sand', 'rankine:zinc_nugget'],
        type: 'create:splashing',
      });

      event.custom({
        type: 'create:splashing',
        ingredients: [{item: 'create:crushed_raw_zinc'}],
        results: [{item: 'rankine:zinc_nugget', count: 9}],
      });
    },
  });
});
