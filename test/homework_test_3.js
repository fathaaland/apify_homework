{
  /* <div class="item">
  <a href="/p/iphone-15" class="name-link">
     iPhone 15 (Skladem) 
  </a>
  <span class="price-tag">Cena: 25 000 CZK</span>
</div>
<div class="item">
  <a href="/p/samsung-s24" class="name-link">
     Samsung S24 (Poslední kus) 
  </a>
  <span class="price-tag">Cena: 21 990 CZK</span>
</div>

Tvůj cíl: Vytvoř pole objektů, kde:

name: Bude jen název produktu (bez toho "(Skladem)" atd.). Nápověda: použij .split('(')[0].trim().

price: Bude čisté číslo (např. 25000). Nápověda: použij .replace(...) nebo regulární výraz a pak Number().

url: Bude celá adresa. Všimni si, že v HTML je jen /p/iphone-15. Musíš k tomu připojit https://www.obchod.cz.

Nápověda: Pro získání odkazu použij $(element).find('a').attr('href'). */
}

function getRequiredData(data) {
  const results = [];
  const getAllElements = data(".item");

  getAllElements.each((index, element) => {
    let element_name = $(element).find(".name-link").split("(")[0].trim();
    let element_price = $(element).find(".price-tag").parseInt();

    const obj = { name: element_name, price: element_price };
    results.push(obj);
  });

  return results;
}

getRequiredData(
  <>
    <div class="item">
      <a href="/p/iphone-15" class="name-link">
        iPhone 15 (Skladem)
      </a>
      <span class="price-tag">Cena: 25 000 CZK</span>
    </div>
    <div class="item">
      <a href="/p/samsung-s24" class="name-link">
        Samsung S24 (Poslední kus)
      </a>
      <span class="price-tag">Cena: 21 990 CZK</span>
    </div>
  </>
);
