import React, { useState, useEffect} from 'react';
import * as firebase from "../Server/firebase";



function Faq() {

    const [data, setData] = useState([]);
    useEffect(() => {
        firebase.FaqLoad('Faq')
        .then(function(snapshot) {
            setData([]);
            snapshot.forEach((childSnapshot) => {
                setData(
                    arr => [...arr, childSnapshot.val()]
                )
            });
        })

    }, [setData]);

    console.log(data)

    const test = data.map((item)=>{
        return(
                <Ques titre={item.titre} content={item.content} color={item.color}/>
        
        )
        }) ;
        
  return (
    <>
    <div class="faq container d-flex-c mb-8">
            <h1 class="title c-vert mb">FAQ</h1>
            <div class="d-flex">
                {test}
            </div>
        </div>
    </>
  );
}

export default Faq;


function Ques(props){

    const [active, setActive] = useState(false);

    const open = ()=>{
        setActive(!active);
    }

    return(
        <>
            <div onClick={open} class="col-12 d-flex-c my-2 ptn ques">
                <div class="col-8 bdr-20 bg-g p-2 titre">{props.titre}</div>
                {active ? 
                    <div className={"col-8 bdr-20 bg-g p-2 description text "+props.color} dangerouslySetInnerHTML={{__html: props.content}}>
                    </div>:
                    <></>
                }
            </div>

        </>
    );

}