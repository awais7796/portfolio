const InputBox = ({ label, placeholder }) => {
  return (
    <div className="">
      {label}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputBox;
