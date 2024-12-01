"use client";

import FunctionCard from "@/components/FunctionCard";
import InputOut from "@/components/InputOut";
import React, { useState, useCallback } from "react";

type FunctionItem = {
  id: number | null;
  equation: string;
};

const adjustEquation = (equation: string): string => {
  const parts: string[] = equation.split("");
  const adjustedParts: string[] = parts.map((part, index) => {
    if (part === "x") {
      const prev = parts[index - 1];
      const next = parts[index + 1];
      if (prev && !isNaN(Number(prev))) {
        return `*x`;
      } else if (next && !isNaN(Number(next))) {
        return `x*${next}`;
      }
    }
    return part;
  });
  return adjustedParts.join("");
};

const App: React.FC = () => {
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
      <div className="md:container flex justify-center items-center">
        <InputOut
          lable="Initial value of x:"
          value={initialInput}
          onChange={handleInputChange}
          type="input"
        />
        <div className="relative w-full flex justify-center mt-6">
          <div className="flex w-full">
            <div className="flex justify-center items-center flex-wrap gap-[131px]">
              {functions.map((func, index) => (
                <FunctionCard
                  key={index}
                  cardNumber={index + 1}
                  id={func.id}
                  equation={func.equation}
                  onEquationChange={handleEquationChange}
                />
              ))}
            </div>
          </div>
        </div>
        <InputOut
          lable="Final Output y"
          value={Number.isNaN(finalResult) ? "0" : `${finalResult}`}
          onChange={handleInputChange}
          type="output"
        />
      </div>
    </div>
  );
};

export default App;
