const db = require("../db")
const { post } = require("../routes/auth")
const { BadRequestError, NotFoundError} = require("../utils/errors")

class Order {
    static async listOrdersForUser() {
        // return all orders that authenticated user has created
    }

    static async createOrder(order, user) {
        const requiredFields = ("customer_id")
        requiredFields.forEach(field => {
            if(!order.hasOwnProperty(field)) {
                throw new BadRequestError(`Required filed "${field}" missing from request body`)
            }
        })

        

        const results = await db.query(
            `
                INSERT INTO orders (customer_id)
                VALUES ($1)
                RETURNING id, customer_id, created_at
            `, [order.customer_id]
        )

        return results.rows[0]

    }
}

module.exports = Order