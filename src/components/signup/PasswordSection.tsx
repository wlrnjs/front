import { SignUpFormData } from "@/_types/signup/SignUpFormData";
import { UseFormRegister } from "react-hook-form";

const PasswordSection = ({
  register,
}: {
  register: UseFormRegister<SignUpFormData>;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="password" className="text-[18px] text-fgGrayDefault">
        비밀번호
      </label>
      <input
        id="password"
        type="password"
        {...register("password")}
        placeholder="비밀번호를 입력해주세요."
        className="h-[48px] px-3 rounded-[12px] bg-fillGrayDefault"
      />
      <p className="text-[12px] text-fgGrayPlaceholder">
        영문, 숫자, 특수문자를 조합하여 길이를 최소 8~10자리 이상
      </p>
    </div>
  );
};

export default PasswordSection;
