const express = require('express')

const axios   = require('axios')
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = "Bearer {PRIVATE}";

var request = require('request').defaults({ encoding: null });


const router = express.Router()

router.get('/', (req, res) =>{
    res.render("index")
})

router.get('/get_most_populars_movies/', (req, res) =>{
    axios.get('/discover/movie').then(response => {
        res.json(response.data)
    }).catch(err => {
        res.json({status:"fail", error:err})
    })

})


module.exports = router