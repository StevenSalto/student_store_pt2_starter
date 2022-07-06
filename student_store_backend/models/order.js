const db = require("../db")
const { post } = require("../routes/auth")
const { BadRequestError, NotFoundError} = require("../utils/errors")

class Order {
    static async listOrdersForUser() {
        // return all orders that authenticated user has created
    }

    static async createOrder(order, user) {
        const requiredUserFields = ["email"]
        requiredUserFields.forEach(field => {
            if(!user.hasOwnProperty(field)) {
                throw new BadRequestError(`Required filed "${field}" missing from request body`)
            }
        })

        const requiredOrderFields = ["id", "quantity"]
        requiredOrderFields.forEach(field => {
            if(!order.hasOwnProperty(field)) {
                throw new BadRequestError(`Required filed "${field}" missing from request body`)
            }
        })

        const results = await db.query(
            `
                INSERT INTO orders (customer_id)
                VALUES ((SELECT id FROM users WHERE email = $1))
                RETURNING id, customer_id, created_at
            `, [user.email]
        )
        
        let orderId = results.rows[0].id

        order.forEach((product) => {

        })
    }
}

module.exports = Order