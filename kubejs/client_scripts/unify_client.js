// Whether or not to hide not-priority materials in jei
global['HIDE_UNIFIED_ITEMS'] = true;

function hideItems(event) {
  try {
    // Loop over all tags to unify
    for (let tag of Object.keys(global['tagItems'])) {
      let stacks = global['tagItems'][tag];
      // Get priority item
      let priorityId = global['tagPriorityItems'][tag];
      // Hide all items in this tag that are not the priority item
      stacks.forEach((itemId) => {
        if (itemId != priorityId && !global['unifyexclude'].has(itemId)) {
          event.hide(itemId);
        }
      });
    }
  } catch (err) {
    console.warn(
      'Failure to hide unified items. Press F3+T to reload client and retry. If this warning keeps occuring, you may need to enable caching.'
    );
    console.error(err);
  }
}

if (global['HIDE_UNIFIED_ITEMS']) {
  onEvent('jei.hide.items', hideItems);
}
