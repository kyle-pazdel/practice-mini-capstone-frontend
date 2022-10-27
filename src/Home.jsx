import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function Home() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
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
      <ProductsIndex products={products} onSelectProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleHideProduct}>
        <ProductsShow
          product={currentProduct}
          onUpdateProduct={handleUpdateProduct}
          onDestroyProduct={handleDestroyProduct}
        />
      </Modal>
    </div>
  );
}
