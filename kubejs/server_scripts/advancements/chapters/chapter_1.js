onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'chapter_1', {
    icon: 'paragon_textiles:plant_fibers',
    title: 'Chapter 1: Desperate Measures',
    description: 'Find food and a stable temperature',
    background: 'rankine:textures/block/humus_mud.png',
    criteria: {
      spawn: {
        trigger: 'minecraft:location',
        orb: false,
        conditions: {
          dimension: 'overworld',
        },
      },
    },
    reward: 'im:chapters/chapter_1',
    children: [
      {
        id: 'first_night',
        hide: true,
        orb: false,
        criteria: {
          night: {
            trigger: 'minecraft:tick',
            conditions: {
              player: [
                {
                  condition: 'minecraft:time_check',
                  value: {
                    min: 24000,
                  },
                },
              ],
            },
          },
        },
      },
      {
        hide: true,
        id: 'zombies',
        criteria: {
          kill: {
            trigger: 'minecraft:player_killed_entity',
            conditions: {
              entity: {
                type: 'minecraft:zombie',
              },
            },
          },
        },
      },
      {
        item: 'minecraft:flint',
        title: 'Scrounging for Flint',
        description: 'Scrape the earth for flint',
        frame: 'goal',
        children: [
          {
            item: 'charcoal_pit:fire_starter',
            title: '',
            description: '',
          },
          {
            item: 'rankine:flint_knife',
            title: 'Crude Cutting Edge',
            description: 'Carve out a basic flint knife',
            frame: 'goal',
            children: [
              {
                item: 'farmersdelight:rope',
                title: 'Frayed Bonds',
                description: 'Collect plant fiber and twist together a rope',
                frame: 'goal',
                children: [
                  {
                    item: 'rankine:prospecting_stick',
                    title: '',
                    description: '',
                  },
                  {
                    item: 'hexerei:dowsing_rod',
                    title: 'Swamp Seeker',
                    description:
                      'Create a dowsing rod & use it to find a swamp',
                  },
                  {
                    item: 'rankine:flint_pickaxe',
                    title: "Flint's Edge",
                    description: 'Craft a crude flint pickaxe',
                    children: [
                      {
                        item: 'salt:raw_rock_salt',
                        title: 'Veins of the Earth',
                        description:
                          'Find some rock salt underground in a dripstone cave, ocean or beach',
                        children: [
                          {
                            item: 'salt:salt',
                            title: 'Salt of the Earth',
                            description:
                              'Collect some salt from the raw rock salt',
                          },
                        ],
                      },
                      {
                        item: 'rankine:stone_hammer',
                        title: 'Vein Splitter',
                        description: 'Construct a stone hammer',
                        children: [
                          {
                            id: 'malachite',
                            item: 'rankine:malachite',
                            title: 'Gift of the Swamp',
                            description:
                              'Collect a chunk of malachite from a swamp',
                            children: [
                              {
                                parent: 'malachite',
                                item: 'minecraft:copper_ingot',
                                title: 'Alchemical Copper',
                                description: 'Forge a copper ingot',
                                children: [
                                  {
                                    item: 'minecraft:flint_and_steel',
                                    title: '',
                                    description: '',
                                  },
                                  {
                                    item: 'naturescompass:naturescompass',
                                    title: 'Biome Seeker',
                                    description:
                                      "Craft a nature's compass & use it to find a badlands",

                                    children: [
                                      {
                                        id: 'city',
                                        item: 'endrem:undead_soul',
                                        title: "Cities' Echo",
                                        description:
                                          'Collect a soul from a flesh blob in the lost city',

                                        children: [
                                          {
                                            parent: 'city',
                                            item: 'antiqueatlas:empty_antique_atlas',
                                            title: 'Soulbound Cartography',
                                            description:
                                              'Craft an Antique Atlas with the undead soul',
                                          },
                                        ],
                                      },
                                      {
                                        item: 'biomancy:living_flesh',
                                        title: '',
                                        description: '',
                                        children: [
                                          {
                                            item: 'farmersdelight:stuffed_pumpkin_block',
                                            title: '',
                                            description: '',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            item: 'rankine:chalk',
                            title: '',
                            description: '',
                            children: [
                              {
                                item: 'rankine:quicklime',
                                title: '',
                                description: '',
                                children: [],
                              },
                            ],
                          },
                          {
                            item: 'rankine:cassiterite',
                            title: 'Whisper from the Cold',
                            description:
                              'Collect a chunk of cassiterite from a taiga',
                            children: [
                              {
                                item: 'rankine:tin_ingot',
                                title: 'Tin Transmutation',
                                description: 'Forge a tin ingot',
                                children: [
                                  {
                                    item: 'rankine:altimeter',
                                    title: "Depth's Gauge",
                                    description:
                                      'Craft an altimeter to help you find ores underground',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    item: 'rankine:flint_spear',
                    title: 'Primitive Piercer',
                    description: 'Craft a crude flint spear',
                    children: [
                      {
                        item: 'kubejs:rotten_brain',
                        title: 'Rancid Relic',
                        description: 'Collect a rotten brain from the undead',
                        children: [
                          {
                            item: 'ceramicbucket:ceramic_bucket',
                            nbt: '{Fluid:{Amount:1000,FluidName:"kubejs:tanning_fluid"}}',
                            title: 'Putrid Potion',
                            description: 'Brew tanning fluid from the brain',
                          },
                        ],
                      },
                      {
                        item: 'minecraft:rotten_flesh',
                        title: 'Undead Harvest',
                        description: 'Gather some rotten flesh from the undead',

                        children: [
                          {
                            item: 'kubejs:stitched_hide',
                            title: 'Rotten Patchwork',
                            description: 'Stitch the flesh together',
                            children: [
                              {
                                item: 'kubejs:salted_hide',
                                title: 'Salty Preservation',
                                description: 'Salt the hide',
                                children: [
                                  {
                                    item: 'kubejs:dried_hide',
                                    title: 'Hanging to Harden',
                                    description: 'Dry the salted hide',
                                    children: [
                                      {
                                        item: 'kubejs:wet_tanned_hide',
                                        title: 'Questionable Tanning',
                                        description:
                                          'Tan the dried hide with tanning fluid',
                                        children: [
                                          {
                                            item: 'minecraft:leather',
                                            title: 'Bound by Leather',
                                            description:
                                              'Dry the tanned hide and collect the finished leather',
                                            children: [
                                              {
                                                item: 'paraglider:paraglider',
                                                title: 'Wind Rider',
                                                description:
                                                  'Craft a paraglider',
                                              },
                                              {
                                                item: 'upgrade_aquatic:bedroll',
                                                title: "Slumber's Sanctuary",
                                                description:
                                                  'Craft a bedroll and regain your sanity',
                                              },
                                              {
                                                icon: 'leather_helmet',
                                                title:
                                                  "Survivor's First Stitch",
                                                frame: 'challenge',
                                                description:
                                                  'Craft your first piece of armor',
                                                tag: 'im:armors/leather',
                                              },
                                              {
                                                item: 'charcoal_pit:bellows',
                                                title: "Bloomery's Lungs",
                                                description:
                                                  'Craft some bellows',
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    item: 'rankine:flint_axe',
                    title: 'Primitive Axe',
                    description: 'Craft a crude flint axe',
                    frame: 'goal',
                    children: [
                      {
                        item: 'rankine:cork',
                        title: "Nature's Sealant",
                        description: 'Collect some cork from a cork oak tree',
                        children: [
                          {
                            item: 'charcoal_pit:barrel',
                            title: "Tanner's Vat",
                            description:
                              'Craft a brewing barrel to make tanning fluid',
                            children: [
                              {
                                item: 'rankine:mixing_barrel',
                                title: 'Mixing Mastery',
                                description: 'Craft a mixing barrel',
                                children: [
                                  {
                                    item: 'rankine:fire_clay_ball',
                                    title: '',
                                    description: '',
                                    children: [
                                      {
                                        item: 'kubejs:high_fire_clay_ball',
                                        title: '',
                                        description: '',
                                        children: [],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'rankine:mortar',
                                    title: 'Mixing Mortar',
                                    description:
                                      'Mix some mortar for building and bonding',
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        icon: 'oak_log',
                        title: 'Echoes of Fallen Giants',
                        description: 'Fell a tree, get logs',
                        tag: 'minecraft:logs',
                        frame: 'goal',
                        children: [
                          {
                            item: 'charcoal_pit:log_pile',
                            title: 'Smoldering Secrets',
                            description:
                              'Create a log pile, bury it, and start a fire',
                            frame: 'goal',
                            children: [
                              {
                                item: 'minecraft:charcoal',
                                title: 'Ashes to Ashes',
                                description: 'Burn wood, make charcoal',
                                frame: 'goal',
                                children: [
                                  {
                                    item: 'minecraft:campfire',
                                    title: 'Flickering Solace',
                                    description: 'Build a campfire for warmth',
                                    frame: 'goal',
                                    children: [
                                      {
                                        item: 'thirst:terracotta_water_bowl',
                                        nbt: '{Purity:3}',
                                        title: "Thirst's Remedy",
                                        description:
                                          'Collect some water and purify it fully',
                                      },
                                      {
                                        item: 'furnace',
                                        title: 'Stone Furnace',
                                        description:
                                          'Erect a furnace from stones and fire',
                                        frame: 'goal',
                                        children: [
                                          {
                                            icon: 'charcoal_pit:ceramic_pot',
                                            title: "Potter's Legacy",
                                            description:
                                              'Craft a ceramic vessel',
                                            tag: 'charcoal_pit:ceramic_pots',
                                          },
                                          {
                                            item: 'ceramicbucket:ceramic_bucket',
                                            title: 'Primitive Pour',
                                            description:
                                              'Craft a ceramic bucket',
                                          },
                                          {
                                            item: 'brickhopper:brick_hopper',
                                            title: '',
                                            description: '',
                                          },
                                          {
                                            item: 'rankine:refractory_brick',
                                            title: "Kiln's Core",
                                            description:
                                              'Fire a refractory brick',
                                            frame: 'goal',
                                            children: [
                                              {
                                                item: 'immersiveengineering:hammer',
                                                title: '',
                                                description: '',
                                              },
                                              {
                                                item: 'rankine:beehive_oven_pit',
                                                title: "Kiln's Foundation",
                                                description:
                                                  'Craft a beehive oven pit',
                                                children: [
                                                  {
                                                    item: 'rankine:bone_char',
                                                    title: 'Carbon Alchemy',
                                                    description:
                                                      'Cook some bones in a beehive oven',
                                                  },
                                                  {
                                                    item: 'kubejs:grog',
                                                    title: '',
                                                    description: '',
                                                    children: [],
                                                  },
                                                ],
                                              },
                                              {
                                                icon: 'immersiveengineering:alloy_smelter',
                                                item: 'immersiveengineering:alloybrick',
                                                frame: 'goal',
                                                title: '',
                                                description: '',
                                                children: [
                                                  {
                                                    item: 'rankine:bronze_ingot',
                                                    title: 'Bronze Age Beckons',
                                                    description:
                                                      'Smelt bronze, a vital alloy',
                                                    frame: 'goal',
                                                    children: [
                                                      {
                                                        item: 'charcoal_pit:bloomeryy',
                                                        title:
                                                          "Bloomery's Breath",
                                                        frame: 'goal',
                                                        description:
                                                          'Forge a bloomery for iron',
                                                        children: [
                                                          {
                                                            item: 'minecraft:iron_ingot',
                                                            title: 'Iron Will',
                                                            frame: 'goal',
                                                            description:
                                                              'Extract iron, forge ahead',
                                                            children: [
                                                              {
                                                                item: 'minecraft:cauldron',
                                                                title: '',

                                                                description:
                                                                  'Construct a hearth and stabilize your temperature',
                                                              },
                                                              {
                                                                item: 'cold_sweat:hearth',
                                                                id: 'hearth',
                                                                frame: 'goal',
                                                                title:
                                                                  "Hearth's Embrace",
                                                                reward:
                                                                  'im:eyes/eye_cold',
                                                                description:
                                                                  'Construct a hearth and stabilize your temperature',
                                                                children: [
                                                                  {
                                                                    item: 'endrem:cold_eye',
                                                                    title:
                                                                      'The Bunker',
                                                                    description:
                                                                      'Have a flashback after air conditioning your room',
                                                                    parent:
                                                                      'hearth',
                                                                    id: 'eye_cold',
                                                                    frame:
                                                                      'challenge',
                                                                    reward:
                                                                      'im:chapters/chapter_2',
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: 'rankine:bronze_hammer',
                                                        title:
                                                          'Bronze Age Crushing',
                                                        description:
                                                          'Craft a bronze hammer',
                                                        children: [
                                                          {
                                                            item: 'hexerei:selenite_shard',
                                                            title:
                                                              'Veiled Luminance',
                                                            description:
                                                              'Find a geode deep under a jungle or swamp & collect some selenite shards',
                                                            children: [
                                                              {
                                                                item: 'kubejs:goddess_heart',
                                                                title: '',
                                                                description: '',
                                                                children: [
                                                                  {
                                                                    item: 'paraglider:goddess_statue',
                                                                    id: 'goddess_statue',
                                                                    title:
                                                                      'Altar of Vitality',
                                                                    description:
                                                                      'Construct a goddess statue',
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },

                                                          {
                                                            item: 'rankine:galena',
                                                            title:
                                                              "Mire's Gift",
                                                            description:
                                                              'Collect a chunk of galena from the bottom of a swamp',
                                                            children: [
                                                              {
                                                                item: 'rankine:lead_ingot',
                                                                title:
                                                                  'Lead Genesis',
                                                                description:
                                                                  'Forge a lead ingot',
                                                                children: [],
                                                              },
                                                            ],
                                                          },

                                                          {
                                                            item: 'rankine:acanthite',
                                                            title:
                                                              "Desert's Gift",
                                                            description:
                                                              'Collect a chunk of acanthite from the bottom of a desert',
                                                            children: [
                                                              {
                                                                item: 'rankine:silver_ingot',
                                                                title:
                                                                  'Silver Genesis',
                                                                description:
                                                                  'Forge a silver ingot',
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            item: 'rankine:graphite',
                                                            title:
                                                              'Carbon in the Rough',
                                                            description:
                                                              'Find plumbago in an extreme hills and collect a piece of graphite',
                                                            children: [],
                                                          },
                                                          {
                                                            item: 'minecraft:amethyst_shard',
                                                            title:
                                                              'Violet Depths',
                                                            description:
                                                              'Find a geode deep underground & collect some amethyst shards',
                                                          },
                                                          {
                                                            item: 'rankine:plagioclase_feldspar',
                                                            title: '',
                                                            description: '',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            item: 'minecraft:crafting_table',
                            title: 'Crafting Cornerstone',
                            description: 'Craft a crafting table',
                            children: [
                              {
                                icon: 'justaraftmod:oak_raft',
                                tag: 'im:rafts',
                                title: 'Float On',
                                description: 'Craft a basic raft',
                              },
                              {
                                item: 'hexerei:herb_drying_rack',
                                title: 'Hang to Dry',
                                description: 'Craft a drying rack',
                                children: [
                                  {
                                    item: 'cold_sweat:waterskin',
                                    id: 'waterskin',
                                    title: 'Cooling Off',
                                    description: 'Craft a few waterskins',
                                  },
                                  {
                                    item: 'realistictorches:matchbox',
                                    title: 'Sparks',
                                    description: 'Craft a matchbox',
                                    children: [
                                      {
                                        title: 'Lighting the Darkness',
                                        description:
                                          'Craft a torch and light it on fire',
                                        icon: 'realistictorches:lit_torch',
                                        criteria: {
                                          lighting: {
                                            trigger:
                                              'minecraft:item_used_on_block',
                                            conditions: {
                                              item: {
                                                items: [
                                                  'realistictorches:matchbox',
                                                ],
                                              },
                                              location: {
                                                block: {
                                                  item: 'realistictorches:unlit_torch',
                                                },
                                              },
                                            },
                                          },
                                          crafting: {
                                            trigger: 'inventory_changed',
                                            conditions: {
                                              items: [
                                                {
                                                  items: [
                                                    'realistictorches:lit_torch',
                                                  ],
                                                },
                                              ],
                                            },
                                          },
                                        },
                                        requirements: [
                                          ['lighting', 'crafting'],
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        item: 'ecofriendly:iron_can_ym',
        id: 'trash',
        title: 'Community Service',
        description: 'Gather some debris from the ground',
      },
    ],
  });
});
