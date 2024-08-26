function recipes(event) {
  this.event = event;
  this.type = '';
  this.stage = undefined;
  this.function = undefined;
}

recipes.prototype = {
  setType: function (type) {
    this.type = type;
    return this;
  },
  setFunction: function (func) {
    this.function = func;
    return this;
  },
  setStage: function (stage) {
    this.stage = stage;
    return this;
  },
  removeInputs: function (list) {
    list.forEach(id => {
      try {
        let config = {input: id};
        if (this.type) config.type = this.type;
        this.event.remove(config);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeOutputs: function (list) {
    list.forEach(id => {
      try {
        let config = {output: id};
        if (this.type) config.type = this.type;
        this.event.remove(config);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeIds: function (list) {
    list.forEach(id => {
      try {
        this.event.remove({id: id});
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeCraftingInputs: function (list) {
    list.forEach(id => {
      try {
        this.event.remove({
          output: id,
          or: [
            {type: 'minecraft:crafting_shaped'},
            {type: 'minecraft:crafting_shapeless'},
          ],
        });
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeCraftingOutputs: function (list) {
    list.forEach(id => {
      try {
        this.event.remove({
          output: id,
          or: [
            {type: 'minecraft:crafting_shaped'},
            {type: 'minecraft:crafting_shapeless'},
          ],
        });
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  removeConfigs: function (list) {
    list.forEach(config => {
      try {
        this.event.remove(config);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  replaceInput: function (list) {
    list.forEach(config => {
      try {
        this.event.replaceInput(
          config.target || undefined,
          config.to_replace,
          config.replace_with
        );
      } catch (error) {
        console.error(error);
      }
    });
  },
  replaceOutput: function (list) {
    list.forEach(config => {
      try {
        this.event.replaceOutput(
          config.target || undefined,
          config.to_replace,
          config.replace_with
        );
      } catch (error) {
        console.error(error);
      }
    });
  },
  modifyInputs: function (list) {
    list.forEach(item => {
      try {
        let config = {input: item.input};
        if (!item.global) config.type = this.type;

        this.event.remove(config);
        if (this.stage) this.function(item).stage(this.stage);
        else this.function(item);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  modifyOutputs: function (list) {
    list.forEach(item => {
      try {
        let config = {output: item.output};
        if (!item.global) config.type = this.type;

        this.event.remove(config);
        if (this.stage) this.function(item).stage(this.stage);
        else this.function(item);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
  add: function (list) {
    list.forEach(item => {
      try {
        if (this.stage) this.function(item).stage(this.stage);
        else this.function(item);
      } catch (error) {
        console.error(error);
      }
    });
    return this;
  },
};

function tags(event) {
  this.event = event;
}

tags.prototype = {
  removeTag: function (tag, item) {
    this.event.remove(tag, item);
    return this;
  },
  removeTags: function (tags, item) {
    tags.forEach(tag => this.event.remove(tag, item));
    return this;
  },
  removeItems: function (tag, items) {
    items.forEach(item => this.event.remove(tag, item));
    return this;
  },
  addTag: function (tag, item) {
    this.event.add(tag, item);
    return this;
  },
  addItems: function (tag, items) {
    items.forEach(item => this.event.add(tag, item));
    return this;
  },
  replaceTag: function (tag, item) {
    this.event.removeAll(tag);
    this.event.add(tag, item);
    return this;
  },
  replaceTags: function (tags, item) {
    tags.forEach(tag => {
      this.event.removeAll(tag);
      this.event.add(tag, item);
    });
    return this;
  },
};

function addJSON(event, stage, config, id, parent_id) {
  let json_id =
    id === 'root'
      ? `im:advancements/${stage}/root.json`
      : `im:advancements/${stage}/${config.id || id}.json`;
  let json = {};

  if (!config.hide) {
    json.display = {
      icon: {
        item: config.icon || config.item,
        nbt: config.nbt,
      },
      title: config.title,
      description: config.description || '',
      background: config.background,
      frame: config.frame || 'task',
      show_toast: true,
      announce_to_chat: false,
    };
  }

  if (config.criteria) {
    json.criteria = config.criteria;

    if (config.requirements) {
      json.requirements = config.requirements;
    }
  } else {
    json.criteria = {
      collect: {
        trigger: 'inventory_changed',
        conditions: {
          items: [],
        },
      },
    };
    if (config.items) {
      config.items.forEach(item => {
        json.criteria.collect.conditions.items.push({
          items: [item],
        });
      });
    } else if (config.tag) {
      json.criteria.collect.conditions.items.push({
        tag: config.tag,
        count: config.count,
        nbt: config.nbt,
      });
    } else {
      json.criteria.collect.conditions.items.push({
        items: [config.item] || undefined,
        count: config.count,
        nbt: config.nbt,
      });
    }
  }

  json.rewards = {
    function: config.reward || 'im:spirit_orbs',
  };

  if (config.orb === false) json.rewards = {};

  if (id !== 'root') {
    json.parent = `im:${stage}/${config.parent || parent_id}`;
  }

  event.addJson(json_id, json);
}

function addAdvancements(event, stage, config, child_id, parent_id) {
  let id = child_id || 'root';
  let parent = id;

  addJSON(event, stage, config, id, parent_id);

  if (config.children) {
    config.children.forEach(child => {
      addAdvancements(
        event,
        stage,
        child,
        id === 'root'
          ? `${config.children.indexOf(child) + 1}`
          : `${id}.${config.children.indexOf(child) + 1}`,
        parent
      );
    });
  }
}

function setRecipes(config) {
  if (config.recipe) {
    try {
      config.recipe();
    } catch (error) {
      console.error(error);
    }
  }
  if (config.children)
    config.children.forEach(child => {
      setRecipes(child);
    });
}

function setMilestoneRecipes(config) {
  setRecipes(config);
}

function setSideRecipes(config) {
  config.forEach(supplement => setRecipes(supplement));
}

function setBalanceRecipes(config) {
  Object.keys(config).forEach(type => {
    config[type]();
  });
}
function stageArmors(event, configs) {
  configs.forEach(config => {
    if (config.pieces) {
      event
        .shaped(`${config.tier}_${config.pieces[0]}`, ['aaa', 'aba'], {
          a: config.input,
          b: Item.of(
            `${config.previousTier}_${config.previousPieces[0]}`
          ).ignoreNBT(),
        })
        .stage(config.stage);

      event
        .shaped(`${config.tier}_${config.pieces[1]}`, ['aba', 'aaa', 'aaa'], {
          a: config.input,
          b: Item.of(
            `${config.previousTier}_${config.previousPieces[1]}`
          ).ignoreNBT(),
        })
        .stage(config.stage);
      event
        .shaped(`${config.tier}_${config.pieces[2]}`, ['aaa', 'aba', 'a a'], {
          a: config.input,
          b: Item.of(
            `${config.previousTier}_${config.previousPieces[2]}`
          ).ignoreNBT(),
        })
        .stage(config.stage);

      event
        .shaped(`${config.tier}_${pieces[3]}`, ['aba', 'a a'], {
          a: config.input,
          b: Item.of(
            `${config.previousTier}_${config.previousPieces[3]}`
          ).ignoreNBT(),
        })
        .stage(config.stage);

      event
        .shaped(`${config.tier}_${pieces[0]}`, ['aaa', 'a a'], {
          a: config.input,
        })
        .stage(`armor_${config.master}_helmet`);
      event
        .shaped(`${config.tier}_${pieces[1]}`, ['a a', 'aaa', 'aaa'], {
          a: config.input,
        })
        .stage(`armor_${config.master}_chestplate`);
      event
        .shaped(`${config.tier}_${pieces[2]}`, ['aaa', 'a a', 'a a'], {
          a: config.input,
        })
        .stage(`armor_${config.master}_leggings`);
      event
        .shaped(`${config.tier}_${pieces[3]}`, ['a a', 'a a'], {
          a: config.input,
        })
        .stage(`armor_${config.master}_boots`);
    } else {
      event
        .shaped(`${config.tier}_helmet`, ['aaa', 'aba'], {
          a: config.input,
          b: Item.of(`${config.previousTier}_helmet`).ignoreNBT(),
        })
        .stage(config.stage);
      event
        .shaped(`${config.tier}_chestplate`, ['aba', 'aaa', 'aaa'], {
          a: config.input,
          b: Item.of(`${config.previousTier}_chestplate`).ignoreNBT(),
        })
        .stage(config.stage);
      event
        .shaped(`${config.tier}_leggings`, ['aaa', 'aba', 'a a'], {
          a: config.input,
          b: Item.of(`${config.previousTier}_leggings`).ignoreNBT(),
        })
        .stage(config.stage);
      event
        .shaped(`${config.tier}_boots`, ['aba', 'a a'], {
          a: config.input,
          b: Item.of(`${config.previousTier}_boots`).ignoreNBT(),
        })
        .stage(config.stage);

      event
        .shaped(`${config.tier}_helmet`, ['aaa', 'a a'], {
          a: config.input,
        })
        .stage(`armor_${config.master}_helmet`);
      event
        .shaped(`${config.tier}_chestplate`, ['a a', 'aaa', 'aaa'], {
          a: config.input,
        })
        .stage(`armor_${config.master}_chestplate`);
      event
        .shaped(`${config.tier}_leggings`, ['aaa', 'a a', 'a a'], {
          a: config.input,
        })
        .stage(`armor_${config.master}_leggings`);
      event
        .shaped(`${config.tier}_boots`, ['a a', 'a a'], {
          a: config.input,
        })
        .stage(`armor_${config.master}_boots`);
    }
  });
}

function overrideBricksRecipes(chapter, event, configs) {
  configs.forEach(config => {
    event
      .shaped(`2x ${config.output}`, ['ab', 'ba'], {
        a: config.input,
        b: 'rankine:mortar',
      })
      .stage(chapter);

    if (chapter === 'chapter_1') {
      chapter = 'chapter_2';
    }
    event
      .shaped(`4x ${config.output}`, ['ab', 'ba'], {
        a: config.input,
        b: 'rankine:cement_mix',
      })
      .stage(chapter);
  });
}

// ? Gateways Functions
function computeMaxWaveTime(config, size) {
  if (size === 'small') return config.type === 'boss' ? 4800 : 2400;
  else if (size === 'medium') return config.type === 'boss' ? 6400 : 3200;
  else if (size === 'large') return config.type === 'boss' ? 12800 : 6400;
}

function computeSetupTime(config, size) {
  if (size === 'small') return config.type === 'boss' ? 600 : 300;
  else if (size === 'medium') return config.type === 'boss' ? 800 : 400;
  else if (size === 'large') return config.type === 'boss' ? 1200 : 600;
}

function computeEntities(config, size) {
  let json = [];

  config.entities.forEach(id => {
    let x = 0;
    if (size === 'small')
      x = config.type === 'mob' ? 5 : config.type === 'group' ? 3 : 1;
    else if (size === 'medium')
      x = config.type === 'mob' ? 10 : config.type === 'group' ? 5 : 1;
    else if (size === 'large')
      x = config.type === 'mob' ? 20 : config.type === 'group' ? 7 : 1;
    for (let i = 0; i < x; i++) {
      json.push({
        entity: id,
      });
    }
  });

  return json;
}

function computeModifiers(size) {
  if (size === 'small') return [];
  else if (size === 'medium')
    return [
      {
        attribute: 'generic.max_health',
        operation: 'MULTIPLY_TOTAL',
        value: 2.0,
      },
      {
        attribute: 'generic.movement_speed',
        operation: 'MULTIPLY_TOTAL',
        value: 0.05,
      },
      {
        attribute: 'generic.armor',
        operation: 'ADDITION',
        value: 4,
      },
    ];
  else if (size === 'large')
    return [
      {
        attribute: 'generic.max_health',
        operation: 'MULTIPLY_TOTAL',
        value: 4.0,
      },
      {
        attribute: 'generic.movement_speed',
        operation: 'MULTIPLY_TOTAL',
        value: 0.05,
      },
      {
        attribute: 'generic.armor',
        operation: 'ADDITION',
        value: 4,
      },
    ];
}

function computeWaveRewards(config, size) {
  let json = [];

  config.entities.forEach(id => {
    json.push({
      type: 'entity_loot',
      entity: id,
      rolls: size === 'small' ? 10 : size === 'medium' ? 20 : 40,
    });
  });

  if (config.rewards) {
    config.rewards.forEach(reward => {
      json.push({
        type: 'stack',
        stack: {
          item: reward.id,
          count: reward.count,
        },
      });
    });
  }

  return json;
}

function computeCompletionRewards(config, size) {
  let json = [];

  if (size === 'small') {
    json.push({
      type: 'command',
      command: `gamestage add <summoner> restoration_${config.id}_gateway`,
      desc: `Restore life to the Overworld from ${config.dimension}`,
    });

    json.push({
      type: 'stack',
      stack: {
        item: 'gateways:gate_pearl',
        nbt: `{gateway:"gateways:medium_${config.id}_gateway"}`,
        count: 1,
      },
    });
    config.restorations.forEach(config => {
      json.push({
        type: 'command',
        command: `summon ${config.id}`,
        desc: `Find a ${config.name}`,
      });
    });
  } else if (size === 'medium') {
    json.push({
      type: 'stack',
      stack: {
        item: 'gateways:gate_pearl',
        nbt: `{gateway:"gateways:large_${config.id}_gateway"}`,
        count: 1,
      },
    });
  } else if (size === 'large') {
    config.rewards.forEach(item => {
      json.push({
        type: 'stack',
        stack: {
          item: item.id,
          nbt: item.nbt,
          count: item.count,
        },
      });
    });
  }

  config.relics.forEach(id => {
    json.push({
      type: 'chanced',
      chance: size === 'small' ? 0.1 : size === 'medium' ? 0.3 : 0.75,
      reward: {
        type: 'stack',
        stack: {
          item: id,
          count: 1,
        },
      },
    });
  });

  return json;
}

function computeJSON(config, size) {
  let json = {
    size: size,
    color: config.color,
    completion_xp: size === 'small' ? 500 : size === 'medium' ? 5000 : 50000,
    spawn_range: size === 'small' ? 10 : size === 'medium' ? 20 : 40,
    leash_range: size === 'small' ? 40 : size === 'medium' ? 80 : 160,
    spawn_algorithm: 'gateways:inward_spiral',
    waves: [],
    failures: [
      {
        type: 'explosion',
        strength: 3.0,
        fire: false,
        block_damage: true,
      },
    ],
  };

  json.rewards = computeCompletionRewards(config, size);

  config.waves.forEach(wave => {
    let config = {
      entities: computeEntities(wave, size),
      modifiers: computeModifiers(size),
      rewards: computeWaveRewards(wave, size),
      max_wave_time: computeMaxWaveTime(wave, size),
      setup_time: computeSetupTime(wave, size),
    };

    json.waves.push(config);
  });

  return json;
}

function registerGateways(event, config) {
  event.addJson(
    `gateways:gateways/small_${config.id}_gateway.json`,
    computeJSON(config, 'small')
  );
  event.addJson(
    `gateways:gateways/medium_${config.id}_gateway.json`,
    computeJSON(config, 'medium')
  );
  event.addJson(
    `gateways:gateways/large_${config.id}_gateway.json`,
    computeJSON(config, 'large')
  );

  // ? Metals
  overrideMetalRecipes('chapter_1', event, [
    {
      id: 'copper',
      ore: 'rankine:malachite_ore',
      raw: 'rankine:malachite',
      rawBlock: 'rankine:malachite_block',
      ingot: 'minecraft:copper_ingot',
      block: 'minecraft:copper_block',
      tier: 'stone',
      extraTier: 'iron',
    },
  ]);

  function overrideMetalRecipes(chapter, event, configs) {
    configs.forEach(config => {
      // ? Orekiln
      event
        .custom({
          type: 'charcoal_pit:orekiln',
          ingredients: [{item: config.raw}],
          result: {item: config.ingot},
          amount: 1,
        })
        .stage(chapter)
        .id(`inconvenient:orekiln_${config.id}_ingot`);

      // ? Beehive Oven
      event
        .custom({
          type: 'rankine:beehive_oven',
          input: {item: config.rawBlock},
          result: config.block,
          minCookTime: 2400,
          maxCookTime: 4800,
        })
        .stage(chapter)
        .id(`inconvenient:beehive_oven_${config.id}_block`);

      // ? Hammer Crushing
      event
        .custom({
          input: {item: config.ore},
          type: 'rankine:crushing',
          guaranteed: [
            {
              item: config.raw,
              tier: config.tier,
              count: 1,
            },
            {
              item: config.raw,
              count: 2,
              tier: config.extraTier,
            },
          ],
        })
        .id(`inconvenient:crushing_${config.ore}`);

      // ? Melting
      event
        .custom({
          type: 'tconstruct:melting',
          ingredient: {item: 'rankine:malachite'},
          result: {fluid: 'tconstruct:molten_copper', amount: 90},
          temperature: 500,
          time: 158,
        })
        .id('inconvenient:meting_malachite');

      // ? Crushing Wheel
      event
        .custom({
          type: 'create:crushing',
          processingTime: 250,
          ingredients: [{item: 'rankine:malachite'}],
          results: [
            {count: 2, item: 'chemlib:copper_dust'},
            {item: 'create:experience_nugget', chance: 0.5},
          ],
        })
        .id('inconvenient:crushing_wheel_malachite');
    });

    // arc furnace
    // alchemical reaction
    // crusher
    // blast furnace
    // furnace
    // casting
    // demon crusher
    // pressing
    // meat fluid
    // spirit infusion
    // mekanism processing
  }
}
