onEvent('recipes', event => {
  setBalanceRecipes({
    alloy_kiln: () => {
      // event.remove({
      //   output: ['rankine:invar_ingot'],
      //   type: 'immersiveengineering:alloy',
      // });
    },
    arc_furnace: () => {
      event.remove({
        input: [
          'minecraft:raw_gold_block',
          'rankine:bauxite_ore',
          'minecraft:ancient_debris',
          'rankine:sphalerite_ore',
          'rankine:pentlandite_ore',
          'rankine:acanthite_ore',
          'rankine:uraninite_ore',
          'rankine:galena_ore',
          'rankine:cobaltite_ore',
          'minecraft:raw_gold',
        ],
        type: 'immersiveengineering:arc_furnace',
      });

      event.remove({
        output: 'extendedcrafting:ender_ingot',
      });

      event
        .custom({
          type: 'immersiveengineering:arc_furnace',
          results: [{item: 'minecraft:netherite_scrap', count: 3}],
          input: {item: 'minecraft:ancient_debris'},
          time: 100,
          energy: 51200,
        })
        .id('inconvenient:arc_netherite_scrap');
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
    blueprint: () => {},
    cloche: () => {},
    crusher: () => {
      event.remove({
        input: [
          'rankine:ilmenite',
          'rankine:bauxite_ore',
          'rankine:bauxite_block',
          'rankine:acanthite_block',
          'rankine:acanthite_ore',
          'rankine:acanthite',
          'rankine:bauxite',
          'rankine:cobaltite_ore',
          'rankine:cobaltite',
          'rankine:cobaltite_block',
        ],
        type: 'immersiveengineering:crusher',
      });

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
    fermenter: () => {},
    metal_press: () => {},
    mineral: () => {},
    mixer: () => {},
    refinery: () => {},
  });
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

  [
    'apple',
    'beetroot',
    'glow_berries',
    'melon_slice',
    'potato',
    'sugar_cane',
    'sweet_berries',
  ].forEach(id =>
    event.addJson(`immersiveengineering:recipes/fermenter/${id}.json`, {})
  );

  event.addJson(
    'farmersdelight:recipes/integration/immersiveengineering/fermenter/tomato',
    {}
  );
});
