import { useState } from "react";
import type { Item } from "../types/item";

interface ReportItemProps {
  onSubmitItem: (item: Item) => void;
  onClose: () => void;
}

function ReportItem({
  onSubmitItem,
  onClose,
}: ReportItemProps) {
  const [error, setError] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const location = formData.get("location") as string;
    const type = formData.get("type") as "Lost" | "Found";

    // Validation
    if (!title.trim()) {
      setError("Please enter the item title.");
      return;
    }

    if (!description.trim()) {
      setError("Please enter the item description.");
      return;
    }

    if (!location.trim()) {
      setError("Please enter the location.");
      return;
    }

    // Create new item
    const newItem: Item = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      category,
      location: location.trim(),
      type,
    };

    onSubmitItem(newItem);

    form.reset();
    setError("");
  };

  return (
    <div className="details-overlay">
      <div className="details-modal report-modal">

        <button
          className="close-button"
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        <p className="section-label">
          REPORT ITEM
        </p>

        <h2>Report a Lost or Found Item</h2>

        {error && (
          <p className="form-error">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          {/* Item Type */}
          <label htmlFor="type">
            Item Type
          </label>

          <select
            id="type"
            name="type"
            defaultValue="Lost"
          >
            <option value="Lost">
              Lost
            </option>

            <option value="Found">
              Found
            </option>
          </select>

          {/* Item Title */}
          <label htmlFor="title">
            Item Title
          </label>

          <input
            id="title"
            type="text"
            name="title"
            placeholder="e.g. Black Wallet"
          />

          {/* Description */}
          <label htmlFor="description">
            Description
          </label>

          <textarea
            id="description"
            name="description"
            placeholder="Describe the item..."
          />

          {/* Category */}
          <label htmlFor="category">
            Category
          </label>

          <select
            id="category"
            name="category"
            defaultValue="Personal"
          >
            <option value="Personal">
              Personal
            </option>

            <option value="Accessories">
              Accessories
            </option>

            <option value="Documents">
              Documents
            </option>

            <option value="Bags">
              Bags
            </option>

            <option value="Electronics">
              Electronics
            </option>

            <option value="Stationery">
              Stationery
            </option>
          </select>

          {/* Location */}
          <label htmlFor="location">
            Location
          </label>

          <input
            id="location"
            type="text"
            name="location"
            placeholder="e.g. College Library"
          />

          {/* Submit */}
          <button
            type="submit"
            className="submit-button"
          >
            Submit Report
          </button>

        </form>
      </div>
    </div>
  );
}

export default ReportItem;