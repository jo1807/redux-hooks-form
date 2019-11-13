import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Inputs from "./Input";
import SignUpButton from "./SignUpButton";
import { IStoreProps } from "../store/reducer";
import { updateAllComplete, updateShowModal } from "../store/actions";

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #6fd092;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const FormWrapper = styled.div`
  position: absolute;
  height: 60%;
  width: 50%;
  background-color: #f5f6dc;
  display: grid;
  grid-template-rows: repeat(1fr);

  justify-items: center;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 10px 10px 8px #888888;
`;

function Form() {
  const allComplete = useSelector((state: IStoreProps) => state.allComplete);
  const emailComplete = useSelector(
    (state: IStoreProps) => state.emailAddress.complete
  );
  const usernameComplete = useSelector(
    (state: IStoreProps) => state.username.complete
  );
  const passwordComplete = useSelector(
    (state: IStoreProps) => state.password.complete
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const allValid = emailComplete && usernameComplete && passwordComplete;
    dispatch(updateAllComplete(allValid));
  }, [emailComplete, usernameComplete, passwordComplete]);

  const onHandleSignUp = () => {
    return dispatch(updateShowModal(true));
  };

  return (
    <Wrapper>
      <FormWrapper>
        <Inputs />
        <SignUpButton allComplete={allComplete} onClick={onHandleSignUp} />
      </FormWrapper>
    </Wrapper>
  );
}

export default Form;
