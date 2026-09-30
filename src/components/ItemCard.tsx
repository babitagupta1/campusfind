import type { Item } from "../types/item";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <article className="item-card">
      <div className="item-card-top">
        <span
          className={`item-badge ${item.type.toLowerCase()}`}
        >
          {item.type}
        </span>

        <span className="item-category">
          {item.category}
        </span>
      </div>

      <h3>{item.title}</h3>

      <p className="item-description">
        {item.description}
      </p>

      <div className="item-location">
        <span>📍</span>
        <span>{item.location}</span>
      </div>

      <button
        className="details-button"
        onClick={() => alert(`Selected: ${item.title}`)}
      >
        View Details
      </button>
    </article>
  );
}

export default ItemCard;