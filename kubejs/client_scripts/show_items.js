onEvent('jei.add.items', event => {
  global
    .list({
      realistictorches: ['realistictorches:unlit_torch'],
      endrem: ['endrem:cryptic_eye'],
      cataclysm: ['cataclysm:witherite_ingot'],
      create: [
        'create:chromatic_compound',
        'create:refined_radiance',
        'create:shadow_steel',
        'create:refined_radiance_casing',
        'create:shadow_steel_casing',
      ],
    })
    .forEach(item => {
      event.add(item);
    });
});
