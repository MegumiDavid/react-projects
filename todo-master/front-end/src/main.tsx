import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.scss';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'jotai';

import { useAtomsDebugValue } from 'jotai-devtools'

const queryClient = new QueryClient();

function DebugAtoms() {
  useAtomsDebugValue()
  return null
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <DebugAtoms />
        <App />
      </Provider>
    <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,


)
