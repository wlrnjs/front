"use client";

import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { cn } from "@/_utils/clsx";
import { SignUpFormData } from "@/_types/signup/SignUpFormData";
import VerificationSection from "./VerificationSection";
import { useState } from "react";

interface Props {
  register: UseFormRegister<SignUpFormData>;
  watch: UseFormWatch<SignUpFormData>;
}

const EmailSection = ({ register, watch }: Props) => {
  const email = watch("email");
  const emailNumber = watch("checkedEmailNumber");
  const [activeVerification, setActiveVerification] = useState(false);

  const handleVerificationSection = () => {
    setActiveVerification(true);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[18px] text-fgGrayDefault">
          아이디
        </label>
        <div className="flex gap-2">
          <input
            id="email"
            type="email"
            autoFocus
            placeholder="이메일을 입력해주세요."
            className="h-[48px] px-3 w-full rounded-[12px] bg-fillGrayDefault focus:border focus:border-borderPrimary"
            {...register("email")}
          />
          <button
            type="button"
            onClick={handleVerificationSection}
            className={cn(
              "h-[48px] px-3 rounded-[12px] whitespace-nowrap",
              !email
                ? "bg-fillGrayDisabled text-fgGrayDisabled"
                : "bg-fillGrayDefault text-fgGrayDefault"
            )}
          >
            인증번호 전송
          </button>
        </div>
      </div>
      {activeVerification && (
        <VerificationSection
          active={activeVerification}
          watch={emailNumber}
          register={register}
        />
      )}
    </>
  );
};

export default EmailSection;
