import './bootstrap';

import { BrowserRouter } from 'react-router-dom';
import App from 'app';
import { createRoot } from 'react-dom/client';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { store } from 'store';

import 'assets/styles/main.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: () => {},
    onError: () => {}
  }),
  mutationCache: new MutationCache({
    onSuccess: () => {},
    onError: () => {}
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
