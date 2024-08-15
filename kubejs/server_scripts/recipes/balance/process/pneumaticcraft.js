onEvent('recipes', event => {
  setBalanceRecipes({
    amadron_trade: () => {},
    explosion_crafting: () => {
      event.remove({output: 'pneumaticcraft:ingot_iron_compressed'});
      event.remove({output: 'pneumaticcraft:compressed_iron_block'});
    },
    fluid_mixer: () => {},
    pressure_chamber: () => {
      event.remove({
        output: [
          'pneumaticcraft:empty_pcb',
          'pneumaticcraft:pcb_blueprint',
          'pneumaticcraft:etching_acid_bucket',
          'pneumaticcraft:capacitor',
        ],
        type: 'pneumaticcraft:pressure_chamber',
      });
    },
    refinery: () => {},
    thermo_plant: () => {
      event.custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: false,
        fluid_input: {
          type: 'pneumaticcraft:fluid',
          amount: 100,
          tag: 'forge:lubricant',
        },
        item_input: {
          item: 'rankine:titanium_alloy_block',
        },
        item_output: {
          item: 'pneumaticcraft:drill_bit_diamond',
        },
        pressure: 7.5,
        temperature: {
          min_temp: 500,
        },
      });

      event.custom({
        type: 'pneumaticcraft:thermo_plant',
        exothermic: false,
        fluid_input: {
          type: 'pneumaticcraft:fluid',
          amount: 100,
          fluid: 'immersivepetroleum:naphtha',
        },
        fluid_output: {
          amount: 80,
          fluid: 'pneumaticcraft:lpg',
        },
        pressure: 2.0,
        temperature: {
          min_temp: 573,
        },
      });
    },
  });
});

onEvent('server.datapack.high_priority', event => {
  ['oil_2', 'oil_3', 'oil_4'].forEach(id => {
    event.addJson(`pneumaticcraft:recipes/refinery/${id}.json`, {});
  });

  ['lpg', 'kerosene'].forEach(id => {
    event.addJson(`pneumaticcraft:recipes/thermo_plant/${id}.json`, {});
  });

  [
    'assembly_program_drill',
    'assembly_program_drill_laser',
    'assembly_program_laser',
    'diesel_to_emerald',
    'emerald_to_lubricant',
    'gasoline_to_emerald',
    'kerosene_to_emerald',
    'lpg_to_emerald',
    'lubricant_to_emerald',
    'oil_to_emerald',
    'emerald_to_oil',
    'pcb_blueprint',
  ].forEach(id =>
    event.addJson(`pneumaticcraft:recipes/amadron/${id}.json`, {
      type: 'forge:conditional',
      recipes: [
        {
          conditions: [
            {
              type: 'forge:false',
            },
          ],
        },
      ],
    })
  );
});
