import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/products";

const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    staleTime: 10 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};

export default useProduct;