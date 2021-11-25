import React from "react";

import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SC = {
  Container: styled.div`
    width: 15px;
    height: 15px;
    border-right: 3px solid rgba(255, 255, 255, 0);
    border-bottom: 3px solid rgba(255, 255, 255, 0);
    border-radius: 50%;
    border-color: black;
    animation: ${spin} 0.5s linear infinite;
  `,
};

function Loading() {
  return <SC.Container></SC.Container>;
}

export default Loading;
