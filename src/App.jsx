import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { ProductsNew } from "./ProductsNew";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/new" element={<ProductsNew />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<LogoutLink />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
