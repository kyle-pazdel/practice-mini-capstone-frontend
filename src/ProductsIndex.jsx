export function ProductsIndex(props) {
  return (
    <div id="products-index" className="row">
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div className="products bg-dark card m-1" key={product.id} style={{ width: "18rem" }}>
          <img src={product.images[0]?.url} className="card-img-top" alt={product.description} />
          <div className="card-body bg-custom-1">
            <h2 className="card-title bg-custom-1">{product.title}</h2>
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
