import React from 'react';
import {Route} from "react-router-dom";
import ListProduct from "./ListProduct";
import EditProduct from "./EditProduct"


function Backend() {

    
        
  return (
    <>
        <Route exact path={"/0vdviz48748dz854a154c8774fz1c5c45z"}>
            <ListProduct/>
        </Route>
        <Route exact path={"/0vdviz48748dz854a154c8774fz1c5c45z/product/:id"}>
            <EditProduct/>
        </Route>
    </>
  );
}

export default Backend;