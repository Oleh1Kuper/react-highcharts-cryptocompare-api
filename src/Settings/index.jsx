import React from 'react';
import Welcome from './Welcome';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import { enumObj } from '../constants';
import CoinGrid from './CoinGrid';

const Settings = () => {
  return (
    <Page name={enumObj.SETTINGS}>
      <Welcome />
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
};

export default Settings;
