export type ItemType = "Lost" | "Found";

export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  type: ItemType;
}

