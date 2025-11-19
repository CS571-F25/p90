export default function Card({ image, elixir }) {
    return (
      <div className="card p-3 mb-3">
        <img src={image} alt="Card" style={{ width: '50px' }} />
        <p>Elixir Cost: {elixir}</p>
      </div>
    );
  }
  