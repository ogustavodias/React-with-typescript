import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLElement> & {
  label: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ label, id, setDate, ...rest }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        {...rest}
        onChange={({ target }) => setDate(target.value)}
      />
    </div>
  );
};

export default Input;
