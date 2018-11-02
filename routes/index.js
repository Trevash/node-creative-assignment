var express = require('express');
var router = express.Router();

let dogs = [];
let cats = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/collectData', function(req, res) {
    res.status(200).send({
        dogs: dogs,
        cats: cats
    })
})

router.put('/addDog', function(req, res) {
    dogs.push(req.body);
    res.status(200).send(req.body);
})

router.put('/addCat', function(req, res) {
    cats.push(req.body);
    res.status(200).send(req.body);
})

module.exports = router;
