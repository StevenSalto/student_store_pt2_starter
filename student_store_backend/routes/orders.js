const express = require("express")
const router = express.Router()
const Order = require("../models/order")
const { post } = require("./store")
const { requireAuthenticatedUser } = require("../middleware/security")

router.get("/", requireAuthenticatedUser, async (req, res, next) => {
    const user = res.locals.user
    const orders = await Order.listOrdersForUser(user)
    return res.status(200).json({ orders })
})

router.post("/", requireAuthenticatedUser, async(req, res, next) => {
    try {   
        const {user} = res.locals
        const order = await Order.createOrder({ user, post: req.body })
        return res.status(201).json({ order })
    } catch (error) {
        next(error)
    }
})

module.exports = router