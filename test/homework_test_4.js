// Máš funkci fetchByDate(startDate, endDate), která vrací data z API. Pokud je výsledků víc než 500, musíš ten časový úsek rozdělit na polovinu a zkusit to znovu pro každou polovinu zvlášť.

// Zadání:

// Napiš funkci scrapeData(start, end).

// Zavolej v ní fiktivní API: const response = await fetchByDate(start, end);.

// Pokud response.count (počet nalezených věcí) je menší nebo roven 500, ulož data do pole allResults.

// Pokud je jich víc než 500, vypočítej střed mezi start a end a zavolej funkci znovu pro levou a pravou polovinu.

// Pro jednoduchost: Předpokládej, že start a end jsou celá čísla (třeba roky nebo dny jako timestampy), takže střed vypočítáš jednoduše jako (start + end) / 2.
