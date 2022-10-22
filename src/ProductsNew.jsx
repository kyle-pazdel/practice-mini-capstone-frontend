export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Product Added");
    const params = new FormData(event.target);
    props.onCreateRecipe(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>New Product</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="name" className="form-label">
            Name
          </label>
          <input type="text" id="title" name="name" className="form-control"></input>
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
          <input type="number" id="price" name="price" className="form-control"></input>
        </div>
        <div className="col-md-12">
          <label for="description" className="form-label">
            Description
          </label>
          <input type="text" id="description" name="description" className="form-control"></input>
        </div>
        <div className="col-md-6">
          <label for="inventory" className="form-label">
            Inventory
          </label>
          <input type="number" id="inventory" name="inventory" min="0" className="form-control"></input>
        </div>
        <div className="col-md-6">
          <label for="supplier_id" className="form-label">
            Supplier
          </label>
          <input type="number" id="supplier_id" name="supplier_id" className="form-control"></input>
        </div>
        <div className="col-12">
          <input type="submit" id="submit" name="submit" className="btn btn-primary"></input>
        </div>
      </form>
    </div>
  );
}
