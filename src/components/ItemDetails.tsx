import type { Item } from "../types/item";

type ItemDetailsProps = {
  item: Item;
  onClose: () => void;
};

export default function ItemDetails({
  item,
  onClose,
}: ItemDetailsProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="details-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-heading">
          <h2 id="details-title">Item details</h2>
          <button
            className="icon-button"
            aria-label="Close details"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <span
          className={`status-badge ${
            item.type === "Lost" ? "status-lost" : "status-found"
          }`}
        >
          {item.type}
        </span>

        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <dl className="details-list">
          <div>
            <dt>Category</dt>
            <dd>{item.category}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{item.location}</dd>
          </div>
          <div>
            <dt>Reported</dt>
            <dd>
              {item.createdAt
                ? new Date(item.createdAt).toLocaleString()
                : "Date unavailable"}
            </dd>
          </div>
        </dl>

        <button className="button button-primary full-width" onClick={onClose}>
          Close
        </button>
      </section>
    </div>
  );
}