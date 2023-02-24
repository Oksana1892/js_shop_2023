import { BonusList } from 'Components/Bonus';
import React from 'react';
import { CheckAuth } from 'Components/Common/CheckAuth';

export const Bonus = () => {
  return (
    <CheckAuth>
    <div className="page_wrapper">
      <BonusList />
    </div>
    </CheckAuth>
  );
};
