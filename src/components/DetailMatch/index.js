import React from 'react';
import styled from 'styled-components';

const ContentDetail = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: repeat(2, 1fr);
  border-bottom: 2px solid #e5e5e5;
`;

const ContentHours = styled.div`
  display: grid;
  grid-area: 1 / 1 / 3 / 2;
  justify-items: center;
  align-items: flex-start;
  padding-top: 15px;
  color: #404040;
  font-family: Roboto;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
`;

const ContentScore = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 40%;
  grid-area: 1 / 2 / 2 / 3;
  justify-content: space-around;
  background-color: #fafafa;
  width: 100%;
`;

const Equip = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  & > div {
    color: #404040;
    font-family: Roboto;
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
  }
`;
const Score = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  & > div {
    width: 40.5px;
    padding: 10px 0;
    background-color: #000;
    color: #fff;
    text-align: center;
    vertical-align: middle;
  }
  .line-right {
    border-right: 2px solid #404040;
  }
`;

const ContentNotice = styled.div`
  display: grid;
  grid-area: 2 / 2 / 3 / 3;
  & > ul > li {
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: #404040;
    text-decoration: underline;
  }
`;

export const DetailMatch = () => {
  return (
    <ContentDetail>
      <ContentHours>15:00 Hrs</ContentHours>
      <ContentScore>
        <Equip>
          <img src="./image/universitario.png" />
          <div>Universitario</div>
        </Equip>
        <Score>
          <div className="line-right">1</div>
          <div>3</div>
        </Score>
        <Equip>
          <img src="./image/cristal.png" />
          <div>Sporting Cristal</div>
        </Equip>
      </ContentScore>
      <ContentNotice>
        <ul>
          <li>¿Cuándo y a qué hora juegan Universitario vs Sporting Cristal la segunda final?</li>
          <li>Ver Resumen de la primera final de la Liga 1 entre Universitario y Sporting Cristal</li>
        </ul>
      </ContentNotice>
    </ContentDetail>
  );
};
