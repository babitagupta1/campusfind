interface ItemFiltersProps {
  search: string;
  typeFilter: string;
  categoryFilter: string;

  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onClear: () => void;
}

function ItemFilters({
  search,
  typeFilter,
  categoryFilter,
  onSearchChange,
  onTypeChange,
  onCategoryChange,
  onClear,
}: ItemFiltersProps) {
  const hasFilters =
    search ||
    typeFilter !== "All" ||
    categoryFilter !== "All";

  return (
    <div className="filters">

      {/* Search */}
      <input
        type="text"
        placeholder="Search by item or location..."
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
      />

      {/* Type Filter */}
      <select
        value={typeFilter}
        onChange={(e) =>
          onTypeChange(e.target.value)
        }
      >
        <option value="All">All Types</option>
        <option value="Lost">Lost</option>
        <option value="Found">Found</option>
      </select>

      {/* Category Filter */}
      <select
        value={categoryFilter}
        onChange={(e) =>
          onCategoryChange(e.target.value)
        }
      >
        <option value="All">
          All Categories
        </option>

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

      {/* Clear */}
      {hasFilters && (
        <button
          className="clear-button"
          onClick={onClear}
          type="button"
        >
          Clear
        </button>
      )}

    </div>
  );
}

export default ItemFilters;