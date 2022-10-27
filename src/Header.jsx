import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/products/new">Add Product</Link> |
      {localStorage.jwt === undefined ? (
        <>
          <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
        </>
      ) : (
        <LogoutLink />
      )}
    </header>
  );
}
