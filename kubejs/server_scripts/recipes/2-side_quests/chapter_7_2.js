onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        {id: 'gateways', recipe: () => {}, children: []},
        {id: 'guidebooks', recipe: () => {}, children: []},
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
              'pneumaticcraft:pneumatic_helmet',
              'pneumaticcraft:pneumatic_chestplate',
              'pneumaticcraft:pneumatic_leggings',
              'pneumaticcraft:pneumatic_boots',
            ].forEach(id => event.remove({id: id}));

            event
              .shaped(
                'pneumaticcraft:pneumatic_helmet',
                ['aba', 'aca', 'aaa'],
                {
                  a: 'pneumaticcraft:air_canister',
                  b: 'pneumaticcraft:printed_circuit_board',
                  c: 'charcoal_pit:orichalcum_helmet',
                }
              )
              .stage('chapter_7_2')
              .id('inconvenient:shaped_pneumatic_helmet');

            event
              .shaped(
                'pneumaticcraft:pneumatic_chestplate',
                ['aba', 'aca', 'aaa'],
                {
                  a: 'pneumaticcraft:air_canister',
                  b: 'pneumaticcraft:printed_circuit_board',
                  c: 'charcoal_pit:orichalcum_chestplate',
                }
              )
              .stage('chapter_7_2')
              .id('inconvenient:shaped_pneumatic_chestplate');

            event
              .shaped(
                'pneumaticcraft:pneumatic_leggings',
                ['aba', 'aca', 'aaa'],
                {
                  a: 'pneumaticcraft:air_canister',
                  b: 'pneumaticcraft:printed_circuit_board',
                  c: 'charcoal_pit:orichalcum_leggings',
                }
              )
              .stage('chapter_7_2')
              .id('inconvenient:shaped_pneumatic_leggings');

            event
              .shaped('pneumaticcraft:pneumatic_boots', ['aba', 'aca', 'aaa'], {
                a: 'pneumaticcraft:air_canister',
                b: 'pneumaticcraft:printed_circuit_board',
                c: 'charcoal_pit:orichalcum_boots',
              })
              .stage('chapter_7_2')
              .id('inconvenient:shaped_pneumatic_boots');
          },
        },
      ],
    },
    {
      id: 'coins',
      recipe: () => {
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'kubejs:lead_coin'},
            pattern: [
              '  aaaaa  ',
              ' aaaaaaa ',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              ' aaaaaaa ',
              '  aaaaa  ',
            ],
            key: {
              a: `kubejs:iron_coin`,
            },
          })
          .id('inconvenient:mechanical_lead_coin');
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'kubejs:silver_coin'},
            pattern: [
              '  aaaaa  ',
              ' aaaaaaa ',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              ' aaaaaaa ',
              '  aaaaa  ',
            ],
            key: {
              a: `kubejs:lead_coin`,
            },
          })
          .id('inconvenient:mechanical_silver_coin');
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'kubejs:zinc_coin'},
            pattern: [
              '  aaaaa  ',
              ' aaaaaaa ',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              ' aaaaaaa ',
              '  aaaaa  ',
            ],
            key: {
              a: `kubejs:silver_coin`,
            },
          })
          .id('inconvenient:mechanical_zinc_coin');
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'kubejs:aluminum_coin'},
            pattern: [
              '  aaaaa  ',
              ' aaaaaaa ',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              ' aaaaaaa ',
              '  aaaaa  ',
            ],
            key: {
              a: `kubejs:zinc_coin`,
            },
          })
          .id('inconvenient:mechanical_aluminum_coin');
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'kubejs:gold_coin'},
            pattern: [
              '  aaaaa  ',
              ' aaaaaaa ',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              ' aaaaaaa ',
              '  aaaaa  ',
            ],
            key: {
              a: `kubejs:aluminum_coin`,
            },
          })
          .id('inconvenient:mechanical_gold_coin');
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'kubejs:steel_coin'},
            pattern: [
              '  aaaaa  ',
              ' aaaaaaa ',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              ' aaaaaaa ',
              '  aaaaa  ',
            ],
            key: {
              a: `kubejs:gold_coin`,
            },
          })
          .id('inconvenient:mechanical_steel_coin');
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'kubejs:nickel_coin'},
            pattern: [
              '  aaaaa  ',
              ' aaaaaaa ',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              ' aaaaaaa ',
              '  aaaaa  ',
            ],
            key: {
              a: `kubejs:steel_coin`,
            },
          })
          .id('inconvenient:mechanical_nickel_coin');
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'kubejs:platinum_coin'},
            pattern: [
              '  aaaaa  ',
              ' aaaaaaa ',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              'aaaaaaaaa',
              ' aaaaaaa ',
              '  aaaaa  ',
            ],
            key: {
              a: `kubejs:nickel_coin`,
            },
          })
          .id('inconvenient:mechanical_platinum_coin');
      },
    },
    {
      id: 'cd',
      recipe: () => {
        ['bloodmagic:altar/bleeding_edge_music'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'bloodmagic:altar',
            input: {
              item: 'bloodmagic:rawdemoniteblock',
            },
            altarSyphon: 1000000,
            consumptionRate: 1000,
            drainRate: 1000,
            upgradeLevel: 5,
            output: {
              item: 'bloodmagic:bleedingedge',
            },
          })
          .id('inconvenient:altar_bleedingedge');
      },
    },
    {
      id: 'metals',
      recipe: () => {
        [
          'tconstruct:smeltery/melting/emerald/ore_singular',
          'tconstruct:smeltery/entity_melting/illager',
          'tconstruct:smeltery/entity_melting/villager',
        ].forEach(id => event.remove({id: id}));
      },
    },
    {
      id: 'archmage_blood_orb',
      recipe: () => {
        ['bloodmagic:altar/archmagebloodorb'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'bloodmagic:altar',
            output: {
              item: 'bloodmagic:archmagebloodorb',
            },
            input: {
              item: 'bloodmagic:dungeon_metal',
            },
            altarSyphon: 10000000,
            upgradeLevel: 4,
            consumptionRate: 1500,
            drainRate: 1500,
          })
          .id('inconvenient:altar_archmagebloodorb');
      },
    },
  ]);
});
