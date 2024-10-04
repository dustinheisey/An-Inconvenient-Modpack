// priority: 303
onEvent('tags.worldgen.biome', (event) => {
  function removeStructures(structures) {
    structures.forEach((structure) => {
      try {
        event.removeAll(structure);
      } catch (error) {
        console.error(`hello ${structure} removal errored, ${error}`);
      }
    });
  }

  function setStructureBiomes(configs) {
    configs.forEach((config) => {
      config.structures.forEach((structure) => {
        try {
          event.removeAll(structure);
          config.biomes.forEach((biome) => {
            event.add(structure, biome);
          });
        } catch (error) {
          console.error(`hello ${structure} removal errored, ${error}`);
        }
      });
    });
  }

  setStructureBiomes([
    {
      structures: [
        'bettermineshafts:has_structure/has_mineshaft_forest',
        'bettermineshafts:has_structure/has_mineshaft_oak',
        'bettermineshafts:has_structure/has_mineshaft_spruce',
        'dungeons_arise:has_structure/small_blimp_biomes',
        'dungeons_arise:has_structure/mining_system_biomes',
        'dungeons_arise:has_structure/heavenly_rider_biomes'
      ],
      biomes: [
        'hem:hayfever_fields',
        'hem:blueleaf_birch_forest',
        'hem:blueleaf_pine_forest',
        'hem:blueleaf_plains',
        'hem:lush_forest',
        'hem:redwood_woodlands',
        'hem:extreme_mountains',
        'hem:cliffs'
      ]
    },
    {
      structures: [
        'dungeons_arise:has_structure/fishing_hut_biomes',
        'dungeons_arise:has_structure/illager_campsite_biomes',
        'dungeons_arise:has_structure/illager_windmill_biomes',
        'dungeons_arise:has_structure/small_prairie_house_biomes',
        'dungeons_arise:has_structure/abandoned_temple_biomes',
        'dungeons_arise:has_structure/merchant_campsite_biomes',
        'dungeons_arise:has_structure/lighthouse_biomes',
        'dungeons_arise:has_structure/wishing_well_biomes'
      ],
      biomes: [
        'hem:hayfever_fields',
        'hem:blueleaf_plains',
        'hem:extreme_mountains',
        'hem:cliffs'
      ]
    }
  ]);

  removeStructures([
    'dungeons_arise:has_structure/illager_corsair_biomes',
    'dungeons_arise:has_structure/illager_galley_biomes',
    'betterstrongholds:has_structure/has_better_stronghold',
    'dungeons_arise:has_structure/scorched_mines_biomes',
    'dungeons_arise:has_structure/foundry_biomes',
    'bettermineshafts:has_structure/has_mineshaft_acacia',
    'bettermineshafts:has_structure/has_mineshaft_red_desert',
    'bettermineshafts:has_structure/has_mineshaft_mushroom',
    'dungeons_arise:has_structure/mushroom_house_biomes',
    'dungeons_arise:has_structure/giant_mushroom_biomes',
    'dungeons_arise:has_structure/mushroom_mines_biomes',
    'dungeons_arise:has_structure/mushroom_village_biomes',
    'bettermineshafts:has_structure/has_mineshaft_dripstone',
    'dungeons_arise:has_structure/jungle_tree_house_biomes',
    'bettermineshafts:has_structure/has_mineshaft_jungle',
    'bettermineshafts:has_structure/has_mineshaft_ice',
    'bettermineshafts:has_structure/has_mineshaft_spruce_snowy',
    'minecraft:has_structure/mineshaft',
    'tconstruct:islands/earthslime',
    'minecraft:has_structure/jungle_temple',
    'minecraft:has_structure/desert_pyramid',
    'minecraft:has_structure/buried_treasure',
    'minecraft:has_structure/ocean_ruin_cold',
    'minecraft:has_structure/stronghold',
    'paraglider:has_structure/underground_horned_statue',
    'minecraft:has_structure/mineshaft_mesa',
    'minecraft:has_structure/igloo',
    'tconstruct:islands/skyslime',
    'minecraft:has_structure/shipwreck_beached',
    'minecraft:has_structure/ocean_monument',
    'dungeons_arise:has_structure/coliseum_biomes',
    'minecraft:has_structure/ruined_portal_jungle',
    'dungeons_arise:has_structure/typhon_biomes',
    'paraglider:has_structure/nether_horned_statue',
    'minecraft:has_structure/desert_pyramid',
    'minecraft:has_structure/ruined_portal_ocean',
    'minecraft:has_structure/woodland_mansion',
    'minecraft:has_structure/ocean_ruin_warm',
    'tconstruct:islands/enderslime',
    'minecraft:has_structure/village_desert',
    'minecraft:has_structure/village_savanna',
    'minecraft:has_structure/village_taiga',
    'minecraft:has_structure/village_plains',
    'hexerei:has_structure/witch_hut_biomes',
    'minecraft:has_structure/ruined_portal_desert',
    'minecraft:has_structure/ruined_portal_swamp',
    'minecraft:has_structure/swamp_hut',
    'minecraft:has_structure/desert_pyramid',
    'twilightforest:valid_quest_grove_biomes',
    'minecraft:has_structure/ruined_portal_nether',
    'tconstruct:islands/clay',
    'dungeons_arise:has_structure/ceryneian_hind_biomes',
    'hexerei:has_structure/dark_coven_biomes',
    'tconstruct:islands/blood',
    'minecraft:has_structure/ruined_portal_standard',
    'minecraft:has_structure/pillager_outpost',
    'paraglider:has_structure/tarrey_town_goddess_statue',
    'minecraft:has_structure/village_snowy',
    'minecraft:has_structure/nether_fossil',
    'minecraft:has_structure/desert_pyramid',
    'minecraft:has_structure/ruined_portal_mountain',
    'minecraft:has_structure/shipwreck',
    'dungeons_arise:has_structure/undead_pirate_ship_biomes',
    'dungeons_arise:has_structure/heavenly_conqueror_biomes',
    'dungeons_arise:has_structure/illager_fort_biomes',
    'dungeons_arise:has_structure/plague_asylum_biomes',
    'dungeons_arise:has_structure/heavenly_challenger_biomes',
    'dungeons_arise:has_structure/shiraz_palace_biomes',
    'betterstrongholds:has_structure/has_better_stronghold',
    'forge:is_lush',
    'bettermineshafts:has_structure/has_mineshaft_lush',
    'bettermineshafts:has_structure/has_mineshaft_desert',
    'bettermineshafts:has_structure/has_mineshaft_mesa',
    'dungeons_arise:has_structure/bandit_village_biomes',
    'dungeons_arise:has_structure/bandit_towers_biomes',
    'dungeons_arise:has_structure/thornborn_towers_biomes',
    'dungeons_arise:has_structure/infested_temple_biomes',
    'dungeons_arise:has_structure/monastery_biomes',
    'dungeons_arise:has_structure/aviary_biomes'
  ]);
});
