import ItemForm from "./ItemForm";
import type { Item, ItemFormValues } from "../types/item";

type EditItemProps = {
  item: Item;
  onSave: (values: ItemFormValues) => void;
  onClose: () => void;
};

export default function EditItem({
  item,
  onSave,
  onClose,
}: EditItemProps) {
  return (
    <div className="modal d-block bg-dark bg-opacity-50" tabIndex={-1} role="dialog" onClick={onClose}>
      <section
        className="modal-dialog modal-dialog-centered"
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title fs-5" id="edit-title">Edit Item</h2>
            <p className="text-secondary mb-0">Update the item information.</p>
          </div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close edit form"
            onClick={onClose}
          >
          </button>
        </div>

        <div className="modal-body"><ItemForm
          initialItem={item}
          onSubmit={onSave}
          onCancel={onClose}
        /></div>
        </div>
      </section>
    </div>
  );
}