import { useEffect, useState } from "react";
  
  /** 
  const x = await fetch("https://api.clashroyale.com/v1/cards", {
      headers: { Authorization: `Bearer ${token}` }
  })
  
  const data = await x.json();
  
  const sample = data.items.slice(0, 5); // Get first 5 cards for example
  */

export default function DeckCard({ title, description }) {

  const [cards, setCards] = useState([]);

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQzMmRmNTY0LWNlNGQtNDMxMC1hMzc3LWE4YTUyNzk4MTdlYiIsImlhdCI6MTc2MzU4ODc3OCwic3ViIjoiZGV2ZWxvcGVyL2ZjNTdkMTMwLTcwYzMtZThjMS1hZmZiLTFiMmM0MmYyNTBkZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Mi4zMy4yLjI0NiIsIjU0Ljg2LjUwLjEzOSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.jr05CytA9r0UiYXR0fVBk8F1b97lyIdOgDpOQYb8BVK19iOpPLASwo5cqADQEMgHFN9s5n6_RKkZGpdpAbPdAw";

  useEffect(() => {
    async function loadCards() {
      const response = await fetch("https://api.clashroyale.com/v1/cards", {
      headers: { Authorization: `Bearer ${token}` }
  });
      const data = await response.json();
      setCards(data.items.slice(0, 5)); // grab first 5
    }
    loadCards();
  }, []);


  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {cards.map(card => (
        <div
          key={card.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "180px",
            borderRadius: "8px"
          }}
        >
          <h3>{card.name}</h3>
          <img src={card.iconUrls.medium} width="120" />
          <p>Rarity: {card.rarity}</p>
          <p>Elixir: {card.elixirCost ?? "N/A"}</p>
        </div>
      ))}
    </div>
    );
  }
  