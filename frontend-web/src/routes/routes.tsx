import React from 'react';
import {
  Switch ,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // const { user } = useAuth();
  const user  = true

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        {console.log('passou aqui')}
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/give-classes',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;