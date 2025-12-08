// DeckResults.jsx
import DeckCard from './DeckCard';

function DeckResults({ selectedCards, allCards, matchType = 'any' }) { 

   
    
     if (!allCards || allCards.length === 0) {
    return <div className="text-center text-gray-500 py-8">Loading decks...</div>;
  }

    const decks = [{id:1, name:"Deck 1", cards:[allCards[0].id, allCards[1].id, allCards[2].id, allCards[3].id, allCards[4].id, allCards[5].id, allCards[6].id, allCards[7].id,]}, {id:2, name:"Deck 2", cards:[allCards[8].id, allCards[9].id, allCards[10].id, allCards[11].id, allCards[12].id, allCards[13].id, allCards[14].id, allCards[15].id,]}];

    
    const matchingDecks = decks.filter(deck => {
    const selectedCardIds = selectedCards.map(c => c.id);
    
    if (selectedCardIds.length === 0) return true;
    
    if (matchType === 'any') {
      return selectedCardIds.some(id => deck.cards.includes(id));
    } else if (matchType === 'all') {
      return selectedCardIds.every(id => deck.cards.includes(id));
    }
    return true;
  });

  return (
  <div className="w-full">
    <p className="text-sm font-semibold text-gray-700 mb-3">
      Matching Decks ({matchingDecks.length})
    </p>
    {matchingDecks.length > 0 ? (
      <div className="space-y-4">
        {matchingDecks.map(deck => (
          <div key={deck.id} className="border border-gray-200 rounded-lg p-3 bg-gray-50 hover:bg-gray-100 transition">
            <h3 className="font-semibold text-gray-800 mb-2 text-sm">{deck.name}</h3>
            <div className="flex gap-2 overflow-x-auto">
              {deck.cards.map(cardId => {
                const card = allCards.find(c => c.id === cardId);
                const isSelected = selectedCards.find(c => c.id === cardId);
                return (
                  <div key={cardId} className="flex">
                    <DeckCard 
                      card={card} 
                      isSelected={isSelected}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center text-gray-500 py-8">
        No decks found with selected cards
      </div>
    )}
  </div>
);
}

export default DeckResults;