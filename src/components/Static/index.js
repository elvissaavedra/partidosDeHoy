import React from 'react';
import styled from 'styled-components';

const WrapperStatic = styled.div`
  margin: auto;
  max-width: 1000px;
  width: 100%;
  font-family: roboto;
  h1 {
    font-size: 36px;
    font-weight: 700;
    margin: 42px 0px 20px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    width: 60vw;
    margin-bottom: 27px;
  }
`;

export const Static = () => {
  return (
    <WrapperStatic>
      <h1>Agenda Deportiva Futbol&iacute;stica </h1>
      <p>
        Ent&eacute;rate de todos los partidos que se jugar&aacute;n y televisar&aacute;n hoy en las distintas ligas
        profesionales a nivel mundial. S&iacute;guelos en vivo aqu&iacute;.
      </p>
    </WrapperStatic>
  );
};
