import { useState } from "react";

const InputForm = ({
  labelName = "",
  labelFor = "",
  typeInput = "text",
  className = "",
  ...props
}) => {
  const [stateTypeInput, setStateTypeInput] = useState(typeInput)
  return (
    <>
      <div className={"flex flex-col " + className}>
        <label
          htmlFor={labelFor}
          className="text-[24px] [line-height:36px] font-[500] text-[#00000080] mb-[3px] ml-[5px] font-poppins"
        >
          {labelName}
        </label>
        <div className="w-[702px] h-[61px] border-[3px] border-[#dededede] relative">
          <input
            type={stateTypeInput != typeInput ? stateTypeInput : typeInput}
            id={labelFor}
            {...props}
            className={
              "text-[24px] pl-[12px] focus:outline-none w-full h-full font-poppins " +
              (typeInput != "password" ? "pr-[12px]" : 'pr-[68px]')
            }
          />
          {typeInput != "password" ? null : (
            <img
              src="svg/HiddenPassword.svg"
              className="absolute right-[24px] top-[12px] cursor-pointer"
              onClick={
                () => setStateTypeInput(stateTypeInput == 'text' ? 'password' : 'text')
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default InputForm;