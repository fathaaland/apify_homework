// Tvůj úkol:
// Napiš funkci, která začne na page = 1 a v každém kroku:

// Stáhne data z URL (použij fiktivní funkci getData(url)).

// Podívá se, jestli v těch datech něco je.

// Pokud ano, uloží si to a jde na další stránku (page++).

// Pokud ne (přišlo prázdné pole []), skončí a vypíše celkový počet stažených věcí.

async function getAllPages(maxCountPages) {
  let allPagesData = [];
  for (let startPage = 1; startPage <= maxCountPages; startPage++) {
    let urlAdress = `https://api.priklad.cz/v1/pages=${startPage}`;
    let data = await getData(urlAdress);

    if (data.length > 0) {
      allPagesData.push(...data);
    } else {
      console.log(allPagesData);
      break;
    }
  }
}

getAllPages(500);
