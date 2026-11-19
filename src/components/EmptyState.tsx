type EmptyStateProps = {
  onClear: () => void;
};

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <section className="card text-center p-5">
      <BsSearch className="fs-1 text-secondary mx-auto mb-3" aria-hidden="true" />
      <h3 className="h5">No items found</h3>
      <p className="text-secondary">Try a different search term or change your filters.</p>
      <button className="btn btn-outline-secondary" onClick={onClear}>
        Clear filters
      </button>
    </section>
  );
}
import { BsSearch } from "react-icons/bs";