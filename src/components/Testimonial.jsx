import React from 'react';
import '../stylesheets/Testimonial.css';

function Testimonial(props) {
  return (
    <div className='testimonial-container'>
      <img 
        className='testimonial-image' 
        src={require(`../images/testimonial-${props.image}.png`)} 
        alt={`Foto de ${props.name}`}
        />
        <div className='testimonial-text-container'>
          <p className="testimonial-title">
            <strong>{props.name}</strong> en {props.country}
            </p>
          <p className="testimonial-job">
            {props.role} en <strong>{props.company}</strong>
            </p>
          <p className="testimonial-text">
            "{props.testimony}"
          </p>
        </div>
    </div>
  );
}

export default Testimonial;