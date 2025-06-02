const getCountById = (items, idKey) =>
  items.reduce((counts, { [idKey]: id }) => {
    if (!counts[id]) counts[id] = 0;
    counts[id] += 1;
    return counts;
  }, {});

export default getCountById;
