import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "./form";
import SignUpModal from "./form/SignUpModal";
import { IStoreProps } from "./store/reducer";

function App() {
  return (
    <>
      <Form />
      {SignUpModal()}
    </>
  );
}

export default App;
