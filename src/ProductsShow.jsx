export function ProductsShow(props) {
  return (
    <div id="products-show">
      <h2>{props.product.name}</h2>
      <img src={props.product.images[0]?.url} alt={props.product.description} />
      <p>{props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p>Available: {props.product.inventory}</p>
    </div>
  );
}
