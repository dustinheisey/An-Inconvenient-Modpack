onEvent('recipes', event => {
  event.custom({
    type: 'extendedcrafting:shaped_table',
    result: {item: 'pneumaticcraft:amadron_tablet'},
    pattern: [
      'aaaaaaa',
      'abcccba',
      'abcdcba',
      'abcecba',
      'abcfcba',
      'abcccba',
      'aaaaaaa',
    ],
    key: {
      a: 'extendedcrafting:ender_ingot',
      b: 'immersiveengineering:plate_duroplast',
      c: 'pneumaticcraft:plastic',
      d: 'pneumaticcraft:gps_tool',
      e: 'immersiveengineering:component_electronic_adv',
      f: 'pneumaticcraft:air_canister',
    },
  });
  event.custom({
    type: 'extendedcrafting:shaped_table',
    result: {item: 'adpother:aerometer'},
    pattern: [
      'ab   ba',
      'aacccaa',
      'bc d cb',
      'bcdfdcb',
      'bcccccb',
      '  aea  ',
      '  aea  ',
    ],
    key: {
      a: 'pneumaticcraft:plastic',
      b: 'chemlib:titanium_plate',
      c: 'immersiveengineering:plate_duroplast',
      d: 'chemlib:uranium_plate',
      e: 'pneumaticcraft:ingot_iron_compressed',
      f: 'immersiveengineering:component_electronic_adv',
    },
  });

  event.custom({
    type: 'immersiveengineering:crusher',
    secondaries: [],
    result: {item: '3x chemlib:titanium_dust'},
    input: {item: 'rankine:ilmenite'},
    energy: 2400,
  });
  event.custom({
    type: 'immersiveengineering:crusher',
    secondaries: [],
    result: {item: '3x chemlib:nickel_dust'},
    input: {item: 'rankine:pentlandite'},
    energy: 2400,
  });
  event.custom({
    type: 'immersiveengineering:crusher',
    secondaries: [],
    result: {item: '3x chemlib:uranium_dust'},
    input: {item: 'rankine:uraninite'},
    energy: 2400,
  });

  event.remove({
    output: ['immersiveengineering:component_electronic_adv'],
    type: 'immersiveengineering:blueprint',
  });
  event.custom({
    type: 'immersiveengineering:blueprint',
    result: {
      item: 'immersiveengineering:component_electronic_adv',
    },
    category: 'components',
    inputs: [
      {item: 'immersiveengineering:plate_duroplast'},
      {
        count: 2,
        base_ingredient: {
          item: 'immersiveengineering:electron_tube',
        },
      },
      {item: 'pneumaticcraft:printed_circuit_board'},
      {item: 'immersiveengineering:component_electronic'},
    ],
  });

  event.custom({
    type: 'immersiveengineering:arc_furnace',
    results: [{item: 'extendedcrafting:ender_ingot'}],
    input: {item: 'rankine:uranium_ingot'},
    additives: [{item: 'minecraft:ender_pearl', count: 2}],
    time: 100,
    energy: 51200,
  });
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    results: [{count: 3, item: 'rankine:titanium_ingot'}],
    input: {item: 'rankine:ilmenite_ore'},
    time: 100,
    energy: 51200,
  });
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    results: [{count: 3, item: 'rankine:nickel_ingot'}],
    input: {item: 'rankine:pentlandite_ore'},
    time: 100,
    energy: 51200,
  });
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    results: [{count: 3, item: 'rankine:uranium_ingot'}],
    input: {item: 'rankine:uraninite_ore'},
    time: 100,
    energy: 51200,
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: '4x compactcrafting:base'},
    pattern: [' a ', 'bcb', 'ddd'],
    key: {
      a: 'minecraft:redstone_torch',
      b: 'rankine:titanium_ingot',
      c: 'minecraft:stone_slab',
      d: 'immersiveengineering:ingot_hop_graphite',
    },
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'compactmachines:personal_shrinking_device'},
    pattern: [' a ', 'bcb', ' d '],
    key: {
      a: '#forge:glass_panes',
      b: 'minecraft:ender_eye',
      c: 'minecraft:book',
      d: 'rankine:cast_iron_ingot',
    },
  });

  event.custom({
    input: {item: 'rankine:pentlandite_ore'},
    type: 'rankine:crushing',
    guaranteed: [
      {
        item: 'rankine:pentlandite',
        count: 1,
        tier: 'minecraft:iron',
      },
      {
        item: 'rankine:pentlandite',
        count: 1,
        tier: 'minecraft:netherite',
      },
    ],
  });

  event.custom({
    input: {item: 'rankine:uraninite_ore'},
    type: 'rankine:crushing',
    guaranteed: [
      {
        item: 'rankine:uraninite',
        count: 1,
        tier: 'minecraft:netherite',
      },
    ],
  });
  event.custom({
    input: {item: 'rankine:ilmenite_ore'},
    type: 'rankine:crushing',
    guaranteed: [
      {
        item: 'rankine:ilmenite',
        count: 1,
        tier: 'minecraft:netherite',
      },
    ],
  });
  event.custom({
    input: {item: 'rankine:pentlandite_ore'},
    type: 'rankine:crushing',
    guaranteed: [
      {
        item: 'rankine:pentlandite',
        count: 1,
        tier: 'minecraft:netherite',
      },
    ],
  });
  event.custom({
    input: {item: 'rankine:bituminous_ore'},
    type: 'rankine:crushing',
    guaranteed: [
      {
        item: 'rankine:bituminous_coal',
        count: 1,
        tier: 'minecraft:iron',
      },
      {
        item: 'rankine:bituminous_coal',
        count: 1,
        tier: 'minecraft:netherite',
      },
    ],
  });
  event.custom({
    input: {item: 'rankine:subbituminous_ore'},
    type: 'rankine:crushing',
    guaranteed: [
      {
        item: 'rankine:subbituminous_coal',
        count: 1,
        tier: 'minecraft:iron',
      },
      {
        item: 'rankine:subbituminous_coal',
        count: 1,
        tier: 'minecraft:netherite',
      },
    ],
  });

  setMilestoneRecipes({
    id: 'can',
    recipe: () => {},
    children: [],
  });
});
