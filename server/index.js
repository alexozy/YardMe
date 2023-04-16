// require router
const router = require('express').Router();

// api & html routes
const routesAPI = require ('./api');
const routesHTML = require('./html/html-routes')

// router.use syntax
router.use('/api', routesAPI);
router.use('/', routesHTML);

router.use((req, res) => {
    res.status(404).send('<h1> 404 Error! </h1>');
});

module.exports = router;