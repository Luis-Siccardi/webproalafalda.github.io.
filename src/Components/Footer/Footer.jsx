import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <footer class="footer-distributed">  
        <div class="footer-left"> 
          <h3>PRoA<span> La Falda </span></h3> 
          <p class="footer-links">
            <a href="#" class="link-1"></a>
            
            <a href="#"></a>
          
            <a href="#"></a>
          
            <a href="#"></a>
            
            <a href="#"></a>
            
            <a href="#"></a>
          </p>  
          <p class="footer-company-name">PRoA La Falda © 2022</p>
        </div>
        <div class="footer-center"> 
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>La Falda</span> Córdoba, Argentina</p>
          </div>  
          <div>
            <i class="fa fa-phone"></i>
            <p>+54 3548 58 2040</p>
          </div> 
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">lafalda.ds@escuelasproa.edu.ar</a></p>
          </div>  
        </div> 
        <div class="footer-right">  
          <p class="footer-company-about">
            <span>Escuelas PRoA</span>
            Programa Avanzado de Educación Secundaria.
          </p>
          <p class="footer-company-about">
            Bachiller en Informática con Formación Especializada en Desarrollo de Software.
          </p>  
          <div class="footer-icons"> 
            <a href="https://www.facebook.com/proalafalda">             
              <img src="./facebook logo.png"
              width="30"
              height="30"/>              
              <i class="fa fa-facebook"></i></a>    
            <a href="https://www.instagram.com/proa_lafalda">
              <img src="./ig_logo1.png"
              width="30"
              height="30"/>
              <i class="fa fa-instagram"></i></a>
            <a href="https://proalafalda.blogspot.com/">
              <img src="./blogspot logo.png"
              width="30"
              height="30"/>
              <i class="fa fa-blogspot"></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
