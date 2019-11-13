import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "./Input";
import { IStoreProps } from "../../store/reducer";
import {
  updateEmail,
  updateEmailComplete,
  updateUsername,
  updateUsernameComplete,
  updatePassword,
  updatePasswordComplete
} from "../../store/actions";

const Inputs: React.FC = ({}) => {
  const email = useSelector((state: IStoreProps) => state.emailAddress.value);
  const username = useSelector((state: IStoreProps) => state.username.value);
  const password = useSelector((state: IStoreProps) => state.password.value);
  const dispatch = useDispatch();

  const [emailComplete, setEmailComplete] = useState("null");
  const [userNameComplete, setUserNameComplete] = useState("null");
  const [passwordComplete, setPassowrdComplete] = useState("null");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const valueType = e.target.title;
    switch (valueType) {
      case "email":
        return dispatch(updateEmail(value));
      case "username":
        return dispatch(updateUsername(value));
      case "password":
        return dispatch(updatePassword(value));
    }
  };

  const validateEmail = (email: string) => {
    const regex = /.{1,}@[^.]{1,}/g;
    const valid = regex.test(email);
    dispatch(updateEmailComplete(valid));
    return valid ? "green" : "red";
  };

  const validateUsername = (username: string) => {
    const regex = /^[A-Za-z0-9]+$/;
    const valid = regex.test(username);
    dispatch(updateUsernameComplete(username.length > 3 && valid));
    return username.length > 3 && valid ? "green" : "red";
  };

  const validatePassword = (password: string) => {
    const regex = /^[A-Za-z0-9]+$/;
    const valid = regex.test(password);
    dispatch(updatePasswordComplete(password.length > 8 && valid));
    return password.length > 8 && valid ? "green" : "red";
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueType = e.target.title;
    switch (valueType) {
      case "email":
        return setEmailComplete(validateEmail(email));
      case "username":
        return setUserNameComplete(validateUsername(username));
      case "password":
        return setPassowrdComplete(validatePassword(password));
    }
  };

  const resetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueType = e.target.title;
    switch (valueType) {
      case "email":
        return setEmailComplete("null");
      case "username":
        return setUserNameComplete("null");
      case "password":
        return setPassowrdComplete("null");
    }
  };

  return (
    <>
      <Input
        type="text"
        placeholder={"email address"}
        title={"email"}
        value={email}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onClick={resetInput}
        complete={emailComplete}
      />
      <Input
        type="text"
        placeholder={"username"}
        title={"username"}
        value={username}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onClick={resetInput}
        complete={userNameComplete}
      />
      <Input
        type="password"
        placeholder={"password"}
        title={"password"}
        value={password}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onClick={resetInput}
        complete={passwordComplete}
      />
    </>
  );
};

export default Inputs;
