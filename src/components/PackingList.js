import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onUpdateItem,
  onClearAll,
}) {
  const [sortBy, setSortby] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list1">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
            key={item.id}
          />
          //component, props,  js obj || pass onDeleteItem props into Item
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button
          onClick={() => {
            onClearAll();
          }}
        >
          Clear list
        </button>
      </div>
    </div>
  );
}
