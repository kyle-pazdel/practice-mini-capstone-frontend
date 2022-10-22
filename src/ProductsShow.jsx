import axios from "axios";

export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch("http://localhost:3000/products/" + props.product.id + ".json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

  return (
    <div id="products-show">
      <h2>{props.product.name}</h2>
      <img src={props.product.images[0]?.url} alt={props.product.description} />
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
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={props.product.image}
            className="form-control"
          ></input>
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
    </div>
  );
}
