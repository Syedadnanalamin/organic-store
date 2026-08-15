const { client } = require('../db');
const { sendCapiEvent } = require('../utils/capiService');

const createOrder = async (req, res) => {
    try {
        const data = req.body;
        const db = client.db("organic");
        const orders = db.collection("orders");
        const result = await orders.insertOne(data);
        
        // Return response to user immediately
        res.status(200).json(data);

        // Dispatches CAPI Purchase event in the background
        const clientIpAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const clientUserAgent = req.headers['user-agent'] || data.clientUserAgent;

        sendCapiEvent({
            eventName: "Purchase",
            eventId: data.eventId, // Unique event ID passed from frontend for deduplication
            userData: {
                name: data.name,
                phone: data.phone,
                fbp: data.fbp,
                fbc: data.fbc,
                client_user_agent: clientUserAgent,
            },
            customData: {
                currency: "BDT",
                value: Number(data.totalPrice) || 0,
                content_type: "product",
                contents: [
                    {
                        id: data.packageId || "ghee",
                        quantity: Number(data.quantity) || 1,
                    }
                ],
                content_name: data.packageName || "Organic Ghee",
            },
            eventSourceUrl: req.headers.referer || "",
            clientIpAddress,
        }).catch((err) => {
            console.error("[FB CAPI] Background Purchase tracking failed:", err);
        });

    } catch (error) {
        console.error("createOrder error:", error);
        res.status(500).json({ error: "Failed to create order" });
    }
}


module.exports = {
    createOrder
}