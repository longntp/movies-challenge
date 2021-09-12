import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux'

import './App.css';
import Movies from './pages/Movies';
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Movies />
      </Container>
    </Provider>
  );
}

export default App;
