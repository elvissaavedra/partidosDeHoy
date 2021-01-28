import React from 'react';
import styled from 'styled-components';

const WrapperStatic = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  font-family: roboto;
  h1 {
    font-size: 36px;
    line-height: 38px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Header = () => {
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
