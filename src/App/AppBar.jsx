import React from 'react';
import styled, { css } from 'styled-components';
import { useAppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Bar = styled.nav`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) => props.active && css`
    text-shadow: 0 0 40px #ecefec;
  `}
`;

const ControlButton = ({ text }) => {
  const { page, setPage } = useAppContext();
  const handleClick = () => {
    setPage(text);
  };

  return (
    <ControlButtonElem
      onClick={handleClick}
      active={+(page === text)}
    >
      {text}
    </ControlButtonElem>
  );
};

const AppBar = () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton text="Dashboard" />
      <ControlButton text="Settings" />
    </Bar>
  );
};

export default AppBar;
