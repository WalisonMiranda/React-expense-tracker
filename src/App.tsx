import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Home, Transactions, NotFound } from './pages';
import { Navbar } from './components';

import { AuthContextProvider } from './contexts/AuthContext';

import './global.css';

type RouteProps = {
  path: any;
  exact: any;
  component: any;
}

function App() {

  const NavRoute = ({path, exact, component: Component}: RouteProps) => {
    return (
      <Route exact={exact} path={path} render={(props) => (
        <>
          <Navbar />
          <Component {...props} />
        </>
      )} />
    )
  }

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <NavRoute exact path="/home" component={Home} />
          <NavRoute exact path="/transactions" component={Transactions} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
