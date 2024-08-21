onEvent('recipes', event => {
  setBalanceRecipes({
    animal_spawner: () => {
      ['naturesaura:animal_spawner/endermite', 'naturesaura:animal_spawner/phantom'].forEach(id => event.remove({id: id}));
    },
    aura_infusion: () => {
      ['naturesaura:altar/egg', 'naturesaura:altar/milk'].forEach(id => event.remove({id: id}));
    },
    offering: () => {},
    tree_ritual: () => {

    },
  });
});
