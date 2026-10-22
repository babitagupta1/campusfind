import { useMemo, useState } from "react";

import type { Item, ItemCategory, ItemType } from "../types/item";
import { ALL_FILTER } from "../constants/item";

type TypeFilter = ItemType | typeof ALL_FILTER;
type CategoryFilter = ItemCategory | typeof ALL_FILTER;

export function useItemFilters(items: Item[]) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] =
    useState<TypeFilter>(ALL_FILTER);
  const [categoryFilter, setCategoryFilter] =
    useState<CategoryFilter>(ALL_FILTER);

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return items.filter((item) => {
      const matchesSearch = [
        item.title,
        item.description,
        item.location,
        item.category,
      ].some((value) => value.toLowerCase().includes(query));

      const matchesType =
        typeFilter === ALL_FILTER || item.type === typeFilter;

      const matchesCategory =
        categoryFilter === ALL_FILTER ||
        item.category === categoryFilter;

      return matchesSearch && matchesType && matchesCategory;
    });
  }, [items, search, typeFilter, categoryFilter]);

  function clearFilters() {
    setSearch("");
    setTypeFilter(ALL_FILTER);
    setCategoryFilter(ALL_FILTER);
  }

  return {
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    categoryFilter,
    setCategoryFilter,
    filteredItems,
    clearFilters,
  };
}