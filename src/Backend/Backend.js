import React from 'react';
import {Route} from "react-router-dom";
import ListProduct from "./ListProduct";
import EditProduct from "./EditProduct";
import {Link} from "react-router-dom";
import ListDoc from "./ListDoc";
import EditDoc from "./EditDoc";



function Backend() {

    
        
  return (
    <>
        <Route exact path={"/0vdviz48748dz854a154c8774fz1c5c45z/"}>
          <div class="container d-flex-c backend p-2 align-c">
            <div class="col-8">
              <div class="col-12">
                <Link to={"/0vdviz48748dz854a154c8774fz1c5c45z/product/"} className={"col-12 d-flex relative jst-c  mb"}>
                  <h2 class="title ta">Parfum</h2>
                </Link>  
                <Link to={"/0vdviz48748dz854a154c8774fz1c5c45z/documentation/"} className={"col-12 d-flex relative jst-c  mb"}>
                  <h2 class="title ta">Documentation</h2>
                </Link> 
              </div>
            </div>
          </div>
        </Route>
        <Route exact path={"/0vdviz48748dz854a154c8774fz1c5c45z/product/"}>
            <ListProduct/>
        </Route>
        <Route exact path={"/0vdviz48748dz854a154c8774fz1c5c45z/product/:id"}>
            <EditProduct/>
        </Route>
        <Route exact path={"/0vdviz48748dz854a154c8774fz1c5c45z/documentation/"}>
            <ListDoc/>
        </Route>
        <Route exact path={"/0vdviz48748dz854a154c8774fz1c5c45z/documentation/:id"}>
            <EditDoc/>
        </Route>
    </>
  );
}

export default Backend;