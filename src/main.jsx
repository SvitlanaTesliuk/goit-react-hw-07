
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Toaster
      position='top-right'
      reverseOrder={false}
      toastOptions={{
        duration: 2000,
      }}
    />
  </Provider>
);