
import CardSelector from './CardSelector';

export default function CardSearch({ searchQuery, onSearchChange, selectedCards, onSelectCard, isDropdownOpen, setIsDropdownOpen, allCards }) {
  
 
  if (!allCards) {
  return <div>Loading cards...</div>;
  }
  const filteredCards = allCards.filter(
    card => 
      card.name.includes(searchQuery) &&
      !selectedCards.find(selected => selected.id === card.id)
  );

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer"
           onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <input
          type="text"
          placeholder="Search cards..."
          value={searchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setIsDropdownOpen(true);
          }}
          onFocus={() => setIsDropdownOpen(true)}
          className="flex-1 outline-none text-sm"
        />
      </div>

      {isDropdownOpen && (
        <CardSelector 
          filteredCards={filteredCards} 
          onSelectCard={onSelectCard}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </div>
  );
}