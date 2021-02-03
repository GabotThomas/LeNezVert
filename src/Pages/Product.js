import React, { useState, useEffect,useRef} from 'react';
import * as firebase from "../Server/firebase";
import {useParams} from "react-router-dom";


function Product() {
    
    const {id} = useParams();
    console.log(id)
    
    const paramRef = useRef(id);
    console.log(paramRef)
    const [data, setData] = useState();
    useEffect(() => {
        // eslint-disable-next-line
        firebase.ParfumLoad('Parfum/Parfum' + paramRef.current)
        .then(function(snapshot) {
            setData(snapshot.val())
        })

    }, [setData]);
  return (
    data ? (
    <>
        <div>Produit: {data.id}</div>
    </>
    ):(
        <div>Loading..</div>
    )
  );
}

export default Product;