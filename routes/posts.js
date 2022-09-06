
const express = require ('express');
const router = express.Router();
const Post = require('../models/post')

router.get('/', (req, res) => {
    res.send("We are on posts by router.")
});


router.post('/', async (req, res)=>{
   
});
    


module.exports = router;