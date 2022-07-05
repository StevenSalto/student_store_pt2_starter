const db = require("../db")

class Store {
    static async listProducts() {
        // runs a sql query that searches the db for all products
        // returns a list of them

        console.log("store route working!")
    }
}

module.exports = Store