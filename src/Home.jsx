import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsNew } from "./ProductsNew";
import { ProductsIndex } from "./ProductsIndex";
import { Modal } from "./Modal";

export function Home() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} />
      <Modal show={isProductsShowVisible}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
