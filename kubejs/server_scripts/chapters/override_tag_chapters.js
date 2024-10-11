// priority: 204

onEvent('tags.items', (event) => {
  function overrideTagChapters(chapter, tags) {
    tags.forEach((tag) => {
      event
        .get(tag)
        .getObjectIds()
        .forEach((id) => {
          chapters.forEach((chapter) => {
            event.remove(`im:${chapter}`, id);
          });
          event.add(`im:${chapter}`, id);
        });
    });
  }

  overrideTagChapters('chapter_4', [
    'tconstruct:foundry',
    'botania:petals',
    'botania:mystical_flowers',
    'botania:double_mystical_flowers',
    'forge:amalgam_tools',
    'ceramics:rainbow_porcelain'
  ]);
  overrideTagChapters('chapter_5_1', [
    'chipped:red_carpet',
    'chipped:red_wool',
    'chipped:orange_carpet',
    'chipped:orange_wool',
    'chipped:yellow_carpet',
    'chipped:yellow_wool',
    'chipped:green_carpet',
    'chipped:green_wool',
    'chipped:lime_carpet',
    'chipped:lime_wool',
    'chipped:cyan_carpet',
    'chipped:cyan_wool',
    'chipped:light_blue_carpet',
    'chipped:light_blue_wool',
    'chipped:blue_carpet',
    'chipped:blue_wool',
    'chipped:magenta_carpet',
    'chipped:magenta_wool',
    'chipped:purple_carpet',
    'chipped:purple_wool',
    'chipped:pink_carpet',
    'chipped:pink_wool',
    'chipped:white_carpet',
    'chipped:white_wool',
    'chipped:light_gray_carpet',
    'chipped:light_gray_wool',
    'chipped:gray_carpet',
    'chipped:gray_wool',
    'chipped:black_carpet',
    'chipped:black_wool',
    'chipped:brown_carpet',
    'chipped:brown_wool',
    'create:tuff',
    'chipped:tuff',
    'create:stone_types/tuff',
    'chipped:waxed_copper_block',
    'chipped:waxed_exposed_copper',
    'chipped:waxed_oxidized_copper',
    'chipped:waxed_weathered_copper'
  ]);
  overrideTagChapters('chapter_5_2', [
    'forge:titanium_alloy_tools',
    'forge:steel_tools',
    'forge:invar_tools',
    'forge:nickel_superalloy_tools',
    'rankine:leds'
  ]);
  overrideTagChapters('chapter_7_1', [
    'forge:stainless_steel_tools',
    'forge:cobalt_superalloy_tools',
    'forge:tungsten_heavy_alloy_tools',
    'forge:mineral_wool',
    'forge:shulker_boxes',
    'forge:ender_amalgam_tools',
    'forge:osmiridium_tools'
  ]);
});
