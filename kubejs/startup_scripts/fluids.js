onEvent('fluid.registry', (event) => {
  function fluids(config) {
    global.flat(config).forEach((fluid) => {
      if (fluid.thin)
        event
          .create(fluid.id)
          .thinTexture(fluid.color)
          .bucketColor(fluid.color)
          .displayName(fluid.name || global.toTitleCase(fluid.id));
      else
        event
          .create(fluid.id)
          .thickTexture(fluid.color)
          .bucketColor(fluid.color)
          .displayName(fluid.name || global.toTitleCase(fluid.id));
    });
  }

  fluids({
    chapter_1: {
      leather: [{ id: 'tanning_fluid', color: 0x8b4513, thin: true }]
    },
    chapter_2: {
      misc: [
        { id: 'molten_ventium', color: 0xcd3700 },
        { id: 'molten_falsite', color: 0x6a0dad },
        { id: 'molten_charoite', color: 0x9a88d3 },
        { id: 'molten_aquite', color: 0xadd8e6 },
        { id: 'freezing_sap', color: 0xe0ffff, thin: true },
        { id: 'molten_sterling_silver', color: 0xc0c0c0 },
        { id: 'molten_crystal_glass', color: 0xe6f0fa },
        { id: 'molten_midnight_glass', color: 0x0a0f0d }
      ]
    },
    chapter_3: {
      misc: [
        { id: 'molten_froststeel', color: 0xb0e0e6 },
        { id: 'molten_cloggrum', color: 0xa0522d },
        { id: 'molten_regalium', color: 0xd4af37 },
        { id: 'molten_utherium', color: 0x8b0000 },
        { id: 'molten_forgotten_metal', color: 0x40e0d0 },
        { id: 'molten_ironwood', color: 0x8b7e66 },
        { id: 'molten_steeleaf', color: 0x4f7942 },
        { id: 'molten_horizonite', color: 0xff6600 },
        { id: 'fiery_blood', color: 0x990000, thin: true },
        { id: 'fiery_tears', color: 0x9b111e, thin: true },
        { id: 'fiery_essence', color: 0x9b111e, thin: true }
      ]
    },
    chapter_4: {
      blaze_cake: [
        { id: 'liquid_tau', color: 0xffca00 },
        { id: 'berry_juice', color: 0xb183b1, thin: true },
        { id: 'carbonate_slurry', color: 0x8b8378, thin: true },
        { id: 'blaze_cake_batter', color: 0xff5722 },
        { id: 'wine', color: 0x4e032b, thin: true }
      ],
      chromatic_compound: [
        { id: 'tar_slurry', color: 0x1e272e },
        { id: 'pure_tar', color: 0x140101 },
        { id: 'mysterious_adhesive', color: 0x9e9e9e },
        { id: 'crimson_resin', color: 0xdc143c, thin: true },
        { id: 'warped_resin', color: 0x008b8b, thin: true },
        { id: 'hellish_resin', color: 0xb22222, thin: true },
        { id: 'compost', color: 0x635147 },
        { id: 'polar_pigments', color: 0xd3e1eb, thin: true },
        { id: 'blue_dye', color: 0x1e3799, thin: true },
        { id: 'light_blue_dye', color: 0x82ccdd, thin: true },
        { id: 'cyan_dye', color: 0x079992, thin: true },
        { id: 'white_dye', color: 0xffffff, thin: true },
        { id: 'verdant_variants', color: 0x394827, thin: true },
        { id: 'green_dye', color: 0x009432, thin: true },
        { id: 'lime_dye', color: 0xc4e538, thin: true },
        { id: 'gray_dye', color: 0x485460, thin: true },
        { id: 'black_dye', color: 0x1e272e, thin: true },
        { id: 'sunset_shades', color: 0x9f392b, thin: true },
        { id: 'red_dye', color: 0xc23616, thin: true },
        { id: 'orange_dye', color: 0xffa801, thin: true },
        { id: 'yellow_dye', color: 0xe1b12c, thin: true },
        { id: 'brown_dye', color: 0x7c3f00, thin: true },
        { id: 'twilight_tones', color: 0xad70a4, thin: true },
        { id: 'purple_dye', color: 0x82589f, thin: true },
        { id: 'magenta_dye', color: 0xb33771, thin: true },
        { id: 'pink_dye', color: 0xfd7272, thin: true },
        { id: 'light_gray_dye', color: 0xcad3c8, thin: true }
      ],
      misc: [{ id: 'molten_iesnium', color: 0x6daed4 }]
    },
    chapter_5_1: {
      gingerbread_man: [
        { id: 'wet_ingredients', color: 0x6f4e37 },
        { id: 'molasses', color: 0x6f4e37 },
        { id: 'lard', color: 0xf5f5f5 },
        { id: 'sugar_cane_juice', color: 0xd2e69c, thin: true }
      ],
      happy_meal: {
        fries_and_ketchup: [
          { id: 'beef_oil', color: 0xcd853f },
          { id: 'beef_tallow', color: 0xf5f5dc },
          { id: 'corn_oil', color: 0xf5f5dc },
          { id: 'soybean_oil', color: 0xf5f5dc },
          { id: 'sodium_hydroxide', color: 0xb22222 },
          { id: 'aqua_regia', color: 0xf5f5dc },
          { id: 'nitric_acid', color: 0xb22222 },
          { id: 'hydrochloric_acid', color: 0xb22222 },
          { id: 'potassium_hydroxide', color: 0xb22222 },
          { id: 'ketchup', color: 0xb22222 },
          { id: 'tomato_paste', color: 0xb22222 }
        ],
        bottle_of_soda: [
          { id: 'soda', color: 0x98fb98 },
          { id: 'carbonated_water', color: 0xe0ffff, thin: true },
          { id: 'soda_syrup', color: 0x32cd32 },
          { id: 'high_fructose_corn_syrup', color: 0xf5f5dc },
          { id: 'natural_flavors', color: 0x5a189a },
          { id: 'corn_syrup', color: 0xf5f5dc },
          { id: 'corn_starch_slurry', color: 0xf5f5dc },
          { id: 'citric_acid', color: 0xf5f5dc },
          { id: 'vanilla_extract', color: 0x4b382a },
          { id: 'blackberry_extract', color: 0x4d033b },
          { id: 'lemon_extract', color: 0xfffacd },
          { id: 'ender_extract', color: 0x00a383 },
          { id: 'beer', color: 0x8b4513 }
        ],
        cheeseburger: [
          { id: 'mayonnaise', color: 0xf8f5e3 },
          { id: 'mustard', color: 0xffdb58 },
          { id: 'rennet', color: 0xffdb58 },
          { id: 'whey', color: 0xf5f5dc },
          { id: 'curdled_milk', color: 0xf5f5dc },
          { id: 'pasteurized_milk', color: 0xf5f5dc },
          { id: 'skim_milk', color: 0xf5f5dc }
        ]
      },
      nutrient_paste: [
        { id: 'antibiotics', color: 0xe6e6e6, thin: true },
        { id: 'vitamin_a', color: 0xffaacc },
        { id: 'vitamin_b1', color: 0xffaacc },
        { id: 'vitamin_b2', color: 0xffaacc },
        { id: 'vitamin_b3', color: 0xffaacc },
        { id: 'vitamin_b5', color: 0xffaacc },
        { id: 'vitamin_b6', color: 0xffaacc },
        { id: 'vitamin_b7', color: 0xffaacc },
        { id: 'vitamin_b9', color: 0xffaacc },
        { id: 'vitamin_b12', color: 0xffaacc },
        { id: 'vitamin_d', color: 0xffaacc },
        { id: 'vitamin_e', color: 0xffaacc },
        { id: 'vitamin_k', color: 0xffaacc },

        // Gelatin
        { id: 'gelatin', color: 0xffaacc },
        { id: 'pure_meaty_acid', color: 0xffaacc },
        { id: 'turbid_meaty_acid', color: 0xffaacc },
        { id: 'meaty_acid', color: 0xffaacc },

        // Probiotics
        { id: 'yogurt', color: 0xffaacc },
        { id: 'bone_broth', color: 0xffaacc },

        // Miracle Oil

        { id: 'pork_oil', color: 0xffaacc },
        { id: 'sheep_oil', color: 0xffaacc },
        { id: 'chicken_oil', color: 0xffaacc },
        { id: 'fish_oil', color: 0xffaacc },
        { id: 'pink_oil', color: 0xffaacc },
        { id: 'miracle_oil', color: 0xffaacc }
      ]
    },
    chapter_5_2: {
      misc: [{ id: 'crystallized_sap', color: 0xd896ff, thin: true }]
    }
  });
});
