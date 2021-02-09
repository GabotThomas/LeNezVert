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
import Documentation from "./Pages/Documentation";
import Propos from "./Pages/Propos";
import Faq from "./Pages/Faq";



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
            <Route path={"/Documentation/:id"}>
                <Documentation/>
            </Route>
            <Route path={"/Notre_Histoire"}>
                <Propos/>
            </Route>
            <Route path={"/FAQ"}>
                <Faq />
            </Route>
          </main>
        <Footer/>
      </div>
      </>
    )
    

  );
}
