import React from "react";
import pres from "../Assets/Img/pres.png"

function Home() {
  return (
    <>
      <div class="logo-home"><img src="/Img/logo.png" alt=""></img></div>
      <div class="banner d-flex bg-c jst-c mb-8">
           <div class="d-flex-c banner-contain">
                <span class="c-white text b-600 mb">NOS MARQUES</span>
                <h1 class="c-white title">Parfum Naturel</h1>
                <p class="c-white text mb">Un parfum naturel est un parfum composé de matières premières naturelles (huile essentielle, absolu, résinoïde) ou d’origine naturelle (molécules isolées d’un naturel et issu de lui).</p>
                <div class="button btn-v">Découvrez nos marques</div>
            </div>    
       </div>
       <div class="presentation d-flex container mb-8">
            <div class="col-7 col-12-sm mb">
                <img class="bdr-30" src={pres} alt="Presentation"/>
            </div>
            <div class="col-5 d-flex-c jst-c col-12-sm">
                <h1 class="title">Qu’est ce qu’une marque de <span class="text-line title">niche?<div class="line"></div></span></h1>
                <p class="text mb">Au départ, le parfum de niche décrivait principalement de jeunes Maisons de parfumerie qui tentaient l’aventure et qui, par définition étaient de taille modeste. Pour se démarquer des Maisons traditionnelles, celles-ci se devaient de proposer des fragrances signées, distinctives</p>
                <div class="button btn-v">Découvrir</div>
            </div>
       </div>
       <div class="ne d-flex container jst-c mb-8">
            <div class="block d-flex-c align-c col-10 bdr-20 col-12-sm">
                <h1 class="title c-vert up mb ta">NOS ENGAGEMENTS</h1>
                <h2 class="title t2 mb-1 ta">Duis bibendum vitae sed mauris lorem.</h2>
                <p class="text mb-2">Egestas aliquam suspendisse amet, dolor habitasse. Viverra id lorem tempus, morbi convallis. Faucibus cras a justo habitasse ultrices. Enim, urna, vel ut nec nulla non. Arcu ut aliquam augue purus vel integer duis libero. Dictum dolor molestie dui interdum. Morbi pretium vivamus libero egestas.</p>
                <div class="button btn-v">Découvrir</div>
            </div>
       </div>
    </>
  );
}

export default Home;
