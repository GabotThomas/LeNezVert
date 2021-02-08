import React, { useState, useEffect,useRef} from 'react';
import * as firebase from "../Server/firebase";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";


function Documentation() {
    
    const {id} = useParams();
    const paramRef = useRef(id);
    const [data, setData] = useState([""]);
    useEffect(() => {
        // eslint-disable-next-line
        firebase.ParfumLoad('Documentation/Documentation' + paramRef.current)
        .then(function(snapshot) {
            setData(snapshot.val())
        })

    }, [setData]);

    const item = [];
    
    if(data.content){
        for(let i=0;i< data.content.length;i++){
            item.push(           
                
                    <div class="col-12 d-flex mb-2">
                        <div class="d-flex-c col-6 content" dangerouslySetInnerHTML={{__html: data.content[i]}} />
                    </div>
            )
        }
    }
    
  return (
    data ? (
    <>
        <div class="container d-flex mb-8 eng mt-4">
            {item}
            <div class="col-10 d-flex jst-c ma">
                <Link to={"/nos_engagements"} className={"button btn-v"}>
                    Retour
                </Link>
            </div>
        </div>    
    </>
    ):(
        <div>Loading..</div>
    )
  );
}

export default Documentation;