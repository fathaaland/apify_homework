// Úkol: "Vyzobej názvy z HTML"
// Představ si, že proměnná $ je tvoje "kouzelná hůlka" (v Node.js je to knihovna Cheerio), která umí prohledávat HTML.

// Máš tuhle strukturu v HTML:

// HTML
// <ul id="product-list">
//   <li class="item">Produkt A</li>
//   <li class="item">Produkt B</li>
//   <li class="item">Produkt C</li>
// </ul>
// Tvůj cíl: Dostaň názvy produktů do jednoho pole: ['Produkt A', 'Produkt B', 'Produkt C'].

function extractNames($) {
  const results = [];
  let getAllElementsWithItem = $(".item");

  getAllElementsWithItem.each((index, element) => {
    const required_text = $(element).text();
    results.push(required_text);
  });

  return results;
}

extractNames(
  <ul id="product-list">
    <li class="item">Produkt A</li>
    <li class="item">Produkt B</li>
    <li class="item">Produkt C</li>
  </ul>
);
