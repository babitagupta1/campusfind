import type { Item, ItemFormValues } from "../types/item";

import {
  addItemToList,
  updateItemInList,
  removeItemFromList,
} from "../services/itemService";

export function createItemController(
  items: Item[],
  values: ItemFormValues
): Item[] {
  return addItemToList(items, values);
}

export function editItemController(
  items: Item[],
  id: number,
  values: ItemFormValues
): Item[] {
  return updateItemInList(items, id, values);
}

export function deleteItemController(
  items: Item[],
  id: number
): Item[] {
  return removeItemFromList(items, id);
}