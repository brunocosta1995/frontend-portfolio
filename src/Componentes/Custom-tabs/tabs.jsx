import { useState } from "react";
import "./style.css";

export default function CustomTabs({ tabsContent, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick(getIndex) {
    setCurrentIndex(getIndex);
    onChange(getIndex);
  }

  return (
    <div className="wrappert-tabs">
      <div className="header-tabs">
        {tabsContent.map((tabsItem, tabsIndex) => {
          return (
            <div className={`tab-item ${currentIndex === tabsIndex ? "active" : ""}`} key={tabsContent.label} onClick={() => handleClick(tabsIndex)}>
              <span className="label-header-tabs">{tabsItem.label}</span>
            </div>
          );
        })}
      </div>
      <div className="content-tabs">
        {tabsContent[currentIndex] && tabsContent[currentIndex].content
          ? tabsContent[currentIndex].content
          : null}
      </div>
    </div>
  );
}
