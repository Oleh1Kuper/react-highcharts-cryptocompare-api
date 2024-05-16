import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../App/AppProvider';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

const ConfirmButton = () => {
  const { handleClick } = useAppContext();

  return (
    <CenterDiv>
      <Button onClick={handleClick}>Confirm Favorites</Button>
    </CenterDiv>
  );
};

const Button = styled.button`
  border: none;
  margin: 20px;
  padding: 5px;
  ${fontSize1};
  font-family: inherit;
  color: ${color3};
  background: transparent;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default ConfirmButton;
