const express = require("express")
const router = express.Router()
const Store = require("../models/store")

router.get("/", async (req, res, next) => {
    let productsList = Store.listProducts()
    res.status(200).json({ products: productsList})
})

module.exports= router