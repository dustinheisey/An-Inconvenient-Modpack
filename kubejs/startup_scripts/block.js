onEvent('block.registry', (event) => {
  function blocks(config) {
    global.flat(config).forEach((item) => {
      event
        .create(item.id)
        .displayName(global.toTitleCase(item.id))
        .material(item.material);
    });
  }

  blocks({
    chapter_1: {
      pottery: [
        { id: 'crushed_orthoclase_feldspar', material: 'gravel' },
        { id: 'orthoclase_feldspar_sand', material: 'sand' },
        { id: 'orthoclase_feldspar_silt', material: 'sand' },
        { id: 'crushed_plagioclase_feldspar', material: 'gravel' },
        { id: 'plagioclase_feldspar_sand', material: 'sand' },
        { id: 'plagioclase_feldspar_silt', material: 'sand' },
        { id: 'unglazed_porcelain', material: 'stone' },
        { id: 'glazed_porcelain', material: 'stone' },
        { id: 'unglazed_porcelain_faucet', material: 'stone' },
        { id: 'glazed_porcelain_faucet', material: 'stone' },
        { id: 'unglazed_porcelain_channel', material: 'stone' },
        { id: 'glazed_porcelain_channel', material: 'stone' },
        { id: 'unglazed_porcelain_cistern', material: 'stone' },
        { id: 'glazed_porcelain_cistern', material: 'stone' }
      ],
      waste: [
        { id: 'waste', material: 'dirt' },
        { id: 'dense_waste', material: 'dirt' },
        { id: 'compacted_waste', material: 'stone' },
        { id: 'ultra_compacted_waste', material: 'stone' },
        { id: 'solid_waste', material: 'stone' }
      ]
    },
    chapter_2: [
      { id: 'kiln_feed_block', material: 'sand' },
      { id: 'clinker', material: 'stone' }
    ],
    chapter_4: [{ id: 'tar_sand', material: 'sand' }]
  });
});
