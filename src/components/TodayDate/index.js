import React from 'react';
import styled from 'styled-components';

const WrapperTodayDate = styled.div`
  margin: auto;
  max-width: 1000px;
  width: 100%;

  span {
    /* margin-top: 20px; */
    width: 90px;
    height: 30px;
    background-color: #b42b2b;
    color: #ffffff;
    padding: 9px 13px;
    font-family: roboto;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const TodayDate = () => {
  return (
    <WrapperTodayDate>
      <span>Fecha de Hoy</span>
    </WrapperTodayDate>
  );
};
