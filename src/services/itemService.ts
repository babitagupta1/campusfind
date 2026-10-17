import type { Item } from "../types/item";
import { items } from "../data/item";

// Initial data load garne
export function getInitialItems(): Item[] {
  return items;
}

// Naya item add garne
export function addItemToList(
  currentItems: Item[],
  newItem: Item
): Item[] {
  return [newItem, ...currentItems];
}

// Item delete garne
export function removeItemFromList(
  currentItems: Item[],
  id: number
): Item[] {
  return currentItems.filter((item) => item.id !== id);
}

// Existing item update garne
export function updateItemInList(
  currentItems: Item[],
  updatedItem: Item
): Item[] {
  return currentItems.map((item) =>
    item.id === updatedItem.id ? updatedItem : item
  );
}