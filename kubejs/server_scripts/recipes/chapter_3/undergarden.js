onEvent('recipes', event => {
  setMilestoneRecipes({
    id: 'catalyst',
    recipe: () => {
      event.shaped('undergarden:catalyst', ['aba', 'bcb', 'aba'], {
        a: 'occultism:crushed_end_stone',
        b: 'rankine:shale',
        c: 'naturesaura:infused_iron',
      });
    },
    children: [
      {
        id: 'crushed_end_stone',
        recipe: () => {
          event.custom({
            type: 'create:milling',
            ingredients: [{item: 'minecraft:end_stone'}],
            results: [{item: '3x occultism:crushed_end_stone'}],
            processingTime: 50,
          });
        },
        children: [
          {
            id: 'crusher',
            recipe: () => {},
            children: [{id: 'book_of_binding', recipe: () => {}, children: []}],
          },
          {
            id: 'end_stone',
            recipe: () => {
              event.custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:summon',
                activation_item: {
                  type: 'forge:nbt',
                  item: 'naturesaura:aura_bottle',
                  count: 1,
                  nbt: '{stored_type:"naturesaura:overworld"}',
                },
                duration: 30,
                pentacle_id: 'occultism:possess_foliot',
                entity_to_summon: 'occultism:possessed_endermite',
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/possess_endermite',
                },
                ingredients: [
                  {
                    item: 'minecraft:dirt',
                  },
                  {
                    item: 'minecraft:stone',
                  },
                  {
                    item: 'minecraft:dirt',
                  },
                  {
                    item: 'minecraft:stone',
                  },
                ],
                result: {
                  item: 'occultism:jei_dummy/none',
                },
              });
            },
            children: [
              {
                id: 'hedrins_lure',
                recipe: () => {},
                children: [
                  {
                    id: 'gold_chalk',
                    recipe: () => {},
                    children: [
                      {
                        id: 'impure_gold_chalk',
                        recipe: () => {
                          event.shaped(
                            'occultism:chalk_gold_impure',
                            ['ab', 'b '],
                            {
                              a: 'occultism:chalk_white_impure',
                              b: 'occultism:crushed_end_stone',
                            }
                          );
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                id: 'sunlight',
                recipe: () => {},
                children: [
                  {id: 'glass_bottle', recipe: () => {}, children: []},
                ],
              },
              //snowflake obsidian
            ],
          },
        ],
      },
      {
        id: 'shale',
        recipe: () => {},
        children: [
          {
            id: 'infused_stone',
            recipe: () => {
              event.custom({
                type: 'naturesaura:altar',
                input: {item: 'minecraft:stone'},
                output: {item: 'naturesaura:infused_stone'},
                aura_type: 'naturesaura:overworld',
                aura: 100,
                time: 80,
              });
              event.custom({
                type: 'rankine:rock_generator',
                genType: 'intrusive_igneous',
                result: {block: 'rankine:slate'},
                input1: {item: 'rankine:shale'},
                input2: {item: 'naturesaura:infused_iron_block'},
              });
            },
            children: [
              {
                id: 'natural_altar',
                recipe: () => {
                  ['naturesaura:tree_ritual/nature_altar'].forEach(id =>
                    event.remove({id: id})
                  );
                  event
                    .custom({
                      type: 'naturesaura:tree_ritual',
                      sapling: {item: 'blue_skies:bluebright_sapling'},
                      ingredients: [
                        {item: 'minecraft:stone'},
                        {item: 'minecraft:stone'},
                        {item: 'minecraft:stone'},
                        {item: 'rankine:sterling_silver_ingot'},
                        {item: 'rankine:pewter_ingot'},
                        {item: 'naturesaura:gold_leaf'},
                        {item: 'naturesaura:token_joy'},
                      ],
                      time: 250,
                      output: {item: 'naturesaura:nature_altar'},
                    })
                    .id('inconvenient:nature_altar');
                },
                children: [
                  {
                    id: 'token_of_joy',
                    recipe: () => {
                      event
                        .custom({
                          type: 'naturesaura:tree_ritual',
                          sapling: {item: 'minecraft:oak_sapling'},
                          ingredients: [
                            {item: 'occultism:crushed_end_stone'},
                            {item: 'minecraft:cod'},
                            {item: 'rankine:sterling_silver_ingot'},
                            {item: 'naturesaura:gold_leaf'},
                            {
                              type: 'forge:nbt',
                              item: 'naturesaura:aura_bottle',
                              count: 1,
                              nbt: '{stored_type:"naturesaura:overworld"}',
                            },
                          ],
                          time: 250,
                          output: {item: 'naturesaura:token_joy'},
                        })
                        .id('inconvenient:token_joy');
                    },
                    children: [],
                  },
                ],
              },
              {
                id: 'overworld_aura',
                children: [
                  {
                    id: 'aura_bottle',
                    recipe: () => {
                      event.shaped(
                        'naturesaura:bottle_two_the_rebottling',
                        [' a ', 'bcb', ' b '],
                        {
                          a: 'rankine:cork',
                          b: '#forge:glass',
                          c: 'naturesaura:gold_powder',
                        }
                      );
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {id: 'infused_ingot', recipe: () => {}, children: []},
    ],
  });
});
