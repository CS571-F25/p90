import { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import DeckCard from './DeckCard';
import SelectedCardsList from './SelectedCardsList';
import CardSearch from './CardSearch';
import DeckResults from './DeckResults';
import { cardData } from './CardData';


export default function DecksPerCard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cards, setCards] = useState(cardData.items);

  const handleSelectCard = (card) => {
    setSelectedCards([...selectedCards, card]);
    setSearchQuery('');
  };

  const handleRemoveCard = (cardId) => {
    setSelectedCards(selectedCards.filter(card => card.id !== cardId));
  };



  return (
    <div>
      <h1>Find Decks By Card</h1>
        <div className="space-y-6">
          <CardSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCards={selectedCards}
            onSelectCard={handleSelectCard}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
            allCards={cards}
          />

          <SelectedCardsList
            selectedCards={selectedCards}
            onRemoveCard={handleRemoveCard}
          />

          <DeckResults selectedCards={selectedCards} matchType="any" allCards={cards}/>
        </div>  
    </div>
  );
}
