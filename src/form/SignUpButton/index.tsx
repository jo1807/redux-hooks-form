import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  height: 4rem;
  width: 80%;
  background-color: ${props => (props.disabled ? "#c0e2d6" : "#9cf0d2")};
  border-radius: 0.4rem;
  display: grid;
  align-items: center;
  justify-items: center;
  color: white;
  font-style: bold;
  font-size: 2rem;
  cursor: ${props => (props.disabled ? "arrow" : "pointer")};
  border: none;
  outline: none;
`;

interface ISignUpButtonProps {
  allComplete: boolean;
  onClick: () => void;
}

const SignUpButton: React.FC<ISignUpButtonProps> = ({
  allComplete,
  onClick
}) => {
  return (
    <Wrapper onClick={onClick} disabled={!allComplete}>
      sign up
    </Wrapper>
  );
};

export default SignUpButton;
