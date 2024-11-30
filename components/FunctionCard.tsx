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
  return (
    <div className="w-[235px] h-[251px] p-5 bg-white border border-[#DFDFDF] rounded-[15px] gap-5 flex flex-col">
      <div className="flex gap-[7px] justify-start items-center">
        <Image
          src={"/dotMenu.svg"}
          width={12}
          height={7}
          alt="card title icon"
        />
        <span className="text-[#A5A5A5] text-sm font-semibold">
          Function: {cardNumber}
        </span>
      </div>
      <div className="flex flex-col gap-[17px]">
        <div className="flex gap-1 flex-col">
          <span className="text-xs font-medium text-[#252525]">Equation</span>
          <input
            className="flex border-[#D3D3D3] bg-[#ffffff] border rounded-lg px-[11px] py-[9px] outline-none text-xs font-medium text-[#252525]"
            value={equation}
            onChange={(e) => onEquationChange(id, e.target.value)}
          />
        </div>
        <div className="flex gap-1 flex-col">
          <span className="text-xs font-medium text-[#252525]">
            Next function
          </span>
          <div className="relative inline-block">
            <select
              disabled
              value={`${id === null ? "-" : `Function: ${id}`}`}
              className="appearance-none w-full border border-[#D3D3D3] bg-[#F5F5F5] rounded-lg px-[11px] py-[9px] outline-none text-xs font-medium text-[#252525] cursor-not-allowed"
            >
              <option value={`${id === null ? "-" : `Function: ${id}`}`}>{`${
                id === null ? "-" : `Function: ${id}`
              }`}</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#D3D3D3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
