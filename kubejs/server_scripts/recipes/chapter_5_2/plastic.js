onEvent('recipes', event => {
  event.custom({
    type: 'tconstruct:casting_table',
    fluid: {name: 'pneumaticcraft:plastic', amount: 1000},
    result: 'pneumaticcraft:plastic',
    cooling_time: 100,
  });

  event.custom({
    type: 'botania:pure_daisy',
    input: {type: 'block', block: 'rankine:rose_marble'},
    output: {name: 'botania:livingrock'},
  });

  event.custom({
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
  });

  event.custom({
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
  });

  event.custom({
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
  });

  event.custom({
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
  });
  event.custom({
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
  });
  event.custom({
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
  });

  event.custom({
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
  });

  event.custom({
    type: 'immersiveengineering:arc_furnace',
    results: [{item: 'kubejs:catalyst'}],
    additives: [
      {item: 'chemlib:chromium_oxide'},
      {item: 'chemlib:silicon_dioxide'},
    ],
    input: {item: 'minecraft:potion', nbt: '{Potion:"minecraft:water"}'},
    time: 100,
    energy: 51200,
  });

  event.custom({
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
  });

  event.custom({
    type: 'create:mixing',
    results: [{item: 'extendedcrafting:redstone_ingot'}],
    ingredients: [
      {item: 'minecraft:iron_ingot'},
      {fluid: 'immersiveengineering:redstone_acid', amount: 250},
    ],
    heatRequirement: 'superheated',
  });

  event.custom({
    type: 'create:mixing',
    results: [{item: 'chemlib:chromium_oxide'}],
    ingredients: [
      {item: 'rankine:chromium_nugget'},
      {item: '3x rankine:oxygen_gas_bottle'},
    ],
    heatRequirement: 'superheated',
  });
  event.custom({
    type: 'create:mixing',
    results: [{item: 'chemlib:silicon_dioxide'}],
    ingredients: [
      {item: 'chemlib:silicon_dust'},
      {count: 2, item: 'rankine:oxygen_gas_bottle'},
    ],
    heatRequirement: 'superheated',
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'pneumaticcraft:refinery'},
    pattern: ['ada', 'bcb', 'ada'],
    key: {
      a: 'pneumaticcraft:reinforced_stone_slab',
      b: 'extendedcrafting:redstone_ingot',
      c: 'pneumaticcraft:small_tank',
      d: 'pneumaticcraft:plastic',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'pneumaticcraft:refinery_output'},
    pattern: ['ada', 'bcb', 'ada'],
    key: {
      a: 'pneumaticcraft:reinforced_stone_slab',
      b: '#forge:glass',
      c: 'rankine:titanium_ingot',
      d: 'pneumaticcraft:plastic',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'pneumaticcraft:thermopneumatic_processing_plant'},
    pattern: ['ada', 'bcb', 'ada'],
    key: {
      a: 'pneumaticcraft:reinforced_stone_slab',
      b: 'pneumaticcraft:small_tank',
      c: 'pneumaticcraft:pressure_tube',
      d: 'pneumaticcraft:plastic',
    },
  });
  event.custom({
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
  });

  event.custom({
    type: 'rankine:treetapping',
    tapTime: 400,
    input: {
      item: 'hem:crystalized_log',
    },
    result: {
      fluid: 'kubejs:crystallized_sap',
      amount: 200,
    },
  });

  event.custom({
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
  });

  event.custom({
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
  });
});
