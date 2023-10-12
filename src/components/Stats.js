export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list !</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! Ready to travel !!"
          : `🍞 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
