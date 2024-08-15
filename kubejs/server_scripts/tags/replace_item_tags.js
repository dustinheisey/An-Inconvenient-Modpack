// priority: 301

onEvent('tags.items', event => {
  function replaceTag(tag, item) {
    event.removeAll(tag);
    event.add(tag, item);
  }

  function replaceTags(tags, item) {
    tags.forEach(tag => {
      event.removeAll(tag);
      event.add(tag, item);
    });
  }

  replaceTag('twilightforest:portal/activator', 'malum:corrupted_resonance');
  replaceTags(
    [
      'forge:grain',
      'forge:grain/wheat',
      'forge:crops',
      'forge:crops/wheat',
      'hexerei:herbs',
    ],
    'kubejs:wheat'
  );
});
