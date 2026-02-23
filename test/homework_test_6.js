function cleanAndSortData(sourceA, sourceB) {
  const finalArray = [];
  const concatArray = sourceA.concat(sourceB);

  const validItems = concatArray.filter(
    (item) => item.price !== 0 && item.price !== null
  );

  const uniqueItems = validItems.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  return uniqueItems.sort((a, b) => a.price - b.price);
}
cleanAndSortData(sourceA, sourceB);
