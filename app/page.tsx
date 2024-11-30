"use client";

import FunctionCard from "@/components/FunctionCard";
import ResultDisplay from "@/components/ResultDisplay";
import React, { useState } from "react";

const App: React.FC = () => {
  const [initialInput, setInitialInput] = useState<number>(2);
  const [functions, setFunctions] = useState([
    { id: 2, equation: "x^2" },
    { id: 4, equation: "2*x+4" },
    { id: null, equation: "x-2" },
    { id: 5, equation: "x/2" },
    { id: 3, equation: "x^2+20" },
  ]);

  const handleEquationChange = (id: number | null, equation: string) => {
    if(id){
      setFunctions((prev) =>
        prev.map((f) => (f.id === id ? { ...f, equation } : f))
      );
    }
  };

  const calculateResult = () => {
    try {
      let result = initialInput;
      const chainOrder = [1, 2, 4, 5, 3];
      chainOrder.forEach((id) => {
        const func = functions.find((f) => f.id === id);
        if (func) {
          const parsedEquation = func.equation.replace(/x/g, `${result}`);
          result = eval(parsedEquation.replace("^", "**"));
        }
      });
      return result;
    } catch {
      return NaN;
    }
  };

  const finalResult = calculateResult();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="md:container flex">
        <div className="flex items-center space-x-4">
          <div className="text-yellow-600 font-bold">
            <label>Initial value of x:</label>
            <input
              type="number"
              value={initialInput}
              onChange={(e) => setInitialInput(parseFloat(e.target.value) || 0)}
              className="border rounded px-4 py-2 ml-2"
            />
          </div>
        </div>
        <div className="relative w-full flex justify-center mt-6">
          <div className="flex gap-[131px] justify-center items-center flex-wrap">
            {functions.map((func, key: number) => (
              <FunctionCard
                key={key}
                cardNumber={key + 1}
                id={func.id}
                equation={func.equation}
                onEquationChange={handleEquationChange}
              />
            ))}
          </div>
        </div>
        <ResultDisplay result={finalResult} />
      </div>
    </div>
  );
};

export default App;
