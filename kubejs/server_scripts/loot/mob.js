onEvent('lootjs', (event) => {
  function removeLoot(item, mob) {
    if (mob) {
      event.addEntityLootModifier(mob).removeLoot(Item.of(item).ignoreNBT());
    } else {
      event.addLootTypeModifier(LootType.ENTITY).removeLoot(item);
    }
  }

  removeLoot('minecraft:heart_of_the_sea');
  removeLoot('minecraft:gunpowder');
  removeLoot('minecraft:leather_helmet');
  removeLoot('minecraft:chainmail_helmet');
  removeLoot('minecraft:iron_helmet');
  removeLoot('minecraft:diamond_helmet');
  removeLoot('minecraft:golden_helmet');
  removeLoot('minecraft:netherite_helmet');
  removeLoot('twilightforest:knightmetal_helmet');
  removeLoot('blue_skies:pyrope_helmet');
  removeLoot('blue_skies:aquite_helmet');
  removeLoot('blue_skies:diopside_helmet');
  removeLoot('blue_skies:charoite_helmet');
  removeLoot('blue_skies:horizonite_helmet');
  removeLoot('botania:manasteel_helmet');
  removeLoot('botania:elementium_helmet');
  removeLoot('botania:terrasteel_helmet');
  removeLoot('cataclysm:ignitium_helmet');
  removeLoot('charcoal_pit:copper_helmet');
  removeLoot('charcoal_pit:orichalcum_helmet');
  removeLoot('charcoal_pit:bronze_helmet');
  removeLoot('undergarden:cloggrum_helmet');
  removeLoot('undergarden:froststeel_helmet');
  removeLoot('pneumaticcraft:compressed_iron_helmet');
  removeLoot('undergarden:utherium_helmet');
  removeLoot('tconstruct:plate_helmet');
  removeLoot('twilightforest:ironwood_helmet');
  removeLoot('twilightforest:fiery_helmet');
  removeLoot('twilightforest:steeleaf_helmet');

  removeLoot('minecraft:leather_chestplate');
  removeLoot('minecraft:chainmail_chestplate');
  removeLoot('minecraft:iron_chestplate');
  removeLoot('minecraft:diamond_chestplate');
  removeLoot('minecraft:golden_chestplate');
  removeLoot('minecraft:netherite_chestplate');
  removeLoot('twilightforest:knightmetal_chestplate');
  removeLoot('blue_skies:pyrope_chestplate');
  removeLoot('blue_skies:aquite_chestplate');
  removeLoot('blue_skies:diopside_chestplate');
  removeLoot('blue_skies:charoite_chestplate');
  removeLoot('blue_skies:horizonite_chestplate');
  removeLoot('botania:manasteel_chestplate');
  removeLoot('botania:elementium_chestplate');
  removeLoot('botania:terrasteel_chestplate');
  removeLoot('cataclysm:ignitium_chestplate');
  removeLoot('charcoal_pit:copper_chestplate');
  removeLoot('charcoal_pit:orichalcum_chestplate');
  removeLoot('charcoal_pit:bronze_chestplate');
  removeLoot('undergarden:cloggrum_chestplate');
  removeLoot('undergarden:froststeel_chestplate');
  removeLoot('pneumaticcraft:compressed_iron_chestplate');
  removeLoot('undergarden:utherium_chestplate');
  removeLoot('tconstruct:plate_chestplate');
  removeLoot('twilightforest:ironwood_chestplate');
  removeLoot('twilightforest:fiery_chestplate');
  removeLoot('twilightforest:steeleaf_chestplate');

  removeLoot('minecraft:leather_leggings');
  removeLoot('minecraft:chainmail_leggings');
  removeLoot('minecraft:iron_leggings');
  removeLoot('minecraft:diamond_leggings');
  removeLoot('minecraft:golden_leggings');
  removeLoot('minecraft:netherite_leggings');
  removeLoot('twilightforest:knightmetal_leggings');
  removeLoot('blue_skies:pyrope_leggings');
  removeLoot('blue_skies:aquite_leggings');
  removeLoot('blue_skies:diopside_leggings');
  removeLoot('blue_skies:charoite_leggings');
  removeLoot('blue_skies:horizonite_leggings');
  removeLoot('botania:manasteel_leggings');
  removeLoot('botania:elementium_leggings');
  removeLoot('botania:terrasteel_leggings');
  removeLoot('cataclysm:ignitium_leggings');
  removeLoot('charcoal_pit:copper_leggings');
  removeLoot('charcoal_pit:orichalcum_leggings');
  removeLoot('charcoal_pit:bronze_leggings');
  removeLoot('undergarden:cloggrum_leggings');
  removeLoot('undergarden:froststeel_leggings');
  removeLoot('pneumaticcraft:compressed_iron_leggings');
  removeLoot('undergarden:utherium_leggings');
  removeLoot('tconstruct:plate_leggings');
  removeLoot('twilightforest:ironwood_leggings');
  removeLoot('twilightforest:fiery_leggings');
  removeLoot('twilightforest:steeleaf_leggings');

  removeLoot('minecraft:leather_boots');
  removeLoot('minecraft:chainmail_boots');
  removeLoot('minecraft:iron_boots');
  removeLoot('minecraft:diamond_boots');
  removeLoot('minecraft:golden_boots');
  removeLoot('minecraft:netherite_boots');
  removeLoot('twilightforest:knightmetal_boots');
  removeLoot('blue_skies:pyrope_boots');
  removeLoot('blue_skies:aquite_boots');
  removeLoot('blue_skies:diopside_boots');
  removeLoot('blue_skies:charoite_boots');
  removeLoot('blue_skies:horizonite_boots');
  removeLoot('botania:manasteel_boots');
  removeLoot('botania:elementium_boots');
  removeLoot('botania:terrasteel_boots');
  removeLoot('cataclysm:ignitium_boots');
  removeLoot('charcoal_pit:copper_boots');
  removeLoot('charcoal_pit:orichalcum_boots');
  removeLoot('charcoal_pit:bronze_boots');
  removeLoot('undergarden:cloggrum_boots');
  removeLoot('undergarden:froststeel_boots');
  removeLoot('pneumaticcraft:compressed_iron_boots');
  removeLoot('undergarden:utherium_boots');
  removeLoot('tconstruct:plate_boots');
  removeLoot('twilightforest:ironwood_boots');
  removeLoot('twilightforest:fiery_boots');
  removeLoot('twilightforest:steeleaf_boots');

  removeLoot('the_bumblezone:honey_bee_leggings_1');
  removeLoot('the_bumblezone:honey_bee_leggings_2');
  removeLoot('the_bumblezone:bumble_bee_chestplate_1');
  removeLoot('the_bumblezone:bumble_bee_chestplate_2');
  removeLoot('the_bumblezone:bumble_bee_chestplate_trans_1');
  removeLoot('the_bumblezone:bumble_bee_chestplate_trans_2');
  removeLoot('the_bumblezone:stingless_bee_helmet_1');
  removeLoot('the_bumblezone:stingless_bee_helmet_2');
  removeLoot('the_bumblezone:carpenter_bee_boots_1');
  removeLoot('the_bumblezone:carpenter_bee_boots_2');

  removeLoot('minecraft:redstone', 'minecraft:witch');
  removeLoot('minecraft:glowstone', 'minecraft:witch');
  removeLoot('minecraft:gunpowder', 'minecraft:witch');
  removeLoot('minecraft:sugar', 'minecraft:witch');
  removeLoot('minecraft:spider_eye', 'minecraft:witch');
  removeLoot('minecraft:redstone', 'minecraft:witch');
  removeLoot('minecraft:tnt');
  removeLoot('minecraft:honeycomb');
  removeLoot('minecraft:ender_pearl');
  removeLoot('minecraft:carrot');
  removeLoot('minecraft:iron_ingot');
  removeLoot('minecraft:gold_ingot');
  removeLoot('minecraft:iron_nugget');
  removeLoot('minecraft:gold_nugget');
  removeLoot('minecraft:lapis_lazuli');
  removeLoot('minecraft:iron_ore');
  removeLoot('minecraft:gold_ore');
  removeLoot('minecraft:diamond');
  removeLoot('minecraft:coal');
  removeLoot('minecraft:feather', 'blue_skies:snow_owl');
  removeLoot('minecraft:charcoal');
  removeLoot('minecraft:paper');
  removeLoot('minecraft:glowstone_dust');
  removeLoot('charcoal_pit:calamari');
  removeLoot('minecraft:golden_apple');
  removeLoot('minecraft:enchanted_golden_apple');
  removeLoot('minecraft:golden_boots');
  removeLoot('minecraft:golden_chestplate');
  removeLoot('minecraft:golden_helmet');
  removeLoot('minecraft:golden_leggings');
  removeLoot('minecraft:potato');
  removeLoot('biomancy:mob_sinew');
  removeLoot('biomancy:mob_gland');
  removeLoot('biomancy:volatile_gland');
  removeLoot('biomancy:toxin_gland');
  removeLoot('biomancy:withered_mob_marrow');
  removeLoot('biomancy:mob_marrow');
  removeLoot('biomancy:mob_claw');
  removeLoot('biomancy:mob_fang');
  removeLoot('minecraft:ender_pearl', 'twilightforest:lich');
  removeLoot('minecraft:ender_pearl', 'occultism:possessed_enderman');
  removeLoot('minecraft:mutton', 'blue_skies:stardust_ram');
  removeLoot('minecraft:mutton', 'twilightforest:bighorn_sheep');
  removeLoot('endrem:undead_soul');

  colors.forEach((color) => {
    removeLoot(`minecraft:${color}_wool`, 'blue_skies:stardust_ram');
    removeLoot(`minecraft:${color}_wool`, 'twilightforest:bighorn_sheep');
  });

  // butcher knife, skinning knife, gut knife,
  event
    .addEntityLootModifier('minecraft:cow')
    .removeLoot('minecraft:leather')
    .removeLoot('minecraft:beef')
    .removeLoot('hexerei:animal_fat')
    .addLoot('kubejs:cow_carcass');

  event
    .addEntityLootModifier('minecraft:chicken')
    .removeLoot('minecraft:feather')
    .removeLoot('minecraft:chicken')
    .addLoot('kubejs:chicken_carcass');

  event
    .addEntityLootModifier('minecraft:sheep')
    .removeLoot('minecraft:mutton')
    .addLoot('kubejs:sheep_carcass');

  event
    .addEntityLootModifier('minecraft:pig')
    .removeLoot('minecraft:porkchop')
    .removeLoot('hexerei:animal_fat')
    .addLoot('kubejs:pig_carcass');

  event
    .addEntityLootModifier('minecraft:elder_guardian')
    .addLoot('3x kubejs:iridescent_scales');

  event
    .addEntityLootModifier('ecofriendly:polluttor_phase_2_ym')
    .removeLoot('minecraft:enchanted_golden_apple')
    .addLoot('64x ecofriendly:garbage_item_ym');

  event
    .addEntityLootModifier('blue_skies:spewter')
    .removeLoot('minecraft:slime_ball')
    .addLoot('blue_skies:winter_leaf_seeds')
    .addLoot('blue_skies:winter_leaves');

  event
    .addEntityLootModifier('occultism:afrit_wild')
    .addLoot('occultism:afrit_essence');
  event
    .addEntityLootModifier('blue_skies:nyctofly')
    .addLoot('tconstruct:sky_slime_ball');
  event
    .addEntityLootModifier('blue_skies:firefly')
    .addLoot('tconstruct:sky_slime_ball');
  event
    .addEntityLootModifier('blue_skies:emberback')
    .addLoot('minecraft:slime_ball');
  event
    .addEntityLootModifier('blue_skies:infested_swarmer')
    .addLoot('minecraft:slime_ball');
  event
    .addEntityLootModifier('blue_skies:venom_spider')
    .addLoot('minecraft:slime_ball');
  event
    .addEntityLootModifier('blue_skies:arachnarch')
    .addLoot('minecraft:slime_ball');
  event.addEntityLootModifier('blue_skies:seclam').addLoot('blue_skies:pearl');
  event.addEntityLootModifier('blue_skies:azulfo').addLoot('cold_sweat:fur');

  event
    .addEntityLootModifier('minecraft:zombie')
    .randomChance(0.1)
    .addLoot('kubejs:rotten_brain');
  event
    .addEntityLootModifier('biomancy:flesh_blob')
    .randomChance(0.1)
    .addLoot('kubejs:rotten_brain');
  event
    .addEntityLootModifier('minecraft:husk')
    .randomChance(0.1)
    .addLoot('kubejs:rotten_brain');
  event
    .addEntityLootModifier('minecraft:zombie')
    .randomChance(0.5)
    .addLoot('minecraft:bone');
  event
    .addEntityLootModifier('minecraft:husk')
    .randomChance(0.5)
    .addLoot('minecraft:bone');
  event
    .addEntityLootModifier('biomancy:flesh_blob')
    .randomChance(0.1)
    .addLoot('endrem:undead_soul');
  event
    .addEntityLootModifier('blue_skies:artificial_golem')
    .randomChance(0.5)
    .addLoot('blue_skies:soul_fragment');

  event
    .addEntityLootModifier('blue_skies:azulfo')
    .randomChance(0.5)
    .addLoot('hexerei:animal_fat');
  event
    .addEntityLootModifier('blue_skies:stardust_ram')
    .randomChance(0.5)
    .addLoot('hexerei:animal_fat');
  event
    .addEntityLootModifier('twilightforest:bighorn_sheep')
    .randomChance(0.5)
    .addLoot('hexerei:animal_fat');
  event
    .addEntityLootModifier('blue_skies:reindeer')
    .randomChance(0.5)
    .addLoot('hexerei:animal_fat');

  event
    .addEntityLootModifier('cataclysm:ignited_revenant')
    .addLoot('3x cataclysm:burning_ashes');

  event
    .addEntityLootModifier('cataclysm:ignis')
    .addLoot('24x cataclysm:ignitium_ingot')
    .addLoot('biomancy:elastic_fibers');

  event
    .addEntityLootModifier('cataclysm:netherite_monstrosity')
    .addLoot('12x minecraft:netherite_scrap')
    .addLoot('biomancy:tough_fibers');
});
