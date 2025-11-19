export default function CardDescription({ damage, health, range, type }) {
    return (
      <div className="card p-3 mb-3">
        <h5>Card Stats</h5>
        <p>Damage: {damage}</p>
        <p>Health: {health}</p>
        <p>Range: {range}</p>
        <p>Type: {type}</p>
      </div>
    );
  }
  