import { useState } from "react";
import useCreateProduct from "../hooks/useCreateProduct";

function CreateProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const { mutate, isPending, isSuccess, isError, error } =
        useCreateProduct();

    const handleSubmit = (e) => {
        e.preventDefault();

        mutate({
            title,
            price: Number(price),
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">
            <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm">
                <h1 className="mb-6 text-2xl font-bold text-gray-900">
                    Create Product
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Product title
                        </label>

                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
                            placeholder="Enter product title"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium text-gray-700">
                            Price
                        </label>

                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
                            placeholder="Enter price"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isPending ? "Creating..." : "Create Product"}
                    </button>

                    {isSuccess && (
                        <p className="text-green-600">
                            Product created successfully!
                        </p>
                    )}

                    {isError && (
                        <p className="text-red-600">
                            {error.message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;