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
           <div class="col-6 col-12-sm mb"><img class="bdr-20 "src={data.urlImg} alt=""/></div>
           <div class="col-6 d-flex-c jst-c col-12-sm">
               <h1 class="title">{data.name}</h1>
               <p class="text mb col-8 col-12-md">{data.ldesc}</p>
               <a href={data.link ? data.link : ""}  target="_blank"class="button btn-v">Le site de la marque</a>
           </div>
       </div>
       <div class="container d-flex mb-8">
            <div class="d-flex-c col-6 content col-12-sm mb">
                <div dangerouslySetInnerHTML={{__html: data.content}} />
            </div>
            <div class="col-6 recommandation col-12-sm" >
                <div class="col-6 ma relative col-10-md col-12-st">
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