// priority: 205

// get mods list from `ingredient-list-mod-sort-order.ini` in `config/jei` and group them into chapters

onEvent('tags.items', (event) => {
  function setModsChapter(chapter, mods) {
    mods.forEach((mod) => {
      Ingredient.of(`@${mod}`).itemIds.forEach((id) => {
        event.add(`im:${chapter}`, id);
      });
    });
  }

  setModsChapter('chapter_1', [
    'brickhopper',
    'thirst',
    'charcoal_pit',
    'naturescompass',
    'paraglider',
    'rankine',
    'minecraft',
    'realistictorches',
    'justaraftmod',
    'antiqueatlas',
    'kubejs',
    'death_compass',
    'gravestone',
    'salt',
    'labels',
    'ceramics'
  ]);
  setModsChapter('chapter_2', [
    'farmersdelight',
    'strawgolem',
    'cold_sweat',
    'blue_skies',
    'smallships',
    'tconstruct',
    'gateways',
    'paragon_textiles',
    'farmersrespite',
    'modonomicon',
    'totemic',
    'astikorcarts'
  ]);
  setModsChapter('chapter_3', [
    'comforts',
    'ironchest',
    'hexerei',
    'akashictome',
    'experienceobelisk',
    'storagedrawers',
    'twilightforest',
    'explorerscompass',
    'occultism',
    'undergarden',
    'twilighttweaks',
    'malum',
    'twilightdelight',
    'undergardendelight'
  ]);
  setModsChapter('chapter_4', [
    'bloodmagic',
    'create',
    'createconnected',
    'constructionwand',
    'chunkloaders',
    'framedblocks',
    'adchimneys',
    'waystones',
    'createaddition',
    'architects_palette',
    'chipped',
    'create_enchantment_industry',
    // 'create_connected',
    'vintageimprovements',
    'nethersdelight'
  ]);
  setModsChapter('chapter_5_1', [
    'sliceanddice',
    'energeticsheep',
    'productivebees',
    'the_bumblezone',
    'measurements',
    'biomancy',
    'industrialforegoing',
    // 'apple_cows',
    'create_confectionery',
    'create_central_kitchen',
    'croptopia',
    'endersdelight',
    'botania'
  ]);
  setModsChapter('chapter_5_2', [
    'hem',
    'immersive_aircraft',
    'simplylight',
    'morphtool',
    'compactmachines',
    'compactcrafting',
    'immersiveengineering',
    'pneumaticcraft',
    'compressedcreativity',
    'immersivepetroleum'
  ]);
  setModsChapter('chapter_6', ['canned_goods']);
  setModsChapter('chapter_7_1', [
    'za',
    'upgrade_aquatic',
    'naturalist',
    'crittersandcompanions',
    'cnb',
    'chemlib',
    'adpother',
    'extendedcrafting',
    'cataclysm',
    'ecofriendly',
    'mythicbotany',
    'tofucraft',
    'mekanismgenerators',
    'mekanism',
    'naturesaura',
    'endrem',
    'ppr'
  ]);
  // setModsChapter('chapter_7_2', ['bloodsmeltery', 'infectum']);
});
