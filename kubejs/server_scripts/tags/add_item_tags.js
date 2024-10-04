// priority: 301

onEvent('tags.items', (event) => {
  function addItems(tag, items) {
    items.forEach((item) => event.add(tag, item));
  }

  // TODO: 7.1
  // [
  //   'uranium',
  //   'protactinium',
  //   'thorium',
  //   'actinium',
  //   'radium',
  //   'francium',
  //   'polonium',
  //   'lead',
  //   'bismuth',
  //   'thallium',
  //   'platinum',
  //   'iridium',
  //   'osmium',
  //   'rhenium',
  //   'tungsten',
  //   'tantalum',
  //   'hafnium',
  //   'lutetium',
  //   'ytterbium',
  //   'thulium',
  //   'erbium',
  //   'holmium',
  //   'dysprosium',
  //   'terbium',
  //   'gadolinium',
  //   'europium',
  //   'samarium',
  //   'neodymium',
  //   'praseodymium',
  //   'lanthanum',
  //   'cerium',
  //   'barium',
  //   'cesium',
  //   'tin',
  //   'indium',
  //   'cadmium',
  //   'silver',
  //   'palladium',
  //   'rhodium',
  //   'ruthenium',
  //   'molybdenum',
  //   'niobium',
  //   'zirconium',
  //   'yttrium',
  //   'strontium',
  //   'rubidium',
  //   'gallium',
  //   'zinc',
  //   'nickel',
  //   'cobalt',
  //   'manganese',
  //   'chromium',
  //   'vanadium',
  //   'titanium',
  //   'scandium',
  //   'calcium',
  //   'potassium',
  //   'aluminum',
  //   'magnesium',
  //   'sodium',
  //   'beryllium',
  //   'lithium',
  // ].forEach(element =>
  //   event.add(`forge:storage_blocks/${element}`, `chemlib:${element}_metal_block`)
  // );
  // ['helium', 'neon', 'argon', 'krypton', 'xenon', 'radon'].forEach(element => {
  //   event.add(`forge:storage_blocks/${element}`, `chemlib:${element}_lamp_block`);
  // });

  //   event.add("forge:storage_blocks/salt", "rankine:sodium_chloride_block");

  event.add('forge:storage_blocks/salt', 'rankine:pink_salt_block');

  event.add('forge:bitumen', 'rankine:bitumen');

  event.add('forge:raw_materials/iron', 'rankine:hematite');
  event.add('forge:raw_materials/tin', 'rankine:cassiterite');
  event.add('forge:raw_materials/lead', 'rankine:galena');
  event.add('forge:raw_materials/silver', 'rankine:acanthite');
  event.add('forge:raw_materials/zinc', 'rankine:sphalerite');
  event.add('forge:raw_materials/aluminum', 'rankine:bauxite');
  event.add('forge:raw_materials/uranium', 'rankine:uraninite');
  event.add('forge:raw_materials/nickel', 'rankine:pentlandite');
  event.add('forge:raw_materials/cobalt', 'rankine:cobaltite');

  event.add('chipped:raw_iron_block', 'rankine:hematite_block');
  event.add('chipped:raw_copper_block', 'rankine:malachite_block');

  event.add('forge:storage_blocks/raw_iron', 'rankine:hematite_block');
  event.add('forge:storage_blocks/raw_copper', 'rankine:malachite_block');
  event.add('forge:storage_blocks/raw_tin', 'rankine:cassiterite_block');
  event.add('forge:storage_blocks/raw_lead', 'rankine:galena_block');
  event.add('forge:storage_blocks/raw_silver', 'rankine:acanthite_block');
  event.add('forge:storage_blocks/raw_zinc', 'rankine:sphalerite_block');
  event.add('forge:storage_blocks/raw_aluminum', 'rankine:bauxite_block');
  event.add('forge:storage_blocks/raw_uranium', 'rankine:uraninite_block');
  event.add('forge:storage_blocks/raw_nickel', 'rankine:pentlandite_block');
  event.add('forge:storage_blocks/raw_cobalt', 'rankine:cobaltite_block');

  // Add Items
  addItems('im:rafts', [
    'justaraftmod:oak_raft',
    'justaraftmod:spruce_raft',
    'justaraftmod:birch_raft',
    'justaraftmod:jungle_raft',
    'justaraftmod:acacia_raft',
    'justaraftmod:dark_oak_raft',
    'justaraftmod:bamboo_raft'
  ]);
});
