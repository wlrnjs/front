"use client";

import React from "react";
import { useForm } from "react-hook-form";
import NextFind from "../find/NextFind";

interface SignUpFormData {
  email: string;
  password: string;
  checkPassword: string;
  name: string;
  phoneNum: number;
  birth: string;
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

  return (
    <form className="flex flex-col gap-5">
      {/* 아이디 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="">
          아이디
        </label>
        <div className="flex gap-2">
          <input
            id="email"
            type="email"
            autoFocus
            {...register("email")}
            placeholder="이메일을 입력해주세요."
          />
          <button type="button">인증번호 전송</button>
        </div>
      </div>
      {/* 비밀번호 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          {...register("password")}
          placeholder="비밀번호를 입력해주세요."
        />
        <p>영문, 숫자, 특수문자를 조합하여 길이를 최소 8~10자리 이상</p>
      </div>
      {/* 비밀번호 확인 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="checkPassword">비밀번호 확인</label>
        <input
          id="checkPassword"
          type="=password"
          {...register("checkPassword")}
          placeholder="비밀번호를 한 번 더 입력해주세요."
        />
      </div>
      {/* 이름 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          {...register("name")}
          placeholder="본인의 이름을 입력해주세요."
        />
      </div>
      {/* 휴대폰번호 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phoneNum">휴대폰 번호</label>
        <div className="flex gap-3">
          <input type="number" className="w-1/3" />
          <p>-</p>
          <input type="number" className="w-1/3" />
          <p>-</p>
          <input type="number" className="w-1/3" />
        </div>
      </div>
      {/* 생년월일 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="birth">생년월일</label>
        <div className="flex gap-[31px]">
          <input type="text" className="w-1/3 text-center" placeholder="YYYY" />
          <input type="text" className="w-1/3 text-center" placeholder="MM" />
          <input type="text" className="w-1/3 text-center" placeholder="DD" />
        </div>
      </div>
      {/* 관심게임 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="favoriteGame">관심 게임</label>
        <input type="text" />
      </div>
      {/* 동의 */}
      <div className="flex flex-col gap-3 my-[60px]">
        <ul>
          <li>모두 동의합니다.</li>
        </ul>
        <hr />
        <ul className="flex flex-col gap-3">
          <li className="flex gap-1 items-center">
            만 14세 이상입니다.
            <span className="text-[14px] leading-[19.6px] tracking-[-0.28px] text-fgPrimaryAccent">
              (필수)
            </span>
          </li>
          <li className="flex gap-1 items-center">
            서비스 이용약관에 동의합니다.
            <span className="text-[14px] leading-[19.6px] tracking-[-0.28px] text-fgPrimaryAccent">
              필수
            </span>
          </li>
          <li className="flex gap-1 items-center">
            개인정보 수집/이용에 동의합니다.
            <span className="text-[14px] leading-[19.6px] tracking-[-0.28px] text-fgPrimaryAccent">
              필수
            </span>
          </li>
        </ul>
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
  );
};

export default SignUpForm;
