import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Movies from './pages/Movies';
import Detail from './pages/Detail';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <>
            <Switch>
              <Route path="/">
                <Movies />
              </Route>
              <Route path="/:id">
                <Detail />
              </Route>
            </Switch>
          </>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
