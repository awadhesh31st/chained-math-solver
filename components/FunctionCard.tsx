import Image from "next/image";
import React from "react";

interface FunctionCardProps {
  cardNumber: number;
  id: number | null;
  equation: string;
  onEquationChange: (id: number | null, equation: string) => void;
}

const FunctionCard: React.FC<FunctionCardProps> = ({
  cardNumber,
  id,
  equation,
  onEquationChange,
}) => {
  const optionValue = `${id === null ? "-" : `Function: ${id}`}`;
  return (
    <div className="w-[235px] h-auto p-5 bg-white border border-[#DFDFDF] rounded-[15px] gap-5 flex flex-col">
      <div className="flex gap-[7px] justify-start items-center">
        <Image src="/dotMenu.svg" width={12} height={7} alt="card title icon" />
        <span className="text-[#A5A5A5] text-sm font-semibold">
          Function: {cardNumber}
        </span>
      </div>
      <div className="flex flex-col gap-[46px]">
        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-1 flex-col">
            <span className="text-xs font-medium text-[#252525]">Equation</span>
            <input
              className="input"
              value={equation}
              onChange={(e) => onEquationChange(id, e.target.value)}
            />
          </div>
          <div className="flex gap-1 flex-col">
            <span className="text-xs font-medium text-[#252525]">
              Next function
            </span>
            <div className="relative inline-block">
              <select disabled value={optionValue} className="select">
                <option value={optionValue}>{optionValue}</option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Image src="/select.svg" width={14} height={14} alt="select" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-[10px] font-medium">
          <div className="flex justify-start items-center gap-1">
            <Image src="/radio.svg" width={15} height={15} alt="Input redio" />
            <span>input</span>
          </div>
          <div className="flex justify-start items-center gap-1">
            <span>output</span>
            <Image src="/radio.svg" width={15} height={15} alt="Output redio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
