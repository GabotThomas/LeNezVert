import React from "react";
import { Link } from "react-router-dom";
import pres from "../Assets/Img/pres.png"

function Home() {
  return (
    <>
      <div class="logo-home"><img src="/Img/logo.png" alt=""></img></div>
      <div class="banner d-flex bg-c jst-c mb-8">
           <div class="d-flex-c banner-contain">
                <h1 class="c-white title">Parfums </h1>
                <h1 class="c-white title">Éco-responsables</h1>
                <p class="c-white text mb-2 mt-2">Retrouvez sur notre site une séléction de marques de parfums proposant des produits de qualité</p>
                <Link to="/Marque">
                  <div class="button btn-v">Découvrir les marques</div>
                </Link>
            </div>    
       </div>
       <div class="slogan container d-flex jst-c mb-8">
          <div class="col-10 d-flex-c col-12-md">
            <h1 class="title ta">Le Nez Vert, premier site informatif sur les parfums</h1>
            <h1 class="title ta mb-2">éco-responsables.</h1>
            <p class="ta">Vous êtes sensibles au recyclage et à l’écologie ?</p>
            <p class="ta">Et si vous abandonniez pour de bon vos parfums mainstream ?</p>
          </div>
       </div>
       <div class="presentation d-flex container mb-8">
            <div class="col-7 col-12-sm mb">
                <img class="bdr-30" src={pres} alt="Presentation"/>
            </div>
            <div class="col-5 d-flex-c jst-c col-12-sm">
                <h1 class="title">Qu’est ce qu’une marque de <span class="text-line title">niche?<div class="line"></div></span></h1>
                <p class="text mb">Au départ, le parfum de niche décrivait principalement de jeunes Maisons de parfumerie qui tentaient l’aventure et qui, par définition étaient de taille modeste. Pour se démarquer des Maisons traditionnelles, celles-ci se devaient de proposer des fragrances signées, distinctives</p>
                <Link to="/FAQ">
                  <div class="button btn-v">Découvrir</div>
                </Link>
                
            </div>
       </div>
       <div class="ne d-flex container jst-c mb-8">
            <div class="block d-flex-c align-c col-10 bdr-20 col-12-sm">
                <h1 class="title c-vert up mb ta">NOS ENGAGEMENTS</h1>
                <h2 class="title t2 mb-1 ta">Duis bibendum vitae sed mauris lorem.</h2>
                <p class="text mb-2"></p>
                <Link to="/nos_engagements">
                  <div class="button btn-v">Nos engagements</div>
                </Link>
                
            </div>
       </div>
    </>
  );
}

export default Home;
