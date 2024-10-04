onEvent('recipes', (event) => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        { id: 'gateways', recipe: () => {}, children: [] },
        {
          id: 'guidebooks',
          recipe: () => {
            ['tofucraft:integration/book'].forEach((id) =>
              event.remove({ id: id })
            );
            // tofubook
            event.shapeless(
              Item.of(
                'patchouli:guide_book',
                '{"patchouli:book":"tofucraft:tofu_book"}'
              ),
              ['minecraft:book', '#forge:tofu']
            );
          }
        },
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
              'minecraft:diamond_helmet',
              'minecraft:diamond_chestplate',
              'minecraft:diamond_leggings',
              'minecraft:diamond_boots',
              'mekanism:mekasuit_helmet',
              'mekanism:mekasuit_bodyarmor',
              'mekanism:mekasuit_pants',
              'mekanism:mekasuit_boots'
            ].forEach((id) => event.remove({ id: id }));

            event
              .shaped('minecraft:diamond_helmet', ['aaa', 'aba'], {
                a: 'minecraft:diamond',
                b: 'botania:elementium_helmet'
              })
              .stage('chapter_7_1');

            event
              .shaped('minecraft:diamond_helmet', ['aaa', 'a a'], {
                a: 'minecraft:diamond'
              })
              .stage('armor_diamond');

            event
              .shaped('minecraft:diamond_chestplate', ['aba', 'aaa', 'aaa'], {
                a: 'minecraft:diamond',
                b: 'botania:elementium_chestplate'
              })
              .stage('chapter_7_1');

            event
              .shaped('minecraft:diamond_chestplate', ['a a', 'aaa', 'aaa'], {
                a: 'minecraft:diamond'
              })
              .stage('armor_diamond');

            event
              .shaped('minecraft:diamond_leggings', ['aaa', 'aba', 'a a'], {
                a: 'minecraft:diamond',
                b: 'botania:elementium_leggings'
              })
              .stage('chapter_7_1');

            event
              .shaped('minecraft:diamond_leggings', ['aaa', 'a a', 'a a'], {
                a: 'minecraft:diamond'
              })
              .stage('armor_diamond');

            event
              .shaped('minecraft:diamond_boots', ['aba', 'a a'], {
                a: 'minecraft:diamond',
                b: 'botania:elementium_boots'
              })
              .stage('chapter_7_1');

            event
              .shaped('minecraft:diamond_boots', ['a a', 'a a'], {
                a: 'minecraft:diamond'
              })
              .stage('armor_diamond');

            event
              .shaped('mekanism:mekasuit_helmet', ['aba', 'aca', 'ded'], {
                a: 'mekanism:hdpe_sheet',
                b: 'mekanism:ultimate_control_circuit',
                c: 'minecraft:diamond_helmet',
                d: 'mekanism:pellet_polonium',
                e: 'mekanism:basic_induction_cell'
              })
              .stage('chapter_7_1');

            event
              .shaped('mekanism:mekasuit_bodyarmor', ['aba', 'aca', 'ded'], {
                a: 'mekanism:hdpe_sheet',
                b: 'mekanism:ultimate_control_circuit',
                c: 'minecraft:diamond_chestplate',
                d: 'mekanism:pellet_polonium',
                e: 'mekanism:basic_induction_cell'
              })
              .stage('chapter_7_1');

            event
              .shaped('mekanism:mekasuit_pants', ['aba', 'aca', 'ded'], {
                a: 'mekanism:hdpe_sheet',
                b: 'mekanism:ultimate_control_circuit',
                c: 'minecraft:diamond_leggings',
                d: 'mekanism:pellet_polonium',
                e: 'mekanism:basic_induction_cell'
              })
              .stage('chapter_7_1');

            event
              .shaped('mekanism:mekasuit_boots', ['aba', 'aca', 'ded'], {
                a: 'mekanism:hdpe_sheet',
                b: 'mekanism:ultimate_control_circuit',
                c: 'minecraft:diamond_boots',
                d: 'mekanism:pellet_polonium',
                e: 'mekanism:basic_induction_cell'
              })
              .stage('chapter_7_1');
          }
        }
      ]
    }
  ]);
});
