onEvent('recipes', (event) => {
  setSideRecipes([
    {
      id: 'collections',
      recipe: () => {},
      children: [
        { id: 'gateways', recipe: () => {}, children: [] },
        { id: 'guidebooks', recipe: () => {}, children: [] },
        {
          id: 'end_eyes',
          recipe: () => {}
        },
        {
          id: 'lost_stories',
          recipe: () => {}
        },
        {
          id: 'armor',
          recipe: () => {}
        }
      ]
    }
  ]);
});
