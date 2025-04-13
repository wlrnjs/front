"use client";

import { cn } from "@/_utils/clsx";
import CustomIcon from "@/Icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const emailValue = watch("email");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    console.log("Login:", data);
  };

  const clearEmail = () => {
    setValue("email", "", { shouldValidate: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* 이메일 입력 필드 */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[18px] font-normal leading-[25.2px] tracking-[-0.36px] text-fgGrayDefault"
          >
            이메일
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "이메일을 입력해주세요.",
              })}
              className={cn(
                "w-full h-[48px] px-3 rounded-[10px] bg-fillGrayDefault focus:border focus:border-borderPrimary",
                errors.email ? "border-[#F0424B]" : "border-borderDefault",
                emailValue && "pr-10" // 버튼 공간 확보
              )}
              placeholder="이메일을 입력해주세요."
            />
            {emailValue && (
              <button
                type="button"
                onClick={clearEmail}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <CustomIcon icon="CLOSE_SVG" className="w-[24px] h-[23px]" />
              </button>
            )}
          </div>
        </div>

        {/* 비밀번호 입력 필드 */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-[18px] font-normal leading-[25.2px] tracking-[-0.36px] text-fgGrayDefault"
          >
            비밀번호
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                minLength: {
                  value: 6,
                  message: "비밀번호는 최소 6자 이상이어야 합니다.",
                },
              })}
              className={cn(
                "w-full h-[48px] px-3 rounded-[10px] bg-fillGrayDefault focus:border focus:border-borderPrimary",
                errors.password ? "border-[#F0424B]" : "border-borderDefault",
                "pr-10"
              )}
              placeholder="비밀번호를 입력해주세요."
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <CustomIcon
                icon="PASSWORD_EYE_SVG"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          disabled={!isValid}
          className={cn(
            "w-full h-[48px] px-3 rounded-[10px] font-semibold text-white transition-colors duration-200",
            isValid
              ? "bg-fillPrimaryDefault"
              : "bg-fillPrimaryDisabled cursor-not-allowed"
          )}
        >
          로그인
        </button>
      </form>
    </>
  );
};

export default LoginForm;
