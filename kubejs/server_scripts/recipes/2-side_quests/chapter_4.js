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
                pentacle_id: 'occultism:summon_marid',
                ingredients: [
                  {
                    item: 'minecraft:wither_rose',
                  },
                  {
                    item: 'minecraft:crimson_fungus',
                  },
                  {
                    item: 'minecraft:warped_fungus',
                  },
                  {
                    item: 'minecraft:quartz',
                  },
                  {
                    item: 'minecraft:porkchop',
                  },
                  {
                    item: 'cataclysm:witherite_ingot',
                  },
                  {
                    item: 'rankine:carbon_dioxide_gas_bottle',
                  },
                  {
                    item: 'minecraft:porkchop',
                  },
                  {
                    item: 'cataclysm:witherite_ingot',
                  },
                  {
                    item: 'rankine:carbon_dioxide_gas_bottle',
                  },
                  {
                    item: 'occultism:iesnium_ingot',
                  },
                  {
                    item: 'minecraft:blaze_powder',
                  },
                ],
                result: {
                  item: 'gateways:gate_pearl',
                  nbt: '{gateway:"gateways:small_nether_gateway"}',
                },
              })
              .id('inconvenient:ritual_nether_gateway');
          },
          children: [],
        },
        {
          id: 'guidebooks',
          recipe: () => {
            // tinker's encyclopedia
          },
        },
        {
          id: 'end_eyes',
          recipe: () => {
            event
              .shaped('endrem:nether_eye', ['aba', 'bcb', 'aba'], {
                a: 'minecraft:nether_brick',
                b: 'minecraft:blaze_powder',
                c: 'bloodmagic:strong_tau',
              })
              .stage('eye_nether')
              .id('inconvenient:shaped_nether_eye');

            event
              .shaped('endrem:wither_eye', ['aba', 'bcb', 'aba'], {
                a: 'create:rose_quartz',
                b: 'kubejs:drop_of_tar',
                c: 'kubejs:inert_compound',
              })
              .stage('eye_wither')
              .id('inconvenient:shaped_wither_eye');
          },
        },
        {
          id: 'lost_stories',
          recipe: () => {
            event
              .shaped(`kubejs:nether_lost_story`, ['abb', 'bcc', 'bcc'], {
                a: 'paragon_textiles:silk',
                b: 'minecraft:leather',
                c: `kubejs:nether_lost_page`,
              })
              .id('inconvenient:shaped_nether_lost_story');
          },
        },
        {
          id: 'armor',
          recipe: () => {
            [
              'minecraft:netherite_helmet_smithing',
              'minecraft:netherite_chestplate_smithing',
              'minecraft:netherite_leggings_smithing',
              'minecraft:netherite_boots_smithing',
              'cataclysm:smithing/ignitium_helmet',
              'cataclysm:smithing/ignitium_chestplate',
              'cataclysm:smithing/ignitium_leggings',
              'cataclysm:smithing/ignitium_boots',
              'hem:tophatrecipe',
              'hem:steampunkcoat',
              'hem:steampunkleggings',
              'hem:steampunkshoes',
              'tconstruct:armor/building/plate_helmet',
              'tconstruct:armor/building/plate_chestplate',
              'tconstruct:armor/building/plate_leggings',
              'tconstruct:armor/building/plate_boots',
            ].forEach(id => event.remove({id: id}));

            stageArmors(event, [
              {
                tier: 'cataclysm:ignitium',
                previousTier: 'minecraft:netherite',
                input: 'cataclysm:ignitium_ingot',
                stage: 'chapter_4',
                master: 'ignitium',
              },
              {
                tier: 'hem:steampunkoutfit',
                previousTier: 'cataclysm:ignitium',
                input: 'hem:copparite',
                stage: 'chapter_4',
                master: 'engineers',
              },
            ]);

            event
              .smithing(
                'minecraft:netherite_helmet',
                'minecraft:netherite_ingot',
                'twilightforest:fiery_helmet'
              )
              .id('inconvenient:smithing_netherite_helmet');
            event
              .smithing(
                'minecraft:netherite_chestplate',
                'minecraft:netherite_ingot',
                'twilightforest:fiery_chestplate'
              )
              .id('inconvenient:smithing_netherite_chestplate');
            event
              .smithing(
                'minecraft:netherite_leggings',
                'minecraft:netherite_ingot',
                'twilightforest:fiery_leggings'
              )
              .id('inconvenient:smithing_netherite_leggings');
            event
              .smithing(
                'minecraft:netherite_boots',
                'minecraft:netherite_ingot',
                'twilightforest:fiery_boots'
              )
              .id('inconvenient:smithing_netherite_boots');

            event
              .shaped('tconstruct:plate_helmet', ['aaa', 'bbb'], {
                a: 'tconstruct:manyullyn_ingot',
                b: 'minecraft:chain',
              })
              .id('inconvenient:shaped_plate_helmet');

            event
              .shaped('tconstruct:plate_chestplate', ['a a', 'aaa', 'bab'], {
                a: 'tconstruct:manyullyn_ingot',
                b: 'minecraft:chain',
              })
              .id('inconvenient:shaped_plate_chestplate');

            event
              .shaped('tconstruct:plate_leggings', ['aaa', 'a a', 'b b'], {
                a: 'tconstruct:manyullyn_ingot',
                b: 'minecraft:chain',
              })
              .id('inconvenient:shaped_plate_leggings');

            event
              .shaped('tconstruct:plate_boots', ['a a', 'a a'], {
                a: 'tconstruct:manyullyn_ingot',
              })
              .id('inconvenient:shaped_plate_boots');
          },
        },
        {
          id: 'totems',
          recipe: () => {
            [
              'rankine:totem_of_blazing',
              'rankine:totem_of_enduring',
              'rankine:totem_of_promising',
              'rankine:totem_of_softening',
            ].forEach(id => event.remove({id: id}));
            event
              .shaped('rankine:totem_of_blazing', ['aaa', 'aba', 'aaa'], {
                a: 'cataclysm:ignitium_ingot',
                b: 'botania:blaze_block',
              })
              .id('inconvenient:shaped_totem_of_blazing');
            event
              .shaped('rankine:totem_of_enduring', ['aaa', 'aba', 'aaa'], {
                a: 'undergarden:froststeel_ingot',
                b: 'undergarden:utherium_block',
              })
              .id('inconvenient:shaped_totem_of_enduring');
            event
              .shaped('rankine:totem_of_promising', ['aaa', 'aba', 'aaa'], {
                a: 'twilightforest:knightmetal_ingot',
                b: 'minecraft:lapis_block',
              })
              .id('inconvenient:shaped_totem_of_promising');

            event
              .shaped('rankine:totem_of_softening', ['aaa', 'aba', 'aaa'], {
                a: 'tconstruct:manyullyn_ingot',
                b: 'minecraft:quartz_block',
              })
              .id('inconvenient:shaped_totem_of_softening');
          },
        },
        {
          id: 'netherite_tools',
          recipe: () => {
            [
              'minecraft:netherite_sword_smithing',
              'minecraft:netherite_shovel_smithing',
              'minecraft:netherite_pickaxe_smithing',
              'minecraft:netherite_axe_smithing',
              'minecraft:netherite_hoe_smithing',
            ].forEach(id => event.remove({id: id}));
            event
              .smithing(
                'minecraft:netherite_axe',
                'minecraft:netherite_ingot',
                'malum:soul_stained_steel_axe'
              )
              .id('inconvenient:smithing_netherite_axe');
            event
              .smithing(
                'minecraft:netherite_sword',
                'minecraft:netherite_ingot',
                'malum:soul_stained_steel_sword'
              )
              .id('inconvenient:smithing_netherite_sword');
            event
              .smithing(
                'farmersdelight:netherite_knife',
                'minecraft:netherite_ingot',
                'malum:soul_stained_steel_knife'
              )
              .id('inconvenient:smithing_netherite_knife');
            event
              .smithing(
                'minecraft:netherite_shovel',
                'minecraft:netherite_ingot',
                'malum:soul_stained_steel_shovel'
              )
              .id('inconvenient:smithing_netherite_shovel');
            event
              .smithing(
                'minecraft:netherite_pickaxe',
                'minecraft:netherite_ingot',
                'twilightforest:fiery_pickaxe'
              )
              .id('inconvenient:smithing_netherite_pickaxe');
            event
              .smithing(
                'minecraft:netherite_hoe',
                'minecraft:netherite_ingot',
                'malum:soul_stained_steel_hoe'
              )
              .id('inconvenient:smithing_netherite_hoe');
          },
        },
        {
          id: 'bricks',
          recipe: () => {
            [
              'tconstruct:smeltery/scorched/scorched_bricks_crafting',
              'tconstruct:smeltery/scorched/scorched_bricks_from_brick',
              'botania:livingrock_bricks',
              'architects_palette:onyx_bricks',
            ].forEach(id => event.remove({id: id}));
            overrideBricksRecipes('chapter_4', event, [
              {
                output: 'tconstruct:scorched_bricks',
                input: 'tconstruct:scorched_brick',
              },
              {
                output: 'botania:livingrock_bricks',
                input: 'botania:livingrock',
              },
              {
                output: 'minecraft:nether_bricks',
                input: 'minecraft:nether_brick',
              },
              {
                output: 'minecraft:quartz_bricks',
                input: 'minecraft:quartz_block',
              },
              {
                output: 'architects_palette:hadaline_bricks',
                input: 'architects_palette:hadaline',
              },
              {
                output: 'architects_palette:esoterrack_bricks',
                input: 'architects_palette:esoterrack',
              },
              {
                output: 'architects_palette:onyx_bricks',
                input: 'architects_palette:onyx',
              },
              {
                output: 'malum:tainted_rock_bricks',
                input: 'malum:polished_tainted_rock',
              },
              {
                output: 'rankine:basalt_bricks',
                input: 'minecraft:basalt',
              },
              {
                output: 'rankine:red_porphyry_bricks',
                input: 'rankine:red_porphyry',
              },
              {
                output: 'rankine:purple_porphyry_bricks',
                input: 'rankine:purple_porphyry',
              },
              {
                output: 'rankine:komatiite_bricks',
                input: 'rankine:komatiite',
              },
              {
                output: 'rankine:rose_marble_bricks',
                input: 'rankine:rose_marble',
              },
            ]);
          },
        },
      ],
    },
    {
      id: 'crushing_head',
      recipe: () => {
        ['rankine:stone_tier_crushing_head'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'rankine:stone_tier_crushing_head'},
            pattern: [' a ', 'aba', 'cdc'],
            key: {
              a: 'rankine:brass_block',
              b: 'create:electron_tube',
              c: 'minecraft:piston',
              d: 'rankine:brass_block',
            },
          })
          .id('inconvenient:mechanical_stone_tier_crushing_head');
      },
    },
    {
      id: 'mechanical_drill',
      recipe: () => {
        ['create:crafting/kinetics/mechanical_drill'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'create:mechanical_crafting',
            result: {item: 'create:mechanical_drill'},
            pattern: [' b ', 'bab', ' c '],
            key: {
              a: 'cataclysm:ignitium_ingot',
              b: 'create:andesite_alloy',
              c: 'create:andesite_casing',
            },
          })
          .id('inconvenient:mechanical_mechanical_drill');
      },
    },
    {
      id: 'blaze_rod',
      recipe: () => {
        [
          'tconstruct:smeltery/casting/blaze/rod_sand_cast',
          'tconstruct:smeltery/casting/blaze/rod_gold_cast',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'create:compacting',
            ingredients: [{item: 'minecraft:blaze_powder', count: 3}],
            results: [{item: 'minecraft:blaze_rod'}],
          })
          .id('inconvenient:compacting_blaze_rod');
      },
    },
    {
      id: 'plates',
      recipe: () => {
        [
          'tconstruct:smeltery/casting/metal/copper/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/copper/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/brass/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/brass/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/iron/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/iron/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/gold/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/gold/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/zinc/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/zinc/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/aluminum/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/aluminum/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/lead/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/lead/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/silver/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/silver/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/cobalt/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/cobalt/plate_sand_cast',
          'tconstruct:smeltery/casting/metal/tin/plate_gold_cast',
          'tconstruct:smeltery/casting/metal/tin/plate_sand_cast',
        ].forEach(id => event.remove({id: id}));

        event
          .custom({
            type: 'create:pressing',
            results: [{item: 'chemlib:sodium_plate'}],
            ingredients: [{item: 'salt:salt'}],
          })
          .id('inconvenient:pressing_sodium_plate');
        event
          .custom({
            type: 'create:pressing',
            results: [{item: 'chemlib:silver_plate'}],
            ingredients: [{item: 'rankine:silver_ingot'}],
          })
          .id('inconvenient:pressing_silver_plate');
        event
          .custom({
            type: 'create:pressing',
            results: [{item: 'chemlib:lead_plate'}],
            ingredients: [{item: 'rankine:lead_ingot'}],
          })
          .id('inconvenient:pressing_lead_plate');
        event
          .custom({
            type: 'create:pressing',
            results: [{item: 'chemlib:aluminum_plate'}],
            ingredients: [{item: 'rankine:aluminum_ingot'}],
          })
          .id('inconvenient:pressing_aluminum_plate');

        event
          .custom({
            type: 'create:pressing',
            results: [{item: 'chemlib:gold_plate'}],
            ingredients: [{item: 'minecraft:gold_ingot'}],
          })
          .id('inconvenient:pressing_gold_plate');
        event
          .custom({
            type: 'create:pressing',
            results: [{item: 'chemlib:cobalt_plate'}],
            ingredients: [{item: 'rankine:cobalt_ingot'}],
          })
          .id('inconvenient:pressing_cobalt_plate');
        event
          .custom({
            type: 'create:pressing',
            results: [{item: 'chemlib:tin_plate'}],
            ingredients: [{item: 'rankine:tin_ingot'}],
          })
          .id('inconvenient:pressing_tin_plate');
      },
    },
    {
      id: 'metals',
      recipe: () => {
        [
          'tconstruct:smeltery/alloys/molten_rose_gold',
          'tconstruct:smeltery/alloys/molten_brass',
          'tconstruct:smeltery/melting/quartz/ore_singular',
          'tconstruct:smeltery/melting/metal/molten_debris/ore',
          'tconstruct:smeltery/melting/metal/gold/gilded_blackstone',
          'tconstruct:smeltery/melting/metal/gold/ore_singular',
          'tconstruct:smeltery/melting/metal/gold/ore_sparse',
          'tconstruct:smeltery/melting/metal/cobalt/ore_singular',
          'tconstruct:smeltery/melting/metal/aluminum/ore_singular',
          'tconstruct:smeltery/melting/metal/zinc/ore_singular',
        ].forEach(id => event.remove({id: id}));

        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'create:crushed_raw_iron'},
            result: {fluid: 'tconstruct:molten_iron', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_crushed_raw_iron');

        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'create:crushed_raw_copper'},
            result: {fluid: 'tconstruct:molten_copper', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_crushed_raw_copper');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'create:crushed_raw_tin'},
            result: {fluid: 'tconstruct:molten_tin', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_crushed_raw_tin');

        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'occultism:iesnium_dust'},
            result: {fluid: 'kubejs:molten_iesnium', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_iesnium_dust');

        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'create:crushed_raw_aluminum'},
            result: {fluid: 'tconstruct:molten_aluminum', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_crushed_raw_aluminum');
        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'create:crushed_raw_zinc'},
            result: {fluid: 'tconstruct:molten_zinc', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_crushed_raw_zinc');

        event
          .custom({
            type: 'tconstruct:melting',
            ingredient: {item: 'create:crushed_raw_gold'},
            result: {fluid: 'tconstruct:molten_gold', amount: 90},
            temperature: 605,
            time: 54,
          })
          .id('inconvenient:melting_crushed_raw_gold');

        // chapter 1,2,3 ores
        event
          .blasting('chemlib:iron_dust', 'minecraft:iron_ingot')
          .id('inconvenient:blasting_iron_dust');
        event
          .blasting('chemlib:copper_dust', 'minecraft:copper_ingot')
          .id('inconvenient:blasting_copper_dust');
        event
          .blasting('chemlib:tin_dust', 'rankine:tin_ingot')
          .id('inconvenient:blasting_tin_dust');
        event
          .blasting('chemlib:silver_dust', 'rankine:silver_ingot')
          .id('inconvenient:blasting_silver_dust');
        event
          .blasting('chemlib:lead_dust', 'rankine:lead_ingot')
          .id('inconvenient:blasting_lead_lead');
        event
          .blasting('create:crushed_raw_iron', 'minecraft:iron_ingot')
          .id('inconvenient:blasting_crushed_raw_iron');
        event
          .blasting('create:crushed_raw_copper', 'minecraft:copper_ingot')
          .id('inconvenient:blasting_crushed_raw_copper');
        event
          .blasting('create:crushed_raw_silver', 'rankine:silver_ingot')
          .id('inconvenient:blasting_crushed_raw_silver');
        event
          .blasting('create:crushed_raw_tin', 'rankine:tin_ingot')
          .id('inconvenient:blasting_crushed_raw_tin');
        event
          .blasting('create:crushed_raw_lead', 'rankine:lead_ingot')
          .id('inconvenient:blasting_crushed_raw_lead');

        // chapter 4 ores
        event
          .blasting('chemlib:aluminum_dust', 'rankine:aluminum_ingot')
          .id('inconvenient:blasting_aluminum_dust');
        event
          .blasting('chemlib:gold_dust', 'minecraft:gold_ingot')
          .id('inconvenient:blasting_gold_dust');
        event
          .blasting('create:crushed_raw_gold', 'minecraft:gold_ingot')
          .id('inconvenient:blasting_crushed_raw_gold');
        event
          .blasting('create:crushed_raw_zinc', 'rankine:zinc_ingot')
          .id('inconvenient:blasting_crushed_raw_zinc');
        event
          .blasting('create:crushed_raw_aluminum', 'rankine:aluminum_ingot')
          .id('inconvenient:blasting_crushed_raw_aluminum');
      },
      children: [
        {
          id: 'splashing',
          recipe: () => {
            event
              .custom({
                type: 'create:splashing',
                ingredients: [{item: 'create:crushed_raw_zinc'}],
                results: [{item: 'rankine:zinc_nugget', count: 9}],
              })
              .id('inconvenient:splashing_zinc_nugget');
          },
        },
        {
          id: 'crushing_wheel',
          recipe: () => {
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:galena'}],
                results: [
                  {count: 2, item: 'chemlib:lead_dust'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_galena');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:cassiterite'}],
                results: [
                  {count: 2, item: 'chemlib:tin_dust'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_cassiterite');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:acanthite'}],
                results: [
                  {count: 2, item: 'chemlib:silver_dust'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_acanthite');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:malachite'}],
                results: [
                  {count: 2, item: 'chemlib:copper_dust'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_malachite');

            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'minecraft:ancient_debris'}],
                results: [
                  {count: 2, item: 'minecraft:netherite_scrap'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_ancient_debris');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:bauxite'}],
                results: [
                  {count: 2, item: 'chemlib:aluminum_dust'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_bauxite');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:hematite'}],
                results: [
                  {count: 2, item: 'chemlib:iron_dust'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_hematite');

            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:horizonite_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:raw_horizonite'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_horizonite_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everdawn_moonstone_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:moonstone_shard'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everdawn_moonstone_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everdawn_charoite_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:raw_charoite'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everdawn_charoite_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everdawn_aquite_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:raw_aquite'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everdawn_aquite_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everdawn_pyrope_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:pyrope_gem'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everdawn_pyrope_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everdawn_diopside_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:diopside_gem'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everdawn_diopside_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:ventium_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:raw_ventium'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_ventium_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:falsite_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:raw_falsite'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_falsite_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everbright_moonstone_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:moonstone_shard'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everbright_moonstone_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everbright_charoite_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:raw_charoite'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everbright_charoite_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everbright_aquite_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:raw_aquite'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everbright_aquite_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everbright_pyrope_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:pyrope_gem'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everbright_pyrope_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'blue_skies:everbright_diopside_ore'}],
                results: [
                  {count: 2, item: 'blue_skies:diopside_gem'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_everbright_diopside_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'occultism:iesnium_ore'}],
                results: [
                  {count: 2, item: 'occultism:iesnium_dust'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_iesnium_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:nether_quartz_ore'}],
                results: [
                  {count: 2, item: 'minecraft:quartz'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_nether_quartz_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:plumbago_ore'}],
                results: [
                  {count: 2, item: 'rankine:graphite'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_plumbago_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:native_sulfur_ore'}],
                results: [
                  {count: 6, item: 'rankine:sulfur_nugget'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_native_sulfur_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:cinnabar_ore'}],
                results: [
                  {item: 'minecraft:redstone', count: 12},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_cinnabar_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:shiverstone_regalium_ore'}],
                results: [
                  {count: 2, item: 'undergarden:regalium_crystal'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_shiverstone_regalium_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:depthrock_regalium_ore'}],
                results: [
                  {count: 2, item: 'undergarden:regalium_crystal'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_depthrock_regalium_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:depthrock_utherium_ore'}],
                results: [
                  {count: 2, item: 'undergarden:utherium_crystal'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_depthrock_utherium_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:tremblecrust_utherium_ore'}],
                results: [
                  {count: 2, item: 'undergarden:utherium_crystal'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_tremblecrust_utherium_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:shiverstone_utherium_ore'}],
                results: [
                  {count: 2, item: 'undergarden:utherium_crystal'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_shiverstone_utherium_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:shiverstone_froststeel_ore'}],
                results: [
                  {count: 2, item: 'undergarden:raw_froststeel'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_shiverstone_froststeel_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:shiverstone_cloggrum_ore'}],
                results: [
                  {count: 2, item: 'undergarden:raw_cloggrum'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_shiverstone_cloggrum_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:depthrock_cloggrum_ore'}],
                results: [
                  {count: 2, item: 'undergarden:raw_cloggrum'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_depthrock_cloggrum_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:shiverstone_coal_ore'}],
                results: [
                  {count: 3, item: 'minecraft:coal'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_shiverstone_coal_ore');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'undergarden:depthrock_coal_ore'}],
                results: [
                  {count: 3, item: 'minecraft:coal'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_depthrock_coal_ore');

            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:cobaltite'}],
                results: [
                  {count: 2, item: 'chemlib:cobalt_dust'},
                  {item: 'create:experience_nugget', chance: 0.5},
                ],
              })
              .id('inconvenient:crushing_wheel_cobaltite');
            event
              .custom({
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'rankine:sulfur'}],
                results: [{item: 'chemlib:sulfur_dust'}],
              })
              .id('inconvenient:crushing_wheel_sulfur');
            event
              .custom({
                results: [{item: 'bloodmagic:coalsand'}],
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'minecraft:coal'}],
              })
              .id('inconvenient:crushing_wheel_coal');

            event
              .custom({
                results: [{count: 9, item: 'bloodmagic:coalsand'}],
                type: 'create:crushing',
                processingTime: 250,
                ingredients: [{item: 'minecraft:coal_block'}],
              })
              .id('inconvenient:crushing_wheel_coal_block');
          },
        },
      ],
    },
    {
      id: 'foundry',
      recipe: () => {
        [
          'tconstruct:smeltery/casting/scorched/foundry_controller',
          'tconstruct:smeltery/casting/scorched/polished_from_magma',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'tconstruct:casting_basin',
            fluid: {name: 'tconstruct:blazing_blood', amount: 40},
            cast: 'tconstruct:scorched_bricks',
            result: 'tconstruct:foundry_controller',
            cooling_time: 900,
          })
          .id('inconvenient:casting_basin_foundry_controller');
      },
    },
    {
      id: 'cobaltite',
      recipe: () => {
        event
          .custom({
            input: {item: 'rankine:cobaltite_ore'},
            type: 'rankine:crushing',
            guaranteed: [
              {
                item: 'rankine:cobaltite',
                count: 1,
                tier: 'minecraft:netherite',
              },
            ],
          })
          .id('inconvenient:crushing_cobaltite_ore');
      },
    },
    {
      id: 'iesnium',
      recipe: () => {
        event
          .custom({
            type: 'tconstruct:casting_table',
            result: 'occultism:iesnium_nugget',
            fluid: {name: 'kubejs:molten_iesnium', amount: 10},
            cast: {item: 'tconstruct:nugget_cast', cast_consumed: false},
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_iesnium_nugget');
        event
          .custom({
            type: 'tconstruct:casting_table',
            result: 'occultism:iesnium_ingot',
            fluid: {name: 'kubejs:molten_iesnium', amount: 90},
            cast: {item: 'tconstruct:ingot_cast', cast_consumed: false},
            cooling_time: 100,
          })
          .id('inconvenient:casting_table_iesnium_ingot');
        event
          .custom({
            type: 'tconstruct:casting_basin',
            result: 'occultism:iesnium_block',
            cooling_time: 900,
            fluid: {name: 'kubejs:molten_iesnium', amount: 810},
          })
          .id('inconvenient:casting_basin_iesnium_block');
      },
      children: [
        {
          id: 'molten_iesnium',
          recipe: () => {
            event
              .custom({
                type: 'tconstruct:melting',
                ingredient: {item: 'occultism:raw_iesnium'},
                result: {fluid: 'kubejs:molten_iesnium', amount: 90},
                temperature: 605,
                time: 54,
              })
              .id('inconvenient:melting_raw_iesnium');
          },
          children: [
            {
              id: 'raw_iesnium',
              recipe: () => {
                event
                  .custom({
                    input: {item: 'occultism:iesnium_ore'},
                    type: 'rankine:crushing',
                    guaranteed: [
                      {
                        item: 'occultism:raw_iesnium',
                        count: 1,
                        tier: 'minecraft:netherite',
                      },
                    ],
                  })
                  .id('inconvenient:crushing_iesnium_ore');
              },
            },
          ],
        },
        {
          id: 'infused_pickaxe',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft_with_spirit_name',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_djinni',
                },
                pentacle_id: 'occultism:summon_marid',
                duration: 60,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_infused_pickaxe',
                },
                ingredients: [
                  {
                    tag: 'forge:rods/wooden',
                  },
                  {
                    tag: 'forge:rods/wooden',
                  },
                  {
                    item: 'occultism:spirit_attuned_pickaxe_head',
                  },
                  {
                    item: 'minecraft:netherite_ingot',
                  },
                  {
                    item: 'minecraft:gold_ingot',
                  },
                ],
                result: {
                  item: 'occultism:infused_pickaxe',
                },
              })
              .id('inconvenient:ritual_infused_pickaxe');
          },
        },
      ],
    },
    {
      id: 'dimensional_storage',
      children: [
        {
          id: 'dimensional_matrix',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft_with_spirit_name',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_djinni',
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 240,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_dimensional_matrix',
                },
                ingredients: [
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    tag: 'forge:storage_blocks/quartz',
                  },
                  {
                    tag: 'forge:storage_blocks/quartz',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                ],
                result: {
                  item: 'occultism:dimensional_matrix',
                },
              })
              .id('inconvenient:ritual_dimensional_matrix');
          },
        },
        {
          id: 'storage_stabilizer_4',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_marid',
                },
                pentacle_id: 'occultism:craft_marid',
                duration: 240,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_stabilizer_tier4',
                },
                ingredients: [
                  {
                    item: 'occultism:storage_stabilizer_tier3',
                  },
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    item: 'occultism:iesnium_block',
                  },
                  {
                    item: 'rankine:carbon_block',
                  },
                  {
                    item: 'create:refined_radiance',
                  },
                  {
                    item: 'create:shadow_steel',
                  },
                  {
                    item: 'bloodmagic:demonslate',
                  },
                ],
                result: {
                  item: 'occultism:storage_stabilizer_tier4',
                },
              })
              .id('inconvenient:ritual_storage_stabilizer_4');
          },
          children: [
            {
              id: 'storage_stabilizer_3',
              recipe: () => {
                event
                  .custom({
                    type: 'occultism:ritual',
                    ritual_type: 'occultism:craft',
                    activation_item: {
                      item: 'occultism:book_of_binding_bound_afrit',
                    },
                    pentacle_id: 'occultism:craft_afrit',
                    duration: 240,
                    ritual_dummy: {
                      item: 'occultism:ritual_dummy/craft_stabilizer_tier3',
                    },
                    ingredients: [
                      {
                        item: 'occultism:storage_stabilizer_tier2',
                      },
                      {
                        item: 'cataclysm:witherite_block',
                      },
                      {
                        item: 'occultism:iesnium_block',
                      },
                      {
                        item: 'occultism:iesnium_block',
                      },
                      {
                        item: 'occultism:iesnium_block',
                      },
                      {
                        item: 'minecraft:nether_star',
                      },
                      {
                        item: 'minecraft:gunpowder',
                      },
                      {
                        item: 'create:chromatic_compound',
                      },
                    ],
                    result: {
                      item: 'occultism:storage_stabilizer_tier3',
                    },
                  })
                  .id('inconvenient:ritual_storage_stabilizer_3');
              },
              children: [
                {
                  id: 'storage_stabilizer_2',
                  recipe: () => {
                    event
                      .custom({
                        type: 'occultism:ritual',
                        ritual_type: 'occultism:craft',
                        activation_item: {
                          item: 'occultism:book_of_binding_bound_djinni',
                        },
                        pentacle_id: 'occultism:craft_djinni',
                        duration: 240,
                        ritual_dummy: {
                          item: 'occultism:ritual_dummy/craft_stabilizer_tier2',
                        },
                        ingredients: [
                          {
                            item: 'occultism:storage_stabilizer_tier1',
                          },
                          {
                            item: 'cataclysm:ignitium_block',
                          },
                          {
                            item: 'occultism:iesnium_block',
                          },
                          {
                            item: 'occultism:iesnium_block',
                          },
                          {
                            item: 'minecraft:ghast_tear',
                          },
                          {
                            item: 'rankine:vulcanized_rubber',
                          },
                          {
                            item: 'occultism:spirit_attuned_gem',
                          },
                        ],
                        result: {
                          item: 'occultism:storage_stabilizer_tier2',
                        },
                      })
                      .id('inconvenient:ritual_storage_stabilizer_2');
                  },
                  children: [
                    {
                      id: 'storage_stabilizer_1',
                      recipe: () => {
                        event
                          .custom({
                            type: 'occultism:ritual',
                            ritual_type: 'occultism:craft',
                            activation_item: {
                              item: 'occultism:book_of_binding_bound_foliot',
                            },
                            pentacle_id: 'occultism:craft_foliot',
                            duration: 120,
                            ritual_dummy: {
                              item: 'occultism:ritual_dummy/craft_stabilizer_tier1',
                            },
                            ingredients: [
                              {
                                item: 'occultism:otherstone_pedestal',
                              },
                              {
                                item: 'tconstruct:pig_iron_block',
                              },
                              {
                                item: 'occultism:iesnium_block',
                              },
                              {
                                item: 'minecraft:blaze_powder',
                              },
                              {
                                item: 'occultism:spirit_attuned_gem',
                              },
                            ],
                            result: {
                              item: 'occultism:storage_stabilizer_tier1',
                            },
                          })
                          .id('inconvenient:ritual_storage_stabilizer_1');
                      },
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'storage_remote',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_djinni',
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 120,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_storage_remote',
                },
                ingredients: [
                  {
                    item: 'occultism:storage_remote_inert',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    tag: 'forge:gems/quartz',
                  },
                ],
                result: {
                  item: 'occultism:storage_remote',
                },
              })
              .id('inconvenient:ritual_storage_remote');
          },
        },
        {
          id: 'stable_wormhole',
          recipe: () => {
            event
              .custom({
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                  item: 'occultism:book_of_binding_bound_foliot',
                },
                pentacle_id: 'occultism:craft_foliot',
                duration: 120,
                ritual_dummy: {
                  item: 'occultism:ritual_dummy/craft_stable_wormhole',
                },
                ingredients: [
                  {
                    item: 'occultism:wormhole_frame',
                  },
                  {
                    item: 'create:chromatic_compound',
                  },
                  {
                    tag: 'forge:gems/quartz',
                  },
                  {
                    tag: 'forge:gems/quartz',
                  },
                ],
                result: {
                  item: 'occultism:stable_wormhole',
                },
              })
              .id('inconvenient:ritual_stable_wormhole');
          },
        },
      ],
    },
    {
      id: 'rituals',
      recipe: () => {
        [
          'occultism:ritual/craft_dimensional_matrix',
          'occultism:ritual/craft_infused_pickaxe',
          'occultism:ritual/craft_soul_gem',
          'occultism:ritual/craft_stabilizer_tier1',
          'occultism:ritual/craft_stabilizer_tier2',
          'occultism:ritual/craft_stabilizer_tier3',
          'occultism:ritual/craft_stabilizer_tier4',
          'occultism:ritual/craft_stable_wormhole',
          'occultism:ritual/craft_storage_remote',
          'occultism:ritual/possess_ghast',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:summon',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:possessed_ghast',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/possess_ghast',
            },
            ingredients: [
              {
                tag: 'forge:netherrack',
              },
              {
                tag: 'forge:netherrack',
              },
              {
                tag: 'forge:netherrack',
              },
              {
                tag: 'forge:magma',
              },
              {
                tag: 'forge:magma',
              },
              {
                tag: 'forge:magma',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:lava_bucket',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_possessed_ghast');

        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: {
              item: 'occultism:book_of_binding_bound_afrit',
            },
            pentacle_id: 'occultism:summon_afrit',
            duration: 120,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier3',
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/summon_afrit_crusher',
            },
            ingredients: [
              {
                item: 'create:chromatic_compound',
              },
              {
                tag: 'forge:dusts/iesnium',
              },
              {
                tag: 'forge:dusts/iesnium',
              },
              {
                item: 'rankine:rose_gold_ingot',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_crush_tier3');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: {
              item: 'occultism:book_of_binding_bound_afrit',
            },
            pentacle_id: 'occultism:summon_afrit',
            duration: 60,
            spirit_max_age: 120,
            spirit_job_type: 'occultism:rain_weather',
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/summon_afrit_rain_weather',
            },
            ingredients: [
              {
                tag: 'forge:sand',
              },
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'minecraft:cactus',
              },
              {
                item: 'minecraft:dead_bush',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_rain_weather');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: {
              item: 'occultism:book_of_binding_bound_afrit',
            },
            pentacle_id: 'occultism:summon_afrit',
            duration: 60,
            spirit_max_age: 240,
            spirit_job_type: 'occultism:thunder_weather',
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/summon_afrit_thunder_weather',
            },
            ingredients: [
              {
                tag: 'forge:bones',
              },
              {
                tag: 'forge:gunpowder',
              },
              {
                tag: 'forge:gunpowder',
              },
              {
                item: 'minecraft:ghast_tear',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_thunder_weather');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: {
              item: 'occultism:book_of_binding_bound_marid',
            },
            pentacle_id: 'occultism:summon_marid',
            duration: 150,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier4',
            entity_to_summon: 'occultism:marid',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/summon_marid_crusher',
            },
            ingredients: [
              {
                item: 'rankine:rose_gold_block',
              },
              {
                item: 'minecraft:ghast_tear',
              },
              {
                tag: 'forge:storage_blocks/iesnium',
              },
              {
                item: 'cataclysm:witherite_block',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_crush_tier4');
      },
    },
    {
      id: 'demon_crusher',
      recipe: () => {
        // 4
        event
          .custom({
            type: 'occultism:crushing',
            ingredient: {tag: 'forge:ores/zinc'},
            result: {item: 'rankine:sphalerite', count: 2},
            crushing_time: 200,
          })
          .id('inconvenient:demon_crushing_sphalerite');
        event
          .custom({
            type: 'occultism:crushing',
            ingredient: {tag: 'forge:ores/aluminum'},
            result: {item: 'rankine:bauxite', count: 2},
            crushing_time: 200,
          })
          .id('inconvenient:demon_crushing_bauxite');

        event
          .custom({
            type: 'occultism:crushing',
            ingredient: {tag: 'forge:ores/cobalt'},
            result: {item: 'rankine:cobaltite', count: 2},
            crushing_time: 200,
          })
          .id('inconvenient:demon_crushing_cobaltite');
      },
    },
    {
      id: 'slates',
      recipe: () => {
        ['bloodmagic:altar/etherealslate'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'bloodmagic:altar',
            input: {
              item: 'bloodmagic:demonslate',
            },
            output: {
              item: 'bloodmagic:etherealslate',
            },
            upgradeLevel: 4,
            altarSyphon: 100000,
            consumptionRate: 1000,
            drainRate: 1000,
          })
          .id('inconvenient:altar_etherealslate');
      },
    },
    {
      id: 'chipped_tables',
      recipe: () => {
        event
          .shaped(`chipped:carpenters_table`, ['  a', 'bcb', 'deb'], {
            a: `minecraft:iron_ingot`,
            b: '#minecraft:logs',
            c: 'minecraft:crafting_table',
            d: 'rankine:sawdust',
            e: '#minecraft:planks',
          })
          .id('inconvenient:shaped_carpenters_table');
      },
    },
    {
      id: 'building_wands',
      recipe: () => {
        event.replaceInput(
          {output: 'constructionwand:diamond_wand'},
          'minecraft:diamond',
          'minecraft:gold_ingot'
        );
        event.replaceInput(
          {output: 'constructionwand:core_destruction'},
          'minecraft:diamond_pickaxe',
          'minecraft:netherite_pickaxe'
        );
        event.replaceInput(
          {output: 'constructionwand:core_destruction'},
          'minecraft:diamond_block',
          'minecraft:gold_block'
        );
      },
    },
    {
      id: 'teleportation',
      recipe: () => {
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:craft',
            activation_item: {
              item: 'occultism:book_of_binding_bound_marid',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            ritual_dummy: {
              item: 'occultism:ritual_dummy/custom_ritual',
            },
            ingredients: [
              {
                item: 'tconstruct:manyullyn_ingot',
              },
              {
                item: 'tconstruct:manyullyn_ingot',
              },
              {
                item: 'tconstruct:manyullyn_ingot',
              },
              {
                item: 'tconstruct:manyullyn_ingot',
              },
              {
                item: 'waystones:warp_dust',
              },
              {
                item: 'waystones:warp_dust',
              },
              {
                item: 'waystones:warp_dust',
              },
              {
                item: 'waystones:warp_dust',
              },
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'create:chromatic_compound',
              },
            ],
            result: {
              item: 'waystones:warp_stone',
            },
          })
          .id('inconvenient:ritual_warp_stone');

        ['waystones:warp_dust'].forEach(id => event.remove({id: id}));
        event
          .custom({
            results: [{count: 4, item: 'waystones:warp_dust'}],
            type: 'create:crushing',
            processingTime: 250,
            ingredients: [{item: 'create:chromatic_compound'}],
          })
          .id('inconvenient:crushing_wheel_warp_dust');

        event.replaceInput(
          {
            output: ['waystones:warp_scroll', 'waystones:bound_scroll'],
          },
          'minecraft:ender_pearl',
          'waystones:warp_dust'
        );
      },
      children: [],
    },
    {
      id: 'chunkloaders',
      recipe: () => {
        event
          .custom({
            type: 'bloodmagic:altar',
            input: {
              item: 'bloodmagic:strong_tau',
            },
            output: {
              item: 'chunkloaders:single_chunk_loader',
            },
            upgradeLevel: 3,
            altarSyphon: 10000,
            consumptionRate: 10,
            drainRate: 10,
          })
          .id('inconvenient:altar_single_chunk_loader');
        ['chunkloaders:ultimate_chunk_loader'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'bloodmagic:altar',
            input: {
              item: 'chunkloaders:advanced_chunk_loader',
            },
            output: {
              item: 'chunkloaders:ultimate_chunk_loader',
            },
            upgradeLevel: 4,
            altarSyphon: 200000,
            consumptionRate: 200,
            drainRate: 200,
          })
          .id('inconvenient:altar_ultimate_chunk_loader');
      },
    },

    {
      id: 'xp_crystal',
      recipe: () => {
        event
          .custom({
            type: 'occultism:ritual',
            activation_item: {item: 'minecraft:amethyst_shard'},
            pentacle_id: 'occultism:craft_marid',
            ritual_type: 'occultism:craft',
            ingredients: [
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'minecraft:enchanted_book',
              },
              {
                item: 'charcoal_pit:prismarine_dust',
              },
              {
                item: 'charcoal_pit:prismarine_dust',
              },
            ],
            ritual_dummy: {
              item: 'occultism:ritual_dummy/custom_ritual',
            },
            result: {
              item: 'charcoal_pit:xp_crystal',
            },
          })
          .id('inconvenient:ritual_xp_crystal');
      },
    },
    {
      id: 'familiars',
      recipe: () => {
        [
          'occultism:ritual/familiar_otherworld_bird',
          'occultism:ritual/familiar_parrot',
          'occultism:ritual/familiar_bat',
          'occultism:ritual/familiar_beaver',
          'occultism:ritual/familiar_beholder',
          'occultism:ritual/familiar_blacksmith',
          'occultism:ritual/familiar_chimera',
          'occultism:ritual/familiar_cthulhu',
          'occultism:ritual/familiar_deer',
          'occultism:ritual/familiar_devil',
          'occultism:ritual/familiar_dragon',
          'occultism:ritual/familiar_fairy',
          'occultism:ritual/familiar_greedy',
          'occultism:ritual/familiar_guardian',
          'occultism:ritual/familiar_headless',
          'occultism:ritual/familiar_mummy',
        ].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:bats',
              display_name: 'ritual.occultism.sacrifice.bats',
            },
            entity_to_summon: 'occultism:bat_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_bat',
            },
            ingredients: [
              {
                item: 'minecraft:golden_carrot',
              },
              {
                item: 'minecraft:spider_eye',
              },
              {
                item: 'minecraft:glowstone',
              },
              {
                item: 'rankine:sulfur',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:torch',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_bat_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_foliot',
            },
            pentacle_id: 'occultism:possess_foliot',
            duration: 30,
            entity_to_summon: 'occultism:beaver_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_beaver',
            },
            ingredients: [
              {
                tag: 'minecraft:saplings',
              },
              {
                tag: 'minecraft:saplings',
              },
              {
                tag: 'minecraft:saplings',
              },
              {
                tag: 'minecraft:saplings',
              },
              {
                item: 'minecraft:crimson_fungus',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_beaver_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:spiders',
              display_name: 'ritual.occultism.sacrifice.spiders',
            },
            entity_to_summon: 'occultism:beholder_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_beholder',
            },
            ingredients: [
              {
                item: 'minecraft:spider_eye',
              },
              {
                item: 'minecraft:spider_eye',
              },
              {
                item: 'minecraft:spider_eye',
              },
              {
                item: 'minecraft:spider_eye',
              },
              {
                tag: 'forge:dusts/glowstone',
              },
              {
                tag: 'forge:dusts/glowstone',
              },
              {
                tag: 'forge:dusts/glowstone',
              },
              {
                tag: 'forge:dusts/glowstone',
              },
              {
                item: 'rankine:sulfur',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_beholder_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_foliot',
            },
            pentacle_id: 'occultism:possess_foliot',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:zombies',
              display_name: 'ritual.occultism.sacrifice.zombies',
            },
            entity_to_summon: 'occultism:blacksmith_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_blacksmith',
            },
            ingredients: [
              {
                item: 'minecraft:golden_shovel',
              },
              {
                item: 'minecraft:golden_pickaxe',
              },
              {
                item: 'minecraft:golden_axe',
              },
              {
                item: 'minecraft:anvil',
              },
              {
                tag: 'forge:stone',
              },
              {
                tag: 'forge:stone',
              },
              {
                tag: 'forge:stone',
              },
              {
                tag: 'forge:stone',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_blacksmith_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:chimera_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_chimera',
            },
            ingredients: [
              {
                tag: 'forge:leather',
              },
              {
                tag: 'forge:string',
              },
              {
                tag: 'forge:feathers',
              },
              {
                tag: 'forge:bones',
              },
              {
                item: 'farmersdelight:ham',
              },
              {
                item: 'minecraft:porkchop',
              },
              {
                item: 'minecraft:chicken',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_chimera_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:squid',
              display_name: 'ritual.occultism.sacrifice.squid',
            },
            entity_to_summon: 'occultism:cthulhu_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_cthulhu',
            },
            ingredients: [
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                tag: 'minecraft:fishes',
              },
              {
                item: 'farmersrespite:purulent_tea',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_cthulhu_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_foliot',
            },
            pentacle_id: 'occultism:possess_foliot',
            duration: 15,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:deer_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_deer',
            },
            ingredients: [
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:string',
              },
              {
                tag: 'forge:string',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_deer_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:devil_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_devil',
            },
            ingredients: [
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:lava_bucket',
              },
              {
                tag: 'forge:bones',
              },
              {
                tag: 'forge:bones',
              },
              {
                tag: 'forge:bones',
              },
              {
                tag: 'forge:bones',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_devil_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:dragon_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_dragon',
            },
            ingredients: [
              {
                item: 'minecraft:lava_bucket',
              },
              {
                item: 'minecraft:flint_and_steel',
              },
              {
                tag: 'forge:storage_blocks/coal',
              },
              {
                tag: 'forge:storage_blocks/quartz',
              },
              {
                tag: 'forge:storage_blocks/gold',
              },
              {
                tag: 'forge:gunpowder',
              },
              {
                tag: 'forge:obsidian',
              },
              {
                tag: 'forge:obsidian',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_dragon_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:horses',
              display_name: 'ritual.occultism.sacrifice.horses',
            },
            entity_to_summon: 'occultism:fairy_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_fairy',
            },
            ingredients: [
              {
                item: 'minecraft:golden_apple',
              },
              {
                item: 'minecraft:golden_apple',
              },
              {
                item: 'minecraft:ghast_tear',
              },
              {
                item: 'minecraft:gunpowder',
              },
              {
                item: 'minecraft:gunpowder',
              },
              {
                item: 'minecraft:gunpowder',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_fairy_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_foliot',
            },
            pentacle_id: 'occultism:possess_foliot',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:zombies',
              display_name: 'ritual.occultism.sacrifice.zombies',
            },
            entity_to_summon: 'occultism:greedy_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_greedy',
            },
            ingredients: [
              {
                tag: 'forge:chests',
              },
              {
                tag: 'forge:storage_blocks/gold',
              },
              {
                item: 'minecraft:dispenser',
              },
              {
                item: 'minecraft:hopper',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_greedy_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_afrit',
            },
            pentacle_id: 'occultism:possess_afrit',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'occultism:humans',
              display_name: 'ritual.occultism.sacrifice.humans',
            },
            entity_to_summon: 'occultism:guardian_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_guardian',
            },
            ingredients: [
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'create:chromatic_compound',
              },
              {
                item: 'minecraft:golden_apple',
              },
              {
                item: 'minecraft:golden_apple',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_guardian_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 60,
            entity_to_sacrifice: {
              tag: 'forge:golems/snow',
              display_name: 'ritual.occultism.sacrifice.snow_golem',
            },
            entity_to_summon: 'occultism:headless_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_headless',
            },
            ingredients: [
              {
                item: 'kubejs:wheat',
              },
              {
                item: 'kubejs:wheat',
              },
              {
                item: 'minecraft:hay_block',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                tag: 'forge:rods/wooden',
              },
              {
                item: 'minecraft:carved_pumpkin',
              },
              {
                item: 'minecraft:warped_fungus',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_headless_familiar');
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:familiar',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
              tag: 'forge:pigs',
              display_name: 'ritual.occultism.sacrifice.pigs',
            },
            entity_to_summon: 'occultism:mummy_familiar',
            ritual_dummy: {
              item: 'occultism:ritual_dummy/familiar_mummy',
            },
            ingredients: [
              {
                tag: 'forge:slimeballs',
              },
              {
                tag: 'forge:slimeballs',
              },
              {
                item: 'minecraft:paper',
              },
              {
                item: 'minecraft:paper',
              },
              {
                item: 'rankine:gun_cotton',
              },
              {
                item: 'rankine:gun_cotton',
              },
              {
                item: 'rankine:gun_cotton',
              },
              {
                item: 'rankine:gun_cotton',
              },
            ],
            result: {
              item: 'occultism:jei_dummy/none',
            },
          })
          .id('inconvenient:ritual_mummy_familiar');
      },
    },
    {
      id: 'soul_gem',
      recipe: () => {
        event
          .custom({
            type: 'occultism:ritual',
            ritual_type: 'occultism:craft',
            activation_item: {
              item: 'occultism:book_of_binding_bound_djinni',
            },
            pentacle_id: 'occultism:craft_djinni',
            duration: 60,
            ritual_dummy: {
              item: 'occultism:ritual_dummy/craft_soul_gem',
            },
            ingredients: [
              {
                item: 'create:chromatic_compound',
              },
              {
                tag: 'forge:ingots/copper',
              },
              {
                tag: 'forge:ingots/silver',
              },
              {
                tag: 'forge:ingots/gold',
              },
              {
                tag: 'forge:ingots/iesnium',
              },
              {
                item: 'minecraft:soul_sand',
              },
              {
                item: 'minecraft:soul_sand',
              },
              {
                item: 'minecraft:soul_sand',
              },
              {
                item: 'minecraft:soul_sand',
              },
            ],
            result: {
              item: 'occultism:soul_gem',
            },
          })
          .id('inconvenient:ritual_soul_gem');
      },
    },
    {
      id: 'soulspring_lamp',
      recipe: () => {
        ['cold_sweat:soulspring_lamp'].forEach(id => event.remove({id: id}));
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'cold_sweat:soulspring_lamp',
            },
            pattern: [' a ', 'bcb', ' d '],
            key: {
              a: 'tconstruct:slimesteel_nugget',
              b: 'twilightforest:knightmetal_ingot',
              c: 'minecraft:soul_lantern',
              d: 'minecraft:chain',
            },
          })
          .id('inconvenient:basic_table_soulspring_lamp');
      },
      children: [],
    },
    {
      id: 'advanced_auto_table',
      recipe: () => {
        event
          .custom({
            type: 'extendedcrafting:shaped_table',
            result: {
              item: 'extendedcrafting:basic_auto_table',
            },
            pattern: ['aba', 'cdc', 'aba'],
            key: {
              a: 'extendedcrafting:black_iron_ingot',
              b: 'extendedcrafting:redstone_component',
              c: 'extendedcrafting:redstone_catalyst',
              d: 'extendedcrafting:basic_table',
            },
          })
          .id('inconvenient:basic_table_basic_auto_table');
      },
    },
    {
      id: 'routing',
      recipe: () => {
        ['bloodmagic:soulforge/master_routing_node'].forEach(id =>
          event.remove({id: id})
        );
        event
          .custom({
            type: 'bloodmagic:soulforge',
            output: {item: 'bloodmagic:masterroutingnode'},
            input0: {item: 'minecraft:iron_block'},
            input1: {item: 'create:rose_quartz'},
            input2: {item: 'bloodmagic:infusedslate'},
            minimumDrain: 400,
            drain: 200,
          })
          .id('inconvenient:soul_forge_masterroutingnode');
      },
    },
  ]);

  event
    .custom({
      type: 'create:mixing',
      results: [{item: 'minecraft:netherite_ingot'}],
      ingredients: [
        {item: 'minecraft:gold_ingot'},
        {item: 'minecraft:netherite_scrap'},
      ],
    })
    .id('inconvenient:mixing_netherite_ingot');
  [
    'createaddition:compat/tconstruct/pig_iron',
    'createaddition:compat/tconstruct/pig_iron_2',
    'tconstruct:smeltery/alloys/molten_pig_iron',
  ].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'create:mixing',
      results: [{item: 'tconstruct:pig_iron_ingot'}],
      ingredients: [
        {item: 'minecraft:iron_ingot'},
        {item: 'farmersdelight:ham'},
        {item: 'minecraft:clay_ball'},
      ],
      heatRequirement: 'heated',
    })
    .id('inconvenient:mixing_pig_iron_ingot');

  event
    .custom({
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
    })
    .id('inconvenient:mechanical_alternator');

  event
    .custom({
      input: {item: 'rankine:native_sulfur_ore'},
      type: 'rankine:crushing',
      guaranteed: [
        {
          item: 'rankine:sulfur_nugget',
          tier: 'minecraft:iron',
          count: 3,
        },
      ],
    })
    .id('inconvenient:crushing_sulfur_nugget');

  event
    .custom({
      type: 'tconstruct:alloy',
      result: {fluid: 'tconstruct:molten_brass', amount: 180},
      inputs: [
        {name: 'tconstruct:molten_copper', amount: 90},
        {name: 'tconstruct:molten_zinc', amount: 90},
      ],
      temperature: 605,
    })
    .id('inconvenient:alloy_molten_brass');

  ['rankine:air_distillation_packing'].forEach(id => event.remove({id: id}));

  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'rankine:air_distillation_packing',
      },
      pattern: ['aba', 'bab', 'aba'],
      key: {
        a: 'rankine:aluminum_sheetmetal',
        b: 'architects_palette:warpstone',
      },
    })
    .id('inconvenient:basic_table_air_distillation_packing');

  ['rankine:gas_bottler'].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      result: {
        item: 'rankine:gas_bottler',
      },
      pattern: ['aba', 'bab', 'aba'],
      key: {
        a: 'rankine:purple_gold_sheetmetal',
        b: 'rankine:brass_ingot',
      },
    })
    .id('inconvenient:basic_table_gas_bottler');

  ['rankine:gas_vent'].forEach(id => event.remove({id: id}));
  event
    .custom({
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
    })
    .id('inconvenient:basic_table_gas_vent');

  ['rankine:distillation_tower'].forEach(id => event.remove({id: id}));
  event
    .custom({
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
    })
    .id('inconvenient:basic_table_distillation_tower');

  event
    .shaped(`rankine:alloy_furnace`, ['aba', 'aba', 'aca'], {
      a: `rankine:ultra_high_refractory_bricks`,
      b: 'rankine:brass_block',
      c: 'minecraft:soul_campfire',
    })
    .id('inconvenient:shaped_alloy_furnace');

  ['malum:spirit_infusion/tainted_rock'].forEach(id => event.remove({id: id}));
  event
    .custom({
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
    })
    .id('inconvenient:spirit_infusion_tainted_rock');

  ['naturesaura:tree_ritual/token_anger'].forEach(id => event.remove({id: id}));
  event
    .custom({
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
    })
    .id('inconvenient:tree_ritual_token_anger');

  ['naturesaura:tree_ritual/token_fear'].forEach(id => event.remove({id: id}));
  event
    .custom({
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
    })
    .id('inconvenient:tree_ritual_token_fear');

  [
    'rankine:vulcanized_rubber_from_tellurium',
    'rankine:vulcanized_rubber_from_sodium_sulfide',
    'rankine:vulcanized_rubber_from_sodium_sulfide',
    'rankine:vulcanized_rubber_from_sulfur',
  ].forEach(id => event.remove({id: id}));
  event
    .custom({
      type: 'create:mixing',
      results: [{count: 3, item: 'rankine:vulcanized_rubber'}],
      ingredients: [
        {item: 'rankine:dry_rubber'},
        {item: 'rankine:dry_rubber'},
        {item: 'rankine:dry_rubber'},
        {fluid: 'immersivepetroleum:crudeoil', amount: 1000},
      ],
      heatRequirement: 'superheated',
    })
    .id('inconvenient:mixing_vulcanized_rubber');

  event.replaceInput(
    {output: 'architects_palette:nether_brass_blend'},
    'minecraft:iron_nugget',
    'rankine:brass_nugget'
  );
  event
    .custom({
      type: 'create:compacting',
      ingredients: [
        {item: 'paragon_textiles:flax_seeds', count: 4},
        {item: 'minecraft:bucket'},
      ],
      results: [{item: 'paragon_textiles:flaxseed_oil_bucket'}],
    })
    .id('inconvenient:compacting_flaxseed_oil_bucket');
  ['bloodmagic:altar/masterbloodorb'].forEach(id => event.remove({id: id}));
  event
    .custom({
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
    })
    .id('inconvenient:altar_masterbloodorb');
  event.replaceInput(
    {output: ['malum:stained_spirit_resonator']},
    'minecraft:quartz',
    'undergarden:regalium_crystal'
  );

  // event.remove({
  //   output: [
  //     'hexerei:book_of_shadows',
  //     `create:controls`,
  //     'bloodmagic:alchemytable',
  //     `chipped:carpenters_table`,
  //     `create:electron_tube`,
  //     'bloodmagic:bloodstonebrick',
  //     `cataclysm:witherite_block`,
  //     `rankine:alloy_furnace`,
  //     'rankine:glass_cutter',
  //   ],
  //   type: 'minecraft:crafting_shaped',
  // });

  event
    .shaped('hexerei:book_of_shadows', ['aba', 'cde', 'aaa'], {
      a: `minecraft:leather`,
      b: 'architects_palette:twisted_sapling',
      c: 'hexerei:animal_fat',
      d: 'minecraft:book',
      e: 'hexerei:sage_seed',
    })
    .id('inconvenient:shaped_book_of_shadows');
  event
    .shaped(`create:controls`, ['a', 'b', 'c'], {
      a: `minecraft:lever`,
      b: 'create:railway_casing',
      c: 'create:electron_tube',
    })
    .id('inconvenient:shaped_controls');

  event
    .shaped(`cataclysm:witherite_block`, ['aaa', 'aaa', 'aaa'], {
      a: `cataclysm:witherite_ingot`,
    })
    .id('inconvenient:shaped_witherite_block');

  event
    .shaped('rankine:glass_cutter', [' aa', ' ba', 'b  '], {
      a: 'minecraft:quartz',
      b: 'rankine:black_gold_ingot',
    })
    .id('inconvenient:shaped_glass_cutter');
});

onEvent('server.datapack.high_priority', event => {
  // Nether
  registerGateways(event, {
    id: 'nether',
    color: '#D92C32',
    dimension: 'the Nether',
    waves: [
      {
        type: 'mob',
        entities: ['minecraft:magma_cube'],
      },
      {
        type: 'mob',
        entities: ['minecraft:wither_skeleton'],
      },
      {
        type: 'mob',
        entities: ['minecraft:ghast'],
      },
      {
        type: 'boss',
        entities: ['minecraft:wither'],
      },
      {
        type: 'mob',
        entities: ['minecraft:blaze'],
      },
      {
        type: 'boss',
        entities: ['cataclysm:ignited_revenant'],
      },
      {
        type: 'boss',
        entities: ['cataclysm:ignis'],
      },
      {
        type: 'group',
        entities: ['minecraft:hoglin', 'minecraft:zoglin'],
      },
      {
        type: 'mob',
        entities: ['minecraft:zombified_piglin'],
      },
      {
        type: 'group',
        entities: ['minecraft:piglin', 'minecraft:piglin_brute'],
      },
      {
        type: 'boss',
        entities: ['cataclysm:netherite_monstrosity'],
      },
    ],
    restorations: [{id: 'minecraft:pig', name: 'pig'}],
    relics: [
      'relics:magma_walker',
      'relics:bastion_ring',
      'relics:blazing_flask',
      'artifacts:fire_gauntlet',
      'artifacts:flame_pendant',
      'artifacts:obsidian_skull',
    ],
    rewards: [{id: 'kubejs:nether_token', count: 1}],
  });
});
