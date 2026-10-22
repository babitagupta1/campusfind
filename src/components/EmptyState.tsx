type EmptyStateProps = {
  onClear: () => void;
};

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <section className="empty-state">
      <div className="empty-icon" aria-hidden="true">⌕</div>
      <h3>No items found</h3>
      <p>Try a different search term or change your filters.</p>
      <button className="button button-secondary" onClick={onClear}>
        Clear filters
      </button>
    </section>
  );
}