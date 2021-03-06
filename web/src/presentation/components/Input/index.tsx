import React, { InputHTMLAttributes } from "react";

import { InputForm } from "./style";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  type?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({ label, name, type, error, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <InputForm type={type} isErrored={error} id={name} {...rest} />
    </div>
  );
};

export default Input;
