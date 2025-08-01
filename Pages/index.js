// pages/index.js
import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(1);
  const [status, setStatus] = useState("");

  const sendSpam = async () => {
    setStatus("Mengirim...");
    const res = await fetch("/api/spam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link, message, amount }),
    });
    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", backgroundColor: "#111", color: "#eee", minHeight: "100vh" }}>
      <h1 style={{ color: "red" }}>NGL Spam</h1>
      <input type="text" placeholder="Link NGL (user)" value={link} onChange={(e) => setLink(e.target.value)} />
      <br />
      <input type="text" placeholder="Isi pesan" value={message} onChange={(e) => setMessage(e.target.value)} />
      <br />
      <input type="number" min="1" max="100" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br />
      <button onClick={sendSpam}>Kirim</button>
      <p>{status}</p>
    </div>
  );
         }
