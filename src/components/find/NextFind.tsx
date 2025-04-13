import Link from "next/link";
import React from "react";

const NextFind = () => {
  return (
    <div className="flex justify-center">
      <Link
        href="/login"
        className="min-w-[96px] h-[32px] px-3 text-[16px] leading-[22.4px] tracking-[-0.32px] text-fgGrayDefault whitespace-nowrap"
      >
        <p>다음에 찾기</p>
      </Link>
    </div>
  );
};

export default NextFind;
