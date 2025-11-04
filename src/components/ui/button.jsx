// import { Plus } from "lucide-react";

const Button = ({ url, label, SvgIcon, ...props }) => {
  const handleClick = () => {
    if (url) {
      e.preventDefault();
      window.open(url, "_blank");
    }
  };
  return (
    <>
      <button
        {...props}
        onClick={handleClick}
        className=" flex gap-2 border-2 w-auto p-3 m-3 justify-center items-center rounded-md"
      >
        {SvgIcon && <SvgIcon className="w-5 h-5 " />}
        <span>{label}</span>
      </button>
    </>
  );
};
export default Button;
