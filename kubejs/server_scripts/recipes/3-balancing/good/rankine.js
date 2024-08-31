onEvent('recipes', event => {
  setBalanceRecipes({
    crushing: () => {},
    alloying: () => {
      [
        'rankine:alloying/nitinol_alloying',
        'rankine:alloying/steel_alloying',
        'rankine:alloying/alnico_alloying',
        'rankine:alloying/cast_iron_alloying',
        'rankine:alloying/cupronickel_alloying',
        'rankine:alloying/invar_alloying',
        'rankine:alloying/maraging_steel_alloying',
        'rankine:alloying/nickel_silver_alloying',
        'rankine:alloying/permalloy_alloying',
        'rankine:alloying/titanium_alloy_alloying',
      ].forEach(id => event.remove({id: id}));
    },
    mixing: () => {
      [
        'rankine:mixing/beta_alumina_mixing',
        'rankine:mixing/cob_mixing',
        'rankine:mixing/cob_advanced_mixing',
        'rankine:mixing/bitumen_mixing',
        'rankine:mixing/cement_mix_dolomite_mixing',
        'rankine:mixing/cement_mix_limestone_mixing',
        'rankine:mixing/tofu_mixing',
      ].forEach(id => event.remove({id: id}));
    },
    sluicing: () => {
      [
        'rankine:sluicing/gravel_sluicing',
        'rankine:sluicing/fulgurite_sluicing',
        'rankine:sluicing/light_gravel_sluicing',
        'rankine:sluicing/clay_loam_grass_block_sluicing',
        'rankine:sluicing/clay_loam_grass_path_sluicing',
        'rankine:sluicing/clay_loam_mud_sluicing',
        'rankine:sluicing/clay_loam_mycelium_sluicing',
        'rankine:sluicing/clay_loam_podzol_sluicing',
        'rankine:sluicing/clay_loam_sluicing',
        'rankine:sluicing/dark_gravel_sluicing',
        'rankine:sluicing/humus_grass_block_sluicing',
        'rankine:sluicing/humus_grass_path_sluicing',
        'rankine:sluicing/humus_mud_sluicing',
        'rankine:sluicing/humus_mycelium_sluicing',
        'rankine:sluicing/humus_podzol_sluicing',
        'rankine:sluicing/humus_sluicing',
        'rankine:sluicing/loam_grass_block_sluicing',
        'rankine:sluicing/loam_grass_path_sluicing',
        'rankine:sluicing/loam_mud_sluicing',
        'rankine:sluicing/loam_mycelium_sluicing',
        'rankine:sluicing/loam_podzol_sluicing',
        'rankine:sluicing/loam_sluicing',
        'rankine:sluicing/loamy_sand_grass_block_sluicing',
        'rankine:sluicing/loamy_sand_grass_path_sluicing',
        'rankine:sluicing/loamy_sand_mud_sluicing',
        'rankine:sluicing/loamy_sand_mycelium_sluicing',
        'rankine:sluicing/loamy_sand_podzol_sluicing',
        'rankine:sluicing/loamy_sand_sluicing',
        'rankine:sluicing/sandy_clay_grass_block_sluicing',
        'rankine:sluicing/sandy_clay_grass_path_sluicing',
        'rankine:sluicing/sandy_clay_loam_grass_block_sluicing',
        'rankine:sluicing/sandy_clay_loam_grass_path_sluicing',
        'rankine:sluicing/sandy_clay_loam_mud_sluicing',
        'rankine:sluicing/sandy_clay_loam_mycelium_sluicing',
        'rankine:sluicing/sandy_clay_loam_podzol_sluicing',
        'rankine:sluicing/sandy_clay_loam_sluicing',
        'rankine:sluicing/sandy_clay_mud_sluicing',
        'rankine:sluicing/sandy_clay_mycelium_sluicing',
        'rankine:sluicing/sandy_clay_podzol_sluicing',
        'rankine:sluicing/sandy_clay_sluicing',
        'rankine:sluicing/sandy_loam_grass_block_sluicing',
        'rankine:sluicing/sandy_loam_grass_path_sluicing',
        'rankine:sluicing/sandy_loam_mud_sluicing',
        'rankine:sluicing/sandy_loam_mycelium_sluicing',
        'rankine:sluicing/sandy_loam_sluicing',
        'rankine:sluicing/silty_clay_grass_block_sluicing',
        'rankine:sluicing/silty_clay_grass_path_sluicing',
        'rankine:sluicing/silty_clay_loam_grass_block_sluicing',
        'rankine:sluicing/silty_clay_loam_grass_path_sluicing',
        'rankine:sluicing/silty_clay_loam_mud_sluicing',
        'rankine:sluicing/silty_clay_loam_mycelium_sluicing',
        'rankine:sluicing/silty_clay_loam_podzol_sluicing',
        'rankine:sluicing/silty_clay_loam_sluicing',
        'rankine:sluicing/silty_clay_mud_sluicing',
        'rankine:sluicing/silty_clay_mycelium_sluicing',
        'rankine:sluicing/silty_clay_podzol_sluicing',
        'rankine:sluicing/silty_clay_sluicing',
        'rankine:sluicing/silty_loam_grass_block_sluicing',
        'rankine:sluicing/silty_loam_grass_path_sluicing',
        'rankine:sluicing/silty_loam_mud_sluicing',
        'rankine:sluicing/silty_loam_mycelium_sluicing',
        'rankine:sluicing/silty_loam_podzol_sluicing',
        'rankine:sluicing/silty_loam_sluicing',
      ].forEach(id => event.remove({id: id}));
    },
    shaped: () => {
      [
        'rankine:hardness_tester',
        'rankine:flint_and_steel_from_pyrite',
      ].forEach(id => event.remove({id: id}));
    },
    shapeless: () => {
      ['rankine:glass_from_colors'].forEach(id => event.remove({id: id}));
    },
    intrusive_igneous_generator: () => {
      ['rankine:stonegen_intrusive/diorite_generator'].forEach(id =>
        event.remove({id: id})
      );
    },
    beehive_oven: () => {
      [
        'rankine:beehive_oven/azurmalachite_block_beehive_oven_cooking',
        'rankine:beehive_oven/baddeleyite_block_beehive_oven_cooking',
        'rankine:beehive_oven/bismuthinite_block_beehive_oven_cooking',
        'rankine:beehive_oven/bituminous_coal_block_beehive_oven_cooking',
        'rankine:beehive_oven/celestine_block_beehive_oven_cooking',
        'rankine:beehive_oven/chalcopyrite_block_beehive_oven_cooking',
        'rankine:beehive_oven/chromite_block_beehive_oven_cooking',
        'rankine:beehive_oven/coal_block_beehive_oven_cooking',
        'rankine:beehive_oven/cobaltite_block_beehive_oven_cooking',
        'rankine:beehive_oven/cooperite_block_beehive_oven_cooking',
        'rankine:beehive_oven/glass_from_sand_beehive_oven_cooking',
        'rankine:beehive_oven/glass_from_silt_beehive_oven_cooking',
        'rankine:beehive_oven/goethite_block_beehive_oven_cooking',
        'rankine:beehive_oven/greenockite_block_beehive_oven_cooking',
        'rankine:beehive_oven/hedenbergite_block_beehive_oven_cooking',
        'rankine:beehive_oven/laurite_block_beehive_oven_cooking',
        'rankine:beehive_oven/lorandite_block_beehive_oven_cooking',
        'rankine:beehive_oven/magnesia_block_beehive_oven_cooking',
        'rankine:beehive_oven/magnetite_block_beehive_oven_cooking',
        'rankine:beehive_oven/molybdenite_block_beehive_oven_cooking',
        'rankine:beehive_oven/pentlandite_block_beehive_oven_cooking',
        'rankine:beehive_oven/platinum_arsenide_block_beehive_oven_cooking',
        'rankine:beehive_oven/pyrolusite_block_beehive_oven_cooking',
        'rankine:beehive_oven/raw_copper_block_beehive_oven_cooking',
        'rankine:beehive_oven/raw_gold_block_beehive_oven_cooking',
        'rankine:beehive_oven/raw_iron_block_beehive_oven_cooking',
        'rankine:beehive_oven/realgar_block_beehive_oven_cooking',
        'rankine:beehive_oven/rhodochrosite_block_beehive_oven_cooking',
        'rankine:beehive_oven/rutile_block_beehive_oven_cooking',
        'rankine:beehive_oven/scheelite_block_beehive_oven_cooking',
        'rankine:beehive_oven/silicon_block_beehive_oven_cooking',
        'rankine:beehive_oven/spodumene_block_beehive_oven_cooking',
        'rankine:beehive_oven/stibnite_block_beehive_oven_cooking',
        'rankine:beehive_oven/subbituminous_coal_block_beehive_oven_cooking',
        'rankine:beehive_oven/zircon_block_beehive_oven_cooking',
        'rankine:beehive_oven/quicklime_from_dolomite_beehive_oven_cooking',
      ].forEach(id => event.remove({id: id}));
    },
    volcanic_generator: () => {
      [
        'rankine:stonegen_volcanic/andesitic_tuff_generator',
        'rankine:stonegen_volcanic/basaltic_tuff_generator',
        'rankine:stonegen_volcanic/crying_obsidian_generator',
        'rankine:stonegen_volcanic/komatiitic_tuff_generator',
        'rankine:stonegen_volcanic/rhyolitic_tuff_generator',
      ].forEach(id => event.remove({id: id}));
    },
    sedimentary_generator: () => {
      [
        'rankine:stonegen_sedimentary/dolostone_generator',
        'rankine:stonegen_sedimentary/shale_generator',
        'rankine:stonegen_sedimentary/limestone_generator2',
      ].forEach(id => event.remove({id: id}));
    },
    extrusive_igneous_generator: () => {
      ['rankine:stonegen_extrusive/andesite_generator'].forEach(id =>
        event.remove({id: id})
      );
    },
    metamorphic_generator: () => {
      [
        'rankine:stonegen_metamorphic/rose_marble_generator',
        'rankine:stonegen_metamorphic/slate_generator_from_marlstone',
        'rankine:stonegen_metamorphic/slate_generator_from_mudstone',
        'rankine:stonegen_metamorphic/slate_generator_from_siltstone',
        'rankine:stonegen_metamorphic/slate_generator_from_shale',
        'rankine:stonegen_metamorphic/white_marble_generator',
        'rankine:stonegen_metamorphic/black_marble_generator',
      ].forEach(id => event.remove({id: id}));
    },
    air_distillation: () => {
      [
        'rankine:air_distillation/overworld_air_distillation',
        'rankine:air_distillation/nether_air_distillation',
      ].forEach(id => event.remove({id: id}));
    },
    stripping: () => {},
    tree_tapping: () => {},
    evaporation: () => {},
  });
});
