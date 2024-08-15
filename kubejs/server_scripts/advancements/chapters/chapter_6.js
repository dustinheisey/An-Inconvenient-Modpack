onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'chapter_6', {
    icon: 'paragon_textiles:plant_fibers',
    title: 'Chapter 6: The Dream',
    description: '',
    background: 'rankine:textures/block/humus_mud.png',
  });
});
