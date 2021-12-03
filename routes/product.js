const controller_product = require('../controllers/product.js');
var express = require('express');
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  const query = req.param('q');
  console.log(query)
  const data = controller_product.getProducts(query);
  res.send(
    {'results':data}
  );
});



module.exports = router;
