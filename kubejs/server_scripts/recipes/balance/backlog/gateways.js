onEvent('recipes', event => {
  setBalanceRecipes({
    craft: () => {},
  });
});

onEvent('server.datapack.high_priority', event => {
  [
    'blaze_gate',
    'creeper_gate',
    'enderman_gate',
    'ghast_gate',
    'magma_cube_gate',
    'shulker_gate',
    'skeleton_gate',
    'slime_gate',
    'spider_gate',
    'witch_gate',
    'zombie_gate',
  ].forEach(id => {
    event.addJson(`gateways:recipes/${id}_small.json`, {});
    event.addJson(`gateways:recipes/${id}.json`, {});
    event.addJson(`gateways:recipes/${id}_large.json`, {});
  });
});
