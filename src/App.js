import React from "react";
import {Route} from "react-router-dom";
import "./Assets/Css/custom.css";
import Home from "./Pages/Home";
import Marque from './Pages/Marque';
import Header from './Components/header'; 
import Footer from './Components/footer'; 
import Product from "./Pages/Product";
import { useLocation } from 'react-router-dom';
import Backend from "./Backend/Backend"
import Engagements from "./Pages/Engagements";



export default function App() {
  const location = useLocation();
  let loc = location.pathname.split('/')


  

  return (
    loc[1] === '0vdviz48748dz854a154c8774fz1c5c45z'? (
      <>
        <div id="Backend">
          <main>
            <Route path={"/0vdviz48748dz854a154c8774fz1c5c45z"}>
              <Backend/>
            </Route>

          </main>
        </div>
      </>
    ):(
      <>
      <div id={location.pathname ===  "/" ? "index":""}>
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
            <Route path={"/nos_engagements"}>
                <Engagements/>
            </Route>
          </main>
        <Footer/>
      </div>
      </>
    )
    

  );
}
