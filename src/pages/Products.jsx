import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function Products() {
    const { data, isLoading, error } = useProducts();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error!</p>;
    }

    return (
        <div>
            <h1>Products</h1>

            <ul>
                {data.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;