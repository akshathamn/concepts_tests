var express = require('express');
var router = express.Router();
const Price = require('../models/price') 

router.post("/amount", async (req, res) => {
  const { product,amount,address } = req.body;
  const price = new Price({ product,amount,address });
  const ret = await price.save();
  res.json(ret);
});

router.get("/", async (req, res) => {
  Price.find({}, (error, price) => {
    if (error) { res.json(error) }
     res.json(price)
  })
});

module.exports = router;