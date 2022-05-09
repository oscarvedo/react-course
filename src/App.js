import './App.css';
import Testimonial from './components/Testimonial.jsx';
import testimonies from './testimonies-data.js';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {testimonies.map(testimony => {
          return (
            <Testimonial 
            name={testimony.name}
            country={testimony.country}
            image={testimony.image}
            role={testimony.role}
            company={testimony.company}
            testimony={testimony.testimony} />
          )
        })}
      </div>
    </div>
  );
}

export default App; 