onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'gateways', {
    item: 'gateways:gate_pearl',
    title: 'Collections: Gateways',
    background: 'architects_palette:textures/block/onyx.png',
    children: [
      {
        icon: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_everbright_gateway"}',
        id: 'everbright',
        title: 'Small Aquatic Gateway',
        description: 'Open a small gateway to Everbright',
        criteria: {
          gateway: {
            trigger: 'minecraft:item_used_on_block',
            conditions: {
              location: {
                dimension: 'minecraft:overworld',
              },
              item: {
                items: ['gateways:gate_pearl'],
                nbt: '{gateway:"gateways:small_everbright_gateway"}',
              },
            },
          },
        },
        children: [
          {
            parent: 'everbright',
            icon: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:medium_everbright_gateway"}',
            title: 'Medium Aquatic Gateway',
            description: 'Open a medium gateway to Everbright',
            criteria: {
              gateway: {
                trigger: 'minecraft:item_used_on_block',
                conditions: {
                  location: {
                    dimension: 'minecraft:overworld',
                  },
                  item: {
                    items: ['gateways:gate_pearl'],
                    nbt: '{gateway:"gateways:medium_everbright_gateway"}',
                  },
                },
              },
            },
            children: [
              {
                icon: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:large_everbright_gateway"}',
                title: 'Large Aquatic Gateway',
                description: 'Open a large gateway to Everbright',
                criteria: {
                  gateway: {
                    trigger: 'minecraft:item_used_on_block',
                    conditions: {
                      location: {
                        dimension: 'minecraft:overworld',
                      },
                      item: {
                        items: ['gateways:gate_pearl'],
                        nbt: '{gateway:"gateways:large_everbright_gateway"}',
                      },
                    },
                  },
                },
                children: [
                  {
                    title: 'Aquatic Token',
                    description: 'Collect a token from Everbright',
                    item: 'kubejs:everbright_token',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_undergarden_gateway"}',
        id: 'undergarden',
        title: 'Small Forgotten Gateway',
        description: 'Open a small gateway to the Undergarden',
        criteria: {
          gateway: {
            trigger: 'minecraft:item_used_on_block',
            conditions: {
              location: {
                dimension: 'minecraft:overworld',
              },
              item: {
                items: ['gateways:gate_pearl'],
                nbt: '{gateway:"gateways:small_undergarden_gateway"}',
              },
            },
          },
        },
        children: [
          {
            parent: 'undergarden',
            icon: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:medium_undergarden_gateway"}',
            title: 'Medium Forgotten Gateway',
            description: 'Open a medium gateway to the Undergarden',
            criteria: {
              gateway: {
                trigger: 'minecraft:item_used_on_block',
                conditions: {
                  location: {
                    dimension: 'minecraft:overworld',
                  },
                  item: {
                    items: ['gateways:gate_pearl'],
                    nbt: '{gateway:"gateways:medium_undergarden_gateway"}',
                  },
                },
              },
            },
            children: [
              {
                icon: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:large_undergarden_gateway"}',
                title: 'Large Forgotten Gateway',
                description: 'Open a large gateway to the Undergarden',
                criteria: {
                  gateway: {
                    trigger: 'minecraft:item_used_on_block',
                    conditions: {
                      location: {
                        dimension: 'minecraft:overworld',
                      },
                      item: {
                        items: ['gateways:gate_pearl'],
                        nbt: '{gateway:"gateways:large_undergarden_gateway"}',
                      },
                    },
                  },
                },
                children: [
                  {
                    title: 'Forgotten Token',
                    description: 'Collect a token from the Undergarden',
                    item: 'kubejs:undergarden_token',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_everdawn_gateway"}',
        id: 'everdawn',
        title: 'Small Poisonous Gateway',
        description: 'Open a small gateway to Everdawn',
        criteria: {
          gateway: {
            trigger: 'minecraft:item_used_on_block',
            conditions: {
              location: {
                dimension: 'minecraft:overworld',
              },
              item: {
                items: ['gateways:gate_pearl'],
                nbt: '{gateway:"gateways:small_everdawn_gateway"}',
              },
            },
          },
        },
        children: [
          {
            parent: 'everdawn',
            icon: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:medium_everdawn_gateway"}',
            title: 'Medium Poisonous Gateway',
            description: 'Open a medium gateway to Everdawn',
            criteria: {
              gateway: {
                trigger: 'minecraft:item_used_on_block',
                conditions: {
                  location: {
                    dimension: 'minecraft:overworld',
                  },
                  item: {
                    items: ['gateways:gate_pearl'],
                    nbt: '{gateway:"gateways:medium_everdawn_gateway"}',
                  },
                },
              },
            },
            children: [
              {
                icon: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:large_everdawn_gateway"}',
                title: 'Large Poisonous Gateway',
                description: 'Open a large gateway to Everdawn',
                criteria: {
                  gateway: {
                    trigger: 'minecraft:item_used_on_block',
                    conditions: {
                      location: {
                        dimension: 'minecraft:overworld',
                      },
                      item: {
                        items: ['gateways:gate_pearl'],
                        nbt: '{gateway:"gateways:large_everdawn_gateway"}',
                      },
                    },
                  },
                },
                children: [
                  {
                    title: 'Poisonous Token',
                    description: 'Collect a token from Everdawn',
                    item: 'kubejs:everdawn_token',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_twilight_gateway"}',
        id: 'twilight',
        title: 'Small Magical Gateway',
        description: 'Open a small gateway to the Twilight Forest',
        criteria: {
          gateway: {
            trigger: 'minecraft:item_used_on_block',
            conditions: {
              location: {
                dimension: 'minecraft:overworld',
              },
              item: {
                items: ['gateways:gate_pearl'],
                nbt: '{gateway:"gateways:small_twilight_gateway"}',
              },
            },
          },
        },
        children: [
          {
            parent: 'twilight',
            icon: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:medium_twilight_gateway"}',
            title: 'Medium Magical Gateway',
            description: 'Open a medium gateway to the Twilight Forest',
            criteria: {
              gateway: {
                trigger: 'minecraft:item_used_on_block',
                conditions: {
                  location: {
                    dimension: 'minecraft:overworld',
                  },
                  item: {
                    items: ['gateways:gate_pearl'],
                    nbt: '{gateway:"gateways:medium_twilight_gateway"}',
                  },
                },
              },
            },
            children: [
              {
                icon: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:large_twilight_gateway"}',
                title: 'Large Magical Gateway',
                description: 'Open a large gateway to the Twilight Forest',
                criteria: {
                  gateway: {
                    trigger: 'minecraft:item_used_on_block',
                    conditions: {
                      location: {
                        dimension: 'minecraft:overworld',
                      },
                      item: {
                        items: ['gateways:gate_pearl'],
                        nbt: '{gateway:"gateways:large_twilight_gateway"}',
                      },
                    },
                  },
                },
                children: [
                  {
                    title: 'Magical Token',
                    description: 'Collect a token from the Twilight Forest',
                    item: 'kubejs:twilight_token',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_nether_gateway"}',
        id: 'nether',
        title: 'Small Hellish Gateway',
        description: 'Open a small gateway to the Nether',
        criteria: {
          gateway: {
            trigger: 'minecraft:item_used_on_block',
            conditions: {
              location: {
                dimension: 'minecraft:overworld',
              },
              item: {
                items: ['gateways:gate_pearl'],
                nbt: '{gateway:"gateways:small_nether_gateway"}',
              },
            },
          },
        },
        children: [
          {
            parent: 'nether',
            icon: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:medium_nether_gateway"}',
            title: 'Medium Hellish Gateway',
            description: 'Open a medium gateway to the Nether',
            criteria: {
              gateway: {
                trigger: 'minecraft:item_used_on_block',
                conditions: {
                  location: {
                    dimension: 'minecraft:overworld',
                  },
                  item: {
                    items: ['gateways:gate_pearl'],
                    nbt: '{gateway:"gateways:medium_nether_gateway"}',
                  },
                },
              },
            },
            children: [
              {
                icon: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:large_nether_gateway"}',
                title: 'Large Hellish Gateway',
                description: 'Open a large gateway to the Nether',
                criteria: {
                  gateway: {
                    trigger: 'minecraft:item_used_on_block',
                    conditions: {
                      location: {
                        dimension: 'minecraft:overworld',
                      },
                      item: {
                        items: ['gateways:gate_pearl'],
                        nbt: '{gateway:"gateways:large_nether_gateway"}',
                      },
                    },
                  },
                },
                children: [
                  {
                    title: 'Hellish Token',
                    description: 'Collect a token from the Nether',
                    item: 'kubejs:nether_token',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_blueleaf_gateway"}',
        id: 'blueleaf',
        title: 'Small Sooty Gateway',
        description: 'Open a small gateway to Blueleaf',
        criteria: {
          gateway: {
            trigger: 'minecraft:item_used_on_block',
            conditions: {
              location: {
                dimension: 'minecraft:overworld',
              },
              item: {
                items: ['gateways:gate_pearl'],
                nbt: '{gateway:"gateways:small_blueleaf_gateway"}',
              },
            },
          },
        },
        children: [
          {
            parent: 'blueleaf',
            icon: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:medium_blueleaf_gateway"}',
            title: 'Medium Sooty Gateway',
            description: 'Open a medium gateway to Blueleaf',
            criteria: {
              gateway: {
                trigger: 'minecraft:item_used_on_block',
                conditions: {
                  location: {
                    dimension: 'minecraft:overworld',
                  },
                  item: {
                    items: ['gateways:gate_pearl'],
                    nbt: '{gateway:"gateways:medium_blueleaf_gateway"}',
                  },
                },
              },
            },
            children: [
              {
                icon: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:large_blueleaf_gateway"}',
                title: 'Large Sooty Gateway',
                description: 'Open a large gateway to Blueleaf',
                criteria: {
                  gateway: {
                    trigger: 'minecraft:item_used_on_block',
                    conditions: {
                      location: {
                        dimension: 'minecraft:overworld',
                      },
                      item: {
                        items: ['gateways:gate_pearl'],
                        nbt: '{gateway:"gateways:large_blueleaf_gateway"}',
                      },
                    },
                  },
                },
                children: [
                  {
                    title: 'Sooty Token',
                    description: 'Collect a token from Blueleaf',
                    item: 'kubejs:blueleaf_token',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_bumblezone_gateway"}',
        id: 'bumblezone',
        title: 'Small Buzzing Gateway',
        description: 'Open a small gateway to the Bumblezone',
        criteria: {
          gateway: {
            trigger: 'minecraft:item_used_on_block',
            conditions: {
              location: {
                dimension: 'minecraft:overworld',
              },
              item: {
                items: ['gateways:gate_pearl'],
                nbt: '{gateway:"gateways:small_bumblezone_gateway"}',
              },
            },
          },
        },
        children: [
          {
            parent: 'bumblezone',
            icon: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:medium_bumblezone_gateway"}',
            title: 'Medium Buzzing Gateway',
            description: 'Open a medium gateway to the Bumblezone',
            criteria: {
              gateway: {
                trigger: 'minecraft:item_used_on_block',
                conditions: {
                  location: {
                    dimension: 'minecraft:overworld',
                  },
                  item: {
                    items: ['gateways:gate_pearl'],
                    nbt: '{gateway:"gateways:medium_bumblezone_gateway"}',
                  },
                },
              },
            },
            children: [
              {
                icon: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:large_bumblezone_gateway"}',
                title: 'Large Buzzing Gateway',
                description: 'Open a large gateway to the Bumblezone',
                criteria: {
                  gateway: {
                    trigger: 'minecraft:item_used_on_block',
                    conditions: {
                      location: {
                        dimension: 'minecraft:overworld',
                      },
                      item: {
                        items: ['gateways:gate_pearl'],
                        nbt: '{gateway:"gateways:large_bumblezone_gateway"}',
                      },
                    },
                  },
                },
                children: [
                  {
                    title: 'Buzzing Token',
                    description: 'Collect a token from the Bumblezone',
                    item: 'kubejs:bumblezone_token',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:small_end_gateway"}',
        id: 'end',
        title: 'Small Mysterious Gateway',
        description: 'Open a small gateway to the End',
        criteria: {
          gateway: {
            trigger: 'minecraft:item_used_on_block',
            conditions: {
              location: {
                dimension: 'minecraft:overworld',
              },
              item: {
                items: ['gateways:gate_pearl'],
                nbt: '{gateway:"gateways:small_end_gateway"}',
              },
            },
          },
        },
        children: [
          {
            parent: 'end',
            icon: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:medium_end_gateway"}',
            title: 'Medium Mysterious Gateway',
            description: 'Open a medium gateway to the End',
            criteria: {
              gateway: {
                trigger: 'minecraft:item_used_on_block',
                conditions: {
                  location: {
                    dimension: 'minecraft:overworld',
                  },
                  item: {
                    items: ['gateways:gate_pearl'],
                    nbt: '{gateway:"gateways:medium_end_gateway"}',
                  },
                },
              },
            },
            children: [
              {
                icon: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:large_end_gateway"}',
                title: 'Large Mysterious Gateway',
                description: 'Open a large gateway to the End',
                criteria: {
                  gateway: {
                    trigger: 'minecraft:item_used_on_block',
                    conditions: {
                      location: {
                        dimension: 'minecraft:overworld',
                      },
                      item: {
                        items: ['gateways:gate_pearl'],
                        nbt: '{gateway:"gateways:large_end_gateway"}',
                      },
                    },
                  },
                },
                children: [
                  {
                    title: 'Mysterious Token',
                    description: 'Collect a token from the End',
                    item: 'kubejs:end_token',
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
