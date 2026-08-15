const express = require('express');
const router = express.Router();
const { sendCapiEvent } = require('../utils/capiService');

/**
 * Endpoint to receive client-side events and proxy them to Meta CAPI.
 * Useful for mid-funnel actions like InitiateCheckout.
 */
router.post('/', (req, res) => {
  const { event_name, event_id, user_data = {}, custom_data = {}, event_source_url } = req.body;

  // Resolve client IP and User Agent from request headers
  const clientIpAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const clientUserAgent = req.headers['user-agent'];

  // Fire-and-forget: dispatch event in background to keep API response fast
  sendCapiEvent({
    eventName: event_name,
    eventId: event_id,
    userData: {
      ...user_data,
      client_user_agent: user_data.client_user_agent || clientUserAgent,
    },
    customData: custom_data,
    eventSourceUrl: event_source_url,
    clientIpAddress,
  }).catch((err) => {
    console.error(`[FB CAPI Proxy] Background CAPI tracking error for "${event_name}":`, err);
  });

  // Immediately respond to the client
  res.status(200).json({ success: true });
});

module.exports = router;
