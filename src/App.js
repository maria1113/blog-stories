import StoryDetails from './StoryDetails';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotExist from './NotExist';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/stories/:id">
              <StoryDetails />
            </Route>
            <Route path="*">
              <NotExist />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
