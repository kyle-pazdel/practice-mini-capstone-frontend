import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <a href="#products-new">Add Product</a>
    </header>
  );
}
