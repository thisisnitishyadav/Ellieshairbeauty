const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function fetchServices() {
  const res = await fetch(`${API_BASE}/services`);
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

export async function fetchGallery(category = "all") {
  const res = await fetch(`${API_BASE}/gallery/${category}`);
  if (!res.ok) throw new Error("Failed to fetch gallery");
  return res.json();
}

export async function createBooking(data) {
  const res = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function sendContactMessage(data) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
