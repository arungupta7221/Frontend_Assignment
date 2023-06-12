// import NavBar from './components/NavBar'
// import TodoApp from './components/TodoAppList'
// import Footer from './components/Footer'

// import Home from './components/Home'
// import ModelInput from './components/ModelInput'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserProvider } from './components/UserContext'
import NavBar from './components/NavBar'
import Home from './components/Home'

const App: React.FC = () => {
  return (
    <UserProvider>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </Router>
    </UserProvider>
  )
}

export default App
