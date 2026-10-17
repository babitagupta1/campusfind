import { useState } from "react";
import type { Item } from "../types/item";
import { getInitialItems } from "../services/itemService";
import {
  createItemController,
  deleteItemController,
  editItemController,
} from "../controllers/itemController";

export function useItems() {
  const [itemList, setItemList] = useState<Item[]>(
    () => getInitialItems()
  );

  // Add item
  const addItem = (newItem: Item) => {
    setItemList((currentItems) =>
      createItemController(currentItems, newItem)
    );
  };

  // Delete item
  const deleteItem = (id: number) => {
    setItemList((currentItems) =>
      deleteItemController(currentItems, id)
    );
  };

  // Update item
  const updateItem = (updatedItem: Item) => {
    setItemList((currentItems) =>
      editItemController(currentItems, updatedItem)
    );
  };

  return {
    itemList,
    addItem,
    deleteItem,
    updateItem,
  };
}