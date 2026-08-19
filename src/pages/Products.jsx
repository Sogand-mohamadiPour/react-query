import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function Products() {
    const { data, isLoading, error } = useProducts();

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <p className="text-lg font-medium text-gray-600">Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <p className="text-lg font-medium text-red-500">
                    Failed to load products.
                </p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-100 px-6 py-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Product Manager
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Products fetched and managed with TanStack Query
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((product) => (
                        <Link
                            key={product.id}
                            to={`/products/${product.id}`}
                            className="group rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-5 flex h-48 items-center justify-center rounded-lg bg-gray-50 p-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full max-w-full object-contain transition group-hover:scale-105"
                                />
                            </div>

                            <h2 className="line-clamp-2 min-h-12 font-semibold text-gray-900">
                                {product.title}
                            </h2>

                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xl font-bold text-indigo-600">
                                    ${product.price}
                                </span>

                                <span className="text-sm font-medium text-gray-400 transition group-hover:text-indigo-600">
                                    View details →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Products;
