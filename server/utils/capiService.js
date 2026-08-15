const crypto = require('crypto');

/**
 * SHA256 hashes a string for Meta privacy compliance.
 */
function sha256(text) {
  if (!text) return null;
  return crypto
    .createHash('sha256')
    .update(String(text).trim().toLowerCase())
    .digest('hex');
}

/**
 * Normalizes phone numbers for Meta Conversions API (E.164 format, digit only, no '+' or leading '0').
 */
function normalizePhone(phone) {
  if (!phone) return null;
  let cleaned = String(phone).replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '880' + cleaned.substring(1);
  } else if (cleaned.length === 10 && !cleaned.startsWith('880')) {
    cleaned = '880' + cleaned;
  }
  return cleaned;
}

/**
 * Splits a full name into first and last name components.
 */
function splitName(fullName) {
  if (!fullName) return { first: null, last: null };
  const parts = fullName.trim().split(/\s+/);
  const first = parts[0] || null;
  const last = parts.slice(1).join(' ') || null;
  return { first, last };
}

/**
 * Sends a server-side tracking event to Meta Conversions API.
 */
const sendCapiEvent = async ({
  eventName,
  eventId,
  userData = {},
  customData = {},
  eventSourceUrl = '',
  clientIpAddress = '',
}) => {
  const pixelId = process.env.FB_PIXEL_ID;
  const accessToken = process.env.FB_CAPI_ACCESS_TOKEN;
  const testEventCode = process.env.FB_TEST_EVENT_CODE;

  if (!pixelId || !accessToken) {
    console.warn('[FB CAPI] FB_PIXEL_ID or FB_CAPI_ACCESS_TOKEN is missing in server environment. Skipping CAPI event.');
    return null;
  }

  // Normalization and Hashing
  const { first, last } = splitName(userData.name);
  const hashedFn = sha256(first);
  const hashedLn = sha256(last);
  const normalizedPh = normalizePhone(userData.phone);
  const hashedPh = sha256(normalizedPh);

  // User Data payload
  const fbUserData = {
    client_ip_address: clientIpAddress || userData.client_ip_address || undefined,
    client_user_agent: userData.client_user_agent || undefined,
    fbp: userData.fbp || undefined,
    fbc: userData.fbc || undefined,
  };

  if (hashedPh) fbUserData.ph = [hashedPh];
  if (hashedFn) fbUserData.fn = [hashedFn];
  if (hashedLn) fbUserData.ln = [hashedLn];

  // Request Payload
  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventSourceUrl || undefined,
        action_source: 'website',
        user_data: fbUserData,
        custom_data: customData,
        opt_out: false,
      },
    ],
  };

  // Attach test code if set in .env
  if (testEventCode && testEventCode.trim() !== "") {
    payload.test_event_code = testEventCode;
  }

  try {
    const url = `https://graph.facebook.com/v17.0/${pixelId}/events?access_token=${accessToken}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (result.error) {
      console.error(`[FB CAPI] Error sending "${eventName}":`, result.error);
    } else {
      console.log(`[FB CAPI] Success: Sent "${eventName}" event. Deduplication ID: ${eventId}`);
    }
    return result;
  } catch (error) {
    console.error(`[FB CAPI] Exception sending "${eventName}":`, error);
    return null;
  }
};

module.exports = {
  sendCapiEvent,
};
