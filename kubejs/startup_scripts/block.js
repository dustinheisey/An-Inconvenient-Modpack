onEvent('block.registry', (event) => {
  event
    .create('crushed_orthoclase_feldspar')
    .displayName('Crushed Orthoclase Feldspar')
    .material('gravel');

  event
    .create('orthoclase_feldspar_sand')
    .displayName('Orthoclase Feldspar Sand')
    .material('sand');

  event
    .create('orthoclase_feldspar_silt')
    .displayName('Orthoclase Feldspar Silt')
    .material('sand');

  event
    .create('crushed_plagioclase_feldspar')
    .displayName('Crushed Plagioclase Feldspar')
    .material('gravel');

  event
    .create('plagioclase_feldspar_sand')
    .displayName('Plagioclase Feldspar Sand')
    .material('sand');

  event
    .create('plagioclase_feldspar_silt')
    .displayName('Plagioclase Feldspar Silt')
    .material('sand');

  event
    .create('unglazed_porcelain')
    .displayName('Unglazed Porcelain')
    .material('stone');

  event
    .create('glazed_porcelain')
    .displayName('Glazed Porcelain')
    .material('stone');

  event.create('tar_sand').displayName('Tar Sand').material('sand');
  event
    .create('kiln_feed_block')
    .displayName('Kiln Feed Block')
    .material('sand');
  event.create('clinker').displayName('Clinker').material('stone');
});
