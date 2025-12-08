
function CardSelector({ filteredCards, onSelectCard, setIsDropdownOpen }) {
  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
      {filteredCards.length > 0 ? (
        filteredCards.map(card => (
          <div
            key={card.id}
            onClick={() => {
              onSelectCard(card);
              setIsDropdownOpen(false);
            }}
            className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 flex justify-between items-center"
          >
            <span className="text-sm font-medium">{card.name}</span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {card.elixir}
            </span>
          </div>
        ))
      ) : (
        <div className="px-4 py-3 text-sm text-gray-500 text-center">
          No cards found
        </div>
      )}
    </div>
  );
}

export default CardSelector;