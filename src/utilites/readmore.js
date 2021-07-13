import React, { useState } from "react";
import { Card } from "react-bootstrap";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Card.Text style={{ color: "white" }}>
      {isReadMore ? text.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        style={{ color: "blue", cursor: "pointer" }}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </Card.Text>
  );
};

export default ReadMore;
