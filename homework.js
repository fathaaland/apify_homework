//main array for saving finding products
const allProducts = [];

let minPrice;
let maxPrice;

async function getProducts(minPrice, maxPrice) {
  //url creation
  let url = `https://api.ecommerce.com/products/?minPrice=${minPrice}&/maxPrice=${maxPrice}`;
  //no-specific API call
  let data = await getApiCall(minPrice, maxPrice);

  if (data.total <= 1000) {
    data.push(allProducts);
  } else {
    let reasonablePrice = (minPrice + maxPrice) / 2;

    //know I should make sure that the functions don't overlap here but I don't want to cheat, I honestly don't remember how
    await getProducts(minPrice, reasonablePrice);
    await getProducts(reasonablePrice, maxPrice);
  }

  getProducts(0, 100000);
  return products;
}
