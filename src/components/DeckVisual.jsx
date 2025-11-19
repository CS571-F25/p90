export default function DeckVisual({ slots, avgElixir, skillLevel, type }) {
    return (
      <div className="card p-3 mb-3">
        <h5>Deck Visual</h5>
        <p>Slots: {slots} | Avg Elixir: {avgElixir}</p>
        <p>Skill Level: {skillLevel} | Type: {type}</p>
      </div>
    );
  }
  