const importAll = r => {
  const images = {};
  r.keys().forEach(item => {
    const regex = /\.\/|\.png/g;
    const key = item.replace(regex, "");
    images[key] = r(item);
  });
  return images;
};

export default importAll;
