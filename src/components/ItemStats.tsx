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
    <section className="row g-3 mb-4" aria-label="Item statistics">
      {stats.map((stat) => (
        <article className="col-md-4" key={stat.label}>
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <span className="text-secondary d-block">{stat.label}</span>
              <strong className="fs-2 text-primary">{stat.value}</strong>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}