import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/products";

const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
};

export default useProduct;