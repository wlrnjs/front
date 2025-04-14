import { SignUpFormData } from "@/_types/signup/SignUpFormData";
import { UseFormRegister } from "react-hook-form";

const BirthSection = ({
  register,
}: {
  register: UseFormRegister<SignUpFormData>;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="birth" className="text-[18px] text-fgGrayDefault">
        생년월일
      </label>
      <div className="flex gap-[31px]">
        <input
          type="text"
          className="w-1/3 h-[48px] px-3 text-center rounded-[12px] bg-fillGrayDefault"
          placeholder="YYYY"
          {...register("birth.year")}
        />
        <input
          type="text"
          className="w-1/3 h-[48px] px-3 text-center rounded-[12px] bg-fillGrayDefault"
          placeholder="MM"
          {...register("birth.month")}
        />
        <input
          type="text"
          className="w-1/3 h-[48px] px-3 text-center rounded-[12px] bg-fillGrayDefault"
          placeholder="DD"
          {...register("birth.day")}
        />
      </div>
    </div>
  );
};

export default BirthSection;
