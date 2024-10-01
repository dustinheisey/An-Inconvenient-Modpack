onEvent('server.datapack.high_priority', (event) => {
  addAdvancements(event, 'chapter_3', {
    icon: 'minecraft:spyglass',
    item: 'endrem:exotic_eye',
    title: 'Chapter 3: Searching For Secrets',
    description: 'Search for answers',
    background: 'undergarden:textures/block/depthrock.png',
    children: [
      {
        item: 'chest',
        title: 'Beyond Primitive Storage',
        description: 'Craft a chest',
        children: [
          {
            item: 'ironchest:iron_chest',
            title: 'Storage Savvy',
            description: 'Increase the storage in your chest'
          }
        ]
      },
      {
        item: 'occultism:crushed_end_stone',
        title: 'Ender Echos',
        frame: 'goal',
        description:
          'Summon an endermite in an occult ritual and have a demon crush it into powder',
        children: [
          {
            item: 'occultism:chalk_gold',
            title: 'Circles of the Sun',
            description: 'Apply crushed end stone to white chalk',
            children: [
              {
                item: 'wither_skeleton_skull',
                title: 'Summoning the Storm',
                description: 'Collect a wither skull from the wild hunt'
              }
            ]
          },
          {
            item: 'naturesaura:token_joy',
            title: 'Joyful Journeys',
            frame: 'goal',
            description: 'Create a token of joy in a ritual of the forest',
            children: [
              {
                item: 'naturesaura:nature_altar',
                title: 'Aura Artisan',
                frame: 'goal',
                description: 'Create a nature altar',
                children: [
                  {
                    item: 'naturesaura:infused_stone',
                    title: "Shale's Shadow",
                    description: 'Infuse some stone with aura',
                    children: [
                      {
                        item: 'rankine:shale',
                        title: 'Pillars of the Past',
                        description:
                          'Throw infused stone in a puddle and forget about it'
                      }
                    ]
                  },

                  {
                    item: 'naturesaura:infused_iron',
                    title: 'Weight of Progress',
                    frame: 'goal',
                    description: 'Infuse some iron ingots with aura',
                    children: [
                      {
                        item: 'undergarden:catalyst',
                        title: 'Legacy of the Lost',
                        frame: 'goal',
                        reward: 'im:dimensions/undergarden',
                        description:
                          'Craft a catalyst to open the portal to the Undergarden',
                        children: [
                          {
                            item: 'undergarden:forgotten_nugget',
                            frame: 'goal',
                            title: 'Echos of Confinement',
                            description: 'Slay a Forgotten Guardian',
                            reward: 'im:eyes/eye_undead',
                            children: [
                              {
                                item: 'endrem:undead_eye',
                                title: 'A Pandemic',
                                description:
                                  'Have a flashback after slaying a Forgotten Guardian',
                                id: 'eye_undead',
                                frame: 'challenge'
                              },
                              {
                                item: 'malum:spirit_altar',
                                title: "Soulsmith's Forge",
                                frame: 'goal',
                                description: 'Craft a spirit altar',
                                children: [
                                  {
                                    item: 'malum:esoteric_spool',
                                    title: 'Spectrum Spun',
                                    description:
                                      'Create an esoteric spool to show off your identity'
                                  },
                                  {
                                    item: 'malum:twisted_rock',
                                    title: 'TODO: fix',
                                    description:
                                      'Infuse shale with wicked and arcane souls'
                                  },
                                  {
                                    id: 'blood',
                                    frame: 'goal',
                                    item: 'hexerei:blood_bottle',
                                    title: "Vein's Vessel",
                                    description:
                                      'Prick your finger and fill a bottle with blood',
                                    children: [
                                      {
                                        parent: 'blood',
                                        item: 'bloodmagic:sacrificialdagger',
                                        title: "Vein's Verdict",
                                        description: 'Craft a sacrificial knife'
                                      },
                                      {
                                        item: 'bloodmagic:altar',
                                        parent: 'blood',
                                        frame: 'goal',
                                        title: "Vein's Altar",
                                        description: 'Create a blood altar',
                                        children: [
                                          {
                                            item: 'bloodmagic:blankslate',
                                            title: 'Slate of the Sacrificed',
                                            description:
                                              'Infuse stone with blood'
                                          },

                                          {
                                            item: 'bloodmagic:incensealtar',
                                            title: 'Pyre of Potency',
                                            description:
                                              'Craft an incense altar'
                                          },
                                          {
                                            item: 'bloodmagic:weakbloodorb',
                                            title: 'Crimson Conduit',
                                            description:
                                              'Infuse a utherium crystal with blood'
                                          },
                                          {
                                            item: 'bloodmagic:basemonstersoul',
                                            title: 'Luring the Lost',
                                            description:
                                              'Extract will using the soul snares',
                                            children: [
                                              {
                                                item: 'minecraft:soul_sand',
                                                title: 'Graveyard Grains',
                                                description:
                                                  'Cast some will onto sand',
                                                children: [
                                                  {
                                                    item: 'minecraft:nether_star',
                                                    title:
                                                      'Shattering Stardust',
                                                    description:
                                                      'Summon & slay the wither',
                                                    children: [
                                                      {
                                                        item: 'chunkloaders:single_chunk_loader',
                                                        title:
                                                          'Compact Continuity',
                                                        description:
                                                          'Create your first chunk loader'
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            item: 'rankine:blood_obsidian',
                                            title: 'Crimson to the Core',
                                            frame: 'goal',
                                            description:
                                              'Infuse snowflake obsidian with blood',
                                            children: [
                                              {
                                                item: 'create:powdered_obsidian',
                                                title: 'Crushed to the Core',
                                                description:
                                                  'Have your crusher demon crush the blood obsidian',
                                                reward:
                                                  'im:dimensions/everdawn',
                                                frame: 'goal',
                                                children: [
                                                  {
                                                    item: 'occultism:satchel',
                                                    title:
                                                      'Capacity Beyond Belief',
                                                    description:
                                                      'Upgrade your bag into a substantial satchel'
                                                  },
                                                  {
                                                    item: 'blue_skies:lunar_stonebrick',
                                                    icon: 'blue_skies:everdawn_portal',
                                                    count: 10,
                                                    title: 'Heatwave Herald',
                                                    description:
                                                      'Craft lunar stone bricks and open a portal to Everdawn',
                                                    children: [
                                                      {
                                                        item: 'blue_skies:loot_bag_alchemist',
                                                        title:
                                                          'Silence of the Alchemist',
                                                        description:
                                                          'Slay the Alchemist',
                                                        children: [
                                                          {
                                                            item: 'malum:cluster_of_brilliance',
                                                            title:
                                                              'Brilliant Discovery',
                                                            description:
                                                              'Collect a cluster of brilliance from the Alchemist',
                                                            children: [
                                                              {
                                                                item: 'malum:brilliant_obelisk',
                                                                title:
                                                                  'Harmonized Brilliance',
                                                                description:
                                                                  'Craft a brilliant obelisk'
                                                              },
                                                              {
                                                                item: 'occultism:chalk_purple',
                                                                title:
                                                                  'Circles of the Veil',
                                                                description:
                                                                  'Apply powdered obsidian to gold chalk',
                                                                children: [
                                                                  {
                                                                    item: 'occultism:afrit_essence',
                                                                    title:
                                                                      'Infernal Invasion',
                                                                    description:
                                                                      'Summon an slay an afrit demon',
                                                                    children: []
                                                                  },
                                                                  {
                                                                    item: 'tconstruct:blazing_blood_bucket',
                                                                    title:
                                                                      'Blaze of Glory',
                                                                    description:
                                                                      'Melt blaze in a smeltery and collect a bucket of blazing blood',
                                                                    children: [
                                                                      {
                                                                        item: 'minecraft:torch',
                                                                        title:
                                                                          'Light Unto the Darkness',
                                                                        description:
                                                                          'Finally make a permanent torch'
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            item: 'minecraft:enchanting_table',
                                                            title:
                                                              'Arcane Awakening',
                                                            description:
                                                              'Collect an enchanting table from the Alchemist',
                                                            children: []
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        item: 'blue_skies:horizonite_ingot',
                                                        title: 'Embers Refined',
                                                        description:
                                                          'Forge a horizonite ingot',
                                                        children: [
                                                          {
                                                            item: 'extendedcrafting:black_iron_ingot',
                                                            title:
                                                              "Twilight's Temper",
                                                            description:
                                                              'Pour molten obsidian on the horizonite ingot',
                                                            children: [
                                                              {
                                                                item: 'extendedcrafting:basic_table',
                                                                title:
                                                                  'Altar of Ambition',
                                                                description:
                                                                  'Craft a basic table and start engineering more complex machines',
                                                                children: [
                                                                  {
                                                                    item: 'explorerscompass:explorerscompass',
                                                                    title:
                                                                      'Dungeon Seeker',
                                                                    description:
                                                                      "Craft an explorer's compass in a basic table"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        item: 'blue_skies:loot_bag_arachnarch',
                                                        title:
                                                          'Silence of the Arachnid',
                                                        frame: 'goal',
                                                        description:
                                                          'Slay the Arachnarch',
                                                        children: [
                                                          {
                                                            item: 'malum:raw_soulstone',
                                                            frame: 'goal',
                                                            title:
                                                              "Soulstone's Secret",
                                                            description:
                                                              'Collect raw soulstone from the Arachnarch',
                                                            children: [
                                                              {
                                                                item: 'malum:corrupted_resonance',
                                                                title:
                                                                  'Echos of Asylum',
                                                                frame: 'goal',
                                                                reward:
                                                                  'im:dimensions/twilight',
                                                                description:
                                                                  'Create a corrupted resonance and open a portal to the Twilight Forest',
                                                                children: [
                                                                  {
                                                                    item: 'endrem:evil_eye',
                                                                    title:
                                                                      'The Genocide',
                                                                    description:
                                                                      'Have a flashback after traveling to the Twilight Forest',
                                                                    id: 'eye_evil',
                                                                    frame:
                                                                      'challenge'
                                                                  },
                                                                  {
                                                                    title:
                                                                      'Dark Truth',
                                                                    description:
                                                                      'Find a page from a lost story in the Twilight Forest',
                                                                    item: 'kubejs:twilight_lost_page',
                                                                    children: [
                                                                      {
                                                                        title:
                                                                          'The Rise of a Dictator',
                                                                        id: 'twilight_lost_story',
                                                                        frame:
                                                                          'challenge',
                                                                        description:
                                                                          'Remake the lost story from the Twilight Forest',
                                                                        item: 'kubejs:twilight_lost_story'
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    item: 'twilightforest:carminite',
                                                                    title:
                                                                      'Spark of Creation',
                                                                    description:
                                                                      'Collect some carminite',
                                                                    children: [
                                                                      {
                                                                        item: 'minecraft:piston',
                                                                        title:
                                                                          'Pushing Past',
                                                                        description:
                                                                          'Craft a piston',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'rankine:wood_tier_crushing_head',
                                                                              title:
                                                                                'Crushing History',
                                                                              description:
                                                                                'Craft a basic crushing head'
                                                                            }
                                                                          ]
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    item: 'ecofriendly:garbage_item_ym',
                                                                    title:
                                                                      "Waste's Warning",
                                                                    description:
                                                                      'Complete all dungeons in the Twilight Forest and slay the Pollutioner King at the top of the final castle',
                                                                    children: [
                                                                      {
                                                                        item: 'create:andesite_alloy',
                                                                        title:
                                                                          'Alloyed Aspirations',
                                                                        description:
                                                                          'Craft andesite Alloys from garbage',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'create:millstone',
                                                                              title:
                                                                                'Grinding Gears',
                                                                              description:
                                                                                'Craft a millstone in your basic workbench',
                                                                              children:
                                                                                []
                                                                            }
                                                                          ]
                                                                      }
                                                                    ]
                                                                  },

                                                                  {
                                                                    item: 'minecraft:egg',
                                                                    title:
                                                                      "This Won't End Well",
                                                                    description:
                                                                      'Bring chickens back to the overworld and collect an egg',
                                                                    children: [
                                                                      {
                                                                        icon: 'naturesaura:birth_spirit',
                                                                        title:
                                                                          "Brood's Beginning",
                                                                        description:
                                                                          'Breed 2 chickens together',
                                                                        criteria:
                                                                          {
                                                                            breed:
                                                                              {
                                                                                trigger:
                                                                                  'minecraft:bred_animals',
                                                                                conditions:
                                                                                  {
                                                                                    child:
                                                                                      {
                                                                                        type: 'minecraft:chicken'
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      }
                                                                    ]
                                                                  },
                                                                  {
                                                                    item: 'twilightforest:fiery_ingot',
                                                                    title:
                                                                      "Inferno's Mark",
                                                                    frame:
                                                                      'goal',
                                                                    description:
                                                                      'Forge a fiery ingot',
                                                                    children: [
                                                                      {
                                                                        item: 'kubejs:cinder_dust',
                                                                        title:
                                                                          "Inferno's Promise",
                                                                        frame:
                                                                          'goal',
                                                                        description:
                                                                          'Grind the fiery ingot into powder',
                                                                        reward:
                                                                          'im:eyes/eye_lost',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'endrem:lost_eye',
                                                                              title:
                                                                                'Automation',
                                                                              description:
                                                                                'Have a flashback after grinding some cinder flour',
                                                                              frame:
                                                                                'challenge',
                                                                              id: 'eye_lost',
                                                                              reward:
                                                                                'im:chapters/chapter_4'
                                                                            }
                                                                          ]
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              {
                                                                item: 'malum:soulwood_totem_base',
                                                                title:
                                                                  'Corrupted Core',
                                                                description:
                                                                  'Create a soulwood totem',
                                                                children: []
                                                              }
                                                            ]
                                                          },
                                                          {
                                                            item: 'blue_skies:venom_sac',
                                                            title:
                                                              "Toxin's Touch",
                                                            description:
                                                              'Collect a venom sac from the Arachnarch',
                                                            children: [
                                                              {
                                                                id: 'sacrifice',
                                                                item: 'bloodmagic:daggerofsacrifice',
                                                                title:
                                                                  "Toxin's Harvest",
                                                                description:
                                                                  'Craft a dagger of sacrifice',
                                                                reward:
                                                                  'im:eyes/eye_corrupted',
                                                                children: [
                                                                  {
                                                                    item: 'endrem:corrupted_eye',
                                                                    title:
                                                                      'Parasite',
                                                                    description:
                                                                      'Have a flashback after crafting a dagger of sacrifice',
                                                                    frame:
                                                                      'challenge',
                                                                    parent:
                                                                      'sacrifice',
                                                                    id: 'eye_corrupted'
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        title: 'Chaotic Truth',
                                                        description:
                                                          'Find a page from a lost story in the Everdawn',
                                                        item: 'kubejs:everdawn_lost_page',
                                                        children: [
                                                          {
                                                            title:
                                                              'Climate Chaos',
                                                            id: 'everdawn_lost_story',
                                                            frame: 'challenge',
                                                            description:
                                                              'Remake the lost story from the Everdawn',
                                                            item: 'kubejs:everdawn_lost_story'
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
                          },
                          {
                            item: 'undergarden:regalium_crystal',
                            title: 'Gleam Amidst Gloom',
                            description: 'Collect some regalium crystals'
                          },
                          {
                            title: 'Lost Truth',
                            description:
                              'Find a page from a lost story in the Undergarden',
                            item: 'kubejs:undergarden_lost_page',
                            children: [
                              {
                                title: 'A Virus',
                                id: 'undergarden_lost_story',
                                frame: 'challenge',
                                description:
                                  'Remake the lost story from the Undergarden',
                                item: 'kubejs:undergarden_lost_story'
                              }
                            ]
                          },
                          {
                            item: 'undergarden:grongle_log',
                            title: 'Fungal Forests',
                            description: 'Collect a grongle log',
                            children: [
                              {
                                item: 'rankine:sawdust',
                                title: 'Guilt Ground Down',
                                description: 'Crush the log into sawdust',
                                children: [
                                  {
                                    item: 'paper',
                                    title: 'Pages of Promise',
                                    description: 'Form a sheet of paper'
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            item: 'undergarden:masticator_scales',
                            title: "Masticator's Bane",
                            description:
                              "Complete a forgotten gateway, kill a Masticator, and collect it's scales",
                            children: [
                              {
                                item: 'hexerei:blood_sigil',
                                title: 'Seal of Sacrifice',
                                description:
                                  'Create a blood sigil used to prick your finger'
                              }
                            ]
                          },
                          {
                            item: 'undergarden:mogmoss',
                            title: 'Moss of Mourning',
                            description: 'Collect some mogmoss from a mog',
                            children: [
                              {
                                item: 'bloodmagic:arcaneashes',
                                title: 'Dust of the Damned',
                                description:
                                  'Transmute the mogmoss into arcane ashes'
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
