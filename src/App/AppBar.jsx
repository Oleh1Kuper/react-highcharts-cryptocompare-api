import React from 'react';
import styled, { css } from 'styled-components';
import { useAppContext } from './AppProvider';

const ControlButton = ({ text }) => {
  const { page, setPage } = useAppContext();
  const handleClick = () => {
    setPage(text);
  };

  return (
    <ControlButtonElem onClick={handleClick} active={+(page === text)}>
      {text}
    </ControlButtonElem>
  );
};

const AppBar = () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <Flex>
        <ControlButton text="Dashboard" />
        <ControlButton text="Settings" />
      </Flex>
    </Bar>
  );
};

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${(props) => props.active && css`
    text-shadow: 0 0 40px #ecefec;
  `}
`;

const Flex = styled.div`
  display: flex;
  gap: 30px;
`;

export default AppBar;
