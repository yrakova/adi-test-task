const generateChunks = (items, chunkSize) => {
  let resultItems = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunkItems = items.splice(i, chunkSize);
    resultItems.push(chunkItems);
  }
  return resultItems;
};

export default generateChunks;
