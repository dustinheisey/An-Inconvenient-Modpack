onEvent('recipes', (event) => {
  setBalanceRecipes({
    shapeless: () => {
      ['rankine:glass_from_colors'].forEach((id) => event.remove({ id: id }));
    },
    shaped: () => {
      [
        'rankine:hardness_tester',
        'rankine:flint_and_steel_from_pyrite',
        'rankine:rope',
        'rankine:fiber_block'
      ].forEach((id) => event.remove({ id: id }));
      event.shaped('rankine:fiber_block', ['aaa', 'aaa', 'aaa'], {
        a: 'paragon_textiles:plant_fibers'
      });
      event.shaped('rankine:hardness_tester', ['  a', ' b ', 'c  '], {
        a: '#forge:stone',
        b: '#forge:rods/wooden',
        c: 'minecraft:flint'
      });
      event.shaped('rankine:stick_block', ['aaa', 'aaa', 'aaa'], {
        a: '#forge:rods/wooden'
      });
    },
    shapeless: () => {
      [
        'rankine:yellow_fiber_mat_from_dye',
        'rankine:yellow_fiber_block_from_dye'
      ].forEach((id) => event.remove({ id: id }));
      event.shapeless('rankine:yellow_fiber_block', [
        'rankine:fiber_block',
        'minecraft:yellow_dye'
      ]);
      event.shapeless('rankine:yellow_fiber_mat', [
        'rankine:fiber_mat',
        'minecraft:yellow_dye'
      ]);
    },
    air_distillation: () => {},
    alloying: () => {
      [
        // "nitinol",
        // "steel",
        'alnico',
        'cast_iron',
        'cupronickel',
        'invar',
        'maraging_steel',
        'nickel_silver',
        'permalloy',
        'titanium_alloy'
      ].forEach((id) =>
        event.remove({ id: `rankine:alloying/${id}_alloying` })
      );

      event.custom({
        type: 'rankine:alloying',
        tier: 2,
        total: 10,
        color: 5805717,
        input1: {
          element: 'rankine:elements/neptunium',
          min: 0.1,
          max: 0.25,
          required: true
        },
        input2: {
          element: 'rankine:elements/aluminum',
          min: 0.25,
          max: 0.75
        },
        input3: {
          element: 'rankine:elements/palladium',
          min: 0.25,
          max: 0.75
        },
        input4: {
          element: 'rankine:elements/tin',
          min: 0.25,
          max: 0.75
        },
        input5: {
          element: 'rankine:elements/uranium',
          min: 0.25,
          max: 0.75
        },
        input6: {
          element: 'rankine:elements/americium',
          min: 0.25,
          max: 0.75
        },
        input7: {
          element: 'rankine:elements/plutonium',
          min: 0.25,
          max: 0.75
        },
        input8: {
          element: 'rankine:elements/zirconium',
          min: 0.25,
          max: 0.75
        },
        input9: {
          element: 'rankine:elements/iron',
          min: 0.25,
          max: 0.75
        },
        input10: {
          element: 'rankine:elements/germanium',
          min: 0.25,
          max: 0.75
        },
        result: 'rankine:neptunium_alloy_ingot'
      });

      event.custom({
        type: 'rankine:alloying',
        tier: 2,
        total: 5,
        color: 9608841,
        input1: {
          element: 'rankine:elements/copper',
          min: 0.5,
          max: 0.7,
          required: true
        },
        input2: {
          element: 'rankine:elements/nickel',
          min: 0.15,
          max: 0.25,
          required: true
        },
        input3: {
          element: 'rankine:elements/zinc',
          min: 0.15,
          max: 0.25,
          required: true
        },
        input4: {
          element: 'rankine:elements/iron',
          min: 0.0,
          max: 0.05
        },
        input5: {
          element: 'rankine:elements/manganese',
          min: 0.0,
          max: 0.05
        },
        result: 'rankine:nickel_silver_ingot'
      });

      event.custom({
        type: 'rankine:alloying',
        tier: 2,
        total: 22,
        color: 13750746,
        input1: {
          element: 'rankine:elements/titanium',
          min: 0.55,
          max: 0.95,
          required: true
        },
        input2: {
          element: 'rankine:elements/niobium',
          min: 0.0,
          max: 0.45
        },
        input3: {
          element: 'rankine:elements/tantalum',
          min: 0.0,
          max: 0.45
        },
        input4: {
          element: 'rankine:elements/molybdenum',
          min: 0.0,
          max: 0.15
        },
        input5: {
          element: 'rankine:elements/aluminum',
          min: 0.0,
          max: 0.1
        },
        input6: {
          element: 'rankine:elements/vanadium',
          min: 0.0,
          max: 0.1
        },
        input7: {
          element: 'rankine:elements/chromium',
          min: 0.0,
          max: 0.1
        },
        input8: {
          element: 'rankine:elements/scandium',
          min: 0.0,
          max: 0.1
        },
        input9: {
          element: 'rankine:elements/zirconium',
          min: 0.0,
          max: 0.1
        },
        input10: {
          element: 'rankine:elements/copper',
          min: 0.0,
          max: 0.05
        },
        input11: {
          element: 'rankine:elements/tin',
          min: 0.0,
          max: 0.05
        },
        input12: {
          element: 'rankine:elements/nickel',
          min: 0.0,
          max: 0.05
        },
        input13: {
          element: 'rankine:elements/iron',
          min: 0.0,
          max: 0.05
        },
        input14: {
          element: 'rankine:elements/cobalt',
          min: 0.0,
          max: 0.05
        },
        input15: {
          element: 'rankine:elements/ruthenium',
          min: 0.0,
          max: 0.05
        },
        input16: {
          element: 'rankine:elements/palladium',
          min: 0.0,
          max: 0.05
        },
        input17: {
          element: 'rankine:elements/germanium',
          min: 0.0,
          max: 0.05
        },
        input18: {
          element: 'rankine:elements/gallium',
          min: 0.0,
          max: 0.05
        },
        input19: {
          element: 'rankine:elements/iridium',
          min: 0.0,
          max: 0.05
        },
        input20: {
          element: 'rankine:elements/carbon',
          min: 0.0,
          max: 0.02
        },
        input21: {
          element: 'rankine:elements/silicon',
          min: 0.0,
          max: 0.02
        },
        input22: {
          element: 'rankine:elements/oxygen',
          min: 0.0,
          max: 0.02
        },
        result: 'rankine:titanium_alloy_ingot',
        enchantments: ['minecraft:projectile_protection'],
        enchantmentTypes: ['ARMOR']
      });
    },
    beehive_oven: () => {
      event.remove({
        output: [
          'rankine:zirconia_block',
          'rankine:bituminous_coal_block',
          'rankine:antimony_block',
          'rankine:lithium_block',
          'rankine:zinc_block',
          'rankine:graphite_block',
          'rankine:silicon_carbide_block',
          'rankine:tungsten_block',
          'rankine:titanium_block',
          'rankine:cadmium_block',
          'rankine:ruthenium_block',
          'rankine:thallium_block',
          'rankine:molybdenum_block',
          'rankine:nickel_block',
          'rankine:platinum_block',
          'minecraft:gold_block',
          'rankine:arsenic_block',
          'rankine:manganese_block',
          'minecraft:iron_block',
          'minecraft:glass',
          'rankine:lead_block',
          'rankine:palladium_block',
          'rankine:cobalt_block',
          'rankine:tin_block',
          'minecraft:copper_block',
          'rankine:chromium_block',
          'rankine:strontium_block',
          'rankine:bismuth_block',
          'rankine:silver_block',
          'rankine:magnesia_block',
          'rankine:coke_block'
        ],
        type: 'rankine:beehive_oven'
      });

      event.custom({
        type: 'rankine:beehive_oven',
        input: {
          item: 'tconstruct:nether_grout'
        },
        result: 'tconstruct:scorched_stone',
        minCookTime: 2400,
        maxCookTime: 4800
      });
    },
    crushing: () => {
      event.remove({
        input: [
          'minecraft:tuff',
          'rankine:rhyolitic_tuff',
          'rankine:copper_ore',
          'rankine:nether_gold_ore',
          'rankine:native_arsenic_ore',
          'rankine:komatiitic_tuff',
          'rankine:kimberlitic_tuff',
          'rankine:basaltic_tuff',
          'rankine:andesitic_tuff',
          'rankine:sphalerite_ore',
          'create:veridium',
          'create:scoria',
          'create:ochrum',
          'create:limestone',
          'rankine:sphalerite_ore',
          'create:crimsite',
          'create:asurine',
          'create:zinc_ore',
          'create:deepslate_zinc_ore',
          'minecraft:hay_block',
          'rankine:millet_bale',
          'rankine:sorghum_bale',
          'rankine:rye_bale',
          'rankine:oat_bale',
          'rankine:barley_bale',
          'rankine:zircon_block',
          'rankine:xenotime_ore',
          'rankine:wolframite_ore',
          'rankine:uraninite_ore',
          'rankine:tetrataenite_ore',
          'rankine:taenite_ore',
          'rankine:stibnite_ore',
          'rankine:sperrylite_ore',
          'rankine:native_selenium_ore',
          'rankine:native_lead_ore',
          'rankine:rheniite_ore',
          'rankine:native_silver_ore',
          'rankine:native_tellurium_ore',
          'rankine:native_tin_ore',
          'rankine:petalite_ore',
          'rankine:porphyry_copper',
          'rankine:pyrite_ore',
          'rankine:pyrolusite_ore',
          'rankine:native_indium_ore',
          'rankine:native_gallium_ore',
          'rankine:native_bismuth_ore',
          'rankine:monazite_ore',
          'rankine:molybdenite_ore',
          'rankine:magnetite_ore',
          'rankine:magnesite_ore',
          'rankine:kamacite_ore',
          'rankine:chromite_ore',
          'rankine:coltan_ore',
          'rankine:cryolite_ore',
          'rankine:fumarole_deposit',
          'rankine:greenockite_ore',
          'rankine:hematite_ore',
          'rankine:ilmenite_ore',
          'rankine:interspinifex_ore',
          'rankine:ironstone',
          'rankine:chalcopyrite_block',
          'rankine:chalcocite_ore',
          'rankine:celestine_ore',
          'rankine:bog_iron',
          'rankine:bismuthinite_ore',
          'rankine:beryl_ore',
          'rankine:banded_iron_formation',
          'rankine:baddeleyite_ore',
          'rankine:antitaenite_ore',
          'minecraft:copper_ore',
          'rankine:malachite_ore',
          'rankine:redstone_ore',
          'rankine:lapis_ore',
          'rankine:gold_ore',
          'rankine:iron_ore'
        ],
        type: 'rankine:crushing'
      });

      let stones = {
        'minecraft:cobblestone': [
          'rankine:graywacke',
          'rankine:honeystone',
          'rankine:wadsleyone',
          'rankine:troctolite',
          'minecraft:stone',
          'rankine:sommanite',
          'rankine:shonkinite',
          'rankine:ringwoodine',
          'rankine:rhyolite',
          'rankine:red_porphyry',
          'rankine:meteorite',
          'rankine:nepheline_syenite',
          'minecraft:netherrack',
          'rankine:norite',
          'rankine:pegmatite',
          'rankine:phonolite',
          'rankine:post_perovskite',
          'rankine:purple_porphyry',
          'rankine:red_dacite',
          'rankine:hornblende_andesite',
          'rankine:gray_granite',
          'rankine:granodiorite',
          'minecraft:granite',
          'rankine:frozen_meteorite',
          'rankine:episyenite',
          'rankine:enstatite_chondrite',
          'rankine:comendite',
          'minecraft:andesite',
          'rankine:anorthosite',
          'rankine:black_dacite',
          'rankine:bridgmanham'
        ],
        'minecraft:obsidian': [
          'rankine:snowflake_obsidian',
          'rankine:blood_obsidian',
          'minecraft:crying_obsidian'
        ],
        'minecraft:sand': ['minecraft:sandstone', 'rankine:limestone'],
        'minecraft:red_sand': ['minecraft:red_sandstone', 'rankine:arkose'],
        'rankine:white_sand': [
          'rankine:white_sandstone',
          'rankine:marlstone',
          'rankine:quartzite'
        ],
        'rankine:desert_sand': [
          'rankine:desert_sandstone',
          'rankine:siltstone',
          'rankine:itacolumite',
          'rankine:mudstone'
        ],
        'rankine:black_sand': ['rankine:black_sandstone'],
        'minecraft:blackstone': [
          'rankine:scoria',
          'rankine:wehrlite',
          'rankine:tholeiitic_basalt',
          'rankine:pyroxenite',
          'rankine:lherzolite',
          'rankine:komatiite',
          'rankine:kimberlite',
          'rankine:harzburgite',
          'rankine:gabbro',
          'rankine:dunite',
          'rankine:diabase',
          'minecraft:basalt',
          'minecraft:obsidian'
        ],
        'minecraft:cobbled_deepslate': ['minecraft:deepslate'],
        'rankine:skarn': [
          'rankine:whiteschist',
          'rankine:white_marble',
          'rankine:soapstone',
          'rankine:slate',
          'rankine:serpentinite',
          'rankine:rose_marble',
          'rankine:phyllite',
          'rankine:mica_schist',
          'rankine:mariposite',
          'rankine:greenschist',
          'rankine:gray_marble',
          'rankine:gneiss',
          'rankine:eclogite',
          'rankine:blueschist',
          'rankine:black_marble'
        ],
        'minecraft:soul_sand': ['rankine:soul_sandstone']
      };

      Object.keys(stones).forEach((key) => {
        stones[key].forEach((id) => {
          event.custom({
            input: { item: id },
            type: 'rankine:crushing',
            guaranteed: [{ item: key, count: 1, tier: 'minecraft:stone' }]
          });
        });
      });

      event.custom({
        input: { item: 'rankine:hematite_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'rankine:hematite',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'rankine:hematite',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });

      event.custom({
        input: { item: 'rankine:lazurite_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'minecraft:lapis_lazuli',
            count: 1,
            tier: 'minecraft:diamond'
          },
          {
            item: 'minecraft:lapis_lazuli',
            count: 2,
            tier: 'minecraft:netherite'
          }
        ]
      });

      event.custom({
        input: { item: 'minecraft:gold_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'minecraft:raw_gold',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });

      event.custom({
        input: { item: 'rankine:cinnabar_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'minecraft:redstone',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'minecraft:redstone',
            tier: 'minecraft:netherite',
            count: 3
          }
        ]
      });

      event.custom({
        input: { item: 'blue_skies:everbright_diopside_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'blue_skies:diopside_gem',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'blue_skies:diopside_gem',
            count: 1,
            tier: 'minecraft:diamond'
          }
        ]
      });

      event.custom({
        input: { item: 'blue_skies:everbright_aquite_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'blue_skies:raw_aquite',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'blue_skies:raw_aquite',
            count: 1,
            tier: 'minecraft:diamond'
          }
        ]
      });
      event.custom({
        input: { item: 'blue_skies:everbright_charoite_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'blue_skies:raw_charoite',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'blue_skies:raw_charoite',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });

      event.custom({
        input: { item: 'blue_skies:everdawn_moonstone_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'blue_skies:moonstone_shard',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'blue_skies:moonstone_shard',
            count: 2,
            tier: 'minecraft:diamond'
          }
        ]
      });

      event.custom({
        input: { item: 'blue_skies:ventium_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'blue_skies:raw_ventium',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'blue_skies:raw_ventium',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });

      event.custom({
        input: { item: 'blue_skies:everdawn_diopside_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'blue_skies:diopside_gem',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'blue_skies:diopside_gem',
            count: 1,
            tier: 'minecraft:iron'
          }
        ]
      });

      event.custom({
        input: { item: 'blue_skies:everdawn_aquite_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'blue_skies:raw_aquite',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'blue_skies:raw_aquite',
            count: 1,
            tier: 'minecraft:diamond'
          }
        ]
      });
      event.custom({
        input: { item: 'blue_skies:everdawn_charoite_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'blue_skies:raw_charoite',
            count: 1,
            tier: 'minecraft:iron'
          },
          {
            item: 'blue_skies:raw_charoite',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });

      event.custom({
        input: { item: 'undergarden:shiverstone_utherium_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'undergarden:utheric_shard',
            count: 1,
            tier: 'minecraft:diamond'
          },
          {
            item: 'undergarden:utherium_crystal',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });
      event.custom({
        input: { item: 'undergarden:tremblecrust_utherium_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'undergarden:utheric_shard',
            count: 1,
            tier: 'minecraft:diamond'
          },
          {
            item: 'undergarden:utherium_crystal',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });

      event.custom({
        input: { item: 'undergarden:depthrock_coal_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'minecraft:coal',
            tier: 'minecraft:stone',
            count: 1
          },
          {
            item: 'minecraft:coal',
            count: 3,
            tier: 'minecraft:diamond'
          }
        ]
      });
      event.custom({
        input: { item: 'undergarden:shiverstone_coal_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'minecraft:coal',
            tier: 'minecraft:stone',
            count: 1
          },
          {
            item: 'minecraft:coal',
            count: 3,
            tier: 'minecraft:diamond'
          }
        ]
      });
      event.custom({
        input: { item: 'undergarden:depthrock_cloggrum_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'undergarden:raw_cloggrum',
            tier: 'minecraft:iron',
            count: 1
          },
          {
            item: 'undergarden:raw_cloggrum',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });
      event.custom({
        input: { item: 'undergarden:shiverstone_cloggrum_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'undergarden:raw_cloggrum',
            tier: 'minecraft:iron',
            count: 1
          },
          {
            item: 'undergarden:raw_cloggrum',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });
      event.custom({
        input: { item: 'undergarden:shiverstone_froststeel_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'undergarden:raw_froststeel',
            count: 1,
            tier: 'minecraft:diamond'
          },
          {
            item: 'undergarden:raw_froststeel',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });
      event.custom({
        input: { item: 'undergarden:depthrock_utherium_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'undergarden:utheric_shard',
            count: 1,
            tier: 'minecraft:diamond'
          },
          {
            item: 'undergarden:utherium_crystal',
            count: 1,
            tier: 'minecraft:netherite'
          }
        ]
      });
      event.custom({
        input: { item: 'rankine:lazurite_ore' },
        type: 'rankine:crushing',
        guaranteed: [
          {
            item: 'minecraft:lapis_lazuli',
            count: 1,
            tier: 'minecraft:diamond'
          },
          {
            item: 'minecraft:lapis_lazuli',
            tier: 'minecraft:netherite',
            count: 2
          }
        ]
      });
    },
    evaporation: () => {},
    extrusive_igneous_generator: () => {
      event.remove({
        output: [
          'minecraft:andesite',
          'minecraft:basalt',
          'rankine:black_dacite',
          'rankine:comendite',
          'rankine:hornblende_andesite',
          'minecraft:netherrack',
          'rankine:tholeiitic_basalt',
          'rankine:rhyolite',
          'rankine:red_dacite',
          'rankine:phonolite',
          'minecraft:end_stone'
        ],
        type: 'rankine:rock_generator'
      });
    },
    intrusive_igneous_generator: () => {
      event.remove({
        output: [
          'rankine:wehrlite',
          'rankine:troctolite',
          'rankine:sommanite',
          'rankine:red_porphyry',
          'rankine:pyroxenite',
          'rankine:purple_porphyry',
          'rankine:post_perovskite',
          'rankine:meteorite',
          'rankine:lherzolite',
          'rankine:komatiite',
          'rankine:harzburgite',
          'rankine:frozen_meteorite',
          'rankine:dunite',
          'rankine:diabase',
          'rankine:bridgmanham',
          'rankine:anorthosite',
          'rankine:gabbro',
          'create:veridium',
          'create:ochrum',
          'create:asurine',
          'minecraft:stone'
        ],
        type: 'rankine:rock_generator'
      });

      event.custom({
        type: 'rankine:rock_generator',
        genType: 'intrusive_igneous',
        result: { block: 'minecraft:stone' },
        input1: { item: 'create:asurine' },
        input2: { item: 'create:crimsite' }
      });
    },
    metamorphic_generator: () => {
      event.remove({
        output: [
          'rankine:whiteschist',
          'rankine:serpentinite',
          'rankine:mica_schist',
          'rankine:phyllite',
          'rankine:greenschist',
          'rankine:gneiss',
          'rankine:eclogite',
          'rankine:blueschist',
          'rankine:rose_marble',
          'rankine:slate',
          'rankine:black_marble',
          'rankine:white_marble',
          'rankine:mariposite'
        ],
        type: 'rankine:rock_generator'
      });
    },
    mixing: () => {
      event.remove({
        output: [
          'rankine:tofu',
          'rankine:pumice_soap',
          'rankine:pancake_batter',
          'rankine:fire_clay_ball',
          'rankine:beta_alumina_solid_electrolyte',
          'rankine:dough',
          'rankine:bitumen',
          'rankine:mariposite',
          'rankine:cement_mix',
          'rankine:cob',
          'rankine:refined_cob',
          'rankine:roman_concrete'
        ],
        type: 'rankine:mixing'
      });

      event.custom({
        type: 'rankine:mixing',
        mixTime: 100,
        matScale: 1,
        ingredientTotal: 2,
        fluidInput: { fluid: 'minecraft:water', amount: 20 },
        inputs: [
          { tag: 'forge:stones/pumice', min: 0.9, max: 0.95 },
          { tag: 'rankine:alkali_hydroxides', min: 0.05, max: 0.1 }
        ],
        result: { item: 'rankine:pumice_soap' }
      });
      event.custom({
        type: 'rankine:mixing',
        mixTime: 100,
        matScale: 1,
        ingredientTotal: 3,
        fluidInput: {
          fluid: 'minecraft:water',
          amount: 50
        },
        inputs: [
          {
            tag: 'minecraft:dirt',
            min: 0.4,
            max: 0.6
          },
          {
            tag: 'minecraft:sand',
            min: 0.4,
            max: 0.6
          },
          {
            id: 'paragon_textiles:plant_fibers',
            min: 0.05,
            max: 0.25
          }
        ],
        result: { item: 'rankine:cob' }
      });
      event.custom({
        type: 'rankine:mixing',
        mixTime: 100,
        matScale: 1,
        ingredientTotal: 3,
        fluidInput: {
          fluid: 'minecraft:water',
          amount: 50
        },
        inputs: [
          {
            tag: 'minecraft:sand',
            min: 0.6,
            max: 0.75
          },
          {
            id: 'rankine:fire_clay_ball',
            min: 0.05,
            max: 0.2
          },
          {
            id: 'paragon_textiles:plant_fibers',
            min: 0.2,
            max: 0.5
          }
        ],
        result: { item: 'rankine:refined_cob' }
      });
    },
    sedimentary_generator: () => {
      event.remove({
        output: ['rankine:dolostone', 'rankine:chalk', 'rankine:shale'],
        type: 'rankine:rock_generator'
      });
    },
    sluicing: () => {
      event.remove({
        input: ['rankine:laterite', 'rankine:light_gravel', 'minecraft:gravel'],
        type: 'rankine:sluicing'
      });

      event.custom({
        type: 'rankine:sluicing',
        input: { item: 'rankine:desert_sand' },
        outputs: [
          { item: `minecraft:sand`, weight: 100 },
          { item: 'minecraft:cactus', weight: 1 }
        ],
        tool: { item: 'rankine:wooden_gold_pan' }
      });
      event.custom({
        type: 'rankine:sluicing',
        input: { item: 'blue_skies:lunar_grass_block' },

        outputs: [
          { item: `blue_skies:lunar_dirt`, weight: 100 },
          { item: 'hexerei:sage_seed', weight: 1 },
          { item: 'blue_skies:fiery_bean_seeds', weight: 1 },
          { item: 'blue_skies:scalefruit_seeds', weight: 1 },
          { item: 'hexerei:mandrake_root', weight: 1 },
          { item: 'minecraft:cocoa_beans', weight: 1 }
        ],
        tool: { item: 'rankine:steel_gold_pan' }
      });
      event.custom({
        type: 'rankine:sluicing',
        input: { item: 'undergarden:deepturf_block' },
        outputs: [
          { item: `undergarden:deepsoil`, weight: 100 },
          { item: 'undergarden:gloomgourd_seeds', weight: 1 },
          { item: 'undergarden:underbeans', weight: 1 },
          { item: 'minecraft:sugar_cane', weight: 1 }
        ],
        tool: { item: 'rankine:steel_gold_pan' }
      });
      event.custom({
        type: 'rankine:sluicing',
        input: { item: 'minecraft:soul_soil' },
        outputs: [
          { item: `minecraft:soul_sand`, weight: 100 },
          { item: 'minecraft:nether_wart', weight: 1 }
        ],
        tool: { item: 'rankine:steel_gold_pan' }
      });
    },
    stripping: () => {},
    tree_tapping: () => {},
    volcanic_generator: () => {
      event.remove({
        output: [
          'rankine:blood_obsidian',
          'rankine:pumice',
          'rankine:komatiitic_tuff',
          'rankine:andesitic_tuff',
          'rankine:basaltic_tuff',
          'rankine:rhyolitic_tuff',
          'minecraft:crying_obsidian'
        ],
        type: 'rankine:rock_generator'
      });

      event.custom({
        type: 'rankine:rock_generator',
        genType: 'volcanic',
        input1: { item: 'minecraft:obsidian' },
        result: {
          block: 'minecraft:crying_obsidian'
        }
      });
    }
  });
});

onEvent('server.datapack.high_priority', (event) => {
  ['overworld', 'nether'].forEach((dimension) => {
    event.addJson(
      `rankine:recipes/air_distillation/${dimension}_air_distillation.json`,
      {
        type: 'forge:conditional',
        recipes: [
          {
            conditions: [
              {
                type: 'forge:false'
              }
            ]
          }
        ]
      }
    );
  });
});
