import CustomIcon from "@/Icons/Icon";
import Link from "next/link";
import React from "react";

const Header = () => {
  const buttonStyle =
    "flex-center py-[0.5rem] px-[1.25rem] rounded-[1.25rem] border border-borderPrimary";
  return (
    <div className="w-screen fixed top-0 left-0 z-[100] bg-bgGrayDepth1 border-b border-borderDivider ">
      <div className="max-w-[90rem] flex items-center justify-between py-[1.25rem] px-[2.5rem] mx-auto">
        <div className="flex items-center gap-[3.125rem]">
          <Link
            href={"/"}
            className="flex items-center gap-[0.5rem] cursor-pointer"
          >
            <CustomIcon icon="LOGO_SVG" className="w-[1.5rem] h-[1.5rem]" />
            <p className="text-[1.25rem] font-bold uppercase">GameBid</p>
          </Link>
          <ul className="flex items-center gap-[2.75rem]">
            <li className="cursor-pointer">계정 경매</li>
            <li className="cursor-pointer">아이템 경매</li>
            <li className="cursor-pointer">고객 지원</li>
          </ul>
        </div>
        <div>
          <Link href={"/login"}>
            <button className={buttonStyle}>로그인</button>
          </Link>
          {/* <div className="flex items-center gap-[1.19rem]">
            <div className="flex items-center gap-[1rem]">
              <CustomIcon
                icon="GNB1"
                className="w-[1.5rem] h-[1.5rem] cursor-pointer"
              />
              <CustomIcon
                icon="GNB2"
                className="w-[1.5rem] h-[1.5rem] cursor-pointer"
              />
              <CustomIcon
                icon="GNB3"
                className="w-[1.5rem] h-[1.5rem] cursor-pointer"
              />
            </div>
            <button className={buttonStyle}>경매 생성</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
