export default function CharacterCard({ name, onClick }) {
    return (
      <div className="card p-3 mb-3" onClick={onClick} style={{ cursor: 'pointer' }}>
        <h4>{name}</h4>
        <p>Click to see recommended decks built around {name}.</p>
      </div>
    );
  }
  