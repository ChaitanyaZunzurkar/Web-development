/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const FoodItem = ({ foodItem ,removeFromCart }) => {
  const { img, name, description, CategoryName } = foodItem;

  return (
    <div className="food-item card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} alt={name} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <strong>Category:</strong> {CategoryName}
            </p>
            <p className="card-text">{description}</p>
            <button className="btn btn-danger"
              onClick={() => (removeFromCart(foodItem._id))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  foodItem: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    CategoryName: PropTypes.string.isRequired,
  }).isRequired,
};

export default FoodItem;
