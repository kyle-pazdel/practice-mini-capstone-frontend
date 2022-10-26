import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/products/new">Add Product</Link>
    </header>
  );
}
