import { useState, type FormEvent } from "react";

import {
  DEFAULT_ITEM_CATEGORY,
  DEFAULT_ITEM_TYPE,
  ITEM_CATEGORIES,
  ITEM_TYPES,
} from "../constants/item";

import { VALIDATION_MESSAGES } from "../constants/validationMessages";
import { itemFormSchema } from "../schemas/itemschema";

import type { Item, ItemFormValues } from "../types/item";

type ItemFormProps = {
  initialItem?: Item;
  onSubmit: (values: ItemFormValues) => void;
  onCancel: () => void;
};

export default function ItemForm({
  initialItem,
  onSubmit,
  onCancel,
}: ItemFormProps) {
  const [title, setTitle] = useState(initialItem?.title ?? "");
  const [description, setDescription] = useState(
    initialItem?.description ?? ""
  );
  const [category, setCategory] = useState<ItemFormValues["category"]>(
    initialItem?.category ?? DEFAULT_ITEM_CATEGORY
  );
  const [location, setLocation] = useState(initialItem?.location ?? "");
  const [type, setType] = useState<ItemFormValues["type"]>(
    initialItem?.type ?? DEFAULT_ITEM_TYPE
  );
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const result = itemFormSchema.safeParse({
      title,
      description,
      category,
      location,
      type,
    });

    if (!result.success) {
      setError(
        result.error.issues[0]?.message ??
          VALIDATION_MESSAGES.INVALID_FORM
      );
      return;
    }

    onSubmit(result.data);
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="item-title">Item title *</label>
        <input
          id="item-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Black Wallet"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="item-description">Description *</label>
        <textarea
          id="item-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe the item..."
          rows={4}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="item-category">Category *</label>
        <select
          id="item-category"
          value={category}
          onChange={(event) =>
            setCategory(event.target.value as ItemFormValues["category"])
          }
        >
          {ITEM_CATEGORIES.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="item-location">Location *</label>
        <input
          id="item-location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Where was it lost or found?"
          required
        />
      </div>

      <fieldset className="type-fieldset">
        <legend>Report type *</legend>

        {ITEM_TYPES.map((value) => (
          <label className="radio-option" key={value}>
            <input
              type="radio"
              name="item-type"
              value={value}
              checked={type === value}
              onChange={() => setType(value)}
            />
            {value}
          </label>
        ))}
      </fieldset>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <div className="form-actions">
        <button
          className="button button-secondary"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button className="button button-primary" type="submit">
          {initialItem ? "Save Changes" : "Report Item"}
        </button>
      </div>
    </form>
  );
}