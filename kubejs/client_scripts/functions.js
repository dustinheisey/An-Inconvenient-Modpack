function list(config, type) {
  try {
    let list = [];
    Object.keys(config).forEach(mod => {
      config[mod].forEach(id => {
        list.push(id);
      });
    });

    return list;
  } catch (error) {
    console.error(error);
  }
}
