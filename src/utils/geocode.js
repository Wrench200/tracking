export const geocodeAddress = async (address) => {
  const controller = new AbortController();
  const signal = controller.signal;

  // Set a timeout for the request
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

  try {
    console.log(`Geocoding address: ${address}`);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`,
      { signal }
    );
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(
        `Geocoding request failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("Geocoding response data:", data); // Log the raw response data

    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);
      console.log(`Geocoded coordinates: (${lat}, ${lon})`);
      return [lat, lon];
    } else {
      console.warn(`No geocoding result found for address: ${address}`);
      return null;
    }
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Geocoding request timed out");
    } else {
      console.error("Geocoding error:", error);
    }
    return null;
  }
};
