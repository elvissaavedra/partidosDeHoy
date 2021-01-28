import React from 'react';

import { League } from '../../components/League';
import { Header } from '../../components/Header';
import { DetailMatch } from '../../components/DetailMatch';

export const PageLeague = () => {
  return (
    <div>
      <Header />
      <League />
      <DetailMatch />
      <DetailMatch />
      <League />
      <DetailMatch />
      <DetailMatch />
    </div>
  );
};
