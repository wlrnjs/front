import { SignUpFormData } from "@/_types/signup/SignUpFormData";
import { UseFormRegister } from "react-hook-form";

const NameSection = ({
  register,
}: {
  register: UseFormRegister<SignUpFormData>;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-[18px] text-fgGrayDefault">
        이름
      </label>
      <input
        id="name"
        type="text"
        {...register("name")}
        placeholder="본인의 이름을 입력해주세요."
        className="h-[48px] px-3 rounded-[12px] bg-fillGrayDefault"
      />
    </div>
  );
};

export default NameSection;
