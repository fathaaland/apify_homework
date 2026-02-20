async function scrapeData(start, end) {
  // 1. Musíme počkat na odpověď z API
  const response = await fetchByDate(start, end);

  // Pokud se vejdeme do limitu, vrátíme data z této větve
  if (response.count <= 500) {
    // Předpokládám, že data jsou v response.items
    return response.items;
  }

  // 2. Pokud je jich moc, dělíme
  // Používáme Math.floor, abychom měli celá čísla
  let mid = Math.floor((start + end) / 2);

  // BEZPEČNOSTNÍ POJISTKA: Pokud už rozsah nejde dělit, prostě ty data vrať
  if (start === end) {
    return response.items;
  }

  // 3. Spustíme rekurzi a POČKÁME na výsledky z obou větví
  // Aby nevznikaly duplicity, pravá větev začíná na mid + 1
  const leftResults = await scrapeData(start, mid);
  const rightResults = await scrapeData(mid + 1, end);

  // 4. Spojíme výsledky z obou větví a pošleme je o patro vejš
  return [...leftResults, ...rightResults];
}

// Spuštění
scrapeData(2010, 2024);
