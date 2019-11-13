import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Spring } from "react-spring/renderprops";

import { IStoreProps } from "../../store/reducer";
import train from "../../images/train.svg";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  position: fixed;
  background-color: #ffffe6;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
`;

const ModalContent = styled.div`
  display: grid;
  position: fixed;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: 70%;
  width: 80%;
  font-size: 3rem;
`;

const TrainWrapepr = styled.div`
  transform: scale(-1, 1);
`;

function SignUpModal() {
  const showSignUpModal = useSelector(
    (state: IStoreProps) => state.showSignUpModal
  );

  const signUpModal = () => (
    <>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ tension: 30, friction: 10 }}
      >
        {(styles: any) => (
          <Wrapper style={styles}>
            <Modal style={styles}>
              <ModalContent style={styles}>
                SIGNED UP!
                <Spring
                  from={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
                  to={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                  config={{ duration: 2000 }}
                >
                  {(styles: any) => (
                    <TrainWrapepr>
                      <img style={styles} src={train} height={"200em"} />
                    </TrainWrapepr>
                  )}
                </Spring>
              </ModalContent>
            </Modal>
          </Wrapper>
        )}
      </Spring>
    </>
  );

  if (showSignUpModal) {
    return signUpModal();
  }
  return null;
}

export default SignUpModal;
