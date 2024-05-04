import React from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" {...props} name={label} id={label} />
    </div>
  );
};

export default Input;
