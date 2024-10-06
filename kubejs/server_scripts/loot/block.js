onEvent('lootjs', (event) => {
  function removeLoot(items, blocks) {
    blocks.forEach((block) => {
      items.forEach((item) =>
        event.addBlockLootModifier(block).removeLoot(item)
      );
    });
  }

  removeLoot(
    ['#forge:seeds', 'farmersdelight:straw', 'paragon_textiles:plant_fibers'],
    [
      'minecraft:grass',
      'minecraft:seagrass',
      'minecraft:tall_grass',
      'blue_skies:turquoise_grass',
      'blue_skies:tall_turquoise_grass',
      'blue_skies:lunar_grass',
      'blue_skies:tall_lunar_grass',
      'blue_skies:crystallized_grass',
      'blue_skies:cherry_grass',
      'hem:blueleaf_grass',
      'hem:blueleaf_grass_short',
      'hem:blueleaf_grass_shorter',
      'upgrade_aquatic:beachgrass',
      'upgrade_aquatic:tall_beachgrass',
      'minecraft:fern',
      'minecraft:large_fern'
    ]
  );

  [
    'rankine:cassiterite_ore',
    'rankine:malachite_ore',
    'rankine:plumbago_ore',
    'rankine:ilmenite_ore',
    'rankine:pentlandite_ore',
    'rankine:uraninite_ore',
    'bloodmagic:dungeon_ore',
    'blue_skies:everdawn_diopside_ore',
    'blue_skies:everdawn_pyrope_ore',
    'blue_skies:everdawn_aquite_ore',
    'blue_skies:everdawn_charoite_ore',
    'blue_skies:everdawn_moonstone_ore',
    'blue_skies:horizonite_ore',
    'undergarden:depthrock_coal_ore',
    'undergarden:shiverstone_coal_ore',
    'undergarden:depthrock_iron_ore',
    'undergarden:shiverstone_iron_ore',
    'undergarden:depthrock_cloggrum_ore',
    'undergarden:shiverstone_cloggrum_ore',
    'undergarden:shiverstone_froststeel_ore',
    'undergarden:depthrock_utherium_ore',
    'undergarden:shiverstone_utherium_ore',
    'undergarden:tremblecrust_utherium_ore',
    'undergarden:depthrock_regalium_ore',
    'undergarden:shiverstone_regalium_ore',
    'rankine:cinnabar_ore',
    'minecraft:ancient_debris',
    'rankine:bauxite_ore',
    'rankine:cobaltite_ore',
    'rankine:native_sulfur_ore',
    'rankine:sphalerite_ore',
    'rankine:nether_quartz_ore',
    'occultism:iesnium_ore',
    'blue_skies:everbright_diopside_ore',
    'blue_skies:everbright_pyrope_ore',
    'blue_skies:everbright_aquite_ore',
    'blue_skies:everbright_charoite_ore',
    'blue_skies:everbright_moonstone_ore',
    'blue_skies:falsite_ore',
    'blue_skies:ventium_ore',
    'rankine:acanthite_ore',
    'rankine:galena_ore',
    'minecraft:deepslate'
  ].forEach((ore) => {
    event.addBlockLootModifier(ore).removeLoot('/.*/');
    event.addBlockLootModifier(ore).addLoot(ore);
  });

  event
    .addBlockLootModifier('rankine:sodium_chloride_block')
    .replaceLoot(
      'rankine:sodium_chloride_block',
      'rankine:sodium_chloride',
      true
    );

  event
    .addBlockLootModifier('minecraft:wheat')
    .replaceLoot('minecraft:wheat', 'kubejs:wheat', true);

  event
    .addBlockLootModifier('rankine:malachite_ore')
    .modifyLoot(Ingredient.getAll(), (itemStack) => {
      itemStack.setCount(1);
      return itemStack;
    });
});
