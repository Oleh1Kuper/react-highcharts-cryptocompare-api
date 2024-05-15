import React from 'react';
import styled, { css } from 'styled-components';

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Bar = styled.nav`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

const ControlButton = styled.div`
  cursor: pointer;
  ${(props) => props.active && css`
    text-shadow: 0 0 40px #03ff03;
  `}
`;

const AppBar = () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton active>Dashboard</ControlButton>
      <ControlButton>Settings</ControlButton>
    </Bar>
  );
};

export default AppBar;
