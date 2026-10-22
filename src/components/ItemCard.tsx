import type { Item } from "../types/item";

type ItemCardProps = {
  item: Item;
  onViewDetails: (item: Item) => void;
  onEdit: (item: Item) => void;
  onDelete: (id: number) => void;
};

export default function ItemCard({
  item,
  onViewDetails,
  onEdit,
  onDelete,
}: ItemCardProps) {
  function handleDelete() {
    const confirmed = window.confirm(
      `Delete "${item.title}"?`
    );

    if (confirmed) {
      onDelete(item.id);
    }
  }

  return (
    <article className="item-card">
      <div className="item-card-top">
        <span
          className={`status-badge ${
            item.type === "Lost" ? "status-lost" : "status-found"
          }`}
        >
          {item.type}
        </span>

        <span className="category-badge">{item.category}</span>
      </div>

      <h3>{item.title}</h3>
      <p className="item-description">{item.description}</p>

      <p className="item-location">
        <span aria-hidden="true">⌖</span> {item.location}
      </p>

      <div className="item-actions">
        <button
          className="button button-primary"
          onClick={() => onViewDetails(item)}
        >
          Details
        </button>

        <button
          className="button button-secondary"
          onClick={() => onEdit(item)}
        >
          Edit
        </button>

        <button
          className="button button-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </article>
  );
}