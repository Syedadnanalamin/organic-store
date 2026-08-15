export const generateEventId = (prefix = "evt") => {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

export const fbEvent = (name, options = {}, eventId = null) => {
  if (typeof window !== "undefined" && window.fbq) {
    if (eventId) {
      window.fbq("track", name, options, { eventID: eventId });
    } else {
      window.fbq("track", name, options);
    }
    console.log(`[FB Pixel] Tracked "${name}" (ID: ${eventId})`, options);
  } else {
    console.warn(`[FB Pixel] fbq not available for "${name}"`);
  }
};

export const getCookie = (name) => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};
