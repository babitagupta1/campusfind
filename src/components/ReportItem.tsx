
import type { Item } from "../types/item";

interface ReportItemProps {
  onSubmitItem: (item: Item) => void;
  onClose: () => void;
}

function ReportItem({
  onSubmitItem,
  onClose,
}: ReportItemProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const location = formData.get("location") as string;
    const type = formData.get("type") as "Lost" | "Found";

    if (!title.trim() || !description.trim() || !location.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    const newItem: Item = {
      id: Date.now(),
      title,
      description,
      category,
      location,
      type,
    };

    onSubmitItem(newItem);
    form.reset();
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

        <form onSubmit={handleSubmit}>
          <label>Item Type</label>

          <select name="type" defaultValue="Lost">
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>

          <label>Item Title</label>

          <input
            type="text"
            name="title"
            placeholder="e.g. Black Wallet"
          />

          <label>Description</label>

          <textarea
            name="description"
            placeholder="Describe the item..."
          />

          <label>Category</label>

          <select
            name="category"
            defaultValue="Personal"
          >
            <option value="Personal">Personal</option>
            <option value="Accessories">Accessories</option>
            <option value="Documents">Documents</option>
            <option value="Bags">Bags</option>
            <option value="Electronics">Electronics</option>
            <option value="Stationery">Stationery</option>
          </select>

          <label>Location</label>

          <input
            type="text"
            name="location"
            placeholder="e.g. College Library"
          />

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
