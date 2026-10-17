import type { Item } from "../types/item";
import {
  addItemToList,
  removeItemFromList,
  updateItemInList,
} from "../services/itemService";

// Add action
export function createItemController(
  currentItems: Item[],
  newItem: Item
): Item[] {
  return addItemToList(currentItems, newItem);
}

// Delete action
export function deleteItemController(
  currentItems: Item[],
  id: number
): Item[] {
  return removeItemFromList(currentItems, id);
}

// Update action
export function editItemController(
  currentItems: Item[],
  updatedItem: Item
): Item[] {
  return updateItemInList(currentItems, updatedItem);
}