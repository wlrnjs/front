import { SignUpFormData } from "@/_types/signup/SignUpFormData";
import { UseFormRegister } from "react-hook-form";

const PhoneNumberSection = ({
  register,
}: {
  register: UseFormRegister<SignUpFormData>;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="phoneNum" className="text-[18px] text-fgGrayDefault">
        휴대폰 번호
      </label>
      <div className="flex gap-3">
        <input
          type="number"
          className="w-1/3 h-[48px] px-3 text-center rounded-[12px] bg-fillGrayDefault"
          placeholder="010"
          {...register("phoneNum.first")}
        />
        <p>-</p>
        <input
          type="number"
          className="w-1/3 h-[48px] px-3 text-center rounded-[12px] bg-fillGrayDefault"
          placeholder="1234"
          {...register("phoneNum.middle")}
        />
        <p>-</p>
        <input
          type="number"
          className="w-1/3 h-[48px] px-3 text-center rounded-[12px] bg-fillGrayDefault"
          placeholder="5678"
          {...register("phoneNum.last")}
        />
      </div>
    </div>
  );
};

export default PhoneNumberSection;
