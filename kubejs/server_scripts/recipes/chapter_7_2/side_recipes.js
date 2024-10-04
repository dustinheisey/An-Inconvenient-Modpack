onEvent('recipes', (event) => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        { id: 'gateways', recipe: () => {}, children: [] },
        { id: 'guidebooks', recipe: () => {}, children: [] },
        {
          id: 'end_eyes',
          recipe: () => {}
        },
        {
          id: 'lost_stories',
          recipe: () => {}
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'pneumaticcraft:pneumatic_helmet',
              'pneumaticcraft:pneumatic_chestplate',
              'pneumaticcraft:pneumatic_leggings',
              'pneumaticcraft:pneumatic_boots'
            ].forEach((id) => event.remove({ id: id }));

            event
              .shaped(
                'pneumaticcraft:pneumatic_helmet',
                ['aba', 'aca', 'aaa'],
                {
                  a: 'pneumaticcraft:air_canister',
                  b: 'pneumaticcraft:printed_circuit_board',
                  c: 'charcoal_pit:orichalcum_helmet'
                }
              )
              .stage('chapter_7_2');

            event
              .shaped(
                'pneumaticcraft:pneumatic_chestplate',
                ['aba', 'aca', 'aaa'],
                {
                  a: 'pneumaticcraft:air_canister',
                  b: 'pneumaticcraft:printed_circuit_board',
                  c: 'charcoal_pit:orichalcum_chestplate'
                }
              )
              .stage('chapter_7_2');

            event
              .shaped(
                'pneumaticcraft:pneumatic_leggings',
                ['aba', 'aca', 'aaa'],
                {
                  a: 'pneumaticcraft:air_canister',
                  b: 'pneumaticcraft:printed_circuit_board',
                  c: 'charcoal_pit:orichalcum_leggings'
                }
              )
              .stage('chapter_7_2');

            event
              .shaped('pneumaticcraft:pneumatic_boots', ['aba', 'aca', 'aaa'], {
                a: 'pneumaticcraft:air_canister',
                b: 'pneumaticcraft:printed_circuit_board',
                c: 'charcoal_pit:orichalcum_boots'
              })
              .stage('chapter_7_2');
          }
        }
      ]
    }
  ]);
});
