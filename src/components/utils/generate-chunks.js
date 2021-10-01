const generateChunks = (items, chunkSize) => {
  let resultItems = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunkItems = items.slice(i, i + chunkSize);
    resultItems.push(chunkItems);
  }
  return resultItems;
};

export default generateChunks;
