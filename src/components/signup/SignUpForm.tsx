"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NextFind from "../find/NextFind";
import CustomIcon from "@/Icons";
import { cn } from "@/_utils/clsx";
import SignUpGameModal from "../modal/SignUpGameModal";

interface SignUpFormData {
  email: string;
  password: string;
  checkPassword: string;
  name: string;
  phoneNum: {
    first: number;
    middle: number;
    last: number;
  };
  birth: {
    year: string;
    month: string;
    day: string;
  };
  favoriteGame: string;
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<SignUpFormData>({
    mode: "onChange",
  });

  const gameValue = watch("favoriteGame");

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  const [isGameModalOpen, setIsGameModalOpen] = useState(false);

  const checkboxItems = [
    {
      id: "age14",
      label: "만 14세 이상입니다.",
      required: true,
    },
    {
      id: "terms",
      label: "서비스 이용약관에 동의합니다.",
      required: true,
    },
    {
      id: "privacy",
      label: "개인정보 수집/이용에 동의합니다.",
      required: true,
    },
  ];

  const DIV_STYLE = "flex flex-col gap-2";
  const LABEL_STYLE =
    "text-[18px] leading-[25.2px] tracking-[-0.36px] text-fgGrayDefault";
  const INPUT_STYLE = "h-[48px] px-3 flex rounded-[12px] bg-fillGrayDefault";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* 아이디 */}
        <div className={DIV_STYLE}>
          <label htmlFor="email" className={LABEL_STYLE}>
            아이디
          </label>
          <div className="flex gap-2">
            <input
              id="email"
              type="email"
              autoFocus
              {...register("email")}
              placeholder="이메일을 입력해주세요."
              className={`${INPUT_STYLE} w-full`}
            />
            <button
              type="button"
              className="h-[48px] px-3 rounded-[12px] bg-fillGrayDefault whitespace-nowrap"
            >
              인증번호 전송
            </button>
          </div>
        </div>
        <div className={DIV_STYLE}>
          <label htmlFor="number">인증번호</label>
          <div className="flex gap-2">
            <input
              type="tel"
              className={`${INPUT_STYLE} w-full`}
              placeholder="인증번호를 입력해주세요."
            />
            <button
              type="button"
              className="h-[48px] px-3 rounded-[12px] bg-fillGrayDisabled whitespace-nowrap leading-[22.4px] tracking-[-0.32px] text-fgGrayDisabled"
            >
              인증하기
            </button>
          </div>
        </div>
        {/* 비밀번호 */}
        <div className={DIV_STYLE}>
          <label htmlFor="password" className={LABEL_STYLE}>
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            placeholder="비밀번호를 입력해주세요."
            className={INPUT_STYLE}
          />
          <p className="text-[12px] font-medium leading-[16.8px] tracking-[-0.24px] text-fgGrayPlaceholder">
            영문, 숫자, 특수문자를 조합하여 길이를 최소 8~10자리 이상
          </p>
        </div>
        {/* 비밀번호 확인 */}
        <div className={DIV_STYLE}>
          <label htmlFor="checkPassword" className={LABEL_STYLE}>
            비밀번호 확인
          </label>
          <input
            id="checkPassword"
            type="=password"
            {...register("checkPassword")}
            placeholder="비밀번호를 한 번 더 입력해주세요."
            className={INPUT_STYLE}
          />
        </div>
        {/* 이름 */}
        <div className={DIV_STYLE}>
          <label htmlFor="name" className={LABEL_STYLE}>
            이름
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="본인의 이름을 입력해주세요."
            className={INPUT_STYLE}
          />
        </div>
        {/* 휴대폰번호 */}
        <div className={DIV_STYLE}>
          <label htmlFor="phoneNum" className={LABEL_STYLE}>
            휴대폰 번호
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              className={`${INPUT_STYLE} w-1/3 text-center`}
              placeholder="010"
            />
            <p>-</p>
            <input
              type="number"
              className={`${INPUT_STYLE} w-1/3 text-center`}
              placeholder="1234"
            />
            <p>-</p>
            <input
              type="number"
              className={`${INPUT_STYLE} w-1/3 text-center`}
              placeholder="5678"
            />
          </div>
        </div>
        {/* 생년월일 */}
        <div className={DIV_STYLE}>
          <label htmlFor="birth" className={LABEL_STYLE}>
            생년월일
          </label>
          <div className="flex gap-[31px]">
            <input
              type="text"
              className={`${INPUT_STYLE} w-1/3 text-center`}
              placeholder="YYYY"
            />
            <input
              type="text"
              className={`${INPUT_STYLE} w-1/3 text-center`}
              placeholder="MM"
            />
            <input
              type="text"
              className={`${INPUT_STYLE} w-1/3 text-center`}
              placeholder="DD"
            />
          </div>
        </div>
        {/* 관심게임 */}
        <div className={cn(DIV_STYLE, "relative")}>
          <label htmlFor="favoriteGame" className={LABEL_STYLE}>
            관심 게임
          </label>
          <input
            id="favoriteGame"
            type="text"
            placeholder="게임을 선택해주세요."
            className={cn(INPUT_STYLE, "pr-10")}
            value={gameValue}
            readOnly
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 transform"
            onClick={() => setIsGameModalOpen(true)}
          >
            <CustomIcon
              icon="DROPDOWN_ARROW_SVG"
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
        {/* 동의 */}
        <div className="flex flex-col gap-3 my-[60px]">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agreeAll"
              className="appearance-none w-[24px] h-[24px] rounded-[8px] bg-fillGrayDefault checked:border-none"
            />
            <label htmlFor="agreeAll">모두 동의합니다.</label>
          </div>

          <hr />

          <div className="flex flex-col gap-3">
            {checkboxItems.map((item) => (
              <div key={item.id} className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  id={item.id}
                  className="appearance-none w-[24px] h-[24px] rounded-[8px] bg-fillGrayDefault checked:border-none"
                />
                <label htmlFor={item.id} className="flex gap-1 items-center">
                  {item.label}
                  {item.required && (
                    <span className="text-[14px] leading-[19.6px] tracking-[-0.28px] text-fgPrimaryAccent">
                      (필수)
                    </span>
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* 버튼 */}
        <div className="flex flex-col gap-5">
          <button
            type="submit"
            className="w-full min-h-[48px] px-3 rounded-[12px] bg-fillPrimaryDisabled"
          >
            회원가입
          </button>
          <NextFind />
        </div>
      </form>
      {isGameModalOpen && <SignUpGameModal activeModal={isGameModalOpen} />}
    </>
  );
};

export default SignUpForm;
