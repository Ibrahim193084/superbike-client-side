import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import MoreCycles from './Pages/Cycles/Cycle/MoreCycles/MoreCycles';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Login from './Pages/Authentication/Login/Login';
import Signup from './Pages/Authentication/Login/Signup/Signup';
import BuyNow from './Pages/BuyNow/BuyNow';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="app">
     <AuthProvider>
     <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/morecycles">
            <MoreCycles></MoreCycles>
          </Route>
          <PrivateRoute path="/cycles/:id">
            <BuyNow></BuyNow>
          </PrivateRoute>
          <Route path="/dashboard">
           <DashBoard></DashBoard>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
