onEvent('block.registry', event => {
  event.create('tar_sand').displayName('Tar Sand').material('sand');
  event
    .create('kiln_feed_block')
    .displayName('Kiln Feed Block')
    .material('sand');
  event.create('clinker').displayName('Clinker').material('stone');
});
