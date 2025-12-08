

export default function SelectedCardsList({ selectedCards, onRemoveCard }) {
  return (
    <div className="w-full">
      {selectedCards.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Selected Cards ({selectedCards.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedCards.map(card => (
              <div
                key={card.id}
                className="bg-blue-100 border border-blue-300 rounded-full px-3 py-1 flex items-center gap-2 text-sm"
              >
                <span>{card.name}</span>
                <button
                  onClick={() => onRemoveCard(card.id)}
                  className="hover:text-blue-700"
                  aria-label="Remove card"
                >
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}