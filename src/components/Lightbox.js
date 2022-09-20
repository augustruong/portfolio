import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

`;

const LightBoxWrapper = styled.div`
  width: 80vw;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  background: #FFFFF2;
  z-index: 1001;
  text-align: center;
  margin: 0 auto;
  @media screen and (max-width: 824px) {
    width: 100vw;
  }
`;

const CloseBoxButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: var(--brown-color);
`;

export const Lightbox = ({ showBox, setShowBox }) => {
    const lbRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showBox ? 1 : 0,
      transform: showBox ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeBox = e => {
      if (lbRef.current === e.target) {
        setShowBox(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showBox) { setShowBox(false); }
      },
      [setShowBox, showBox]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
      <>
        {showBox ? (
          <Background onClick={closeBox} ref={lbRef}>
            <animated.div style={animation}>
              <LightBoxWrapper showModal={showBox}>
                <div>
                    hihihi
                </div>
                <CloseBoxButton
                  aria-label='Close box'
                  onClick={() => setShowBox(prev => !prev)}
                />
              </LightBoxWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    );
  };