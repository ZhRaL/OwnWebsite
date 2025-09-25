const SingleLineInput = ({ label, required }) => {
  return (
    <form className="flex flex-col items-start gap-2 w-full">
      <label
        className="font-bold font-sans text-left text-blue-900"
        htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        className="rounded-lg bg-blue-100 shadow-lg shadow-blue-500/50 pl-3 py-2 w-full"
        type="text"
        id={label.toLowerCase().replace(/\s+/g, '-')}
        name={label.toLowerCase().replace(/\s+/g, '-')}
        required={required}
      />
    </form>
  );
};

export default SingleLineInput;
