import { ITEM_STORAGE_KEY } from "../constants/item";
import { itemsSchema } from "../schemas/itemSchema";
import type { Item, ItemFormValues } from "../types/item";
import { initialItems } from "../data/item";

function cloneItems(items: Item[]): Item[] {
  return items.map((item) => ({ ...item }));
}

export function getInitialItems(): Item[] {
  try {
    const savedItems = localStorage.getItem(ITEM_STORAGE_KEY);

    if (savedItems) {
      const parsedData: unknown = JSON.parse(savedItems);
      const result = itemsSchema.safeParse(parsedData);

      if (result.success) {
        return result.data;
      }
    }
  } catch (error) {
    console.error("Failed to load saved items:", error);
  }

  return cloneItems(initialItems);
}

export function saveItems(items: Item[]): void {
  try {
    localStorage.setItem(
      ITEM_STORAGE_KEY,
      JSON.stringify(items)
    );
  } catch (error) {
    console.error("Failed to save items:", error);
  }
}

export function addItemToList(
  currentItems: Item[],
  values: ItemFormValues
): Item[] {
  const newItem: Item = {
    ...values,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };

  return [newItem, ...currentItems];
}

export function updateItemInList(
  currentItems: Item[],
  id: number,
  values: ItemFormValues
): Item[] {
  return currentItems.map((item) =>
    item.id === id
      ? { ...item, ...values }
      : item
  );
}

export function removeItemFromList(
  currentItems: Item[],
  id: number
): Item[] {
  return currentItems.filter((item) => item.id !== id);
}