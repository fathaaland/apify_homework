// Při reálném scrapingu často dostaneš seznam 1000 URL adres a tvým úkolem je z nich vytáhnout data. Ale pozor: nemůžeš je spustit všechny najednou, protože bys shodil server nebo dostal ban (IP blocking). Musíš je zpracovávat po dávkách (concurrency).
// Úkol: "Batch Processor (Dávkový zpracovatel)"
// Máš pole 100 produktových ID. Tvým úkolem je pro každé ID zavolat API, ale maximálně 5 požadavků najednou. Jakmile jeden skončí, může začít další, dokud není hotovo všech 100.

async function processInBatches(productIds, batchSize) {
  const finalArr = [];

  for (let index = 0; index < productIds.length; index += batchSize) {
    const batch = productIds.slice(i, i + batchSize);

    const promises = batch.map((id) => fetchProduct(id));

    const results = await Promise.all(promises);

    finalArr.push(...results);
  }

  return finalArr;
}

processInBatches(productIds, 5);
