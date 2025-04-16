import React from "react";
import { UseFormRegister } from "react-hook-form";
import { SignUpFormData } from "@/_types/signup/SignUpFormData";

type MultiInputFieldName =
  | "phoneNum.first"
  | "phoneNum.middle"
  | "phoneNum.last"
  | "birth.year"
  | "birth.month"
  | "birth.day";

interface InputConfig {
  placeholder: string;
  maxLength: number;
  name: MultiInputFieldName;
}

interface MultiInputProps {
  label: string;
  name: string;
  inputConfigs: readonly InputConfig[];
  register: UseFormRegister<SignUpFormData>;
  showDash?: boolean;
  gapBetweenInputs?: string;
}

const MultiInput = ({
  label,
  name,
  inputConfigs,
  register,
  showDash = false,
  gapBetweenInputs = "gap-3",
}: MultiInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[18px] text-fgGrayDefault">
        {label}
      </label>
      <div className={`flex ${gapBetweenInputs} items-center`}>
        {inputConfigs.map(({ placeholder, maxLength, name }, index) => (
          <React.Fragment key={name}>
            <input
              id={name}
              type="text"
              className="w-1/3 h-[48px] px-3 text-center rounded-[12px] bg-fillGrayDefault focus:border focus:border-borderPrimary"
              placeholder={placeholder}
              maxLength={maxLength}
              inputMode="numeric"
              pattern="\d*"
              {...register(name, {
                required: "필수 입력 항목입니다.",
                minLength: {
                  value: maxLength,
                  message: "",
                },
                maxLength: {
                  value: maxLength,
                  message: "",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "숫자만 입력 가능합니다.",
                },
              })}
            />
            {showDash && index < inputConfigs.length - 1 && <p>-</p>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MultiInput);
