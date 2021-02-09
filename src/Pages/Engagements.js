import React, { useState, useEffect} from 'react';
import * as firebase from "../Server/firebase";
import {Link} from "react-router-dom";


function Engagements() {

    const [data, setData] = useState([]);
    useEffect(() => {
        firebase.DocLoad('Documentation')
        .then(function(snapshot) {
            setData([]);
            snapshot.forEach((childSnapshot) => {
                setData(
                    arr => [...arr, childSnapshot.val()]
                )
            });
        })

    }, [setData]);

    

    const test = data.map((item, index)=>{
        return(
            <div class="col-12  eng-pre mb-4">
                <div class="col-7 d-flex nw col-10-md col-12-sm"> 
                    <div class="ythgd c-vert bodoni">0{index+1}</div>
                    <div class="d-flex iopml nw">
                        <div class="bar"></div>
                        <div class="d-flex-c ">
                            <h3>{item.titre}</h3>
                            <p class="text">{item.ldesc}</p>
                            <Link to={"/Documentation/"+item.id}>
                                <strong class="bodoni ft-20">En savoir plus</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
        }) ;
        
  return (
    <>
    <div class="engagements">
        <div class="container d-flex-c align-c">
            <div class="col-10 d-flex mb-8 col-12-md">
                <div class="col-5 d-flex jst-c bdr-20 bg-c align-e p-1 col-12-sm mb" style={{background: "url('Img/Gallerie/engagement.png')"}}>
                    <div class="blur bdr-20 d-flex col-12 jst-c" style={{}}>
                        <h1 class="title t2 c-white ta">Nos Engagements</h1>
                    </div>
                </div>
                <div class="col-7 d-flex-c mb col-12-sm">
                    <div class="col-12 bdr-15 d-flex bg-v p-1 mb">
                        <div class="col-3 title c-white jst-c d-flex align-c">1</div>
                        <div class="col-9">
                            <strong class="c-white text b-600">
                                Respecter les labels bio
                            </strong>
                            <p class="c-white text">aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div class="col-12 bdr-15 d-flex bg-o p-1 mb">
                        <div class="col-3 title c-white jst-c d-flex align-c">2</div>
                        <div class="col-9">
                            <strong class=" text b-600">
                                Respecter les labels bio
                            </strong>
                            <p class=" text">aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div class="col-12 bdr-15 d-flex bg-g p-1 ">
                        <div class="col-3 title  jst-c d-flex align-c">3</div>
                        <div class="col-9">
                            <strong class=" text b-600">
                                Respecter les labels bio
                            </strong>
                            <p class=" text">aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-flex documentation mb-8">
            <h1 class="title c-vert col-12 ta mb-2">Documentation</h1>
            {test}
        </div>
    </div>
    </>
  );
}

export default Engagements;