const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

const fetchProduct = async (id) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
};

export { fetchProduct };
export default fetchProducts;