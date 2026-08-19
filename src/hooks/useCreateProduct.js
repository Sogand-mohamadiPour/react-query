import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { createProduct } from "../api/products";

const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProduct,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
};

export default useCreateProduct;