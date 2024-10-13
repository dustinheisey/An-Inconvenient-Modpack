onEvent('item.registry', (event) => {
  function items(config) {
    global.flat(config).forEach((item) => {
      // console.log('typeofitem?' + typeof item);
      if (typeof item === 'string') {
        event.create(item).displayName(global.toTitleCase(item));
        // console.log('Item is a string:' + item);
      } else if (typeof item === 'object' && item !== null) {
        event.create(item.id).displayName(item.label);
        // console.log('Item is an object with ID:' + item.id);
      }
    });
  }

  items({
    chapter_1: {
      bandage: ['mushroom_strip'],
      leather: [
        'rotten_brain',
        'stitched_hide',
        'salted_hide',
        'dried_hide',
        'wet_tanned_hide',
        'rotten_jerky'
      ],
      pottery: [
        'dry_unfired_brick',
        'unfired_refractory_brick',
        'dry_unfired_refractory_brick',
        'high_fire_clay_ball',
        'unfired_high_refractory_brick',
        'dry_unfired_high_refractory_brick',
        'ultra_high_fire_clay_ball',
        'unfired_ultra_high_refractory_brick',
        'dry_unfired_ultra_high_refractory_brick',
        'grog',
        'porcelain_glaze',
        'mortar',
        'pestle',
        ''
      ],
      trash: [
        'electrical_wiring',
        'circuit_board',
        'pipe',
        'copper_tubing',
        'tin_can',
        'old_toy',
        'tin_foil',
        'plumbing_joint',
        'battery',
        'old_paint_chip',
        'medical_equipment',
        'spent_bullet',
        'camera_film',
        'silver_Necklace',
        'old_silverware',
        'amethyst_ring',
        'key_chain',
        'watch',
        'radio',
        'lightbulb',
        'scrap_metal',
        'car_part',
        'wrench',
        'nail'
      ],
      goddess_statue: ['goddess_heart']
    },
    chapter_2: {
      smeltery: [
        'dry_unfired_seared_brick',
        'unfired_seared_brick',
        'grout_ball',
        'kiln_feed'
      ],
      aura_eye: ['iridescent_scales'],
      misc: [
        'madder_root',
        'juniper_bark',
        'onion_skin',
        'glass_tube',
        'wheat',
        'everbright_token',
        { id: 'everbright_lost_page', label: 'Frigid Lost Page' },
        { id: 'everbright_lost_story', label: "A Grandmother's Story" }
      ]
    },
    chapter_3: {
      misc: [
        'chicken_carcass',
        'wheat_flakes',
        'cinder_dust',
        'undergarden_token',
        'everdawn_token',
        'twilight_token',
        'fiery_dust',
        { id: 'undergarden_lost_page', label: 'Slimy Lost Page' },
        { id: 'everdawn_lost_page', label: 'Tattered Lost Page' },
        { id: 'twilight_lost_page', label: 'Dark Lost Page' },
        { id: 'undergarden_lost_story', label: 'The Virus' },
        { id: 'everdawn_lost_story', label: 'Climate Chaos' },
        { id: 'twilight_lost_story', label: 'Rise of A Dictator' }
      ]
    },
    chapter_4: {
      blaze_cake: [
        'turquoise_pebble',
        'lunar_pebble',
        'deadrock_pebble',
        'mixed_pebble',
        'calcium_carbonate_dust',
        'trona_dust',
        'baking_soda',
        'soda_ash',
        'crushed_trona',
        'cake_mix',
        'tartaric_acid',
        'cream_of_tartar',
        'baking_powder',
        'egg_whip',
        'cinder_ingot'
      ],
      chromatic_compound: [
        'drop_of_tar',
        'inert_compound',
        'witherite_dust',
        'potassium_nitrate_chunks',
        'mixed_dust',
        'brass_dust',
        'electrum_dust'
      ],
      misc: [
        'pig_carcass',
        'wheat_meal',
        'wheat_flour',
        'nether_token',
        { id: 'nether_lost_page', label: 'Burnt Lost Page' },
        { id: 'nether_lost_story', label: 'A Dire Warning' }
      ]
    },
    chapter_5_1: {
      gingerbread_man: [
        'lard',
        'bone_saw',
        'butcher_knife',
        'skinning_knife',
        'gut_knife',
        { id: 'elements_rune', label: 'Rune of Elements' },
        'pork_fat',
        'curved_manasteel_sheet',
        'round_manasteel_sheet',
        'manasteel_sheet',
        'beehive_cover',
        'empty_brood_box',
        'brood_box',
        'empty_frame',
        'shadow_steel_casing_panel',
        'shadow_steel_casing_strip',
        'shadow_steel_casing_knob',
        'shadow_steel_casing_frame',
        'ginger_powder',
        'cinnamon_powder',
        'nutmeg_powder',
        'cookie_cutter',
        'multigrain_flour',
        'dry_ingredients',
        'lard_whip',
        'barley_flakes',
        'sorghum_flakes',
        'millet_flakes',
        'oat_flakes',
        'rice_flakes',
        'rye_flakes',
        'soy_flakes',
        'barley_meal',
        'millet_meal',
        'oat_meal',
        'rice_meal',
        'rye_meal',
        'sorghum_meal',
        'soy_meal',
        'soy_flour',
        'brown_sugar'
      ],
      happy_meal: {
        fries_and_ketchup: [
          'ketchup',
          'fries_and_ketchup',
          'uncooked_fries',
          'ton_of_salt',
          'skinned_potato',
          'washed_potato',
          'beef_fat',
          'hydrogenated_soybean_oil',
          'distillers_grain',
          'palladium_catalyst',
          'sodium_tetrachloropalladate',
          'potassium_borohydride',
          'ketchup_spices',
          'skinned_tomato',
          'washed_tomato',
          'onion_powder',
          'garlic_powder',
          'celery_powder',
          'mustard_powder'
        ],
        bottle_of_soda: [
          'bottle_of_soda',
          'pectin_gel',
          'fructose',
          'corn_syrup',
          'maltodextrin',
          'corn_starch',
          'alpha_amylase',
          'gluten',
          'corn_meal',
          'corn_flakes',
          'specimen_264',
          'bacillus_subtilis',
          'petri_dish_264',
          'sourdough_starter',
          'fungal_spores',
          'caffeine_crystals',
          'apple_peel',
          'citric_acid',
          'specimen_143',
          'petri_dish_143',
          'empty_petri_dish',
          'yeast'
        ],
        cheeseburger: [
          'onion_slices',
          'burger_bun',
          'tomato_slices',
          'sesame_seeds',
          'all_purpose_flour',
          'ripe_mix',
          'ripe_ferment',
          'bubbly_mix',
          'bubbly_ferment',
          'active_mix',
          'active_ferment',
          'starter_mix',
          'trimmed_beef',
          'prime_beef',
          'subprime_beef',
          'secondary_beef',
          'aged_cow_carcass',
          'washed_cow_carcass',
          'gutted_cow_carcass',
          'skinned_cow_carcass',
          'drained_cow_carcass',
          'cow_carcass',
          { id: 'monachopsis_token', label: 'Token of Monachopsis' },
          { id: 'seasons_rune', label: 'Rune of Seasons' },
          'strange_dna',
          'egg_yolk',
          'egg_whites',
          'brined_cheese_curds',
          'pressed_cheese_curds',
          'cheese_curds',
          'lactobacillus',
          'rennet',
          'cream',
          'aged_stomach_slice',
          'stomach_slice',
          'stomach',
          'olive_jar',
          'empty_jar',
          'specimen_725',
          'petri_dish_725',
          'ground_beef',
          'partially_ground_beef'
        ],
        misc: ['happy_meal']
      },
      nutrient_paste: {
        miracle_ground_beef: [
          'ground_miracle_beef',
          'partially_ground_miracle_beef',
          'ground_high_grade_beef',
          'partially_ground_high_grade_beef',
          'ground_medium_grade_beef',
          'partially_ground_medium_grade_beef',
          { id: 'sins_rune', label: 'Rune of Sins' },
          { id: 'sonder_token', label: 'Token of Sonder' },
          { id: 'schadenfreude_token', label: 'Token of Schadenfreude' },
          { id: 'kenopsia_token', label: 'Token of Kenopsia' },
          { id: 'kuebiko_token', label: 'Token of Kuebiko' },

          { id: 'confusion_token', label: 'Token of confusion' },
          { id: 'loneliness_token', label: 'Token of loneliness' },
          { id: 'sadness_token', label: 'Token of sadness' },

          { id: 'fear_token', label: 'Token of fear' },
          { id: 'curiosity_token', label: 'Token of curiosity' },

          { id: 'wonder_token', label: 'Token of wonder' },
          { id: 'empathy_token', label: 'Token of empathy' },
          { id: 'melancholy_token', label: 'Token of melancholy' },

          { id: 'joy_token', label: 'Token of joy' },
          { id: 'guilt_token', label: 'Token of guilt' },
          { id: 'contempt_token', label: 'Token of contempt' },

          { id: 'exhaustion_token', label: 'Token of exhaustion' },
          { id: 'compassion_token', label: 'Token of compassion' },
          { id: 'despair_token', label: 'Token of despair' }
        ],
        misc: [
          'flesh_bits',
          'dna',
          'hungry_flesh_bits',
          'hungry_dna',
          'primordial_flesh_bits',
          'primordial_dna',
          'malignant_flesh_bits',
          'malignant_dna',

          'ground_miracle_meat',
          'miracle_meat_chunks',
          'trimmed_miracle_meat',
          'prime_miracle_meat',
          'subprime_miracle_meat',
          'secondary_miracle_meat',
          'aged_miracle_carcass',
          'frozen_miracle_carcass',
          'washed_miracle_carcass',
          'gutted_miracle_carcass',
          'skinned_miracle_carcass',
          'drained_miracle_carcass',
          'miracle_carcass',

          // Gelatin
          'gelatin_noodles',
          'pig_skin',
          'sheep_skin',
          'cow_skin',
          'skin_chunks',
          'empty_pill',
          'pill_mold',

          // Probiotics
          'bifidobacterium',
          'saccharomyces_boulardii',
          'streptococcus_thermophilus',
          'petri_dish',
          'growth_medium',
          'hungry_growth_medium',
          'primordial_growth_medium',
          'malignant_growth_medium',
          'hungry_flesh',
          'primordial_flesh',
          'malignant_flesh',
          'probiotics',

          // Miracle Carbs
          'dextrose',
          'roasted_cryo_root',
          'cryo_root_flakes',
          'cryo_root_meal',
          'cryo_root_flour',
          'underbean_flakes',
          'underbean_meal',
          'underbean_flour',
          'roasted_fiery_bean',
          'fiery_bean_flakes',
          'fiery_bean_meal',
          'fiery_bean_flour',
          'dried_thorn_rose',
          'thorn_rose_flakes',
          'thorn_rose_meal',
          'thorn_rose_flour',
          'dried_propelplant',
          'propelplant_flakes',
          'propelplant_meal',
          'propelplant_flour',
          'miracle_carbs',

          // Miracle Spices
          'smoked_paprika',
          'cumin',
          'coriander',
          'turmeric',
          'saffron',
          'grains_of_paradise',
          'sumac',
          'cardamon',
          'miracle_spice_mix',

          // Fiber
          'v12_vegetable_blast',
          'greens',
          'vegetables',
          'mushrooms',
          'beans',
          'ancient_bark',
          'fiber',

          'vitamin_c_powder',
          'all_purpose_starch',
          'wheat_starch',
          'oat_starch',
          'sorghum_starch',
          'millet_starch',
          'rye_starch',
          'barley_starch',
          'soy_starch',
          'multivitamin_pill',
          'antibiotics_pill',
          'medium_grade_meat',
          'high_grade_meat',
          'miracle_meat',
          'vitamin_powder_blend',
          'mineral_powder_blend',
          'multivitamin_powder',
          'vitamin_a_powder',
          'vitamin_b1_powder',
          'vitamin_b2_powder',
          'vitamin_b3_powder',
          'vitamin_b5_powder',
          'vitamin_b6_powder',
          'vitamin_b7_powder',
          'vitamin_b9_powder',
          'vitamin_b12_powder',
          'vitamin_d_powder',
          'vitamin_e_powder',
          'vitamin_k_powder',
          'calcium_powder',
          'chloride_powder',
          'chromium_powder',
          'copper_powder',
          'fluoride_powder',
          'iodine_powder',
          'iron_powder',
          'magnesium_powder',
          'manganese_powder',
          'molybdenum_powder',
          'nickel_powder',
          'phosphorus_powder',
          'potassium_powder',
          'selenium_powder',
          'sodium_powder',
          'zinc_powder',

          // idk yet TODO
          'miracle_thickeners',
          'cubed_miracle_beef',
          'miracle_cow_carcass',
          'washed_miracle_cow_carcass',
          'gutted_miracle_cow_carcass',
          'skinned_miracle_cow_carcass',
          'drained_miracle_cow_carcass',
          'aged_miracle_cow_carcass',
          'cubed_high_grade_beef',
          'high_grade_cow_carcass',
          'washed_high_grade_cow_carcass',
          'gutted_high_grade_cow_carcass',
          'skinned_high_grade_cow_carcass',
          'drained_high_grade_cow_carcass',
          'aged_high_grade_cow_carcass',
          'cubed_medium_grade_beef',
          'medium_grade_cow_carcass',
          'washed_medium_grade_cow_carcass',
          'gutted_medium_grade_cow_carcass',
          'skinned_medium_grade_cow_carcass',
          'drained_medium_grade_cow_carcass',
          'aged_medium_grade_cow_carcass',
          'prime_miracle_beef',
          'subprime_miracle_beef',
          'secondary_miracle_beef',
          'prime_high_grade_beef',
          'subprime_high_grade_beef',
          'secondary_high_grade_beef',
          'prime_medium_grade_beef',
          'subprime_medium_grade_beef',
          'secondary_medium_grade_beef',

          'trimmed_miracle_beef',
          'trimmed_high_grade_beef',
          'trimmed_medium_grade_beef',

          'miracle_feed',
          'high_grade_feed',
          'medium_grade_feed',
          'primal_dna',
          'miracle_carbohydrates'
        ]
      },
      misc: [
        'sheep_carcass',
        'bumblezone_token',
        { id: 'bumblezone_lost_page', label: 'Sticky Lost Page' },
        { id: 'bumblezone_lost_story', label: 'The Last Flower' }
      ]
    },
    chapter_5_2: {
      misc: [
        'silica_dust',
        'blueleaf_token',
        'catalyst',
        { id: 'blueleaf_lost_page', label: 'Sooty Lost Page' },
        { id: 'blueleaf_lost_story', label: 'Welcome to Blueleaf' }
      ]
    },
    chapter_6: {
      gold_coin: [
        'copper_coin',
        'tin_coin',
        'iron_coin',
        'lead_coin',
        'silver_coin',
        'zinc_coin',
        'aluminum_coin',
        'gold_coin'
      ]
    },
    chapter_7_1: {
      misc: [
        'end_token',
        'restoration_token',
        'earth_token',
        { id: 'realms_rune', label: 'Rune of Realms' }
      ]
    },
    chapter_7_2: {
      platinum_coin: ['steel_coin', 'nickel_coin', 'platinum_coin'],
      misc: ['hell_token']
    }
  });
});

onEvent('item.modification', (event) => {
  event.modify('minecraft:ender_pearl', (item) => {
    item.maxStackSize = 64;
    item.fireResistant = true;
  });

  event.modify('kubejs:rotten_jerky', (item) => {
    item.foodProperties = (food) => {
      food.hunger(3);
      food.saturation(1);
      food.meat(true);
      food.alwaysEdible(false);
      food.fastToEat(false);
    };
  });
});
