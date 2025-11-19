import { useState } from 'react';
import CharacterCard from './CharacterCard';
import DeckCard from './DeckCard';

export default function DecksPerCard() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { name: "Musketeer" },
    { name: "Hog Rider" },
    { name: "Golem" },
    { name: "Wizard" }
  ];

  const decksByCard = {
    "Musketeer": [
      { title: "Control Deck", description: "Balanced deck using Musketeer for defense and support." },
      { title: "Air Defense Deck", description: "Strong against air units, centered around Musketeer." }
    ],
    "Hog Rider": [
      { title: "Hog Cycle", description: "Fast cycle deck with Hog Rider as win condition." },
      { title: "Hog Freeze", description: "Aggressive deck using Freeze to support Hog pushes." }
    ],
    "Golem": [
      { title: "Beatdown Deck", description: "Heavy deck with Golem as main tank." },
      { title: "Golem Night Witch", description: "Synergy deck with Night Witch spawning bats behind Golem." }
    ],
    "Wizard": [
      { title: "Splash Damage Deck", description: "Wizard provides strong splash damage support." }
    ]
  };

  return (
    <div>
      <h2>Cards</h2>
      {!selectedCard && (
        <div>
          {cards.map((card, i) => (
            <CharacterCard
              key={i}
              name={card.name}
              onClick={() => setSelectedCard(card.name)}
            />
          ))}
        </div>
      )}

      {selectedCard && (
        <div>
          <h3>Decks for {selectedCard}</h3>
          {decksByCard[selectedCard].map((deck, i) => (
            <DeckCard key={i} title={deck.title} description={deck.description} />
          ))}
          <button className="btn btn-secondary mt-3" onClick={() => setSelectedCard(null)}>
            Back to Cards
          </button>
        </div>
      )}
    </div>
  );
}
