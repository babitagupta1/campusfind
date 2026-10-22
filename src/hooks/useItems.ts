import { useEffect, useState } from "react";

import type { Item, ItemFormValues } from "../types/item";
import { getInitialItems, saveItems } from "../services/itemService";

import {
  createItemController,
  editItemController,
  deleteItemController,
} from "../controllers/itemController";

export function useItems() {
  const [itemList, setItemList] = useState<Item[]>(getInitialItems);

  useEffect(() => {
    saveItems(itemList);
  }, [itemList]);

  function addItem(values: ItemFormValues) {
    setItemList((currentItems) =>
      createItemController(currentItems, values)
    );
  }

  function updateItem(id: number, values: ItemFormValues) {
    setItemList((currentItems) =>
      editItemController(currentItems, id, values)
    );
  }

  function deleteItem(id: number) {
    setItemList((currentItems) =>
      deleteItemController(currentItems, id)
    );
  }

  return {
    itemList,
    addItem,
    updateItem,
    deleteItem,
  };
}