onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        {id: 'gateways', recipe: () => {}, children: []},
        {
          id: 'guidebooks',
          recipe: () => {
            ['croptopia:documentation', 'industrialforegoing:manual'].forEach(
              id => event.remove({id: id})
            );
            // croptopia guide
            event
              .shapeless('croptopia:guide', [
                'minecraft:book',
                'croptopia:knife',
              ])
              .stage('chapter_5_1');

            // industrial foregoing manual
            event
              .shapeless(
                Item.of(
                  'patchouli:guide_book',
                  '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'
                ),
                ['minecraft:book', 'industrialforegoing:dryrubber']
              )
              .stage('chapter_5_1');

            // big book of bees

            // lexica botanica
          },
        },
        {
          id: 'end_eyes',
          recipe: () => {
            event
              .shaped('endrem:cursed_eye', ['aba', 'bcb', 'aba'], {
                a: 'naturesaura:tainted_gold',
                b: 'botania:pixie_dust',
                c: 'farmersdelight:hamburger',
              })
              .stage('eye_cursed')
              .id('inconvenient:cursed_eye');
          },
        },
        {
          id: 'lost_stories',
          recipe: () => {
            event
              .shaped(`kubejs:bumblezone_lost_story`, ['abb', 'bcc', 'bcc'], {
                a: 'paragon_textiles:silk',
                b: 'minecraft:leather',
                c: `kubejs:bumblezone_lost_page`,
              })
              .stage('chapter_5_1');
          },
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'botania:manasteel_helmet',
              'botania:manasteel_chestplate',
              'botania:manasteel_leggings',
              'botania:manasteel_boots',
              'botania:elementium_helmet',
              'botania:elementium_chestplate',
              'botania:elementium_leggings',
              'botania:elementium_boots',
              'botania:terrasteel_helmet',
              'botania:terrasteel_chestplate',
              'botania:terrasteel_leggings',
              'botania:terrasteel_boots',
            ].forEach(id => event.remove({id: id}));
            stageArmors(event, [
              {
                tier: 'botania:manasteel',
                previousTier: 'hem:steampunkoutfit',
                input: 'botania:manasteel_ingot',
                stage: 'chapter_5_1',
                master: 'manasteel',
              },
              {
                tier: 'botania:terrasteel',
                previousTier: 'botania:manasteel',
                input: 'botania:terrasteel_ingot',
                stage: 'chapter_5_1',
                master: 'terrasteel',
              },
              {
                tier: 'botania:elementium',
                previousTier: 'botania:terrasteel',
                input: 'botania:elementium_ingot',
                stage: 'chapter_5_1',
                master: 'elementium',
              },
            ]);
          },
        },
      ],
    },
  ]);

  event.custom({
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
  });
});
