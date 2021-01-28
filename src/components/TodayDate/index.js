import React from 'react';
import styled from 'styled-components';

const WrapperTodayDate = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-bottom: 30px;
  div {
    background-color: #b42b2b;
    color: #ffffff;
    width: 100px;
    padding: 10px 0;
    text-align: center;
    vertical-align: middle;
    font-family: roboto;
    font-size: 16px;
    font-weight: 700;
  }
`;

let currentDay = new Date();

export const TodayDate = () => {
  return (
    <WrapperTodayDate>
      <div>{currentDay.getDate() + '/' + currentDay.getMonth() + 1 + '/' + currentDay.getFullYear()}</div>
    </WrapperTodayDate>
  );
};
