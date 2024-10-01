// priority: 302
const config = {
  chapter_1: {
    stone: [
      'rankine:malachite_ore',
      'rankine:cassiterite_ore',
      'salt:deepslate_rock_salt_ore',
      'salt:rock_salt_ore'
    ],
    iron: [
      'minecraft:amethyst_cluster',
      'minecraft:large_amethyst_bud',
      'minecraft:medium_amethyst_bud',
      'minecraft:small_amethyst_bud',
      'minecraft:budding_amethyst',
      'minecraft:amethyst_block',
      'rankine:plumbago_ore',
      'rankine:acanthite_ore',
      'rankine:galena_ore'
    ]
  },
  chapter_2: {
    stone: [
      'blue_skies:everbright_pyrope_ore',
      'blue_skies:everbright_aquite_ore',
      'blue_skies:falsite_ore',
      'blue_skies:ventium_ore'
    ],
    iron: [
      'blue_skies:everbright_diopside_ore',
      'blue_skies:everbright_charoite_ore',
      'blue_skies:everbright_moonstone_ore'
    ]
  },
  chapter_3: {
    stone: [
      'undergarden:depthrock_coal_ore',
      'undergarden:shiverstone_coal_ore',
      'blue_skies:everdawn_pyrope_ore',
      'blue_skies:everdawn_aquite_ore',
      'blue_skies:horizonite_ore'
    ],
    iron: [
      'blue_skies:everdawn_diopside_ore',
      'blue_skies:everdawn_charoite_ore',
      'blue_skies:everdawn_moonstone_ore',
      'undergarden:depthrock_cloggrum_ore',
      'undergarden:shiverstone_cloggrum_ore',
      'undergarden:shiverstone_froststeel_ore',
      'undergarden:depthrock_utherium_ore',
      'undergarden:shiverstone_utherium_ore',
      'undergarden:tremblecrust_utherium_ore',
      'rankine:cinnabar_ore',
      'rankine:lazurite_ore'
    ],
    diamond: [
      'undergarden:depthrock_regalium_ore',
      'undergarden:shiverstone_regalium_ore'
    ]
  },
  chapter_4: {
    stone: [
      'malum:natural_quartz_ore',
      'malum:deepslate_quartz_ore',
      'rankine:native_sulfur_ore',
      'rankine:nether_quartz_ore',
      'malum:blazing_quartz_ore'
    ],
    iron: [
      'rankine:sphalerite_ore',
      'rankine:bauxite_ore',
      'rankine:nether_gold_ore',
      'malum:block_of_cthonic_gold'
    ],
    diamond: [
      'occultism:iesnium_ore_natural',
      'occultism:iesnium_ore',
      'rankine:cobaltite_ore',
      'rankine:ilmenite_ore',
      'rankine:pentlandite_ore',
      'minecraft:ancient_debris'
    ]
  },
  chapter_5_2: {
    stone: ['rankine:bituminous_ore', 'rankine:subbituminous_ore'],
    diamond: ['rankine:uraninite_ore']
  },
  chapter_7_1: {
    stone: ['mekanism:fluorite_ore', 'mekanism:deepslate_fluorite_ore'],
    diamond: [
      'mythicbotany:elementium_ore',
      'mythicbotany:dragonstone_ore',
      'mekanism:osmium_ore',
      'tofucraft:ore_tofugem',
      'tofucraft:ore_tofu_diamond',
      'tofucraft:tofuslate_tofu_diamond_ore'
    ]
  },
  chapter_7_2: {
    diamond: ['rankine:beryl_ore', 'bloodmagic:dungeon_ore']
  }
};

onEvent('tags.items', (event) => {
  Object.keys(config).forEach((chapter) => {
    Object.keys(config[chapter]).forEach((level) => {
      config[chapter][level].forEach((ore) => {
        chapters.forEach((chapter) => {
          event.remove(`im:${chapter}`, ore);
        });
        event.add(`im:ores/${chapter}`, ore);
      });
    });
  });
});

onEvent('tags.blocks', (event) => {
  Object.keys(config).forEach((chapter) => {
    Object.keys(config[chapter]).forEach((level) => {
      config[chapter][level].forEach((ore) => {
        event.remove(`minecraft:needs_stone_tool`, ore);
        event.remove(`minecraft:needs_iron_tool`, ore);
        event.remove(`minecraft:needs_diamond_tool`, ore);
        event.add(`minecraft:needs_${level}_tool`, ore);
      });
    });
  });
});
