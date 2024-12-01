import { FC } from "react";

type InputOutType = {
  lable: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "input" | "output";
};

const InputOut: FC<InputOutType> = ({ lable, value, onChange, type }) => {
  return (
    <div className="flex space-x-4 justify-center items-center flex-col gap-[6px] w-[145px]">
      <label
        className={`${
          type === "input" ? "bg-[#E29A2D]" : "bg-[#4CAF79]"
        } text-xs font-semibold text-white py-1 px-[13px] rounded-[14px]`}
      >
        {lable}
      </label>
      <input
        disabled={type === "output"}
        type="text"
        value={value}
        onChange={onChange}
        className={`!mr-[14px] h-[50px] w-full p-[14px] border-[2px] outline-none rounded-[15px] bg-white ${
          type === "input" ? "border-[#E29A2D]" : "border-[#4CAF79]"
        }`}
      />
    </div>
  );
};

export default InputOut;
