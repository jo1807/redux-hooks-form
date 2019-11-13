import React from "react";
import styled from "styled-components";

import Warning from "./Warning";

const InputItem = styled.input`
  height: 4rem;
  width: 60%;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  background-color: #a9f9c6;
  font-color: white;
  font-style: bold;
  font-size: 1rem;
  border: ${props =>
    props.name === "null"
      ? "none"
      : props.name === "green"
      ? "2px solid green"
      : "2px solid red"};
`;

interface IInputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange: (event: any) => void;
  title: string;
  onBlur: (event: any) => void;
  onClick: (event: any) => void;
  complete?: string;
}

const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  title,
  value,
  onChange,
  onBlur,
  onClick,
  complete
}) => {
  return (
    <>
      <InputItem
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        title={title}
        onBlur={onBlur}
        onClick={onClick}
        name={complete}
      ></InputItem>
      {Warning(placeholder, complete)}
    </>
  );
};

export default Input;
