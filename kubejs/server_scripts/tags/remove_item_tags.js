// priority: 301

onEvent('tags.items', (event) => {
  function removeTags(tags, item) {
    tags.forEach((tag) => event.remove(tag, item));
  }

  function removeItems(tag, items) {
    items.forEach((item) => event.remove(tag, item));
  }

  event.remove('forge:ingots/electrum', 'rankine:green_gold_ingot');
  event.remove('forge:nuggets/electrum', 'rankine:green_gold_nugget');
  event.remove('forge:storage_blocks/electrum', 'rankine:green_gold_block');
  event.remove('forge:ingots/netherite', 'cataclysm:witherite_ingot');
  removeTags(['minecraft:wool', 'forge:wool'], `paragon_textiles:fabric_plain`);
  colors.forEach((color) => {
    removeTags(
      [
        'minecraft:wool',
        'forge:wool',
        `minecraft:wool/${color}`,
        `forge:wool/${color}`
      ],
      `paragon_textiles:fabric_${color}`
    );
  });
  removeItems('minecraft:carpets', [
    'farmersdelight:half_tatami_mat',
    'farmersdelight:full_tatami_mat',
    'rankine:fiber_mat',
    'rankine:white_fiber_mat',
    'rankine:orange_fiber_mat',
    'rankine:magenta_fiber_mat',
    'rankine:light_blue_fiber_mat',
    'rankine:yellow_fiber_mat',
    'rankine:lime_fiber_mat',
    'rankine:pink_fiber_mat',
    'rankine:gray_fiber_mat',
    'rankine:light_gray_fiber_mat',
    'rankine:cyan_fiber_mat',
    'rankine:purple_fiber_mat',
    'rankine:blue_fiber_mat',
    'rankine:green_fiber_mat',
    'rankine:brown_fiber_mat',
    'rankine:red_fiber_mat',
    'rankine:black_fiber_mat',
    'undergarden:mogmoss_rug'
  ]);
});
