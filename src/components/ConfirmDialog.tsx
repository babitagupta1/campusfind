import { BsExclamationTriangle, BsTrash } from "react-icons/bs";

type ConfirmDialogProps = {
  itemTitle: string;
  onConfirm: () => void;
  onClose: () => void;
};

export default function ConfirmDialog({
  itemTitle,
  onConfirm,
  onClose,
}: ConfirmDialogProps) {
  return (
    <div className="modal d-block bg-dark bg-opacity-50" tabIndex={-1} role="dialog" onClick={onClose}>
      <section className="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title fs-5">Delete item</h2>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
          </div>
          <div className="modal-body text-center">
            <BsExclamationTriangle className="fs-1 text-warning mb-3" aria-hidden="true" />
            <p className="mb-1">Are you sure you want to delete this item?</p>
            <strong className="d-block text-truncate">{itemTitle}</strong>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={onConfirm}>
              <BsTrash /> Delete
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}