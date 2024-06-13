import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import queryClient from '../shared/lib/query/queryClient';

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
