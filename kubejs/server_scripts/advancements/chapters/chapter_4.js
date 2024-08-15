onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'chapter_4', {
    icon: 'create:brass_hand',
    item: 'endrem:lost_eye',
    title: 'Chapter 4: Inconvenient Truths',
    description: 'Understand what happened',
    background: 'im:textures/block/polished_nether_bricks.png',
    children: [
      {
        item: 'create:mechanical_press',
        title: 'Mechanical Press',
        frame: 'goal',
        description: 'Craft a mechanical press',
        children: [
          {
            item: 'create:sturdy_sheet',
            title: 'Bread',
            description: 'Make your first piece of bread',
            children: [
              {
                item: 'bloodmagic:ritualdiviner',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [
                  {
                    item: 'bloodmagic:strong_tau',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                    children: [
                      {
                        item: 'bloodmagic:weakbloodshard',
                        title: 'Weak Blood Shard',
                        description: 'Create a weak blood shard',
                        children: [
                          {
                            item: 'occultism:chalk_red',
                            title: 'Circles of the Pheonix',
                            description: 'Craft some red chalk',
                            children: [
                              {
                                item: 'occultism:infused_pickaxe',
                                title: 'Infused Pickaxe',
                                description: 'Craft an infused pickaxe',
                              },
                            ],
                          },
                          {
                            item: 'bloodmagic:masterbloodorb',
                            title: "Magician's Blood Orb",
                            description: "Create a magician's blood orb",
                          },
                        ],
                      },
                      {
                        item: 'kubejs:liquid_tau_bucket',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            item: 'kubejs:berry_juice_bucket',
            title: 'Infused Pickaxe',
            description: 'Craft an infused pickaxe',
            children: [
              {
                item: 'kubejs:wine_bucket',
                title: 'Infused Pickaxe',
                description: 'Craft an infused pickaxe',
                children: [
                  {
                    item: 'charcoal_pit:vinegar_bucket',
                    title: 'Infused Pickaxe',
                    description: 'Craft an infused pickaxe',
                  },
                  {
                    item: 'kubejs:tartaric_acid',
                    title: 'Infused Pickaxe',
                    description: 'Craft an infused pickaxe',
                    children: [
                      {
                        item: 'kubejs:cream_of_tartar',
                        title: 'Infused Pickaxe',
                        description: 'Craft an infused pickaxe',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            item: 'chemlib:iron_plate',
            frame: 'goal',
            title: 'Bread',
            description: 'Make your first piece of bread',
            children: [
              {
                item: 'create:whisk',
                frame: 'goal',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [
                  {
                    item: 'create:mechanical_mixer',
                    frame: 'goal',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                    children: [
                      {
                        item: 'rankine:gray_marble',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [
                          {
                            item: 'kubejs:calcium_carbonate_dust',
                            title: 'Bread',
                            description: 'Make your first piece of bread',
                            children: [
                              {
                                item: 'rankine:carbon_dioxide_gas_bottle',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        item: 'create:cinder_flour',
                        frame: 'goal',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [
                          {
                            item: 'kubejs:cake_mix',
                            frame: 'goal',
                            title: 'Bread',
                            description: 'Make your first piece of bread',
                            children: [
                              {
                                item: 'kubejs:blaze_cake_batter_bucket',
                                frame: 'goal',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                                children: [
                                  {
                                    item: 'create:blaze_cake_base',
                                    frame: 'goal',
                                    title: 'Bread',
                                    description:
                                      'Make your first piece of bread',
                                    children: [
                                      {
                                        item: 'create:blaze_cake',
                                        frame: 'goal',
                                        title: 'Bread',
                                        description:
                                          'Make your first piece of bread',
                                        children: [
                                          {
                                            icon: 'farmersrespite:purulent_tea',
                                            frame: 'goal',
                                            title: 'Bread',
                                            criteria: {
                                              consume: {
                                                trigger:
                                                  'minecraft:consume_item',
                                                conditions: {
                                                  item: {
                                                    items: [
                                                      'farmersrespite:purulent_tea',
                                                    ],
                                                  },
                                                },
                                              },
                                            },
                                            reward: 'im:dimensions/nether',
                                            description:
                                              'Make your first piece of bread',
                                            children: [
                                              {
                                                item: 'endrem:nether_eye',
                                                title: 'Forest Fires',
                                                description:
                                                  'Go to sleep after brewing some purulent tea',
                                                frame: 'challenge',
                                                id: 'eye_nether',
                                              },
                                              {
                                                icon: 'netherrack',
                                                title: 'Nether',
                                                frame: 'goal',
                                                criteria: {
                                                  dimension_change: {
                                                    trigger:
                                                      'minecraft:changed_dimension',
                                                    conditions: {
                                                      from: 'minecraft:overworld',
                                                      to: 'minecraft:the_nether',
                                                    },
                                                  },
                                                },
                                                description: 'Enter the nether',
                                                children: [
                                                  {
                                                    item: 'kubejs:tar_sand',
                                                    title: 'Gunpowder',
                                                    frame: 'goal',
                                                    description:
                                                      'Create gunpowder',
                                                    children: [
                                                      {
                                                        item: 'kubejs:drop_of_tar',
                                                        title: 'Gunpowder',
                                                        frame: 'goal',
                                                        description:
                                                          'Create gunpowder',
                                                        children: [
                                                          {
                                                            item: 'kubejs:mysterious_adhesive_bucket',
                                                            title: 'Gunpowder',
                                                            frame: 'goal',
                                                            description:
                                                              'Create gunpowder',
                                                            children: [
                                                              {
                                                                item: 'kubejs:inert_compound',
                                                                title:
                                                                  'Gunpowder',
                                                                frame: 'goal',
                                                                description:
                                                                  'Create gunpowder',
                                                                reward:
                                                                  'im:eyes/eye_wither',
                                                                children: [
                                                                  {
                                                                    item: 'endrem:wither_eye',
                                                                    title:
                                                                      'Witherstorm',
                                                                    description:
                                                                      'Have a flashback after creating an inert compound',
                                                                    frame:
                                                                      'challenge',
                                                                    id: 'eye_wither',
                                                                  },
                                                                  {
                                                                    item: 'create:chromatic_compound',
                                                                    title:
                                                                      'Gunpowder',
                                                                    frame:
                                                                      'goal',
                                                                    description:
                                                                      'Create gunpowder',
                                                                    children: [
                                                                      {
                                                                        item: 'create:shadow_steel',
                                                                        frame:
                                                                          'challenge',
                                                                        title:
                                                                          'Gunpowder',
                                                                        description:
                                                                          'Create gunpowder',
                                                                        reward:
                                                                          'im:chapters/chapter_5_1',
                                                                      },
                                                                      {
                                                                        item: 'create:refined_radiance',
                                                                        frame:
                                                                          'challenge',
                                                                        title:
                                                                          'Gunpowder',
                                                                        description:
                                                                          'Create gunpowder',
                                                                        reward:
                                                                          'im:chapters/chapter_5_2',
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
                                                    title: 'Burning Truth',
                                                    description:
                                                      'Find a page from a lost story in the Nether',
                                                    item: 'kubejs:nether_lost_page',
                                                    children: [
                                                      {
                                                        title: 'A Dire Warning',
                                                        id: 'nether_lost_story',
                                                        frame: 'challenge',
                                                        description:
                                                          'Remake the lost story from the Nether',
                                                        item: 'kubejs:nether_lost_story',
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: 'nethersdelight:soul_compost',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                    children: [
                                                      {
                                                        item: 'kubejs:compost_bucket',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                        children: [
                                                          {
                                                            item: 'immersiveengineering:dust_saltpeter',
                                                            title:
                                                              'Tainted Gold',
                                                            description:
                                                              'Collect a tainted gold ingot from a crimson altar',
                                                            children: [
                                                              {
                                                                item: 'minecraft:gunpowder',
                                                                title:
                                                                  'Tainted Gold',
                                                                description:
                                                                  'Collect a tainted gold ingot from a crimson altar',
                                                                children: [
                                                                  {
                                                                    item: 'kubejs:mixed_dust',
                                                                    title:
                                                                      'Tainted Gold',
                                                                    description:
                                                                      'Collect a tainted gold ingot from a crimson altar',
                                                                    children:
                                                                      [],
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
                                                    item: 'minecraft:blast_furnace',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                    children: [
                                                      {
                                                        item: 'biomancy:tough_fibers',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: 'cataclysm:altar_of_fire',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                    children: [
                                                      {
                                                        item: 'biomancy:elastic_fibers',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: 'minecraft:crimson_fungus',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                    children: [
                                                      {
                                                        item: 'kubejs:crimson_resin_bucket',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: 'rankine:zinc_ingot',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                    children: [
                                                      {
                                                        item: 'rankine:alloy_furnace',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                        children: [
                                                          {
                                                            item: 'malum:hallowed_gold_ingot',
                                                            title:
                                                              'Tainted Gold',
                                                            description:
                                                              'Collect a tainted gold ingot from a crimson altar',
                                                            children: [
                                                              {
                                                                item: 'naturesaura:tainted_gold',
                                                                title:
                                                                  'Tainted Gold',
                                                                description:
                                                                  'Collect a tainted gold ingot from a crimson altar',
                                                                children: [
                                                                  {
                                                                    item: 'immersiveengineering:dust_electrum',
                                                                    title:
                                                                      'Tainted Gold',
                                                                    description:
                                                                      'Collect a tainted gold ingot from a crimson altar',
                                                                    children:
                                                                      [],
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            item: 'minecraft:netherite_ingot',
                                                            title:
                                                              'Tainted Gold',
                                                            description:
                                                              'Collect a tainted gold ingot from a crimson altar',
                                                            children: [
                                                              {
                                                                item: 'kubejs:witherite_dust',
                                                                title:
                                                                  'Tainted Gold',
                                                                description:
                                                                  'Collect a tainted gold ingot from a crimson altar',
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            item: 'rankine:rose_gold_ingot',
                                                            title:
                                                              'Tainted Gold',
                                                            description:
                                                              'Collect a tainted gold ingot from a crimson altar',
                                                            children: [
                                                              {
                                                                item: 'create:polished_rose_quartz',
                                                                title:
                                                                  'Gunpowder',
                                                                description:
                                                                  'Create gunpowder',
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            item: 'create:brass_ingot',
                                                            title:
                                                              'Tainted Gold',
                                                            description:
                                                              'Collect a tainted gold ingot from a crimson altar',
                                                            children: [
                                                              {
                                                                item: 'rankine:distillation_tower',
                                                                title:
                                                                  'Tainted Gold',
                                                                description:
                                                                  'Collect a tainted gold ingot from a crimson altar',
                                                                children: [
                                                                  {
                                                                    item: 'rankine:oxygen_gas_bottle',
                                                                    title:
                                                                      'Tainted Gold',
                                                                    description:
                                                                      'Collect a tainted gold ingot from a crimson altar',
                                                                    children: [
                                                                      {
                                                                        item: 'chemlib:zinc_oxide_dust',
                                                                        title:
                                                                          'Tainted Gold',
                                                                        description:
                                                                          'Collect a tainted gold ingot from a crimson altar',
                                                                        children:
                                                                          [],
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            item: 'tconstruct:manyullyn_ingot',
                                                            title: 'Manyullyn',
                                                            description:
                                                              'Forge a manyullyn ingot',
                                                            children: [
                                                              {
                                                                item: 'waystones:warp_stone',
                                                                title:
                                                                  'Warp Stone',
                                                                description:
                                                                  'Create a warp stone',
                                                                children: [
                                                                  {
                                                                    item: 'waystones:waystone',
                                                                    title:
                                                                      'Waystone',
                                                                    description:
                                                                      'Craft a waystone',
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
                                                    item: 'minecraft:quartz',
                                                    title: 'Gunpowder',
                                                    description:
                                                      'Create gunpowder',
                                                    children: [
                                                      {
                                                        item: 'vintageimprovements:spring_coiling_machine_wheel',
                                                        title: 'Gunpowder',
                                                        description:
                                                          'Create gunpowder',
                                                        children: [
                                                          {
                                                            item: 'vintageimprovements:spring_coiling_machine',
                                                            title: 'Gunpowder',
                                                            description:
                                                              'Create gunpowder',
                                                            children: [
                                                              {
                                                                item: 'vintageimprovements:centrifuge',
                                                                title:
                                                                  'Gunpowder',
                                                                description:
                                                                  'Create gunpowder',
                                                                children: [
                                                                  {
                                                                    item: 'minecraft:purple_dye',
                                                                    title:
                                                                      'Gunpowder',
                                                                    description:
                                                                      'Create gunpowder',
                                                                    children: [
                                                                      {
                                                                        item: 'kubejs:twilight_tones_bucket',
                                                                        title:
                                                                          'Gunpowder',
                                                                        description:
                                                                          'Create gunpowder',
                                                                        children:
                                                                          [],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'minecraft:orange_dye',
                                                                    title:
                                                                      'Gunpowder',
                                                                    description:
                                                                      'Create gunpowder',
                                                                    children: [
                                                                      {
                                                                        item: 'kubejs:sunset_shades_bucket',
                                                                        title:
                                                                          'Gunpowder',
                                                                        description:
                                                                          'Create gunpowder',
                                                                        children:
                                                                          [],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'minecraft:green_dye',
                                                                    title:
                                                                      'Gunpowder',
                                                                    description:
                                                                      'Create gunpowder',
                                                                    children: [
                                                                      {
                                                                        item: 'kubejs:verdant_variants_bucket',
                                                                        title:
                                                                          'Gunpowder',
                                                                        description:
                                                                          'Create gunpowder',
                                                                        children:
                                                                          [],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'minecraft:blue_dye',
                                                                    title:
                                                                      'Gunpowder',
                                                                    description:
                                                                      'Create gunpowder',
                                                                    children: [
                                                                      {
                                                                        item: 'kubejs:polar_pigments_bucket',
                                                                        title:
                                                                          'Gunpowder',
                                                                        description:
                                                                          'Create gunpowder',
                                                                        children:
                                                                          [],
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
                                                    item: 'rankine:sulfur',
                                                    title: 'Tainted Gold',
                                                    description:
                                                      'Collect a tainted gold ingot from a crimson altar',
                                                    children: [
                                                      {
                                                        item: 'vintageimprovements:sulfuric_acid_bucket',
                                                        title: 'Tainted Gold',
                                                        description:
                                                          'Collect a tainted gold ingot from a crimson altar',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: 'nethersdelight:hoglin_loin',
                                                    title: 'Pig Iron',
                                                    description:
                                                      'Forge a pig iron ingot',
                                                    children: [
                                                      {
                                                        item: 'tconstruct:pig_iron_ingot',
                                                        title: 'Pig Iron',
                                                        description:
                                                          'Forge a pig iron ingot',
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: 'occultism:iesnium_ingot',
                                                    title: 'Iesnium Ingot',
                                                    description:
                                                      'Forge an iesnium ingot',
                                                    children: [
                                                      {
                                                        item: 'occultism:storage_controller',
                                                        title:
                                                          'Dimensional Storage',
                                                        description:
                                                          'Craft a Dimensional Storage Actuator',
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
                        item: 'kubejs:egg_whip',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [],
                      },
                      {
                        item: 'kubejs:flaxseed_oil_bucket',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                      },
                    ],
                  },
                ],
              },
              {
                item: 'create:propeller',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [
                  {
                    item: 'create:encased_fan',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                    children: [
                      {
                        item: 'minecraft:soul_torch',
                        title: 'Soul Torch',
                        description: 'Create a soul torch',
                        children: [
                          {
                            item: 'cold_sweat:soulspring_lamp',
                            title: 'Soulspring Lamp',
                            id: 'soulspring_lamp',
                            description:
                              'Craft a soulspring lamp to stay cool in the nether',
                          },
                        ],
                      },
                      {
                        item: 'minecraft:magma_cream',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [
                          {
                            item: 'tconstruct:magma_bucket',
                            title: 'Bread',
                            description: 'Make your first piece of bread',
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
          {
            item: 'chemlib:copper_plate',
            title: 'Bread',
            description: 'Make your first piece of bread',
            children: [
              {
                item: 'create:mechanical_crafter',
                title: 'Bread',
                description: 'Make your first piece of bread',
                children: [
                  {
                    item: 'create:blaze_burner',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                    children: [
                      {
                        item: 'kubejs:cinder_ingot',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [
                          {
                            item: 'adchimneys:metal_chimney',
                            title: 'Chimney',
                            description: 'Craft a metal chimney',
                            children: [
                              {
                                item: 'adchimneys:metal_vent',
                                title: 'Vent',
                                description: 'Craft a metal vent',
                                children: [
                                  {
                                    item: 'adchimneys:metal_pump',
                                    title: 'Pump',
                                    description: 'Craft a metal pump',
                                  },
                                ],
                              },
                            ],
                          },

                          {
                            item: 'rankine:evaporation_tower',
                            title: 'Bread',
                            description: 'Make your first piece of bread',
                            children: [
                              {
                                item: 'rankine:trona',
                                title: 'Bread',
                                description: 'Make your first piece of bread',
                                children: [
                                  {
                                    item: 'kubejs:carbonate_slurry_bucket',
                                    title: 'Bread',
                                    description:
                                      'Make your first piece of bread',
                                    children: [
                                      {
                                        item: 'kubejs:soda_ash',
                                        title: 'Bread',
                                        description:
                                          'Make your first piece of bread',
                                        children: [
                                          {
                                            item: 'kubejs:baking_soda',
                                            title: 'Bread',
                                            description:
                                              'Make your first piece of bread',
                                            children: [
                                              {
                                                item: 'kubejs:baking_powder',
                                                title: 'Bread',
                                                description:
                                                  'Make your first piece of bread',
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
                  {
                    item: 'create:fluid_tank',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                    children: [
                      {
                        item: 'create:spout',
                        title: 'Bread',
                        description: 'Make your first piece of bread',
                        children: [],
                      },
                    ],
                  },
                  {
                    item: 'create:crushing_wheel',
                    title: 'Bread',
                    description: 'Make your first piece of bread',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
});
