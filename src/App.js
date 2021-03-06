import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {
  HashRouter as Router,
  Switch,
  Route,
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
              <Route path="/list">
                <Movies />
              </Route>
              <Route path="/detail/:id">
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
