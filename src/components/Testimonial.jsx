import React from 'react';
import '../stylesheets/Testimonial.css';

function Testimonial() {
  return (
    <div className='testimonial-container'>
      <img 
        className='testimonial-image' 
        src={require('../images/testimonial-emma.png')} 
        alt='Foto de Emma'
        />
        <div className='testimonial-text-container'>
          <p className="testimonial-title"><b>Emma Bostian</b> en Suecia</p>
          <p className="testimonial-job">Ingeniera de Software en <b>Spotify</b></p>
          <p className="testimonial-text">
            "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
          </p>
        </div>
    </div>
  );
}

export default Testimonial;