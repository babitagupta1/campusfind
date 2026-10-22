import ItemForm from "./ItemForm";
import type { ItemFormValues } from "../types/item";

type ReportItemProps = {
  onAdd: (values: ItemFormValues) => void;
  onClose: () => void;
};

export default function ReportItem({
  onAdd,
  onClose,
}: ReportItemProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="report-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-heading">
          <div>
            <h2 id="report-title">Report an Item</h2>
            <p className="muted">Share details to help someone find it.</p>
          </div>
          <button
            className="icon-button"
            aria-label="Close report form"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <ItemForm onSubmit={onAdd} onCancel={onClose} />
      </section>
    </div>
  );
}