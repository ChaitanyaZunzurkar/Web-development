import tours from '../Data/data.js'
import '../StyleSheets/Tours.css';
import Cards from '../Components/Cards.jsx'
import { useState } from 'react';
import EmptyPage from './EmptyPage.jsx';

function Tours() {
  const [data , setData] = useState(tours)
  const [isEmpty , setEmpty] = useState(false)

  function RefeshHandler() {
    setData(tours)
  }

  function intrestHandler(id) {
    const updatedData = data.filter(tour => tour.id != id)
    if(updatedData.length === 0) {
      setEmpty(!isEmpty);
    }
    else {
      setData(updatedData)
    }
  } 

  return (
    <div className="tours-container">
      {
        isEmpty ? 
        <EmptyPage /> :
        data.map((place) => (
          <Cards place={place} key={place.id} intrestHandler={intrestHandler} />
        ))
      }
    </div>
  );
}

export default Tours;
