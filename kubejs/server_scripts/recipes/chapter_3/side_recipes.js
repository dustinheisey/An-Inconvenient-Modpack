onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      children: [
        {
          id: 'totems',
          recipe: () => {
            [
              'rankine:totem_of_hastening',
              'rankine:totem_of_infusing',
              'rankine:totem_of_timesaving',
            ].forEach(id => event.remove({id: id}));

            event
              .shaped('rankine:totem_of_hastening', ['aaa', 'aba', 'aaa'], {
                a: 'tconstruct:amethyst_bronze_ingot',
                b: 'blue_skies:diopside_block',
              })
              .id('inconvenient:shaped_totem_of_hastening');

            event
              .shaped('rankine:totem_of_infusing', ['aaa', 'aba', 'aaa'], {
                a: 'tconstruct:queens_slime_ingot',
                b: 'rankine:sulfur_block',
              })
              .id('inconvenient:shaped_totem_of_infusing');
            event
              .shaped('rankine:totem_of_timesaving', ['aaa', 'aba', 'aaa'], {
                a: 'twilightforest:ironwood_ingot',
                b: 'tconstruct:slimesteel_block',
              })
              .id('inconvenient:shaped_totem_of_timesaving');
          },
        },
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
                activation_item: {item: 'undergarden:masticator_scales'},
                pentacle_id: 'occultism:craft_foliot',
                ingredients: [
                  {
                    item: 'undergarden:bloody_stew',
                  },
                  {
                    item: 'undergarden:inky_stew',
                  },
                  {
                    item: 'undergarden:indigo_stew',
                  },
                  {
                    item: 'undergarden:veiled_stew',
                  },
                  {
                    item: 'undergarden:utherium_crystal',
                  },
                  {
                    item: 'undergarden:forgotten_nugget',
                  },
                  {
                    item: 'undergarden:twistytwig',
                  },
                  {
                    item: 'undergarden:utherium_crystal',
                  },
                  {
                    item: 'undergarden:forgotten_nugget',
                  },
                  {
                    item: 'undergarden:twistytwig',
                  },
                  {
                    item: 'undergarden:rotten_blisterberry',
                  },
                  {
                    item: 'undergarden:brute_tusk',
                  },
                ],
                result: {
                  item: 'gateways:gate_pearl',
                  nbt: '{gateway:"gateways:small_undergarden_gateway"}',
                },
              })
              .id('inconvenient:ritual_undergarden_gateway');
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                duration: 60,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/custom_ritual',
                },
                activation_item: {item: 'blue_skies:soul_fragment'},
                pentacle_id: 'occultism:craft_djinni',
                ingredients: [
                  {
                    item: 'blue_skies:crescent_fruit',
                  },
                  {
                    item: 'blue_skies:monitor_tail',
                  },
                  {
                    item: 'blue_skies:charscale_moki',
                  },
                  {
                    item: 'blue_skies:horizofin_tunid',
                  },
                  {
                    item: 'blue_skies:fox_pelt',
                  },
                  {
                    item: 'blue_skies:bug_guts',
                  },
                  {
                    item: 'blue_skies:horizonite_ingot',
                  },
                  {
                    item: 'blue_skies:bug_guts',
                  },
                  {
                    item: 'blue_skies:horizonite_ingot',
                  },
                  {
                    item: 'blue_skies:venom_sac',
                  },
                  {
                    item: 'blue_skies:blaze_bud',
                  },
                  {
                    item: 'blue_skies:moonlit_water_lily',
                  },
                ],
                result: {
                  item: 'gateways:gate_pearl',
                  nbt: '{gateway:"gateways:small_everdawn_gateway"}',
                },
              })
              .id('inconvenient:ritual_everdawn_gateway');
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                duration: 60,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/custom_ritual',
                },
                activation_item: {item: 'blue_skies:soul_fragment'},
                pentacle_id: 'occultism:summon_wild_greater_spirit',
                ingredients: [
                  {
                    item: 'twilightforest:charm_of_keeping_2',
                  },
                  {
                    item: 'twilightforest:charm_of_keeping_2',
                  },
                  {
                    item: 'twilightforest:raw_ironwood',
                  },
                  {
                    item: 'twilightforest:experiment_115',
                  },
                  {
                    item: 'twilightforest:huge_water_lily',
                  },
                  {
                    item: 'twilightforest:transformation_powder',
                  },
                  {
                    item: 'twilightforest:transformation_powder',
                  },
                  {
                    item: 'twilightforest:carminite',
                  },
                  {
                    item: 'twilightforest:fiery_tears',
                  },
                  {
                    item: 'twilightforest:fiery_blood',
                  },
                  {
                    item: 'twilightforest:fiery_blood',
                  },
                  {
                    item: 'twilightforest:thorn_rose',
                  },
                ],
                result: {
                  item: 'gateways:gate_pearl',
                  nbt: '{gateway:"gateways:small_twilight_gateway"}',
                },
              })
              .id('inconvenient:ritual_twilight_gateway');
          },
        },
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
              .id('inconvenient:shaped_undead_eye');

            event
              .shaped('endrem:corrupted_eye', ['aba', 'bcb', 'aba'], {
                a: 'blue_skies:horizonite_ingot',
                b: 'malum:processed_soulstone',
                c: 'bloodmagic:infusedslate',
              })
              .stage('eye_corrupted')
              .id('inconvenient:shaped_corrupted_eye');

            event
              .shaped('endrem:evil_eye', ['aba', 'bcb', 'aba'], {
                a: 'malum:wicked_spirit',
                b: 'create:powdered_obsidian',
                c: 'charcoal_pit:nether_shard',
              })
              .stage('eye_evil')
              .id('inconvenient:shaped_evil_eye');

            event
              .shaped('endrem:lost_eye', ['aba', 'bcb', 'aba'], {
                a: 'create:andesite_alloy',
                b: 'kubejs:cinder_dust',
                c: 'twilightforest:carminite',
              })
              .stage('eye_lost')
              .id('inconvenient:shaped_lost_eye');
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
                .id(`inconvenient:shaped_${dimension}_lost_story`);
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
              'malum:spirit_infusion/soul_stained_steel_helmet',
              'malum:spirit_infusion/soul_stained_steel_chestplate',
              'malum:spirit_infusion/soul_stained_steel_leggings',
              'malum:spirit_infusion/soul_stained_steel_boots',
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
              event
                .custom({
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
                })
                .id(`inconvenient:spirit_infusion_soul_stained_steel_${armor}`);
            });

            event
              .custom({
                type: 'bloodmagic:array',
                texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
                baseinput: {item: 'bloodmagic:reagentbinding'},
                addedinput: {item: 'cataclysm:ignitium_helmet'},
                output: {item: 'bloodmagic:livinghelmet'},
              })
              .id('inconvenient:array_livinghelmet');
            event
              .custom({
                type: 'bloodmagic:array',
                texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
                baseinput: {item: 'bloodmagic:reagentbinding'},
                addedinput: {item: 'cataclysm:ignitium_chestplate'},
                output: {item: 'bloodmagic:livingplate'},
              })
              .id('inconvenient:array_livingplate');
            event
              .custom({
                type: 'bloodmagic:array',
                texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
                baseinput: {item: 'bloodmagic:reagentbinding'},
                addedinput: {item: 'cataclysm:ignitium_leggings'},
                output: {item: 'bloodmagic:livingleggings'},
              })
              .id('inconvenient:array_livingleggings');
            event
              .custom({
                type: 'bloodmagic:array',
                texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
                baseinput: {item: 'bloodmagic:reagentbinding'},
                addedinput: {item: 'cataclysm:ignitium_boots'},
                output: {item: 'bloodmagic:livingboots'},
              })
              .id('inconvenient:array_livingboots');
            event
              .custom({
                type: 'bloodmagic:array',
                texture: `bloodmagic:textures/models/alchemyarrays/bindingarray.png`,
                baseinput: {item: 'bloodmagic:reagentbinding'},
                addedinput: {item: 'cataclysm:ignitium_ingot'},
                output: {item: 'bloodmagic:upgradetrainer'},
              })
              .id('inconvenient:array_upgradetrainer');
          },
        },
        {
          id: 'bricks',
          recipe: () => {
            overrideBricksRecipes('chapter_3', event, [
              {
                output: 'architects_palette:withered_osseous_bricks',
                input: `architects_palette:withered_bone_block`,
              },
              {
                output: 'architects_palette:osseous_bricks',
                input: `minecraft:bone_block`,
              },
              {
                output: 'bloodmagic:bloodstonebrick',
                input: 'bloodmagic:largebloodstonebrick',
              },
              {
                output: 'naturesaura:infused_brick',
                input: 'naturesaura:infused_stone',
              },
            ]);
          },
        },
      ],
    },

    {id: 'chests', recipe: () => {}},
    {
      id: 'briggs',
      recipe: () => {
        overworldWoods.forEach(wood => {
          event
            .custom({
              type: 'extendedcrafting:shaped_table',
              pattern: ['aba', 'cbc', 'ddd'],
              key: {
                a: {item: 'minecraft:lead'},
                b: {item: 'ironchest:copper_chest'},
                c: {item: 'smallships:sail'},
                d: {item: `smallships:${wood}_cog`},
              },
              result: {item: `smallships:${wood}_brigg`},
            })
            .id(`inconvenient:basic_table_${wood}_brigg`);
        });
      },
    },
    {
      id: 'magician_blood_orb',
      recipe: () => {
        event
          .custom({
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
          })
          .id('inconvenient:altar_fiery_block');
      },
      children: [
        {
          id: 'apprentice_blood_orb',
          recipe: () => {
            event
              .custom({
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
              })
              .id('inconvenient:altar_slimesteel_block');
          },
          children: [
            {
              id: 'weak_blood_orb',
              recipe: () => {
                event
                  .custom({
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
                  })
                  .id('inconvenient:altar_weakbloodorb');
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
        event
          .custom({
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
          })
          .id('inconvenient:altar_advanced_chunk_loader');
      },
      children: [
        {
          id: 'basic_chunk_loader',
          recipe: () => {
            event
              .custom({
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
              })
              .id('inconvenient:altar_basic_chunk_loader');
          },
          children: [
            {
              id: 'single_chunkloader',
              recipe: () => {
                event
                  .custom({
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
                  })
                  .id('inconvenient:altar_single_chunk_loader');
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
                      .id('inconvenient:pestle_nether_shard');
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
        event
          .custom({
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
          })
          .id('inconvenient:ritual_surprisingly_substantial_satchel');
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

        event
          .shapeless('malum:pride_prideweave', [
            'malum:esoteric_spool',
            'undergarden:regalium_crystal',
          ])
          .id('inconvenient:shapeless_pride_prideweave');

        event
          .shapeless('malum:genderfluid_prideweave', [
            'malum:esoteric_spool',
            'minecraft:lapis_lazuli',
          ])
          .id('inconvenient:shapeless_genderfluid_prideweave');

        event
          .shapeless('malum:demiboy_prideweave', [
            'malum:esoteric_spool',
            'blue_skies:moonstone',
          ])
          .id('inconvenient:shapeless_demiboy_prideweave');

        event
          .shapeless('malum:ace_prideweave', [
            'malum:esoteric_spool',
            'rankine:galena',
          ])
          .id('inconvenient:shapeless_ace_prideweave');

        event
          .shapeless('malum:plural_prideweave', [
            'malum:esoteric_spool',
            'rankine:malachite',
          ])
          .id('inconvenient:shapeless_plural_prideweave');

        event
          .shapeless('malum:lesbian_prideweave', [
            'malum:esoteric_spool',
            'undergarden:utherium_crystal',
          ])
          .id('inconvenient:shapeless_lesbian_prideweave');

        event
          .shapeless('malum:demigirl_prideweave', [
            'malum:esoteric_spool',
            'blue_skies:pyrope_gem',
          ])
          .id('inconvenient:shapeless_demigirl_prideweave');

        event
          .shapeless('malum:intersex_prideweave', [
            'malum:esoteric_spool',
            'blue_skies:raw_horizonite',
          ])
          .id('inconvenient:shapeless_intersex_prideweave');

        event
          .shapeless('malum:poly_prideweave', [
            'malum:esoteric_spool',
            'blue_skies:diopside_gem',
          ])
          .id('inconvenient:shapeless_poly_prideweave');

        event
          .shapeless('malum:pan_prideweave', [
            'malum:esoteric_spool',
            'blue_skies:raw_ventium',
          ])
          .id('inconvenient:shapeless_pan_prideweave');

        event
          .shapeless('malum:enby_prideweave', [
            'malum:esoteric_spool',
            'blue_skies:raw_charoite',
          ])
          .id('inconvenient:shapeless_enby_prideweave');

        event
          .shapeless('malum:aroace_prideweave', [
            'malum:esoteric_spool',
            'rankine:acanthite',
          ])
          .id('inconvenient:shapeless_aroace_prideweave');

        event
          .shapeless('malum:trans_prideweave', [
            'malum:esoteric_spool',
            'undergarden:raw_froststeel',
          ])
          .id('inconvenient:shapeless_trans_prideweave');

        event
          .shapeless('malum:genderqueer_prideweave', [
            'malum:esoteric_spool',
            'minecraft:amethyst_cluster',
          ])
          .id('inconvenient:shapeless_genderqueer_prideweave');

        event
          .shapeless('malum:gay_prideweave', [
            'malum:esoteric_spool',
            'blue_skies:raw_aquite',
          ])
          .id('inconvenient:shapeless_gay_prideweave');

        event
          .shapeless('malum:bi_prideweave', [
            'malum:esoteric_spool',
            'blue_skies:raw_falsite',
          ])
          .id('inconvenient:shapeless_bi_prideweave');
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
        event
          .shaped('undergarden:depthrock_bed', ['aaa', 'bbb'], {
            a: 'undergarden:mogmoss',
            b: '#minecraft:planks',
          })
          .id('inconvenient:shaped_depthrock_bed');
      },
    },
    {
      id: 'paper',
      recipe: () => {
        event.remove({output: 'minecraft:paper'});
        event
          .custom({
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
          })
          .id('inconvenient:drying_paper');
      },
      children: [
        {
          id: 'pulp',
          recipe: () => {
            event
              .custom({
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
              })
              .id('inconvenient:cauldron_pulp');
          },
          children: [
            {
              id: 'sawdust',
              recipe: () => {
                event
                  .custom({
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
                  })
                  .id('inconvenient:crushing_grongle_log');
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
        event
          .custom({
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
          })
          .id('inconvenient:altar_infusedslate');
      },
      children: [
        {
          id: 'reinforced_slate',
          recipe: () => {
            event
              .custom({
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
              })
              .id('inconvenient:altar_reinforcedslate');
          },
          children: [
            {
              id: 'blank_slate',
              recipe: () => {
                event
                  .custom({
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
                  })
                  .id('inconvenient:altar_blankslate');
              },
            },
          ],
        },
      ],
    },
    {
      id: 'soulgem_common',
      recipe: () => {
        event
          .custom({
            type: 'bloodmagic:soulforge',
            output: {item: 'bloodmagic:soulgemcommon'},
            input0: {item: 'bloodmagic:soulgemlesser'},
            input1: {item: 'create:rose_quartz'},
            input2: {item: 'bloodmagic:infusedslate'},
            input3: {item: 'rankine:rose_gold_block'},
            minimumDrain: 240,
            drain: 50,
          })
          .id('inconvenient:soulforge_soulgemcommon');
      },
      children: [
        {
          id: 'soulgem_lesser',
          recipe: () => {
            event
              .custom({
                type: 'bloodmagic:soulforge',
                output: {item: 'bloodmagic:soulgemlesser'},
                input0: {item: 'bloodmagic:soulgempetty'},
                input1: {item: 'create:rose_quartz'},
                input2: {item: 'minecraft:redstone_block'},
                input3: {item: 'minecraft:lapis_block'},
                minimumDrain: 60,
                drain: 20,
              })
              .id('inconvenient:soulforge_soulgemlesser');
          },
          children: [
            {
              id: 'soulgem_petty',
              children: [
                {
                  id: 'soulsnare',
                  recipe: () => {
                    event
                      .custom({
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
                      })
                      .id('inconvenient:altar_soulsnare');
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
        event
          .custom({
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
          })
          .id('inconvenient:altar_arcaneashes');
      },
    },
    {
      id: 'daggar_of_sacrifice',
      recipe: () => {
        event
          .custom({
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
          })
          .id('inconvenient:altar_daggerofsacrifice');
      },
    },
    {id: 'soulwood_totem', recipe: () => {}},
    {id: 'enchanting_table', recipe: () => {}},
    {
      id: 'torch',
      recipe: () => {
        event
          .shaped('16x minecraft:torch', ['a', 'b'], {
            a: 'realistictorches:glowstone_crystal',
            b: '#forge:rods/wooden',
          })
          .id('inconvenient:shaped_torch');
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
          .id('inconvenient:basic_table_explorers_compass');
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
          .id('inconvenient:basic_table_wood_tier_crushing_head');
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
          .id('inconvenient:basic_table_smoker');
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
          .id('inconvenient:basic_table_blast_furnace');
      },
    },
  ]);

  ['malum:spirit_infusion/poppet'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'malum:spirit_infusion',
      input: {item: 'minecraft:hay_block'},
      output: {item: 'malum:poppet', count: 2},
      extra_items: [{item: 'kubejs:wheat', count: 2}, {item: 'malum:hex_ash'}],
      spirits: [
        {
          type: 'wicked',
          count: 4,
        },
        {
          type: 'earthen',
          count: 4,
        },
      ],
    })
    .id('inconvenient:spirit_infusion_poppet');

  ['malum:spirit_infusion/alchemical_impetus'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'malum:spirit_infusion',
      input: {item: 'malum:alchemical_calx', count: 8},
      output: {item: 'malum:alchemical_impetus'},
      extra_items: [
        {item: 'malum:processed_soulstone', count: 3},
        {item: 'minecraft:gunpowder', count: 2},
        {item: 'malum:hex_ash', count: 1},
      ],
      spirits: [
        {
          type: 'arcane',
          count: 4,
        },
        {type: 'earthen', count: 4},
      ],
    })
    .id('inconvenient:spirit_infusion_alchemical_impetus');

  ['malum:spirit_infusion/ether'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'malum:spirit_infusion',
      input: {item: 'minecraft:glowstone_dust', count: 4},
      output: {item: 'malum:ether', count: 4},
      extra_items: [
        {item: 'realistictorches:glowstone_crystal', count: 1},
        {item: 'minecraft:blaze_powder', count: 1},
      ],
      spirits: [
        {
          type: 'arcane',
          count: 1,
        },
        {type: 'infernal', count: 2},
      ],
    })
    .id('inconvenient:spirit_infusion_ether');

  ['malum:spirit_infusion/spirit_fabric'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'malum:spirit_infusion',
      input: {item: 'rankine:gun_cotton', count: 2},
      output: {item: 'malum:spirit_fabric', count: 4},
      extra_items: [
        {item: 'blue_skies:spider_webbing', count: 2},
        {item: 'malum:hex_ash', count: 1},
      ],
      spirits: [
        {
          type: 'wicked',
          count: 2,
        },
        {type: 'earthen', count: 1},
        {type: 'aerial', count: 1},
      ],
    })
    .id('inconvenient:spirit_infusion_spirit_fabric');

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
    .id('inconvenient:basic_table_cartography_table');

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
    .id('inconvenient:basic_table_fletching_table');

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
    .id('inconvenient:basic_table_grindstone');

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
    .id('inconvenient:basic_table_stonecutter');

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
    .id('inconvenient:basic_table_piston');

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
    .id('inconvenient:basic_table_compass');

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
    .id('inconvenient:basic_table_brewing_stand');

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
    .id('inconvenient:basic_table_crossbow');

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
    .id('inconvenient:basic_table_map');
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
    .id('inconvenient:basic_table_tool_box');

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
    .id('inconvenient:basic_table_mechanical_bellows');

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
    .id('inconvenient:basic_table_magic_map');

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
    .id('inconvenient:basic_table_maze_map');

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
    .id('inconvenient:basic_table_ore_map');

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
    .id('inconvenient:tree_ritual_token_sorrow');

  // event.remove({
  //   output: [
  //     'occultism:book_of_binding_foliot',
  //     'undergarden:catalyst',
  //     'malum:spirit_pouch',
  //     'extendedcrafting:basic_component',
  //     'malum:spirit_altar',
  //     'minecraft:torch',
  //     'undergarden:depthrock_bed',
  //     `twilightforest:twilight_oak_chest`,
  //     `twilightforest:canopy_chest`,
  //     `twilightforest:mangrove_chest`,
  //     `twilightforest:time_chest`,
  //     `twilightforest:transformation_chest`,
  //     `twilightforest:mining_chest`,
  //     `twilightforest:sorting_chest`,
  //     'occultism:chalk_gold_impure',
  //     'occultism:chalk_purple_impure',
  //     'minecraft:book',
  //     'bloodmagic:sacrificerune',
  //     'naturesaura:bottle_two_the_rebottling',
  //     'rankine:rock_drill',
  //     'bloodmagic:selfsacrificerune',
  //     'minecraft:bow',
  //     'bloodmagic:altar',
  //     'minecraft:sticky_piston',
  //     'minecraft:lectern',
  //     'minecraft:book',
  //     'undergarden:twistytwig',
  //     'blue_skies:maple_stick',
  //     'blue_skies:dusk_stick',
  //     'blue_skies:lunar_stick',
  //     `twilightforest:darkwood_chest`,
  //   ],
  //   type: 'minecraft:crafting_shaped',
  // });

  colors.forEach(color => {
    if (color !== 'red') {
      event
        .shaped(`paragon_textiles:cushion_${color}`, ['a', 'b'], {
          a: `paragon_textiles:fabric_${color}`,
          b: '#minecraft:wooden_slabs',
        })
        .id(`inconvenient:cushion_${color}`);
    }
  });

  event
    .shaped('malum:spirit_pouch', [' a ', 'b b', ' b '], {
      a: 'minecraft:string',
      b: 'malum:spirit_fabric',
    })
    .id('inconvenient:shaped_spirit_pouch');

  event
    .shaped(`twilightforest:twilight_oak_chest`, ['aaa', 'a a', 'aaa'], {
      a: `twilightforest:twilight_oak_planks`,
    })
    .id('inconvenient:shaped_twilight_oak_chest');
  event
    .shaped(`twilightforest:canopy_chest`, ['aaa', 'a a', 'aaa'], {
      a: `twilightforest:canopy_planks`,
    })
    .id('inconvenient:shaped_canopy_chest');
  event
    .shaped(`twilightforest:mangrove_chest`, ['aaa', 'a a', 'aaa'], {
      a: `twilightforest:mangrove_planks`,
    })
    .id('inconvenient:shaped_mangrove_chest');
  event
    .shaped(`twilightforest:time_chest`, ['aaa', 'a a', 'aaa'], {
      a: `twilightforest:time_planks`,
    })
    .id('inconvenient:shaped_time_chest');
  event
    .shaped(`twilightforest:transformation_chest`, ['aaa', 'a a', 'aaa'], {
      a: `twilightforest:transformation_planks`,
    })
    .id('inconvenient:shaped_minecart_insulation');
  event
    .shaped(`twilightforest:mining_chest`, ['aaa', 'a a', 'aaa'], {
      a: `twilightforest:mining_planks`,
    })
    .id('inconvenient:shaped_mining_chest');
  event
    .shaped(`twilightforest:sorting_chest`, ['aaa', 'a a', 'aaa'], {
      a: `twilightforest:sorting_planks`,
    })
    .id('inconvenient:shaped_sorting_chest');

  event
    .shaped('bloodmagic:sacrificerune', ['aba', 'cdc', 'aba'], {
      a: 'rankine:black_marble',
      b: 'bloodmagic:reinforcedslate',
      c: 'minecraft:glowstone_dust',
      d: 'bloodmagic:blankrune',
    })
    .id('inconvenient:shaped_sacrificerune');

  event
    .shaped('rankine:rock_drill', [' a ', 'bcb', ' b '], {
      a: 'create:shaft',
      b: 'rankine:bronze_ingot',
      c: 'create:powdered_obsidian',
    })
    .id('inconvenient:shaped_rock_drill');
  event
    .shaped('bloodmagic:selfsacrificerune', ['aba', 'cdc', 'aba'], {
      a: 'rankine:gray_marble',
      b: 'bloodmagic:reinforcedslate',
      c: 'minecraft:redstone',
      d: 'bloodmagic:blankrune',
    })
    .id('inconvenient:shaped_selfsacrificerune');
  event
    .shaped('minecraft:bow', [' ab', 'a b', ' ab'], {
      a: '#forge:rods/wooden',
      b: 'minecraft:string',
    })
    .id('inconvenient:shaped_bow');

  event
    .shaped('minecraft:sticky_piston', ['a', 'b'], {
      a: 'tconstruct:sky_slime_ball',
      b: 'minecraft:piston',
    })
    .id('inconvenient:shaped_sticky_piston');
  event
    .shaped('minecraft:lectern', ['aaa', ' b ', ' a '], {
      a: '#minecraft:wooden_slabs',
      b: '#forge:bookshelves',
    })
    .id('inconvenient:shaped_lectern');
  event
    .shaped('minecraft:book', ['aa', 'ab'], {
      a: 'minecraft:paper',
      b: 'minecraft:leather',
    })
    .id('inconvenient:shaped_book');
  event
    .shaped('2x undergarden:twistytwig', [' a', 'a '], {
      a: 'undergarden:wigglewood_planks',
    })
    .id('inconvenient:shaped_twistytwig');
  event
    .shaped('2x blue_skies:maple_stick', ['a', 'a'], {
      a: 'blue_skies:maple_planks',
    })
    .id('inconvenient:shaped_maple_stick');
  event
    .shaped('2x blue_skies:dusk_stick', ['a', 'a'], {
      a: 'blue_skies:dusk_planks',
    })
    .id('inconvenient:shaped_dusk_stick');
  event
    .shaped('2x blue_skies:lunar_stick', ['a', 'a'], {
      a: 'blue_skies:lunar_planks',
    })
    .id('inconvenient:shaped_lunar_stick');
  event
    .shaped(`twilightforest:darkwood_chest`, ['aaa', 'a a', 'aaa'], {
      a: `twilightforest:dark_planks`,
    })
    .id('inconvenient:shaped_darkwood_chest');
});

onEvent('server.datapack.high_priority', event => {
  // Undergarden
  registerGateways(event, {
    id: 'undergarden',
    color: '#00D7A2',
    dimension: 'the Undergarden',
    waves: [
      {
        type: 'mob',
        entities: ['undergarden:rotling'],
      },
      {
        type: 'mob',
        entities: ['undergarden:muncher'],
      },
      {
        type: 'mob',
        entities: ['undergarden:nargoyle'],
        rewards: [{id: 'undergarden:raw_cloggrum', count: 15}],
      },
      {
        type: 'mob',
        entities: ['undergarden:rotwalker'],
      },
      {
        type: 'mob',
        entities: ['undergarden:rotbeast'],
      },
      {
        type: 'mob',
        entities: ['undergarden:forgotten_guardian'],
      },
      {
        type: 'boss',
        entities: ['undergarden:masticator'],
        rewards: [{id: 'undergarden:masticator_scales', count: 10}],
      },
    ],
    restorations: [
      {id: 'minecraft:slime', name: 'slime'},
      {id: 'minecraft:creeper', name: 'creeper'},
      {id: 'undergarden:mog', name: 'mog'},
      {id: 'undergarden:gloomper', name: 'gloomper'},
    ],
    relics: [
      'relics:spore_sack',
      'artifacts:antidote_vessel',
      'artifacts:lucky_scarf',
      'artifacts:digging_claws',
      'artifacts:night_vision_goggles',
      'artifacts:kitty_slippers',
    ],
    rewards: [{id: 'kubejs:undergarden_token', count: 1}],
  });

  // Everdawn
  registerGateways(event, {
    id: 'everdawn',
    color: '#FF6C55',
    dimension: 'Everdawn',
    waves: [
      {
        type: 'mob',
        entities: ['blue_skies:emberback'],
      },
      {
        type: 'boss',
        entities: ['blue_skies:alchemist'],
        rewards: [{id: 'blue_skies:loot_bag_alchemist', count: 2}],
      },
      {
        type: 'mob',
        entities: ['blue_skies:nested_spider'],
      },
      {
        type: 'mob',
        entities: ['blue_skies:venom_spider'],
      },
      {
        type: 'mob',
        entities: ['blue_skies:infested_swarmer'],
      },
      {
        type: 'boss',
        entities: ['blue_skies:arachnarch'],
        rewards: [{id: 'blue_skies:loot_bag_arachnarch', count: 2}],
      },
    ],
    restorations: [
      {id: 'minecraft:spider', name: 'spider'},
      {id: 'minecraft:cave_spider', name: 'cave spider'},
      {id: 'minecraft:fox', name: 'fox'},
      {id: 'blue_skies:cosmic_fox', name: 'cosmic fox'},
    ],
    relics: [
      'relics:rage_glove',
      'artifacts:superstitious_hat',
      'artifacts:scarf_of_invisibility',
      'artifacts:feral_claws',
      'artifacts:panic_necklace',
      'artifacts:power_glove',
    ],
    rewards: [{id: 'kubejs:everdawn_token', count: 1}],
  });

  // Twilight
  registerGateways(event, {
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
          'twilightforest:hedge_spider',
        ],
      },
      {
        type: 'boss',
        entities: ['twilightforest:naga'],
      },
      {
        type: 'group',
        entities: [
          'twilightforest:redcap',
          'twilightforest:redcap_sapper',
          'twilightforest:kobold',
        ],
      },
      {
        type: 'boss',
        entities: ['twilightforest:lich'],
      },
      {
        type: 'group',
        entities: [
          'twilightforest:fire_beetle',
          'twilightforest:pinch_beetle',
          'twilightforest:slime_beetle',
          'twilightforest:maze_slime',
        ],
      },
      {
        type: 'boss',
        entities: ['twilightforest:minoshroom'],
      },
      {
        type: 'boss',
        entities: ['twilightforest:hydra'],
      },
      {
        type: 'group',
        entities: [
          'twilightforest:helmet_crab',
          'twilightforest:blockchain_goblin',
          'twilightforest:lower_goblin_knight',
          'twilightforest:upper_goblin_knight',
        ],
      },
      {
        type: 'boss',
        entities: ['twilightforest:knight_phantom'],
      },
      {
        type: 'group',
        entities: [
          'twilightforest:carminite_broodling',
          'twilightforest:carminite_ghastguard',
          'twilightforest:carminite_ghastling',
          'twilightforest:carminite_golem',
        ],
      },
      {
        type: 'boss',
        entities: ['twilightforest:ur_ghast'],
      },
      {
        type: 'boss',
        entities: ['twilightforest:alpha_yeti'],
      },
      {
        type: 'group',
        entities: [
          'twilightforest:stable_ice_core',
          'twilightforest:unstable_ice_core',
          'twilightforest:ice_crystal',
          'twilightforest:snow_guardian',
        ],
      },
      {
        type: 'boss',
        entities: ['twilightforest:snow_queen'],
      },
      {
        type: 'group',
        entities: [
          'twilightforest:giant_miner',
          'twilightforest:armored_giant',
          'twilightforest:troll',
        ],
      },
      {
        type: 'boss',
        entities: ['ecofriendly:pollutor_king_ym'],
      },
    ],
    restorations: [
      {id: 'minecraft:rabbit', name: 'rabbit'},
      {id: 'minecraft:chicken', name: 'chicken'},
      {id: 'minecraft:wolf', name: 'wolf'},
      {id: 'totemic:bald_eagle', name: 'bald eagle'},
    ],
    relics: [
      'relics:magic_mirror',
      'artifacts:thorn_pendant',
      'artifacts:universal_attractor',
      'artifacts:steadfast_spikes',
      'artifacts:pocket_piston',
      'artifacts:crystal_heart',
    ],

    rewards: [{id: 'kubejs:twilight_token', count: 1}],
  });
});
