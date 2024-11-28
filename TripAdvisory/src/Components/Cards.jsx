/* eslint-disable react/prop-types */
import '../StyleSheets/Cards.css'

function Cards({ place , intrestHandler }) {
  return (
    <div className="card">
      <img src={place.image} alt={place.name} />
      <div className="card-info">
        <strong>{place.price}</strong>
        <strong>{place.name}</strong>
        <p>{place.info}</p>
        <button onClick={() => intrestHandler(place.id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default Cards;
