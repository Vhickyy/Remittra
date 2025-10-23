const Input = ({
  type = "text",
  placeholder,
  value,
  name,
  onChange,
}: {
  type?: string;
  placeholder: string;
  value: any;
  name: string;
  onChange: (e: any) => void;
}) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-primary p-2 rounded-lg outline-0"
    />
  );
};

export default Input;
