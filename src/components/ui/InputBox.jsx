const InputBox = ({ label, placeholder }) => {
  return (
    <>
      <div className=" flex flex-col items-start  w-full pl-1.5 mb-4">
        <label className="text-sm font-medium mb-1">{label}</label>
        <input
          className="w-full  border border-gray-200 rounded-xl p-3 focus:border-indigo-300 focus:ring focus:ring-indigo-100 outline-none transition"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default InputBox;
