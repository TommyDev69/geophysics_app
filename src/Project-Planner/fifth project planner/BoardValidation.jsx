import React, { useState } from "react";
import BoardContent from "./BoardContent";
import BoardProgress from "./BoardProgress";

export default function BoardValidation() {
  const title = "Todo";

  const [content] = useState([
    {
      id: 1,
      subject: "Collect ground truth samples",
      details: "Take soil samples at marked locations",
      points: 3,
      aka: "CO",
    },
    {
      id: 2,
      subject: "Process raw GPR data",
      details: "Clean and filter GPR scan data",
      points: 8,
      aka: "DA",
    },
    {
      id: 3,
      subject: "Generate 2D profiles",
      details: "Take soil samples at marked locations",
      points: 5,
      aka: "CO",
    },
  ]);

  

  // Pass props using lowercase names (React convention)
  return (
    <>
      <BoardContent content={content} title={title} />
      
    </>
  )
}