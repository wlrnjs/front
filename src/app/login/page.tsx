import LoginForm from "@/components/login/LoginForm";
import CustomIcon from "@/Icons";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-[calc(100vh-82px)] flex flex-col items-center justify-center">
      <div className="w-[400px] flex flex-col gap-5">
        <div className="flex items-center gap-[10px]">
          <CustomIcon icon="LOGO_SVG" className="w-[24px] h-[23px]" />
          <h1 className="text-2xl font-semibold">GAME BID</h1>
        </div>

        <LoginForm />

        <div className="w-full flex gap-5 justify-center items-start text-[16px] font-normal leading-[22.4px] tracking-[-0.32px] text-fgGrayDefault">
          <Link href="/search-id" className="px-3">
            <p>아이디 찾기</p>
          </Link>
          <Link href="/search-pwd" className="px-3">
            <p>비밀번호 찾기</p>
          </Link>
          <Link href="/join" className="px-3">
            <p>회원가입</p>
          </Link>
        </div>

        <hr className="border-fillGrayDefault" />

        <div className="flex gap-5 justify-center">
          <div className="w-[48px] h-[48px] px-[12.5px] py-[13.4px] rounded-full bg-fillGrayDefault"></div>
          <div className="w-[48px] h-[48px] px-[12.5px] py-[13.4px] rounded-full bg-fillGrayDefault"></div>
          <div className="w-[48px] h-[48px] px-[12.5px] py-[13.4px] rounded-full bg-fillGrayDefault"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
