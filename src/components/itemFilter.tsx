import {
  ALL_FILTER,
  ITEM_CATEGORIES,
  ITEM_TYPES,
} from "../constants/item";

import type { ItemCategory, ItemType } from "../types/item";
import { BsSearch, BsX } from "react-icons/bs";

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
    <section className="card shadow-sm mb-4">
      <div className="card-body row g-3 align-items-end">
      <div className="col-lg-5">
        <label className="form-label" htmlFor="item-search">Search items</label>
        <div className="input-group">
          <span className="input-group-text"><BsSearch /></span>
          <input className="form-control"
          id="item-search"
          type="search"
          placeholder="Search title, location, description..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>

      <div className="col-md-3">
        <label className="form-label" htmlFor="type-filter">Item type</label>
        <select className="form-select"
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

      <div className="col-md-3">
        <label className="form-label" htmlFor="category-filter">Category</label>
        <select className="form-select"
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

      <div className="col-md-3 col-lg-1">
      <button
        className="btn btn-outline-secondary w-100"
        type="button"
        onClick={clearFilters}
      >
        <BsX /> <span className="d-lg-none">Clear</span>
      </button>
      </div>
      </div>
    </section>
  );
}