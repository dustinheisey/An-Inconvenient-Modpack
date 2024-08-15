onEvent('recipes', event => {
  setBalanceRecipes({
    shaped: () => {
      event.forEachRecipe(
        {
          output: 'minecraft:stick',
          input: '#minecraft:planks',
        },
        recipe => {
          event.remove({
            input: '#minecraft:planks',
            output: recipe.outputItems[0].id,
          });

          event.shaped(`2x ${recipe.outputItems[0].id}`, ['a', 'a'], {
            a: recipe.inputItems[0],
          });
        }
      );
    },
    shapeless: () => {
      event.shapeless('minecraft:glass', ['tconstruct:clear_glass']);
      event.forEachRecipe(
        {
          type: 'minecraft:crafting_shapeless',
          output: '#minecraft:planks',
          input: '#minecraft:logs',
        },
        recipe => {
          event.remove({
            type: 'minecraft:crafting_shapeless',
            output: recipe.outputItems[0].id,
          });

          event.shapeless(`2x ${recipe.outputItems[0].id}`, [
            recipe.inputItems[0],
          ]);
        }
      );
    },
    blasting: () => {
      event.remove({
        output: [
          'ecofriendly:smelted_iron_can_ym',
          '#forge:ingots',
          '#forge:gems',
          '#forge:dusts',
          '#forge:slimeballs',
          '#minecraft:coals',
          '#forge:glass',
          '#forge:gunpowder',
          'rankine:zirconia',
          'hem:rose_copper_ingot',
          'hem:bronze_ingot',
          'pneumaticcraft:empty_pcb',
          'rankine:magnesia',
          'immersiveengineering:ingot_hop_graphite',
          'rankine:sodium_carbonate',
          'blue_skies:moonstone',
          'occultism:iesnium_ingot',
        ],
        type: 'minecraft:blasting',
      });

      event.blasting('#forge:sand', 'minecraft:glass');
      event.blasting('chemlib:aluminum_dust', 'rankine:aluminum_ingot');
      event.blasting('chemlib:titanium_dust', 'rankine:titanium_ingot');
      event.blasting('chemlib:iron_dust', 'minecraft:iron_ingot');
      event.blasting('chemlib:nickel_dust', 'rankine:nickel_ingot');
      event.blasting('chemlib:copper_dust', 'minecraft:copper_ingot');
      event.blasting('chemlib:tin_dust', 'rankine:tin_ingot');
      event.blasting('chemlib:silver_dust', 'rankine:silver_ingot');
      event.blasting('chemlib:gold_dust', 'minecraft:gold_ingot');
      event.blasting('chemlib:platinum_dust', 'rankine:platinum_ingot');
      event.blasting('chemlib:tungsten_dust', 'rankine:tungsten_ingot');
      event.blasting('chemlib:lead_dust', 'rankine:lead_ingot');
      event.blasting('chemlib:bismuth_dust', 'rankine:bismuth_ingot');
      event.blasting('chemlib:uranium_dust', 'rankine:uranium_ingot');
      event.blasting('create:crushed_raw_iron', 'minecraft:iron_ingot');
      event.blasting('create:crushed_raw_gold', 'minecraft:gold_ingot');
      event.blasting('create:crushed_raw_copper', 'minecraft:copper_ingot');
      event.blasting('create:crushed_raw_zinc', 'rankine:zinc_ingot');
      event.blasting('create:crushed_raw_osmium', 'rankine:osmium_ingot');
      event.blasting('create:crushed_raw_platinum', 'rankine:platinum_ingot');
      event.blasting('create:crushed_raw_silver', 'rankine:silver_ingot');
      event.blasting('create:crushed_raw_tin', 'rankine:tin_ingot');
      event.blasting('create:crushed_raw_lead', 'rankine:lead_ingot');
      event.blasting('create:crushed_raw_aluminum', 'rankine:aluminum_ingot');
      event.blasting('chemlib:uranium_dust', 'rankine:uranium_ingot');
      event.blasting('chemlib:nickel_dust', 'rankine:nickel_ingot');
    },
    campfire_cooking: () => {
      event.remove({
        output: [
          Item.of('minecraft:potion').ignoreNBT(),
          Item.of('minecraft:water_bucket').ignoreNBT(),
          'rankine:bone_ash',
          'minecraft:bread',
          'charcoal_pit:popcorn',
          'rankine:refractory_brick',
          'minecraft:torch',
          'rankine:toast',
          'rankine:pancake',
          'blue_skies:cooked_horizofin_tunid',
          'twilightforest:cooked_meef',
          'farmersdelight:cooked_mutton_chops',
          'minecraft:cooked_beef',
          'farmersdelight:cooked_chicken_cuts',
          'rankine:cooked_tofu',
          'minecraft:cooked_rabbit',
          'farmersdelight:beef_patty',
          'farmersdelight:fried_egg',
          'minecraft:cooked_porkchop',
          'blue_skies:cooked_monitor_tail',
          'minecraft:cooked_chicken',
          'minecraft:cooked_mutton',
          'twilightforest:cooked_venison',
          'farmersdelight:cooked_bacon',
          'blue_skies:cooked_charscale_moki',
          'minecraft:charcoal',
          'minecraft:bone',
        ],
        type: 'minecraft:campfire_cooking',
      });

      event.campfireCooking(
        'farmersrespite:green_tea_leaves',
        'farmersrespite:yellow_tea_leaves'
      );
      event.campfireCooking(
        'farmersrespite:yellow_tea_leaves',
        'farmersrespite:black_tea_leaves'
      );
    },
    metals: () => {
      [
        'rankine:brass_ingot_from_brass_block',
        'rankine:brass_ingot_from_brass_nugget',
        'rankine:brass_block',
        'rankine:brass_nugget',
        'rankine:steel_ingot_from_steel_block',
        'rankine:steel_ingot_from_steel_nugget',
        'rankine:steel_block',
        'rankine:steel_nugget',
        'minecraft:iron_nugget',
      ].forEach(id => {
        event.remove({id: id});
      });

      event.remove({
        output: [
          Item.of('rankine:lead_nugget').ignoreNBT(),
          Item.of('rankine:tin_nugget').ignoreNBT(),
          Item.of('rankine:silver_nugget').ignoreNBT(),
          Item.of('rankine:copper_nugget').ignoreNBT(),
          Item.of('rankine:bronze_nugget').ignoreNBT(),
          Item.of('minecraft:iron_ingot').ignoreNBT(),
          Item.of('minecraft:copper_ingot').ignoreNBT(),
          Item.of('rankine:bronze_ingot').ignoreNBT(),
          Item.of('rankine:silver_ingot').ignoreNBT(),
          Item.of('rankine:tin_ingot').ignoreNBT(),
          Item.of('rankine:lead_ingot').ignoreNBT(),
          Item.of('minecraft:iron_block').ignoreNBT(),
          Item.of('minecraft:copper_block').ignoreNBT(),
          Item.of('rankine:bronze_block').ignoreNBT(),
          Item.of('rankine:silver_block').ignoreNBT(),
          Item.of('rankine:tin_block').ignoreNBT(),
          Item.of('rankine:lead_block').ignoreNBT(),
          Item.of('rankine:brass_nugget').ignoreNBT(),
          Item.of('rankine:brass_block').ignoreNBT(),
          Item.of('rankine:uranium_nugget').ignoreNBT(),
          Item.of('rankine:nickel_nugget').ignoreNBT(),
          Item.of('rankine:steel_ingot').ignoreNBT(),
          Item.of('rankine:uranium_ingot').ignoreNBT(),
          Item.of('rankine:nickel_ingot').ignoreNBT(),
          Item.of('rankine:brass_ingot').ignoreNBT(),
        ],
        or: [{type: 'minecraft:shaped'}, {type: 'minecraft:shapeless'}],
      });

      [
        'rankine:lead',
        'rankine:tin',
        'rankine:silver',
        'rankine:bronze',
        'minecraft:iron',
        'rankine:uranium',
        'rankine:nickel',
        'rankine:steel',
        'rankine:brass',
      ].forEach(metal => {
        event.shapeless(`9x ${metal}_nugget`, [`${metal}_ingot`]);
        event.shapeless(`9x ${metal}_ingot`, [`${metal}_block`]);
        event.shapeless(`${metal}_block`, [
          `${metal}_ingot`,
          `${metal}_ingot`,
          `${metal}_ingot`,
          `${metal}_ingot`,
          `${metal}_ingot`,
          `${metal}_ingot`,
          `${metal}_ingot`,
          `${metal}_ingot`,
          `${metal}_ingot`,
        ]);
        event.shapeless(`${metal}_ingot`, [
          `${metal}_nugget`,
          `${metal}_nugget`,
          `${metal}_nugget`,
          `${metal}_nugget`,
          `${metal}_nugget`,
          `${metal}_nugget`,
          `${metal}_nugget`,
          `${metal}_nugget`,
          `${metal}_nugget`,
        ]);
      });

      [
        {
          nugget: 'rankine:copper_nugget',
          ingot: 'minecraft:copper_ingot',
          block: 'minecraft:copper_block',
        },
      ].forEach(metal => {
        event.shapeless(`9x ${metal.nugget}`, [metal.ingot]);
        event.shapeless(`9x ${metal.ingot}`, [metal.block]);
        event.shapeless(metal.block, [
          metal.ingot,
          metal.ingot,
          metal.ingot,
          metal.ingot,
          metal.ingot,
          metal.ingot,
          metal.ingot,
          metal.ingot,
          metal.ingot,
        ]);
        event.shapeless(metal.ingot, [
          metal.nugget,
          metal.nugget,
          metal.nugget,
          metal.nugget,
          metal.nugget,
          metal.nugget,
          metal.nugget,
          metal.nugget,
          metal.nugget,
        ]);
      });
    },
    smelting: () => {
      event.remove({
        output: [
          '#forge:ingots',
          '#forge:gems',
          '#forge:nuggets',
          '#forge:glass',
          'minecraft:bread',
          'rankine:refractory_brick',
          'pneumaticcraft:sourdough_bread',
          'occultism:iesnium_ingot',
          '#forge:glass_panes',
          'rankine:refractory_brick',
          'minecraft:torch',
          'rankine:toast',
          'rankine:pancake',
          'blue_skies:cooked_horizofin_tunid',
          'twilightforest:cooked_meef',
          'farmersdelight:cooked_mutton_chops',
          'minecraft:cooked_beef',
          'farmersdelight:cooked_chicken_cuts',
          'rankine:cooked_tofu',
          'minecraft:cooked_rabbit',
          'farmersdelight:beef_patty',
          'farmersdelight:fried_egg',
          'minecraft:cooked_porkchop',
          'blue_skies:cooked_monitor_tail',
          'minecraft:cooked_chicken',
          'minecraft:cooked_mutton',
          'twilightforest:cooked_venison',
          'farmersdelight:cooked_bacon',
          'blue_skies:cooked_charscale_moki',
          'blue_skies:cooked_grittle_flatfish',
          'minecraft:blue_glazed_terracotta',
          'industrialforegoing:plastic',
          'charcoal_pit:cooked_calamari',
          'minecraft:popped_chorus_fruit',
          'minecraft:lime_dye',
          'minecraft:lime_glazed_terracotta',
          'hem:rose_copper_ingot',
          'minecraft:pink_glazed_terracotta',
          'minecraft:cooked_salmon',
          'minecraft:slime_ball',
          'minecraft:red_glazed_terracotta',
          'minecraft:white_glazed_terracotta',
          'minecraft:paper',
          'blue_skies:cooked_municipal_monkfish',
          'hem:bronze_ingot',
          'minecraft:cyan_glazed_terracotta',
          'minecraft:green_dye',
          'minecraft:baked_potato',
          'undergarden:cooked_gwibling',
          'undergarden:gloomper_leg',
          'undergarden:dweller_steak',
          'minecraft:magenta_glazed_terracotta',
          'minecraft:black_glazed_terracotta',
          'farmersdelight:cooked_cod_slice',
          'immersiveengineering:ingot_hop_graphite',
          'minecraft:green_glazed_terracotta',
          'minecraft:orange_glazed_terracotta',
          'minecraft:gray_glazed_terracotta',
          'minecraft:cooked_cod',
          'minecraft:redstone',
          'rankine:dried_bamboo',
          'charcoal_pit:popcorn',
          'blue_skies:cooked_venison',
          'minecraft:yellow_glazed_terracotta',
          'pneumaticcraft:plastic',
          'farmersdelight:cooked_salmon_slice',
          'minecraft:brown_glazed_terracotta',
          'undergarden:roasted_underbeans',
          'blue_skies:moonstone',
          'minecraft:furnace',
          'blue_skies:cooked_carabeef',
          'minecraft:light_gray_glazed_terracotta',
          'minecraft:coal',
          'rankine:ash',
          'bloodmagic:saltpeter',
          'minecraft:light_blue_glazed_terracotta',
          'minecraft:purple_glazed_terracotta',
          'minecraft:dried_kelp',
        ],
        type: 'minecraft:smelting',
      });

      event.smelting('malum:crushed_soulstone', 'malum:processed_soulstone');
    },
    smithing: () => {
      event.remove({
        output: [
          'twilightforest:fiery_ingot',
          'minecraft:netherite_axe',
          'minecraft:netherite_sword',
          'farmersdelight:netherite_knife',
          'minecraft:netherite_shovel',
          'minecraft:netherite_pickaxe',
          'minecraft:netherite_hoe',
        ],
        type: 'minecraft:smithing',
      });

      event.smithing(
        'minecraft:netherite_axe',
        'minecraft:netherite_ingot',
        'malum:soul_stained_steel_axe'
      );
      event.smithing(
        'minecraft:netherite_sword',
        'minecraft:netherite_ingot',
        'twilightforest:fiery_sword'
      );
      event.smithing(
        'farmersdelight:netherite_knife',
        'minecraft:netherite_ingot',
        'malum:soul_stained_steel_knife'
      );
      event.smithing(
        'minecraft:netherite_shovel',

        'minecraft:netherite_ingot',
        'malum:soul_stained_steel_shovel'
      );
      event.smithing(
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_ingot',
        'twilightforest:fiery_pickaxe'
      );
      event.smithing(
        'minecraft:netherite_hoe',
        'minecraft:netherite_ingot',
        'malum:soul_stained_steel_hoe'
      );
    },
    smoking: () => {
      event.remove({
        output: [
          'charcoal_pit:popcorn',
          'minecraft:bread',
          'twilightforest:cracked_towerwood',
          'minecraft:bread',
          'pneumaticcraft:sourdough_bread',
          'minecraft:popped_chorus_fruit',
        ],
        type: 'minecraft:smoking',
      });

      event.smoking('minecraft:bread', 'create:dough');
      event.smoking(
        'pneumaticcraft:sourdough_bread',
        'pneumaticcraft:sourdough'
      );
      event.smoking('minecraft:popped_chorus_fruit', 'minecraft:chorus_fruit');

      event.smoking(
        'farmersrespite:yellow_tea_leaves',
        'farmersrespite:green_tea_leaves'
      );

      event.smoking(
        'farmersrespite:black_tea_leaves',
        'farmersrespite:yellow_tea_leaves'
      );
    },
  });
});
