const Button = ({ text, ...props }) => {
    return (
      <button
        {...props}
        className="bg-[#B52225] text-[32px] [line-height:48px] font-[500] text-white text-center w-[702px] mb-[19px]"
      >
        {text}
      </button>
    );
  };
  
  export default Button;