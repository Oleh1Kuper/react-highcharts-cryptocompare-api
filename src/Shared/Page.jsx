import React from 'react';
import { useAppContext } from '../App/AppProvider';

const Page = ({ name, children }) => {
  const { page } = useAppContext();

  if (page !== name) {
    return null;
  }

  return <div>{children}</div>;
};

export default Page;
