const { client } = require('../db');

const createOrder = async (req, res) => {
    try {
        const data = req.body;
        const db = client.db("organic");
        const orders = db.collection("orders");
        const result = await orders.insertOne(data);
        res.status(200).json(data);
    } catch (error) {
        console.error("createOrder error:", error);
        res.status(500).json({ error: "Failed to create order" });
    }
}


module.exports = {
    createOrder
}