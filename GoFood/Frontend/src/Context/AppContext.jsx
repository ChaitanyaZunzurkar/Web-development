/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [foodItemData , setFoodItemData] = useState([])
    const navigate = useNavigate()

    function addToCart(foodItem) {
        console.log(foodItem)
        setFoodItemData([
            ...foodItemData,
            foodItem
        ])
        navigate('/api/v1/cart')
    }

    const requiredValue = {
        addToCart,
        foodItemData,
        setFoodItemData,
    }

    return <AppContext.Provider value={requiredValue} >
        { children }
    </AppContext.Provider>
}

export default AppContextProvider
