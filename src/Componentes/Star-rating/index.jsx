import { FaStar } from "react-icons/fa";
import "./style.css";
import React from "react";
import { useState } from "react";
export default function StarRating({ numStars = 5 }) {
  // número default de estrelas 5
  const [ hover, setHover ] = useState(0);
  const [ rating, setRating ] = useState(0);

  function handleClick(getId) {
    setRating(getId);
  }

  function handleMouseEnter(getId) {
    setHover(getId);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(numStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            size={40}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}
