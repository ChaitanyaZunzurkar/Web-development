import axios from 'axios'
import FoodItem from './FoodItem';
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
    const [foodItems , setFoodItems] = useState([])
    const [foodCategory , setFoodCategory] = useState([])
    const [backupStorageFoodItems , setbackupStorageFoodItems] = useState([])
    const [isSearching , setIsSearching] = useState(false)

    async function fetchingFoodData() {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/fooddata')
            const FoodData = response.data

            setFoodCategory(FoodData[0])
            setFoodItems(FoodData[1])
            setbackupStorageFoodItems(FoodData[1])
        }
        catch(error) {
            console.log("Fail to fetch the data");
            console.error(error)
        }
    }

    const [searchTerm, setSearchTerm] = useState(""); 

    const changeHandler = (event) => {
        setSearchTerm(event.target.value); 
    };
    
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFoodItems(backupStorageFoodItems); 
            setIsSearching(false);
        } else {
            setIsSearching(true);
            const searchedFoodName = backupStorageFoodItems.filter((foodItem) => 
                foodItem.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFoodItems(searchedFoodName); 
        }
    }, [searchTerm, backupStorageFoodItems]); 

    useEffect(() => {
        fetchingFoodData()
    } , [])

    return (
        <div>
            <form className="d-flex p-2 mx-auto" role="search">
                <input
                    className="form-control me-2 w-200"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={changeHandler}
                />
                <button className="btn btn-outline-warning" type="submit">
                    Search
                </button>
            </form>
            {
                !isSearching ? (
                    foodCategory.map((Category , index) => (
                        <div key={index}>
                            <h3 className='container'>
                                {Category.CategoryName}
                            </h3>
                            <div className='container' style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                {
                                    foodItems.filter((itemCategory) => (Category.CategoryName === itemCategory.CategoryName)).map((CategorizedFood) => (
                                        <FoodItem key={CategorizedFood.id} CategorizedFood={CategorizedFood} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                ) :
                (
                    <div>
                        <h3 className='container'>Your search : {searchTerm}</h3>
                        <div className='container' style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                            {
                                foodItems.map((CategorizedFood) => (
                                    <FoodItem key={CategorizedFood.id} CategorizedFood={CategorizedFood} />
                                ))
                            }
                        </div>
                     </div>
                )
                
            }
        </div>
    );
};

export default Card;
