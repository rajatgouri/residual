import React, { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./components/layouts/BlogSection";
import BlogDetails from "./components/layouts/SingleBlog";
import Home from "./components/layouts/Home";
import BlogForm from "./components/Dashboard/blogForm";
import State from "./context/ResidualWolf/State";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import AdminSignup from "./components/Auth/AdminSignup/AdminSignup";
import dashboard from "./components/Dashboard/dashboard";
import Blogs from "./components/Dashboard/Blogs/Blogs";
import Category from "./components/Dashboard/Category/Category";
import User from "./components/Dashboard/User/User";
import About from "./components/layouts/About";
import Market from "./components/layouts/Market";
import Default from "./components/Default/Default";
import Video from "./components/Dashboard/Videos/Video";
import Tags from "./components/Dashboard/Tags/Tags";
import BlogVideo from "./components/layouts/Video";

const App = () => {
  return (
    <div>
      <State>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog-list" component={Blog} />
              <Route exact path="/blog-details" component={BlogDetails} />
              <Route exact path="/create-blog" component={BlogForm} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/admin/signup" component={AdminSignup} />
              <Route exact path="/admin/dashboard" component={dashboard} />
              <Route exact path="/admin/dashboard/blogs" component={Blogs} />
              <Route exact path="/admin/dashboard/video" component={Video} />
              <Route exact path="/admin/dashboard/tags" component={Tags} />
              <Route
                exact
                path="/admin/dashboard/category"
                component={Category}
              />
              <Route exact path="/admin/dashboard/user" component={User} />
              <Route exact path="/about" component={About} />
              <Route exact path="/market" component={Market} />
              <Route exact path="/videos" component={BlogVideo} />
              <Route component={Default} />
            </Switch>
          </Fragment>
        </Router>
      </State>
    </div>
  );
};

export default App;
