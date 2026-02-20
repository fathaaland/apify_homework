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
