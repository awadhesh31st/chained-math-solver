import Image from "next/image";
import { FC } from "react";

type InputOutType = {
  lable: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "input" | "output";
};

const InputOut: FC<InputOutType> = ({ lable, value, onChange, type }) => {
  return (
    <div className="flex space-x-4 justify-end items-center flex-col gap-[6px] w-[115px] h-full">
      <label
        className={`${
          type === "input" ? "bg-[#E29A2D]" : "bg-[#4CAF79]"
        } text-xs font-semibold text-white py-1 px-[12px] rounded-[14px]`}
      >
        {lable}
      </label>
      <div className="relative !m-0">
        <input
          disabled={type === "output"}
          type="text"
          value={value}
          onChange={onChange}
          className={`h-[50px] w-full p-[14px] border-[2px] outline-none rounded-[15px] bg-white ${
            type === "input"
              ? "border-[#E29A2D] text-left pr-[50px]"
              : "border-[#4CAF79] text-right pl-[50px]"
          }`}
        />
        {type === "input" ? (
          <>
            <span className="absolute border-l border-[#E29A2D] right-[43px]  h-full top-0" />
            <div className="absolute right-[15px] top-[35%]">
              <Image
                src="/radio.svg"
                width={15}
                height={15}
                alt="Output redio"
              />
            </div>
          </>
        ) : (
          <>
            <span className="absolute border-l border-[#4CAF79] left-[43px] h-full top-0" />
            <div className="absolute left-[15px] top-[35%]">
              <Image
                src="/radio.svg"
                width={15}
                height={15}
                alt="Output redio"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InputOut;
