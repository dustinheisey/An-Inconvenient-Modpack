// priority: 203

onEvent('tags.items', event => {
  function overrideCollectionsChapters(collections) {
    collections.forEach(collection => {
      chapters.forEach(chapter => {
        event
          .get(`im:${collection}/${chapter}`)
          .getObjectIds()
          .forEach(id => {
            chapters.forEach(chapter => {
              event.remove(`im:${chapter}`, id);
            });
          });
        event.add(`im:${chapter}`, `#im:${collection}/${chapter}`);
      });
    });
  }

  overrideCollectionsChapters([
    'armors',
    'eyes',
    'ores',
    'lost_stories',
    'lost_pages',
    'relics',
    'spawn_eggs',
    // 'ingots',
    // 'nuggets',
    // 'metal_blocks',
  ]);
});
