global.toTitleCase = (string) =>
  string
    .split('_')
    .map((it) => Utils.toTitleCase(it))
    .join(' ');

global.flat = (configObject) => {
  let arr = [];

  function traverseObj(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (Array.isArray(obj[key])) {
          // If it's an array, push each object in the array to the arr
          obj[key].forEach((item) => arr.push(item));
        } else {
          // If it's an object, keep traversing
          traverseObj(obj[key]);
        }
      }
    }
  }

  traverseObj(configObject);
  return arr;
};
