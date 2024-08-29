onEvent('recipes', event => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        {
          id: 'gateways',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                duration: 60,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/custom_ritual',
                },
                activation_item: {item: 'blue_skies:soul_fragment'},
                pentacle_id: 'occultism:craft_marid',
                ingredients: [
                  {
                    item: 'hem:copparite',
                  },
                  {
                    item: 'rankine:vulcanized_rubber',
                  },
                  {
                    item: 'hem:lush_flower_1',
                  },
                  {
                    item: 'hem:shotgun_shell',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    item: 'hem:copparite',
                  },
                  {
                    item: 'rankine:vulcanized_rubber',
                  },
                  {
                    item: 'hem:lush_flower_1',
                  },
                  {
                    item: 'hem:shotgun_shell',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    item: 'rankine:steel_ingot',
                  },
                  {
                    item: 'rankine:steel_ingot',
                  },
                ],
                result: {
                  item: 'gateways:gate_pearl',
                  nbt: '{gateway:"gateways:small_blueleaf_gateway"}',
                },
              })
              .id('inconvenient:ritual_blueleaf_gateway');
          },
          children: [],
        },
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
              .id('inconvenient:shapeless_immersiveengineering_manual');
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
              .id('inconvenient:shaped_black_eye');
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
              .id('inconvenient:shaped_blueleaf_lost_story');
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
        {
          id: 'bricks',
          recipe: () => {
            [
              'pneumaticcraft:compressed_bricks',
              'pneumaticcraft:reinforced_bricks',
            ].forEach(id => event.remove({id: id}));

            overrideBricksRecipes('chapter_5_2', event, [
              {
                output: 'pneumaticcraft:compressed_bricks',
                input: 'pneumaticcraft:compressed_stone',
              },
              {
                output: 'pneumaticcraft:reinforced_bricks',
                input: 'pneumaticcraft:reinforced_stone',
              },
            ]);
          },
        },
      ],
    },
    {
      id: 'demon_crusher',
      recipe: () => {
        // 5.2
        event
          .custom({
            type: 'occultism:crushing',
            ingredient: {tag: 'forge:ores/uranium'},
            result: {item: 'rankine:uraninite', count: 2},
            crushing_time: 200,
          })
          .id('inconvenient:demon_crushing_uraninite');
        event
          .custom({
            type: 'occultism:crushing',
            ingredient: {tag: 'forge:ores/nickel'},
            result: {item: 'rankine:pentlandite', count: 2},
            crushing_time: 200,
          })
          .id('inconvenient:demon_crushing_pentlandite');
      },
    },
    {
      id: 'rods',
      recipe: () => {
        [
          'tconstruct:smeltery/casting/metal/electrum/rod_gold_cast',
          'tconstruct:smeltery/casting/metal/electrum/rod_sand_cast',
          'tconstruct:smeltery/casting/metal/aluminum/rod_gold_cast',
          'tconstruct:smeltery/casting/metal/aluminum/rod_sand_cast',
          'tconstruct:smeltery/casting/metal/steel/rod_gold_cast',
          'tconstruct:smeltery/casting/metal/steel/rod_sand_cast',
          'tconstruct:smeltery/casting/metal/iron/rod_gold_cast',
          'tconstruct:smeltery/casting/metal/iron/rod_sand_cast',
        ].forEach(id => event.remove({id: id}));
      },
    },
    {
      id: 'plates',
      recipe: () => {
        [
          'tconstruct:smeltery/casting/metal/constantan/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/constantan/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/electrum/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/electrum/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/steel/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/steel/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/nickel/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/nickel/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/uranium/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/uranium/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/platinum/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/platinum/plate_sand_cast',
        ].forEach(id => event.remove({id: id}));
      },
    },
    {
      id: 'wires',
      recipe: () => {
        [
          'tconstruct:smeltery/casting/metal/copper/wire_gold_cast',
          'tconstruct:smeltery/casting/metal/copper/wire_sand_cast',
          'tconstruct:smeltery/casting/metal/electrum/wire_gold_cast',
          'tconstruct:smeltery/casting/metal/electrum/wire_sand_cast',
          'tconstruct:smeltery/casting/metal/aluminum/wire_gold_cast',
          'tconstruct:smeltery/casting/metal/aluminum/wire_sand_cast',
          'tconstruct:smeltery/casting/metal/steel/wire_gold_cast',
          'tconstruct:smeltery/casting/metal/steel/wire_sand_cast',
          'tconstruct:smeltery/casting/metal/lead/wire_gold_cast',
          'tconstruct:smeltery/casting/metal/lead/wire_sand_cast',
          'tconstruct:smeltery/casting/metal/brass/wire_gold_cast',
          'tconstruct:smeltery/casting/metal/brass/wire_sand_cast',
        ].forEach(id => event.remove({id: id}));
      },
    },
    {
      id: 'metals',
      children: [
        {
          id: 'melting',
          recipe: () => {
            [
              'tconstruct:smeltery/alloys/molten_invar',
              'tconstruct:smeltery/alloys/molten_electrum',
              'tconstruct:smeltery/alloys/molten_constantan',
              'tconstruct:smeltery/melting/metal/nickel/ore_singular',
              'tconstruct:smeltery/melting/metal/uranium/ore_singular',
            ].forEach(id => event.remove({id: id}));

            event
              .custom({
                type: 'tconstruct:melting',
                ingredient: {item: 'chemlib:nickel_dust'},
                result: {fluid: 'tconstruct:molten_nickel', amount: 90},
                temperature: 605,
                time: 54,
              })
              .id('inconvenient:melting_nickel_dust');
            event
              .custom({
                type: 'tconstruct:melting',
                ingredient: {item: 'chemlib:uranium_dust'},
                result: {fluid: 'tconstruct:molten_uranium', amount: 90},
                temperature: 605,
                time: 54,
              })
              .id('inconvenient:melting_uranium_dust');
          },
        },
        {
          id: 'blast_furnace',
          recipe: () => {
            event
              .blasting('chemlib:nickel_dust', 'rankine:nickel_ingot')
              .id('inconvenient:blasting_nickel_dust');
            event
              .blasting('chemlib:platinum_dust', 'rankine:platinum_ingot')
              .id('inconvenient:blasting_platinum_dust');
            event
              .blasting('chemlib:uranium_dust', 'rankine:uranium_ingot')
              .id('inconvenient:blasting_uranium_uranium');
            event
              .blasting('create:crushed_raw_platinum', 'rankine:platinum_ingot')
              .id('inconvenient:blasting_crushed_raw_platinum');
            event
              .blasting('chemlib:uranium_dust', 'rankine:uranium_ingot')
              .id('inconvenient:blasting_uranium_dust');
            event
              .blasting('chemlib:nickel_dust', 'rankine:nickel_ingot')
              .id('inconvenient:blasting_nickel_dust');
          },
        },
        {
          id: 'crusher',
          recipe: () => {
            event
              .custom({
                type: 'immersiveengineering:crusher',
                result: {tag: 'forge:dusts/coal'},
                input: {item: 'minecraft:coal'},
                energy: 2400,
              })
              .id('inconvenient:crusher_coal_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x minecraft:netherite_scrap'},
                input: {item: 'minecraft:ancient_debris'},
                energy: 2400,
              })
              .id('inconvenient:crusher_netherite_scrap');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:iron_dust'},
                input: {item: 'rankine:hematite'},
                energy: 2400,
              })
              .id('inconvenient:crusher_iron_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:copper_dust'},
                input: {item: 'rankine:malachite'},
                energy: 2400,
              })
              .id('inconvenient:crusher_copper_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:sulfur_dust'},
                input: {item: 'rankine:sulfur'},
                energy: 2400,
              })
              .id('inconvenient:crusher_sulfur_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:silicon_dust'},
                input: {item: 'rankine:silicon'},
                energy: 2400,
              })
              .id('inconvenient:crusher_silicon_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:zinc_dust'},
                input: {item: 'rankine:sphalerite'},
                energy: 2400,
              })
              .id('inconvenient:crusher_zinc_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:tin_dust'},
                input: {item: 'rankine:cassiterite'},
                energy: 2400,
              })
              .id('inconvenient:crusher_tin_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:gold_dust'},
                input: {item: 'minecraft:raw_gold'},
                energy: 2400,
              })
              .id('inconvenient:crusher_gold_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:lead_dust'},
                input: {item: 'rankine:galena'},
                energy: 2400,
              })
              .id('inconvenient:crusher_lead_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:silver_dust'},
                input: {item: 'rankine:acanthite'},
                energy: 2400,
              })
              .id('inconvenient:crusher_silver_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:aluminum_dust'},
                input: {item: 'rankine:bauxite'},
                energy: 2400,
              })
              .id('inconvenient:crusher_aluminum_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x chemlib:cobalt_dust'},
                input: {item: 'rankine:cobaltite'},
                energy: 2400,
              })
              .id('inconvenient:crusher_cobalt_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:sodium_dust'},
                input: {item: 'rankine:sodium_chloride'},
                energy: 2400,
              })
              .id('inconvenient:crusher_sodium_dust');

            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:iron_dust'},
                input: {item: 'minecraft:iron_ingot'},
                energy: 2400,
              })
              .id('inconvenient:crusher_iron_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:copper_dust'},
                input: {item: 'minecraft:copper_ingot'},
                energy: 2400,
              })
              .id('inconvenient:crusher_copper_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:zinc_dust'},
                input: {item: 'rankine:zinc_ingot'},
                energy: 2400,
              })
              .id('inconvenient:crusher_zinc_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:tin_dust'},
                input: {item: 'rankine:tin_ingot'},
                energy: 2400,
              })
              .id('inconvenient:crusher_tin_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:gold_dust'},
                input: {item: 'minecraft:gold_ingot'},
                energy: 2400,
              })
              .id('inconvenient:crusher_gold_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:lead_dust'},
                input: {item: 'rankine:lead_ingot'},
                energy: 2400,
              })
              .id('inconvenient:crusher_lead_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:titanium_dust'},
                input: {item: 'rankine:titanium_ingot'},
                energy: 2400,
              })
              .id('inconvenient:crusher_titanium_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:nickel_dust'},
                input: {item: 'rankine:nickel_ingot'},
                energy: 2400,
              })
              .id('inconvenient:crusher_nickel_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: 'chemlib:uranium_dust'},
                input: {item: 'rankine:uranium_ingot'},
                energy: 2400,
              })
              .id('inconvenient:crusher_uranium_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:raw_horizonite'},
                input: {item: 'blue_skies:horizonite_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_horizonite');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:moonstone_shard'},
                input: {item: 'blue_skies:everdawn_moonstone_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_moonstone_shard');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:raw_charoite'},
                input: {item: 'blue_skies:everdawn_charoite_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_charoite');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:raw_aquite'},
                input: {item: 'blue_skies:everdawn_aquite_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_aquite');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:pyrope_gem'},
                input: {item: 'blue_skies:everdawn_pyrope_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_pyrope_gem');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:diopside_gem'},
                input: {item: 'blue_skies:everdawn_diopside_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_diopside_gem');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:raw_ventium'},
                input: {item: 'blue_skies:ventium_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_ventium');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:raw_falsite'},
                input: {item: 'blue_skies:falsite_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_falsite');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:moonstone_shard'},
                input: {item: 'blue_skies:everbright_moonstone_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_moonstone_shard');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:raw_charoite'},
                input: {item: 'blue_skies:everbright_charoite_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_charoite');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:raw_aquite'},
                input: {item: 'blue_skies:everbright_aquite_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_aquite');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:pyrope_gem'},
                input: {item: 'blue_skies:everbright_pyrope_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_pyrope_gem');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x blue_skies:diopside_gem'},
                input: {item: 'blue_skies:everbright_diopside_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_diopside_gem');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x occultism:iesnium_dust'},
                input: {item: 'occultism:iesnium_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_iesnium_dust');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '6x minecraft:quartz'},
                input: {item: 'rankine:nether_quartz_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_quartz');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x rankine:graphite'},
                input: {item: 'rankine:plumbago_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_graphite');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x rankine:sulfur'},
                input: {item: 'rankine:native_sulfur_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_sulfur');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '16x minecraft:redstone'},
                input: {item: 'rankine:cinnabar_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_redstone');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x undergarden:regalium_crystal'},
                input: {item: 'undergarden:shiverstone_regalium_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_regalium_crystal');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x undergarden:regalium_crystal'},
                input: {item: 'undergarden:depthrock_regalium_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_regalium_crystal');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x undergarden:utherium_crystal'},
                input: {item: 'undergarden:depthrock_utherium_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_utherium_crystal');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x undergarden:utherium_crystal'},
                input: {item: 'undergarden:tremblecrust_utherium_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_utherium_crystal');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x undergarden:utherium_crystal'},
                input: {item: 'undergarden:shiverstone_utherium_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_utherium_crystal');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x undergarden:raw_froststeel'},
                input: {item: 'undergarden:shiverstone_froststeel_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_froststeel');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x undergarden:raw_cloggrum'},
                input: {item: 'undergarden:shiverstone_cloggrum_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_cloggrum');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '3x undergarden:raw_cloggrum'},
                input: {item: 'undergarden:depthrock_cloggrum_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_raw_cloggrum');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '5x minecraft:coal'},
                input: {item: 'undergarden:shiverstone_coal_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_coal');
            event
              .custom({
                type: 'immersiveengineering:crusher',
                secondaries: [],
                result: {item: '5x minecraft:coal'},
                input: {item: 'undergarden:depthrock_coal_ore'},
                energy: 2400,
              })
              .id('inconvenient:crusher_coal');
          },
        },
        {
          id: 'arc_furnace',
          recipe: () => {
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'minecraft:iron_ingot', count: 3}],
                input: {item: 'rankine:hematite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_iron_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'minecraft:copper_ingot', count: 3}],
                input: {item: 'rankine:malachite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_copper_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'rankine:zinc_ingot', count: 3}],
                input: {item: 'rankine:sphalerite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_zinc_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'rankine:tin_ingot', count: 3}],
                input: {item: 'rankine:cassiterite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_tin_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'minecraft:gold_ingot', count: 3}],
                input: {item: 'minecraft:gold_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_gold_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'rankine:lead_ingot'}],
                input: {item: 'rankine:galena_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_lead_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'rankine:silver_ingot'}],
                input: {item: 'rankine:acanthite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_silver_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'rankine:aluminum_ingot'}],
                input: {item: 'rankine:bauxite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_aluminum_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'rankine:cobalt_ingot'}],
                input: {item: 'rankine:cobaltite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_cobalt_ingot');

            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:horizonite_ingot'}],
                input: {item: 'blue_skies:horizonite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_horizonite_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:moonstone_shard'}],
                input: {item: 'blue_skies:everdawn_moonstone_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_moonstone_shard');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:charoite'}],
                input: {item: 'blue_skies:everdawn_charoite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_charoite');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:aquite'}],
                input: {item: 'blue_skies:everdawn_aquite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_aquite');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:pyrope_gem'}],
                input: {item: 'blue_skies:everdawn_pyrope_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_pyrope_gem');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:diopside_gem'}],
                input: {item: 'blue_skies:everdawn_diopside_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_diopside_gem');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:ventium_ingot'}],
                input: {item: 'blue_skies:ventium_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_ventium_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:falsite_ingot'}],
                input: {item: 'blue_skies:falsite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_falsite_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:moonstone_shard'}],
                input: {item: 'blue_skies:everbright_moonstone_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_moonstone_shard');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:charoite'}],
                input: {item: 'blue_skies:everbright_charoite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_charoite');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:aquite'}],
                input: {item: 'blue_skies:everbright_aquite_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_aquite');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:pyrope_gem'}],
                input: {item: 'blue_skies:everbright_pyrope_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_pyrope_gem');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'blue_skies:diopside_gem'}],
                input: {item: 'blue_skies:everbright_diopside_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_diopside_gem');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'occultism:iesnium_ingot'}],
                input: {item: 'occultism:iesnium_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_iesnium_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 6, item: 'minecraft:quartz'}],
                input: {item: 'rankine:nether_quartz_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_quartz');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'rankine:graphite'}],
                input: {item: 'rankine:plumbago_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_graphite');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'rankine:sulfur'}],
                input: {item: 'rankine:native_sulfur_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_sulfur');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 16, item: 'minecraft:redstone'}],
                input: {item: 'rankine:cinnabar_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_redstone');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'undergarden:regalium_crystal'}],
                input: {item: 'undergarden:shiverstone_regalium_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_regalium_crystal');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'undergarden:regalium_crystal'}],
                input: {item: 'undergarden:depthrock_regalium_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_regalium_crystal');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'undergarden:utherium_crystal'}],
                input: {item: 'undergarden:depthrock_utherium_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_utherium_crystal');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'undergarden:utherium_crystal'}],
                input: {item: 'undergarden:tremblecrust_utherium_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_utherium_crystal');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'undergarden:utherium_crystal'}],
                input: {item: 'undergarden:shiverstone_utherium_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_utherium_crystal');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'undergarden:froststeel_ingot'}],
                input: {item: 'undergarden:shiverstone_froststeel_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_froststeel_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'undergarden:cloggrum_ingot'}],
                input: {item: 'undergarden:shiverstone_cloggrum_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_cloggrum_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 3, item: 'undergarden:cloggrum_ingot'}],
                input: {item: 'undergarden:depthrock_cloggrum_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_cloggrum_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 5, item: 'minecraft:coal'}],
                input: {item: 'undergarden:shiverstone_coal_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_coal');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{count: 5, item: 'minecraft:coal'}],
                input: {item: 'undergarden:depthrock_coal_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_coal');

            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'minecraft:copper_ingot'}],
                input: {item: 'chemlib:copper_dust'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_copper_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [
                  {
                    item: 'rankine:tin_ingot',
                  },
                ],
                input: {item: 'chemlib:tin_dust'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_tin_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'rankine:titanium_ingot'}],
                input: {item: 'chemlib:titanium_dust'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_titanium_ingot');

            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'blue_skies:horizonite_ingot', count: 2}],
                input: {item: 'blue_skies:raw_horizonite'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_horizonite_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'blue_skies:moonstone_shard', count: 3}],
                input: {item: 'blue_skies:everdawn_moonstone_ore'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_moonstone_shard');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'blue_skies:charoite', count: 2}],
                input: {item: 'blue_skies:raw_charoite'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_charoite');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'blue_skies:aquite', count: 2}],
                input: {item: 'blue_skies:raw_aquite'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_aquite');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'blue_skies:ventium_ingot', count: 2}],
                input: {item: 'blue_skies:raw_ventium'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_ventium_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'blue_skies:falsite_ingot', count: 2}],
                input: {item: 'blue_skies:raw_falsite'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_falsite_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'blue_skies:charoite', count: 2}],
                input: {item: 'blue_skies:raw_charoite'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_charoite');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'blue_skies:aquite', count: 2}],
                input: {item: 'blue_skies:raw_aquite'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_aquite');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'occultism:iesnium_ingot'}],
                input: {item: 'occultism:iesnium_dust'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_iesnium_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'undergarden:froststeel_ingot', count: 2}],
                input: {item: 'undergarden:raw_froststeel'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_froststeel_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'undergarden:cloggrum_ingot', count: 2}],
                input: {item: 'undergarden:raw_cloggrum'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_cloggrum_ingot');
            event
              .custom({
                type: 'immersiveengineering:arc_furnace',
                results: [{item: 'undergarden:cloggrum_ingot', count: 2}],
                input: {item: 'undergarden:raw_cloggrum'},
                time: 100,
                energy: 51200,
              })
              .id('inconvenient:arc_cloggrum_ingot');
          },
        },
      ],
    },
    {
      id: 'batteries',
      recipe: () => {
        [
          'rankine:lead_acid_battery',
          'rankine:rubber_lead_acid_battery',
          'rankine:silver_zinc_battery',
          'rankine:rubber_silver_zinc_battery',
        ].forEach(id => event.remove({id: id}));

        event
          .shaped('rankine:silver_zinc_battery', ['aba', 'cdc', 'aea'], {
            a: `rankine:vulcanized_rubber`,
            b: `rankine:silver_ingot`,
            c: 'minecraft:redstone',
            d: 'rankine:graphite_electrode',
            e: 'rankine:zinc_ingot',
          })
          .id('inconvenient:shaped_silver_zinc_battery');
        event
          .shaped('rankine:lead_acid_battery', ['aba', 'cdc', 'aba'], {
            a: `rankine:vulcanized_rubber`,
            b: `rankine:lead_ingot`,
            c: 'minecraft:redstone',
            d: 'immersiveengineering:redstone_acid_bucket',
          })
          .id('inconvenient:shaped_lead_acid_battery');
      },
    },
    {
      id: 'aircraft',
      recipe: () => {
        [
          'immersive_aircraft:hull',
          'immersive_aircraft:propeller',
          'immersive_aircraft:sail',
          'immersive_aircraft:airship',
          'immersive_aircraft:gyrodyne',
          'immersive_aircraft:biplane',
          'immersive_aircraft:quadrocopter',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'immersive_aircraft:hull',
            },
            pattern: ['aaa', 'bbb', 'aaa'],
            key: {
              a: 'create:shadow_steel_casing',
              b: 'rankine:promethium_ingot',
            },
          })
          .id('inconvenient:basic_table_hull');
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'immersive_aircraft:propeller',
            },
            pattern: ['aa ', ' a ', ' aa'],
            key: {
              a: 'rankine:promethium_ingot',
            },
          })
          .id('inconvenient:basic_table_propeller');
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'immersive_aircraft:sail',
            },
            pattern: ['aab', 'aab', 'aab'],
            key: {
              a: 'immersiveengineering:hemp_fabric',
              b: 'immersiveengineering:hemp_fiber',
            },
          })
          .id('inconvenient:basic_table_sail');

        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {item: 'immersive_aircraft:quadrocopter'},
            pattern: ['aba', 'bcb', 'aba'],
            key: {
              a: 'immersive_aircraft:hull',
              b: 'immersive_aircraft:propeller',
              c: 'immersive_aircraft:engine',
            },
          })
          .id('inconvenient:basic_table_quadrocopter');
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {item: 'immersive_aircraft:biplane'},
            pattern: ['   a ', 'abbac', 'ab dc', 'abbac', '   a '],
            key: {
              a: 'immersive_aircraft:hull',
              b: 'rankine:aluminum_sheetmetal',
              c: 'immersive_aircraft:propeller',
              d: 'immersive_aircraft:engine',
            },
          })
          .id('inconvenient:advanced_table_biplane');
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {item: 'immersive_aircraft:gyrodyne'},
            pattern: ['  a  ', ' bcb ', 'acdca', ' bcb ', '  a  '],
            key: {
              a: 'immersive_aircraft:hull',
              b: 'rankine:aluminum_sheetmetal',
              c: 'immersive_aircraft:propeller',
              d: 'immersive_aircraft:engine',
            },
          })
          .id('inconvenient:advanced_table_gyrodyne');
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {item: 'immersive_aircraft:airship'},
            pattern: ['aaaaa', 'abbba', 'aaaaa', 'cd ef', 'cdddc'],
            key: {
              a: 'immersive_aircraft:sail',
              b: 'rankine:carbon_dioxide_gas_bottle',
              c: 'immersive_aircraft:hull',
              d: 'rankine:aluminum_sheetmetal',
              e: 'immersive_aircraft:engine',
              f: 'immersive_aircraft:propeller',
            },
          })
          .id('inconvenient:advanced_table_airship');

        ['immersive_aircraft:engine'].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {item: 'immersive_aircraft:engine'},
            pattern: ['a a a', 'bbcbb', 'fdgdf', 'fdgdf', 'eeeee'],
            key: {
              a: 'bloodmagic:demonslate',
              b: 'rankine:vulcanized_rubber',
              c: 'hem:teir_one_computer',
              d: 'rankine:carbon',
              e: 'create:sturdy_sheet',
              f: 'create:shadow_steel_casing',
              g: 'create:electron_tube',
            },
          })
          .id('inconvenient:advanced_table_engine');
      },
      children: [],
    },
  ]);

  ['immersiveengineering:crafting/windmill'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'immersiveengineering:windmill',
      },
      pattern: ['aaa', 'aba', 'aaa'],
      key: {
        a: 'immersiveengineering:windmill_blade',
        b: 'rankine:steel_ingot',
      },
    })
    .id('inconvenient:basic_table_windmill');

  ['immersiveengineering:crafting/watermill'].forEach(id =>
    event.remove({id: id})
  );
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'immersiveengineering:watermill',
      },
      pattern: [' a ', 'aba', ' a '],
      key: {
        a: 'immersiveengineering:waterwheel_segment',
        b: 'rankine:steel_ingot',
      },
    })
    .id('inconvenient:basic_table_watermill');

  event
    .shaped('rankine:simple_magnet', ['a a', 'aaa'], {
      a: 'rankine:nickel_ingot',
    })
    .id('inconvenient:shaped_simple_magnet');

  // guns
  event
    .shaped(
      Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'),
      [' a ', 'bbb', 'ccc'],
      {
        a: 'immersiveengineering:graphite_electrode',
        b: 'minecraft:black_dye',
        c: 'minecraft:paper',
      }
    )
    .id('inconvenient:shaped_blueprint_electrode');

  event
    .shaped(
      Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'),
      [' a ', 'bbb', 'ccc'],
      {
        a: 'immersiveengineering:empty_casing',
        b: 'minecraft:orange_dye',
        c: 'minecraft:paper',
      }
    )
    .id('inconvenient:shaped_blueprint_special_bullet');

  event
    .shaped(`rankine:magnetometer`, [' a ', 'bcb', ' a '], {
      a: 'rankine:cupronickel_ingot',
      b: 'extendedcrafting:redstone_ingot',
      c: 'extendedcrafting:ender_ingot',
    })
    .id('inconvenient:shaped_magnetometer');
  event
    .shaped(`pneumaticcraft:turbine_blade`, [' ab', 'ab ', 'a  '], {
      a: 'pneumaticcraft:ingot_iron_compressed',
      b: 'chemlib:copper_plate',
    })
    .id('inconvenient:shaped_turbine_blade');

  event
    .custom({
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
    })
    .id('inconvenient:mechanical_shotgun');

  event
    .custom({
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
    })
    .id('inconvenient:mixing_barrel_asphalt');
  event
    .custom({
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
    })
    .id('inconvenient:mixing_barrel_blue_asphalt');
  event
    .custom({
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
    })
    .id('inconvenient:mixing_barrel_dark_gray_asphalt');
  event
    .custom({
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
    })
    .id('inconvenient:mixing_barrel_gray_asphalt');
  event
    .custom({
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
    })
    .id('inconvenient:mixing_barrel_green_asphalt');
  event
    .custom({
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
    })
    .id('inconvenient:mixing_barrel_red_asphalt');

  // event.remove({
  //   output: [
  //     'rankine:simple_magnet',
  //     `pneumaticcraft:turbine_blade`,
  //     `rankine:magnetometer`,
  //   ],
  //   type: 'minecraft:crafting_shaped',
  // });
});

onEvent('server.datapack.high_priority', event => {
  // Blueleaf
  registerGateways(event, {
    id: 'blueleaf',
    color: '#555e5f',
    dimension: 'Blueleaf',
    waves: [
      {
        type: 'mob',
        entities: ['minecraft:skeleton_horse'],
      },
      {
        type: 'mob',
        entities: ['minecraft:zombie_villager'],
      },
      {
        type: 'mob',
        entities: ['minecraft:zombie_horse'],
      },
      {
        type: 'mob',
        entities: ['minecraft:vex'],
      },
      {
        type: 'mob',
        entities: ['minecraft:vindicator'],
      },
      {
        type: 'mob',
        entities: ['minecraft:ravager'],
      },
      {
        type: 'mob',
        entities: ['minecraft:evoker'],
      },
      {
        type: 'mob',
        entities: ['hem:militarybot'],
      },
      {
        type: 'boss',
        entities: ['hem:enemy_air_airship'],
      },
      {
        type: 'boss',
        entities: ['hem:ancient_one'],
      },
    ],
    restorations: [
      {id: 'minecraft:mule', name: 'mule'},
      {id: 'minecraft:donkey', name: 'donkey'},
      {id: 'minecraft:horse', name: 'horse'},
    ],
    relics: [
      'relics:hunter_belt',
      'relics:arrow_quiver',
      'relics:horse_flute',
      'artifacts:plastic_drinking_hat',
      'artifacts:villager_hat',
      'artifacts:novelty_drinking_hat',
    ],
    rewards: [{id: 'kubejs:blueleaf_token', count: 1}],
  });
});
