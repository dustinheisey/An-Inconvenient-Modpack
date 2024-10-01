onEvent('recipes', (event) => {
  setMilestoneRecipes({
    id: 'corrupted_resonance',
    recipe: () => {
      event.custom({
        type: 'malum:spirit_infusion',
        input: { item: 'minecraft:nether_star' },
        output: { item: 'malum:corrupted_resonance' },
        extra_items: [
          { item: 'malum:chunk_of_brilliance', count: 32 },
          { item: 'undergarden:regalium_crystal', count: 32 },
          { item: 'create:powdered_obsidian', count: 32 },
          { item: 'malum:processed_soulstone', count: 32 },
          { item: 'malum:hex_ash', count: 32 }
        ],
        spirits: [
          {
            type: 'arcane',
            count: 32
          },
          { type: 'wicked', count: 32 },
          { type: 'infernal', count: 32 },
          { type: 'aerial', count: 32 },
          { type: 'earthen', count: 32 },
          { type: 'aqueous', count: 32 }
        ]
      });
    },
    children: [
      { id: 'nether_star', recipe: () => {}, children: [] },
      {
        id: 'chunk_of_brilliance',
        recipe: () => {},
        children: [
          {
            id: 'cluster_of_brilliance',
            recipe: () => {},
            children: [
              { id: 'alchemist_loot_bag', recipe: () => {}, children: [] }
            ]
          }
        ]
      },
      { id: 'regalium', recipe: () => {}, children: [] },
      {
        id: 'processed_soulstone',
        recipe: () => {
          event.smelting('malum:raw_soulstone', 'malum:processed_soulstone');
        },
        children: [
          {
            id: 'raw_soulstone',
            recipe: () => {},
            children: [
              { id: 'arachnarch_loot_bag', recipe: () => {}, children: [] }
            ]
          }
        ]
      },
      {
        id: 'hex_ash',
        recipe: () => {},
        children: [{ id: 'rotting_essence', recipe: () => {}, children: [] }]
      }
    ]
  });
});
