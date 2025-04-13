"use client";

import { cn } from "@/_utils/clsx";
import CustomIcon from "@/Icons";
import React from "react";
import { useForm } from "react-hook-form";

interface FindIdFormData {
  name: string;
  phoneNum: string[];
}

const FindIdForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    getValues,
  } = useForm<FindIdFormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      phoneNum: ["", "", ""],
    },
  });

  const nameValue = watch("name");
  const phoneNumValues = watch("phoneNum");

  const onSubmit = (data: FindIdFormData) => {
    console.log("Input:", data);
  };

  const clearField = (field: "name" | number) => {
    if (field === "name") {
      setValue("name", "", { shouldValidate: true });
    } else {
      const newPhoneNum = [...getValues("phoneNum")];
      newPhoneNum[field] = "";
      setValue("phoneNum", newPhoneNum, { shouldValidate: true });
    }
  };

  const phoneFields = [
    { id: 0, placeholder: "010", maxLength: 3 },
    { id: 1, placeholder: "0000", maxLength: 4 },
    { id: 2, placeholder: "0000", maxLength: 4 },
  ];

  const LABEL_STYLES =
    "text-[18px] leading-[25.2px] tracking-[-0.36px] text-fgGrayDefault";
  const INPUT_NUMBER_STYLES =
    "h-[48px] px-3 rounded-[10px] bg-fillGrayDefault focus:border focus:border-borderPrimary text-center";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* 이름 입력 필드 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={LABEL_STYLES}>
          이름
        </label>
        <div className="relative">
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "이름을 입력해주세요.",
            })}
            className={cn(
              "w-full h-[48px] px-3 rounded-[10px] bg-fillGrayDefault focus:border focus:border-borderPrimary",
              errors.name ? "border-[#F0424B]" : "border-borderDefault",
              nameValue && "pr-10"
            )}
            placeholder="이름을 입력해주세요."
          />
          {nameValue && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <button type="button" onClick={() => clearField("name")}>
                <CustomIcon icon="CLOSE_SVG" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 휴대폰 번호 입력 필드 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phoneNum[0]" className={LABEL_STYLES}>
          휴대폰 번호
        </label>
        <div className="flex items-center">
          {phoneFields.map((field, index) => (
            <React.Fragment key={field.id}>
              {index > 0 && <div className="mx-2 text-xl">-</div>}
              <div className="relative flex-1">
                <input
                  id={`phoneNum[${field.id}]`}
                  type="text"
                  inputMode="numeric"
                  {...register(`phoneNum.${field.id}` as const, {
                    required: "휴대폰 번호를 입력해주세요.",
                    maxLength: field.maxLength,
                  })}
                  className={cn(
                    INPUT_NUMBER_STYLES,
                    "w-full",
                    errors.phoneNum?.[field.id]
                      ? "border-[#F0424B]"
                      : "border-borderDefault",
                    phoneNumValues?.[field.id] && "pr-10"
                  )}
                  placeholder={field.placeholder}
                  maxLength={field.maxLength}
                />
                {phoneNumValues?.[field.id] && (
                  <div className="flex gap-[10px] absolute right-2 top-1/2 transform -translate-y-1/2">
                    <button type="button" onClick={() => clearField(field.id)}>
                      <CustomIcon
                        icon="CLOSE_SVG"
                        className="w-[24px] h-[24px]"
                      />
                    </button>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 찾기 버튼 */}
      <button
        type="submit"
        disabled={!isValid}
        className={cn(
          "w-full h-[48px] px-3 rounded-[10px] font-semibold transition-colors duration-200",
          isValid
            ? "bg-fillPrimaryDefault text-white"
            : "bg-fillPrimaryDisabled text-fgPrimaryDisabled cursor-not-allowed"
        )}
      >
        이메일 찾기
      </button>
    </form>
  );
};

export default FindIdForm;
