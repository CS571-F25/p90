import DeckCard from './DeckCard';

export default function TopDecks() {
  const decks = [
    { title: "Hog Cycle", description: "Fast cycle deck with Hog Rider." },
    { title: "Golem Beatdown", description: "Heavy deck with Golem as win condition." },
    // … add up to 10 decks
  ];

  return (
    <div>
      <h2>Top Ten Decks</h2>
      {decks.map((deck, i) => (
        <DeckCard key={i} title={deck.title} description={deck.description} />
      ))}
    </div>
  );
}
