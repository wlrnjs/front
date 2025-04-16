import React from "react";
import { UseFormRegister } from "react-hook-form";
import { SignUpFormData } from "@/_types/signup/SignUpFormData";
import MultiInput from "../common/input/MultiInput";

const BirthSection = ({
  register,
}: {
  register: UseFormRegister<SignUpFormData>;
}) => {
  const birthInputs = [
    { placeholder: "YYYY", maxLength: 4, name: "birth.year" },
    { placeholder: "MM", maxLength: 2, name: "birth.month" },
    { placeholder: "DD", maxLength: 2, name: "birth.day" },
  ] as const;

  return (
    <MultiInput
      label="생년월일"
      name="birth"
      inputConfigs={birthInputs}
      register={register}
      gapBetweenInputs="gap-[31px]"
    />
  );
};

export default BirthSection;
