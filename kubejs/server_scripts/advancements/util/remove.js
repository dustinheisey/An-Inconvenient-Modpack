// ? Remove - get rid of advancement pages from other mods

onEvent('server.datapack.high_priority', (event) => {
  function removeAdvancements(ids) {
    ids.forEach((id) => {
      let [mod, path] = id.split(':');
      event.addJson(`${mod}:advancements/${path}.json`, {
        criteria: {
          impossible: {
            trigger: 'minecraft:impossible'
          }
        }
      });
    });
  }

  removeAdvancements([
    'immersivepetroleum:main/root',
    'biomancy:biomancy/root',
    'architects_palette:main/root',
    'lootr:root',
    'botania:challenge/root',
    'botania:main/root',
    'charcoal_pit:charcoal_pit/root',
    'create:root',
    'dungeons_arise:wda_root',
    'endrem:main/root',
    'minecraft:adventure/root',
    'minecraft:biomancy/root',
    'minecraft:end/root',
    'minecraft:husbandry/root',
    'minecraft:nether/root',
    'minecraft:recipes/root',
    'minecraft:story/root',
    'naturesaura:root',
    'occultism:occultism/familiar/root',
    'paraglider:root',
    'pneumaticcraft:root',
    'rankine:challenges/rankine_challenges',
    'rankine:story/root',
    'relics:obtain/root',
    'tconstruct:tools/materials_and_you',
    'trashcans:trash_can',
    'the_bumblezone:the_bumblezone/root',
    'compactmachines:root',
    'hem:meltedsteelanvancement',
    'hem:cracked_stone',
    'ecofriendly:welcome_to_ecofreindly',
    'trajanscore:parts/trajanstanks',
    'undergarden:undergarden/root',
    'immersiveengineering:tools/tools_root',
    'immersiveengineering:multiblocks/multiblocks_root',
    'immersiveengineering:main/main_root',
    'viescraftmachines:root',
    'crockpot:root',
    'energeticsheep:root',
    'blue_skies:root',
    'twilightforest:root',
    'farmersdelight:main/root',
    'minerslung:root',
    'cataclysm:root',
    'cold_sweat:root',
    'mythicbotany:mythicbotany/root',
    'tofucraft:tofucraft/roots'
  ]);
});
