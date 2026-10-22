export const ITEM_TYPES = ["Lost", "Found"] as const;

export const ITEM_CATEGORIES = [
  "Personal",
  "Accessories",
  "Documents",
  "Bags",
  "Electronics",
  "Stationery",
  "Other",
] as const;

export const ALL_FILTER = "All" as const;

export const DEFAULT_ITEM_TYPE = ITEM_TYPES[0];

export const DEFAULT_ITEM_CATEGORY = ITEM_CATEGORIES[0];

export const ITEM_STORAGE_KEY = "campusfind-items";

export const ITEM_ID_MIN = 1;

export const ITEM_TITLE_MIN_LENGTH = 1;

export const ITEM_DESCRIPTION_MIN_LENGTH = 1;

export const ITEM_LOCATION_MIN_LENGTH = 1;