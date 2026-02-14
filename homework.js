//main array for saving finding products
const allProducts = [];

let minPrice;
let maxPrice;

async function getProducts(minPrice, maxPrice) {
  //url creation
  let url = `https://api.ecommerce.com/products/?minPrice=${minPrice}&&/maxPrice=${maxPrice}`;
  //no-specific API call
  let data = await getApiCall(minPrice, maxPrice);

  if (data.total <= 1000) {
    data.push(allProducts);
  } else {
    let reasonablePrice = minPrice;
  }
}
