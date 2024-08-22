onEvent('recipes', event => {
  event.custom({
    type: 'compactcrafting:miniaturization',
    recipeSize: 1,
    layers: [
      {
        type: 'compactcrafting:filled',
        component: 'R',
      },
      {
        type: 'compactcrafting:filled',
        component: 'I',
      },
    ],
    catalyst: {
      id: 'minecraft:ender_pearl',
      Count: 1,
    },
    components: {
      R: {
        type: 'compactcrafting:block',
        block: 'minecraft:redstone_wire',
      },
      I: {
        type: 'compactcrafting:block',
        block: 'minecraft:iron_block',
      },
    },
    outputs: [
      {
        id: 'compactmachines:wall',
        Count: 16,
      },
    ],
  });

  event
    .custom({
      type: 'pneumaticcraft:thermo_plant',
      exothermic: false,
      fluid_input: {
        type: 'pneumaticcraft:fluid',
        amount: 100,
        fluid: 'immersivepetroleum:naphtha',
      },
      fluid_output: {
        amount: 80,
        fluid: 'pneumaticcraft:lpg',
      },
      pressure: 2.0,
      temperature: {
        min_temp: 573,
      },
    })
    .id('inconvenient:lpg');

  ['pneumaticcraft:pressure_chamber/empty_pcb'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      results: [
        {
          item: 'pneumaticcraft:empty_pcb',
        },
      ],
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          item: 'extendedcrafting:ender_ingot',
          count: 2,
        },
        {
          type: 'pneumaticcraft:stacked_item',
          item: 'rankine:rose_gold_nugget',
          count: 3,
        },
        {
          type: 'pneumaticcraft:stacked_item',
          item: 'pneumaticcraft:plastic',
          count: 8,
        },
      ],
      pressure: 1.5,
    })
    .id('inconvenient:empty_pcb');
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      results: [{item: 'pneumaticcraft:pcb_blueprint'}],
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          item: 'rankine:titanium_ingot',
          count: 8,
        },
        {
          type: 'pneumaticcraft:stacked_item',
          item: 'rankine:rose_gold_nugget',
          count: 3,
        },
        {
          type: 'pneumaticcraft:stacked_item',
          item: 'pneumaticcraft:plastic',
          count: 8,
        },
      ],
      pressure: 3,
    })
    .id('inconvenient:pcb_blueprint');
  ['pneumaticcraft:pressure_chamber/etching_acid'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      results: [{item: 'pneumaticcraft:etching_acid_bucket'}],
      inputs: [
        {item: 'minecraft:bucket'},
        {
          type: 'pneumaticcraft:stacked_item',
          item: 'minecraft:gunpowder',
          count: 3,
        },
      ],
      pressure: 1,
    })
    .id('inconvenient:etching_acid');

  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      {
        type: 'pneumaticcraft:stacked_item',
        count: 3,
        tag: 'forge:nuggets/cast_iron',
      },
      {
        tag: 'forge:dusts/redstone',
      },
      {
        item: 'pneumaticcraft:plastic',
      },
    ],
    pressure: 1.0,
    results: [
      {
        item: 'pneumaticcraft:transistor',
      },
    ],
  });

  ['pneumaticcraft:pressure_chamber/capacitor'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          type: 'pneumaticcraft:stacked_item',
          count: 2,
          tag: 'forge:nuggets/titanium',
        },
        {
          tag: 'forge:slimeballs',
        },
        {
          item: 'pneumaticcraft:plastic',
        },
      ],
      pressure: 1.0,
      results: [
        {
          item: 'pneumaticcraft:capacitor',
        },
      ],
    })
    .id('inconvenient:capacitor');

  [
    'pneumaticcraft:pressure_chamber/compressed_iron_ingot',
    'pneumaticcraft:pressure_chamber/compressed_iron_block',
  ].forEach(id => event.remove({id: id}));

  event
    .custom({
      type: 'pneumaticcraft:explosion_crafting',
      results: [{item: 'pneumaticcraft:ingot_iron_compressed'}],
      input: {item: 'rankine:steel_ingot'},
      loss_rate: 20,
    })
    .id('inconvenient:explosion_compressed_iron');
  event
    .custom({
      type: 'pneumaticcraft:explosion_crafting',
      results: [{item: 'pneumaticcraft:compressed_iron_block'}],
      input: {item: 'rankine:steel_block'},
      loss_rate: 20,
    })
    .id('inconvenient:explosion_compressed_iron_block');

  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {type: 'pneumaticcraft:stacked_item', item: 'rankine:steel_ingot'},
      ],
      pressure: 2,
      results: [{item: 'pneumaticcraft:ingot_iron_compressed'}],
    })
    .id('inconvenient:compressed_iron');

  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {type: 'pneumaticcraft:stacked_item', item: 'rankine:steel_block'},
      ],
      pressure: 2,
      results: [{item: 'pneumaticcraft:compressed_iron_block'}],
    })
    .id('inconvenient:compressed_iron_block');
  event.blasting(
    'immersiveengineering:dust_hop_graphite',
    'immersiveengineering:ingot_hop_graphite'
  );

  event.remove({
    output: ['immersiveengineering:redstone_acid'],
    type: 'immersiveengineering:mixer',
  });

  event.custom({
    type: 'immersiveengineering:mixer',
    inputs: [
      {
        tag: 'forge:dusts/redstone',
      },
    ],
    result: {
      fluid: 'immersiveengineering:redstone_acid',
      amount: 250,
    },
    fluid: {
      tag: 'pneumaticcraft:etching_acid',
      amount: 250,
    },
    energy: 1600,
  });

  event.custom({
    type: 'immersiveengineering:metal_press',
    mold: 'immersiveengineering:mold_plate',
    result: {item: 'chemlib:sodium_plate'},
    input: {item: 'rankine:sodium_chloride'},
    energy: 2400,
  });

  event.custom({
    type: 'immersiveengineering:metal_press',
    mold: 'immersiveengineering:mold_plate',
    result: {item: 'chemlib:titanium_plate'},
    input: {item: 'rankine:titanium_ingot'},
    energy: 2400,
  });

  event.custom({
    type: 'immersiveengineering:arc_furnace',
    results: [{item: 'rankine:silicon_carbide'}],
    input: {item: 'rankine:silicon'},
    additives: [{count: 4, item: 'rankine:carbon'}],
    time: 100,
    energy: 51200,
  });

  event.shaped(`create:electron_tube`, ['a', 'b', 'c'], {
    a: 'create:polished_rose_quartz',
    b: 'rankine:promethium_ingot',
    c: 'chemlib:iron_plate',
  });

  event.custom({
    type: 'create:item_application',
    ingredients: [{tag: 'minecraft:planks'}, {item: 'create:shadow_steel'}],
    results: [{item: 'create:shadow_steel_casing'}],
  });

  event.custom({
    type: 'create:mixing',
    results: [{item: 'hem:bronze_ingot'}],
    ingredients: [
      {item: 'rankine:bronze_ingot'},
      {item: 'rankine:rose_gold_ingot'},
    ],
    heatRequirement: 'heated',
  });

  event.custom({
    type: 'create:mixing',
    results: [{item: 'hem:rose_copper_ingot'}],
    ingredients: [
      {item: 'minecraft:copper_ingot'},
      {item: 'rankine:rose_gold_ingot'},
    ],
    heatRequirement: 'heated',
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'rankine:induction_furnace'},
    pattern: ['abbba', 'bcdcb', 'bdedb', 'bcccb', 'afffa'],
    key: {
      a: 'rankine:steel_block',
      b: 'rankine:steel_ingot',
      c: 'rankine:ultra_high_refractory_bricks',
      d: Item.of(
        'rankine:alloy_wire',
        '{Elements:[{id:"rankine:elements/nickel",percent:15s},{id:"rankine:elements/copper",percent:85s}],StoredAlloy:{comp:"85Cu-15Ni",recipe:"rankine:alloying/cupronickel_alloying"},color:11946807,nameOverride:"item.rankine.cupronickel_alloying"}'
      ),
      e: 'rankine:alloy_furnace',
      f: 'rankine:simple_electromagnet',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'create:steam_engine'},
    pattern: ['  abb', '  b  ', ' cdc ', ' cdc ', 'c   c'],
    key: {
      a: 'create:brass_sheet',
      b: 'immersiveengineering:plate_steel',
      c: 'minecraft:waxed_copper_block',
      d: 'create:andesite_alloy',
    },
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'hem:transporter_top'},
    pattern: ['aaa', 'aba', 'cdd'],
    key: {
      a: 'hem:copparite',
      b: 'hem:teir_one_computer',
      c: 'immersive_aircraft:boiler',
      d: 'hem:generator_piping',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'hem:transporter_bottom'},
    pattern: ['aba', 'cdc', 'ccc'],
    key: {
      a: 'hem:generator_piping',
      b: 'create:electron_tube',
      c: 'hem:copparite',
      d: 'immersive_aircraft:boiler',
    },
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'hem:steam_engine'},
    pattern: ['aaa', 'aba', 'cbc'],
    key: {
      a: 'hem:copparite',
      b: 'immersive_aircraft:boiler',
      c: 'hem:generator_piping',
    },
  });
  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'hem:generator_piping'},
    pattern: ['aba', '   ', 'aba'],
    key: {
      a: 'hem:copparite',
      b: 'hem:rose_copper_ingot',
    },
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'hem:teir_one_computer'},
    pattern: ['aaaaa', 'abbba', 'abcba', 'accca', 'aaaaa'],
    key: {
      a: 'hem:copparite',
      b: 'create:electron_tube',
      c: 'hem:circuit_board',
    },
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'hem:circuit_board'},
    pattern: ['aba', 'cdc', 'ada'],
    key: {
      a: 'hem:copparite',
      b: 'create:electron_tube',
      c: 'hem:bronze_ingot',
      d: 'minecraft:redstone',
    },
  });

  ['immersive_aircraft:boiler'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'create:mechanical_crafting',
      result: {item: 'immersive_aircraft:boiler'},
      pattern: ['aaa', 'aba', 'cbd'],
      key: {
        a: 'hem:copparite',
        b: 'tconstruct:molten_pig_iron_bucket',
        c: 'minecraft:gunpowder',
        d: 'tconstruct:blazing_blood_bucket',
      },
    })
    .id('inconvenient:boiler');

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'pneumaticcraft:printed_circuit_board'},
    pattern: [' a ', 'bcb', ' a '],
    key: {
      a: 'pneumaticcraft:transistor',
      b: 'pneumaticcraft:capacitor',
      c: 'pneumaticcraft:unassembled_pcb',
    },
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 8,
    color: 16730178,
    input1: {
      element: 'rankine:elements/iron',
      min: 0.3,
      max: 0.5,
      required: true,
    },
    input2: {
      element: 'rankine:elements/nickel',
      min: 0.13,
      max: 0.26,
      required: true,
    },
    input3: {
      element: 'rankine:elements/cobalt',
      min: 0.05,
      max: 0.35,
      required: true,
    },
    input4: {
      element: 'rankine:elements/aluminum',
      min: 0.08,
      max: 0.12,
      required: true,
    },
    input5: {
      element: 'rankine:elements/copper',
      min: 0.0,
      max: 0.12,
    },
    input6: {
      element: 'rankine:elements/titanium',
      min: 0.0,
      max: 0.12,
    },
    input7: {
      element: 'rankine:elements/niobium',
      min: 0.0,
      max: 0.12,
    },
    input8: {
      element: 'rankine:elements/hafnium',
      min: 0.0,
      max: 0.12,
    },
    result: 'rankine:alnico_ingot',
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 12,
    color: 2236962,
    input1: {
      element: 'rankine:elements/iron',
      min: 0.85,
      max: 0.97,
      required: true,
    },
    input2: {
      element: 'rankine:elements/carbon',
      min: 0.03,
      max: 0.05,
      required: true,
    },
    input3: {
      element: 'rankine:elements/manganese',
      min: 0.0,
      max: 0.1,
    },
    input4: {
      element: 'rankine:elements/nickel',
      min: 0.0,
      max: 0.1,
    },
    input5: {
      element: 'rankine:elements/chromium',
      min: 0.0,
      max: 0.1,
    },
    input6: {
      element: 'rankine:elements/molybdenum',
      min: 0.0,
      max: 0.1,
    },
    input7: {
      element: 'rankine:elements/titanium',
      min: 0.0,
      max: 0.1,
    },
    input8: {
      element: 'rankine:elements/vanadium',
      min: 0.0,
      max: 0.1,
    },
    input9: {
      element: 'rankine:elements/tellurium',
      min: 0.0,
      max: 0.1,
    },
    input10: {
      element: 'rankine:elements/barium',
      min: 0.0,
      max: 0.1,
    },
    input11: {
      element: 'rankine:elements/silicon',
      min: 0.0,
      max: 0.1,
    },
    input12: {
      element: 'rankine:elements/phosphorus',
      min: 0.0,
      max: 0.1,
    },
    result: 'rankine:cast_iron_ingot',
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 16,
    color: 11946807,
    input1: {
      element: 'rankine:elements/copper',
      min: 0.7,
      max: 0.9,
      required: true,
    },
    input2: {
      element: 'rankine:elements/nickel',
      min: 0.1,
      max: 0.3,
      required: true,
    },
    input3: {
      element: 'rankine:elements/iron',
      min: 0.0,
      max: 0.05,
    },
    input4: {
      element: 'rankine:elements/manganese',
      min: 0.0,
      max: 0.05,
    },
    input5: {
      element: 'rankine:elements/tin',
      min: 0.0,
      max: 0.05,
    },
    input6: {
      element: 'rankine:elements/niobium',
      min: 0.0,
      max: 0.05,
    },
    input7: {
      element: 'rankine:elements/tantalum',
      min: 0.0,
      max: 0.05,
    },
    input8: {
      element: 'rankine:elements/titanium',
      min: 0.0,
      max: 0.05,
    },
    input9: {
      element: 'rankine:elements/lead',
      min: 0.0,
      max: 0.05,
    },
    input10: {
      element: 'rankine:elements/chromium',
      min: 0.0,
      max: 0.05,
    },
    input11: {
      element: 'rankine:elements/aluminum',
      min: 0.0,
      max: 0.05,
    },
    input12: {
      element: 'rankine:elements/bismuth',
      min: 0.0,
      max: 0.05,
    },
    input13: {
      element: 'rankine:elements/beryllium',
      min: 0.0,
      max: 0.05,
    },
    input14: {
      element: 'rankine:elements/silicon',
      min: 0.0,
      max: 0.05,
    },
    input15: {
      element: 'rankine:elements/phosphorus',
      min: 0.0,
      max: 0.05,
    },
    input16: {
      element: 'rankine:elements/chlorine',
      min: 0,
      max: 0.05,
    },
    result: 'rankine:cupronickel_ingot',
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 4,
    color: 13028546,
    input1: {
      element: 'rankine:elements/nickel',
      min: 0.75,
      max: 0.9,
      required: true,
    },
    input2: {
      element: 'rankine:elements/iron',
      min: 0.1,
      max: 0.25,
      required: true,
    },
    input3: {
      element: 'rankine:elements/molybdenum',
      min: 0.0,
      max: 0.1,
    },
    input4: {
      element: 'rankine:elements/fluorine',
      min: 0.0,
      max: 0.05,
    },
    result: 'rankine:invar_ingot',
    durability: -100,
    miningSpeed: -2.0,
    damage: 0.5,
    heatresist: 0.25,
  });

  event.custom({
    input: {item: 'rankine:bauxite_ore'},
    type: 'rankine:crushing',
    guaranteed: [
      {
        item: 'rankine:bauxite',
        count: 1,
        tier: 'minecraft:diamond',
      },
      {
        item: 'rankine:bauxite',
        count: 1,
        tier: 'minecraft:netherite',
      },
    ],
  });
  // {
  //   fluids: [
  //     {id: 'pneumaticcraft:etching_acid', amount: 250},
  //     {id: 'kubejs:molten_redstone', amount: 250},
  //   ],
  //   fluid_output: {
  //     fluid: 'immersiveengineering:redstone_acid',
  //     amount: 250,
  //   },
  //   pressure: 2.0,
  // },
  // {
  //   id: 'silicon_dust',
  //   recipe: () => {
  //     event.recipes.create.crushing(
  //       ['chemlib:silicon_dust'],
  //       'rankine:silicon'
  //     );
  //   },
  //   children: [
  //     {
  //       id: 'silicon',
  //       recipe: () => {
  //         event.recipes.create
  //           .mixing('rankine:silicon', [
  //             Fluid.of('kubejs:pure_silicon_solution', 1000),
  //           ])
  //           .superheated();
  //       },
  //     },
  //   ],
  // },
  // add hydrocloric acid to washed sand
  // dry washed sand
  // add sodium hydroxide and heat
  // add distilled water
  // filter mixture through a sand filter to get filtered mixture
  // add sulfuric acid
  // filter solution
  // heat solution to very high temperature :check
  // pulverize mixture in a mortar and pestle to make silicon dioxide dust :check
  // {
  //   id: 'sifted_soul_sand',
  //   recipe: () => {
  //     event.remove({output: 'chipped:soul_sand_10'});
  //     event.recipes.create
  //       .sequenced_assembly(
  //         ['chipped:soul_sand_10'],
  //         'minecraft:soul_sand',
  //         [
  //           event.recipes.create.mixing('minecraft:soul_sand', [
  //             'minecraft:soul_sand',
  //             Fluid.of('minecraft:water', 1000000),
  //           ]),
  //           event.recipes.create.mixing('minecraft:soul_sand', [
  //             'minecraft:soul_sand',
  //             Fluid.of('minecraft:water', 1000000),
  //           ]),
  //           event.recipes.create.mixing('minecraft:soul_sand', [
  //             'minecraft:soul_sand',
  //             Fluid.of('minecraft:water', 1000000),
  //           ]),
  //           event.recipes.create.mixing('minecraft:soul_sand', [
  //             'minecraft:soul_sand',
  //             Fluid.of('minecraft:water', 1000000),
  //           ]),
  //           event.recipes.create.mixing('minecraft:soul_sand', [
  //             'minecraft:soul_sand',
  //             Fluid.of('minecraft:water', 1000000),
  //           ]),
  //         ]
  //       )
  //       .transitionalItem('minecraft:soul_sand')
  //       .loops(1);
  //   },
  // },
  // sulfur, charcoal, potasium nitrate, chilli pepper for capsasin
  // potasium nitrate - nether compost mixed with water then dripped through a sand filter then heated

  setMilestoneRecipes({
    id: 'computer',
    recipe: () => {},
    children: [],
  });
});
