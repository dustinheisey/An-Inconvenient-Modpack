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
            ['immersiveengineering:crafting/manual'].forEach(id =>
              event.remove({id: id})
            );
            // pnc:r manual
            // engineer's manual
            event
              .shapeless('immersiveengineering:manual', [
                'minecraft:book',
                'immersiveengineering:plate_steel',
              ])
              .stage('chapter_5_2');
          },
        },
        {
          id: 'end_eyes',
          recipe: () => {
            event
              .shaped('endrem:black_eye', ['aba', 'bcb', 'aba'], {
                a: 'cataclysm:witherite_ingot',
                b: 'hem:circuit_board',
                c: 'create:shadow_steel',
              })
              .stage('eye_black')
              .id('inconvenient:black_eye');
          },
        },
        {
          id: 'lost_stories',
          recipe: () => {
            event
              .shaped(`kubejs:blueleaf_lost_story`, ['abb', 'bcc', 'bcc'], {
                a: 'paragon_textiles:silk',
                b: 'minecraft:leather',
                c: `kubejs:blueleaf_lost_page`,
              })
              .stage('chapter_5_2');
          },
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'charcoal_pit:orichalcum_helmet',
              'charcoal_pit:orichalcum_chestplate',
              'charcoal_pit:orichalcum_leggings',
              'charcoal_pit:orichalcum_boots',
              'pneumaticcraft:compressed_iron_helmet',
              'pneumaticcraft:compressed_iron_chestplate',
              'pneumaticcraft:compressed_iron_leggings',
              'pneumaticcraft:compressed_iron_boots',
              'rankine:brigadine_helmet_from_smithing',
              'rankine:brigadine_chestplate_from_smithing',
              'rankine:brigadine_leggings_from_smithing',
              'rankine:brigadine_boots_from_smithing',
            ].forEach(id => event.remove({id: id}));
            stageArmors(event, [
              {
                tier: 'rankine:brigandine',
                previousTier: 'hem:steampunkoutfit',
                input: 'rankine:steel_ingot',
                stage: 'chapter_5_2',
                master: 'brigandine',
              },
              {
                tier: 'pneumaticcraft:compressed_iron',
                previousTier: 'rankine:brigandine',
                input: 'pneumaticcraft:ingot_iron_compressed',
                stage: 'chapter_5_2',
                master: 'compressed_iron',
              },
              {
                tier: 'charcoal_pit:orichalcum',
                previousTier: 'pneumaticcraft:compressed_iron',
                input: 'charcoal_pit:alloy_orichalcum',
                stage: 'chapter_4',
                master: 'orichalcum',
              },
            ]);
          },
        },
      ],
    },
  ]);

  event.shaped('rankine:simple_magnet', ['a a', 'aaa'], {
    a: 'rankine:nickel_ingot',
  });

  // guns
  event.shaped(
    Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'),
    [' a ', 'bbb', 'ccc'],
    {
      a: 'immersiveengineering:graphite_electrode',
      b: 'minecraft:black_dye',
      c: 'minecraft:paper',
    }
  );

  event.shaped(
    Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'),
    [' a ', 'bbb', 'ccc'],
    {
      a: 'immersiveengineering:empty_casing',
      b: 'minecraft:orange_dye',
      c: 'minecraft:paper',
    }
  );

  event.shaped(`rankine:magnetometer`, [' a ', 'bcb', ' a '], {
    a: 'rankine:cupronickel_ingot',
    b: 'extendedcrafting:redstone_ingot',
    c: 'extendedcrafting:ender_ingot',
  });
  event.shaped(`pneumaticcraft:turbine_blade`, [' ab', 'ab ', 'a  '], {
    a: 'pneumaticcraft:ingot_iron_compressed',
    b: 'chemlib:copper_plate',
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'hem:shotgun'},
    pattern: ['ab ', 'cda', 'e  '],
    key: {
      a: 'hem:rose_copper_ingot',
      b: 'tconstruct:blazing_blood_bucket',
      c: 'minecraft:gunpowder',
      d: 'hem:copparite',
      e: 'hem:bluleaf_planks',
    },
  });

  event.custom({
    type: 'rankine:mixing',
    mixTime: 100,
    matScale: 1,
    ingredientTotal: 3,
    fluidInput: {
      fluid: 'minecraft:water',
      amount: 50,
    },
    inputs: [
      {
        tag: 'forge:gravel',
        min: 0.4,
        max: 0.6,
      },
      {
        tag: 'forge:sand',
        min: 0.2,
        max: 0.3,
      },
      {
        tag: 'forge:bitumen',
        min: 0.1,
        max: 0.2,
      },
    ],
    result: {item: 'rankine:asphalt'},
  });
  event.custom({
    type: 'rankine:mixing',
    mixTime: 100,
    matScale: 1,
    ingredientTotal: 4,
    fluidInput: {
      fluid: 'minecraft:water',
      amount: 50,
    },
    inputs: [
      {
        tag: 'forge:gravel',
        min: 0.4,
        max: 0.6,
      },
      {
        tag: 'forge:sand',
        min: 0.2,
        max: 0.3,
      },
      {
        tag: 'forge:bitumen',
        min: 0.1,
        max: 0.2,
      },
      {
        id: 'rankine:black_dacite',
        min: 0.1,
        max: 0.2,
      },
    ],
    result: {item: 'rankine:blue_asphalt'},
  });
  event.custom({
    type: 'rankine:mixing',
    mixTime: 100,
    matScale: 1,
    ingredientTotal: 4,
    fluidInput: {
      fluid: 'minecraft:water',
      amount: 50,
    },
    inputs: [
      {
        tag: 'forge:gravel',
        min: 0.4,
        max: 0.6,
      },
      {
        tag: 'forge:sand',
        min: 0.2,
        max: 0.3,
      },
      {
        tag: 'forge:bitumen',
        min: 0.1,
        max: 0.2,
      },
      {
        id: 'rankine:black_marble',
        min: 0.1,
        max: 0.2,
      },
    ],
    result: {item: 'rankine:dark_gray_asphalt'},
  });
  event.custom({
    type: 'rankine:mixing',
    mixTime: 100,
    matScale: 1,
    ingredientTotal: 4,
    fluidInput: {
      fluid: 'minecraft:water',
      amount: 50,
    },
    inputs: [
      {
        tag: 'forge:gravel',
        min: 0.4,
        max: 0.6,
      },
      {
        tag: 'forge:sand',
        min: 0.2,
        max: 0.3,
      },
      {
        tag: 'forge:bitumen',
        min: 0.1,
        max: 0.2,
      },
      {
        tag: 'forge:stones/andesite',
        min: 0.1,
        max: 0.2,
      },
    ],
    result: {item: 'rankine:gray_asphalt'},
  });
  event.custom({
    type: 'rankine:mixing',
    mixTime: 100,
    matScale: 1,
    ingredientTotal: 4,
    fluidInput: {
      fluid: 'minecraft:water',
      amount: 50,
    },
    inputs: [
      {
        tag: 'forge:gravel',
        min: 0.4,
        max: 0.6,
      },
      {
        tag: 'forge:sand',
        min: 0.2,
        max: 0.3,
      },
      {
        tag: 'forge:bitumen',
        min: 0.1,
        max: 0.2,
      },
      {
        tag: 'forge:stones/peridotite',
        min: 0.1,
        max: 0.2,
      },
    ],
    result: {item: 'rankine:green_asphalt'},
  });
  event.custom({
    type: 'rankine:mixing',
    mixTime: 100,
    matScale: 1,
    ingredientTotal: 4,
    fluidInput: {
      fluid: 'minecraft:water',
      amount: 50,
    },
    inputs: [
      {
        tag: 'forge:gravel',
        min: 0.4,
        max: 0.6,
      },
      {
        tag: 'forge:sand',
        min: 0.2,
        max: 0.3,
      },
      {
        tag: 'forge:bitumen',
        min: 0.1,
        max: 0.2,
      },
      {
        tag: 'forge:stones/granite',
        min: 0.1,
        max: 0.2,
      },
    ],
    result: {item: 'rankine:red_asphalt'},
  });

  setSideRecipes('chapter_5_2', []);
});
