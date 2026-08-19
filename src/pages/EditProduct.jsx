import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import useProduct from "../hooks/useProduct";
import useUpdateProduct from "../hooks/useUpdateProduct";

function EditProduct() {
    const { id } = useParams();

    const { data, isLoading, error } = useProduct(id);
    const updateMutation = useUpdateProduct();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Failed to load product.</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        updateMutation.mutate({
            id,
            product: {
                title,
                price: Number(price),
            },
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">
            <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm">

                <Link
                    to={`/products/${id}`}
                    className="text-sm text-indigo-600"
                >
                    ← Back
                </Link>

                <h1 className="mb-6 mt-4 text-2xl font-bold">
                    Edit Product
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="mb-2 block font-medium">
                            Title
                        </label>

                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={data.title}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Price
                        </label>

                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder={data.price}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={updateMutation.isPending}
                        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white disabled:opacity-50"
                    >
                        {updateMutation.isPending
                            ? "Updating..."
                            : "Update Product"}
                    </button>

                    {updateMutation.isSuccess && (
                        <p className="text-green-600">
                            Product updated successfully!
                        </p>
                    )}

                    {updateMutation.isError && (
                        <p className="text-red-600">
                            {updateMutation.error.message}
                        </p>
                    )}

                </form>
            </div>
        </div>
    );
}

export default EditProduct;