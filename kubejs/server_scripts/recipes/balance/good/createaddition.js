onEvent('recipes', event => {
  setBalanceRecipes({
    rolling: () => {
      [
        'createaddition:rolling/iron_ingot',
        'createaddition:rolling/copper_plate',
      ].forEach(id => event.remove({id: id}));

      event
        .custom({
          type: 'createaddition:rolling',
          input: {
            tag: 'forge:plates/copper',
          },
          result: {
            item: 'immersiveengineering:wire_copper',
            count: 2,
          },
        })
        .id('iconvenient:wire_copper');

      event
        .custom({
          type: 'createaddition:rolling',
          input: {
            tag: 'forge:ingots/iron',
          },
          result: {
            item: 'immersiveengineering:stick_iron',
            count: 2,
          },
        })
        .id('iconvenient:stick_iron');
    },
  });
});
