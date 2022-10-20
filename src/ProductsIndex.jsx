export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div className="products card" key={product.id} style={{ width: "18rem" }}>
          <img src={product.images[0]?.url} className="card-img-top" alt={product.description} />
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-text">Description: {product.description}</p>
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
