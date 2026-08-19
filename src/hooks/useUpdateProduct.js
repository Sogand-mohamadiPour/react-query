import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../api/products";

const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProduct,

        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });

            queryClient.invalidateQueries({
                queryKey: ["product", variables.id],
            });
        },
    });
};

export default useUpdateProduct;