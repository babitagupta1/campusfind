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
    <div className="modal d-block bg-dark bg-opacity-50" tabIndex={-1} role="dialog" onClick={onClose}>
      <section
        className="modal-dialog modal-dialog-centered"
        role="dialog"
        aria-modal="true"
        aria-labelledby="report-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title fs-5" id="report-title">Report an Item</h2>
            <p className="text-secondary mb-0">Share details to help someone find it.</p>
          </div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close report form"
            onClick={onClose}
          >
          </button>
        </div>

        <div className="modal-body"><ItemForm onSubmit={onAdd} onCancel={onClose} /></div>
        </div>
      </section>
    </div>
  );
}