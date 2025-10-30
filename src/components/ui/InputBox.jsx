const InputBox = ({ placeholder }) => {
  return (
    <>
      <div className="flex flex-col ">
        <input
          className="border border-gray-200 rounded-xl p-3 focus:border-indigo-300 focus:ring focus:ring-indigo-100 outline-none transition"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default InputBox;
