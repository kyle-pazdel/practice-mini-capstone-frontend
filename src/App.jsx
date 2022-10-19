import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";

function ProductsShow(props) {
  // product = products.findBy((id, number) =>{
  //   return this.filter((product) => return product[id] == number).first();
  // });

  // console.log(product());

  return (
    <div>
      <h1>{}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
