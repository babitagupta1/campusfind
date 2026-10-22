import {
  ALL_FILTER,
  ITEM_CATEGORIES,
  ITEM_TYPES,
} from "../constants/item";

import type { ItemCategory, ItemType } from "../types/item";

type ItemFiltersProps = {
  search: string;
  setSearch: (value: string) => void;
  typeFilter: ItemType | typeof ALL_FILTER;
  setTypeFilter: (value: ItemType | typeof ALL_FILTER) => void;
  categoryFilter: ItemCategory | typeof ALL_FILTER;
  setCategoryFilter: (
    value: ItemCategory | typeof ALL_FILTER
  ) => void;
  clearFilters: () => void;
};

export default function ItemFilters({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  categoryFilter,
  setCategoryFilter,
  clearFilters,
}: ItemFiltersProps) {
  return (
    <section className="filter-panel">
      <div className="search-box">
        <label htmlFor="item-search">Search items</label>
        <input
          id="item-search"
          type="search"
          placeholder="Search title, location, description..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="filter-field">
        <label htmlFor="type-filter">Item type</label>
        <select
          id="type-filter"
          value={typeFilter}
          onChange={(event) =>
            setTypeFilter(event.target.value as ItemType | typeof ALL_FILTER)
          }
        >
          <option value={ALL_FILTER}>All types</option>
          {ITEM_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-field">
        <label htmlFor="category-filter">Category</label>
        <select
          id="category-filter"
          value={categoryFilter}
          onChange={(event) =>
            setCategoryFilter(
              event.target.value as ItemCategory | typeof ALL_FILTER
            )
          }
        >
          <option value={ALL_FILTER}>All categories</option>
          {ITEM_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button
        className="button button-secondary clear-button"
        type="button"
        onClick={clearFilters}
      >
        Clear filters
      </button>
    </section>
  );
}