import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Login from '../src/components/views/Login/Login';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Tables from '../src/components/views/Tables/Tables';
import Ordering from '../src/components/views/Ordering/Ordering';
import Dashboard from '../src/components/views/Dashboard/Dashboard';
import NewOrder from '../src/components/views/NewOrder/NewOrderContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={NewOrder} />
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
