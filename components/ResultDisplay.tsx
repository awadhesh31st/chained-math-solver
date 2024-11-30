import React from "react";

interface ResultDisplayProps {
  result: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div className="mt-8 flex items-center space-x-4">
      <div className="text-green-600 text-lg font-bold">Final Output y:</div>
      <div className="bg-green-100 text-green-800 px-6 py-3 rounded font-bold text-xl">
        {result}
      </div>
    </div>
  );
};

export default ResultDisplay;
