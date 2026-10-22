import type { Item } from "../types/item";
import { ITEM_TYPES } from "../constants/item";

type ItemStatsProps = {
  items: Item[];
};

export default function ItemStats({ items }: ItemStatsProps) {
  const lostCount = items.filter(
    (item) => item.type === ITEM_TYPES[0]
  ).length;

  const foundCount = items.filter(
    (item) => item.type === ITEM_TYPES[1]
  ).length;

  const stats = [
    { label: "Total Items", value: items.length },
    { label: "Lost Items", value: lostCount },
    { label: "Found Items", value: foundCount },
  ];

  return (
    <section className="stats-grid" aria-label="Item statistics">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.label}>
          <span>{stat.label}</span>
          <strong>{stat.value}</strong>
        </article>
      ))}
    </section>
  );
}