const checkboxItems = [
  { id: "age14", label: "만 14세 이상입니다.", required: true },
  { id: "terms", label: "서비스 이용약관에 동의합니다.", required: true },
  { id: "privacy", label: "개인정보 수집/이용에 동의합니다.", required: true },
];

const AgreementSection = () => {
  return (
    <div className="flex flex-col gap-3 my-[60px]">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="agreeAll"
          className="appearance-none w-[24px] h-[24px] rounded-[8px] bg-fillGrayDefault checked:border-none"
        />
        <label htmlFor="agreeAll">모두 동의합니다.</label>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        {checkboxItems.map((item) => (
          <div key={item.id} className="flex gap-3 items-center">
            <input
              type="checkbox"
              id={item.id}
              className="appearance-none w-[24px] h-[24px] rounded-[8px] bg-fillGrayDefault checked:border-none"
            />
            <label htmlFor={item.id} className="flex gap-1 items-center">
              {item.label}
              {item.required && (
                <span className="text-[14px] text-fgPrimaryAccent">(필수)</span>
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgreementSection;
