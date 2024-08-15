onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'chapter_5_2', {
    icon: 'immersiveengineering:wirecoil_steel',
    item: 'create:refined_radiance',
    title: 'Chapter 5: Path of Ambition',
    description: 'Start a business',
    background: 'im:textures/block/steel_casing.png',
    children: [
      {
        title: 'Sooty Truth',
        description: 'Find a page from a lost story in Blueleaf',
        item: 'kubejs:blueleaf_lost_page',
        children: [
          {
            title: 'Welcome to Blueleaf',
            id: 'blueleaf_lost_story',
            frame: 'challenge',
            description: 'Remake the lost story from Blueleaf',
            item: 'kubejs:blueleaf_lost_story',
          },
        ],
      },
      {
        item: 'immersiveengineering:blast_furnace',
        title: 'Blast Furnace',
        description: 'Construct a blast furnace',
        children: [
          {
            item: 'rankine:steel_ingot',
            title: 'Steel',
            description: 'Create a steel ingot',
            children: [
              {
                item: 'pneumaticcraft:ingot_iron_compressed',
                title: 'Compressed Iron',
                description: 'Compress an iron ingot',
                children: [
                  {
                    item: 'pneumaticcraft:air_compressor',
                    title: 'Air Compressor',
                    description: 'Craft an air compressor',
                  },
                  {
                    item: 'pneumaticcraft:pressure_chamber_wall',
                    title: 'Pressure Chamber',
                    description: 'Construct a pressure chamber',
                    children: [
                      {
                        item: 'pneumaticcraft:etching_acid_bucket',
                        title: 'Etching Acid',
                        description: 'Create a bucket of etching acid',
                        children: [
                          {
                            item: 'immersiveengineering:redstone_acid_bucket',
                            title: 'Redstone Acid',
                            description:
                              'Transform the etching acid to redstone acid',
                            children: [
                              {
                                item: 'extendedcrafting:redstone_ingot',
                                title: 'Redstone Ingot',
                                description: 'Create a redstone ingot',
                                children: [
                                  {
                                    item: 'immersiveengineering:rs_engineering',
                                    title: 'Redstone Engineering',
                                    description:
                                      'Craft a redstone engineering block',
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
                item: 'immersiveengineering:plate_steel',
                title: 'Steel Plate',
                description: 'Press a steel plate',
                children: [
                  {
                    item: 'immersiveengineering:gunpart_drum',
                    title: 'Revolver Drum',
                    description: 'Craft a revolver drum',
                    children: [
                      {
                        item: 'immersiveengineering:revolver',
                        title: 'Revolver',
                        description: 'Craft a revolver',
                      },
                    ],
                  },
                  {
                    item: 'immersiveengineering:component_steel',
                    title: 'Steel Component',
                    description: 'Craft a steel mechanical component',
                    children: [
                      {
                        item: 'immersiveengineering:heavy_engineering',
                        title: 'Heavy Engineering',
                        description: 'Craft a heavy engineering block',
                        children: [
                          {
                            item: 'immersivepetroleum:naphtha_bucket',
                            title: 'Naphtha',
                            description:
                              'Collect naptha from a distillation tower',
                            children: [
                              {
                                item: 'immersivepetroleum:naphtha_cracked_bucket',
                                title: 'Cracked Naphtha',
                                description:
                                  'Process Naphtha in a high pressure refinery unit',
                                children: [
                                  {
                                    item: 'immersivepetroleum:ethylene_bucket',
                                    title: 'Ethylene',
                                    description:
                                      'Distill the cracked naphtha and create ethylene',
                                    children: [
                                      {
                                        item: 'pneumaticcraft:plastic_bucket',
                                        title: 'Molten Plastic',
                                        description:
                                          'Add a catalyst & create molten plastic',
                                        children: [
                                          {
                                            id: 'plastic',
                                            item: 'pneumaticcraft:plastic',
                                            title: 'Plastic Sheet',
                                            description:
                                              'Create a plastic sheet',
                                            frame: 'challenge',
                                            children: [
                                              {
                                                parent: 'plastic',
                                                item: 'pneumaticcraft:printed_circuit_board',
                                                title: 'Printed Circuit Board',
                                                description:
                                                  'Transform the pcb into a printed circuit board',
                                                frame: 'goal',
                                                children: [
                                                  {
                                                    item: 'pneumaticcraft:assembly_controller',
                                                    title: 'Assemby Automation',
                                                    description:
                                                      'Craft an assembly controller',
                                                  },
                                                  {
                                                    item: 'immersiveengineering:component_electronic_adv',
                                                    title:
                                                      'Electronic Component',
                                                    description:
                                                      'Create an advanced electronic component',
                                                    frame: 'goal',
                                                    children: [
                                                      {
                                                        item: 'adpother:aerometer',
                                                        title: 'Aerometer',
                                                        description:
                                                          'Create an aerometer',
                                                      },
                                                      {
                                                        item: 'pneumaticcraft:amadron_tablet',
                                                        title: 'Amadron',
                                                        id: 'hunger',
                                                        description:
                                                          'Create an amadron tablet',
                                                        frame: 'goal',
                                                        children: [
                                                          {
                                                            id: 'prophecy',
                                                            parent: 'hunger',
                                                            item: 'kubejs:iron_coin',
                                                            title: 'Wealth',
                                                            description:
                                                              'Create an amadron tablet',
                                                            frame: 'goal',
                                                            reward:
                                                              'im:eyes/eye_black',
                                                            children: [
                                                              {
                                                                item: 'endrem:black_eye',
                                                                title:
                                                                  'Industry',
                                                                description:
                                                                  'Have a flashback after gathering an iron coin pile',
                                                                frame:
                                                                  'challenge',
                                                                id: 'eye_black',
                                                                parent:
                                                                  'prophecy',
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
                                                parent: 'plastic',
                                                item: 'pneumaticcraft:thermopneumatic_processing_plant',
                                                title:
                                                  'Thermopneumatic Processing Plant',
                                                description:
                                                  'Craft an thermopneumatic processing plant',
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        item: 'immersiveengineering:acetaldehyde_bucket',
                                        title: 'Acetaldehyde',
                                        description:
                                          'Refine the ethylene into acetaldehyde',
                                        children: [
                                          {
                                            item: 'immersiveengineering:phenolic_resin_bucket',
                                            title: 'Phenolic Resin',
                                            description:
                                              'Refine the acetaldehyde into phenolic resin',
                                            children: [
                                              {
                                                item: 'immersiveengineering:plate_duroplast',
                                                title: 'Duroplast Sheet',
                                                description:
                                                  'Cast the resin into a sheet',
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
            ],
          },
        ],
      },
      {
        item: 'immersiveengineering:coke_oven',
        title: 'Coke Oven',
        description: 'Construct a coke oven',
        frame: 'goal',
        children: [
          {
            item: 'immersiveengineering:creosote_bucket',
            title: 'Creosote Oil',
            description: 'Collect a bucket of creosote oil',
            frame: 'goal',
            children: [
              {
                item: 'immersiveengineering:treated_wood_horizontal',
                title: 'Treated Wood',
                description: 'Craft some treated wood',
                frame: 'goal',
                children: [
                  {
                    item: 'immersiveengineering:workbench',
                    title: 'Workbench',
                    description: "Craft an engineer's workbench",
                    frame: 'goal',
                    children: [
                      {
                        item: 'immersiveengineering:component_iron',
                        title: 'Iron Component',
                        description: 'Craft an iron mechanical component',
                        children: [
                          {
                            item: 'immersiveengineering:light_engineering',
                            title: 'Light Engineering',
                            description: 'Craft a light engineering block',
                          },
                        ],
                      },
                      {
                        item: 'immersiveengineering:electron_tube',
                        title: 'Vacuum Tube',
                        description: 'Create an vacuum tube',
                        children: [
                          {
                            item: 'create:precision_mechanism',
                            title: 'Precision Mechanism',
                            description: 'Create a precision mechanism',
                            frame: 'goal',
                            children: [
                              {
                                item: 'immersiveengineering:sample_drill',
                                title: 'Core Sample Drill',
                                description: 'Craft a core sample drill',
                                frame: 'goal',
                                children: [
                                  {
                                    item: 'rankine:pentlandite',
                                    title: 'Pentlandite',
                                    description:
                                      'Find a pentlandite deposit in blueleaf',
                                    children: [
                                      {
                                        item: 'rankine:nickel_ingot',
                                        title: 'Nickel',
                                        description: 'Forge a nickel ingot',
                                        children: [
                                          {
                                            item: 'rankine:alnico_magnet',
                                            title: 'Alnico Magnet',
                                            description:
                                              'Craft an alnico magnet',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'rankine:uraninite',
                                    title: 'Uraninite',
                                    description:
                                      'Find a uraninite deposit in blueleaf',
                                    frame: 'goal',
                                    children: [
                                      {
                                        item: 'rankine:uranium_ingot',
                                        title: 'Uranium',
                                        description: 'Forge a uranium ingot',
                                        frame: 'goal',
                                        children: [
                                          {
                                            item: 'extendedcrafting:ender_ingot',
                                            title: 'Ender Ingot',
                                            description:
                                              'Create an ender ingot',
                                            frame: 'goal',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'rankine:ilmenite',
                                    title: 'Ilmenite',
                                    description:
                                      'Find an ilmenite deposit in blueleaf',
                                    children: [
                                      {
                                        item: 'rankine:titanium_ingot',
                                        title: 'Titanium',
                                        description: 'Forge a titanium ingot',
                                        children: [
                                          {
                                            item: 'extendedcrafting:elite_table',
                                            title: 'Elite Table',
                                            description: 'Craft an elite table',
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
            item: 'immersiveengineering:coal_coke',
            title: 'Coal Coke',
            description: 'Produce a piece of coal coke',
            children: [
              {
                item: 'immersiveengineering:dust_coke',
                title: 'Coke Dust',
                description: 'Crush the coal coke',
                children: [
                  {
                    item: 'immersiveengineering:ingot_hop_graphite',
                    title: 'HOP Graphite',
                    description: 'Create a HOP graphite ingot',
                    children: [
                      {
                        item: 'compactcrafting:field_projector',
                        title: 'Field Projector',
                        description: 'Craft a field projector',
                        children: [
                          {
                            item: 'compactmachines:personal_shrinking_device',
                            title: 'Personal Shrinking Device',
                            description: 'Craft a personal shrinking device',
                          },
                        ],
                      },
                      {
                        item: 'immersiveengineering:graphite_electrode',
                        title: 'Graphite Electrode',
                        description:
                          'Create a graphite electrode to power an arc furnace',
                        children: [
                          {
                            item: 'kubejs:catalyst',
                            title: 'Catalyst',
                            description:
                              'Create a catalyst for your chemical engineering',
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
            hide: true,
            id: 'hope',
            criteria: {
              collect: {
                trigger: 'inventory_changed',
                conditions: {
                  items: [
                    {
                      items: ['croptopia:cheeseburger', 'kubejs:iron_coin'],
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  });
});
