import React from 'react';
import {Link} from "react-router-dom";


function Header() {
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
                    <Link to="/Marque">Marque</Link>
                    <Link to="/nos_engagements">Nos engagements</Link>
                    
                    <a href="test.php">A propos</a>
                </div>
            </div>
        </header>
    );
  }
  
  export default Header;