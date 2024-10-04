onEvent('item.modification', (event) => {
  function setProtection(id, protection, pieces) {
    if (!pieces) pieces = ['helmet', 'chestplate', 'leggings', 'boots'];

    pieces.forEach((piece, index) => {
      try {
        event.modify(`${id}_${piece}`, (modification) => {
          modification.setArmorProtection(protection[index]);
        });
      } catch (error) {
        console.log(error);
      }
    });
  }

  // ! Advancement Armor Tiers
  setProtection('minecraft:leather', [1, 2, 1, 1]);
  setProtection('charcoal_pit:copper', [1, 2, 2, 1]);
  setProtection('charcoal_pit:bronze', [1, 3, 2, 1]);
  setProtection('minecraft:iron', [1, 3, 2, 2]);
  setProtection('blue_skies:charoite', [2, 5, 3, 2]);
  setProtection('undergarden:utherium', [3, 7, 5, 3]);
  setProtection('blue_skies:horizonite', [3, 8, 6, 3]);
  setProtection('malum:soul_stained_steel', [3, 7, 6, 2]);
  setProtection('twilightforest:fiery', [5, 10, 7, 5]);
  setProtection('minecraft:netherite', [6, 11, 7, 5]);
  setProtection('cataclysm:ignitium', [7, 11, 7, 5]);
  setProtection('hem:steampunkoutfit', [7, 11, 8, 5]);
  setProtection('botania:manasteel', [8, 12, 8, 6]);
  setProtection(
    'naturesaura:sky',
    [8, 12, 9, 6],
    ['helmet', 'chest', 'pants', 'shoes']
  );
  setProtection('botania:terrasteel', [8, 13, 10, 7]);
  setProtection('rankine:brigandine', [7, 12, 7, 5]);
  setProtection('pneumaticcraft:compressed_iron', [8, 12, 7, 6]);
  setProtection('charcoal_pit:orichalcum', [9, 15, 8, 6]);
  setProtection('minecraft:diamond', [10, 16, 12, 9]);
  setProtection(
    'mekanism:mekasuit',
    [15, 23, 17, 12],
    ['helmet', 'bodyarmor', 'pants', 'boots']
  );
  setProtection('pneumaticcraft:pneumatic', [10, 17, 11, 9]);

  // ! Balancing Armor Tiers
  setProtection('tconstruct:travelers', [2, 3, 2, 3]);
  setProtection('blue_skies:aquite', [1, 5, 2, 2]);
  setProtection('blue_skies:pyrope', [2, 5, 2, 2]);
  setProtection('blue_skies:diopside', [2, 5, 2, 2]);
  setProtection(
    'naturesaura:infused_iron',
    [2, 6, 5, 2],
    ['helmet', 'chest', 'pants', 'shoes']
  );
  setProtection('undergarden:cloggrum', [2, 6, 5, 3]);
  setProtection('undergarden:froststeel', [3, 7, 6, 2]);
  setProtection('twilightforest:ironwood', [3, 9, 6, 3]);
  setProtection('twilightforest:arctic', [3, 9, 6, 3]);
  setProtection('twilightforest:yeti', [4, 9, 6, 3]);
  setProtection('twilightforest:steeleaf', [4, 9, 7, 3]);
  setProtection('twilightforest:knightmetal', [5, 10, 7, 4]);
  setProtection('tconstruct:plate', [7, 12, 6, 5]);
  setProtection('botania:elementium', [8, 13, 11, 7]);
});
