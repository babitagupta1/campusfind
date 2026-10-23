import type { z } from "zod";

import type {
  itemSchema,
  itemsSchema,
  itemFormSchema,
  itemTypeSchema,
  itemCategorySchema,
} from "../schemas/itemSchema";

export type Item = z.infer<typeof itemSchema>;

export type Items = z.infer<typeof itemsSchema>;

export type ItemFormValues = z.infer<typeof itemFormSchema>;

export type ItemType = z.infer<typeof itemTypeSchema>;

export type ItemCategory = z.infer<typeof itemCategorySchema>;