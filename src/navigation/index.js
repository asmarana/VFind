import React from 'react';
import { AuthProvider } from './authProvider';
import Routes from './routes';

const RootNavigation = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );

}

export default RootNavigation;