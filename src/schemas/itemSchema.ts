import { z } from "zod";

import {
  ITEM_TYPES,
  ITEM_CATEGORIES,
  ITEM_ID_MIN,
  ITEM_TITLE_MIN_LENGTH,
  ITEM_DESCRIPTION_MIN_LENGTH,
  ITEM_LOCATION_MIN_LENGTH,
} from "../constants/item";

import { VALIDATION_MESSAGES } from "../constants/validationMessages";

export const itemTypeSchema = z.enum(ITEM_TYPES);

export const itemCategorySchema = z.enum(ITEM_CATEGORIES);

export const itemFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(
      ITEM_TITLE_MIN_LENGTH,
      VALIDATION_MESSAGES.TITLE_REQUIRED
    ),

  description: z
    .string()
    .trim()
    .min(
      ITEM_DESCRIPTION_MIN_LENGTH,
      VALIDATION_MESSAGES.DESCRIPTION_REQUIRED
    ),

  category: itemCategorySchema,

  location: z
    .string()
    .trim()
    .min(
      ITEM_LOCATION_MIN_LENGTH,
      VALIDATION_MESSAGES.LOCATION_REQUIRED
    ),

  type: itemTypeSchema,
});

export const itemSchema = itemFormSchema.extend({
  id: z
    .number()
    .int(VALIDATION_MESSAGES.INVALID_ID)
    .min(
      ITEM_ID_MIN,
      VALIDATION_MESSAGES.INVALID_ID
    ),

  createdAt: z.string().optional(),
});

// Multiple items ko array validate garne schema
export const itemsSchema = z.array(itemSchema);