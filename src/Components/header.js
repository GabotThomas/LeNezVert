import React, {useState} from 'react';
import {Link} from "react-router-dom";



function Header() {
    const [menu, setMenu] = useState(false);

    const change =()=>{
        setMenu(!menu);
    }
    return (
        <header >
            <div class="menu d-flex container align-c">
                <Link 
                    className="bodoni b-700 logo c-vert"
                    to="/"
                >
                    LE NEZ VERT
                </Link>
                <div class="menuP d-flex">
                    <Link to="/">Accueil</Link>
                    <Link to="/Marque">Les marques</Link>
                    <Link to="/nos_engagements">Nos engagements</Link>
                    <Link to="/Notre_Histoire">Notre histoire</Link>
                </div>
                <div class="menu-mobile ptn" onClick={change}>
                    <svg viewBox="0 0 250.579 250.579">
                        <path d="M22.373,76.068h205.832c12.356,0,22.374-10.017,22.374-22.373   c0-12.356-10.017-22.373-22.374-22.373H22.373C10.017,31.323,0,41.339,0,53.696C0,66.052,10.017,76.068,22.373,76.068z    M228.205,102.916H22.373C10.017,102.916,0,112.933,0,125.289c0,12.357,10.017,22.373,22.373,22.373h205.832   c12.356,0,22.374-10.016,22.374-22.373C250.579,112.933,240.561,102.916,228.205,102.916z M228.205,174.51H22.373   C10.017,174.51,0,184.526,0,196.883c0,12.356,10.017,22.373,22.373,22.373h205.832c12.356,0,22.374-10.017,22.374-22.373   C250.579,184.526,240.561,174.51,228.205,174.51z"/>
                    </svg>
                </div>
            </div>
            {menu ? 
            <>
            <div class="modal" onClick={change}></div>
            <div class="menu-m">
                <Link onClick={change} to="/">Accueil</Link>
                <Link onClick={change} to="/Marque">Les marques</Link>
                <Link onClick={change} to="/nos_engagements">Nos engagements</Link>
                <Link onClick={change} to="/Notre_Histoire">Notre histoire</Link>
            </div>
            </>
            :<></>
            }
        </header>
    );
  }
  
  export default Header;