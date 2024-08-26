onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        {
          id: 'gateways',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                duration: 60,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/custom_ritual',
                },
                activation_item: {item: 'blue_skies:soul_fragment'},
                pentacle_id: 'occultism:summon_marid',
                ingredients: [
                  {
                    item: 'minecraft:wither_rose',
                  },
                  {
                    item: 'minecraft:crimson_fungus',
                  },
                  {
                    item: 'minecraft:warped_fungus',
                  },
                  {
                    item: 'minecraft:quartz',
                  },
                  {
                    item: 'minecraft:porkchop',
                  },
                  {
                    item: 'cataclysm:witherite_ingot',
                  },
                  {
                    item: 'rankine:carbon_dioxide_gas_bottle',
                  },
                  {
                    item: 'minecraft:porkchop',
                  },
                  {
                    item: 'cataclysm:witherite_ingot',
                  },
                  {
                    item: 'rankine:carbon_dioxide_gas_bottle',
                  },
                  {
                    item: 'occultism:iesnium_ingot',
                  },
                  {
                    item: 'minecraft:blaze_powder',
                  },
                ],
                result: {
                  item: 'gateways:gate_pearl',
                  nbt: '{gateway:"gateways:small_nether_gateway"}',
                },
              })
              .id('inconvenient:ritual_nether_gateway');
          },
          children: [],
        },
        {
          id: 'guidebooks',
          recipe: () => {
            // tinker's encyclopedia
          },
        },
        {
          id: 'end_eyes',
          recipe: () => {
            event
              .shaped('endrem:nether_eye', ['aba', 'bcb', 'aba'], {
                a: 'minecraft:nether_brick',
                b: 'minecraft:blaze_powder',
                c: 'bloodmagic:strong_tau',
              })
              .stage('eye_nether')
              .id('inconvenient:shaped_nether_eye');

            event
              .shaped('endrem:wither_eye', ['aba', 'bcb', 'aba'], {
                a: 'create:rose_quartz',
                b: 'kubejs:drop_of_tar',
                c: 'kubejs:inert_compound',
              })
              .stage('eye_wither')
              .id('inconvenient:shaped_wither_eye');
          },
        },
        {
          id: 'lost_stories',
          recipe: () => {
            event
              .shaped(`kubejs:nether_lost_story`, ['abb', 'bcc', 'bcc'], {
                a: 'paragon_textiles:silk',
                b: 'minecraft:leather',
                c: `kubejs:nether_lost_page`,
              })
              .id('inconvenient:shaped_nether_lost_story');
          },
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'minecraft:netherite_helmet_smithing',
              'minecraft:netherite_chestplate_smithing',
              'minecraft:netherite_leggings_smithing',
              'minecraft:netherite_boots_smithing',
              'cataclysm:smithing/ignitium_helmet',
              'cataclysm:smithing/ignitium_chestplate',
              'cataclysm:smithing/ignitium_leggings',
              'cataclysm:smithing/ignitium_boots',
              'hem:tophatrecipe',
              'hem:steampunkcoat',
              'hem:steampunkleggings',
              'hem:steampunkshoes',
            ].forEach(id => event.remove({id: id}));
            stageArmors(event, [
              {
                tier: 'cataclysm:ignitium',
                previousTier: 'minecraft:netherite',
                input: 'cataclysm:ignitium_ingot',
                stage: 'chapter_4',
                master: 'ignitium',
              },
              {
                tier: 'hem:steampunkoutfit',
                previousTier: 'cataclysm:ignitium',
                input: 'hem:copparite',
                stage: 'chapter_4',
                master: 'engineers',
              },
            ]);

            event
              .smithing(
                'minecraft:netherite_helmet',
                'minecraft:netherite_ingot',
                'twilightforest:fiery_helmet'
              )
              .id('inconvenient:smithing_netherite_helmet');
            event
              .smithing(
                'minecraft:netherite_chestplate',
                'minecraft:netherite_ingot',
                'twilightforest:fiery_chestplate'
              )
              .id('inconvenient:smithing_netherite_chestplate');
            event
              .smithing(
                'minecraft:netherite_leggings',
                'minecraft:netherite_ingot',
                'twilightforest:fiery_leggings'
              )
              .id('inconvenient:smithing_netherite_leggings');
            event
              .smithing(
                'minecraft:netherite_boots',
                'minecraft:netherite_ingot',
                'twilightforest:fiery_boots'
              )
              .id('inconvenient:smithing_netherite_boots');
          },
        },
        {
          id: 'totems',
          recipe: () => {
            [
              'rankine:totem_of_blazing',
              'rankine:totem_of_enduring',
              'rankine:totem_of_promising',
              'rankine:totem_of_softening',
            ].forEach(id => event.remove({id: id}));
            event
              .shaped('rankine:totem_of_blazing', ['aaa', 'aba', 'aaa'], {
                a: 'cataclysm:ignitium_ingot',
                b: 'botania:blaze_block',
              })
              .id('inconvenient:shaped_totem_of_blazing');
            event
              .shaped('rankine:totem_of_enduring', ['aaa', 'aba', 'aaa'], {
                a: 'undergarden:froststeel_ingot',
                b: 'undergarden:utherium_block',
              })
              .id('inconvenient:shaped_totem_of_enduring');
            event
              .shaped('rankine:totem_of_promising', ['aaa', 'aba', 'aaa'], {
                a: 'twilightforest:knightmetal_ingot',
                b: 'minecraft:lapis_block',
              })
              .id('inconvenient:shaped_totem_of_promising');

            event
              .shaped('rankine:totem_of_softening', ['aaa', 'aba', 'aaa'], {
                a: 'tconstruct:manyullyn_ingot',
                b: 'minecraft:quartz_block',
              })
              .id('inconvenient:shaped_totem_of_softening');
          },
        },
        {
          id: 'bricks',
          recipe: () => {
            [
              'tconstruct:smeltery/scorched/scorched_bricks_crafting',
              'tconstruct:smeltery/scorched/scorched_bricks_from_brick',
              'botania:livingrock_bricks',
            ].forEach(id => event.remove({id: id}));
            overrideBricksRecipes('chapter_4', event, [
              {
                output: 'tconstruct:scorched_bricks',
                input: 'tconstruct:scorched_brick',
              },
              {
                output: 'botania:livingrock_bricks',
                input: 'botania:livingrock',
              },
              {
                output: 'minecraft:nether_bricks',
                input: 'minecraft:nether_brick',
              },
              {
                output: 'minecraft:quartz_bricks',
                input: 'minecraft:quartz_block',
              },
              {
                output: 'architectspalette:hadaline_bricks',
                input: 'architectspalette:hadaline',
              },
              {
                output: 'architectspalette:esoterrack_bricks',
                input: 'architectspalette:esoterrack',
              },
              {
                output: 'architectspalette:onxy_bricks',
                input: 'architectspalette:onxy',
              },
              {
                output: 'malum:tainted_rock_bricks',
                input: 'malum:polished_tainted_rock',
              },
              {
                output: 'minecraft:basalt_bricks',
                input: 'minecraft:basalt',
              },
              {
                output: 'rankine:red_porphyry_bricks',
                input: 'rankine:red_porphyry',
              },
              {
                output: 'rankine:purple_porphyry_bricks',
                input: 'rankine:purple_porphyry',
              },
              {
                output: 'rankine:komatiite_bricks',
                input: 'rankine:komatiite',
              },
              {
                output: 'rankine:rose_marble_bricks',
                input: 'rankine:rose_marble',
              },
            ]);
          },
        },
      ],
    },

    {
      id: 'cobaltite',
      recipe: () => {
        event
          .custom({
            input: {item: 'rankine:cobaltite_ore'},
            type: 'rankine:crushing',
            guaranteed: [
              {
                item: 'rankine:cobaltite',
                count: 1,
                tier: 'minecraft:netherite',
              },
            ],
          })
          .id('inconvenient:crushing_cobaltite_ore');
      },
    },
    {
      id: 'iesnium',
      recipe: () => {
        event
          .custom({
            type: 'tconstruct:casting_table',
            result: 'occultism:iesnium_nugget',
            fluid: {name: 'kubejs:molten_iesnium', amount: 10},
            cast: {item: 'tconstruct:nugget_cast', cast_consumed: false},
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_iesnium_nugget');
        event
          .custom({
            type: 'tconstruct:casting_table',
            result: 'occultism:iesnium_ingot',
            fluid: {name: 'kubejs:molten_iesnium', amount: 90},
            cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_iesnium_ingot');
        event
          .custom({
            type: 'tconstruct:casting_basin',
            result: 'occultism:iesnium_block',
            cooling_time: 900,
            fluid: {name: 'kubejs:molten_iesnium', amount: 810},
          })
          .id('inconvenient:casting_basin_iesnium_block');
      },
      children: [
        {
          id: 'molten_iesnium',
          recipe: () => {
            event
              .custom({
                type: 'tconstruct:melting',
                ingredient: {item: 'occultism:raw_iesnium'},
                result: {fluid: 'kubejs:molten_iesnium', amount: 90},
                temperature: 605,
                time: 54,
              })
              .id('inconvenient:melting_raw_iesnium');
          },
          children: [
            {
              id: 'raw_iesnium',
              recipe: () => {
                event
                  .custom({
                    input: {item: 'occultism:iesnium_ore'},
                    type: 'rankine:crushing',
                    guaranteed: [
                      {
                        item: 'occultism:raw_iesnium',
                        count: 1,
                        tier: 'minecraft:netherite',
                      },
                    ],
                  })
                  .id('inconvenient:crushing_iesnium_ore');
              },
            },
          ],
        },
        {
          id: 'infused_pickaxe',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft_with_spirit_name',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_djinni',
                },
                pentacle_id: 'occultism:summon_marid',
                duration: 60,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_infused_pickaxe',
                },
                ingredients: [
                  {
                    tag: 'forge:rods/wooden',
                  },
                  {
                    tag: 'forge:rods/wooden',
                  },
                  {
                    item: 'occultism:spirit_attuned_pickaxe_head',
                  },
                  {
                    item: 'minecraft:netherite_ingot',
                  },
                  {
                    item: 'minecraft:gold_ingot',
                  },
                ],
                result: {
                  item: 'occultism:infused_pickaxe',
                },
              })
              .id('inconvenient:ritual_infused_pickaxe');
          },
        },
      ],
    },
    {
      id: 'dimensional_storage',
      children: [
        {
          id: 'dimensional_matrix',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft_with_spirit_name',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_djinni',
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 240,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_dimensional_matrix',
                },
                ingredients: [
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    tag: 'forge:storage_blocks/quartz',
                  },
                  {
                    tag: 'forge:storage_blocks/quartz',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                ],
                result: {
                  item: 'occultism:dimensional_matrix',
                },
              })
              .id('inconvenient:ritual_dimensional_matrix');
          },
        },
        {
          id: 'storage_stabilizer_4',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_marid',
                },
                pentacle_id: 'occultism:craft_marid',
                duration: 240,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_stabilizer_tier4',
                },
                ingredients: [
                  {
                    item: 'occultism:storage_stabilizer_tier3',
                  },
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    item: 'rankine:carbon_block',
                  },
                  {
                    item: 'create:refined_radiance',
                  },
                  {
                    item: 'create:shadow_steel',
                  },
                  {
                    item: 'bloodmagic:demonslate',
                  },
                ],
                result: {
                  item: 'occultism:storage_stabilizer_tier4',
                },
              })
              .id('inconvenient:ritual_storage_stabilizer_4');
          },
          children: [
            {
              id: 'storage_stabilizer_3',
              recipe: () => {
                event
                  .custom({
                    type: 'occultism:ritual',
                    ritual_type: 'occultism:craft',
                    activation_item: {
                      item: 'occultism:book_of_binding_bound_afrit',
                    },
                    pentacle_id: 'occultism:craft_afrit',
                    duration: 240,
                    ritual_dummy: {
                      item: 'occultism:ritual_dummy/craft_stabilizer_tier3',
                    },
                    ingredients: [
                      {
                        item: 'occultism:storage_stabilizer_tier2',
                      },
                      {
                        item: 'cataclysm:witherite_block',
                      },
                      {
                        item: 'occultism:iesnium_block',
                      },
                      {
                        item: 'occultism:iesnium_block',
                      },
                      {
                        item: 'occultism:iesnium_block',
                      },
                      {
                        item: 'minecraft:nether_star',
                      },
                      {
                        item: 'minecraft:gunpowder',
                      },
                      {
                        item: 'create:chromatic_compound',
                      },
                    ],
                    result: {
                      item: 'occultism:storage_stabilizer_tier3',
                    },
                  })
                  .id('inconvenient:ritual_storage_stabilizer_3');
              },
              children: [
                {
                  id: 'storage_stabilizer_2',
                  recipe: () => {
                    event
                      .custom({
                        type: 'occultism:ritual',
                        ritual_type: 'occultism:craft',
                        activation_item: {
                          item: 'occultism:book_of_binding_bound_djinni',
                        },
                        pentacle_id: 'occultism:craft_djinni',
                        duration: 240,
                        ritual_dummy: {
                          item: 'occultism:ritual_dummy/craft_stabilizer_tier2',
                        },
                        ingredients: [
                          {
                            item: 'occultism:storage_stabilizer_tier1',
                          },
                          {
                            item: 'cataclysm:ignitium_block',
                          },
                          {
                            item: 'occultism:iesnium_block',
                          },
                          {
                            item: 'occultism:iesnium_block',
                          },
                          {
                            item: 'minecraft:ghast_tear',
                          },
                          {
                            item: 'rankine:vulcanized_rubber',
                          },
                          {
                            item: 'occultism:spirit_attuned_gem',
                          },
                        ],
                        result: {
                          item: 'occultism:storage_stabilizer_tier2',
                        },
                      })
                      .id('inconvenient:ritual_storage_stabilizer_2');
                  },
                  children: [
                    {
                      id: 'storage_stabilizer_1',
                      recipe: () => {
                        event
                          .custom({
                            type: 'occultism:ritual',
                            ritual_type: 'occultism:craft',
                            activation_item: {
                              item: 'occultism:book_of_binding_bound_foliot',
                            },
                            pentacle_id: 'occultism:craft_foliot',
                            duration: 120,
                            ritual_dummy: {
                              item: 'occultism:ritual_dummy/craft_stabilizer_tier1',
                            },
                            ingredients: [
                              {
                                item: 'occultism:otherstone_pedestal',
                              },
                              {
                                item: 'tconstruct:pig_iron_block',
                              },
                              {
                                item: 'occultism:iesnium_block',
                              },
                              {
                                item: 'minecraft:blaze_powder',
                              },
                              {
                                item: 'occultism:spirit_attuned_gem',
                              },
                            ],
                            result: {
                              item: 'occultism:storage_stabilizer_tier1',
                            },
                          })
                          .id('inconvenient:ritual_storage_stabilizer_1');
                      },
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'storage_remote',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_djinni',
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 120,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_storage_remote',
                },
                ingredients: [
                  {
                    item: 'occultism:storage_remote_inert',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    tag: 'forge:gems/quartz',
                  },
                ],
                result: {
                  item: 'occultism:storage_remote',
                },
              })
              .id('inconvenient:ritual_storage_remote');
          },
        },
        {
          id: 'stable_wormhole',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_foliot',
                },
                pentacle_id: 'occultism:craft_foliot',
                duration: 120,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_stable_wormhole',
                },
                ingredients: [
                  {
                    item: 'occultism:wormhole_frame',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    tag: 'forge:gems/quartz',
                  },
                  {
                    tag: 'forge:gems/quartz',
                  },
                ],
                result: {
                  item: 'occultism:stable_wormhole',
                },
              })
              .id('inconvenient:ritual_stable_wormhole');
          },
        },
      ],
    },
    {
      id: 'slates',
      recipe: () => {
        ['bloodmagic:altar/etherealslate'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'bloodmagic:altar',
            input: {
              item: 'bloodmagic:demonslate',
            },
            output: {
              item: 'bloodmagic:etherealslate',
            },
            upgradeLevel: 4,
            altarSyphon: 100000,
            consumptionRate: 1000,
            drainRate: 1000,
          })
          .id('inconvenient:altar_etherealslate');
      },
    },
    {
      id: 'chipped_tables',
      recipe: () => {
        event
          .shaped(`chipped:carpenters_table`, ['  a', 'bcb', 'deb'], {
            a: `minecraft:iron_ingot`,
            b: '#minecraft:logs',
            c: 'minecraft:crafting_table',
            d: 'rankine:sawdust',
            e: '#minecraft:planks',
          })
          .id('inconvenient:shaped_carpenters_table');
      },
    },
    {
      id: 'building_wands',
      recipe: () => {
        event.replaceInput(
          {output: 'constructionwand:diamond_wand'},
          'minecraft:diamond',
          'minecraft:gold_ingot'
        );
        event.replaceInput(
          {output: 'constructionwand:core_destruction'},
          'minecraft:diamond_pickaxe',
          'minecraft:netherite_pickaxe'
        );
        event.replaceInput(
          {output: 'constructionwand:core_destruction'},
          'minecraft:diamond_block',
          'minecraft:gold_block'
        );
      },
    },
    {
      id: 'teleportation',
      recipe: () => {
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:craft',
            activation_item: {
              item: 'occultism:book_of_binding_bound_marid',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            ritual_dummy: {
              item: 'occultism:ritual_dummy/custom_ritual',
            },
            ingredients: [
              {
                item: 'tconstruct:manyullyn_ingot',
              },
              {
                item: 'tconstruct:manyullyn_ingot',
              },
              {
                item: 'tconstruct:manyullyn_ingot',
              },
              {
                item: 'tconstruct:manyullyn_ingot',
              },
              {
                item: 'waystones:warp_dust',
              },
              {
                item: 'waystones:warp_dust',
              },
              {
                item: 'waystones:warp_dust',
              },
              {
                item: 'waystones:warp_dust',
              },
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'create:chromatic_compound',
              },
            ],
            result: {
              item: 'waystones:warp_stone',
            },
          })
          .id('inconvenient:ritual_warp_stone');

        event
          .custom({
            results: [{count: 4, item: 'waystones:warp_dust'}],
            type: 'create:crushing',
            processingTime: 250,
            ingredients: [{item: 'create:chromatic_compound'}],
          })
          .id('inconvenient:crushing_wheel_warp_dust');

        event.replaceInput(
          {
            output: ['waystones:warp_scroll', 'waystones:bound_scroll'],
          },
          'minecraft:ender_pearl',
          'waystones:warp_dust'
        );
      },
      children: [],
    },
    {
      id: 'chunkloaders',
      recipe: () => {
        event
          .custom({
            type: 'bloodmagic:altar',
            input: {
              item: 'bloodmagic:strong_tau',
            },
            output: {
              item: 'chunkloaders:single_chunk_loader',
            },
            upgradeLevel: 3,
            altarSyphon: 10000,
            consumptionRate: 10,
            drainRate: 10,
          })
          .id('inconvenient:altar_single_chunk_loader');
        ['chunkloaders:ultimate_chunk_loader'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'bloodmagic:altar',
            input: {
              item: 'chunkloaders:advanced_chunk_loader',
            },
            output: {
              item: 'chunkloaders:ultimate_chunk_loader',
            },
            upgradeLevel: 4,
            altarSyphon: 200000,
            consumptionRate: 200,
            drainRate: 200,
          })
          .id('inconvenient:altar_ultimate_chunk_loader');
      },
    },

    {
      id: 'xp_crystal',
      recipe: () => {
        event
          .custom({
            type: 'occultism:ritual',
            activation_item: {item: 'minecraft:amethyst_shard'},
            pentacle_id: 'occultism:craft_marid',
            ritual_type: 'occultism:craft',
            ingredients: [
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'charcoal_pit:prismarine_dust',
              },
              {
                item: 'charcoal_pit:prismarine_dust',
              },
            ],
            ritual_dummy: {
              item: 'occultism:ritual_dummy/custom_ritual',
            },
            result: {
              item: 'charcoal_pit:xp_crystal',
            },
          })
          .id('inconvenient:ritual_xp_crystal');
      },
    },
    {
      id: 'familiars',
      recipe: () => {
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:bats',
              display_name: 'ritual.occultism.sacrifice.bats',
            },
            entity_to_summon: 'occultism:bat_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_bat',
            },
            ingredients: [
              {
                item: 'minecraft:golden_carrot',
              },
              {
                item: 'minecraft:spider_eye',
              },
              {
                item: 'minecraft:glowstone',
              },
              {
                item: 'rankine:sulfur',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:torch',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_bat_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_foliot',
            },
            pentacle_id: 'occultism:possess_foliot',
            duration: 30,
            entity_to_summon: 'occultism:beaver_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_beaver',
            },
            ingredients: [
              {
                tag: 'minecraft:saplings',
              },
              {
                tag: 'minecraft:saplings',
              },
              {
                tag: 'minecraft:saplings',
              },
              {
                tag: 'minecraft:saplings',
              },
              {
                item: 'minecraft:crimson_fungus',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_beaver_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:spiders',
              display_name: 'ritual.occultism.sacrifice.spiders',
            },
            entity_to_summon: 'occultism:beholder_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_beholder',
            },
            ingredients: [
              {
                item: 'minecraft:spider_eye',
              },
              {
                item: 'minecraft:spider_eye',
              },
              {
                item: 'minecraft:spider_eye',
              },
              {
                item: 'minecraft:spider_eye',
              },
              {
                tag: 'forge:dusts/glowstone',
              },
              {
                tag: 'forge:dusts/glowstone',
              },
              {
                tag: 'forge:dusts/glowstone',
              },
              {
                tag: 'forge:dusts/glowstone',
              },
              {
                item: 'rankine:sulfur',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_beholder_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_foliot',
            },
            pentacle_id: 'occultism:possess_foliot',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:zombies',
              display_name: 'ritual.occultism.sacrifice.zombies',
            },
            entity_to_summon: 'occultism:blacksmith_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_blacksmith',
            },
            ingredients: [
              {
                item: 'minecraft:golden_shovel',
              },
              {
                item: 'minecraft:golden_pickaxe',
              },
              {
                item: 'minecraft:golden_axe',
              },
              {
                item: 'minecraft:anvil',
              },
              {
                tag: 'forge:stone',
              },
              {
                tag: 'forge:stone',
              },
              {
                tag: 'forge:stone',
              },
              {
                tag: 'forge:stone',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_blacksmith_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:chimera_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_chimera',
            },
            ingredients: [
              {
                tag: 'forge:leather',
              },
              {
                tag: 'forge:string',
              },
              {
                tag: 'forge:feathers',
              },
              {
                tag: 'forge:bones',
              },
              {
                item: 'farmersdelight:ham',
              },
              {
                item: 'minecraft:porkchop',
              },
              {
                item: 'minecraft:chicken',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_chimera_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:squid',
              display_name: 'ritual.occultism.sacrifice.squid',
            },
            entity_to_summon: 'occultism:cthulhu_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_cthulhu',
            },
            ingredients: [
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                item: 'farmersrespite:purulent_tea',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_cthulhu_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_foliot',
            },
            pentacle_id: 'occultism:possess_foliot',
            duration: 15,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:deer_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_deer',
            },
            ingredients: [
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:string',
              },
              {
                tag: 'forge:string',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_deer_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:devil_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_devil',
            },
            ingredients: [
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                tag: 'forge:bones',
              },
              {
                tag: 'forge:bones',
              },
              {
                tag: 'forge:bones',
              },
              {
                tag: 'forge:bones',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_devil_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:dragon_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_dragon',
            },
            ingredients: [
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:flint_and_steel',
              },
              {
                tag: 'forge:storage_blocks/coal',
              },
              {
                tag: 'forge:storage_blocks/quartz',
              },
              {
                tag: 'forge:storage_blocks/gold',
              },
              {
                tag: 'forge:gunpowder',
              },
              {
                tag: 'forge:obsidian',
              },
              {
                tag: 'forge:obsidian',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_dragon_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:horses',
              display_name: 'ritual.occultism.sacrifice.horses',
            },
            entity_to_summon: 'occultism:fairy_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_fairy',
            },
            ingredients: [
              {
                item: 'minecraft:golden_apple',
              },
              {
                item: 'minecraft:golden_apple',
              },
              {
                item: 'minecraft:ghast_tear',
              },
              {
                item: 'minecraft:gunpowder',
              },
              {
                item: 'minecraft:gunpowder',
              },
              {
                item: 'minecraft:gunpowder',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_fairy_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_foliot',
            },
            pentacle_id: 'occultism:possess_foliot',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:zombies',
              display_name: 'ritual.occultism.sacrifice.zombies',
            },
            entity_to_summon: 'occultism:greedy_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_greedy',
            },
            ingredients: [
              {
                tag: 'forge:chests',
              },
              {
                tag: 'forge:storage_blocks/gold',
              },
              {
                item: 'minecraft:dispenser',
              },
              {
                item: 'minecraft:hopper',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_greedy_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_afrit',
            },
            pentacle_id: 'occultism:possess_afrit',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'occultism:humans',
              display_name: 'ritual.occultism.sacrifice.humans',
            },
            entity_to_summon: 'occultism:guardian_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_guardian',
            },
            ingredients: [
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'minecraft:golden_apple',
              },
              {
                item: 'minecraft:golden_apple',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_guardian_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:golems/snow',
              display_name: 'ritual.occultism.sacrifice.snow_golem',
            },
            entity_to_summon: 'occultism:headless_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_headless',
            },
            ingredients: [
              {
                item: 'kubejs:wheat',
              },
              {
                item: 'kubejs:wheat',
              },
              {
                item: 'minecraft:hay_block',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                item: 'minecraft:carved_pumpkin',
              },
              {
                item: 'minecraft:warped_fungus',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_headless_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:mummy_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_mummy',
            },
            ingredients: [
              {
                tag: 'forge:slimeballs',
              },
              {
                tag: 'forge:slimeballs',
              },
              {
                item: 'minecraft:paper',
              },
              {
                item: 'minecraft:paper',
              },
              {
                item: 'rankine:gun_cotton',
              },
              {
                item: 'rankine:gun_cotton',
              },
              {
                item: 'rankine:gun_cotton',
              },
              {
                item: 'rankine:gun_cotton',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_mummy_familiar');
      },
    },
    {
      id: 'soul_gem',
      recipe: () => {
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:craft',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:craft_djinni',
            duration: 60,
            ritual_dummy: {
              item: 'occultism:ritual_dummy/craft_soul_gem',
            },
            ingredients: [
              {
                item: 'create:chromatic_compound',
              },
              {
                tag: 'forge:ingots/copper',
              },
              {
                tag: 'forge:ingots/silver',
              },
              {
                tag: 'forge:ingots/gold',
              },
              {
                tag: 'forge:ingots/iesnium',
              },
              {
                item: 'minecraft:soul_sand',
              },
              {
                item: 'minecraft:soul_sand',
              },
              {
                item: 'minecraft:soul_sand',
              },
              {
                item: 'minecraft:soul_sand',
              },
            ],
            result: {
              item: 'occultism:soul_gem',
            },
          })
          .id('inconvenient:ritual_soul_gem');
      },
    },
    {
      id: 'soulspring_lamp',
      recipe: () => {
        ['cold_sweat:soulspring_lamp'].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'cold_sweat:soulspring_lamp',
            },
            pattern: [' a ', 'bcb', ' d '],
            key: {
              a: 'tconstruct:slimesteel_nugget',
              b: 'twilightforest:knightmetal_ingot',
              c: 'minecraft:soul_lantern',
              d: 'minecraft:chain',
            },
          })
          .id('inconvenient:basic_table_soulspring_lamp');
      },
      children: [],
    },
    {
      id: 'advanced_auto_table',
      recipe: () => {
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'extendedcrafting:basic_auto_table',
            },
            pattern: ['aba', 'cdc', 'aba'],
            key: {
              a: 'extendedcrafting:black_iron_ingot',
              b: 'extendedcrafting:redstone_component',
              c: 'extendedcrafting:redstone_catalyst',
              d: 'extendedcrafting:basic_table',
            },
          })
          .id('inconvenient:basic_table_basic_auto_table');
      },
    },
    {
      id: 'routing',
      recipe: () => {
        ['bloodmagic:soulforge/master_routing_node'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'bloodmagic:soulforge',
            output: {item: 'bloodmagic:masterroutingnode'},
            input0: {item: 'minecraft:iron_block'},
            input1: {item: 'create:rose_quartz'},
            input2: {item: 'bloodmagic:infusedslate'},
            minimumDrain: 400,
            drain: 200,
          })
          .id('inconvenient:soul_forge_masterroutingnode');
      },
    },
  ]);

  // event.remove({
  //   output: [
  //     'hexerei:book_of_shadows',
  //     `create:controls`,
  //     'bloodmagic:alchemytable',
  //     `chipped:carpenters_table`,
  //     `create:electron_tube`,
  //     'bloodmagic:bloodstonebrick',
  //     `cataclysm:witherite_block`,
  //     `rankine:alloy_furnace`,
  //     'rankine:glass_cutter',
  //   ],
  //   type: 'minecraft:crafting_shaped',
  // });

  event
    .shaped('hexerei:book_of_shadows', ['aba', 'cde', 'aaa'], {
      a: `minecraft:leather`,
      b: 'architects_palette:twisted_sapling',
      c: 'hexerei:animal_fat',
      d: 'minecraft:book',
      e: 'hexerei:sage_seed',
    })
    .id('inconvenient:shaped_book_of_shadows');
  event
    .shaped(`create:controls`, ['a', 'b', 'c'], {
      a: `minecraft:lever`,
      b: 'create:railway_casing',
      c: 'create:electron_tube',
    })
    .id('inconvenient:shaped_controls');

  event
    .shaped(`cataclysm:witherite_block`, ['aaa', 'aaa', 'aaa'], {
      a: `cataclysm:witherite_ingot`,
    })
    .id('inconvenient:shaped_witherite_block');

  event
    .shaped('rankine:glass_cutter', [' aa', ' ba', 'b  '], {
      a: 'minecraft:quartz',
      b: 'rankine:black_gold_ingot',
    })
    .id('inconvenient:shaped_glass_cutter');
});

onEvent('server.datapack.high_priority', event => {
  // Nether
  registerGateways(event, {
    id: 'nether',
    color: '#D92C32',
    dimension: 'the Nether',
    waves: [
      {
        type: 'mob',
        entities: ['minecraft:magma_cube'],
      },
      {
        type: 'mob',
        entities: ['minecraft:wither_skeleton'],
      },
      {
        type: 'mob',
        entities: ['minecraft:ghast'],
      },
      {
        type: 'boss',
        entities: ['minecraft:wither'],
      },
      {
        type: 'mob',
        entities: ['minecraft:blaze'],
      },
      {
        type: 'boss',
        entities: ['cataclysm:ignited_revenant'],
      },
      {
        type: 'boss',
        entities: ['cataclysm:ignis'],
      },
      {
        type: 'group',
        entities: ['minecraft:hoglin', 'minecraft:zoglin'],
      },
      {
        type: 'mob',
        entities: ['minecraft:zombified_piglin'],
      },
      {
        type: 'group',
        entities: ['minecraft:piglin', 'minecraft:piglin_brute'],
      },
      {
        type: 'boss',
        entities: ['cataclysm:netherite_monstrosity'],
      },
    ],
    restorations: [{id: 'minecraft:pig', name: 'pig'}],
    relics: [
      'relics:magma_walker',
      'relics:bastion_ring',
      'relics:blazing_flask',
      'artifacts:fire_gauntlet',
      'artifacts:flame_pendant',
      'artifacts:obsidian_skull',
    ],
    rewards: [{id: 'kubejs:nether_token', count: 1}],
  });
});
