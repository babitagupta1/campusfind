import type { Item } from "../types/item";

interface ItemCardProps {
  item: Item;
  onViewDetails: (item: Item) => void;
}

function ItemCard({ item, onViewDetails }: ItemCardProps) {
  return (
    <div className="item-card">
      <div className={`item-badge ${item.type.toLowerCase()}`}>
        {item.type}
      </div>

      <p className="item-category">{item.category}</p>

      <h3>{item.title}</h3>

      <p>{item.description}</p>

      <p className="item-location">
        📍 {item.location}
      </p>

      <button onClick={() => onViewDetails(item)}>
        View Details
      </button>
    </div>
  );
}

export default ItemCard;