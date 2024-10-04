onEvent('server.datapack.high_priority', (event) => {
  addAdvancements(event, 'chapter_8', {
    icon: 'rankine:meteoric_iron',
    title: 'Chapter 8: Space Age',
    description: '',
    background: 'rankine:textures/block/humus_mud.png'
  });
});
