onEvent('recipes', event => {
  ['extendedcrafting:ender_ingot', 'inconvenient:arc_ender_ingot'].forEach(id =>
    event.remove({id: id})
  );
  ['immersiveengineering:crafting/sample_drill'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'immersiveengineering:sample_drill'},
      pattern: ['aba', 'aba', 'cdc'],
      key: {
        a: 'immersiveengineering:steel_scaffolding_standard',
        b: 'immersiveengineering:steel_fence',
        c: 'immersiveengineering:light_engineering',
        d: 'create:precision_mechanism',
      },
    })
    .id('inconvenient:mechanical_sample_drill');
  event
    .custom({
      type: 'tconstruct:casting_table',
      fluid: {name: 'pneumaticcraft:plastic', amount: 1000},
      result: 'pneumaticcraft:plastic',
      cooling_time: 100,
    })
    .id('inconvenient:casting_table_plastic');

  event
    .custom({
      type: 'pneumaticcraft:thermo_plant',
      exothermic: false,
      fluid_input: {
        type: 'pneumaticcraft:fluid',
        amount: 100,
        tag: 'forge:diesel',
      },
      fluid_output: {
        amount: 80,
        fluid: 'pneumaticcraft:kerosene',
      },
      item_output: {
        item: 'rankine:bitumen',
      },
      pressure: 2.0,
      temperature: {
        min_temp: 573,
      },
    })
    .id('inconvenient:thermo_plant_kerosene');

  event
    .custom({
      type: 'pneumaticcraft:thermo_plant',
      exothermic: false,
      fluid_input: {
        type: 'pneumaticcraft:fluid',
        amount: 100,
        tag: 'forge:gasoline',
      },
      fluid_output: {
        amount: 80,
        fluid: 'immersivepetroleum:naphtha',
      },
      pressure: 2.0,
      temperature: {
        min_temp: 573,
      },
    })
    .id('inconvenient:thermo_plant_naptha');

  event
    .custom({
      type: 'pneumaticcraft:refinery',
      input: {
        type: 'pneumaticcraft:fluid',
        amount: 10,
        fluid: 'immersivepetroleum:crudeoil',
      },
      results: [
        {
          amount: 4,
          fluid: 'pneumaticcraft:diesel',
        },
        {
          amount: 4,
          fluid: 'pneumaticcraft:kerosene',
        },
      ],
      temperature: {
        min_temp: 373,
      },
    })
    .id('inconvenient:refinery_oil_1');
  event
    .custom({
      type: 'pneumaticcraft:refinery',
      input: {
        type: 'pneumaticcraft:fluid',
        amount: 10,
        fluid: 'immersivepetroleum:crudeoil',
      },
      results: [
        {
          amount: 2,
          fluid: 'pneumaticcraft:diesel',
        },
        {
          amount: 3,
          fluid: 'pneumaticcraft:kerosene',
        },
        {
          amount: 3,
          fluid: 'pneumaticcraft:gasoline',
        },
      ],
      temperature: {
        min_temp: 373,
      },
    })
    .id('inconvenient:refinery_oil_2');
  event
    .custom({
      type: 'pneumaticcraft:refinery',
      input: {
        type: 'pneumaticcraft:fluid',
        amount: 10,
        fluid: 'immersivepetroleum:crudeoil',
      },
      results: [
        {
          amount: 2,
          fluid: 'pneumaticcraft:diesel',
        },
        {
          amount: 3,
          fluid: 'pneumaticcraft:kerosene',
        },
        {
          amount: 3,
          fluid: 'pneumaticcraft:gasoline',
        },
        {
          amount: 2,
          fluid: 'immersivepetroleum:naphtha',
        },
      ],
      temperature: {
        min_temp: 373,
      },
    })
    .id('inconvenient:refinery_oil_3');

  event
    .custom({
      type: 'immersiveengineering:refinery',
      result: {
        fluid: 'pneumaticcraft:plastic',
        amount: 8,
      },
      catalyst: {
        item: 'kubejs:catalyst',
      },
      input0: {
        tag: 'forge:ethylene',
        amount: 8,
      },
      energy: 240,
    })
    .id('inconvenient:refinery_plastic');

  event
    .custom({
      type: 'immersiveengineering:arc_furnace',
      results: [{item: 'kubejs:catalyst'}],
      additives: [
        {item: 'chemlib:chromium_oxide'},
        {item: 'chemlib:silicon_dioxide'},
      ],
      input: {item: 'minecraft:potion', nbt: '{Potion:"minecraft:water"}'},
      time: 100,
      energy: 51200,
    })
    .id('inconvenient:arc_catalyst');

  event
    .custom({
      type: 'create:mixing',
      results: [{item: 'hem:copparite'}],
      ingredients: [
        {item: 'hem:bronze_ingot'},
        {item: 'hem:bronze_ingot'},
        {item: 'hem:bronze_ingot'},
        {item: 'hem:bronze_ingot'},
        {item: 'hem:rose_copper_ingot'},
        {item: 'hem:rose_copper_ingot'},
        {item: 'hem:rose_copper_ingot'},
        {item: 'hem:rose_copper_ingot'},
      ],
      heatRequirement: 'heated',
    })
    .id('inconvenient:mixing_copparite');

  event
    .custom({
      type: 'create:mixing',
      results: [{item: 'extendedcrafting:redstone_ingot'}],
      ingredients: [
        {item: 'minecraft:iron_ingot'},
        {fluid: 'immersiveengineering:redstone_acid', amount: 250},
      ],
      heatRequirement: 'superheated',
    })
    .id('inconvenient:mixing_redstone_ingot');

  event
    .custom({
      type: 'create:mixing',
      results: [{item: 'chemlib:chromium_oxide'}],
      ingredients: [
        {item: 'rankine:chromium_nugget'},
        {item: '3x rankine:oxygen_gas_bottle'},
      ],
      heatRequirement: 'superheated',
    })
    .id('inconvenient:mixing_chromium_oxide');
  event
    .custom({
      type: 'create:mixing',
      results: [{item: 'chemlib:silicon_dioxide'}],
      ingredients: [
        {item: 'chemlib:silicon_dust'},
        {count: 2, item: 'rankine:oxygen_gas_bottle'},
      ],
      heatRequirement: 'superheated',
    })
    .id('inconvenient:mixing_silicon_dioxide');

  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'pneumaticcraft:refinery'},
      pattern: ['ada', 'bcb', 'ada'],
      key: {
        a: 'pneumaticcraft:reinforced_stone_slab',
        b: 'extendedcrafting:redstone_ingot',
        c: 'pneumaticcraft:small_tank',
        d: 'pneumaticcraft:plastic',
      },
    })
    .id('inconvenient:mechanical_refinery');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'pneumaticcraft:refinery_output'},
      pattern: ['ada', 'bcb', 'ada'],
      key: {
        a: 'pneumaticcraft:reinforced_stone_slab',
        b: '#forge:glass',
        c: 'rankine:titanium_ingot',
        d: 'pneumaticcraft:plastic',
      },
    })
    .id('inconvenient:mechanical_refinery_output');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'pneumaticcraft:thermopneumatic_processing_plant'},
      pattern: ['ada', 'bcb', 'ada'],
      key: {
        a: 'pneumaticcraft:reinforced_stone_slab',
        b: 'pneumaticcraft:small_tank',
        c: 'pneumaticcraft:pressure_tube',
        d: 'pneumaticcraft:plastic',
      },
    })
    .id('inconvenient:mechanical_thermo_plant');
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: `pneumaticcraft:fluid_mixer`},
      pattern: ['aba', 'cdc', 'beb'],
      key: {
        a: 'pneumaticcraft:plastic',
        b: 'pneumaticcraft:small_tank',
        c: 'pneumaticcraft:reinforced_brick_wall',
        d: 'pneumaticcraft:turbine_rotor',
        e: 'pneumaticcraft:pressure_tube',
      },
    })
    .id('inconvenient:mechanical_fluid_mixer');

  event
    .custom({
      type: 'rankine:treetapping',
      tapTime: 400,
      input: {
        item: 'hem:crystalized_log',
      },
      result: {
        fluid: 'kubejs:crystallized_sap',
        amount: 200,
      },
    })
    .id('inconvenient:treetapping_crystallized_sap');

  event
    .custom({
      type: 'rankine:evaporation',
      processTime: 12000,
      input: {
        fluid: 'immersivepetroleum:crudeoil',
      },
      outputs: [
        {
          item: 'minecraft:soul_sand',
          weight: 100,
        },
        {
          item: 'rankine:silicon_nugget',
          weight: 5,
        },
        {
          item: 'rankine:carbon_nugget',
          weight: 10,
        },
      ],
    })
    .id('inconvenient:evaporation_crudeoil');

  event
    .custom({
      type: 'rankine:evaporation',
      processTime: 12000,
      input: {
        fluid: 'immersivepetroleum:benzene',
      },
      outputs: [
        {
          item: 'minecraft:sand',
          weight: 30,
        },
        {
          item: 'rankine:silt',
          weight: 50,
        },
        {
          item: 'rankine:silicon_nugget',
          weight: 5,
        },
        {
          item: 'rankine:carbon',
          weight: 10,
        },
        {
          item: 'rankine:chromium_nugget',
          weight: 5,
        },
      ],
    })
    .id('inconvenient:evaporation_benzene');
});

onEvent('server.datapack.high_priority', event => {
  event.addJson(`immersiveengineering:recipes/mixer/redstone_acid.json`, {});

  [
    'beryl',
    'bituminous_coal',
    'cooperite',
    'uraninite',
    'pentlandite',
    'wolframite',
    'laterite',
  ].forEach(id =>
    event.addJson(`immersiveengineering:recipes/mineral/${id}.json`, {})
  );

  event.addJson('immersiveengineering:recipes/mineral/bituminous_coal.json', {
    type: 'immersiveengineering:mineral_mix',
    ores: [
      {
        chance: 0.8,
        output: {
          item: 'rankine:bituminous_ore',
        },
      },
      {
        chance: 0.2,
        output: {
          item: 'rankine:subbituminous_ore',
        },
      },
      {
        chance: 0.1,
        output: {
          item: 'rankine:sulfur',
        },
      },
    ],
    spoils: [
      {
        chance: 0.2,
        output: {
          item: 'minecraft:gravel',
        },
      },
      {
        chance: 0.5,
        output: {
          item: 'minecraft:cobblestone',
        },
      },
      {
        chance: 0.3,
        output: {
          item: 'minecraft:cobbled_deepslate',
        },
      },
    ],
    dimensions: ['hem:blueleaf'],
    weight: 25,
    fail_chance: 0.05,
  });

  event.addJson('immersiveengineering:recipes/mineral/uranium.json', {
    type: 'immersiveengineering:mineral_mix',
    ores: [
      {
        chance: 0.7,
        output: {
          tag: 'forge:ores/uranium',
        },
      },
      {
        chance: 0.3,
        output: {
          tag: 'forge:ores/lead',
        },
      },
    ],
    spoils: [
      {
        chance: 0.2,
        output: {
          item: 'minecraft:gravel',
        },
      },
      {
        chance: 0.5,
        output: {
          item: 'minecraft:cobblestone',
        },
      },
      {
        chance: 0.3,
        output: {
          item: 'minecraft:cobbled_deepslate',
        },
      },
    ],
    dimensions: ['hem:blueleaf'],
    weight: 10,
    fail_chance: 0.15,
  });

  event.addJson('immersiveengineering:recipes/mineral/ilmenite.json', {
    type: 'immersiveengineering:mineral_mix',
    ores: [
      {
        chance: 0.7,
        output: {
          item: 'rankine:bauxite_ore',
        },
      },
      {
        chance: 0.1,
        output: {
          item: 'rankine:ilmenite_ore',
        },
      },
    ],
    spoils: [
      {
        chance: 0.2,
        output: {
          item: 'minecraft:gravel',
        },
      },
      {
        chance: 0.5,
        output: {
          item: 'minecraft:cobblestone',
        },
      },
      {
        chance: 0.3,
        output: {
          item: 'minecraft:cobbled_deepslate',
        },
      },
    ],
    dimensions: ['hem:blueleaf'],
    weight: 20,
    fail_chance: 0.05,
  });

  event.addJson('immersiveengineering:recipes/mineral/pentlandite.json', {
    type: 'immersiveengineering:mineral_mix',
    ores: [
      {
        chance: 0.35,
        output: {
          item: 'rankine:pentlandite_ore',
        },
      },
      {
        chance: 0.3,
        output: {
          tag: 'forge:dusts/sulfur',
        },
      },
    ],
    spoils: [
      {
        chance: 0.2,
        output: {
          item: 'minecraft:gravel',
        },
      },
      {
        chance: 0.5,
        output: {
          item: 'minecraft:cobblestone',
        },
      },
      {
        chance: 0.3,
        output: {
          item: 'minecraft:cobbled_deepslate',
        },
      },
    ],
    dimensions: ['hem:blueleaf'],
    weight: 25,
    fail_chance: 0.05,
  });
});
