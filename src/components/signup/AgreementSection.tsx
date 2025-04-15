"use client";

import CustomIcon from "@/Icons";
import { useState } from "react";

interface CheckboxItem {
  id: string;
  label: string;
  required: boolean;
}

interface CheckedItemsState {
  [key: string]: boolean;
}

const checkboxItems: CheckboxItem[] = [
  { id: "age14", label: "만 14세 이상입니다.", required: true },
  { id: "terms", label: "서비스 이용약관에 동의합니다.", required: true },
  { id: "privacy", label: "개인정보 수집/이용에 동의합니다.", required: true },
];

const AgreementSection = () => {
  const [checkedItems, setCheckedItems] = useState<CheckedItemsState>({
    age14: false,
    terms: false,
    privacy: false,
  });
  const [allChecked, setAllChecked] = useState<boolean>(false);

  const handleSingleCheck = (id: string) => {
    const updatedCheckedItems: CheckedItemsState = {
      ...checkedItems,
      [id]: !checkedItems[id],
    };

    setCheckedItems(updatedCheckedItems);

    const allItemsChecked = Object.values(updatedCheckedItems).every(
      (value) => value === true
    );
    setAllChecked(allItemsChecked);
  };

  const handleAllCheck = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);

    const updatedCheckedItems: CheckedItemsState = {};
    Object.keys(checkedItems).forEach((key) => {
      updatedCheckedItems[key] = newAllChecked;
    });

    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className="flex flex-col gap-3 my-[60px]">
      {/* 전체 동의 */}
      <label
        htmlFor="agreeAll"
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-[24px] h-[24px] rounded-[8px] bg-fillGrayDefault flex items-center justify-center">
          {allChecked && (
            <CustomIcon icon="CHECK_ICON_SVG" className="w-[24px] h-[24px]" />
          )}
        </div>
        <input
          type="checkbox"
          id="agreeAll"
          checked={allChecked}
          onChange={handleAllCheck}
          className="hidden"
        />
        <span>모두 동의합니다.</span>
      </label>

      <hr />

      {/* 개별 체크박스 */}
      <div className="flex flex-col gap-3">
        {checkboxItems.map((item) => (
          <label
            key={item.id}
            htmlFor={item.id}
            className="flex gap-3 items-center cursor-pointer"
          >
            <div className="w-[24px] h-[24px] rounded-[8px] bg-fillGrayDefault flex items-center justify-center">
              {checkedItems[item.id] && (
                <CustomIcon
                  icon="CHECK_ICON_SVG"
                  className="w-[24px] h-[24px]"
                />
              )}
            </div>
            <input
              type="checkbox"
              id={item.id}
              checked={checkedItems[item.id]}
              onChange={() => handleSingleCheck(item.id)}
              className="hidden"
            />
            <span className="flex gap-1 items-center">
              {item.label}
              {item.required && (
                <span className="text-[14px] text-fgPrimaryAccent">(필수)</span>
              )}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AgreementSection;
