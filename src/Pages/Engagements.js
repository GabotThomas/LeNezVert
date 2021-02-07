import React, { useState, useEffect} from 'react';
import * as firebase from "../Server/firebase";
import {Link} from "react-router-dom";


function Engagements() {


        
  return (
    <>
    <div class="engagements">
        <div class="container d-flex-c align-c">
            <div class="col-10 d-flex mb-8">
                <div class="col-5 d-flex jst-c bdr-20 bg-c align-e p-1" style={{background: "url('Img/Gallerie/engagement.png')"}}>
                    <div class="blur bdr-20 d-flex col-12 jst-c" style={{}}>
                        <h1 class="title t2 c-white">Nos Engagements</h1>
                    </div>
                </div>
                <div class="col-7 d-flex-c">
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
                <div class="col-12  eng-pre mb-4">
                    <div class="col-7 d-flex nw"> 
                        <div class="ythgd c-vert bodoni">01</div>
                        <div class="d-flex iopml nw">
                            <div class="bar"></div>
                            <div class="d-flex-c ">
                                <h3>Qu’est ce que l’IFRA ?</h3>
                                <p class="text">L’IFRA : International Fragrance Association (Association Internationale de Parfum) est un organisme qui représente l’industrie du parfum à l’international.</p>
                                <strong class="bodoni ft-20">En savoir plus</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12  eng-pre mb-4">
                    <div class="col-7 d-flex nw"> 
                        <div class="ythgd c-vert bodoni">02</div>
                        <div class="d-flex iopml nw">
                            <div class="bar"></div>
                            <div class="d-flex-c ">
                                <h3>Qu’est ce que l’IFRA ?</h3>
                                <p class="text">L’IFRA : International Fragrance Association (Association Internationale de Parfum) est un organisme qui représente l’industrie du parfum à l’international.</p>
                                <strong class="bodoni ft-20">En savoir plus</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12  eng-pre mb-4">
                    <div class="col-7 d-flex nw"> 
                        <div class="ythgd c-vert bodoni">03</div>
                        <div class="d-flex iopml nw">
                            <div class="bar"></div>
                            <div class="d-flex-c ">
                                <h3>Qu’est ce que l’IFRA ?</h3>
                                <p class="text">L’IFRA : International Fragrance Association (Association Internationale de Parfum) est un organisme qui représente l’industrie du parfum à l’international.</p>
                                <strong class="bodoni ft-20">En savoir plus</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12  eng-pre">
                    <div class="col-7 d-flex nw"> 
                        <div class="ythgd c-vert bodoni">04</div>
                        <div class="d-flex iopml nw">
                            <div class="bar"></div>
                            <div class="d-flex-c ">
                                <h3>Qu’est ce que l’IFRA ?</h3>
                                <p class="text">L’IFRA : International Fragrance Association (Association Internationale de Parfum) est un organisme qui représente l’industrie du parfum à l’international.</p>
                                <strong class="bodoni ft-20">En savoir plus</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  );
}

export default Engagements;