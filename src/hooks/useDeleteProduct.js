import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { deleteProduct } from "../api/products";

const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,

        onMutate: async (id) => {
            // Stop any products query that is currently fetching
            await queryClient.cancelQueries({
                queryKey: ["products"],
            });

            // Save the current products
            const previousProducts = queryClient.getQueryData([
                "products",
            ]);

            // Remove the product immediately from the cache
            queryClient.setQueryData(
                ["products"],
                (oldProducts) => {
                    if (!oldProducts) return oldProducts;

                    return oldProducts.filter(
                        (product) => product.id !== Number(id)
                    );
                }
            );

            // Return this so onError can use it
            return { previousProducts };
        },

        onError: (error, id, context) => {
            // Put the old data back
            queryClient.setQueryData(
                ["products"],
                context.previousProducts
            );
        },

        onSettled: () => {
            // Make sure our final data is synchronized with the server
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
};

export default useDeleteProduct;