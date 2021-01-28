import React from 'react';
import styled from 'styled-components';

const ContentLeage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  max-width: 1000px;
`;

const LogoLeage = styled.img`
  width: 50px;
  height: 48px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const TitleLeague = styled.div`
  font-family: Roboto;
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
`;

export const League = () => {
  return (
    <ContentLeage>
      <LogoLeage src="./image/liga1.png" alt="liga1" />
      <TitleLeague>Liga 1</TitleLeague>
    </ContentLeage>
  );
};
