import type { Item } from "../types/item";

type ItemDetailsProps = {
  item: Item;
  onClose: () => void;
};

export default function ItemDetails({ item, onClose }: ItemDetailsProps) {
  return (
    <div className="modal d-block bg-dark bg-opacity-50" tabIndex={-1} role="dialog" onClick={onClose}>
      <section className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="details-title">Item details</h2>
            <button type="button" className="btn-close" aria-label="Close details" onClick={onClose} />
          </div>
          <div className="modal-body">
            <span className={`badge mb-3 ${item.type === "Lost" ? "text-bg-danger" : "text-bg-success"}`}>
              {item.type}
            </span>
            <h3 className="h5">{item.title}</h3>
            <p className="text-secondary">{item.description}</p>
            <dl className="row">
              <div className="col-4">
                <dt>Category</dt>
                <dd>{item.category}</dd>
              </div>
              <div className="col-4">
                <dt>Location</dt>
                <dd>{item.location}</dd>
              </div>
              <div className="col-4">
                <dt>Reported</dt>
                <dd>{item.createdAt ? new Date(item.createdAt).toLocaleString() : "Date unavailable"}</dd>
              </div>
            </dl>
            <button type="button" className="btn btn-primary w-100" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
