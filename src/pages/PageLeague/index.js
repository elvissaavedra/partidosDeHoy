import React from 'react';

import { TodayDate } from '../../components/TodayDate';
import { League } from '../../components/League';
import { Header } from '../../components/Header';
import { DetailMatch } from '../../components/DetailMatch';

export const PageLeague = () => {
  return (
    <div>
      <Header />
      <TodayDate />
      <League />
      <DetailMatch />
    </div>
  );
};
