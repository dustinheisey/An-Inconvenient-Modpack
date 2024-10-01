// ? recipe-category-sort-order.ini in config/jei to find recipe categories

onEvent('jei.remove.categories', (event) => {
  list({
    create: [
      // TODO: stage showing categories in JEI
      'create:automatic_brewing',
      'create:automatic_packing',
      'create:automatic_shaped',
      'create:automatic_shapeless'
    ],
    charcoal_pit: [
      // 'charcoal_pit:hot_blasting',
      // 'charcoal_pit:distillery',
      // 'charcoal_pit:hot_blasting',
      // 'charcoal_pit:steam_press',
    ],
    rankine: [
      // 'rankine:foraging',
      // 'rankine:crucible',
      // 'rankine:fusion_furnace', // TODO: 7.1
    ],
    occultism: [
      'occultism:miner' // TODO: 7.1
    ],
    // biomancy: [
    //   'biomancy:bio_brewing', // TODO: 7.2
    //   'biomancy:bio_forging', // TODO: 7.2
    //   'biomancy:decomposing', // TODO: 7.2
    //   'biomancy:digesting', // TODO: 7.2
    // ],
    twilightforest: ['twilightforest:uncrafting'],
    mekanism: [
      // 'mekanism:antiprotonic_nucleosynthesizer', // TODO: 7.1
      // 'mekanism:boiler_casing', // TODO: 7.1
      // 'mekanism:chemical_crystallizer', // TODO: 7.1
      // 'mekanism:chemical_dissolution_chamber', // TODO: 7.1
      // 'mekanism:chemical_infuser', // TODO: 7.1
      // 'mekanism:chemical_injection_chamber', // TODO: 7.1
      // 'mekanism:chemical_oxidizer', // TODO: 7.1
      // 'mekanism:chemical_washer', // TODO: 7.1
      // 'mekanism:combiner', // TODO: 7.1
      // 'mekanism:condensentrating', // TODO: 7.1
      // 'mekanism:crusher', // TODO: 7.1
      // 'mekanism:decondensentrating', // TODO: 7.1
      // 'mekanism:electrolytic_separator', // TODO: 7.1
      // 'mekanism:energized_smelter', // TODO: 7.1
      // 'mekanism:energy_conversion', // TODO: 7.1
      // 'mekanism:enrichment_chamber', // TODO: 7.1
      // 'mekanism:gas_conversion', // TODO: 7.1
      // 'mekanism:infusion_conversion', // TODO: 7.1
      // 'mekanism:isotopic_centrifuge', // TODO: 7.1
      // 'mekanism:metallurgic_infuser', // TODO: 7.1
      // 'mekanism:nutritional_liquifier', // TODO: 7.1
      // 'mekanism:osmium_compressor', // TODO: 7.1
      // 'mekanism:painting_machine', // TODO: 7.1
      // 'mekanism:pigment_extractor', // TODO: 7.1
      // 'mekanism:pigment_mixer', // TODO: 7.1
      // 'mekanism:precision_sawmill', // TODO: 7.1
      // 'mekanism:pressurized_reaction_chamber', // TODO: 7.1
      // 'mekanism:purification_chamber', // TODO: 7.1
      // 'mekanism:solar_neutron_activator', // TODO: 7.1
      // 'mekanism:sps_casing', // TODO: 7.1
      // 'mekanism:thermal_evaporation_controller', // TODO: 7.1
      // 'mekanismgenerators:fission', // TODO: 7.1
    ],
    mythicbotany: [
      'mythicbotany:jei_category_infusion', // TODO: 7.1
      'mythicbotany:jei_category_rune_ritual' // TODO: 7.1
    ],
    tofucraft: [
      'tofucraft:bittern', // TODO: 7.1
      'tofucraft:harden' // TODO: 7.1
    ],
    extendedcrafting: [
      // 'extendedcrafting:compressor', // TODO: 7.1
      // 'extendedcrafting:ender_crafting', // TODO: 7.1
      // 'extendedcrafting:ultimate_crafting', // TODO: 7.1
    ],
    pneumaticcraft: [
      'pneumaticcraft:spawner_extraction' // TODO: 7.2
    ]
  }).forEach((category) => {
    event.remove(category);
  });
});
