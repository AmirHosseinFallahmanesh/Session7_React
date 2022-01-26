
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
import {AuthButton} from './auth.service'
import {PrivateRoute} from './PrivateRoute'
import {ProvideAuth} from './auth.service'
import {PublicPage} from './PublicPage'
import {LoginPage} from './LoginPage'
import {ProtectedPage} from './ProtectedPage'


export default function Container() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
