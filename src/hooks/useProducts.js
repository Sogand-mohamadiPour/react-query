import { useQuery } from "@tanstack/react-query";
import fetchProducts from "../api/products";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 10 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};

export default useProducts;