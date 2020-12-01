import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import OrderComplete from "./components/OrderComplete/OrderComplete";
import MenuItem from "./components/MenuItem/MenuItem";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder/PlaceOrder";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/food/:foodId">
            <MenuItem />
          </Route>
          <PrivateRoute exact path="/order">
            <PlaceOrder />
          </PrivateRoute>
          <Route path="/orderConfirm">
            <OrderComplete />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
