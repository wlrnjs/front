import FindIdForm from "@/components/find-id/FindIdForm";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-[calc(100vh-82px)] flex-center flex-col">
      <div className="w-[400px] flex flex-col gap-5">
        <h1 className="text-[24px] font-semibold leading-[33.6px] tracking-[-0.48px] text-fgGrayDefault">
          이메일 찾기
        </h1>
        <FindIdForm />
        <div className="flex justify-center">
          <Link
            href="/login"
            className="w-[96px] h-[32px] px-3 text-[16px] leading-[22.4px] tracking-[-0.32px] text-fgGrayDefault whitespace-nowrap"
          >
            <p>다음에 찾기</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
