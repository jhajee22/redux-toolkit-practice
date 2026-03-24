import { getProducts } from "../../services/ProductService";
import { useEffect, useState } from "react";

function ShoppingProducts() {
  //Step 1 -- I need to store data
  const [products, setProducts] = useState([]);
  //API takes time so load - Loader
  const [loading, setLoading] = useState(true);
  //API can fail - Error state
  const [error, setError] = useState("");

  // When to call API- USEeFFECT

  useEffect(() => {
setLoading(true);
    //API Call here
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
console.log("ERROR:", err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //Loading State

  if (loading) return <p>Loading...</p>;

  //Error
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Products Table</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShoppingProducts;