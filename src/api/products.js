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

const createProduct = async (product) => {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
};

const updateProduct = async ({ id, product }) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update product");
  }

  return response.json();
};

const deleteProduct = async (id) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }

  return response.json();
};

export {
  fetchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
export default fetchProducts;