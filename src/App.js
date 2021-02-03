import React from "react";
import {Route} from "react-router-dom";
import "./Assets/Css/custom.css";
import Home from "./Pages/Home";
import Marque from './Pages/Marque';
import Header from './Components/header'; 
import Footer from './Components/footer'; 
import Product from "./Pages/Product"


export default function App() {
  return (
    <>
    <Header/>
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Marque">
          <Marque/>
        </Route>
        <Route path={"/Parfum/:id"}>
            <Product/>
        </Route>
      </main>
    <Footer/>
    </>

  );
}
