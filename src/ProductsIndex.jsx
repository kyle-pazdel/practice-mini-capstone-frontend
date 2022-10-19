export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div className="products" key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.images[0]} alt={product.description} />
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Available: {product.inventory}</p>
          <button onClick={() => props.onSelectProduct(product)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
