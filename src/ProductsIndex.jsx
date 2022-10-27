import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="products-index" className="row">
      <h1>All Products</h1>
      Search filter:{" "}
      <input list="names" type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <datalist id="names">
        {props.products.map((product) => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      {props.products
        .filter(
          (product) =>
            product.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
            product.description.toLowerCase().includes(searchFilter.toLowerCase())
        )
        .map((product) => (
          <div className="products bg-dark card m-1" key={product.id} style={{ width: "18rem" }}>
            {/* <img src={product.images[0].url} className="card-img-top" alt={product.description} /> */}
            {console.log(product.images[0])}
            <div className="card-body bg-custom-1">
              <h2 className="card-title bg-custom-1">{product.name}</h2>
              <p className="card-text bg-custom-1">Description: {product.description}</p>
              <p>Price: {product.price}</p>
              <p>Available: {product.inventory}</p>
              <button className="btn btn-primary" onClick={() => props.onSelectProduct(product)}>
                More Info
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
