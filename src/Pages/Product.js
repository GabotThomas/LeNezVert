import React, { useState, useEffect,useRef} from 'react';
import * as firebase from "../Server/firebase";
import {useParams} from "react-router-dom";


function Product() {
    
    const {id} = useParams();
    const paramRef = useRef(id);
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
        <div class="container d-flex mb-4">
           <div class="col-6"><img class="bdr-20 "src={data.urlImg} alt=""/></div>
           <div class="col-6 d-flex-c jst-c">
               <h1 class="title">{data.name}</h1>
               <p class="text mb col-8">{data.ldesc}</p>
               <div class="button btn-v">Le site de la marque</div>
           </div>
       </div>
       <div class="container d-flex mb-8">
            <div class="d-flex-c col-6 content">
                <div dangerouslySetInnerHTML={{__html: data.content}} />
            </div>
            <div class="col-6 recommandation" >
                <div class="col-6 ma relative ">
                    <img class="bdr-20"src={data.recommandation1} alt=""/>
                    <div class="reco relative">
                        <div class="title t2 c-vert ta jst-c ">recommandation</div>
                    </div>
                    <img class="bdr-20" src={data.recommandation2} alt=""/>
                    
                </div>
            </div>
        </div>
    </>
    ):(
        <div>Loading..</div>
    )
  );
}

export default Product;