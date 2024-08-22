onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      children: [
        {
          id: 'totems',
          recipe: () => {
            ['rankine:totem_of_cobbling'].forEach(id => event.remove({id: id}));
          },
        },
        {id: 'gateways', recipe: () => {}},
        {
          id: 'guidebooks',
          recipe: () => {
            // tinkers_gadgetry
            // traveller's logbook
            // sanguine scientiem
            // extended crafting
          },
        },
        {
          id: 'end_eyes',
          recipe: () => {
            event
              .shaped('endrem:undead_eye', ['aba', 'bcb', 'aba'], {
                a: 'naturesaura:infused_iron',
                b: 'endrem:undead_soul',
                c: 'undergarden:forgotten_nugget',
              })
              .stage('eye_undead')
              .id('inconvenient:undead_eye');

            event
              .shaped('endrem:corrupted_eye', ['aba', 'bcb', 'aba'], {
                a: 'blue_skies:horizonite_ingot',
                b: 'malum:processed_soulstone',
                c: 'bloodmagic:infusedslate',
              })
              .stage('eye_corrupted')
              .id('inconvenient:corrupted_eye');

            event
              .shaped('endrem:evil_eye', ['aba', 'bcb', 'aba'], {
                a: 'malum:wicked_spirit',
                b: 'create:powdered_obsidian',
                c: 'charcoal_pit:nether_shard',
              })
              .stage('eye_evil')
              .id('inconvenient:evil_eye');

            event
              .shaped('endrem:lost_eye', ['aba', 'bcb', 'aba'], {
                a: 'create:andesite_alloy',
                b: 'kubejs:cinder_dust',
                c: 'twilightforest:carminite',
              })
              .stage('eye_lost')
              .id('inconvenient:lost_eye');
          },
        },
        {
          id: 'lost_stories',
          recipe: () => {
            ['undergarden', 'everdawn', 'twilight'].forEach(dimension => {
              event
                .shaped(
                  `kubejs:${dimension}_lost_story`,
                  ['abb', 'bcc', 'bcc'],
                  {
                    a: 'paragon_textiles:silk',
                    b: 'minecraft:leather',
                    c: `kubejs:${dimension}_lost_page`,
                  }
                )
                .stage('chapter_3');
            });
          },
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'blue_skies:horizonite_helmet',
              'blue_skies:horizonite_chestplate',
              'blue_skies:horizonite_leggings',
              'blue_skies:horizonite_boots',
              'twilightforest:equipment/fiery_helmet',
              'twilightforest:equipment/fiery_iron_helmet',
              'twilightforest:equipment/fiery_chestplate',
              'twilightforest:equipment/fiery_iron_chestplate',
              'twilightforest:equipment/fiery_leggings',
              'twilightforest:equipment/fiery_iron_leggings',
              'twilightforest:equipment/fiery_boots',
              'twilightforest:equipment/fiery_iron_boots',
              'undergarden:utherium_helmet',
              'undergarden:utherium_chestplate',
              'undergarden:utherium_leggings',
              'undergarden:utherium_boots',
            ].forEach(id => event.remove({id: id}));
            stageArmors(event, [
              {
                tier: 'undergarden:utherium',
                previousTier: 'blue_skies:charoite',
                input: 'undergarden:utherium_crystal',
                stage: 'chapter_3',
                master: 'utherium',
              },
              {
                tier: 'blue_skies:horizonite',
                previousTier: 'undergarden:utherium',
                input: 'blue_skies:horizonite_ingot',
                stage: 'chapter_3',
                master: 'horizonite',
              },
              {
                tier: 'twilightforest:fiery',
                previousTier: 'malum:soul_stained_steel',
                input: 'twilightforest:fiery_ingot',
                stage: 'chapter_3',
                master: 'fiery',
              },
            ]);

            ['helmet', 'chestplate', 'leggings', 'boots'].forEach(armor => {
              event.custom({
                type: 'malum:spirit_infusion',
                input: {item: `blue_skies:horizonite_${armor}`},
                output: {item: `malum:soul_stained_steel_${armor}`},
                extra_items: [
                  {
                    item: 'malum:soul_stained_steel_ingot',
                    count: 4,
                  },
                  {
                    item: 'malum:hex_ash',
                    count: 1,
                  },
                  {
                    item: 'malum:processed_soulstone',
                    count: 2,
                  },
                  {
                    item: 'malum:twisted_rock',
                    count: 8,
                  },
                ],
                spirits: [
                  {
                    type: 'earthen',
                    count: 8,
                  },
                  {
                    type: 'wicked',
                    count: 4,
                  },
                  {
                    type: 'arcane',
                    count: 2,
                  },
                ],
              });
            });

            event.custom({
              type: 'bloodmagic:array',
              texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
              baseinput: {item: 'bloodmagic:reagentbinding'},
              addedinput: {item: 'cataclysm:ignitium_helmet'},
              output: {item: 'bloodmagic:livinghelmet'},
            });
            event.custom({
              type: 'bloodmagic:array',
              texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
              baseinput: {item: 'bloodmagic:reagentbinding'},
              addedinput: {item: 'cataclysm:ignitium_chestplate'},
              output: {item: 'bloodmagic:livingplate'},
            });
            event.custom({
              type: 'bloodmagic:array',
              texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
              baseinput: {item: 'bloodmagic:reagentbinding'},
              addedinput: {item: 'cataclysm:ignitium_leggings'},
              output: {item: 'bloodmagic:livingleggings'},
            });
            event.custom({
              type: 'bloodmagic:array',
              texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
              baseinput: {item: 'bloodmagic:reagentbinding'},
              addedinput: {item: 'cataclysm:ignitium_boots'},
              output: {item: 'bloodmagic:livingboots'},
            });
            event.custom({
              type: 'bloodmagic:array',
              texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
              baseinput: {item: 'bloodmagic:reagentbinding'},
              addedinput: {item: 'cataclysm:ignitium_ingot'},
              output: {item: 'bloodmagic:upgradetrainer'},
            });
          },
        },
      ],
    },

    {
      id: 'rankine_totems',
      recipe: () => {
        event.shaped('rankine:totem_of_timesaving', ['aaa', 'aba', 'aaa'], {
          a: 'twilightforest:ironwood_ingot',
          b: 'tconstruct:slimesteel_block',
        });
        event.shaped('rankine:totem_of_enduring', ['aaa', 'aba', 'aaa'], {
          a: 'undergarden:froststeel_ingot',
          b: 'undergarden:utherium_block',
        });
        event.shaped('rankine:totem_of_promising', ['aaa', 'aba', 'aaa'], {
          a: 'twilightforest:knightmetal_ingot',
          b: 'minecraft:lapis_block',
        });
      },
    },

    {id: 'chests', recipe: () => {}},
    {
      id: 'briggs',
      recipe: () => {
        overworldWoods.forEach(wood => {
          event.custom({
            type: 'extendedcrafting:shaped_table',
            pattern: ['aba', 'cbc', 'ddd'],
            key: {
              a: {item: 'minecraft:lead'},
              b: {item: 'ironchest:copper_chest'},
              c: {item: 'smallships:sail'},
              d: {item: `smallships:${wood}_cog`},
            },
            result: {item: `smallships:${wood}_brigg`},
          });
        });
      },
    },
    {
      id: 'magician_blood_orb',
      recipe: () => {
        event.custom({
          type: 'bloodmagic:altar',
          output: {
            item: 'bloodmagic:magicianbloodorb',
          },
          input: {
            item: 'twilightforest:fiery_block',
          },
          altarSyphon: 100000,
          upgradeLevel: 2,
          consumptionRate: 20,
          drainRate: 20,
        });
      },
      children: [
        {
          id: 'apprentice_blood_orb',
          recipe: () => {
            event.custom({
              type: 'bloodmagic:altar',
              output: {
                item: 'bloodmagic:apprenticebloodorb',
              },
              input: {
                item: 'tconstruct:slimesteel_block',
              },
              altarSyphon: 50000,
              upgradeLevel: 1,
              consumptionRate: 50,
              drainRate: 50,
            });
          },
          children: [
            {
              id: 'weak_blood_orb',
              recipe: () => {
                event.custom({
                  type: 'bloodmagic:altar',
                  output: {
                    item: 'bloodmagic:weakbloodorb',
                  },
                  input: {
                    item: 'undergarden:utherium_crystal',
                  },
                  altarSyphon: 5000,
                  upgradeLevel: 0,
                  consumptionRate: 5,
                  drainRate: 5,
                });
              },
            },
          ],
        },
      ],
    },
    {
      id: 'incense',
      recipe: () => {
        event.replaceInput(
          {
            output: ['bloodmagic:incensealtar'],
          },
          '#forge:stone',
          'rankine:shale'
        );
      },
    },
    {
      id: 'advanced_chunk_loader',
      recipe: () => {
        event.custom({
          type: 'bloodmagic:altar',
          input: {
            item: 'chunkloaders:basic_chunk_loader',
          },
          output: {
            item: 'chunkloaders:advanced_chunk_loader',
          },
          upgradeLevel: 3,
          altarSyphon: 100000,
          consumptionRate: 100,
          drainRate: 100,
        });
      },
      children: [
        {
          id: 'basic_chunk_loader',
          recipe: () => {
            event.custom({
              type: 'bloodmagic:altar',
              input: {
                item: 'chunkloaders:single_chunk_loader',
              },
              output: {
                item: 'chunkloaders:basic_chunk_loader',
              },
              upgradeLevel: 3,
              altarSyphon: 30000,
              consumptionRate: 30,
              drainRate: 30,
            });
          },
          children: [
            {
              id: 'single_chunkloader',
              recipe: () => {
                event.custom({
                  type: 'bloodmagic:altar',
                  input: {
                    item: 'charcoal_pit:nether_shard',
                  },
                  output: {
                    item: 'chunkloaders:single_chunk_loader',
                  },
                  upgradeLevel: 2,
                  altarSyphon: 15000,
                  consumptionRate: 5,
                  drainRate: 5,
                });
              },
              children: [
                {
                  id: 'nether_shard',
                  recipe: () => {
                    ['charcoal_pit:nether_shard'].forEach(id =>
                      event.remove({id: id})
                    );
                    event
                      .custom({
                        type: 'hexerei:pestle_and_mortar',
                        output: {item: 'charcoal_pit:nether_shard', count: 3},
                        ingredients: [
                          {
                            item: 'minecraft:nether_star',
                          },
                        ],
                        grindingTime: 300,
                      })
                      .id('inconvenient:nether_shard');
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'surprisingly_substantial_satchel',
      recipe: () => {
        event.custom({
          type: 'occultism:ritual',
          ritual_type: 'occultism:craft_with_spirit_name',
          activation_item: {
            item: 'occultism:book_of_binding_bound_foliot',
          },
          pentacle_id: 'occultism:craft_foliot',
          duration: 240,
          ritual_dummy: {
            item: 'occultism:ritual_dummy/craft_satchel',
          },
          ingredients: [
            {
              item: 'ecofriendly:recycled_carrier_bag_ym',
            },
            {
              tag: 'forge:leather',
            },
            {
              tag: 'forge:leather',
            },
            {
              tag: 'forge:string',
            },
            {
              tag: 'forge:ingots/silver',
            },
            {
              item: 'create:powdered_obsidian',
            },
            {
              item: 'create:powdered_obsidian',
            },
          ],
          result: {
            item: 'occultism:satchel',
          },
        });
      },
    },
    {
      id: 'prideweave',
      recipe: () => {
        [
          'malum:pride_prideweave',
          'malum:plural_prideweave',
          'malum:ace_prideweave',
          'malum:lesbian_prideweave',
          'malum:demigirl_prideweave',
          'malum:intersex_prideweave',
          'malum:genderfluid_prideweave',
          'malum:poly_prideweave',
          'malum:pan_prideweave',
          'malum:enby_prideweave',
          'malum:aroace_prideweave',
          'malum:demiboy_prideweave',
          'malum:trans_prideweave',
          'malum:genderqueer_prideweave',
          'malum:gay_prideweave',
          'malum:bi_prideweave',
        ].forEach(id => event.remove({id: id}));

        event.shapeless('malum:pride_prideweave', [
          'malum:esoteric_spool',
          'undergarden:regalium_crystal',
        ]);

        event.shapeless('malum:genderfluid_prideweave', [
          'malum:esoteric_spool',
          'minecraft:lapis_lazuli',
        ]);

        event.shapeless('malum:demiboy_prideweave', [
          'malum:esoteric_spool',
          'blue_skies:moonstone',
        ]);

        event.shapeless('malum:ace_prideweave', [
          'malum:esoteric_spool',
          'rankine:galena',
        ]);

        event.shapeless('malum:plural_prideweave', [
          'malum:esoteric_spool',
          'rankine:malachite',
        ]);

        event.shapeless('malum:lesbian_prideweave', [
          'malum:esoteric_spool',
          'undergarden:utherium_crystal',
        ]);

        event.shapeless('malum:demigirl_prideweave', [
          'malum:esoteric_spool',
          'blue_skies:pyrope_gem',
        ]);

        event.shapeless('malum:intersex_prideweave', [
          'malum:esoteric_spool',
          'blue_skies:raw_horizonite',
        ]);

        event.shapeless('malum:poly_prideweave', [
          'malum:esoteric_spool',
          'blue_skies:diopside_gem',
        ]);

        event.shapeless('malum:pan_prideweave', [
          'malum:esoteric_spool',
          'blue_skies:raw_ventium',
        ]);

        event.shapeless('malum:enby_prideweave', [
          'malum:esoteric_spool',
          'blue_skies:raw_charoite',
        ]);

        event.shapeless('malum:aroace_prideweave', [
          'malum:esoteric_spool',
          'rankine:acanthite',
        ]);

        event.shapeless('malum:trans_prideweave', [
          'malum:esoteric_spool',
          'undergarden:raw_froststeel',
        ]);

        event.shapeless('malum:genderqueer_prideweave', [
          'malum:esoteric_spool',
          'minecraft:amethyst_cluster',
        ]);

        event.shapeless('malum:gay_prideweave', [
          'malum:esoteric_spool',
          'blue_skies:raw_aquite',
        ]);

        event.shapeless('malum:bi_prideweave', [
          'malum:esoteric_spool',
          'blue_skies:raw_falsite',
        ]);
      },
      children: [
        {
          id: 'weavers_workbench',
          recipe: () => {
            event.replaceInput(
              {
                output: 'malum:weavers_workbench',
              },
              'minecraft:gold_ingot',
              'blue_skies:horizonite_ingot'
            );
          },
        },
      ],
    },
    {
      id: 'depthrock_bed',
      recipe: () => {
        event.shaped('undergarden:depthrock_bed', ['aaa', 'bbb'], {
          a: 'undergarden:mogmoss',
          b: '#minecraft:planks',
        });
      },
    },
    {
      id: 'paper',
      recipe: () => {
        event.remove({output: 'minecraft:paper'});
        event.custom({
          type: 'hexerei:drying_rack',
          ingredients: [
            {
              item: 'rankine:pulp',
            },
          ],
          output: {
            item: 'minecraft:paper',
          },
          dryingTimeInTicks: 1800,
        });
      },
      children: [
        {
          id: 'pulp',
          recipe: () => {
            event.custom({
              type: 'hexerei:mixingcauldron',
              ingredients: [
                {
                  item: 'rankine:fire_clay_ball',
                },
                {
                  item: 'rankine:sawdust',
                },
                {
                  item: 'rankine:sawdust',
                },
                {
                  item: 'rankine:sawdust',
                },
                {
                  item: 'rankine:sawdust',
                },
                {
                  item: 'rankine:sawdust',
                },
                {
                  item: 'rankine:sawdust',
                },
                {
                  item: 'rankine:sawdust',
                },
              ],
              liquid: {
                fluid: 'minecraft:water',
              },
              liquidOutput: {
                fluid: 'minecraft:water',
              },
              output: {
                item: 'rankine:pulp',
                output_count: 2,
              },
              fluidLevelsConsumed: 2000,
            });
          },
          children: [
            {
              id: 'sawdust',
              recipe: () => {
                event.custom({
                  input: {item: 'undergarden:grongle_log'},
                  type: 'rankine:crushing',
                  guaranteed: [
                    {
                      item: 'rankine:sawdust',
                      tier: 'minecraft:diamond',
                      count: 1,
                    },
                    {
                      item: 'rankine:sawdust',
                      tier: 'minecraft:netherite',
                      count: 7,
                    },
                  ],
                });
              },
            },
          ],
        },
      ],
    },
    {
      id: 'blank_rune',
      recipe: () => {
        event.replaceInput(
          {output: 'bloodmagic:blankrune'},
          '#forge:stone',
          'rankine:slate'
        );
      },
    },
    {
      id: 'infused_slate',
      recipe: () => {
        event.custom({
          type: 'bloodmagic:altar',
          input: {
            item: 'bloodmagic:reinforcedslate',
          },
          output: {
            item: 'bloodmagic:infusedslate',
          },
          upgradeLevel: 2,
          altarSyphon: 10000,
          consumptionRate: 10,
          drainRate: 10,
        });
      },
      children: [
        {
          id: 'reinforced_slate',
          recipe: () => {
            event.custom({
              type: 'bloodmagic:altar',
              input: {
                item: 'bloodmagic:blankslate',
              },
              output: {
                item: 'bloodmagic:reinforcedslate',
              },
              upgradeLevel: 1,
              altarSyphon: 5000,
              consumptionRate: 5,
              drainRate: 5,
            });
          },
          children: [
            {
              id: 'blank_slate',
              recipe: () => {
                event.custom({
                  type: 'bloodmagic:altar',
                  input: {
                    item: 'rankine:slate',
                  },
                  output: {
                    item: 'bloodmagic:blankslate',
                  },
                  altarSyphon: 1000,
                  upgradeLevel: 0,
                  consumptionRate: 1,
                  drainRate: 1,
                });
              },
            },
          ],
        },
      ],
    },
    {
      id: 'soulgem_common',
      recipe: () => {
        event.custom({
          type: 'bloodmagic:soulforge',
          output: {item: 'bloodmagic:soulgemcommon'},
          input0: {item: 'bloodmagic:soulgemlesser'},
          input1: {item: 'create:rose_quartz'},
          input2: {item: 'bloodmagic:infusedslate'},
          input3: {item: 'rankine:rose_gold_block'},
          minimumDrain: 240,
          drain: 50,
        });
      },
      children: [
        {
          id: 'soulgem_lesser',
          recipe: () => {
            event.custom({
              type: 'bloodmagic:soulforge',
              output: {item: 'bloodmagic:soulgemlesser'},
              input0: {item: 'bloodmagic:soulgempetty'},
              input1: {item: 'create:rose_quartz'},
              input2: {item: 'minecraft:redstone_block'},
              input3: {item: 'minecraft:lapis_block'},
              minimumDrain: 60,
              drain: 20,
            });
          },
          children: [
            {
              id: 'soulgem_petty',
              children: [
                {
                  id: 'soulsnare',
                  recipe: () => {
                    event.custom({
                      type: 'bloodmagic:altar',
                      input: {
                        item: 'blue_skies:spider_webbing',
                      },
                      output: {
                        item: 'bloodmagic:soulsnare',
                      },
                      upgradeLevel: 0,
                      altarSyphon: 500,
                      consumptionRate: 5,
                      drainRate: 5,
                    });
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'arcane_ashes',
      recipe: () => {
        event.custom({
          type: 'bloodmagic:altar',
          input: {
            item: 'undergarden:mogmoss',
          },
          altarSyphon: 2000,
          upgradeLevel: 0,
          consumptionRate: 2,
          drainRate: 2,
          output: {
            item: 'bloodmagic:arcaneashes',
          },
        });
      },
    },
    {
      id: 'daggar_of_sacrifice',
      recipe: () => {
        event.custom({
          type: 'bloodmagic:altar',
          input: {
            item: 'blue_skies:venom_sac',
          },
          altarSyphon: 5000,
          upgradeLevel: 1,
          consumptionRate: 5,
          drainRate: 5,
          output: {
            item: 'bloodmagic:daggerofsacrifice',
          },
        });
      },
    },
    {id: 'soulwood_totem', recipe: () => {}},
    {id: 'enchanting_table', recipe: () => {}},
    {
      id: 'torch',
      recipe: () => {
        event.shaped('16x minecraft:torch', ['a', 'b'], {
          a: 'realistictorches:glowstone_crystal',
          b: '#forge:rods/wooden',
        });
      },
    },
    {id: 'brilliant_obelisk', recipe: () => {}},
    {
      id: 'explorers_compass',
      recipe: () => {
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'explorerscompass:explorerscompass',
            },
            pattern: ['aba', 'bcb', 'aba'],
            key: {
              a: 'blue_skies:spider_webbing',
              b: 'extendedcrafting:black_iron_ingot',
              c: 'naturescompass:naturescompass',
            },
          })
          .id('inconvenient:explorers_compass');
      },
    },
    {
      id: 'wood_tier_crushing_head',
      recipe: () => {
        ['rankine:wood_tier_crushing_head'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'rankine:wood_tier_crushing_head',
            },
            pattern: [' a ', 'aba', 'cdc'],
            key: {
              a: 'undergarden:wigglewood_planks',
              b: 'twilightforest:carminite',
              c: 'minecraft:sticky_piston',
              d: 'blue_skies:horizonite_block',
            },
          })
          .id('inconvenient:wood_tier_crushing_head');
      },
    },
    {
      id: 'smoker',
      recipe: () => {
        ['minecraft:smoker'].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'minecraft:smoker',
            },
            pattern: [' a ', 'aba', ' a '],
            key: {
              a: 'undergarden:wigglewood_log',
              b: 'minecraft:furnace',
            },
          })
          .id('inconvenient:smoker');
      },
    },
    {
      id: 'blast_furnace',
      recipe: () => {
        [
          'rankine:blast_furnace_from_sheetmetal',
          'minecraft:blast_furnace',
          'tconstruct:common/basalt_blast_furnace',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'minecraft:blast_furnace',
            },
            pattern: ['aaa', 'aba', 'ccc'],
            key: {
              a: 'minecraft:iron_ingot',
              b: 'minecraft:furnace',
              c: 'minecraft:smooth_stone',
            },
          })
          .id('inconvenient:blast_furnace');
      },
    },
  ]);

  ['minecraft:cartography_table'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'minecraft:cartography_table',
      },
      pattern: ['aa', 'bb', 'bb'],
      key: {
        a: 'minecraft:paper',
        b: 'undergarden:wigglewood_planks',
      },
    })
    .id('inconvenient:cartography_table');

  ['minecraft:fletching_table'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'minecraft:fletching_table',
      },
      pattern: ['aa', 'bb', 'bb'],
      key: {
        a: 'minecraft:flint',
        b: 'undergarden:wigglewood_planks',
      },
    })
    .id('inconvenient:fletching_table');

  ['minecraft:grindstone'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'minecraft:grindstone',
      },
      pattern: ['aba', 'c c'],
      key: {
        a: 'undergarden:twistytwig',
        b: 'minecraft:stone_slab',
        c: 'undergarden:wigglewood_planks',
      },
    })
    .id('inconvenient:grindstone');

  ['minecraft:stonecutter', 'blue_skies:stonecutter_compat'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'minecraft:stonecutter',
      },
      pattern: [' a ', 'bbb'],
      key: {a: 'minecraft:iron_ingot', b: 'minecraft:smooth_stone'},
    })
    .id('inconvenient:stonecutter');

  ['rankine:piston_from_metals', 'minecraft:piston'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'minecraft:piston',
      },
      pattern: ['aaa', 'bcb', 'bdb'],
      key: {
        a: 'blue_skies:dusk_planks',
        b: 'rankine:gray_marble',
        c: 'twilightforest:carminite',
        d: 'blue_skies:horizonite_ingot',
      },
    })
    .id('inconvenient:piston');

  [
    'minecraft:compass',
    'tconstruct:smeltery/casting/metal/iron/compass',
  ].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'minecraft:compass',
      },
      pattern: [' a ', 'aba', ' a '],
      key: {
        a: 'blue_skies:horizonite_ingot',
        b: 'minecraft:redstone',
      },
    })
    .id('inconvenient:compass');

  ['minecraft:brewing_stand', 'rankine:alloy_crafting/brewing_stand'].forEach(
    id => event.remove({id: id})
  );
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'minecraft:brewing_stand',
      },
      pattern: [' a ', 'bbb'],
      key: {
        a: 'minecraft:blaze_rod',
        b: 'twilightforest:mazestone',
      },
    })
    .id('inconvenient:brewing_stand');

  ['minecraft:crossbow', 'paragon_textiles:crossbow'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'minecraft:crossbow',
      },
      pattern: ['aba', 'cdc', ' a '],
      key: {
        a: 'undergarden:twistytwig',
        b: 'minecraft:iron_ingot',
        c: 'minecraft:string',
        d: 'minecraft:tripwire_hook',
      },
    })
    .id('inconvenient:crossbow');

  ['minecraft:map'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'minecraft:map',
      },
      pattern: ['aaa', 'aba', 'aaa'],
      key: {
        a: 'minecraft:paper',
        b: 'minecraft:compass',
      },
    })
    .id('inconvenient:map');
  ['blue_skies:tool_box'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'blue_skies:tool_box',
      },
      pattern: ['aa', 'bb', 'bb'],
      key: {
        a: 'blue_skies:ventium_ingot',
        b: 'blue_skies:maple_planks',
      },
    })
    .id('inconvenient:tool_box');

  [
    'charcoal_pit:mechanical_bellows',
    'charcoal_pit:mechanical_bellows2',
  ].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'charcoal_pit:mechanical_bellows',
      },
      pattern: [' a ', 'bcd', ' a '],
      key: {
        a: 'minecraft:smooth_stone',
        b: 'minecraft:redstone',
        c: 'charcoal_pit:bellows',
        d: 'minecraft:iron_ingot',
      },
    })
    .id('inconvenient:mechanical_bellows');

  ['twilightforest:magic_map'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'twilightforest:magic_map',
      },
      pattern: ['aaa', 'aba', 'aaa'],
      key: {
        a: 'minecraft:paper',
        b: 'twilightforest:magic_map_focus',
      },
    })
    .id('inconvenient:magic_map');

  ['twilightforest:maze_map'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'twilightforest:maze_map',
      },
      pattern: ['aaa', 'aba', 'aaa'],
      key: {
        a: 'minecraft:paper',
        b: 'twilightforest:maze_map_focus',
      },
    })
    .id('inconvenient:maze_map');

  ['twilightforest:ore_map'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'twilightforest:ore_map',
      },
      pattern: ['aaa', 'aba', 'aaa'],
      key: {
        a: 'minecraft:paper',
        b: 'blue_skies:horizonite_block',
      },
    })
    .id('inconvenient:ore_map');

  ['naturesaura:tree_ritual/token_sorrow'].forEach(id =>
    event.remove({id: id})
  );

  event
    .custom({
      type: 'naturesaura:tree_ritual',
      sapling: {item: 'undergarden:smogstem_sapling'},
      ingredients: [
        {item: 'minecraft:ghast_tear'},
        {item: 'minecraft:glass'},
        {item: 'minecraft:chicken'},
        {item: 'blue_skies:charscale_moki'},
        {item: 'naturesaura:gold_leaf'},
        {
          type: 'forge:nbt',
          item: 'naturesaura:aura_bottle',
          count: 1,
          nbt: '{stored_type:"naturesaura:nether"}',
        },
      ],
      time: 250,
      output: {item: 'naturesaura:token_sorrow'},
    })
    .id('inconvenient:token_sorrow');
});
