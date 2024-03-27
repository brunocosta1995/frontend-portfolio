import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggleChildren(getLabel) {
    setDisplayChildren({
      ...displayChildren,
      [getLabel]: !displayChildren[getLabel],
    });

  }
  console.log(displayChildren);


  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>+</span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && displayChildren[item.label] ? <MenuList list={item.children} /> : null}      
    </li>
  );


}
