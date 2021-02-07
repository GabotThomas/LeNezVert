import React, { useState, useEffect} from 'react';
import * as firebase from "../Server/firebase";
import {Link} from "react-router-dom";


function ListProduct() {


    const [data, setData] = useState([]);
    const [nbr, setNbr] = useState(0);

    useEffect(() => {
        firebase.ParfumLoad('Parfum')
        .then(function(snapshot) {
            setData([]);
            let i = 0;
            snapshot.forEach((childSnapshot) => {
                i++;
                setNbr(i+1)
                setData(
                    arr => [...arr, childSnapshot.val()]
                )
                
                
            });

        })
        
        
    }, [setData]);
    
    

    const test = data.map((item)=>{
        
        return(
            <Link to={"/0vdviz48748dz854a154c8774fz1c5c45z/product/"+item.id} className={"col-12 d-flex relative jst-c  mb"}>
                    <h2 class="title ta">{item.name}</h2>
            </Link>
        )
        }) ;
    
        
  return (
    <>
        <div class="container d-flex-c backend p-2 align-c">
            <div class="col-12 d-flex ">
                <Link to={"/0vdviz48748dz854a154c8774fz1c5c45z/product/"+nbr} className={"button btn-v"}>Ajouter</Link>
            </div>
            <div class="col-8">
                <div class="col-12">
                    {test}
                </div>
            </div>
        </div>
    </>
  );
}

export default ListProduct;
