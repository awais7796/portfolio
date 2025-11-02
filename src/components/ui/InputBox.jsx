const InputBox = ({ label, placeholder, height = "h-10" }) => {
  const isMessege = label.toLowerCase().includes("message");
  return (
    <>
      <div className=" flex flex-col items-start  w-full pl-1.5 mb-4">
        <label className="text-sm font-medium mb-1">{label}</label>
        {isMessege ? (
          <textarea
            className={`w-full  border border-gray-200 rounded-xl p-3 focus:border-indigo-300 focus:ring focus:ring-indigo-100 outline-none transition ${height}`}
            type="text"
            rows={10}
            placeholder={placeholder}
          />
        ) : (
          <input
            className={`w-full  border border-gray-200 rounded-xl p-3 focus:border-indigo-300 focus:ring focus:ring-indigo-100 outline-none transition ${height}`}
            placeholder={placeholder}
          />
        )}
      </div>
    </>
  );
};

export default InputBox;
