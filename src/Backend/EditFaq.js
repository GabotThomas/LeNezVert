import React, { useState, useEffect,useRef} from 'react';
import {useParams} from "react-router-dom";
import * as firebase from "../Server/firebase";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';


function EditFaq(props){
    const {id} = useParams();
    const paramRef = useRef(id);
    const [data, setData] = useState();

    useEffect(() => {
        // eslint-disable-next-line
        firebase.FaqLoad('Faq/Faq' + paramRef.current)
        .then(function(snapshot) {
            setData(snapshot.val());
        })

    },[setData]);

        
        return (
            <Formulaire data={data} id={paramRef.current}/> 
        );
        
}
export default EditFaq;


function Formulaire(props) {


    const [titre, setTitre] = useState("");
    const [Content, setContent] = useState("");
    const [color, setColor] = useState("");


    useEffect(() => {
        if(props.data){
            setTitre(props.data.titre)
            setContent(props.data.content);
            setColor(props.data.color);
        }
    },[props.data]);
      
    const send = () =>{
        let box = 
            {
                "id":props.id,
                "titre":titre,
                "color":color

            };
            box.content = Content;
            console.log(color)
            firebase.FaqSet(box);

            
    }
    const ChangeText = (content)=>{
        setContent(content);
    }

  return (
    <>
        <div class="container d-flex-c backend p-2 align-c">
            <div class="col-8">
                <div class="col-12 ft-20 mb">Titre</div>
                <Text value={setTitre} default={titre} pc={'Nom de la marque'} type={'text'}/>
                <div class="col-12 ft-20 mt-2 mb">Petite description</div>
                <SunEditor 
                    setContents={Content}
                    setOptions={{
                        height:600,
                        buttonList:[
                            ['codeView'],
                            ['bold','italic','underline'],
                            ['undo', 'redo','font', 'formatBlock', 'fullScreen', 'showBlocks'],
                        ] // Or Array of button list, eg. [['font', 'align'], ['image']]
                    }}
                    onChange={ChangeText}
                
                />
                <Select color={setColor} default={color}/>
                <div class="button btn-v ma mt-4" onClick={send}>Envoyer</div>

            </div>
        </div>
    </>
  );
}





function Text(props){

    const [value, setValue] = useState("");
    useEffect(() => {
        setValue(props.default);
    },[props.default,props.index]);

    const handleChange = (event) => {
        setValue(event.target.value)
        props.value(event.target.value);
        
    }
    ;

    return(
        <input  type={props.type} onChange={handleChange} placeholder={props.pc} value={value} class="form form-black col-12 mb"></input>
    );
}

function Select(props){
    const [value, setValue] = useState('gn');
    useEffect(() => {
        if(props.default !== ""){
            setValue(props.default);
        }
    },[props.default]);

    const change = (event) =>{
        setValue(event.target.value);
        props.color(event.target.value);
    }
    return(
        <>
        <select value={value} onChange={change}>
            <option selected  value="gn">Gris Noir</option>
            <option value="ng">Noir Gris</option>
            <option value="gv">Gris Vert</option>
            <option value="vg">Vert Gris</option>
        </select>
        <div class="p-2 bg-w">
            <div className={"col-12 d-flex-c my-2 ptn ques " +value}>
                <div class="col-12 bdr-20 bg-g p-2 titre">Votre Question</div>
                <div className={"col-12 bdr-20 bg-g p-2 text description "}>
                    Testcisjfisjfijifjsiiiiijdjdjdjdjdjd
                </div>
            </div>
        </div>

        </>

    )
}


