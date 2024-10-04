onEvent('recipes', (event) => {
  setBalanceRecipes({
    crushing: () => {
      event.remove({
        output: [
          'mekanism:dust_lapis_lazuli',
          'mekanism:dust_diamond',
          'chemlib:tungsten_dust',
          'immersiveengineering:dust_steel',
          'chemlib:platinum_dust',
          'chemlib:cobalt_dust',
          'immersiveengineering:dust_nickel',
          'occultism:obsidian_dust',
          'immersiveengineering:dust_constantan',
          'mekanism:dust_netherite',
          'immersiveengineering:dust_aluminum',
          'mekanism:dust_fluorite',
          'immersiveengineering:dust_uranium',
          'mekanism:dust_osmium',
          'immersiveengineering:dust_electrum',
          'immersiveengineering:dust_lead',
          'mekanism:dust_bronze',
          'chemlib:graphite_dust',
          'mekanism:dust_tin',
          'mekanism:dust_emerald',
          'mekanism:dust_quartz',
          'immersiveengineering:dust_sulfur',
          'chemlib:iridium_dust',
          'mekanism:dust_coal',
          'immersiveengineering:dust_copper',
          'immersiveengineering:dust_gold',
          'immersiveengineering:dust_iron',
          'immersiveengineering:dust_silver'
        ],
        type: 'occultism:crushing'
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/froststeel' },
        result: { item: 'undergarden:raw_froststeel', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/cloggrum' },
        result: { item: 'undergarden:raw_cloggrum', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/uranium' },
        result: { item: 'rankine:uraninite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/zinc' },
        result: { item: 'rankine:sphalerite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/nickel' },
        result: { item: 'rankine:pentlandite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/iron' },
        result: { item: 'rankine:hematite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/lead' },
        result: { item: 'rankine:galena', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/cobalt' },
        result: { item: 'rankine:cobaltite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/tin' },
        result: { item: 'rankine:cassiterite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/aluminum' },
        result: { item: 'rankine:bauxite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'forge:ores/silver' },
        result: { item: 'rankine:acanthite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'blue_skies:ores/horizonite' },
        result: { item: 'blue_skies:raw_horizonite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'blue_skies:ores/ventium' },
        result: { item: 'blue_skies:raw_ventium', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'blue_skies:ores/falsite' },
        result: { item: 'blue_skies:raw_falsite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'blue_skies:ores/charoite' },
        result: { item: 'blue_skies:raw_charoite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { tag: 'blue_skies:ores/aquite' },
        result: { item: 'blue_skies:raw_aquite', count: 2 },
        crushing_time: 200
      });
      event.custom({
        type: 'occultism:crushing',
        ingredient: { item: 'mythicbotany:gold_ore' },
        result: { item: 'minecraft:raw_gold', count: 2 },
        crushing_time: 200
      });
    },
    ritual: () => {
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_tamed',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni'
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:parrots',
          display_name: 'ritual.occultism.sacrifice.parrots'
        },
        entity_to_summon: 'occultism:otherworld_bird',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_otherworld_bird'
        },
        ingredients: [
          {
            tag: 'forge:feathers'
          },
          {
            tag: 'forge:feathers'
          },
          {
            item: 'minecraft:cobweb'
          },
          {
            tag: 'minecraft:leaves'
          },
          {
            tag: 'forge:string'
          },
          {
            item: 'create:sturdy_sheet'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_with_chance_of_chicken_tamed',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot'
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:chicken',
          display_name: 'ritual.occultism.sacrifice.chicken'
        },
        entity_to_summon: 'minecraft:parrot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_parrot'
        },
        ingredients: [
          {
            tag: 'forge:feathers'
          },
          {
            tag: 'forge:dyes/green'
          },
          {
            tag: 'forge:dyes/yellow'
          },
          {
            tag: 'forge:dyes/red'
          },
          {
            tag: 'forge:dyes/blue'
          },
          {
            tag: 'forge:string'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot'
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_summon: 'occultism:possessed_skeleton',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/possess_skeleton'
        },
        ingredients: [
          {
            tag: 'forge:bones'
          },
          {
            tag: 'forge:bones'
          },
          {
            tag: 'forge:bones'
          },
          {
            tag: 'forge:bones'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni'
        },
        pentacle_id: 'occultism:summon_djinni',
        duration: 60,
        spirit_max_age: 60,
        spirit_job_type: 'occultism:clear_weather',
        entity_to_summon: 'occultism:djinni',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_djinni_clear_weather'
        },
        ingredients: [
          {
            tag: 'forge:crops/beetroot'
          },
          {
            tag: 'forge:crops/carrot'
          },
          {
            tag: 'forge:crops/potato'
          },
          {
            item: 'kubejs:wheat'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni'
        },
        pentacle_id: 'occultism:summon_djinni',
        duration: 90,
        spirit_max_age: -1,
        spirit_job_type: 'occultism:crush_tier2',
        entity_to_summon: 'occultism:djinni',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_djinni_crusher'
        },
        ingredients: [
          {
            item: 'undergarden:cloggrum_ingot'
          },
          {
            item: 'undergarden:regalium_crystal'
          },
          {
            item: 'undergarden:utherium_crystal'
          },
          {
            item: 'undergarden:froststeel_ingot'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni'
        },
        pentacle_id: 'occultism:summon_djinni',
        duration: 60,
        spirit_max_age: 60,
        spirit_job_type: 'occultism:day_time',
        entity_to_summon: 'occultism:djinni',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_djinni_day_time'
        },
        ingredients: [
          {
            item: 'minecraft:blaze_powder'
          },
          {
            tag: 'minecraft:saplings'
          },
          {
            item: 'kubejs:wheat'
          },
          {
            tag: 'forge:dyes/yellow'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni'
        },
        pentacle_id: 'occultism:summon_djinni',
        duration: 60,
        spirit_max_age: 60,
        spirit_job_type: 'occultism:night_time',
        entity_to_summon: 'occultism:djinni',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_djinni_night_time'
        },
        ingredients: [
          {
            tag: 'minecraft:beds'
          },
          {
            item: 'minecraft:rotten_flesh'
          },
          {
            tag: 'forge:bones'
          },
          {
            tag: 'forge:dyes/black'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot'
        },
        pentacle_id: 'occultism:summon_foliot',
        duration: 60,
        spirit_max_age: 32400,
        spirit_job_type: 'occultism:crush_tier1',
        entity_to_summon: 'occultism:foliot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_foliot_crusher'
        },
        ingredients: [
          {
            item: 'rankine:graphite'
          },
          {
            tag: 'forge:raw_materials/lead'
          },
          {
            tag: 'forge:raw_materials/copper'
          },
          {
            tag: 'forge:raw_materials/silver'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot'
        },
        pentacle_id: 'occultism:summon_foliot',
        duration: 60,
        spirit_max_age: -1,
        spirit_job_type: 'occultism:lumberjack',
        entity_to_summon: 'occultism:foliot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_foliot_lumberjack'
        },
        ingredients: [
          {
            tag: 'occultism:saplings/otherworld'
          },
          {
            item: 'minecraft:oak_sapling'
          },
          {
            item: 'minecraft:birch_sapling'
          },
          {
            item: 'minecraft:spruce_sapling'
          },
          {
            tag: 'forge:tools/metal/axes'
          }
        ],
        result: {
          item: 'occultism:book_of_calling_foliot_lumberjack'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot'
        },
        pentacle_id: 'occultism:summon_foliot',
        duration: 30,
        spirit_max_age: 3600,
        spirit_job_type: 'occultism:trade_otherstone_t1',
        entity_to_summon: 'occultism:foliot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_foliot_otherstone_trader'
        },
        ingredients: [
          {
            item: 'minecraft:stone'
          },
          {
            item: 'minecraft:granite'
          },
          {
            item: 'minecraft:diorite'
          },
          {
            item: 'minecraft:andesite'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot'
        },
        pentacle_id: 'occultism:summon_foliot',
        duration: 30,
        spirit_max_age: 3600,
        spirit_job_type: 'occultism:trade_otherworld_saplings_t1',
        entity_to_summon: 'occultism:foliot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_foliot_sapling_trader'
        },
        ingredients: [
          {
            item: 'minecraft:oak_sapling'
          },
          {
            item: 'minecraft:birch_sapling'
          },
          {
            item: 'minecraft:spruce_sapling'
          },
          {
            item: 'minecraft:jungle_sapling'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni'
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:parrots',
          display_name: 'ritual.occultism.sacrifice.parrots'
        },
        entity_to_summon: 'occultism:otherworld_bird',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_wild_otherworld_bird'
        },
        ingredients: [
          {
            tag: 'forge:feathers'
          },
          {
            tag: 'forge:feathers'
          },
          {
            item: 'minecraft:cobweb'
          },
          {
            tag: 'minecraft:leaves'
          },
          {
            tag: 'forge:eggs'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni'
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:chicken',
          display_name: 'ritual.occultism.sacrifice.chicken'
        },
        entity_to_summon: 'minecraft:parrot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_wild_parrot'
        },
        ingredients: [
          {
            tag: 'forge:feathers'
          },
          {
            tag: 'forge:dyes/green'
          },
          {
            tag: 'forge:dyes/yellow'
          },
          {
            tag: 'forge:dyes/red'
          },
          {
            tag: 'forge:dyes/blue'
          },
          {
            tag: 'forge:eggs'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_tamed',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni'
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:parrots',
          display_name: 'ritual.occultism.sacrifice.parrots'
        },
        entity_to_summon: 'occultism:otherworld_bird',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_otherworld_bird'
        },
        ingredients: [
          {
            tag: 'forge:feathers'
          },
          {
            tag: 'forge:feathers'
          },
          {
            item: 'minecraft:cobweb'
          },
          {
            tag: 'minecraft:leaves'
          },
          {
            tag: 'forge:string'
          },
          {
            item: 'minecraft:quartz'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_with_chance_of_chicken_tamed',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot'
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:chicken',
          display_name: 'ritual.occultism.sacrifice.chicken'
        },
        entity_to_summon: 'minecraft:parrot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_parrot'
        },
        ingredients: [
          {
            tag: 'forge:feathers'
          },
          {
            tag: 'forge:dyes/green'
          },
          {
            tag: 'forge:dyes/yellow'
          },
          {
            tag: 'forge:dyes/red'
          },
          {
            tag: 'forge:dyes/blue'
          },
          {
            tag: 'forge:string'
          },
          {
            item: 'minecraft:quartz'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni'
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 60,
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs'
        },
        entity_to_summon: 'occultism:possessed_ghast',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/possess_ghast'
        },
        ingredients: [
          {
            tag: 'forge:netherrack'
          },
          {
            tag: 'forge:netherrack'
          },
          {
            tag: 'forge:netherrack'
          },
          {
            tag: 'forge:magma'
          },
          {
            tag: 'forge:magma'
          },
          {
            tag: 'forge:magma'
          },
          {
            item: 'minecraft:lava_bucket'
          },
          {
            item: 'minecraft:lava_bucket'
          },
          {
            item: 'minecraft:lava_bucket'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot'
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:chicken',
          display_name: 'ritual.occultism.sacrifice.chicken'
        },
        entity_to_summon: 'occultism:possessed_skeleton',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/possess_skeleton'
        },
        ingredients: [
          {
            tag: 'forge:bones'
          },
          {
            tag: 'forge:bones'
          },
          {
            tag: 'forge:bones'
          },
          {
            tag: 'forge:bones'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_afrit'
        },
        pentacle_id: 'occultism:summon_afrit',
        duration: 120,
        spirit_max_age: -1,
        spirit_job_type: 'occultism:crush_tier3',
        entity_to_summon: 'occultism:afrit',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_afrit_crusher'
        },
        ingredients: [
          {
            item: 'create:chromatic_compound'
          },
          {
            tag: 'forge:dusts/iesnium'
          },
          {
            tag: 'forge:dusts/iesnium'
          },
          {
            item: 'rankine:rose_gold_ingot'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_afrit'
        },
        pentacle_id: 'occultism:summon_afrit',
        duration: 60,
        spirit_max_age: 120,
        spirit_job_type: 'occultism:rain_weather',
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs'
        },
        entity_to_summon: 'occultism:afrit',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_afrit_rain_weather'
        },
        ingredients: [
          {
            tag: 'forge:sand'
          },
          {
            item: 'create:chromatic_compound'
          },
          {
            item: 'minecraft:cactus'
          },
          {
            item: 'minecraft:dead_bush'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_afrit'
        },
        pentacle_id: 'occultism:summon_afrit',
        duration: 60,
        spirit_max_age: 240,
        spirit_job_type: 'occultism:thunder_weather',
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs'
        },
        entity_to_summon: 'occultism:afrit',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_afrit_thunder_weather'
        },
        ingredients: [
          {
            tag: 'forge:bones'
          },
          {
            tag: 'forge:gunpowder'
          },
          {
            tag: 'forge:gunpowder'
          },
          {
            item: 'minecraft:ghast_tear'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_marid'
        },
        pentacle_id: 'occultism:summon_marid',
        duration: 150,
        spirit_max_age: -1,
        spirit_job_type: 'occultism:crush_tier4',
        entity_to_summon: 'occultism:marid',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_marid_crusher'
        },
        ingredients: [
          {
            item: 'rankine:rose_gold_block'
          },
          {
            item: 'minecraft:ghast_tear'
          },
          {
            tag: 'forge:storage_blocks/iesnium'
          },
          {
            item: 'cataclysm:witherite_block'
          }
        ],
        result: {
          item: 'occultism:jei_dummy/none'
        }
      });
    },
    spirit_fire: () => {
      event.remove({
        output: [
          'occultism:otherworld_ashes',
          'occultism:purified_ink',
          'occultism:spirit_attuned_gem',
          'hexerei:willow_sapling',
          'hexerei:mahogany_sapling',
          'hexerei:yellow_dock_leaves',
          'hexerei:yellow_dock_flowers',
          'hexerei:mandrake_flowers',
          'hexerei:mugwort_leaves',
          'hexerei:mugwort_flowers',
          'hexerei:belladonna_flowers',
          'hexerei:belladonna_berries'
        ]
      });
      event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
          item: 'blue_skies:crescent_fruit_sapling'
        },
        result: {
          item: 'hexerei:willow_sapling'
        }
      });
      event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
          item: 'minecraft:crimson_fungus'
        },
        result: {
          item: 'hexerei:mahogany_sapling'
        }
      });
      event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
          item: 'twilightforest:torchberries'
        },
        result: {
          item: 'hexerei:yellow_dock_leaves'
        }
      });
      event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
          item: 'hexerei:yellow_dock_leaves'
        },
        result: {
          item: 'hexerei:yellow_dock_flowers'
        }
      });
      event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
          item: 'hexerei:mandrake_root'
        },
        result: {
          item: 'hexerei:mandrake_flowers'
        }
      });
      event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
          item: 'minecraft:cocoa_beans'
        },
        result: {
          item: 'hexerei:mugwort_leaves'
        }
      });
      event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
          item: 'hexerei:mugwort_leaves'
        },
        result: {
          item: 'hexerei:mugwort_flowers'
        }
      });
      event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
          item: 'undergarden:gloomgourd_seeds'
        },
        result: {
          item: 'hexerei:belladonna_flowers'
        }
      });
      event.custom({
        type: 'occultism:spirit_fire',
        ingredient: {
          item: 'hexerei:belladonna_flowers'
        },
        result: {
          item: 'hexerei:belladonna_berries'
        }
      });
    }
  });
});

onEvent('server.datapack.high_priority', (event) => {
  [
    'occultism:recipes/ritual/possess_enderman',
    'occultism:recipes/ritual/craft_miner_afrit_deeps',
    'occultism:recipes/ritual/possess_ghast',
    'occultism:recipes/ritual/familiar_guardian',
    'occultism:recipes/ritual/craft_miner_foliot_unspecialized',
    'occultism:recipes/ritual/familiar_fairy',
    'occultism:recipes/ritual/craft_miner_marid_master',
    'occultism:recipes/ritual/craft_infused_pickaxe'
  ].forEach((id) => {
    event.addJson(`${id}.json`, {
      type: 'forge:conditional',
      recipes: [
        {
          conditions: [
            {
              type: 'forge:false'
            }
          ]
        }
      ]
    });
  });
});
