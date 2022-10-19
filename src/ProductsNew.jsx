export function ProductsNew() {
  return (
    <div>
      <h1>New Product</h1>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="title" name="title"></input>
        </div>
        <div>
          <label for="image">Product Image</label>
          <input type="text" id="image" name="image"></input>
        </div>
        <div>
          <label for="price">Price</label>
          <input type="number" id="price" name="price"></input>
        </div>
        <div>
          <label for="description">Description</label>
          <input type="text" id="description" name="description"></input>
        </div>
        <div>
          <label for="inventory">Inventory</label>
          <input type="number" id="inventory" name="inventory" min="0"></input>
        </div>
        <div>
          <input type="submit" id="submit" name="submit"></input>
        </div>
      </form>
    </div>
  );
}
