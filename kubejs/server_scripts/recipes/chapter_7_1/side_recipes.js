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
                pentacle_id: 'occultism:craft_marid',
                ingredients: [
                  {
                    item: 'hem:copparite',
                  },
                  {
                    item: 'rankine:vulcanized_rubber',
                  },
                  {
                    item: 'hem:lush_flower_1',
                  },
                  {
                    item: 'hem:shotgun_shell',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    item: 'hem:copparite',
                  },
                  {
                    item: 'rankine:vulcanized_rubber',
                  },
                  {
                    item: 'hem:lush_flower_1',
                  },
                  {
                    item: 'hem:shotgun_shell',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    item: 'rankine:steel_ingot',
                  },
                  {
                    item: 'rankine:steel_ingot',
                  },
                ],
                result: {
                  item: 'gateways:gate_pearl',
                  nbt: '{gateway:"gateways:small_end_gateway"}',
                },
              })
              .id('inconvenient:ritual_end_gateway');
          },
          children: [],
        },
        {
          id: 'guidebooks',
          recipe: () => {
            ['tofucraft:integration/book'].forEach(id =>
              event.remove({id: id})
            );
            // tofubook
            event
              .shapeless(
                Item.of(
                  'patchouli:guide_book',
                  '{"patchouli:book":"tofucraft:tofu_book"}'
                ),
                ['minecraft:book', '#forge:tofu']
              )
              .id('inconvenient:shapeless_tofu_book');
          },
        },
        {
          id: 'end_eyes',
          recipe: () => {},
        },
        {
          id: 'lost_stories',
          recipe: () => {},
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'minecraft:diamond_helmet',
              'minecraft:diamond_chestplate',
              'minecraft:diamond_leggings',
              'minecraft:diamond_boots',
              'mekanism:mekasuit_helmet',
              'mekanism:mekasuit_bodyarmor',
              'mekanism:mekasuit_pants',
              'mekanism:mekasuit_boots',
            ].forEach(id => event.remove({id: id}));

            event
              .shaped('minecraft:diamond_helmet', ['aaa', 'aba'], {
                a: 'minecraft:diamond',
                b: 'botania:elementium_helmet',
              })
              .stage('chapter_7_1')
              .id('inconvenient:shaped_diamond_helmet');

            event
              .shaped('minecraft:diamond_helmet', ['aaa', 'a a'], {
                a: 'minecraft:diamond',
              })
              .stage('armor_diamond')
              .id('inconvenient:shaped_master_diamond_helmet');

            event
              .shaped('minecraft:diamond_chestplate', ['aba', 'aaa', 'aaa'], {
                a: 'minecraft:diamond',
                b: 'botania:elementium_chestplate',
              })
              .stage('chapter_7_1')
              .id('inconvenient:shaped_diamond_chestplate');

            event
              .shaped('minecraft:diamond_chestplate', ['a a', 'aaa', 'aaa'], {
                a: 'minecraft:diamond',
              })
              .stage('armor_diamond')
              .id('inconvenient:shaped_master_diamond_chestplate');

            event
              .shaped('minecraft:diamond_leggings', ['aaa', 'aba', 'a a'], {
                a: 'minecraft:diamond',
                b: 'botania:elementium_leggings',
              })
              .stage('chapter_7_1')
              .id('inconvenient:shaped_diamond_leggings');

            event
              .shaped('minecraft:diamond_leggings', ['aaa', 'a a', 'a a'], {
                a: 'minecraft:diamond',
              })
              .stage('armor_diamond')
              .id('inconvenient:shaped_master_diamond_leggings');

            event
              .shaped('minecraft:diamond_boots', ['aba', 'a a'], {
                a: 'minecraft:diamond',
                b: 'botania:elementium_boots',
              })
              .stage('chapter_7_1')
              .id('inconvenient:shaped_diamond_boots');

            event
              .shaped('minecraft:diamond_boots', ['a a', 'a a'], {
                a: 'minecraft:diamond',
              })
              .stage('armor_diamond')
              .id('inconvenient:shaped_master_diamond_boots');

            event
              .shaped('mekanism:mekasuit_helmet', ['aba', 'aca', 'ded'], {
                a: 'mekanism:hdpe_sheet',
                b: 'mekanism:ultimate_control_circuit',
                c: 'minecraft:diamond_helmet',
                d: 'mekanism:pellet_polonium',
                e: 'mekanism:basic_induction_cell',
              })
              .stage('chapter_7_1')
              .id('inconvenient:shaped_mekasuit_helmet');

            event
              .shaped('mekanism:mekasuit_bodyarmor', ['aba', 'aca', 'ded'], {
                a: 'mekanism:hdpe_sheet',
                b: 'mekanism:ultimate_control_circuit',
                c: 'minecraft:diamond_chestplate',
                d: 'mekanism:pellet_polonium',
                e: 'mekanism:basic_induction_cell',
              })
              .stage('chapter_7_1')
              .id('inconvenient:shaped_mekasuit_chestplate');

            event
              .shaped('mekanism:mekasuit_pants', ['aba', 'aca', 'ded'], {
                a: 'mekanism:hdpe_sheet',
                b: 'mekanism:ultimate_control_circuit',
                c: 'minecraft:diamond_leggings',
                d: 'mekanism:pellet_polonium',
                e: 'mekanism:basic_induction_cell',
              })
              .stage('chapter_7_1')
              .id('inconvenient:shaped_mekasuit_leggings');

            event
              .shaped('mekanism:mekasuit_boots', ['aba', 'aca', 'ded'], {
                a: 'mekanism:hdpe_sheet',
                b: 'mekanism:ultimate_control_circuit',
                c: 'minecraft:diamond_boots',
                d: 'mekanism:pellet_polonium',
                e: 'mekanism:basic_induction_cell',
              })
              .stage('chapter_7_1')
              .id('inconvenient:shaped_mekasuit_boots');
          },
        },
      ],
    },
  ]);

  ['naturesaura:tree_ritual/eye_improved'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'naturesaura:tree_ritual',
      sapling: {item: 'hexerei:mahogany_sapling'},
      ingredients: [
        {item: 'botania:rune_gluttony'},
        {item: 'botania:rune_greed'},
        {item: 'naturesaura:sky_ingot'},
        {item: 'naturesaura:sky_ingot'},
        {item: 'naturesaura:gold_powder'},
        {item: 'naturesaura:gold_powder'},
        {item: 'naturesaura:eye'},
        {item: 'botania:rune_pride'},
      ],
      time: 250,
      output: {item: 'naturesaura:eye_improved'},
    })
    .id('inconvenient:tree_ritual_environmental_ocular');
});

onEvent('server.datapack.high_priority', event => {
  // End
  registerGateways(event, {
    id: 'end',
    color: '#218c74',
    dimension: 'the End',
    waves: [
      {
        type: 'mob',
        entities: ['minecraft:bee'],
      },
    ],
    restorations: [{id: 'minecraft:bee', name: 'Bee'}],
    relics: [
      'relics:shadow_glaive',
      'relics:elytra_booster',
      'relics:enders_hand',
      'relics:chorus_inhibitor',
      'relics:midnight_robe',
      'relics:reflection_necklace',
      'relics:spatial_sign',
      'artifacts:shock_pendant',
    ],
    rewards: [{id: 'kubejs:end_token', count: 1}],
  });
});
