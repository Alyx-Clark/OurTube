import React from "react";
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from "./home/home";
import VideoShowContainer from './videos/video_show_container'

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route exact path="/watch/:videoId" component={VideoShowContainer} />
  </div>
);

export default App;