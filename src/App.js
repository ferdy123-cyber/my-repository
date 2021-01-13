import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Product from './components/product'
import List from './components/listproduct'
import Chart from './components/chart'


function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Product} path='/product' exact />
        <Route component={List} path='/list-product' exact />
        <Route component={Chart} path='/cart' exact />
      </Switch>
    </Router>
  );
}

export default App;
