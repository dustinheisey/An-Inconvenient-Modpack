onEvent('server.datapack.high_priority', (event) => {
  addAdvancements(event, 'dimension_travel', {
    hide: true,
    criteria: {
      explore: {
        trigger: 'minecraft:changed_dimension',
        conditions: {
          from: 'minecraft:overworld',
          to: 'blue_skies:everbright'
        }
      }
    },
    children: [
      {
        hide: true,
        id: 'everbright',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'blue_skies:everbright'
            }
          }
        }
      },
      {
        hide: true,
        id: 'undergarden',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'undergarden:undergarden'
            }
          }
        }
      },
      {
        hide: true,
        id: 'everdawn',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'blue_skies:everdawn'
            }
          }
        }
      },
      {
        hide: true,
        id: 'twilight',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'twilightforest:twilight_forest'
            }
          }
        },
        reward: 'im:eyes/eye_evil'
      },
      {
        hide: true,
        id: 'nether',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'minecraft:the_nether'
            }
          }
        },
        reward: 'im:eyes/eye_nether'
      },
      {
        hide: true,
        id: 'blueleaf',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'hem:blueleaf'
            }
          }
        }
      },
      {
        hide: true,
        id: 'bumblezone',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'bumblezone:bumblezone'
            }
          }
        }
      },
      {
        hide: true,
        id: 'tofuland',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'tofucraft:tofuland'
            }
          }
        }
      },
      {
        hide: true,
        id: 'alfheim',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'mythicbotany:alfheim'
            }
          }
        }
      },
      {
        hide: true,
        id: 'end',
        criteria: {
          explore: {
            trigger: 'minecraft:changed_dimension',
            conditions: {
              from: 'minecraft:overworld',
              to: 'minecraft:the_end'
            }
          }
        }
      }
    ]
  });
});
