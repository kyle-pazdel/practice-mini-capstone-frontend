import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsNew } from "./ProductsNew";
import { ProductsIndex } from "./ProductsIndex";
import { Modal } from "./Modal";

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

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} onSelectProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleHideProduct}>
        <h2>{currentProduct.name}</h2>
        <img src={currentProduct.images[1]} alt={currentProduct.description} />
        <p>{currentProduct.description}</p>
        <p>Price: {currentProduct.price}</p>
        <p>Available: {currentProduct.inventory}</p>
      </Modal>
    </div>
  );
}
