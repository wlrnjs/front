const VerificationSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="verify-code">인증번호</label>
      <div className="flex gap-2">
        <input
          type="tel"
          className="h-[48px] px-3 w-full rounded-[12px] bg-fillGrayDefault"
          placeholder="인증번호를 입력해주세요."
        />
        <button
          type="button"
          className="h-[48px] px-3 rounded-[12px] bg-fillGrayDisabled text-fgGrayDisabled whitespace-nowrap"
        >
          인증하기
        </button>
      </div>
    </div>
  );
};

export default VerificationSection;
