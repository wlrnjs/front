import { SignUpFormData } from "@/_types/signup/SignUpFormData";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface ConfirmPasswordSectionProps {
  register: UseFormRegister<SignUpFormData>;
  watch: UseFormWatch<SignUpFormData>;
}

const ConfirmPasswordSection = ({
  register,
  watch,
}: ConfirmPasswordSectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="checkPassword" className="text-[18px] text-fgGrayDefault">
        비밀번호 확인
      </label>
      <input
        id="checkPassword"
        type="password"
        {...register("checkedPassword")}
        placeholder="비밀번호를 한 번 더 입력해주세요."
        className="h-[48px] px-3 rounded-[12px] bg-fillGrayDefault"
      />
    </div>
  );
};

export default ConfirmPasswordSection;
