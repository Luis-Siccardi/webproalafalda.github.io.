import React from 'react'
import './Header.css'

  /* se iporta con consola (react-router-dom)para que se puedan usar los links
  .los a se llaman (links) en react y los hearf se llaman (to)
  */ 

import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className='envoltorio'>
      <header className="header-envoltorio sticky sticky--top js-header">
          <div className="header-links">
            <nav className="navigation">
              <ul className="navigation__list navigation__list--inline">
                <li className="navigation__item"><Link className="navigation__link navigation__link--is-active">Home</Link></li>
                <li className="navigation__item"><Link className="navigation__link">PRoA La Falda</Link></li>
                <li className="navigation__item"><Link className="navigation__link">Novedades</Link></li>
                <li className="navigation__item"><Link className="navigation__link">ProaTeca</Link></li>
                <li className="navigation__item"><Link to={"login"} className="navigation__link">Consultas</Link></li>
              </ul> 
            </nav>
          </div> 
          <div>
            <div className="svg-container">
              <svg viewBox="0 0 800 400" className="svg">
                <path id="curve" fill="#95c7e9" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z">
                </path>
              </svg>
            </div>
            <header>
              <h1 className="title">ESCUELA PROA LA FALDA</h1>
              <h3 className="sub-titulo">Here you are, scroll down.</h3>
            </header>
          </div>
        </header>
    </div>
  )
}
