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
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-heading">
          <div>
            <h2 id="edit-title">Edit Item</h2>
            <p className="muted">Update the item information.</p>
          </div>
          <button
            className="icon-button"
            aria-label="Close edit form"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <ItemForm
          initialItem={item}
          onSubmit={onSave}
          onCancel={onClose}
        />
      </section>
    </div>
  );
}