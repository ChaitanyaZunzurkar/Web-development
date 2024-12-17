import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import CartItem from './CartItem';

export default function Cart() {
    const { foodItemData , setFoodItemData} = useContext(AppContext);

    function removeFromCart(id) {
        const updatedFoodItems = foodItemData.filter((foodItem) => foodItem._id !== id);
        setFoodItemData(updatedFoodItems);
    }

    return (
        <div className="container my-5">
            {
                foodItemData.length === 0 ? 
                <h1 className="text-center">No Data Found</h1> :
                <div className="row">
                    {foodItemData.map((foodItem) => (
                        <div className="col-md-4 mb-4" key={foodItem.id}>
                            <CartItem foodItem={foodItem} removeFromCart={removeFromCart} />
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
