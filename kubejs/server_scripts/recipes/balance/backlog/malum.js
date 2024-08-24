onEvent('recipes', event => {
  setBalanceRecipes({
    shapeless: () => {},
    spirit_infusion: () => {
      ['malum:spirit_infusion/poppet'].forEach(id => event.remove({id: id}));
      event.remove({
        output: [
          'hexerei:blood_sigil',
          'occultism:book_of_binding_djinni',
          'malum:soul_stained_steel_helmet',
          'malum:soul_stained_steel_chestplate',
          'malum:soul_stained_steel_leggings',
          'malum:soul_stained_steel_boots',
          'malum:twisted_rock',
          'malum:tainted_rock',
          'malum:hex_ash',
          'malum:soul_stained_steel_ingot',
          'malum:alchemical_impetus',
          'malum:ether',
          'malum:spirit_fabric',
          'malum:corrupted_resonance',
        ],
      });

      event
        .custom({
          type: 'malum:spirit_infusion',
          input: {item: 'minecraft:hay_block'},
          output: {item: 'malum:poppet', count: 2},
          extra_items: [
            {item: 'kubejs:wheat', count: 2},
            {item: 'malum:hex_ash'},
          ],
          spirits: [
            {
              type: 'wicked',
              count: 4,
            },
            {
              type: 'earthen',
              count: 4,
            },
          ],
        })
        .id('inconvenient:spirit_infusion_poppet');

      event
        .custom({
          type: 'malum:spirit_infusion',
          input: {item: 'occultism:book_of_binding_foliot'},
          output: {item: 'occultism:book_of_binding_djinni'},
          extra_items: [],
          spirits: [
            {
              type: 'wicked',
              count: 4,
            },
          ],
        })
        .id('inconvenient:spirit_infusion_book_of_binding_djinni');

      event
        .custom({
          type: 'malum:spirit_infusion',
          input: {item: 'malum:rotting_essence'},
          output: {item: 'malum:hex_ash'},
          extra_items: [],
          spirits: [
            {
              type: 'arcane',
              count: 1,
            },
          ],
        })
        .id('inconvenient:spirit_infusion_rotting_essence');

      event
        .custom({
          type: 'malum:spirit_infusion',
          input: {item: 'malum:alchemical_calx', count: 8},
          output: {item: 'malum:alchemical_impetus'},
          extra_items: [
            {item: 'malum:processed_soulstone', count: 3},
            {item: 'minecraft:gunpowder', count: 2},
            {item: 'malum:hex_ash', count: 1},
          ],
          spirits: [
            {
              type: 'arcane',
              count: 4,
            },
            {type: 'earthen', count: 4},
          ],
        })
        .id('inconvenient:spirit_infusion_alchemical_impetus');
      event
        .custom({
          type: 'malum:spirit_infusion',
          input: {item: 'minecraft:glowstone_dust', count: 4},
          output: {item: 'malum:ether', count: 4},
          extra_items: [
            {item: 'realistictorches:glowstone_crystal', count: 1},
            {item: 'minecraft:blaze_powder', count: 1},
          ],
          spirits: [
            {
              type: 'arcane',
              count: 1,
            },
            {type: 'infernal', count: 2},
          ],
        })
        .id('inconvenient:spirit_infusion_glowstone_crystal');

      event
        .custom({
          type: 'malum:spirit_infusion',
          input: {item: 'rankine:gun_cotton', count: 2},
          output: {item: 'malum:spirit_fabric', count: 4},
          extra_items: [
            {item: 'blue_skies:spider_webbing', count: 2},
            {item: 'malum:hex_ash', count: 1},
          ],
          spirits: [
            {
              type: 'wicked',
              count: 2,
            },
            {type: 'earthen', count: 1},
            {type: 'aerial', count: 1},
          ],
        })
        .id('inconvenient:spirit_infusion_spirit_fabric');
    },
  });
});
