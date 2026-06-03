import { useEffect, useState } from "react";

export function Products() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: ""
  });

  // READ
  const fetchProducts = () => {
    fetch("http://localhost/online-shop/backend/api/getProducts.php")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // CREATE
  const addProduct = () => {
    fetch("http://localhost/online-shop/backend/api/addProduct.php", {
      method: "POST",
      body: new URLSearchParams(form)
    }).then(() => fetchProducts());
  };

  // UPDATE
  const updateProduct = () => {
    fetch("http://localhost/online-shop/backend/api/updateProduct.php", {
      method: "POST",
      body: new URLSearchParams(form)
    }).then(() => fetchProducts());
  };

  // DELETE
  const deleteProduct = (id) => {
    fetch("http://localhost/online-shop/backend/api/deleteProduct.php", {
      method: "POST",
      body: new URLSearchParams({ id })
    }).then(() => fetchProducts());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products CRUD</h1>

      {/* FORM */}
      <div>
        <input name="id" placeholder="ID (for update)" onChange={handleChange} />
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="stock" placeholder="Stock" onChange={handleChange} />

        <button onClick={addProduct}>Add</button>
        <button onClick={updateProduct}>Update</button>
      </div>

      <hr />

      {/* LIST */}
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>{p.price} €</p>
          <p>Stock: {p.stock}</p>

          <button onClick={() => deleteProduct(p.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/online-shop/backend/api/getProducts.php")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.price} €</p>
        </div>
      ))}
    </div>
  );

  fetch("http://localhost/online-shop/backend/api/addProduct.php", {
  method: "POST",
  body: new URLSearchParams({
    name: "Laptop",
    description: "Gaming laptop",
    price: "1200",
    stock: "5"
  })
})
.then(res => res.json())
.then(data => console.log(data));

function deleteProduct(id) {
  fetch("http://localhost/online-shop/backend/api/deleteProduct.php", {
    method: "POST",
    body: new URLSearchParams({ id })
  })
  .then(res => res.json())
  .then(data => console.log(data));
}

}

export default App;