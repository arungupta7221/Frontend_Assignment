import React, { useContext } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { UserContext } from '../components/UserContext'
interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext)
  return (
    <Route {...rest} render={(props) => (user ? <Component {...props} /> : <Redirect to="/" />)} />
  )
}

export default PrivateRoute
