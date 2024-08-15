onEvent('recipes', event => {
  event.remove({
    output: ['naturesaura:sky_ingot'],
    type: 'naturesaura:offering',
  });
  event.custom({
    type: 'naturesaura:offering',
    input: {item: 'botania:manasteel_ingot'},
    start_item: {item: 'naturesaura:calling_spirit'},
    output: {item: 'naturesaura:sky_ingot'},
  });

  event.custom({
    type: 'botania:orechid',
    input: 'rankine:asphalt',
    output: {type: 'block', block: 'minecraft:tuff'},
    weight: 67415,
  });

  event.custom({
    type: 'botania:orechid_ignem',
    input: 'rankine:red_asphalt',
    output: {type: 'block', block: 'rankine:komatiitic_tuff'},
    weight: 3635,
  });
  // event.custom({
  //   type: 'bloodmagic:altar',
  //   input: {
  //     item: 'bloodmagic:ingot_hellforged',
  //   },
  //   altarSyphon: 500000,
  //   upgradeLevel: 4,
  //   consumptionRate: 500,
  //   drainRate: 500,
  //   output: {
  //     item: 'bloodsmeltery:bloodbrass_ingot',
  //   },
  // });

  event.custom({
    type: 'immersiveengineering:fermenter',
    fluid: {
      fluid: 'kubejs:antibiotics',
      amount: 250,
    },
    input: {
      tag: 'forge:mushrooms',
    },
    energy: 6400,
  });

  event.shaped('naturesaura:calling_spirit', ['aba', 'cde', 'afa'], {
    a: 'bloodmagic:infusedslate',
    b: Item.of(
      'naturesaura:aura_bottle',
      '{stored_type:"naturesaura:overworld"}'
    ),
    c: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
    d: '#botania:runes',
    e: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
    f: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:other"}'),
  });

  event.custom({
    type: 'create:mechanical_crafting',
    result: {item: 'naturesaura:offering_table'},
    pattern: ['aa aa', ' aaa ', ' bcd ', ' efe ', 'eegee'],
    key: {
      a: 'naturesaura:infused_stone',
      b: 'naturesaura:token_joy',
      c: 'naturesaura:token_sorrow',
      d: 'naturesaura:token_fear',
      e: 'naturesaura:tainted_gold',
      f: 'naturesaura:token_anger',
      g: 'botania:rune_earth',
    },
  });

  event.custom({
    type: 'rankine:crushing',
    input: {
      item: 'minecraft:tuff',
    },
    type: 'rankine:crushing',
    guaranteed: [
      {
        weight: 20,
        remove: false,
      },
      {
        item: 'minecraft:cobblestone',
        weight: 80,
      },
      {
        item: 'minecraft:cobbled_deepslate',
        weight: 80,
      },
      {
        item: 'rankine:calcium_chloride',
        weight: 10,
        remove: false,
      },
      {
        item: 'rankine:calcite',
        weight: 8,
        remove: false,
      },
      {
        item: 'minecraft:quartz',
        weight: 2,
        remove: false,
      },
    ],
  });

  event.custom({
    type: 'rankine:crushing',
    input: {
      item: 'rankine:komatiitic_tuff',
    },
    type: 'rankine:crushing',
    guaranteed: [
      {
        weight: 20,
        remove: false,
      },
      {
        item: 'rankine:komatiite',
        weight: 80,
      },
      {
        item: 'rankine:greenschist',
        weight: 80,
      },
      {
        item: 'rankine:phosphorus',
        weight: 10,
        remove: false,
      },
    ],
  });

  // {
  //     input: "rankine:dark_gray_asphalt",
  //     output: "rankine:basaltic_tuff",
  // },
  // { input: "rankine:gray_asphalt", output: "rankine:andesitic_tuff" },
  // {
  //     input: "rankine:blue_asphalt",
  //     output: "rankine:rhyolitic_tuff",
  // },
  // {
  //     input: "rankine:green_asphalt",
  //     output: "rankine:kimberlitic_tuff",
  // },
  setMilestoneRecipes({
    id: 'nutrient_paste',
    recipe: () => {
      event.recipes.create.mixing('biomancy:nutrient_paste', [
        'kubejs:ground_miracle_meat',
        'kubejs:probiotics',
        'kubejs:miracle_thickeners',
        'kubejs:miracle_carbohydrates',
        Fluid.of('kubejs:miracle_oil', 1000),
        'kubejs:fiber',
        'kubejs:miracle_spice_mix',
      ]);
    },
    children: [
      // protein - miracle ground meat
      // carbohydrates - ?
      // fats - miracle oil - a bunch of different infused oils combined
      // vitamins - ethanol extracts
      // minerals - sulfuric acid extract from ground up minerals from flower
      // fiber - extract from all the grains in some complex process
      // grain flour is decomposed and then mixed with water and evaporated
      // probiotics - lots of complex stuff with decomposer biomancy stuff
      // spices & flavorings - miracle spice mix - all the spices combined
      // texture - gelatin
      {
        id: 'ground_miracle_meat', // same process as regular meat but with miracle cow.
        children: [
          {
            id: 'ground_miracle_beef',
            recipe: () => {
              event.recipes.create.crushing(
                'kubejs:ground_miracle_beef',
                'kubejs:cubed_miracle_beef'
              );
            },
            children: [
              {
                id: 'cubed_miracle_beef',
                recipe: () => {
                  event.recipes.create.crushing(
                    'kubejs:cubed_miracle_beef',
                    'kubejs:trimmed_miracle_beef'
                  );
                },
                children: [
                  {
                    id: 'trimmed_miracle_beef',
                    recipe: () => {
                      event.custom({
                        type: 'farmersdelight:cutting',
                        ingredients: [{item: 'kubejs:prime_miracle_beef'}],
                        tool: {tag: 'forge:tools/knives'},
                        result: [{item: 'kubejs:trimmed_miracle_beef'}],
                      });
                    },
                    children: [
                      {
                        id: 'prime_miracle_beef',
                        recipe: () => {
                          event.recipes.create.crushing(
                            [
                              Item.of('kubejs:prime_miracle_beef').withChance(
                                0.01
                              ),
                              Item.of(
                                'kubejs:subprime_miracle_beef'
                              ).withChance(0.2),
                              Item.of('kubejs:secondary_miracle_beef'),
                            ],
                            'kubejs:aged_miracle_cow_carcass'
                          );
                        },
                        children: [
                          {
                            id: 'aged_miracle_cow_carcass',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:decomposing',
                                ingredient: {
                                  item: 'kubejs:washed_miracle_cow_carcass',
                                },
                                results: [
                                  {
                                    item: 'kubejs:aged_miracle_cow_carcass',
                                    countRange: {
                                      type: 'constant',
                                      value: 1,
                                    },
                                  },
                                ],
                                processingTime: 6000,
                                nutrientsCost: 32,
                              });
                            },
                            children: [
                              {
                                id: 'washed_miracle_cow_carcass',
                                recipe: () => {
                                  event.recipes.createSplashing(
                                    'kubejs:washed_miracle_cow_carcass',
                                    'kubejs:gutted_miracle_cow_carcass'
                                  );
                                },
                                children: [
                                  {
                                    id: 'gutted_miracle_cow_carcass',
                                    recipe: () => {
                                      event.recipes.create.deploying(
                                        'kubejs:gutted_miracle_cow_carcass',
                                        [
                                          'kubejs:skinned_miracle_cow_carcass',
                                          'kubejs:gut_knife',
                                        ]
                                      );
                                    },
                                    children: [
                                      {
                                        id: 'skinned_miracle_cow_carcass',
                                        recipe: () => {
                                          event.recipes.create.deploying(
                                            'kubejs:skinned_miracle_cow_carcass',
                                            [
                                              'kubejs:drained_miracle_cow_carcass',
                                              'kubejs:skinning_knife',
                                            ]
                                          );
                                        },
                                        children: [
                                          {
                                            id: 'drained_miracle_cow_carcass',
                                            recipe: () => {
                                              event.recipes.create.deploying(
                                                'kubejs:drained_miracle_cow_carcass',
                                                [
                                                  'kubejs:miracle_cow_carcass',
                                                  'kubejs:butcher_knife',
                                                ]
                                              );
                                            },
                                            children: [
                                              {
                                                id: 'miracle_cow_carcass',
                                                recipe: () => {
                                                  // loot change so killing a cow drops a cow carcass and nothing else
                                                },
                                                children: [
                                                  {
                                                    id: 'miracle_cow',
                                                    recipe: () => {
                                                      event.custom({
                                                        type: 'naturesaura:animal_spawner',
                                                        ingredients: [
                                                          {
                                                            item: 'naturesaura:birth_spirit',
                                                          },
                                                          {
                                                            item: 'kubejs:monachopsis_token',
                                                          },
                                                          {
                                                            item: 'kubejs:seasons_rune',
                                                          },
                                                          {
                                                            item: 'bloodmagic:demonslate',
                                                          },
                                                          {
                                                            item: 'bloodmagic:defaultcrystal',
                                                          },
                                                          {
                                                            item: 'kubejs:malignant_dna',
                                                          },
                                                          {
                                                            item: 'kubejs:miracle_feed',
                                                          },
                                                        ],
                                                        entity:
                                                          'apple_cows:enchanted_golden_apple_cow',
                                                        aura: 50000,
                                                        time: 1000,
                                                      });
                                                    },
                                                    children: [
                                                      {
                                                        id: 'malignant_dna',
                                                        recipe: () => {},
                                                        children: [],
                                                      },
                                                      {
                                                        id: 'miracle_feed',
                                                        recipe: () => {},
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'ground_high_grade_beef',
            recipe: () => {
              event.recipes.create.crushing(
                'kubejs:ground_high_grade_beef',
                'kubejs:cubed_high_grade_beef'
              );
            },
            children: [
              {
                id: 'cubed_high_grade_beef',
                recipe: () => {
                  event.recipes.create.crushing(
                    'kubejs:cubed_high_grade_beef',
                    'kubejs:trimmed_high_grade_beef'
                  );
                },
                children: [
                  {
                    id: 'trimmed_high_grade_beef',
                    recipe: () => {
                      event.custom({
                        type: 'farmersdelight:cutting',
                        ingredients: [{item: 'kubejs:prime_high_grade_beef'}],
                        tool: {tag: 'forge:tools/knives'},
                        result: [{item: 'kubejs:trimmed_high_grade_beef'}],
                      });
                    },
                    children: [
                      {
                        id: 'prime_high_grade_beef',
                        recipe: () => {
                          event.recipes.create.crushing(
                            [
                              Item.of(
                                'kubejs:prime_high_grade_beef'
                              ).withChance(0.01),
                              Item.of(
                                'kubejs:subprime_high_grade_beef'
                              ).withChance(0.2),
                              Item.of('kubejs:secondary_high_grade_beef'),
                            ],
                            'kubejs:aged_high_grade_cow_carcass'
                          );
                        },
                        children: [
                          {
                            id: 'aged_high_grade_cow_carcass',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:decomposing',
                                ingredient: {
                                  item: 'kubejs:washed_high_grade_cow_carcass',
                                },
                                results: [
                                  {
                                    item: 'kubejs:aged_high_grade_cow_carcass',
                                    countRange: {
                                      type: 'constant',
                                      value: 1,
                                    },
                                  },
                                ],
                                processingTime: 6000,
                                nutrientsCost: 32,
                              });
                            },
                            children: [
                              {
                                id: 'washed_high_grade_cow_carcass',
                                recipe: () => {
                                  event.recipes.createSplashing(
                                    'kubejs:washed_high_grade_cow_carcass',
                                    'kubejs:gutted_high_grade_cow_carcass'
                                  );
                                },
                                children: [
                                  {
                                    id: 'gutted_high_grade_cow_carcass',
                                    recipe: () => {
                                      event.recipes.create.deploying(
                                        'kubejs:gutted_high_grade_cow_carcass',
                                        [
                                          'kubejs:skinned_high_grade_cow_carcass',
                                          'kubejs:gut_knife',
                                        ]
                                      );
                                    },
                                    children: [
                                      {
                                        id: 'skinned_high_grade_cow_carcass',
                                        recipe: () => {
                                          event.recipes.create.deploying(
                                            'kubejs:skinned_high_grade_cow_carcass',
                                            [
                                              'kubejs:drained_high_grade_cow_carcass',
                                              'kubejs:skinning_knife',
                                            ]
                                          );
                                        },
                                        children: [
                                          {
                                            id: 'drained_high_grade_cow_carcass',
                                            recipe: () => {
                                              event.recipes.create.deploying(
                                                'kubejs:drained_high_grade_cow_carcass',
                                                [
                                                  'kubejs:high_grade_cow_carcass',
                                                  'kubejs:butcher_knife',
                                                ]
                                              );
                                            },
                                            children: [
                                              {
                                                id: 'high_grade_cow_carcass',
                                                recipe: () => {
                                                  // loot change so killing a cow drops a cow carcass and nothing else
                                                },
                                                children: [
                                                  {
                                                    id: 'high_grade_cow',
                                                    recipe: () => {
                                                      event.custom({
                                                        type: 'naturesaura:animal_spawner',
                                                        ingredients: [
                                                          {
                                                            item: 'naturesaura:birth_spirit',
                                                          },
                                                          {
                                                            item: 'kubejs:monachopsis_token',
                                                          },
                                                          {
                                                            item: 'kubejs:seasons_rune',
                                                          },
                                                          {
                                                            item: 'bloodmagic:demonslate',
                                                          },
                                                          {
                                                            item: 'bloodmagic:defaultcrystal',
                                                          },
                                                          {
                                                            item: 'kubejs:primal_dna',
                                                          },
                                                          {
                                                            item: 'kubejs:high_grade_feed',
                                                          },
                                                        ],
                                                        entity:
                                                          'apple_cows:golden_apple_cow',
                                                        aura: 50000,
                                                        time: 1000,
                                                      });
                                                    },
                                                    children: [
                                                      {
                                                        id: 'primal_dna',
                                                        recipe: () => {},
                                                        children: [],
                                                      },
                                                      {
                                                        id: 'high_grade_feed',
                                                        recipe: () => {},
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'ground_medium_grade_beef',
            recipe: () => {
              event.recipes.create.crushing(
                'kubejs:ground_medium_grade_beef',
                'kubejs:cubed_medium_grade_beef'
              );
            },
            children: [
              {
                id: 'cubed_medium_grade_beef',
                recipe: () => {
                  event.recipes.create.crushing(
                    'kubejs:cubed_medium_grade_beef',
                    'kubejs:trimmed_medium_grade_beef'
                  );
                },
                children: [
                  {
                    id: 'trimmed_medium_grade_beef',
                    recipe: () => {
                      event.custom({
                        type: 'farmersdelight:cutting',
                        ingredients: [{item: 'kubejs:prime_medium_grade_beef'}],
                        tool: {tag: 'forge:tools/knives'},
                        result: [{item: 'kubejs:trimmed_medium_grade_beef'}],
                      });
                    },
                    children: [
                      {
                        id: 'prime_medium_grade_beef',
                        recipe: () => {
                          event.recipes.create.crushing(
                            [
                              Item.of(
                                'kubejs:prime_medium_grade_beef'
                              ).withChance(0.01),
                              Item.of(
                                'kubejs:subprime_medium_grade_beef'
                              ).withChance(0.2),
                              Item.of('kubejs:secondary_medium_grade_beef'),
                            ],
                            'kubejs:aged_medium_grade_cow_carcass'
                          );
                        },
                        children: [
                          {
                            id: 'aged_medium_grade_cow_carcass',
                            recipe: () => {
                              event.custom({
                                type: 'biomancy:decomposing',
                                ingredient: {
                                  item: 'kubejs:washed_medium_grade_cow_carcass',
                                },
                                results: [
                                  {
                                    item: 'kubejs:aged_medium_grade_cow_carcass',
                                    countRange: {
                                      type: 'constant',
                                      value: 1,
                                    },
                                  },
                                ],
                                processingTime: 6000,
                                nutrientsCost: 32,
                              });
                            },
                            children: [
                              {
                                id: 'washed_medium_grade_cow_carcass',
                                recipe: () => {
                                  event.recipes.createSplashing(
                                    'kubejs:washed_medium_grade_cow_carcass',
                                    'kubejs:gutted_medium_grade_cow_carcass'
                                  );
                                },
                                children: [
                                  {
                                    id: 'gutted_medium_grade_cow_carcass',
                                    recipe: () => {
                                      event.recipes.create.deploying(
                                        'kubejs:gutted_medium_grade_cow_carcass',
                                        [
                                          'kubejs:skinned_medium_grade_cow_carcass',
                                          'kubejs:gut_knife',
                                        ]
                                      );
                                    },
                                    children: [
                                      {
                                        id: 'skinned_medium_grade_cow_carcass',
                                        recipe: () => {
                                          event.recipes.create.deploying(
                                            'kubejs:skinned_medium_grade_cow_carcass',
                                            [
                                              'kubejs:drained_medium_grade_cow_carcass',
                                              'kubejs:skinning_knife',
                                            ]
                                          );
                                        },
                                        children: [
                                          {
                                            id: 'drained_medium_grade_cow_carcass',
                                            recipe: () => {
                                              event.recipes.create.deploying(
                                                'kubejs:drained_medium_grade_cow_carcass',
                                                [
                                                  'kubejs:medium_grade_cow_carcass',
                                                  'kubejs:butcher_knife',
                                                ]
                                              );
                                            },
                                            children: [
                                              {
                                                id: 'medium_grade_cow_carcass',
                                                recipe: () => {
                                                  // loot change so killing a cow drops a cow carcass and nothing else
                                                },
                                                children: [
                                                  {
                                                    id: 'medium_grade_cow',
                                                    recipe: () => {
                                                      event.custom({
                                                        type: 'naturesaura:animal_spawner',
                                                        ingredients: [
                                                          {
                                                            item: 'naturesaura:birth_spirit',
                                                          },
                                                          {
                                                            item: 'kubejs:monachopsis_token',
                                                          },
                                                          {
                                                            item: 'kubejs:seasons_rune',
                                                          },
                                                          {
                                                            item: 'bloodmagic:demonslate',
                                                          },
                                                          {
                                                            item: 'bloodmagic:defaultcrystal',
                                                          },
                                                          {
                                                            item: 'kubejs:hungry_dna',
                                                          },
                                                          {
                                                            item: 'kubejs:medium_grade_feed',
                                                          },
                                                        ],
                                                        entity:
                                                          'apple_cows:apple_cow',
                                                        aura: 50000,
                                                        time: 1000,
                                                      });
                                                    },
                                                    children: [
                                                      {
                                                        id: 'hungry_dna',
                                                        recipe: () => {},
                                                        children: [],
                                                      },
                                                      {
                                                        id: 'medium_grade_feed',
                                                        recipe: () => {},
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'probiotics', // Lactobacillus, Bifidobacterium, Saccharomyces boulardii, Streptococcus thermophilus, Enterococcus faecium, combined and put in a gelatin capsule
        children: [
          {
            id: 'lactobacillus',
            children: [
              {
                id: 'growth_medium',
                children: [
                  {id: 'honey', children: []},
                  {id: 'living_flesh', children: []},
                  {id: 'petri_dish', children: []},
                ],
              },
            ],
          },
          {
            id: 'bifidobacterium',
            children: [
              {
                id: 'primordial_growth_medium',
                children: [
                  {id: 'primordial_flesh', children: []},
                  {id: 'bone_broth', children: []},
                  {id: 'petri_dish', children: []},
                ],
              },
            ],
          },
          {
            id: 'streptococcus_thermophilus',
            children: [
              {
                id: 'hungry_growth_medium',
                children: [
                  {id: 'hungry_flesh', children: []},
                  {id: 'yogurt', children: []},
                  {id: 'petri_dish', children: []},
                ],
              },
            ],
          },
          {
            id: 'saccharomyces_boulardii',
            children: [
              {
                id: 'malignant_growth_medium',
                children: [
                  {id: 'malignant_flesh', children: []},
                  {id: 'acid', children: []},
                  {id: 'petri_dish', children: []},
                ],
              },
            ],
          },
          {
            id: 'empty_pill',
            children: [
              {id: 'gelatin_powder', children: []},
              {id: 'pill_mold', children: []},
            ],
          },
        ],
      },
      {
        id: 'miracle_thickeners', // gelatin, pectin, carrageenan
        children: [
          {id: 'gelatin', recipe: () => {}, children: []},
          {id: 'pectin', recipe: () => {}, children: []},
          {id: 'carrageenan', recipe: () => {}, children: []},
          // raw meat with bones like porkbelly, cut off the pig skin from from the meat scraps, chop the skin into skin chunks and place in water, add vinegar to the water and heat to soften the skin, centrifuge the mixture to get 3 things - fat, meaty acid solution and meaty solids, throw away the fat and solids, filter the acid to make it pure gelatin, centrifuge again to get rid of the salt and purified acid solution. evaporate purified acid solution to make gelatin. press the mixture through a film to make gelatin noodles. chop and grind the noodles into geltain powder
          {
            id: 'gelatin_noodles',
            children: [
              {
                id: 'gelatin_liquid',
                children: [
                  {
                    id: 'pure_meaty_acid',
                    children: [
                      {
                        id: 'turbid_meaty_acid',
                        children: [
                          {
                            id: 'meaty_acid',
                            children: [
                              {
                                id: 'skin_chunks',
                                children: [{id: 'pig_skin', children: []}],
                              },
                              {id: 'water', children: []},
                              {id: 'vinegar', children: []},
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'miracle_carbohydrates', // a bunch of recipes blended together then use biomancy etc to extract carbohydrates
        children: [
          {
            id: 'miracle_flour',
            children: [
              {id: 'cryo_root_flour', children: []},
              {id: 'underbean_flour', children: []},
              {id: 'fiery_bean_flour', children: []},
              {id: 'thorn_rose_flour', children: []},
              {id: 'cinder_flour', children: []},
              {id: 'bee_bread_flour', children: []},
              {
                id: 'all_purpose_flour',
                children: [
                  {id: 'wheat_flour', children: []},
                  {id: 'corn_flour', children: []},
                  {id: 'oat_flour', children: []},
                  {id: 'sorghum_flour', children: []},
                  {id: 'millet_flour', children: []},
                  {id: 'rye_flour', children: []},
                  {id: 'barley_flour', children: []},
                  {id: 'rice_flour', children: []},
                ],
              },
            ],
          },
          // {id: 'salt', children: []},
          // {id: 'water', children: []},
          {id: 'yeast', children: []},
          // {id: 'plant_oil', children: []},
          {id: 'dextrose', children: []},
        ],
      },
      {
        id: 'miracle_oil', // all animal infused vegetable oils combined with pink slime oil
        children: [
          {
            id: 'beef_oil',
            children: [
              {id: 'beef_tallow', children: []},
              {id: 'plant_oil', children: []},
            ],
          },
          {
            id: 'pork_oil',
            children: [
              {id: 'lard', children: []},
              {id: 'plant_oil', children: []},
            ],
          },
          {
            id: 'chicken_oil',
            children: [
              {id: 'chicken_fat', children: []},
              {id: 'plant_oil', children: []},
            ],
          },
          {
            id: 'fish_oil',
            children: [
              {id: 'fish', children: []},
              {id: 'plant_oil', children: []},
            ],
          },
          {
            id: 'sheep_oil',
            children: [
              {id: 'sheep_fat', children: []},
              {id: 'plant_oil', children: []},
            ],
          },
          {
            id: 'pink_oil',
            children: [
              {id: 'pink_slime', children: []},
              {id: 'plant_oil', children: []},
            ],
          },
        ],
      },
      {
        id: 'fiber', // raw fiber extracted from v12 vegetable blast which comes from all vegetables combined
        children: [
          {
            id: 'v12_vegetable_blast',
            children: [
              {id: 'greens', children: []},
              {id: 'vegetables', children: []},
              {id: 'mushrooms', children: []},
              {id: 'beans', children: []},
              {id: 'ancient_bark', children: []},
            ],
          },
        ],
      },
      {
        id: 'miracle_spice_mix', // selection of rare and common spices that go good together and make it palatable
        children: [
          {id: 'smoked_paprika', children: []},
          {id: 'cumin', children: []},
          {id: 'coriander', children: []},
          {id: 'turmeric', children: []},
          {id: 'black_pepper', children: []},
          {id: 'garlic_powder', children: []},
          {id: 'saffron', children: []},
          {id: 'grains_of_paradise', children: []},
          {id: 'sumac', children: []},
          {id: 'cardamon', children: []},
          {id: 'pixie_dust', children: []},
        ],
      },
    ],
  });
});
