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

  const handleUpdateProduct = (params) => {
    axios.patch("http://localhost:3000/products/" + currentProduct.id + ".json", params).then((response) => {
      console.log(response.data);
      const updatedProduct = response.data;
      setCurrentProduct(updatedProduct);
      setProducts(
        products.map((product) => {
          if (product.id === updatedProduct.id) {
            return updatedProduct;
          } else {
            return product;
          }
        })
      );
    });
  };

  const handleDestroyProduct = (product) => {
    axios.delete("http://localhost:3000/products/" + product.id + ".josn").then((response) => {
      setProducts(products.filter((p) => p.id !== product.id));
      handleHideProduct();
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <ProductsIndex products={products} onSelectProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleHideProduct}>
        <ProductsShow
          product={currentProduct}
          onUpdateProduct={handleUpdateProduct}
          onDestroyProduct={handleDestroyProduct}
        />
      </Modal>
      <ProductsNew onCreateRecipe={handleCreateRecipe} />
    </div>
  );
}
