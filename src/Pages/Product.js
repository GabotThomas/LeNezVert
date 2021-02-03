import React, { useState, useEffect} from 'react';
import * as firebase from "../Server/firebase";
import {useParams} from "react-router-dom";


function Product() {
    let { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        firebase.ParfumLoad('/Parfum/Parfum'+id)
        .then(function(snapshot) {
            setData(snapshot.val())
        })

    }, [setData]);
    console.log(data)
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