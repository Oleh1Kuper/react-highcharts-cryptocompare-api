import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../App/AppProvider';

const Button = styled.button`
  border: none;
  margin: 20px;
  color: green;
  background: transparent;
  cursor: pointer;
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmButton = () => {
  const { handleClick } = useAppContext();

  return (
    <CenterDiv>
      <Button onClick={handleClick}>Confirm</Button>
    </CenterDiv>
  );
};

export default ConfirmButton;
