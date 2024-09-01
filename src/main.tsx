import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <QueryClientProvider client={new QueryClient()}>
            <App />
        </QueryClientProvider>
    </BrowserRouter>
);
