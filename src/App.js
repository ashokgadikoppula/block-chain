import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header';
import BlockDetail from './Pages/BlockDetail';
import Dashboard from './Pages/Dashboard'
import TransactionDetail from './Pages/TrasactionDetail';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Dashboard />
        </Route>
        <Route path='/block/:id' exact>
          <BlockDetail />
        </Route>
        <Route path='/transaction/:id' exact>
          <TransactionDetail />
        </Route>

      </Switch>
    </>
  );
}

export default App;
