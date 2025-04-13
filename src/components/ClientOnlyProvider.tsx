'use client';

import React, { useEffect, useState, ReactNode } from 'react';

interface ClientOnlyProviderProps {
  children: ReactNode;
}

const ClientOnlyProvider: React.FC<ClientOnlyProviderProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnlyProvider; 