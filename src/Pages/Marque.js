import React, { useState, useEffect} from 'react';
import * as firebase from "../Server/firebase";
import {Link} from "react-router-dom";


function Marque() {

    const [data, setData] = useState([]);
    useEffect(() => {
        firebase.ParfumLoad('Parfum')
        .then(function(snapshot) {
            setData([]);
            snapshot.forEach((childSnapshot) => {
                setData(
                    arr => [...arr, childSnapshot.val()]
                )
            });
        })

    }, [setData]);

    

    const test = data.map((item)=>{
        return(
            <Link to={"/Parfum/"+item.id} className="col-3 d-flex-c relative article mt-8 bdr-20">
                    <div class="float"><img src={item.urlThumbail} alt="Article"/></div>
                    <h2 class="title ta mt-6 ">{item.name}</h2>
                    <p class="text ta">{item.ldesc}</p>
            </Link>
        )
        }) ;
        
  return (
    <>
    <div class="collection container d-flex-c mb-8">
            <h1 class="title c-vert mb">Les Marques</h1>
            <div class="d-flex jst-start">
                {test}
            </div>
        </div>
    </>
  );
}

export default Marque;



