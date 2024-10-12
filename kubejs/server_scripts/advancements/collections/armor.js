onEvent('server.datapack.high_priority', (event) => {
  addAdvancements(event, 'armor', {
    icon: 'minecraft:armor_stand',
    title: 'Collection: Armor',
    tag: 'im:armors/clay',
    background: 'architects_palette:textures/block/myonite.png',
    children: [
      {
        title: 'Terracotta Boots',
        description: 'Craft Terracotta boots',
        item: 'ceramics:clay_boots',
        reward: 'im:armor/clay/boots',
        children: [
          {
            title: 'Leather Boots',
            description: 'upgrade to leather boots',
            item: 'minecraft:leather_boots',
            reward: 'im:armor/leather/boots',
            children: [
              {
                title: 'Bronze Boots',
                description: 'upgrade to bronze boots',
                item: 'charcoal_pit:bronze_boots',
                reward: 'im:armor/bronze/boots',
                children: [
                  {
                    title: 'Iron Boots',
                    description: 'upgrade to iron boots',
                    item: 'minecraft:iron_boots',
                    reward: 'im:armor/iron/boots',
                    children: [
                      {
                        title: 'Charoite Boots',
                        description: 'upgrade to charoite boots',
                        item: 'blue_skies:charoite_boots',
                        reward: 'im:armor/charoite/boots',
                        children: [
                          {
                            title: 'Utherium Boots',
                            description: 'upgrade to utherium boots',
                            item: 'undergarden:utherium_boots',
                            reward: 'im:armor/utherium/boots',
                            children: [
                              {
                                title: 'Horizonite Boots',
                                description: 'upgrade to horizonite boots',
                                item: 'blue_skies:horizonite_boots',
                                reward: 'im:armor/horizonite/boots',
                                children: [
                                  {
                                    title: 'Soul Stained Steel Boots',
                                    description:
                                      'upgrade to soul stained steel boots',
                                    item: 'malum:soul_stained_steel_boots',
                                    reward: 'im:armor/soul_stained_steel/boots',
                                    children: [
                                      {
                                        title: 'Fiery Boots',
                                        description: 'upgrade to fiery boots',
                                        item: 'twilightforest:fiery_boots',
                                        reward: 'im:armor/fiery/boots',
                                        children: [
                                          {
                                            title: 'Netherite Boots',
                                            description:
                                              'upgrade to netherite boots',
                                            item: 'minecraft:netherite_boots',
                                            reward: 'im:armor/netherite/boots',
                                            children: [
                                              {
                                                title: 'Ignitium Boots',
                                                description:
                                                  'upgrade to ignitium boots',
                                                item: 'cataclysm:ignitium_boots',
                                                reward:
                                                  'im:armor/ignitium/boots',
                                                children: [
                                                  {
                                                    title: 'Engineers Boots',
                                                    description:
                                                      'upgrade to engineers boots',
                                                    item: 'hem:steampunkoutfit_boots',
                                                    reward:
                                                      'im:armor/engineers/boots',
                                                    children: [
                                                      {
                                                        title:
                                                          'Brigandine Boots',
                                                        description:
                                                          'upgrade to brigandine boots',
                                                        item: 'rankine:brigandine_boots',
                                                        reward:
                                                          'im:armor/brigandine/boots',
                                                        children: [
                                                          {
                                                            title:
                                                              'Compressed Iron Boots',
                                                            description:
                                                              'upgrade to compressed iron boots',
                                                            item: 'pneumaticcraft:compressed_iron_boots',
                                                            reward:
                                                              'im:armor/compressed_iron/boots',
                                                            children: [
                                                              {
                                                                title:
                                                                  'Orichalcum Boots',
                                                                description:
                                                                  'upgrade to orichalcum boots',
                                                                item: 'charcoal_pit:orichalcum_boots',
                                                                reward:
                                                                  'im:armor/orichalcum/boots',
                                                                children: [
                                                                  {
                                                                    title:
                                                                      'Pneumatic Boots',
                                                                    description:
                                                                      'upgrade to pneumatic boots',
                                                                    item: 'pneumaticcraft:pneumatic_boots',
                                                                    reward:
                                                                      'im:armor/pneumatic/boots'
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        title:
                                                          'Manasteel Boots',
                                                        description:
                                                          'upgrade to manasteel boots',
                                                        item: 'botania:manasteel_boots',
                                                        reward:
                                                          'im:armor/manasteel/boots',
                                                        children: [
                                                          {
                                                            title:
                                                              'Terrasteel Boots',
                                                            description:
                                                              'upgrade to terrasteel boots',
                                                            item: 'botania:terrasteel_boots',
                                                            reward:
                                                              'im:armor/terrasteel/boots',
                                                            children: [
                                                              {
                                                                title:
                                                                  'Elementium Boots',
                                                                description:
                                                                  'upgrade to elementium boots',
                                                                item: 'botania:elementium_boots',
                                                                reward:
                                                                  'im:armor/elementium/boots',
                                                                children: [
                                                                  {
                                                                    title:
                                                                      'Diamond Boots',
                                                                    description:
                                                                      'upgrade to diamond boots',
                                                                    item: 'minecraft:diamond_boots',
                                                                    reward:
                                                                      'im:armor/diamond/boots',
                                                                    children: [
                                                                      {
                                                                        title:
                                                                          'Mekasuit Boots',
                                                                        description:
                                                                          'upgrade to mekasuit boots',
                                                                        item: 'mekanism:mekasuit_boots',
                                                                        reward:
                                                                          'im:armor/mekasuit/boots'
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
        title: 'Terracotta Chestplate',
        description: 'Craft terracotta chestplate',
        item: 'ceramics:clay_chestplate',
        reward: 'im:armor/clay/chestplate',
        children: [
          {
            title: 'Leather Chestplate',
            description: 'upgrade to leather chestplate',
            item: 'minecraft:leather_chestplate',
            reward: 'im:armor/leather/chestplate',
            children: [
              {
                title: 'Bronze Chestplate',
                description: 'upgrade to bronze chestplate',
                item: 'charcoal_pit:bronze_chestplate',
                reward: 'im:armor/bronze/chestplate',
                children: [
                  {
                    title: 'Iron Chestplate',
                    description: 'upgrade to iron chestplate',
                    item: 'minecraft:iron_chestplate',
                    reward: 'im:armor/iron/chestplate',
                    children: [
                      {
                        title: 'Charoite Chestplate',
                        description: 'upgrade to charoite chestplate',
                        item: 'blue_skies:charoite_chestplate',
                        reward: 'im:armor/charoite/chestplate',
                        children: [
                          {
                            title: 'Utherium Chestplate',
                            description: 'upgrade to utherium chestplate',
                            item: 'undergarden:utherium_chestplate',
                            reward: 'im:armor/utherium/chestplate',
                            children: [
                              {
                                title: 'Horizonite Chestplate',
                                description: 'upgrade to horizonite chestplate',
                                item: 'blue_skies:horizonite_chestplate',
                                reward: 'im:armor/horizonite/chestplate',
                                children: [
                                  {
                                    title: 'Soul Stained Steel Chestplate',
                                    description:
                                      'upgrade to soul stained steel chestplate',
                                    item: 'malum:soul_stained_steel_chestplate',
                                    reward:
                                      'im:armor/soul_stained_steel/chestplate',
                                    children: [
                                      {
                                        title: 'Fiery Chestplate',
                                        description:
                                          'upgrade to fiery chestplate',
                                        item: 'twilightforest:fiery_chestplate',
                                        reward: 'im:armor/fiery/chestplate',
                                        children: [
                                          {
                                            title: 'Netherite Chestplate',
                                            description:
                                              'upgrade to netherite chestplate',
                                            item: 'minecraft:netherite_chestplate',
                                            reward:
                                              'im:armor/netherite/chestplate',
                                            children: [
                                              {
                                                title: 'Ignitium Chestplate',
                                                description:
                                                  'upgrade to ignitium chestplate',
                                                item: 'cataclysm:ignitium_chestplate',
                                                reward:
                                                  'im:armor/ignitium/chestplate',
                                                children: [
                                                  {
                                                    title:
                                                      'Engineers Chestplate',
                                                    description:
                                                      'upgrade to engineers chestplate',
                                                    item: 'hem:steampunkoutfit_chestplate',
                                                    reward:
                                                      'im:armor/engineers/chestplate',
                                                    children: [
                                                      {
                                                        title:
                                                          'Manasteel Chestplate',
                                                        description:
                                                          'upgrade to manasteel chestplate',
                                                        item: 'botania:manasteel_chestplate',
                                                        reward:
                                                          'im:armor/manasteel/chestplate',
                                                        children: [
                                                          {
                                                            title:
                                                              'Terrasteel Chestplate',
                                                            description:
                                                              'upgrade to terrasteel chestplate',
                                                            item: 'botania:terrasteel_chestplate',
                                                            reward:
                                                              'im:armor/terrasteel/chestplate',
                                                            children: [
                                                              {
                                                                title:
                                                                  'Elementium Chestplate',
                                                                description:
                                                                  'upgrade to elementium chestplate',
                                                                item: 'botania:elementium_chestplate',
                                                                reward:
                                                                  'im:armor/elementium/chestplate',
                                                                children: [
                                                                  {
                                                                    title:
                                                                      'Diamond Chestplate',
                                                                    description:
                                                                      'upgrade to diamond chestplate',
                                                                    item: 'minecraft:diamond_chestplate',
                                                                    reward:
                                                                      'im:armor/diamond/chestplate',
                                                                    children: [
                                                                      {
                                                                        title:
                                                                          'Mekasuit Bodyarmor',
                                                                        description:
                                                                          'upgrade to mekasuit bodyarmor',
                                                                        item: 'mekanism:mekasuit_bodyarmor',
                                                                        reward:
                                                                          'im:armor/mekasuit/chestplate'
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
                                                        title:
                                                          'Brigandine Chestplate',
                                                        description:
                                                          'upgrade to brigandine chestplate',
                                                        item: 'rankine:brigandine_chestplate',
                                                        reward:
                                                          'im:armor/brigandine/chestplate',
                                                        children: [
                                                          {
                                                            title:
                                                              'Compressed Iron Chestplate',
                                                            description:
                                                              'upgrade to compressed iron chestplate',
                                                            item: 'pneumaticcraft:compressed_iron_chestplate',
                                                            reward:
                                                              'im:armor/compressed_iron/chestplate',
                                                            children: [
                                                              {
                                                                title:
                                                                  'Orichalcum Chestplate',
                                                                description:
                                                                  'upgrade to orichalcum chestplate',
                                                                item: 'charcoal_pit:orichalcum_chestplate',
                                                                reward:
                                                                  'im:armor/orichalcum/chestplate',
                                                                children: [
                                                                  {
                                                                    title:
                                                                      'Pneumatic Chestplate',
                                                                    description:
                                                                      'upgrade to pneumatic chestplate',
                                                                    item: 'pneumaticcraft:pneumatic_chestplate',
                                                                    reward:
                                                                      'im:armor/pneumatic/chestplate'
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
        title: 'Terracotta Leggings',
        description: 'Craft terracotta leggings',
        item: 'ceramics:clay_leggings',
        reward: 'im:armor/clay/leggings',
        children: [
          {
            title: 'Leather Leggings',
            description: 'upgrade to leather leggings',
            item: 'minecraft:leather_leggings',
            reward: 'im:armor/leather/leggings',
            children: [
              {
                title: 'Bronze Leggings',
                description: 'upgrade to bronze leggings',
                item: 'charcoal_pit:bronze_leggings',
                reward: 'im:armor/bronze/leggings',
                children: [
                  {
                    title: 'Iron Leggings',
                    description: 'upgrade to iron leggings',
                    item: 'minecraft:iron_leggings',
                    reward: 'im:armor/iron/leggings',
                    children: [
                      {
                        title: 'Charoite Leggings',
                        description: 'upgrade to charoite leggings',
                        item: 'blue_skies:charoite_leggings',
                        reward: 'im:armor/charoite/leggings',
                        children: [
                          {
                            title: 'Utherium Leggings',
                            description: 'upgrade to utherium leggings',
                            item: 'undergarden:utherium_leggings',
                            reward: 'im:armor/utherium/leggings',
                            children: [
                              {
                                title: 'horizonite Leggings',
                                description: 'upgrade to horizonite leggings',
                                item: 'blue_skies:horizonite_leggings',
                                reward: 'im:armor/horizonite/leggings',
                                children: [
                                  {
                                    title: 'Soul Stained Steel Leggings',
                                    description:
                                      'upgrade to soul stained steel leggings',
                                    item: 'malum:soul_stained_steel_leggings',
                                    reward:
                                      'im:armor/soul_stained_steel/leggings',
                                    children: [
                                      {
                                        title: 'Fiery Leggings',
                                        description:
                                          'upgrade to fiery leggings',
                                        item: 'twilightforest:fiery_leggings',
                                        reward: 'im:armor/fiery/leggings',
                                        children: [
                                          {
                                            title: 'Netherite Leggings',
                                            description:
                                              'upgrade to netherite leggings',
                                            item: 'minecraft:netherite_leggings',
                                            reward:
                                              'im:armor/netherite/leggings',
                                            children: [
                                              {
                                                title: 'Ignitium Leggings',
                                                description:
                                                  'upgrade to ignitium leggings',
                                                item: 'cataclysm:ignitium_leggings',
                                                reward:
                                                  'im:armor/ignitium/leggings',
                                                children: [
                                                  {
                                                    title: 'Engineers Leggings',
                                                    description:
                                                      'upgrade to engineers leggings',
                                                    item: 'hem:steampunkoutfit_leggings',
                                                    reward:
                                                      'im:armor/engineers/leggings',
                                                    children: [
                                                      {
                                                        title:
                                                          'Brigandine Leggings',
                                                        description:
                                                          'upgrade to brigandine leggings',
                                                        item: 'rankine:brigandine_leggings',
                                                        reward:
                                                          'im:armor/brigandine/leggings',
                                                        children: [
                                                          {
                                                            title:
                                                              'Compressed Iron Leggings',
                                                            description:
                                                              'upgrade to compressed iron leggings',
                                                            item: 'pneumaticcraft:compressed_iron_leggings',
                                                            reward:
                                                              'im:armor/compressed_iron/leggings',
                                                            children: [
                                                              {
                                                                title:
                                                                  'Orichalcum Leggings',
                                                                description:
                                                                  'upgrade to orichalcum leggings',
                                                                item: 'charcoal_pit:orichalcum_leggings',
                                                                reward:
                                                                  'im:armor/orichalcum/leggings',
                                                                children: [
                                                                  {
                                                                    title:
                                                                      'Pneumatic Leggings',
                                                                    description:
                                                                      'upgrade to pneumatic leggings',
                                                                    item: 'pneumaticcraft:pneumatic_leggings',
                                                                    reward:
                                                                      'im:armor/pneumatic/leggings'
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        title:
                                                          'Manasteel Leggings',
                                                        description:
                                                          'upgrade to manasteel leggings',
                                                        item: 'botania:manasteel_leggings',
                                                        reward:
                                                          'im:armor/manasteel/leggings',
                                                        children: [
                                                          {
                                                            title:
                                                              'Terrasteel Leggings',
                                                            description:
                                                              'upgrade to terrasteel leggings',
                                                            item: 'botania:terrasteel_leggings',
                                                            reward:
                                                              'im:armor/terrasteel/leggings',
                                                            children: [
                                                              {
                                                                title:
                                                                  'Elementium Leggings',
                                                                description:
                                                                  'upgrade to elementium leggings',
                                                                item: 'botania:elementium_leggings',
                                                                reward:
                                                                  'im:armor/elementium/leggings',
                                                                children: [
                                                                  {
                                                                    title:
                                                                      'Diamond Leggings',
                                                                    description:
                                                                      'upgrade to diamond leggings',
                                                                    item: 'minecraft:diamond_leggings',
                                                                    reward:
                                                                      'im:armor/diamond/leggings',
                                                                    children: [
                                                                      {
                                                                        title:
                                                                          'Mekasuit Pants',
                                                                        description:
                                                                          'upgrade to mekasuit pants',
                                                                        item: 'mekanism:mekasuit_pants',
                                                                        reward:
                                                                          'im:armor/mekasuit/leggings'
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
        title: 'Terracotta Helmet',
        description: 'Craft terracotta helmet',
        item: 'ceramics:clay_helmet',
        reward: 'im:armor/clay/helmet',
        children: [
          {
            title: 'Leather Helmet',
            description: 'upgrade to leather helmet',
            item: 'minecraft:leather_helmet',
            reward: 'im:armor/leather/helmet',
            children: [
              {
                title: 'Bronze Helmet',
                description: 'upgrade to bronze helmet',
                item: 'charcoal_pit:bronze_helmet',
                reward: 'im:armor/bronze/helmet',
                children: [
                  {
                    title: 'Iron Helmet',
                    description: 'upgrade to iron helmet',
                    item: 'minecraft:iron_helmet',
                    reward: 'im:armor/iron/helmet',
                    children: [
                      {
                        title: 'Charoite Helmet',
                        description: 'upgrade to charoite helmet',
                        item: 'blue_skies:charoite_helmet',
                        reward: 'im:armor/charoite/helmet',
                        children: [
                          {
                            title: 'Utherium Helmet',
                            description: 'upgrade to utherium helmet',
                            item: 'undergarden:utherium_helmet',
                            reward: 'im:armor/utherium/helmet',
                            children: [
                              {
                                title: 'Horizonite Helmet',
                                description: 'upgrade to horizonite helmet',
                                item: 'blue_skies:horizonite_helmet',
                                reward: 'im:armor/horizonite/helmet',
                                children: [
                                  {
                                    title: 'Soul Stained Steel Helmet',
                                    description:
                                      'upgrade to soul stained steel helmet',
                                    item: 'malum:soul_stained_steel_helmet',
                                    reward:
                                      'im:armor/soul_stained_steel/helmet',
                                    children: [
                                      {
                                        title: 'Fiery Helmet',
                                        description: 'upgrade to fiery helmet',
                                        item: 'twilightforest:fiery_helmet',
                                        reward: 'im:armor/fiery/helmet',
                                        children: [
                                          {
                                            title: 'Netherite Helmet',
                                            description:
                                              'upgrade to netherite helmet',
                                            item: 'minecraft:netherite_helmet',
                                            reward: 'im:armor/netherite/helmet',
                                            children: [
                                              {
                                                title: 'Ignitium Helmet',
                                                description:
                                                  'upgrade to ignitium helmet',
                                                item: 'cataclysm:ignitium_helmet',
                                                reward:
                                                  'im:armor/ignitium/helmet',
                                                children: [
                                                  {
                                                    title: 'Engineers Helmet',
                                                    description:
                                                      'upgrade to engineers helmet',
                                                    item: 'hem:steampunkoutfit_helmet',
                                                    reward:
                                                      'im:armor/engineers/helmet',
                                                    children: [
                                                      {
                                                        title:
                                                          'Brigandine Helmet',
                                                        description:
                                                          'upgrade to brigandine helmet',
                                                        item: 'rankine:brigandine_helmet',
                                                        reward:
                                                          'im:armor/brigandine/helmet',
                                                        children: [
                                                          {
                                                            title:
                                                              'Compressed Iron Helmet',
                                                            description:
                                                              'upgrade to compressed iron helmet',
                                                            item: 'pneumaticcraft:compressed_iron_helmet',
                                                            reward:
                                                              'im:armor/compressed_iron/helmet',
                                                            children: [
                                                              {
                                                                title:
                                                                  'Orichalcum Helmet',
                                                                description:
                                                                  'upgrade to orichalcum helmet',
                                                                item: 'charcoal_pit:orichalcum_helmet',
                                                                reward:
                                                                  'im:armor/orichalcum/helmet',
                                                                children: [
                                                                  {
                                                                    title:
                                                                      'Pneumatic Helmet',
                                                                    description:
                                                                      'upgrade to pneumatic helmet',
                                                                    item: 'pneumaticcraft:pneumatic_helmet',
                                                                    reward:
                                                                      'im:armor/pneumatic/helmet'
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {
                                                        title:
                                                          'Manasteel Helmet',
                                                        description:
                                                          'upgrade to manasteel helmet',
                                                        item: 'botania:manasteel_helmet',
                                                        reward:
                                                          'im:armor/manasteel/helmet',
                                                        children: [
                                                          {
                                                            title:
                                                              'Terrasteel Helmet',
                                                            description:
                                                              'upgrade to terrasteel helmet',
                                                            item: 'botania:terrasteel_helmet',
                                                            reward:
                                                              'im:armor/terrasteel/helmet',
                                                            children: [
                                                              {
                                                                title:
                                                                  'Elementium Helmet',
                                                                description:
                                                                  'upgrade to elementium helmet',
                                                                item: 'botania:elementium_helmet',
                                                                reward:
                                                                  'im:armor/elementium/helmet',
                                                                children: [
                                                                  {
                                                                    title:
                                                                      'Diamond Helmet',
                                                                    description:
                                                                      'upgrade to diamond helmet',
                                                                    item: 'minecraft:diamond_helmet',
                                                                    reward:
                                                                      'im:armor/diamond/helmet',
                                                                    children: [
                                                                      {
                                                                        title:
                                                                          'Mekasuit Helmet',
                                                                        description:
                                                                          'upgrade to mekasuit helmet',
                                                                        item: 'mekanism:mekasuit_helmet',
                                                                        reward:
                                                                          'im:armor/mekasuit/helmet'
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
