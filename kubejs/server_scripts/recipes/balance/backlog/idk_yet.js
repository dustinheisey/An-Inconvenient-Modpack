onEvent('recipes', event => {
  event.custom({
    type: 'create:mixing',
    results: [{item: 'minecraft:netherite_ingot'}],
    ingredients: [
      {item: 'minecraft:gold_ingot'},
      {item: 'minecraft:netherite_scrap'},
    ],
  });

  event.custom({
    type: 'create:mixing',
    results: [{item: 'tconstruct:pig_iron_ingot'}],
    ingredients: [
      {item: 'minecraft:iron_ingot'},
      {item: 'farmersdelight:ham'},
      {item: 'minecraft:clay_ball'},
    ],
    heatRequirement: 'heated',
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'createaddition:alternator'},
    pattern: ['  a  ', ' bcb ', 'bcdcb', ' beb '],
    key: {
      a: 'create:andesite_alloy',
      b: 'chemlib:iron_plate',
      c: 'hem:circuit_board',
      d: 'immersive_aircraft:engine',
      e: 'create:electron_tube',
    },
  });

  event.custom({
    input: {item: 'minecraft:ancient_debris'},
    type: 'rankine:crushing',
    guaranteed: [
      {
        item: 'minecraft:netherite_scrap',
        count: 1,
        tier: 'minecraft:diamond',
      },
    ],
  });

  event.custom({
    input: {item: 'rankine:native_sulfur_ore'},
    type: 'rankine:crushing',
    guaranteed: [
      {
        item: 'rankine:sulfur_nugget',
        tier: 'minecraft:iron',
        count: 3,
      },
    ],
  });

  event.custom({
    type: 'tconstruct:alloy',
    result: {fluid: 'tconstruct:molten_brass', amount: 180},
    inputs: [
      {name: 'tconstruct:molten_copper', amount: 90},
      {name: 'tconstruct:molten_zinc', amount: 90},
    ],
    temperature: 605,
  });

  event.custom({
    type: 'extendedcrafting:shaped_table',
    result: {
      item: 'rankine:air_distillation_packing',
    },
    pattern: ['aba', 'bab', 'aba'],
    key: {
      a: 'rankine:aluminum_sheetmetal',
      b: 'architects_palette:warpstone',
    },
  });
  event.custom({
    type: 'extendedcrafting:shaped_table',
    result: {
      item: 'rankine:gas_bottler',
    },
    pattern: ['aba', 'bab', 'aba'],
    key: {
      a: 'rankine:purple_gold_sheetmetal',
      b: 'rankine:brass_ingot',
    },
  });
  event.custom({
    type: 'extendedcrafting:shaped_table',
    result: {
      item: 'rankine:gas_vent',
    },
    pattern: ['aba', 'bcb', 'aba'],
    key: {
      a: 'rankine:copper_sheetmetal',
      b: 'tconstruct:scorched_glass',
      c: 'minecraft:glass_bottle',
    },
  });

  event.custom({
    type: 'extendedcrafting:shaped_table',
    result: {
      item: 'rankine:distillation_tower',
    },
    pattern: ['aba', 'aca', 'ada'],
    key: {
      a: 'rankine:aluminum_sheetmetal',
      b: 'occultism:iesnium_block',
      c: 'rankine:rose_gold_block',
      d: 'cataclysm:ignitium_block',
    },
  });

  event.shaped(`rankine:alloy_furnace`, ['aba', 'aba', 'aca'], {
    a: `rankine:ultra_high_refractory_bricks`,
    b: 'rankine:brass_block',
    c: 'minecraft:soul_campfire',
  });
  event.custom({
    type: 'malum:spirit_infusion',
    input: {item: 'rankine:rose_marble', count: 16},
    output: {item: 'malum:tainted_rock', count: 16},
    extra_items: [{item: 'malum:processed_soulstone', count: 4}],
    spirits: [
      {
        type: 'sacred',
        count: 1,
      },
      {
        type: 'arcane',
        count: 1,
      },
    ],
  });

  ['naturesaura:tree_ritual/token_anger'].forEach(id => event.remove({id: id}));
  event.custom({
    type: 'naturesaura:tree_ritual',
    sapling: {item: 'architects_palette:twisted_sapling'},
    ingredients: [
      {item: 'minecraft:gunpowder'},
      {item: 'minecraft:magma_block'},
      {item: 'minecraft:netherite_scrap'},
      {item: 'minecraft:blaze_rod'},
      {item: 'naturesaura:gold_leaf'},
      {
        type: 'forge:nbt',
        item: 'naturesaura:aura_bottle',
        count: 1,
        nbt: '{stored_type:"naturesaura:nether"}',
      },
    ],
    time: 250,
    output: {item: 'naturesaura:token_anger'},
  }).id('inconvenient:token_anger');

  ['naturesaura:tree_ritual/token_fear'].forEach(id => event.remove({id: id}));
  event.custom({
    type: 'naturesaura:tree_ritual',
    sapling: {item: 'architects_palette:twisted_sapling'},
    ingredients: [
      {item: 'minecraft:bone'},
      {item: 'minecraft:rotten_flesh'},
      {item: 'minecraft:netherite_scrap'},
      {item: 'minecraft:soul_sand'},
      {item: 'naturesaura:gold_leaf'},
      {
        type: 'forge:nbt',
        item: 'naturesaura:aura_bottle',
        count: 1,
        nbt: '{stored_type:"naturesaura:nether"}',
      },
    ],
    time: 250,
    output: {item: 'naturesaura:token_fear'},
  }).id('inconvenient:token_fear');

  event.custom({
    type: 'create:mixing',
    results: [{count: 3, item: 'rankine:vulcanized_rubber'}],
    ingredients: [
      {item: 'rankine:dry_rubber'},
      {item: 'rankine:dry_rubber'},
      {item: 'rankine:dry_rubber'},
      {fluid: 'immersivepetroleum:crudeoil', amount: 1000},
    ],
    heatRequirement: 'superheated',
  });

  event.replaceInput(
    {output: 'architects_palette:nether_brass_blend'},
    'minecraft:iron_nugget',
    'rankine:brass_nugget'
  );
  event.custom({
    type: 'create:compacting',
    ingredients: [
      {item: 'paragon_textiles:flax_seeds', count: 4},
      {item: 'minecraft:bucket'},
    ],
    results: [{item: 'paragon_textiles:flaxseed_oil_bucket'}],
  });
  event.custom({
    type: 'bloodmagic:altar',
    output: {
      item: 'bloodmagic:masterbloodorb',
    },
    input: {
      item: 'bloodmagic:weakbloodshard',
    },
    altarSyphon: 250000,
    upgradeLevel: 3,
    consumptionRate: 500,
    drainRate: 500,
  });
  event.shaped('2x bloodmagic:bloodstonebrick', ['ab', 'ba'], {
    a: 'rankine:mortar',
    b: 'bloodmagic:largebloodstonebrick',
  });
  event.replaceInput(
    {output: ['malum:stained_spirit_resonator']},
    'minecraft:quartz',
    'undergarden:regalium_crystal'
  );
  event.shaped('totemic:wind_chime', ['aaa', ' bb', '  b'], {
    a: 'minecraft:iron_ingot',
    b: 'totemic:cedar_planks',
  });
  event.custom({
    type: 'create:milling',
    ingredients: [{item: 'undergarden:regalium_crystal'}],
    results: [{item: 'extendedcrafting:luminessence'}],
    processingTime: 50,
  });
  event.custom({
    type: 'tconstruct:casting_table',
    result: 'twilightforest:steeleaf_ingot',
    fluid: {name: 'kubejs:molten_steeleaf', amount: 90},
    cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
    cooling_time: 100,
  });

  event.custom({
    type: 'tconstruct:casting_basin',
    result: 'twilightforest:steeleaf_block',
    fluid: {name: 'kubejs:molten_steeleaf', amount: 810},
    cooling_time: 100,
  });
  event.custom({
    type: 'tconstruct:melting',
    ingredient: {item: 'twilightforest:steeleaf_ingot'},
    result: {fluid: 'kubejs:molten_steeleaf', amount: 90},
    temperature: 605,
    time: 54,
  });
  event.custom({
    type: 'tconstruct:melting',
    ingredient: {item: 'twilightforest:steeleaf_block'},
    result: {
      fluid: 'kubejs:molten_steeleaf',
      amount: 810,
    },
    temperature: 605,
    time: 54,
  });
  event.custom({
    type: 'malum:spirit_infusion',
    input: {item: 'blue_skies:horizonite_ingot'},
    output: {item: 'malum:soul_stained_steel_ingot'},
    extra_items: [{item: 'malum:processed_soulstone', count: 4}],
    spirits: [
      {
        type: 'arcane',
        count: 1,
      },
      {
        type: 'wicked',
        count: 3,
      },
      {type: 'earthen', count: 1},
    ],
  });
  event.remove({
    output: ['occultism:chalk_red_impure'],
    type: 'minecraft:crafting_shapeless',
  });
  event.replaceInput(
    {output: 'bloodmagic:lavacrystal'},
    'minecraft:diamond',
    'occultism:afrit_essence'
  );
  event.custom({
    type: 'occultism:ritual',
    ritual_type: 'occultism:summon_wild_hunt',
    activation_item: {
      item: 'minecraft:skeleton_skull',
    },
    pentacle_id: 'occultism:summon_wild_greater_spirit',
    duration: 30,
    entity_to_summon: 'occultism:wild_hunt_wither_skeleton',
    ritual_dummy: {
      item: 'occultism:ritual_dummy/summon_wild_hunt',
    },
    ingredients: [
      {
        tag: 'forge:storage_blocks/copper',
      },
      {
        tag: 'forge:storage_blocks/silver',
      },
      {
        tag: 'forge:storage_blocks/lead',
      },
      {
        tag: 'forge:storage_blocks/tin',
      },
      {
        item: 'naturesaura:infused_iron_block',
      },
      {
        type: 'forge:nbt',
        item: 'naturesaura:aura_bottle',
        count: 1,
        nbt: '{stored_type:"naturesaura:overworld"}',
      },
      {
        item: 'hexerei:blood_bottle',
      },
    ],
    result: {
      item: 'occultism:jei_dummy/none',
    },
  });
  event.custom({
    type: 'bloodmagic:altar',
    input: {
      item: 'occultism:book_of_binding_djinni',
    },
    output: {
      item: 'occultism:book_of_binding_afrit',
    },
    upgradeLevel: 1,
    altarSyphon: 20000,
    consumptionRate: 20,
    drainRate: 20,
  });
  event.shaped('occultism:chalk_purple_impure', ['ab', 'cc'], {
    a: 'occultism:chalk_gold_impure',
    b: 'malum:chunk_of_brilliance',
    c: 'create:powdered_obsidian',
  });
  event.custom({
    type: 'rankine:rock_generator',
    genType: 'intrusive_igneous',
    result: {block: 'minecraft:andesite'},
    input1: {item: 'occultism:otherstone'},
    input2: {item: 'twilightforest:knightmetal_block'},
  });
  event.replaceInput(
    {output: 'occultism:book_of_binding_afrit'},
    'minecraft:purple_dye',
    'minecraft:orange_dye'
  );
  event.custom({
    type: 'occultism:spirit_fire',
    ingredient: {
      item: 'minecraft:ink_sac',
    },
    result: {
      item: 'occultism:purified_ink',
    },
  });
  event.custom({
    type: 'occultism:spirit_fire',
    ingredient: {
      item: 'blue_skies:charoite',
    },
    result: {
      item: 'occultism:spirit_attuned_gem',
    },
  });
  event.custom({
    type: 'occultism:ritual',
    ritual_type: 'occultism:craft',
    activation_item: {
      item: 'occultism:book_of_binding_bound_foliot',
    },
    pentacle_id: 'occultism:craft_foliot',
    duration: 60,
    ritual_dummy: {
      item: 'occultism:ritual_dummy/craft_infused_lenses',
    },
    ingredients: [
      {
        item: 'occultism:lenses',
      },
      {
        tag: 'forge:ingots/silver',
      },
      {
        tag: 'forge:ingots/silver',
      },
      {
        item: 'naturesaura:infused_iron',
      },
    ],
    result: {
      item: 'occultism:infused_lenses',
    },
  });
  event.shaped('occultism:book_of_binding_foliot', ['ab ', 'bcb', ' b '], {
    a: 'occultism:purified_ink',
    b: 'minecraft:red_dye',
    c: 'minecraft:book',
  });

  event.replaceInput(
    {output: 'occultism:butcher_knife'},
    'minecraft:iron_ingot',
    'rankine:pewter_ingot'
  );
});
