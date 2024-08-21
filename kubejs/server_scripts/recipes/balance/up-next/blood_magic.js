onEvent('recipes', event => {
  setBalanceRecipes({
    shapeless: () => {
      event.shapeless('bloodmagic:enhancedteleposerfocus', [
        'bloodmagic:teleposerfocus',
        'bloodmagic:strong_tau',
      ]);
    },
    alchemy: () => {
      event.remove({
        output: [
          'bloodmagic:bow_velocity_anointment',
          'bloodmagic:smelting_anointment',
          'bloodmagic:holy_water_anointment',
          'bloodmagic:fortune_anointment',
          'bloodmagic:saltpeter',
        ],
        type: 'bloodmagic:alchemytable',
      });

      event.custom({
        type: 'bloodmagic:alchemytable',
        input: [
          {item: 'bloodmagic:slate_vial'},
          {item: 'hexerei:yellow_dock_flowers'},
          {item: 'minecraft:bow'},
          {item: 'extendedcrafting:luminessence'},
        ],
        output: {item: 'bloodmagic:bow_velocity_anointment'},
        syphon: 500,
        ticks: 100,
        upgradeLevel: 1,
      });
      event.custom({
        type: 'bloodmagic:alchemytable',
        input: [
          {item: 'bloodmagic:slate_vial'},
          {item: 'blue_skies:blaze_bud'},
          {item: 'minecraft:furnace'},
          {item: 'create:cinder_flour'},
        ],
        output: {item: 'bloodmagic:smelting_anointment'},
        syphon: 500,
        ticks: 100,
        upgradeLevel: 1,
      });
      event.custom({
        type: 'bloodmagic:alchemytable',
        input: [
          {item: 'bloodmagic:slate_vial'},
          {item: 'hexerei:dried_belladonna_flowers'},
          {item: 'minecraft:redstone'},
          {item: 'minecraft:sugar'},
        ],
        output: {item: 'bloodmagic:holy_water_anointment'},
        syphon: 500,
        ticks: 100,
        upgradeLevel: 1,
      });
      event.custom({
        type: 'bloodmagic:alchemytable',
        input: [
          {item: 'bloodmagic:slate_vial'},
          {item: 'hexerei:dried_mandrake_flowers'},
          {item: 'minecraft:redstone'},
          {item: 'create:powdered_obsidian'},
        ],
        output: {item: 'bloodmagic:fortune_anointment'},
        syphon: 500,
        ticks: 100,
        upgradeLevel: 1,
      });
      event.custom({
        type: 'bloodmagic:alchemytable',
        input: [
          {item: 'bloodmagic:plantoil'},
          {item: 'bloodmagic:plantoil'},
          {item: 'rankine:carbon'},
        ],
        output: {item: 'bloodmagic:saltpeter', count: 3},
        syphon: 200,
        ticks: 200,
        upgradeLevel: 1,
      });
      event.custom({
        type: 'bloodmagic:alchemytable',
        input: [
          {item: 'bloodmagic:plantoil'},
          {item: 'bloodmagic:plantoil'},
          {item: 'rankine:carbon'},
        ],
        output: {item: 'bloodmagic:saltpeter', count: 3},
        syphon: 200,
        ticks: 200,
        upgradeLevel: 1,
      });
    },
    altar: () => {
      event.remove({
        output: [
          'bloodmagic:activationcrystalweak',
          'bloodmagic:earthscribetool',
          'bloodmagic:airscribetool',
          'bloodmagic:waterscribetool',
          'bloodmagic:firescribetool',
          'bloodmagic:arcaneashes',
          'bloodsmeltery:bloodbrass_ingot',
          'bloodmagic:daggerofsacrifice',
          'bloodmagic:bleedingedge',
          'bloodmagic:weakbloodorb',
          'bloodmagic:apprenticebloodorb',
          'bloodmagic:magicianbloodorb',
          'bloodmagic:masterbloodorb',
          'bloodmagic:archmagebloodorb',
          'rankine:blood_obsidian',
          'bloodmagic:blankslate',
          'bloodmagic:reinforcedslate',
          'bloodmagic:infusedslate',
          'minecraft:chorus_fruit',
          'botania:mana_pool',
          'bloodmagic:etherealslate',
          'chunkloaders:single_chunk_loader',
          'chunkloaders:basic_chunk_loader',
          'chunkloaders:advanced_chunk_loader',
          'chunkloaders:ultimate_chunk_loader',
        ],
        type: 'bloodmagic:altar',
      });

      event.custom({
        type: 'bloodmagic:altar',
        input: {
          item: 'bloodmagic:rawdemoniteblock',
        },
        altarSyphon: 1000000,
        consumptionRate: 1000,
        drainRate: 1000,
        upgradeLevel: 4,
        output: {
          item: 'bloodmagic:bleedingedge',
        },
      });
    },
    arc: () => {
      event.remove({
        output: [
          'undergarden:utherium_crystal',
          'tconstruct:slimesteel_block',
          'twilightforest:fiery_block',
          'bloodmagic:goldfragment',
          'bloodmagic:copperfragment',
          'bloodmagic:ironfragment',
          'bloodmagic:fragment_netherite_scrap',
        ],
        type: 'bloodmagic:arc',
      });
      [
        'fragmentsfrom_ore_gold',
        'fragmentsfrom_ore_copper',
        'dustsfrom_ore_copper',
        'ore/dustiron',
        'ore/dustgold',
        'fragmentsfrom_ore_iron',
        'fragmentsnetherite_scrap',
        'netherrack_to_sulfer',
        'fragmentscopper',
        'fragmentsiron',
        'fragmentsgold',
        'dustsfrom_ore_gold',
        'dustsfrom_ore_iron',
        'dustsfrom_gravel_copper',
        'dustsfrom_ingot_copper',
        'dustsfrom_gravel_iron',
        'dustsfrom_ingot_iron',
        'dustsfrom_gravel_gold',
        'dustsfrom_ingot_gold',
      ].forEach(id => {
        event.remove({id: `bloodmagic:arc/${id}`});
      });

      event.custom({
        type: 'bloodmagic:arc',
        input: {
          item: 'bloodmagic:weakbloodorb',
        },
        tool: {
          tag: 'bloodmagic:arc/reverter',
        },
        output: {
          item: 'undergarden:utherium_crystal',
        },
        mainoutputchance: 0.0,
        inputsize: 1,
        consumeingredient: false,
      });
      event.custom({
        type: 'bloodmagic:arc',
        input: {
          item: 'bloodmagic:apprenticebloodorb',
        },
        tool: {
          tag: 'bloodmagic:arc/reverter',
        },
        output: {
          item: 'tconstruct:slimesteel_block',
        },
        mainoutputchance: 0.0,
        inputsize: 1,
        consumeingredient: false,
      });
      event.custom({
        type: 'bloodmagic:arc',
        input: {
          item: 'bloodmagic:magicianbloodorb',
        },
        tool: {
          tag: 'bloodmagic:arc/reverter',
        },
        output: {
          item: 'twilightforest:fiery_block',
        },
        mainoutputchance: 0.0,
        inputsize: 1,
        consumeingredient: false,
      });
      event.custom({
        type: 'bloodmagic:arc',
        input: {
          item: 'minecraft:raw_gold',
        },
        tool: {
          tag: 'bloodmagic:arc/explosive',
        },
        output: {
          item: '2x bloodmagic:goldfragment',
        },
        mainoutputchance: 0.0,
        inputsize: 1,
        consumeingredient: false,
      });
      event.custom({
        type: 'bloodmagic:arc',
        input: {
          item: 'rankine:malachite',
        },
        tool: {
          tag: 'bloodmagic:arc/explosive',
        },
        output: {
          item: '2x bloodmagic:copperfragment',
        },
        mainoutputchance: 0.0,
        inputsize: 1,
        consumeingredient: false,
      });
      event.custom({
        type: 'bloodmagic:arc',
        input: {
          item: 'rankine:hematite',
        },
        tool: {
          tag: 'bloodmagic:arc/explosive',
        },
        output: {
          item: '2x bloodmagic:ironfragment',
        },
        mainoutputchance: 0.0,
        inputsize: 1,
        consumeingredient: false,
      });
      event.custom({
        type: 'bloodmagic:arc',
        input: {
          item: 'minecraft:ancient_debris',
        },
        tool: {
          tag: 'bloodmagic:arc/explosive',
        },
        output: {
          item: 'bloodmagic:fragment_netherite_scrap',
        },
        mainoutputchance: 0.0,
        inputsize: 1,
        consumeingredient: false,
      });
    },
    array: () => {},
    soul_forge: () => {
      event.remove({
        output: [
          'bloodmagic:masterroutingnode',
          'bloodmagic:soulgemcommon',
          'bloodmagic:soulgemlesser',
        ],
        type: 'bloodmagic:soulforge',
      });

      event.custom({
        type: 'bloodmagic:soulforge',
        output: {item: 'bloodmagic:masterroutingnode'},
        input0: {item: 'minecraft:iron_block'},
        input1: {item: 'create:rose_quartz'},
        input2: {item: 'bloodmagic:infusedslate'},
        minimumDrain: 400,
        drain: 200,
      });
    },
  });
});

onEvent('server.datapack.high_priority', event => {
  [
    'apprenticebloodorb',
    'archmagebloodorb',
    'daggerofsacrifice',
    'demonicslate',
    'etherealslate',
    'weakbloodorb',
    'imbuedslate',
    'magicianbloodorb',
    'masterbloodorb',
    'reinforcedslate',
    'alchemy_flask',
    'bleeding_edge_music',
    'earth_tool',
    'enhanced_teleposer_focus',
    'fire_tool',
    'slate',
    'telepoposer_focus',
  ].forEach(id => event.addJson(`bloodmagic:recipes/altar/${id}.json`, {}));

  [
    'corrupted_coal',
    'corrupted_copper',
    'corrupted_gold',
    'corrupted_iron',
    'corrupted_netherite',
    'gold_ore_from_gilded',
    'sand_coal',
    'sand_gold',
    'sand_iron',
    'sulfur_from_lava',
    'bread',
    'sulfur_from_sigil',
    'string',
  ].forEach(recipe => {
    event.addJson(`bloodmagic:recipes/alchemytable/${recipe}.json`, {});
  });

  [
    'living_boots',
    'living_helmet',
    'living_leggings',
    'living_plate',
    'living_trainer',
  ].forEach(array => {
    event.addJson(`bloodmagic:recipes/array/${array}.json`, {});
  });

  event.addJson('bloodsmeltery:recipes/smeltery/alloy/bloodbrass.json', {});
});
