onEvent('worldgen.remove', (event) => {
  event.removeOres((props) => {
    props.blocks = [
      'minecraft:slime_block',
      'minecraft:sugar_cane',
      'minecraft:cactus',
      'minecraft:bee_nest'
    ];
  });

  event.removeFeatureById('lakes', [
    'pneumaticcraft:lake_oil_surface',
    'pneumaticcraft:lake_oil_underground'
  ]);
  event.removeFeatureById('underground_structures', [
    'minecraft:monster_room',
    'minecraft:monster_room_deep',
    'minecraft:fossil_upper',
    'minecraft:fossil_lower'
  ]);
  event.removeFeatureById('surface_structures', [
    'hem:bronze',
    'hem:bronze_2',
    'hem:bronzeboulder',
    'hem:bronzes',
    'ecofriendly:garbage_patch_1',
    'ecofriendly:garbage_patch_2',
    'ecofriendly:landfill_ym',
    'ecofriendly:tossed_carton_structure_ym',
    'ecofriendly:tossed_bottle_structure_ym',
    'ecofriendly:tossed_bottle_forest',
    'ecofriendly:recycle_station',
    'ecofriendly:tossed_tire_ym_structure',
    'ecofriendly:tossed_detergent_structure_ym'
  ]);
  event.removeFeatureById('underground_ores', [
    'minecraft:ore_tuff',
    'hem:rose_copper_ore',
    'minecraft:underwater_magma',
    'create:striated_ores_overworld',
    'create:zinc_ore',
    'minecraft:ore_coal_upper',
    'minecraft:ore_coal_lower',
    'minecraft:ore_iron_upper',
    'minecraft:ore_iron_middle',
    'minecraft:ore_iron_small',
    'minecraft:ore_gold',
    'minecraft:ore_gold_lower',
    'minecraft:ore_gold_extra',
    'minecraft:ore_redstone',
    'minecraft:ore_redstone_lower',
    'minecraft:ore_diamond',
    'minecraft:ore_diamond_large',
    'minecraft:ore_diamond_buried',
    'minecraft:ore_lapis',
    'minecraft:ore_lapis_buried',
    'minecraft:ore_copper',
    'minecraft:ore_emerald',
    'blue_skies:ore_everdawn_emerald',
    'minecraft:ore_gold_nether',
    'minecraft:ore_quartz_nether',
    'minecraft:ore_copper_large',
    'blue_skies:ore_everbright_emerald'
  ]);
  event.removeFeatureById('underground_decoration', [
    'minecraft:ore_infested',
    'blue_skies:sunset_maple_forest_cave_magma'
  ]);

  event.removeFeatureById('vegetal_decoration', [
    'minecraft:flower_default',
    'croptopia:random_crop',
    'ecofriendly:billberry_ground_0',
    'ecofriendly:billberry_ground_1',
    'ecofriendly:billberry_ground_2',
    'ecofriendly:billberry_ground_3',
    'minecraft:patch_tall_grass_2',
    'minecraft:glow_lichen',
    'minecraft:patch_sugar_cane',
    'minecraft:patch_sugar_cane_badlands',
    'minecraft:patch_sugar_cane_swamp',
    'minecraft:patch_sugar_cane_desert',
    'minecraft:lush_caves_ceiling_vegetation',
    'minecraft:cave_vines',
    'minecraft:lush_caves_clay',
    'minecraft:lush_caves_vegetation',
    'minecraft:rooted_azalea_tree',
    'minecraft:spore_blossom',
    'minecraft:classic_vines_cave_feature',
    'minecraft:patch_melon_sparse',
    'minecraft:patch_melon',
    'minecraft:patch_pumpkin',
    'minecraft:flower_swamp',
    'minecraft:swamp_flowers_placement',
    'minecraft:flower_meadow',
    'minecraft:flower_warm',
    'minecraft:flower_plains',
    'minecraft:forest_flowers',
    'minecraft:patch_sunflower',
    'minecraft:flower_forest_flowers',
    'minecraft:trees_flower_forest',
    'minecraft:flower_flower_forest',
    'minecraft:sugar_cane',
    'minecraft:dandelion',
    'minecraft:rose_bush'
  ]);
});
