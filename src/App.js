
import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Home></Home>
<Router>
  <Switch>
    <Route>
      
    </Route>
  </Switch>
</Router>
    </div>
  );
}

export default App;
