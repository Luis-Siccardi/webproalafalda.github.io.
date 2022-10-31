import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div class="login-container">
      <section class="wrapper">
        <div class="left">
          <img  class="form-image-left" src="./preinscripcion.jpg" alt="phones" width="432px" height="500px" />
        </div>
      
        <div class="right">
          <div class="panel login">
          <img id="logo" src="./registrate.jpg" alt="logo"/>
            <form class="input-form">
              <input
                class="input-box"
                type="text"
                name="username"
                required
                placeholder="phone number,usrname or email"
              />
              <input
                class="input-box"
                type="password"
                name="password"
                required
                placeholder="password"
              />
              <input class="button" type="submit" name="login" value="log in" />

              <div class="divider">
                <div class="line"></div>
                <p>OR</p>
                <div class="line"></div>
              </div>
              <a class="forgot" href="#">olvidaste tu contraseña?</a>
            </form>
          </div>
          <div class="panel singup">
            <p>don't have an acount?</p>
            <a href="#">sing up</a>
          </div>
          <div class="apps">
          </div>
        </div>  
      </section>
    </div>
          
    
  )
}
