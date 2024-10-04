onEvent('recipes', (event) => {
  setBalanceRecipes({
    craft: () => {
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual'
        },
        activation_item: { item: 'kubejs:iridescent_scales' },
        pentacle_id: 'occultism:summon_foliot',
        ingredients: [
          {
            item: 'blue_skies:aquite'
          },
          {
            item: 'blue_skies:aquite'
          },
          {
            item: 'blue_skies:soul_fragment'
          },
          {
            item: 'blue_skies:cryo_root'
          },
          {
            item: 'blue_skies:winter_leaves'
          },
          {
            item: 'blue_skies:municipal_monkfish'
          },
          {
            item: 'blue_skies:grittle_flatfish'
          },
          {
            item: 'rankine:white_marble'
          },
          {
            item: 'rankine:white_marble'
          },
          {
            item: 'blue_skies:starlit_sapling'
          },
          {
            item: 'blue_skies:chilled_lily_pad'
          },
          {
            item: 'blue_skies:azulfo_horn'
          }
        ],
        result: {
          item: 'gateways:gate_pearl',
          nbt: '{gateway:"gateways:small_everbright_gateway"}'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual'
        },
        activation_item: { item: 'undergarden:masticator_scales' },
        pentacle_id: 'occultism:craft_foliot',
        ingredients: [
          {
            item: 'undergarden:bloody_stew'
          },
          {
            item: 'undergarden:inky_stew'
          },
          {
            item: 'undergarden:indigo_stew'
          },
          {
            item: 'undergarden:veiled_stew'
          },
          {
            item: 'undergarden:utherium_crystal'
          },
          {
            item: 'undergarden:forgotten_nugget'
          },
          {
            item: 'undergarden:twistytwig'
          },
          {
            item: 'undergarden:utherium_crystal'
          },
          {
            item: 'undergarden:forgotten_nugget'
          },
          {
            item: 'undergarden:twistytwig'
          },
          {
            item: 'undergarden:rotten_blisterberry'
          },
          {
            item: 'undergarden:brute_tusk'
          }
        ],
        result: {
          item: 'gateways:gate_pearl',
          nbt: '{gateway:"gateways:small_undergarden_gateway"}'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual'
        },
        activation_item: { item: 'blue_skies:soul_fragment' },
        pentacle_id: 'occultism:craft_djinni',
        ingredients: [
          {
            item: 'blue_skies:crescent_fruit'
          },
          {
            item: 'blue_skies:monitor_tail'
          },
          {
            item: 'blue_skies:charscale_moki'
          },
          {
            item: 'blue_skies:horizofin_tunid'
          },
          {
            item: 'blue_skies:fox_pelt'
          },
          {
            item: 'blue_skies:bug_guts'
          },
          {
            item: 'blue_skies:horizonite_ingot'
          },
          {
            item: 'blue_skies:bug_guts'
          },
          {
            item: 'blue_skies:horizonite_ingot'
          },
          {
            item: 'blue_skies:venom_sac'
          },
          {
            item: 'blue_skies:blaze_bud'
          },
          {
            item: 'blue_skies:moonlit_water_lily'
          }
        ],
        result: {
          item: 'gateways:gate_pearl',
          nbt: '{gateway:"gateways:small_everdawn_gateway"}'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual'
        },
        activation_item: { item: 'blue_skies:soul_fragment' },
        pentacle_id: 'occultism:summon_wild_greater_spirit',
        ingredients: [
          {
            item: 'twilightforest:charm_of_keeping_2'
          },
          {
            item: 'twilightforest:charm_of_keeping_2'
          },
          {
            item: 'twilightforest:raw_ironwood'
          },
          {
            item: 'twilightforest:experiment_115'
          },
          {
            item: 'twilightforest:huge_water_lily'
          },
          {
            item: 'twilightforest:transformation_powder'
          },
          {
            item: 'twilightforest:transformation_powder'
          },
          {
            item: 'twilightforest:carminite'
          },
          {
            item: 'twilightforest:fiery_tears'
          },
          {
            item: 'twilightforest:fiery_blood'
          },
          {
            item: 'twilightforest:fiery_blood'
          },
          {
            item: 'twilightforest:thorn_rose'
          }
        ],
        result: {
          item: 'gateways:gate_pearl',
          nbt: '{gateway:"gateways:small_twilight_gateway"}'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual'
        },
        activation_item: { item: 'blue_skies:soul_fragment' },
        pentacle_id: 'occultism:summon_marid',
        ingredients: [
          {
            item: 'minecraft:wither_rose'
          },
          {
            item: 'minecraft:crimson_fungus'
          },
          {
            item: 'minecraft:warped_fungus'
          },
          {
            item: 'minecraft:quartz'
          },
          {
            item: 'minecraft:porkchop'
          },
          {
            item: 'cataclysm:witherite_ingot'
          },
          {
            item: 'rankine:carbon_dioxide_gas_bottle'
          },
          {
            item: 'minecraft:porkchop'
          },
          {
            item: 'cataclysm:witherite_ingot'
          },
          {
            item: 'rankine:carbon_dioxide_gas_bottle'
          },
          {
            item: 'occultism:iesnium_ingot'
          },
          {
            item: 'minecraft:blaze_powder'
          }
        ],
        result: {
          item: 'gateways:gate_pearl',
          nbt: '{gateway:"gateways:small_nether_gateway"}'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual'
        },
        activation_item: { item: 'blue_skies:soul_fragment' },
        pentacle_id: 'occultism:craft_marid',
        ingredients: [
          {
            item: 'hem:copparite'
          },
          {
            item: 'rankine:vulcanized_rubber'
          },
          {
            item: 'hem:lush_flower_1'
          },
          {
            item: 'hem:shotgun_shell'
          },
          {
            item: 'create:chromatic_compound'
          },
          {
            item: 'hem:copparite'
          },
          {
            item: 'rankine:vulcanized_rubber'
          },
          {
            item: 'hem:lush_flower_1'
          },
          {
            item: 'hem:shotgun_shell'
          },
          {
            item: 'create:chromatic_compound'
          },
          {
            item: 'rankine:steel_ingot'
          },
          {
            item: 'rankine:steel_ingot'
          }
        ],
        result: {
          item: 'gateways:gate_pearl',
          nbt: '{gateway:"gateways:small_blueleaf_gateway"}'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual'
        },
        activation_item: { item: 'blue_skies:soul_fragment' },
        pentacle_id: 'occultism:craft_marid',
        ingredients: [
          {
            item: 'hem:copparite'
          },
          {
            item: 'rankine:vulcanized_rubber'
          },
          {
            item: 'hem:lush_flower_1'
          },
          {
            item: 'hem:shotgun_shell'
          },
          {
            item: 'create:chromatic_compound'
          },
          {
            item: 'hem:copparite'
          },
          {
            item: 'rankine:vulcanized_rubber'
          },
          {
            item: 'hem:lush_flower_1'
          },
          {
            item: 'hem:shotgun_shell'
          },
          {
            item: 'create:chromatic_compound'
          },
          {
            item: 'rankine:steel_ingot'
          },
          {
            item: 'rankine:steel_ingot'
          }
        ],
        result: {
          item: 'gateways:gate_pearl',
          nbt: '{gateway:"gateways:small_bumblezone_gateway"}'
        }
      });
      event.custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual'
        },
        activation_item: { item: 'blue_skies:soul_fragment' },
        pentacle_id: 'occultism:craft_marid',
        ingredients: [
          {
            item: 'hem:copparite'
          },
          {
            item: 'rankine:vulcanized_rubber'
          },
          {
            item: 'hem:lush_flower_1'
          },
          {
            item: 'hem:shotgun_shell'
          },
          {
            item: 'create:chromatic_compound'
          },
          {
            item: 'hem:copparite'
          },
          {
            item: 'rankine:vulcanized_rubber'
          },
          {
            item: 'hem:lush_flower_1'
          },
          {
            item: 'hem:shotgun_shell'
          },
          {
            item: 'create:chromatic_compound'
          },
          {
            item: 'rankine:steel_ingot'
          },
          {
            item: 'rankine:steel_ingot'
          }
        ],
        result: {
          item: 'gateways:gate_pearl',
          nbt: '{gateway:"gateways:small_end_gateway"}'
        }
      });
    }
  });
});

onEvent('server.datapack.high_priority', (event) => {
  [
    'blaze_gate',
    'creeper_gate',
    'enderman_gate',
    'ghast_gate',
    'magma_cube_gate',
    'shulker_gate',
    'skeleton_gate',
    'slime_gate',
    'spider_gate',
    'witch_gate',
    'zombie_gate'
  ].forEach((id) => {
    event.addJson(`gateways:recipes/${id}_small.json`, {});
    event.addJson(`gateways:recipes/${id}.json`, {});
    event.addJson(`gateways:recipes/${id}_large.json`, {});
  });

  // ? Functions
  function computeMaxWaveTime(config, size) {
    if (size === 'small') return config.type === 'boss' ? 4800 : 2400;
    else if (size === 'medium') return config.type === 'boss' ? 6400 : 3200;
    else if (size === 'large') return config.type === 'boss' ? 12800 : 6400;
  }

  function computeSetupTime(config, size) {
    if (size === 'small') return config.type === 'boss' ? 600 : 300;
    else if (size === 'medium') return config.type === 'boss' ? 800 : 400;
    else if (size === 'large') return config.type === 'boss' ? 1200 : 600;
  }

  function computeEntities(config, size) {
    let json = [];

    config.entities.forEach((id) => {
      let x = 0;
      if (size === 'small')
        x =
          config.type === 'mob' ? 5
          : config.type === 'group' ? 3
          : 1;
      else if (size === 'medium')
        x =
          config.type === 'mob' ? 10
          : config.type === 'group' ? 5
          : 1;
      else if (size === 'large')
        x =
          config.type === 'mob' ? 20
          : config.type === 'group' ? 7
          : 1;
      for (let i = 0; i < x; i++) {
        json.push({
          entity: id
        });
      }
    });

    return json;
  }

  function computeModifiers(size) {
    if (size === 'small') return [];
    else if (size === 'medium')
      return [
        {
          attribute: 'generic.max_health',
          operation: 'MULTIPLY_TOTAL',
          value: 2.0
        },
        {
          attribute: 'generic.movement_speed',
          operation: 'MULTIPLY_TOTAL',
          value: 0.05
        },
        {
          attribute: 'generic.armor',
          operation: 'ADDITION',
          value: 4
        }
      ];
    else if (size === 'large')
      return [
        {
          attribute: 'generic.max_health',
          operation: 'MULTIPLY_TOTAL',
          value: 4.0
        },
        {
          attribute: 'generic.movement_speed',
          operation: 'MULTIPLY_TOTAL',
          value: 0.05
        },
        {
          attribute: 'generic.armor',
          operation: 'ADDITION',
          value: 4
        }
      ];
  }

  function computeWaveRewards(config, size) {
    let json = [];

    config.entities.forEach((id) => {
      json.push({
        type: 'entity_loot',
        entity: id,
        rolls:
          size === 'small' ? 10
          : size === 'medium' ? 20
          : 40
      });
    });

    if (config.rewards) {
      config.rewards.forEach((reward) => {
        json.push({
          type: 'stack',
          stack: {
            item: reward.id,
            count: reward.count
          }
        });
      });
    }

    return json;
  }

  function computeCompletionRewards(config, size) {
    let json = [];

    if (size === 'small') {
      json.push({
        type: 'command',
        command: `gamestage add <summoner> restoration_${config.id}_gateway`,
        desc: `Restore life to the Overworld from ${config.dimension}`
      });

      json.push({
        type: 'stack',
        stack: {
          item: 'gateways:gate_pearl',
          nbt: `{gateway:"gateways:medium_${config.id}_gateway"}`,
          count: 1
        }
      });
      config.restorations.forEach((config) => {
        json.push({
          type: 'command',
          command: `summon ${config.id}`,
          desc: `Find a ${config.name}`
        });
      });
    } else if (size === 'medium') {
      json.push({
        type: 'stack',
        stack: {
          item: 'gateways:gate_pearl',
          nbt: `{gateway:"gateways:large_${config.id}_gateway"}`,
          count: 1
        }
      });
    } else if (size === 'large') {
      config.rewards.forEach((item) => {
        json.push({
          type: 'stack',
          stack: {
            item: item.id,
            nbt: item.nbt,
            count: item.count
          }
        });
      });
    }

    config.relics.forEach((id) => {
      json.push({
        type: 'chanced',
        chance:
          size === 'small' ? 0.1
          : size === 'medium' ? 0.3
          : 0.75,
        reward: {
          type: 'stack',
          stack: {
            item: id,
            count: 1
          }
        }
      });
    });

    return json;
  }

  function computeJSON(config, size) {
    let json = {
      size: size,
      color: config.color,
      completion_xp:
        size === 'small' ? 500
        : size === 'medium' ? 5000
        : 50000,
      spawn_range:
        size === 'small' ? 10
        : size === 'medium' ? 20
        : 40,
      leash_range:
        size === 'small' ? 40
        : size === 'medium' ? 80
        : 160,
      spawn_algorithm: 'gateways:inward_spiral',
      waves: [],
      failures: [
        {
          type: 'explosion',
          strength: 3.0,
          fire: false,
          block_damage: true
        }
      ]
    };

    json.rewards = computeCompletionRewards(config, size);

    config.waves.forEach((wave) => {
      let config = {
        entities: computeEntities(wave, size),
        modifiers: computeModifiers(size),
        rewards: computeWaveRewards(wave, size),
        max_wave_time: computeMaxWaveTime(wave, size),
        setup_time: computeSetupTime(wave, size)
      };

      json.waves.push(config);
    });

    return json;
  }

  function registerGateways(config) {
    event.addJson(
      `gateways:gateways/small_${config.id}_gateway.json`,
      computeJSON(config, 'small')
    );
    event.addJson(
      `gateways:gateways/medium_${config.id}_gateway.json`,
      computeJSON(config, 'medium')
    );
    event.addJson(
      `gateways:gateways/large_${config.id}_gateway.json`,
      computeJSON(config, 'large')
    );
  }

  // Everbright
  registerGateways({
    id: 'everbright',
    dimension: 'Everbright',
    color: '#4FA7FF',
    waves: [
      {
        type: 'mob',
        entities: ['blue_skies:artificial_golem']
      },
      {
        type: 'mob',
        entities: ['blue_skies:armored_frost_spirit']
      },
      {
        type: 'mob',
        entities: ['blue_skies:diophyde_prowler']
      },
      {
        type: 'mob',
        entities: ['blue_skies:polargeist']
      },
      {
        type: 'mob',
        entities: ['blue_skies:crynocerous']
      },
      {
        type: 'boss',
        entities: ['blue_skies:summoner'],
        rewards: [{ id: 'blue_skies:loot_bag_summoner', count: 2 }]
      },
      {
        type: 'mob',
        entities: ['blue_skies:stonelet']
      },
      {
        type: 'mob',
        entities: ['blue_skies:spewter']
      },
      {
        type: 'boss',
        entities: ['blue_skies:starlit_crusher'],
        rewards: [
          {
            id: 'blue_skies:loot_bag_starlit_crusher',
            count: 2
          }
        ]
      }
    ],
    restorations: [
      { id: 'blue_skies:seclam', name: 'seclam' },
      { id: 'blue_skies:whistleshell_crab', name: 'whistleshell crab' },
      { id: 'minecraft:turtle', name: 'turtle' },
      { id: 'minecraft:skeleton', name: 'skeleton' }
    ],
    relics: [
      'relics:amphibian_boot',
      'relics:drowned_belt',
      'relics:aqua_walker',
      'relics:jellyfish_necklace',
      'artifacts:flippers',
      'artifacts:snorkel'
    ],
    rewards: [
      { id: 'minecraft:cod', count: 15 },
      { id: 'minecraft:salmon', count: 15 },
      { id: 'minecraft:tropical_fish', count: 15 },
      { id: 'minecraft:pufferfish', count: 15 },
      { id: 'blue_skies:municipal_monkfish', count: 15 },
      { id: 'rankine:tuna', count: 15 },
      { id: 'kubejs:everbright_token', count: 1 },
      { id: 'minecraft:heart_of_the_sea', count: 1 }
    ]
  });

  // Undergarden
  registerGateways({
    id: 'undergarden',
    color: '#00D7A2',
    dimension: 'the Undergarden',
    waves: [
      {
        type: 'mob',
        entities: ['undergarden:rotling']
      },
      {
        type: 'mob',
        entities: ['undergarden:muncher']
      },
      {
        type: 'mob',
        entities: ['undergarden:nargoyle'],
        rewards: [{ id: 'undergarden:raw_cloggrum', count: 15 }]
      },
      {
        type: 'mob',
        entities: ['undergarden:rotwalker']
      },
      {
        type: 'mob',
        entities: ['undergarden:rotbeast']
      },
      {
        type: 'mob',
        entities: ['undergarden:forgotten_guardian']
      },
      {
        type: 'boss',
        entities: ['undergarden:masticator'],
        rewards: [{ id: 'undergarden:masticator_scales', count: 10 }]
      }
    ],
    restorations: [
      { id: 'minecraft:slime', name: 'slime' },
      { id: 'minecraft:creeper', name: 'creeper' },
      { id: 'undergarden:mog', name: 'mog' },
      { id: 'undergarden:gloomper', name: 'gloomper' }
    ],
    relics: [
      'relics:spore_sack',
      'artifacts:antidote_vessel',
      'artifacts:lucky_scarf',
      'artifacts:digging_claws',
      'artifacts:night_vision_goggles',
      'artifacts:kitty_slippers'
    ],
    rewards: [{ id: 'kubejs:undergarden_token', count: 1 }]
  });

  // Everdawn
  registerGateways({
    id: 'everdawn',
    color: '#FF6C55',
    dimension: 'Everdawn',
    waves: [
      {
        type: 'mob',
        entities: ['blue_skies:emberback']
      },
      {
        type: 'boss',
        entities: ['blue_skies:alchemist'],
        rewards: [{ id: 'blue_skies:loot_bag_alchemist', count: 2 }]
      },
      {
        type: 'mob',
        entities: ['blue_skies:nested_spider']
      },
      {
        type: 'mob',
        entities: ['blue_skies:venom_spider']
      },
      {
        type: 'mob',
        entities: ['blue_skies:infested_swarmer']
      },
      {
        type: 'boss',
        entities: ['blue_skies:arachnarch'],
        rewards: [{ id: 'blue_skies:loot_bag_arachnarch', count: 2 }]
      }
    ],
    restorations: [
      { id: 'minecraft:spider', name: 'spider' },
      { id: 'minecraft:cave_spider', name: 'cave spider' },
      { id: 'minecraft:fox', name: 'fox' },
      { id: 'blue_skies:cosmic_fox', name: 'cosmic fox' }
    ],
    relics: [
      'relics:rage_glove',
      'artifacts:superstitious_hat',
      'artifacts:scarf_of_invisibility',
      'artifacts:feral_claws',
      'artifacts:panic_necklace',
      'artifacts:power_glove'
    ],
    rewards: [{ id: 'kubejs:everdawn_token', count: 1 }]
  });

  // Twilight
  registerGateways({
    id: 'twilight',
    color: '#D888FF',
    dimension: 'the Twilight Forest',
    waves: [
      {
        type: 'group',
        entities: [
          'twilightforest:wraith',
          'twilightforest:skeleton_druid',
          'twilightforest:swarm_spider',
          'twilightforest:king_spider',
          'twilightforest:hedge_spider'
        ]
      },
      {
        type: 'boss',
        entities: ['twilightforest:naga']
      },
      {
        type: 'group',
        entities: [
          'twilightforest:redcap',
          'twilightforest:redcap_sapper',
          'twilightforest:kobold'
        ]
      },
      {
        type: 'boss',
        entities: ['twilightforest:lich']
      },
      {
        type: 'group',
        entities: [
          'twilightforest:fire_beetle',
          'twilightforest:pinch_beetle',
          'twilightforest:slime_beetle',
          'twilightforest:maze_slime'
        ]
      },
      {
        type: 'boss',
        entities: ['twilightforest:minoshroom']
      },
      {
        type: 'boss',
        entities: ['twilightforest:hydra']
      },
      {
        type: 'group',
        entities: [
          'twilightforest:helmet_crab',
          'twilightforest:blockchain_goblin',
          'twilightforest:lower_goblin_knight',
          'twilightforest:upper_goblin_knight'
        ]
      },
      {
        type: 'boss',
        entities: ['twilightforest:knight_phantom']
      },
      {
        type: 'group',
        entities: [
          'twilightforest:carminite_broodling',
          'twilightforest:carminite_ghastguard',
          'twilightforest:carminite_ghastling',
          'twilightforest:carminite_golem'
        ]
      },
      {
        type: 'boss',
        entities: ['twilightforest:ur_ghast']
      },
      {
        type: 'boss',
        entities: ['twilightforest:alpha_yeti']
      },
      {
        type: 'group',
        entities: [
          'twilightforest:stable_ice_core',
          'twilightforest:unstable_ice_core',
          'twilightforest:ice_crystal',
          'twilightforest:snow_guardian'
        ]
      },
      {
        type: 'boss',
        entities: ['twilightforest:snow_queen']
      },
      {
        type: 'group',
        entities: [
          'twilightforest:giant_miner',
          'twilightforest:armored_giant',
          'twilightforest:troll'
        ]
      },
      {
        type: 'boss',
        entities: ['ecofriendly:pollutor_king_ym']
      }
    ],
    restorations: [
      { id: 'minecraft:rabbit', name: 'rabbit' },
      { id: 'minecraft:chicken', name: 'chicken' },
      { id: 'minecraft:wolf', name: 'wolf' },
      { id: 'totemic:bald_eagle', name: 'bald eagle' }
    ],
    relics: [
      'relics:magic_mirror',
      'artifacts:thorn_pendant',
      'artifacts:universal_attractor',
      'artifacts:steadfast_spikes',
      'artifacts:pocket_piston',
      'artifacts:crystal_heart'
    ],

    rewards: [{ id: 'kubejs:twilight_token', count: 1 }]
  });

  // Nether
  registerGateways({
    id: 'nether',
    color: '#D92C32',
    dimension: 'the Nether',
    waves: [
      {
        type: 'mob',
        entities: ['minecraft:magma_cube']
      },
      {
        type: 'mob',
        entities: ['minecraft:wither_skeleton']
      },
      {
        type: 'mob',
        entities: ['minecraft:ghast']
      },
      {
        type: 'boss',
        entities: ['minecraft:wither']
      },
      {
        type: 'mob',
        entities: ['minecraft:blaze']
      },
      {
        type: 'boss',
        entities: ['cataclysm:ignited_revenant']
      },
      {
        type: 'boss',
        entities: ['cataclysm:ignis']
      },
      {
        type: 'group',
        entities: ['minecraft:hoglin', 'minecraft:zoglin']
      },
      {
        type: 'mob',
        entities: ['minecraft:zombified_piglin']
      },
      {
        type: 'group',
        entities: ['minecraft:piglin', 'minecraft:piglin_brute']
      },
      {
        type: 'boss',
        entities: ['cataclysm:netherite_monstrosity']
      }
    ],
    restorations: [{ id: 'minecraft:pig', name: 'pig' }],
    relics: [
      'relics:magma_walker',
      'relics:bastion_ring',
      'relics:blazing_flask',
      'artifacts:fire_gauntlet',
      'artifacts:flame_pendant',
      'artifacts:obsidian_skull'
    ],
    rewards: [{ id: 'kubejs:nether_token', count: 1 }]
  });

  // Blueleaf
  registerGateways({
    id: 'blueleaf',
    color: '#555e5f',
    dimension: 'Blueleaf',
    waves: [
      {
        type: 'mob',
        entities: ['minecraft:skeleton_horse']
      },
      {
        type: 'mob',
        entities: ['minecraft:zombie_villager']
      },
      {
        type: 'mob',
        entities: ['minecraft:zombie_horse']
      },
      {
        type: 'mob',
        entities: ['minecraft:vex']
      },
      {
        type: 'mob',
        entities: ['minecraft:vindicator']
      },
      {
        type: 'mob',
        entities: ['minecraft:ravager']
      },
      {
        type: 'mob',
        entities: ['minecraft:evoker']
      },
      {
        type: 'mob',
        entities: ['hem:militarybot']
      },
      {
        type: 'boss',
        entities: ['hem:enemy_air_airship']
      },
      {
        type: 'boss',
        entities: ['hem:ancient_one']
      }
    ],
    restorations: [
      { id: 'minecraft:mule', name: 'mule' },
      { id: 'minecraft:donkey', name: 'donkey' },
      { id: 'minecraft:horse', name: 'horse' }
    ],
    relics: [
      'relics:hunter_belt',
      'relics:arrow_quiver',
      'relics:horse_flute',
      'artifacts:plastic_drinking_hat',
      'artifacts:villager_hat',
      'artifacts:novelty_drinking_hat'
    ],
    rewards: [{ id: 'kubejs:blueleaf_token', count: 1 }]
  });

  // Bumblezone
  registerGateways({
    id: 'bumblezone',
    color: '#d1a054',
    dimension: 'the Bumblezone',
    waves: [
      {
        type: 'mob',
        entities: ['minecraft:bee']
      }
    ],
    restorations: [{ id: 'minecraft:bee', name: 'Bee' }],
    relics: [
      'relics:leather_belt',
      'relics:wool_mitten',
      'relics:infinity_ham',
      'artifacts:vampiric_glove',
      'artifacts:bunny_hoppers',
      'artifacts:whoopee_cushion'
    ],
    rewards: [{ id: 'kubejs:bumblezone_token', count: 1 }]
  });

  // End
  registerGateways({
    id: 'end',
    color: '#218c74',
    dimension: 'the End',
    waves: [
      {
        type: 'mob',
        entities: ['minecraft:bee']
      }
    ],
    restorations: [{ id: 'minecraft:bee', name: 'Bee' }],
    relics: [
      'relics:shadow_glaive',
      'relics:elytra_booster',
      'relics:enders_hand',
      'relics:chorus_inhibitor',
      'relics:midnight_robe',
      'relics:reflection_necklace',
      'relics:spatial_sign',
      'artifacts:shock_pendant'
    ],
    rewards: [{ id: 'kubejs:end_token', count: 1 }]
  });
});
