// pages/api/spam.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { link, message, amount } = req.body;

  if (!link || !message || !amount) return res.status(400).json({ message: "Input tidak lengkap" });

  for (let i = 0; i < amount; i++) {
    await fetch("https://ngl.link/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        username: link.replace("https://ngl.link/", "").replace("/", ""),
        question: message,
        deviceId: Math.random().toString(36).substring(2, 15),
      }),
    });
  }

  res.json({ message: `Berhasil kirim ${amount} pesan ke ${link}` });
}
