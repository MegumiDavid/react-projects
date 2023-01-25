import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.scss';

import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'jotai';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <App />
      </Provider>
    <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,


)
