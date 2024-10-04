onEvent('server.datapack.high_priority', (event) => {
  addAdvancements(event, 'relics', {
    icon: 'relics:researching_table',
    tag: 'im:relics',
    title: 'Collection: Relics',
    // background: 'architects_palette:textures/block/onyx.png',
    background: 'malum:textures/block/runewood/runewood_beam.png',
    children: [
      {
        title: 'Everbright Relics',
        description: 'Collect a relic from Everbright.',
        icon: 'blue_skies:everbright_portal',
        tag: 'im:relics/everbright',
        children: [
          {
            title: 'Amphibian Boot',
            description: 'Collect an amphibian boot from an aquatic gateway',
            item: 'relics:amphibian_boot',
            children: [
              {
                title: 'Aqua Walker',
                description: 'Collect an aqua walker from an aquatic gateway',
                item: 'relics:aqua_walker',
                children: [
                  {
                    title: 'Drowned Belt',
                    description:
                      'Collect a drowned belt from an aquatic gateway',
                    item: 'relics:drowned_belt',
                    children: [
                      {
                        title: 'Jellyfish Necklace',
                        description:
                          'Collect a jellyfish necklace from an aquatic gateway',
                        item: 'relics:jellyfish_necklace',
                        children: [
                          {
                            title: 'Snorkel',
                            description:
                              'Collect a snorkel from an aquatic gateway',
                            item: 'artifacts:snorkel',
                            children: [
                              {
                                title: 'Flippers',
                                description:
                                  'Collect some flippers from an aquatic gateway',
                                item: 'artifacts:flippers'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        icon: 'undergarden:catalyst',
        title: 'Undergarden Relics',
        description: 'Collect a relic from the Undergarden.',
        tag: 'im:relics/undergarden',
        children: [
          {
            title: 'Spore Sack',
            description: 'Collect a spore sack from a forgotten gateway',
            item: 'relics:spore_sack',
            children: [
              {
                title: 'Night Vision Goggles',
                description:
                  'Collect night vision goggles from a forgotten gateway',
                item: 'artifacts:night_vision_goggles',
                children: [
                  {
                    title: 'Lucky Scarf',
                    description:
                      'Collect a lucky scarf from a forgotten gateway',
                    item: 'artifacts:lucky_scarf',
                    children: [
                      {
                        title: 'Antidote Vessel',
                        description:
                          'Collect an antidote vessel  from a forgotten gateway',
                        item: 'artifacts:antidote_vessel',
                        children: [
                          {
                            title: 'Digging Claws',
                            description:
                              'Collect digging claws from a forgotten gateway',
                            item: 'artifacts:digging_claws',
                            children: [
                              {
                                title: 'Kitty Slippers',
                                description:
                                  'Collect kitty slippers from a forgotten gateway',
                                item: 'artifacts:kitty_slippers'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        icon: 'minecraft:netherrack',
        title: 'Nether Relics',
        description: 'Collect a relic from the Nether.',
        tag: 'im:relics/nether',
        children: [
          {
            title: 'Magma Walker',
            description: 'Collect a magma walker from a hellish gateway',
            item: 'relics:magma_walker',
            children: [
              {
                title: 'Flame Pendant',
                description: 'Collect a flame pendant from a hellish gateway',
                item: 'artifacts:flame_pendant',
                children: [
                  {
                    title: 'Blazing Flask',
                    description:
                      'Collect a blazing flask from a hellish gateway',
                    item: 'relics:blazing_flask',
                    children: [
                      {
                        title: 'Bastion Ring',
                        description:
                          'Collect a bastion ring from a hellish gateway',
                        item: 'relics:bastion_ring',
                        children: [
                          {
                            title: 'Obsidian Skull',
                            description:
                              'Collect an obsidian skull from a hellish gateway',
                            item: 'artifacts:obsidian_skull',
                            children: [
                              {
                                title: 'Fire Gauntlet',
                                description:
                                  'Collect a fire gauntlet from a hellish gateway',
                                item: 'artifacts:fire_gauntlet'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        icon: 'hem:steam_engine',
        title: 'Blueleaf Relics',
        description: 'Collect a relic from Blueleaf.',
        tag: 'im:relics/blueleaf',
        children: [
          {
            title: 'Plastic Drinking Hat',
            description: 'Collect a plastic drinking hat from a sooty gateway',
            item: 'artifacts:plastic_drinking_hat',
            children: [
              {
                title: 'Hunter Belt',
                description: 'Collect a hunter belt from a sooty gateway',
                item: 'relics:hunter_belt',
                children: [
                  {
                    title: 'Arrow Quiver',
                    description: 'Collect an arrow quiver from a sooty gateway',
                    item: 'relics:arrow_quiver',
                    children: [
                      {
                        title: 'Horse Flute',
                        description:
                          'Collect a horse flute from a sooty gateway',
                        item: 'relics:horse_flute',
                        children: [
                          {
                            title: 'Novelty Drinking Hat',
                            description:
                              'Collect a novelty drinking hat from a sooty gateway',
                            item: 'artifacts:novelty_drinking_hat',
                            children: [
                              {
                                title: 'Villager Hat',
                                description:
                                  'Collect a villager hat from a sooty gateway',
                                item: 'artifacts:villager_hat'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        icon: 'blue_skies:everdawn_portal',
        title: 'Everdawn Relics',
        description: 'Collect a relic from Everdawn.',
        tag: 'im:relics/everdawn',
        children: [
          {
            title: 'Rage Glove',
            description: 'Collect a rage glove from a poisonous gateway',
            item: 'relics:rage_glove',
            children: [
              {
                title: 'Superstitious Hat',
                description:
                  'Collect a supersitious hat from a poisonous gateway',
                item: 'artifacts:superstitious_hat',
                children: [
                  {
                    title: 'Scarf of Invisibility',
                    description:
                      'Collect a scarf of invisibility from a poisonous gateway',
                    item: 'artifacts:scarf_of_invisibility',
                    children: [
                      {
                        title: 'Panic Necklace',
                        description:
                          'Collect a panic necklace from a poisonous gateway',
                        item: 'artifacts:panic_necklace',
                        children: [
                          {
                            title: 'Feral Clows',
                            description:
                              'Collect feral claws from a poisonous gateway',
                            item: 'artifacts:feral_claws',
                            children: [
                              {
                                title: 'Power Glove',
                                description:
                                  'Collect a power glove from a poisonous gateway',
                                item: 'artifacts:power_glove'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        icon: 'twilightforest:twilight_portal_miniature_structure',
        title: 'Twilight Forest relics',
        description: 'Collect a relic from the Twilight Forest.',
        tag: 'im:relics/twilight',
        children: [
          {
            title: 'Thorn Pendant',
            description: 'Collect a thorn pendant from a magical gateway',
            item: 'artifacts:thorn_pendant',
            children: [
              {
                title: 'Magic Mirror',
                description: 'Collect a magic mirror from a magical gateway',
                item: 'relics:magic_mirror',
                children: [
                  {
                    title: 'Universal Attractor',
                    description:
                      'Collect a universal attractor from a magical gateway',
                    item: 'artifacts:universal_attractor',
                    children: [
                      {
                        title: 'Crystal Heart',
                        description:
                          'Collect a crystal heart from a magical gateway',
                        item: 'artifacts:crystal_heart',
                        children: [
                          {
                            title: 'Pocket Piston',
                            description:
                              'Collect a pocket piston from a magical gateway',
                            item: 'artifacts:pocket_piston',
                            children: [
                              {
                                title: 'Steadfast Spikes',
                                description:
                                  'Collect steadfast spikes from a magical gateway',
                                item: 'artifacts:steadfast_spikes'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        icon: 'minecraft:beehive',
        title: 'Bumblezone relics',
        description: 'Collect a relic from the Bumblezone.',
        tag: 'im:relics/bumblezone',
        children: [
          {
            title: 'Wool Mitten',
            description: 'Collect a wool mitten from an buzzing gateway',
            item: 'relics:wool_mitten',
            children: [
              {
                title: 'Leather Belt',
                description: 'Collect a leather belt from a buzzing gateway',
                item: 'relics:leather_belt',
                children: [
                  {
                    title: 'Infinity Ham',
                    description:
                      'Collect an infinity ham  from a buzzing gateway',
                    item: 'relics:infinity_ham',
                    children: [
                      {
                        title: 'Vampric Glove',
                        description:
                          'Collect a vampiric glove from a buzzing gateway',
                        item: 'artifacts:vampiric_glove',
                        children: [
                          {
                            title: 'Whoopee Cushion',
                            description:
                              'Collect a Whoopee Cushion from a buzzing gateway',
                            item: 'artifacts:whoopee_cushion',
                            children: [
                              {
                                title: 'Bunny Hoppers',
                                description:
                                  'Collect bunny hoppers from a buzzing gateway',
                                item: 'artifacts:bunny_hoppers'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        icon: 'tofucraft:tofukinu',
        title: 'Tofuland relics',
        description: 'Collect a relic from tofuland.',
        tag: 'im:relics/tofuland',
        children: [
          {
            title: 'Ice Breaker',
            description: 'Collect an ice breaker from an soy gateway',
            item: 'relics:ice_breaker',
            children: [
              {
                title: 'Ice Skates',
                description: 'Collect ice skates from an soy gateway',
                item: 'relics:ice_skates',
                children: [
                  {
                    title: 'Roller Skates',
                    description: 'Collect roller skates from a soy gateway',
                    item: 'relics:roller_skates',
                    children: [
                      {
                        title: 'Charm of Sinking',
                        description:
                          'Collect a charm of sinking from a soy gateway',
                        item: 'artifacts:charm_of_sinking',
                        children: [
                          {
                            title: 'Running Shoes',
                            description:
                              'Collect running shoes from a soy gateway',
                            item: 'artifacts:running_shoes',
                            children: [
                              {
                                title: 'Aqua Dashers',
                                description:
                                  'Collect aqua dashers from a soy gateway',
                                item: 'artifacts:aqua_dashers'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        icon: 'mythicbotany:kvasir_mead',
        title: 'Alfheim relics',
        description: 'Collect a relic from alfheim.',
        tag: 'im:relics/alfheim',
        children: [
          {
            title: 'Holy Locket',
            description: 'Collect a holy locket from a golden gateway',
            item: 'relics:holy_locket',
            children: [
              {
                title: 'Umbrella',
                description: 'Collect an umbrella from a golden gateway',
                item: 'artifacts:umbrella',
                children: [
                  {
                    title: 'Cross Necklace',
                    description:
                      'Collect a cross necklace from a golden gateway',
                    item: 'artifacts:cross_necklace',
                    children: [
                      {
                        title: 'Cloud in A Bottle',
                        description:
                          'Collect a cloud in a bottle from a golden gateway',
                        item: 'artifacts:cloud_in_a_bottle',
                        children: [
                          {
                            title: 'Helium Flamingo',
                            description:
                              'Collect a Helim Flamingo from a golden gateway',
                            item: 'artifacts:helium_flamingo',
                            children: [
                              {
                                title: 'Golden Hook',
                                description:
                                  'Collect a golden hook from a golden gateway',
                                item: 'artifacts:golden_hook'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        icon: 'botania:ender_air_bottle',
        title: 'The End relics',
        description: 'Collect a relic from the end.',
        tag: 'im:relics/end',
        children: [
          {
            title: 'Spatial Sign',
            description: 'Collect a spatial sign from a mysterious gateway',
            item: 'relics:spatial_sign',
            children: [
              {
                title: 'Reflection Necklace',
                description:
                  'Collect a reflection necklace from a mysterious gateway',
                item: 'relics:reflection_necklace',
                children: [
                  {
                    title: 'Midnight Robe',
                    description:
                      'Collect a midnight Robe from a mysterious gateway',
                    item: 'relics:midnight_robe',
                    children: [
                      {
                        title: 'Chorus Inhibitor',
                        description:
                          'Collect a chorus inhibitor from a mysterious gateway',
                        item: 'relics:chorus_inhibitor',
                        children: [
                          {
                            title: "Ender's Hand",
                            description:
                              "Collect an ender's hand from a mysterious gateway",
                            item: 'relics:enders_hand',
                            children: [
                              {
                                title: 'Elytra Booster',
                                description:
                                  'Collect an elytra booster from a mysterious gateway',
                                item: 'relics:elytra_booster',
                                children: [
                                  {
                                    title: 'Shadow Glaive',
                                    description:
                                      'Collect a shadow glaive from a mysterious gateway',
                                    item: 'relics:shadow_glaive',
                                    children: [
                                      {
                                        title: 'Shock Pendant',
                                        description:
                                          'Collect a shock pendant from a mysterious gateway',
                                        item: 'artifacts:shock_pendant'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });
});
