import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import { AuthContext } from '../components/auth/AuthContext';
import { LoginScreen } from '../components/Login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { user: { logged } } = useContext(AuthContext);
  return (
    <Router>
      <div>

        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={logged}
          />
          <PrivateRoute
            isAuthenticated={logged}
            path="/"
            component={DashBoardRoutes}
          />
        </Switch>

      </div>
    </Router>
  )
}
