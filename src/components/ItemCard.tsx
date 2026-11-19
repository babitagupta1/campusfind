import type { Item } from "../types/item";
import { BsEye, BsPencil, BsTrash, BsGeoAlt } from "react-icons/bs";

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
    onDelete(item.id);
  }

  return (
    <article className="col-md-6 col-xl-4">
      <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-3">
        <span
          className={`badge ${item.type === "Lost" ? "text-bg-danger" : "text-bg-success"}`}
        >
          {item.type}
        </span>

        <span className="badge text-bg-light">{item.category}</span>
      </div>

      <h3 className="h5">{item.title}</h3>
      <p className="text-secondary">{item.description}</p>

      <p className="text-secondary small mt-auto">
        <BsGeoAlt aria-hidden="true" /> {item.location}
      </p>

      <div className="d-flex gap-2">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => onViewDetails(item)}
        >
          <BsEye /> Details
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onEdit(item)}
        >
          <BsPencil /> Edit
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          aria-label={`Delete ${item.title}`}
          onClick={handleDelete}
        >
          <BsTrash /> Delete
        </button>
      </div>
      </div>
      </div>
    </article>
  );
}