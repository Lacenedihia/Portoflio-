

import React, { useEffect } from 'react';
import $ from 'jquery';


 function SlidD() {
   useEffect(() => {
     function handleCardInteraction() {
       $('.card').removeClass('active');
       $(this).addClass('active');
     }

     $('.card').on('click mouseenter', handleCardInteraction);

     return () => {
       $('.card').off('click mouseenter', handleCardInteraction);
     };
   }, []);


  // Rest of your JSX code here
  return (
    <section id="slid" className="slid--section">
      <div className="cards" >
       
      <div className="card" >
        
            <div class="card__data">
              <span class="card__description">Vancouver Mountains, Canada</span>
              <h2 class="card__title">The Great Path</h2>
              <a href="#" class="card__button">Read More</a>
            </div>
        
      </div>

      <div className="card" >
        
            <div class="card__data">
              <span class="card__description">Vancouver Mountains, Canada</span>
              <h2 class="card__title">The Great Path</h2>
              <a href="#" class="card__button">Read More</a>
            </div>
        
      </div>

      <div className="card" >
        
            <div class="card__data">
              <span class="card__description">Vancouver Mountains, Canada</span>
              <h2 class="card__title">The Great Path</h2>
              <a href="#" class="card__button">Read More</a>
            </div>
        
      </div>

      <div className="card">
        
            <div class="card__data">
              <span class="card__description">Vancouver Mountains, Canada</span>
              <h2 class="card__title">The Great Path</h2>
              <a href="#" class="card__button">Read More</a>
            </div>
        </div>
        </div>
        
    </section>
);
}
export default SlidD ;