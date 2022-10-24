export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div id="products-show">
      <div>
        {console.log(props.product.images)}
        {props.product.images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={props.product.description} />
          </div>
        ))}
      </div>
      <h2>{props.product.name}</h2>
      <p>{props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p>Available: {props.product.inventory}</p>

      <h1>Update Product</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="text" id="title" name="name" defaultValue={props.product.name} className="form-control"></input>
        </div>
        <div className="col-md-6">
          <label for="image" className="form-label">
            Product Image
          </label>
          <input type="text" id="image" name="image" className="form-control"></input>
        </div>
        <div className="col-md-12">
          <label for="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={props.product.price}
            className="form-control"
          ></input>
        </div>
        <div className="col-md-12">
          <label for="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={props.product.description}
            className="form-control"
          ></input>
        </div>
        <div className="col-md-6">
          <label for="inventory">Inventory</label>
          <input
            type="number"
            id="inventory"
            name="inventory"
            min="0"
            defaultValue={props.product.inventory}
            className="form-control"
          ></input>
        </div>
        <div className="col-12">
          <button type="submit" id="submit" className="btn btn-primary">
            Update Product
          </button>
        </div>
      </form>
      <div className="pt-3">
        <button className="btn btn-sm btn-outline-primary" onClick={handleClick}>
          Delete Product
        </button>
      </div>
    </div>
  );
}
