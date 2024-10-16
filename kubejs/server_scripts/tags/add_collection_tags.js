onEvent('tags.items', (event) => {
  function setTags(chapter, collection, group, id) {
    chapters.forEach((c) => {
      event.remove(`im:${c}`, id);
    });
    event.add(`im:${collection}`, id);
    event.add(`im:${collection}/${chapter}`, id);
    if (group) event.add(`im:${collection}/${group}`, id);
  }

  function addCollection(collection, config) {
    Object.keys(config).forEach((chapter) => {
      if (
        config[chapter] instanceof Object &&
        !Array.isArray(config[chapter])
      ) {
        Object.keys(config[chapter]).forEach((group) => {
          config[chapter][group].forEach((id) => {
            setTags(chapter, collection, group, id);
          });
        });
      } else {
        config[chapter].forEach((id) => {
          setTags(chapter, collection, null, id);
        });
      }
    });
  }

  addCollection('armors', {
    chapter_1: {
      leather: [
        'minecraft:leather_helmet',
        'minecraft:leather_chestplate',
        'minecraft:leather_leggings',
        'minecraft:leather_boots'
      ],
      copper: [
        'charcoal_pit:copper_helmet',
        'charcoal_pit:copper_chestplate',
        'charcoal_pit:copper_leggings',
        'charcoal_pit:copper_boots'
      ],
      bronze: [
        'charcoal_pit:bronze_helmet',
        'charcoal_pit:bronze_chestplate',
        'charcoal_pit:bronze_leggings',
        'charcoal_pit:bronze_boots'
      ],
      iron: [
        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots'
      ]
    },
    chapter_2: {
      charoite: [
        'blue_skies:charoite_helmet',
        'blue_skies:charoite_chestplate',
        'blue_skies:charoite_leggings',
        'blue_skies:charoite_boots'
      ]
    },
    chapter_3: {
      utherium: [
        'undergarden:utherium_helmet',
        'undergarden:utherium_chestplate',
        'undergarden:utherium_leggings',
        'undergarden:utherium_boots'
      ],
      horizonite: [
        'blue_skies:horizonite_helmet',
        'blue_skies:horizonite_chestplate',
        'blue_skies:horizonite_leggings',
        'blue_skies:horizonite_boots'
      ],
      soul_stained_steel: [
        'malum:soul_stained_steel_helmet',
        'malum:soul_stained_steel_chestplate',
        'malum:soul_stained_steel_leggings',
        'malum:soul_stained_steel_boots'
      ],
      fiery: [
        'twilightforest:fiery_helmet',
        'twilightforest:fiery_chestplate',
        'twilightforest:fiery_leggings',
        'twilightforest:fiery_boots'
      ]
    },
    chapter_4: {
      netherite: [
        'minecraft:netherite_helmet',
        'minecraft:netherite_chestplate',
        'minecraft:netherite_leggings',
        'minecraft:netherite_boots'
      ],
      ignitium: [
        'cataclysm:ignitium_helmet',
        'cataclysm:ignitium_chestplate',
        'cataclysm:ignitium_leggings',
        'cataclysm:ignitium_boots'
      ],
      engineers: [
        'hem:steampunkoutfit_helmet',
        'hem:steampunkoutfit_chestplate',
        'hem:steampunkoutfit_leggings',
        'hem:steampunkoutfit_boots'
      ]
    },
    chapter_5_1: {
      manasteel: [
        'botania:manasteel_helmet',
        'botania:manasteel_chestplate',
        'botania:manasteel_leggings',
        'botania:manasteel_boots'
      ],
      sky: [
        'naturesaura:sky_helmet',
        'naturesaura:sky_chest',
        'naturesaura:sky_pants',
        'naturesaura:sky_shoes'
      ],
      terrasteel: [
        'botania:terrasteel_helmet',
        'botania:terrasteel_chestplate',
        'botania:terrasteel_leggings',
        'botania:terrasteel_boots'
      ]
    },
    chapter_5_2: {
      brigandine: [
        'rankine:brigandine_helmet',
        'rankine:brigandine_chestplate',
        'rankine:brigandine_leggings',
        'rankine:brigandine_boots'
      ],
      compressed_iron: [
        'pneumaticcraft:compressed_iron_helmet',
        'pneumaticcraft:compressed_iron_chestplate',
        'pneumaticcraft:compressed_iron_leggings',
        'pneumaticcraft:compressed_iron_boots'
      ],
      orichalcum: [
        'charcoal_pit:orichalcum_helmet',
        'charcoal_pit:orichalcum_chestplate',
        'charcoal_pit:orichalcum_leggings',
        'charcoal_pit:orichalcum_boots'
      ]
    },
    chapter_7_1: {
      diamond: [
        'minecraft:diamond_helmet',
        'minecraft:diamond_chestplate',
        'minecraft:diamond_leggings',
        'minecraft:diamond_boots'
      ],
      mekasuit: [
        'mekanism:mekasuit_helmet',
        'mekanism:mekasuit_bodyarmor',
        'mekanism:mekasuit_pants',
        'mekanism:mekasuit_boots'
      ]
    },
    chapter_7_2: {
      pneumatic: [
        'pneumaticcraft:pneumatic_helmet',
        'pneumaticcraft:pneumatic_chestplate',
        'pneumaticcraft:pneumatic_leggings',
        'pneumaticcraft:pneumatic_boots'
      ]
    }
  });

  addCollection('eyes', {
    chapter_1: ['endrem:cold_eye', 'endrem:undead_soul'],
    chapter_2: ['endrem:exotic_eye', 'endrem:guardian_eye'],
    chapter_3: [
      'endrem:undead_eye',
      'endrem:corrupted_eye',
      'endrem:evil_eye',
      'endrem:lost_eye'
    ],
    chapter_4: ['endrem:nether_eye', 'endrem:wither_eye'],
    chapter_5_1: ['endrem:cursed_eye'],
    chapter_5_2: ['endrem:black_eye'],
    chapter_6: ['endrem:rogue_eye'],
    chapter_7_1: [
      'endrem:cryptic_eye',
      'endrem:old_eye',
      'endrem:witch_eye',
      'endrem:magical_eye'
    ]
  });

  addCollection('lost_stories', {
    chapter_2: ['kubejs:everbright_lost_story'],
    chapter_3: [
      'kubejs:undergarden_lost_story',
      'kubejs:everdawn_lost_story',
      'kubejs:twilight_lost_story'
    ],
    chapter_4: ['kubejs:nether_lost_story'],
    chapter_5_1: ['kubejs:bumblezone_lost_story'],
    chapter_5_2: ['kubejs:blueleaf_lost_story']
  });

  addCollection('lost_pages', {
    chapter_2: ['kubejs:everbright_lost_page'],
    chapter_3: [
      'kubejs:undergarden_lost_page',
      'kubejs:everdawn_lost_page',
      'kubejs:twilight_lost_page'
    ],
    chapter_4: ['kubejs:nether_lost_page'],
    chapter_5_1: ['kubejs:bumblezone_lost_page'],
    chapter_5_2: ['kubejs:blueleaf_lost_page']
  });

  addCollection('totems', {
    chapter_2: ['rankine:totem_of_cobbling'],
    chapter_3: [
      'rankine:totem_of_timesaving',
      'rankine:totem_of_hastening',
      'rankine:totem_of_infusing'
    ],
    chapter_4: [
      'rankine:totem_of_enduring',
      'rankine:totem_of_promising',
      'rankine:totem_of_softening',
      'rankine:totem_of_blazing'
    ],
    chapter_5_1: [],
    chapter_5_2: [],
    chapter_7_1: [
      'rankine:totem_of_levitating',
      'rankine:totem_of_repulsing',
      'rankine:totem_of_powering',
      'rankine:totem_of_invigorating'
    ]
  });

  addCollection('relics', {
    chapter_2: {
      everbright: [
        'relics:amphibian_boot',
        'relics:drowned_belt',
        'relics:aqua_walker',
        'relics:jellyfish_necklace',
        'artifacts:flippers',
        'artifacts:snorkel',
        'relics:researching_table',
        'relics:relic_experience_bottle'
      ]
    },
    chapter_3: {
      undergarden: [
        'relics:spore_sack',
        'artifacts:antidote_vessel',
        'artifacts:lucky_scarf',
        'artifacts:digging_claws',
        'artifacts:night_vision_goggles',
        'artifacts:kitty_slippers'
      ],
      everdawn: [
        'relics:rage_glove',
        'artifacts:superstitious_hat',
        'artifacts:scarf_of_invisibility',
        'artifacts:feral_claws',
        'artifacts:panic_necklace',
        'artifacts:power_glove'
      ],
      twilight: [
        'relics:magic_mirror',
        'artifacts:thorn_pendant',
        'artifacts:universal_attractor',
        'artifacts:steadfast_spikes',
        'artifacts:pocket_piston',
        'artifacts:crystal_heart'
      ]
    },
    chapter_4: {
      nether: [
        'relics:magma_walker',
        'relics:bastion_ring',
        'relics:blazing_flask',
        'artifacts:fire_gauntlet',
        'artifacts:flame_pendant',
        'artifacts:obsidian_skull'
      ],
      blueleaf: [
        'relics:hunter_belt',
        'relics:arrow_quiver',
        'relics:horse_flute',
        'artifacts:plastic_drinking_hat',
        'artifacts:villager_hat',
        'artifacts:novelty_drinking_hat'
      ]
    },
    chapter_5_1: {
      bumblezone: [
        'relics:leather_belt',
        'relics:wool_mitten',
        'relics:solid_snowball',
        'relics:infinity_ham',
        'artifacts:vampiric_glove',
        'artifacts:bunny_hoppers',
        'artifacts:whoopee_cushion'
      ]
    },
    chapter_7_1: {
      tofuland: [
        'relics:roller_skates',
        'relics:ice_breaker',
        'relics:ice_skates',
        'artifacts:charm_of_sinking',
        'artifacts:running_shoes',
        'artifacts:aqua_dashers'
      ],
      alfheim: [
        'artifacts:golden_hook',
        'artifacts:helium_flamingo',
        'artifacts:cloud_in_a_bottle',
        'artifacts:cross_necklace',
        'artifacts:umbrella',
        'relics:holy_locket'
      ],
      end: [
        'relics:shadow_glaive',
        'relics:elytra_booster',
        'relics:enders_hand',
        'relics:chorus_inhibitor',
        'relics:midnight_robe',
        'relics:reflection_necklace',
        'relics:spatial_sign',
        'relics:space_dissector',
        'artifacts:shock_pendant'
      ]
    }
  });

  addCollection('spawn_eggs', {
    chapter_1: {
      overworld: [
        'minecraft:zombie_spawn_egg',
        'minecraft:silverfish_spawn_egg',
        'minecraft:husk_spawn_egg',
        'biomancy:flesh_blob_spawn_egg'
      ]
    },
    chapter_2: {
      everbright: [
        'blue_skies:armored_frost_spirit_spawn_egg',
        'blue_skies:artificial_golem_spawn_egg',
        'blue_skies:azulfo_spawn_egg',
        'blue_skies:crynocerous_spawn_egg',
        'blue_skies:crystal_camel_spawn_egg',
        'blue_skies:diophyde_prowler_spawn_egg',
        'blue_skies:frost_spirit_spawn_egg',
        'blue_skies:gatekeeper_spawn_egg',
        'blue_skies:jelly_drifter_spawn_egg',
        'blue_skies:polargeist_spawn_egg',
        'blue_skies:reindeer_spawn_egg',
        'blue_skies:seclam_spawn_egg',
        'blue_skies:shrumpty_spawn_egg',
        'blue_skies:snow_owl_spawn_egg',
        'blue_skies:spewter_spawn_egg',
        'blue_skies:stardust_ram_spawn_egg',
        'blue_skies:starlit_crusher_spawn_egg',
        'blue_skies:stonelet_spawn_egg',
        'blue_skies:summoner_spawn_egg',
        'blue_skies:whistleshell_crab_spawn_egg',
        'blue_skies:grittle_flatfish_spawn_egg',
        'blue_skies:municipal_monkfish_spawn_egg',
        'minecraft:elder_guardian_spawn_egg'
      ],
      aquatic: [
        'minecraft:witch_spawn_egg',
        'minecraft:skeleton_spawn_egg',
        'minecraft:guardian_spawn_egg',
        'minecraft:drowned_spawn_egg',
        'minecraft:axolotl_spawn_egg',
        'minecraft:cod_spawn_egg',
        'minecraft:dolphin_spawn_egg',
        'minecraft:glow_squid_spawn_egg',
        'minecraft:pufferfish_spawn_egg',
        'minecraft:salmon_spawn_egg',
        'minecraft:squid_spawn_egg',
        'minecraft:tropical_fish_spawn_egg',
        'minecraft:turtle_spawn_egg'
      ]
    },
    chapter_3: {
      experiments: [
        'occultism:spawn_egg/wild_hunt_wither_skeleton',
        'occultism:spawn_egg/wild_hunt_skeleton',
        'occultism:spawn_egg/possessed_skeleton',
        'occultism:spawn_egg/possessed_endermite',
        'occultism:spawn_egg/djinni',
        'occultism:spawn_egg/foliot',
        'occultism:spawn_egg/otherworld_bird'
      ],
      undergarden: [
        'undergarden:brute_spawn_egg',
        'undergarden:dweller_spawn_egg',
        'undergarden:forgotten_guardian_spawn_egg',
        'undergarden:gloomper_spawn_egg',
        'undergarden:gwib_spawn_egg',
        'undergarden:gwibling_spawn_egg',
        'undergarden:masticator_spawn_egg',
        'undergarden:mog_spawn_egg',
        'undergarden:muncher_spawn_egg',
        'undergarden:nargoyle_spawn_egg',
        'undergarden:rotbeast_spawn_egg',
        'undergarden:rotling_spawn_egg',
        'undergarden:rotwalker_spawn_egg',
        'undergarden:scintling_spawn_egg',
        'undergarden:sploogie_spawn_egg',
        'undergarden:stoneborn_spawn_egg'
      ],
      forgotten: [
        'minecraft:slime_spawn_egg',
        'minecraft:creeper_spawn_egg',
        'minecraft:bat_spawn_egg',
        'cold_sweat:chameleon_spawn_egg'
      ],
      everdawn: [
        'occultism:spawn_egg/afrit',
        'occultism:spawn_egg/afrit_wild',
        'hexerei:crow_spawn_egg',
        'blue_skies:charscale_moki_spawn_egg',
        'blue_skies:crogre_spawn_egg',
        'blue_skies:horizofin_tunid_spawn_egg',
        'blue_skies:sliv_spawn_egg',
        'blue_skies:cosmic_fox_spawn_egg',
        'blue_skies:emberback_spawn_egg',
        'blue_skies:firefly_spawn_egg',
        'blue_skies:infested_swarmer_spawn_egg',
        'blue_skies:nested_spider_spawn_egg',
        'blue_skies:nyctofly_spawn_egg',
        'blue_skies:shade_monitor_spawn_egg',
        'blue_skies:venom_spider_spawn_egg',
        'blue_skies:alchemist_spawn_egg',
        'blue_skies:arachnarch_spawn_egg'
      ],
      poisonous: [
        'minecraft:spider_spawn_egg',
        'minecraft:cave_spider_spawn_egg',
        'minecraft:fox_spawn_egg',
        'minecraft:ocelot_spawn_egg',
        'minecraft:cat_spawn_egg',
        'minecraft:panda_spawn_egg',
        'minecraft:parrot_spawn_egg',
        'cold_sweat:chameleon_spawn_egg'
      ],
      twilight: [
        'ecofriendly:droning_drum_ym_spawn_egg',
        'ecofriendly:oil_zombie_spawn_egg',
        'twilightforest:adherent_spawn_egg',
        'twilightforest:alpha_yeti_spawn_egg',
        'twilightforest:armored_giant_spawn_egg',
        'twilightforest:bighorn_sheep_spawn_egg',
        'twilightforest:blockchain_goblin_spawn_egg',
        'twilightforest:boar_spawn_egg',
        'twilightforest:carminite_broodling_spawn_egg',
        'twilightforest:carminite_ghastguard_spawn_egg',
        'twilightforest:carminite_ghastling_spawn_egg',
        'twilightforest:carminite_golem_spawn_egg',
        'twilightforest:death_tome_spawn_egg',
        'twilightforest:deer_spawn_egg',
        'twilightforest:dwarf_rabbit_spawn_egg',
        'twilightforest:fire_beetle_spawn_egg',
        'twilightforest:giant_miner_spawn_egg',
        'twilightforest:harbinger_cube_spawn_egg',
        'twilightforest:hedge_spider_spawn_egg',
        'twilightforest:helmet_crab_spawn_egg',
        'twilightforest:hostile_wolf_spawn_egg',
        'twilightforest:hydra_spawn_egg',
        'twilightforest:ice_crystal_spawn_egg',
        'twilightforest:king_spider_spawn_egg',
        'twilightforest:knight_phantom_spawn_egg',
        'twilightforest:kobold_spawn_egg',
        'twilightforest:penguin_spawn_egg',
        'twilightforest:naga_spawn_egg',
        'twilightforest:mosquito_swarm_spawn_egg',
        'twilightforest:mist_wolf_spawn_egg',
        'twilightforest:minotaur_spawn_egg',
        'twilightforest:minoshroom_spawn_egg',
        'twilightforest:maze_slime_spawn_egg',
        'twilightforest:lower_goblin_knight_spawn_egg',
        'twilightforest:lich_spawn_egg',
        'twilightforest:pinch_beetle_spawn_egg',
        'twilightforest:quest_ram_spawn_egg',
        'twilightforest:raven_spawn_egg',
        'twilightforest:redcap_sapper_spawn_egg',
        'twilightforest:redcap_spawn_egg',
        'twilightforest:roving_cube_spawn_egg',
        'twilightforest:skeleton_druid_spawn_egg',
        'twilightforest:slime_beetle_spawn_egg',
        'twilightforest:snow_guardian_spawn_egg',
        'twilightforest:ur_ghast_spawn_egg',
        'twilightforest:unstable_ice_core_spawn_egg',
        'twilightforest:troll_spawn_egg',
        'twilightforest:towerwood_borer_spawn_egg',
        'twilightforest:tiny_bird_spawn_egg',
        'twilightforest:swarm_spider_spawn_egg',
        'twilightforest:stable_ice_core_spawn_egg',
        'twilightforest:squirrel_spawn_egg',
        'twilightforest:snow_queen_spawn_egg',
        'twilightforest:winter_wolf_spawn_egg',
        'twilightforest:wraith_spawn_egg',
        'twilightforest:yeti_spawn_egg'
      ],
      magical: [
        'minecraft:rabbit_spawn_egg',
        'minecraft:chicken_spawn_egg',
        'minecraft:wolf_spawn_egg',
        'totemic:bald_eagle_spawn_egg',
        'totemic:baykok_spawn_egg'
      ]
    },
    chapter_4: {
      nether: [
        'cnb:cindershell_spawn_egg',
        'cnb:sporeling_nether_egg',
        'cataclysm:ignis_spawn_egg',
        'cataclysm:ignited_revenant_spawn_egg',
        'cataclysm:nameless_sorcerer_spawn_egg',
        'cataclysm:netherite_monstrosity_spawn_egg',
        'minecraft:blaze_spawn_egg',
        'minecraft:ghast_spawn_egg',
        'minecraft:hoglin_spawn_egg',
        'minecraft:magma_cube_spawn_egg',
        'minecraft:piglin_spawn_egg',
        'minecraft:piglin_brute_spawn_egg',
        'minecraft:zombified_piglin_spawn_egg',
        'minecraft:strider_spawn_egg',
        'minecraft:wither_skeleton_spawn_egg',
        'minecraft:zoglin_spawn_egg',
        'occultism:spawn_egg/familiar_blacksmith',
        'occultism:spawn_egg/familiar_shub_niggurath',
        'occultism:spawn_egg/familiar_goat',
        'occultism:spawn_egg/familiar_chimera',
        'occultism:spawn_egg/familiar_devil',
        'occultism:spawn_egg/familiar_dragon',
        'occultism:spawn_egg/marid',
        'occultism:spawn_egg/familiar_bat',
        'occultism:spawn_egg/familiar_beaver',
        'occultism:spawn_egg/familiar_beholder',
        'occultism:spawn_egg/familiar_cthulhu',
        'occultism:spawn_egg/familiar_deer',
        'occultism:spawn_egg/familiar_fairy',
        'occultism:spawn_egg/familiar_greedy',
        'occultism:spawn_egg/familiar_guardian',
        'occultism:spawn_egg/familiar_headless',
        'occultism:spawn_egg/familiar_mummy',
        'occultism:spawn_egg/familiar_parrot'
      ],
      hellish: [
        'minecraft:zombified_piglin_spawn_egg',
        'minecraft:pig_spawn_egg'
      ],
      blueleaf: ['hem:militarybot_spawn_egg'],
      sooty: [
        'ecofriendly:pollutioner_ym_spawn_egg',
        'minecraft:zombie_villager_spawn_egg',
        'minecraft:zombie_horse_spawn_egg',
        'minecraft:vex_spawn_egg',
        'minecraft:vindicator_spawn_egg',
        'minecraft:skeleton_horse_spawn_egg',
        'minecraft:pillager_spawn_egg',
        'minecraft:ravager_spawn_egg',
        'minecraft:stray_spawn_egg',
        'minecraft:evoker_spawn_egg',
        'minecraft:donkey_spawn_egg',
        'minecraft:horse_spawn_egg',
        'minecraft:mule_spawn_egg'
      ]
    },
    chapter_5_1: {
      birthing: ['minecraft:cow_spawn_egg', 'minecraft:sheep_spawn_egg'],
      bumblezone: [
        'the_bumblezone:beehemoth_spawn_egg',
        'the_bumblezone:honey_slime_spawn_egg',
        'minecraft:bee_spawn_egg',
        'productivebees:spawn_egg_configurable_bee'
      ],
      buzzing: [
        'minecraft:bee_spawn_egg',
        'productivebees:spawn_egg_ashy_mining_bee',
        'productivebees:spawn_egg_blue_banded_bee',
        'productivebees:spawn_egg_bumble_bee',
        'productivebees:spawn_egg_chocolate_mining_bee',
        'productivebees:spawn_egg_collector_bee',
        'productivebees:spawn_egg_creeper_bee',
        'productivebees:spawn_egg_cupid_bee',
        'productivebees:spawn_egg_digger_bee',
        'productivebees:spawn_egg_dye_bee',
        'productivebees:spawn_egg_farmer_bee',
        'productivebees:spawn_egg_green_carpenter_bee',
        'productivebees:spawn_egg_hoarder_bee',
        'productivebees:spawn_egg_leafcutter_bee',
        'productivebees:spawn_egg_lumber_bee',
        'productivebees:spawn_egg_mason_bee',
        'productivebees:spawn_egg_neon_cuckoo_bee',
        'productivebees:spawn_egg_nomad_bee',
        'productivebees:spawn_egg_quarry_bee',
        'productivebees:spawn_egg_rancher_bee',
        'productivebees:spawn_egg_reed_bee',
        'productivebees:spawn_egg_resin_bee',
        'productivebees:spawn_egg_sweat_bee',
        'productivebees:spawn_egg_yellow_black_carpenter_bee'
      ]
    },
    chapter_5_2: {},
    chapter_6: {},
    chapter_7_1: {
      tofuland: [
        'tofucraft:tofucow_spawnegg',
        'tofucraft:tofufish_spawnegg',
        'tofucraft:tofunian_spawnegg',
        'tofucraft:tofuslime_spawnegg',
        'tofucraft:tofuspider_spawnegg'
      ],
      alfheim: ['mythicbotany:alf_pixie_spawn_egg'],
      end: [
        'cnb:end_whale_spawn_egg',
        'cataclysm:ender_golem_spawn_egg',
        'cataclysm:ender_guardian_spawn_egg',
        'cataclysm:endermaptera_spawn_egg',
        'minecraft:enderman_spawn_egg',
        'minecraft:endermite_spawn_egg',
        'minecraft:shulker_spawn_egg'
      ],
      mysterious: [
        'minecraft:enderman_spawn_egg',
        'minecraft:phantom_spawn_egg'
      ],
      oceans: [
        'ecofriendly:kelpalo_ym_spawn_egg',
        'ecofriendly:matamata_ym_spawn_egg',
        'ecofriendly:totoba_ym_spawn_egg',
        'ecofriendly:vaquita_spawn_egg',
        'crittersandcompanions:dumbo_octopus_spawn_egg',
        'crittersandcompanions:koi_fish_spawn_egg',
        'crittersandcompanions:otter_spawn_egg',
        'crittersandcompanions:sea_bunny_spawn_egg',
        'upgrade_aquatic:flare_spawn_egg',
        'upgrade_aquatic:goose_spawn_egg',
        'upgrade_aquatic:great_thrasher_spawn_egg',
        'upgrade_aquatic:lionfish_spawn_egg',
        'upgrade_aquatic:nautilus_spawn_egg',
        'upgrade_aquatic:perch_spawn_egg',
        'upgrade_aquatic:pike_spawn_egg',
        'upgrade_aquatic:thrasher_spawn_egg'
      ],
      wetlands: [
        'cnb:minipad_spawn_egg',
        'cnb:lilytad_spawn_egg',
        'minecraft:mooshroom_spawn_egg',
        'crittersandcompanions:dragonfly_spawn_egg',
        'naturalist:firefly_spawn_egg',
        'cnb:sporeling_overworld_egg'
      ],
      savannahs: [
        'naturalist:elephant_spawn_egg',
        'naturalist:giraffe_spawn_egg',
        'naturalist:hippo_spawn_egg',
        'naturalist:lion_spawn_egg',
        'naturalist:rhino_spawn_egg'
      ],
      jungles: [
        'ecofriendly:clouded_leopard_ym_spawn_egg',
        'naturalist:coral_snake_spawn_egg',
        'crittersandcompanions:leaf_insect_spawn_egg'
      ],
      forests: [
        'ecofriendly:isopod_spawn_egg_spawn_egg',
        'crittersandcompanions:ferret_spawn_egg',
        'naturalist:bluejay_spawn_egg',
        'naturalist:boar_spawn_egg',
        'naturalist:bear_spawn_egg',
        'naturalist:deer_spawn_egg',
        'naturalist:robin_spawn_egg',
        'cnb:little_grebe_spawn_egg',
        'naturalist:snail_spawn_egg'
      ],
      grasslands: [
        'naturalist:canary_spawn_egg',
        'naturalist:cardinal_spawn_egg',
        'naturalist:rattlesnake_spawn_egg',
        'totemic:buffalo_spawn_egg',
        'naturalist:butterfly_spawn_egg',
        'naturalist:caterpillar_spawn_egg'
      ],
      deserts: [
        'naturalist:snake_spawn_egg',
        'naturalist:vulture_spawn_egg',
        'naturalist:zebra_spawn_egg',
        'cnb:cactem_spawn_egg',
        'cnb:lizard_spawn_egg'
      ],
      colds: [
        'crittersandcompanions:red_panda_spawn_egg',
        'minecraft:polar_bear_spawn_egg',
        'minecraft:goat_spawn_egg',
        'minecraft:llama_spawn_egg',
        'cnb:yeti_spawn_egg'
      ],
      civilization: [
        'ecofriendly:recycleagger_spawn_egg',
        'minecraft:trader_llama_spawn_egg',
        'minecraft:villager_spawn_egg',
        'minecraft:wandering_trader_spawn_egg'
      ]
    },
    chapter_7_2: {
      infection: [
        'biomancy:hungry_flesh_blob_spawn_egg',
        'biomancy:legacy_flesh_blob_spawn_egg',
        'biomancy:primordial_flesh_blob_spawn_egg',
        'biomancy:primordial_hungry_flesh_blob_spawn_egg'
      ]
    }
  });

  // [
  //   'minecraft:iron_ingot',
  //   'minecraft:copper_ingot',
  //   'minecraft:gold_ingot',
  //   'minecraft:netherite_ingot',
  //   'minecraft:netherite_scrap',
  //   'minecraft:brick',
  //   'minecraft:nether_brick',
  //   'bloodmagic:ingot_hellforged',
  //   'bloodsmeltery:bloodbrass_ingot',
  //   'blue_skies:falsite_ingot',
  //   'blue_skies:ventium_ingot',
  //   'blue_skies:horizonite_ingot',
  //   'botania:manasteel_ingot',
  //   'botania:terrasteel_ingot',
  //   'botania:elementium_ingot',
  //   'charcoal_pit:alloy_orichalcum',
  //   'chemlib:radium_ingot',
  //   'create:andesite_alloy',
  //   'createaddition:electrum_ingot',
  //   'immersiveengineering:ingot_hop_graphite',
  //   'immersiveengineering:ingot_electrum',
  //   'pneumaticcraft:ingot_iron_compressed',
  //   'rankine:rose_gold_ingot',
  //   'rankine:white_gold_ingot',
  //   'rankine:green_gold_ingot',
  //   'rankine:blue_gold_ingot',
  //   'rankine:purple_gold_ingot',
  //   'rankine:black_gold_ingot',
  //   'rankine:pewter_ingot',
  //   'rankine:bronze_ingot',
  //   'rankine:brass_ingot',
  //   'rankine:cast_iron_ingot',
  //   'rankine:invar_ingot',
  //   'rankine:cupronickel_ingot',
  //   'rankine:duralumin_ingot',
  //   'rankine:magnesium_alloy_ingot',
  // ];
});
