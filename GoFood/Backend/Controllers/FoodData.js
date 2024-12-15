async function FoodData(req, res) {
    try {
        if(!global.Food_Category_Data || !global.Food_Items_Data) {
            res.send("Required food data not found")
        }
        res.send([global.Food_Category_Data , global.Food_Items_Data])
    }
    catch(error) {
        console.error(error)
        console.log("Fail to fetch the food data")
    }
}

module.exports = {
    FoodData
}
