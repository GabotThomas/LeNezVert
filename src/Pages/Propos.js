import React from "react";
import {Link} from "react-router-dom";


function Propos() {
  return (
    <>
      <div class="container d-flex jst-c mb-8">
          <div class="d-flex-c col-8">
                <h1 class="title c-vert col-12 ta mb-2">A propos</h1>
                <p class="text">Le nez vert, c’est la réunion de deux écoles de passionnés qui ont à cœur de vous faire découvrir leur univers et leurs engagements. Cinq étudiants de l’École Supérieure du Parfum s'associent à 3 étudiants de l’ECV pour vous offrir ce contenu inédit, interactif et pédagogique. 
                </p>
                <p class="text"><strong>Mais de quoi parlons nous sur Le Nez Vert ? 
                </strong></p>
                <p class="text">Le secteur de la parfumerie recense des milliers de marques toutes plus belles les unes que les autres. Mais ici nous vous parlons de parfumerie de niche engagée, c’est-à-dire, une parfumerie en rupture avec les codes de la surconsommation et qui est fondée sur une vision durable du parfum. En 2021, lorsqu’une marque voit le jour, elle ne peut que faire face aux enjeux de notre siècle : la préservation de la planète et de ses habitants, les droits de chacun et l’éco-conception. Or un grand nombre de marques usent d’une communication fourbe appelée green-washing et nous luttons contre ces fausses bonnes intentions.
                Aujourd’hui il est primordial de donner de la lumière à des marques qui concordent parfaitement avec nos valeurs. Toutes les marques sélectionnées sur notre site répondent donc à des critères strictes pour que vous ayez confiance en nous. 
                </p>
                <p class="text">Nous vous offrons également une partie blog contenant des articles sur l’actualité parfum, développement durable, réglementation cosmétique, etc… Ce contenu vous permet d’en apprendre plus sur tout ce qui concerne la parfumerie mais aussi le développement durable. 
                Ce dernier est la deuxième corde de notre arc. Il est nécessaire de renseigner tous ceux qui le souhaitent sur ce domaine si vaste. 
                En espérant que votre visite sur notre site va vous plaire. N’hésitez pas à nous suivre sur nos différents réseaux sociaux afin d’être informé de toute l’actualité de Le Nez Vert. 
                </p>
                <Link to={"/FAQ"} className={"button btn-v ma mt-2"}>Vous avez un question sur le parfum ?</Link>
          </div>
      </div>
    </>
  );
}

export default Propos;