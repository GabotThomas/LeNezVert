import React, { useState, useEffect,useRef} from 'react';
import {useParams} from "react-router-dom";
import * as firebase from "../Server/firebase";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';







function EditDoc(props){
    const {id} = useParams();
    const paramRef = useRef(id);
    const [data, setData] = useState();

    useEffect(() => {
        // eslint-disable-next-line
        firebase.DocLoad('Documentation/Documentation' + paramRef.current)
        .then(function(snapshot) {
            setData(snapshot.val());
        })

    },[setData]);

        
        return (
            <Formulaire data={data} id={paramRef.current}/> 
        );
        




}
export default EditDoc;






function Formulaire(props) {



    const [titre, setTitre] = useState("");
    const [ldesc, setLdesc] = useState("");
    const [Content, setContent] = useState();
    const [nbr, setNbr] = useState(1);


    useEffect(() => {
        if(props.data){
            setTitre(props.data.titre)
            setLdesc(props.data.ldesc)
            setNbr(props.data.content.length);
            setContent(props.data.content);
        }
    },[props.data]);
    


    
    const send = () =>{
        let box = 
            {
                "id":props.id,
                "titre":titre,
                "ldesc":ldesc,

            };
            box.content = Content;
            firebase.DocSet(box);

    }



    const plus = () =>{
        setNbr(nbr+1);
        let tab = Content;
        tab.push("");
        setContent(tab)
    }
    const moins = () =>{
        setNbr(nbr-1);
        let tab = Content;
        tab.pop();
        setContent(tab);
    }


  return (
    <>
        <div class="container d-flex-c backend p-2 align-c">
            <div class="col-8">
                <div class="col-12 ft-20 mb">Titre</div>
                <Text value={setTitre} default={titre} pc={'Nom de la marque'} type={'text'}/>
                <div class="col-12 ft-20 mt-2 mb">Petite description</div>
                <Textarea value={setLdesc} default={ldesc} pc={'Petite description'} type={'textarea'}/>
                <Item ki={Content} setKi={setContent}/>
                <div class="col-12 d-flex">
                    <div class="button btn-v ma" onClick={plus}>+</div>
                    <div class="button btn-v ma" onClick={moins}>-</div>
                </div>
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
function Textarea(props){

    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(props.default);
    },[props.default]);

    const handleChange = (event) => {
        setValue(event.target.value)
        props.value(event.target.value);
    }
    ;

    return(
        <textarea rows={5} type={props.type} onChange={handleChange} placeholder={props.pc} value={value} class="form form-black col-12 mb"/>
    );
}


function Item(props){

    const [value, setValue] = useState();

    useEffect(()=>{
        setValue(props.ki)
    },[props.ki])

    console.log(value)
    return(
        <>
        {value ? value.map((el,index)=>{
            return <Editor key={index.toString()} item={el} arr={props.ki} setItem={props.setKi} index={index}/>
        }):<div>...Loading</div>}
        </>
        );
}
;


const Editor = ({item,arr,setItem,index})=>{

    

    const ChangeText = (content) =>{
       let newTab = arr.map((element,i)=>{
           if(i === index){
               element = content;
           }
           return element;
       });

       setItem(newTab);
    }
    

    return(
        <SunEditor 
        setContents={item}
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
    ); 
}