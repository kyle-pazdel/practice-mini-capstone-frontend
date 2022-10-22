import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsNew } from "./ProductsNew";
import { ProductsIndex } from "./ProductsIndex";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleShowProduct = (product) => {
    setIsPostsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleHideProduct = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreateRecipe = (params) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      console.log(response.data);
      const newProduct = response.data;
      setProducts([...products, newProduct]);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <ProductsNew onCreateRecipe={handleCreateRecipe} />
      <ProductsIndex products={products} onSelectProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleHideProduct}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </div>
  );
}
