import { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Login, Home, History, NotFound } from './pages';

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
          <NavRoute exact path="/history" component={History} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
