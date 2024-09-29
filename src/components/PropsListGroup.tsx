import { Fragment, useState } from "react";
import "../styles/PropsList.css";

interface Props {
  items: string[];
  headings: string;
}
function PropsListGroup({ items, headings }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> {headings} </h1>
      <ul className="list">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default PropsListGroup;
