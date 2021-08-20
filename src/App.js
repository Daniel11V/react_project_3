import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Drum from './components/Drum.jsx'

function App() {
  return (
    <Provider store={store}>
      <Drum />
    </Provider>
  );
}

export default App;
