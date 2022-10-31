import React from 'react'
import './Cards.css'

export default function Cards() {
  return (
    <div className='main'>
      <section>
        <div className="centro__main-element">
          <div className="centro__first-container">
            <h4 className="centro__text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              <br/> Culpa iusto ut, rerum blanditiis veniam numquam, voluptatum esse, 
              <br/> repudiandae cupiditate suscipit voluptates.
              <br/> Ipsum alias possimus tempora rem repellat assumenda eius minima?
              <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident 
              <br/> deserunt cupiditate ex pariatur nihil nesciunt. Quae provident amet 
          </h4>
            <img className="proa-image" src="./curso.jpeg" alt=""/>
          </div>
        </div>
      </section>
      <section>
        <div className="centro__second-main-element">
          <div className="centro__second-container">
            <img className="proa-second-image" src="./salon.jpg" alt=""/>
            <h4 className="centro__second-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br/> Culpa iusto ut, rerum blanditiis veniam numquam, voluptatum esse, 
                <br/> repudiandae cupiditate suscipit voluptates.
                <br/> Ipsum alias possimus tempora rem repellat assumenda eius minima?
                <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident 
                <br/> deserunt cupiditate ex pariatur nihil nesciunt. Quae provident amet 
            </h4>
          </div>
        </div>
      </section>
      <section>
        <div className="centro__third-main-element">
          <div className="centro__third-container">
            <h4 className="centro__third-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br/> Culpa iusto ut, rerum blanditiis veniam numquam, voluptatum esse, 
              <br/> repudiandae cupiditate suscipit voluptates.
              <br/> Ipsum alias possimus tempora rem repellat assumenda eius minima?
              <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident 
              <br/> deserunt cupiditate ex pariatur nihil nesciunt. Quae provident amet 
            </h4>
            <img className="proa-third-image" src="./perla.jpg" alt=""/>
            
          </div>
        </div>
      </section>
    </div>
  )
}
