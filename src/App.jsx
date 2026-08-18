import "./App.css";
import useProduct from "./hooks/useProduct";

function App() {
  const { data, isLoading, error } = useProduct(10);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.price}</p>
    </div>
  );
}

export default App;