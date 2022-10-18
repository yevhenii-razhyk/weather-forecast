import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react'
import './styles/index.scss';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store, {persistor} from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
  </Provider>
);
