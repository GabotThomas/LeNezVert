import React, { useState, useEffect,useRef} from 'react';
import {useParams} from "react-router-dom";
import * as firebase from "../Server/firebase";
import ImageUploader from 'react-images-upload';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';






function EditProduct(){
    const {id} = useParams();
    const paramRef = useRef(id);
    const [data, setData] = useState();

    if(paramRef.current){
        console.log(paramRef.current);
    }

    useEffect(() => {
        // eslint-disable-next-line
        firebase.ParfumLoad('Parfum/Parfum' + paramRef.current)
        .then(function(snapshot) {
            setData(snapshot.val());
        })

    },[setData]);

    return (
        <Formulaire data={data} id={paramRef.current}/>
    );


}
export default EditProduct;






function Formulaire(props) {



    const [name, setName] = useState("");
    const [ldesc, setLdesc] = useState("");
    const [Thumbail, setThumbail] = useState();
    const [Content, setContent] = useState("");
    const [Img, setImg] = useState();
    const [Reco1, setReco1] = useState();
    const [Reco2, setReco2] = useState();

    useEffect(() => {
        if(props.data){
            setName(props.data.name)
            setLdesc(props.data.ldesc)
            setContent(props.data.content)
            setThumbail(props.data.urlThumbail)
            setImg(props.data.urlImg)
            setReco1(props.data.recommandation1)
            setReco2(props.data.recommandation2)
        }
    },[props.data]);



    const ChangeText = content =>{
        setContent(content);
    }
    const send = () =>{
        let box = 
            {
                "id":props.id,
                "name":name,
                "ldesc":ldesc,
                "content":Content,
                "urlThumbail":Thumbail,
                "urlImg":Img,
                "recommandation1":Reco1,
                "recommandation2":Reco2,

            };
            firebase.ParfumSet(box);

    }

  return (
    <>
        <div class="container d-flex-c backend p-2 align-c">
            <div class="col-8">
                <div class="col-12 ft-20 mb">Marque</div>
                <Text value={setName} default={name} pc={'Nom de la marque'} type={'text'}/>
                <div class="col-12 ft-20 mt-2 mb">Petite description</div>
                <Textarea value={setLdesc} default={ldesc} pc={'Petite description'} type={'textarea'}/>
                <div class="col-12 ft-20 mt-2 mb">Thumbail</div>
                <ImageLoad link={setThumbail} default={Thumbail} id={props.id} folder={"Thumbail"}/>
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
                <div class="col-12 ft-20 mt-2 mb">Image</div>
                <ImageLoad link={setImg} default={Img} id={props.id} folder={"Img"}/>
                <div class="col-12 ft-20 mt-2 mb">Recommandation</div>
                <div class="col-12 d-flex">
                    <div class="col-6">
                        <ImageLoad link={setReco1} default={Reco1} id={props.id} folder={"Recommandation"}/>
                    </div>
                    <div class="col-6">
                        <ImageLoad link={setReco2} default={Reco2} id={props.id} folder={"Recommandation"}/>
                    </div>
                </div>

                

                <div class="button btn-v ma" onClick={send}>Envoyer</div>

            </div>
        </div>
    </>
  );
}





function Text(props){

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

function ImageLoad(props){

    const [value, setValue] = useState();

    useEffect(() => {
        setValue(props.default);
    },[props.default]);

    const onDrop = (picture) => {

            firebase.ImgSend(picture,props.id,props.folder)
            .then(snapshot =>{
                snapshot.ref.getDownloadURL()
                .then(url =>{
                    props.link(url);
                    setValue(url)
                })
            })

    };

    const deletee = () => {
        firebase.ImgDelete(value)
        setValue();
    }


    const img = <img src={value} alt=""></img>


    return(
        <>
        
        {value ? <div class="col-12 d-flex-c align-c mb-2">{img}<div class="button btn-r" onClick={deletee} >Supprimer</div></div> : 
        <ImageUploader
            {...props}
            withIcon={false}
            onChange={onDrop}
            imgExtension={[".jpg",".png"]}
            maxFileSize={5242880}
            withPreview={false}
            label={""}
            singleImage={true}
        />
        }
        </>
    );

}