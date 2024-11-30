import React, { FC } from "react";

const ChainDisplay: FC = () => {
  return (
    <svg className="absolute w-full h-20" style={{ zIndex: -1 }}>
      <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="black" strokeWidth="2" />
      <line x1="40%" y1="50%" x2="60%" y2="50%" stroke="black" strokeWidth="2" />
      <line x1="60%" y1="50%" x2="80%" y2="50%" stroke="black" strokeWidth="2" />
    </svg>
  );
};

export default ChainDisplay;
