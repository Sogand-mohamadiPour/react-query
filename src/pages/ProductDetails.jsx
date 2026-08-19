import { Link, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

function ProductDetails() {
    const { id } = useParams();

    const { data, isLoading, error } = useProduct(id);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <p className="text-lg font-medium text-gray-600">
                    Loading product...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <p className="text-lg font-medium text-red-500">
                    Failed to load product.
                </p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-100 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <Link
                    to="/"
                    className="mb-8 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                    ← Back to products
                </Link>

                <div className="grid gap-10 rounded-2xl bg-white p-8 shadow-sm md:grid-cols-2">
                    <div className="flex min-h-96 items-center justify-center rounded-xl bg-gray-50 p-8">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="max-h-96 max-w-full object-contain"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-indigo-600">
                            {data.category}
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            {data.title}
                        </h1>
                        <p className="mt-5 text-3xl font-bold text-indigo-600">
                            ${data.price}
                        </p>
                        <p className="mt-6 leading-7 text-gray-600">
                            {data.description}
                        </p>
                        <div className="mt-8 border-t border-gray-100 pt-6">
                            <p className="text-sm text-gray-500">
                                Product ID:{" "}
                                <span className="font-semibold text-gray-800">{id}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetails;