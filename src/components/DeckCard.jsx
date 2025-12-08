
function DeckCard({ card, isSelected }) {
  if (!card) return null;
  
  return (
<div style={{
      display: 'inline-block',
      width: '80px',
      minWidth: '80px',
      maxWidth: '80px',
      border: '1px solid',
      borderColor: isSelected ? '#93C5FD' : '#D1D5DB',
      borderRadius: '8px',
      padding: '8px',
      textAlign: 'center',
      backgroundColor: isSelected ? '#DBEAFE' : '#FFFFFF',
      verticalAlign: 'top'
    }}>
      <p style={{ fontSize: '0.75rem', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {card.name}
      </p>
      <p style={{ fontSize: '0.75rem', color: '#4B5563', marginTop: '4px' }}>
        {card.elixirCost} elixir
      </p>
      <img 
        src={card.iconUrls.medium} 
        alt={card.name} 
        style={{ margin: '8px auto 0', width: '32px', height: '32px', objectFit: 'contain', display: 'block' }}
      />
    </div>
  );
}

export default DeckCard;
  