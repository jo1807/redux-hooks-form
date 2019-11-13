import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring/renderprops";

const Wrapper = styled.div`
  height: 2.5rem;
  width: 60 %;
  background-color: pink;
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 0.9rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
`;

function Warning(placeholder: string, complete: any) {
  const showWarning = () => (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ tension: 30, friction: 10 }}
    >
      {(styles: any) => (
        <Wrapper
          style={styles}
        >{`please enter a valid ${placeholder}`}</Wrapper>
      )}
    </Spring>
  );
  if (complete === "red") {
    return showWarning();
  }
  return null;
}

export default Warning;
//       <Wrapper>{`please enter a valid ${placeholder}`}</Wrapper>
