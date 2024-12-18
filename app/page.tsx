"use client";

import FunctionCard from "@/components/FunctionCard";
import InputOut from "@/components/InputOut";
import { adjustEquation } from "@/utils/equationParser";
import React, { useState, useCallback } from "react";

const App = () => {
  const [initialInput, setInitialInput] = useState<string>("2");
  const [functions, setFunctions] = useState<FunctionItem[]>([
    { id: 2, equation: "x^2" },
    { id: 4, equation: "2x+4" },
    { id: 6, equation: "x^2+20" },
    { id: 5, equation: "x-2" },
    { id: 3, equation: "x/2" },
  ]);

  const handleEquationChange = useCallback(
    (id: number | null, equation: string) => {
      setFunctions((prevFunctions) =>
        prevFunctions.map((f) => (f.id === id ? { ...f, equation } : f))
      );
    },
    []
  );

  const calculateResult = useCallback(() => {
    if (!initialInput) return NaN;
    try {
      let result = parseFloat(initialInput);
      const chainOrder = [2, 4, 5, 3, 6];
      chainOrder.forEach((id) => {
        const func = functions.find((f) => f.id === id);
        if (func && func.id !== null) {
          let parsedEquation = adjustEquation(func.equation);
          parsedEquation = parsedEquation.replace(/x/g, `${result}`);
          parsedEquation = parsedEquation.replace(/\^/g, "**");
          result = eval(parsedEquation);
        }
      });
      return result;
    } catch (error) {
      console.error("Error during evaluation:", error);
      return NaN;
    }
  }, [initialInput, functions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setInitialInput(value);
    }
  };

  const finalResult = calculateResult();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="md:container">
        <div className="w-full flex justify-center gap-2">
          <div className="flex justify-center items-center flex-wrap gap-[131px]">
            {functions.map((func, index) => {
              return (
                <div className="flex" key={index}>
                  {index === 0 && (
                    <div className="flex mr-[9px]">
                      <InputOut
                        lable="Initial value of x"
                        value={initialInput}
                        onChange={handleInputChange}
                        type="input"
                      />
                    </div>
                  )}
                  <FunctionCard
                    cardNumber={index + 1}
                    id={func.id}
                    equation={func.equation}
                    onEquationChange={handleEquationChange}
                  />
                  {index === 2 && (
                    <div className="flex ml-[9px]">
                      <InputOut
                        lable="Final Output y"
                        value={
                          Number.isNaN(finalResult) ? "0" : `${finalResult}`
                        }
                        onChange={handleInputChange}
                        type="output"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
