import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

function ProductDetails() {
    const { id } = useParams();

    const { data, isLoading, error } = useProduct(id);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error!</p>;
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <p>${data.price}</p>
            <p>{data.description}</p>
        </div>
    );
}

export default ProductDetails;