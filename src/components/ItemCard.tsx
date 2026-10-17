import type { Item } from "../types/item";

interface ItemCardProps {
  item: Item;
  onViewDetails: (item: Item) => void;
  onDelete: (id: number) => void;
}

function ItemCard({
  item,
  onViewDetails,
  onDelete,
}: ItemCardProps) {
  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${item.title}"?`
    );

    if (confirmed) {
      onDelete(item.id);
    }
  };

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

      <div className="item-actions">
        <button
          type="button"
          onClick={() => onViewDetails(item)}
        >
          View Details
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;