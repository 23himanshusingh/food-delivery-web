const express = require("express");
const router = express.Router();

router.post("/foodData",async (req, res) => {
    try{
        res.send([global.food_items,global.foodCategory])
    } catch(error){
        res.send("Server Error");
    }
})

module.exports = router;