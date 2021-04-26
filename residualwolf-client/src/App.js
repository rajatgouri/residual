import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Blog from './components/layouts/BlogSection';
import BlogDetails from './components/layouts/SingleBlog';
import Home from './components/layouts/Home';
import BlogForm from './components/Dashboard/blogForm';
import State from './context/ResidualWolf/State';

const App = () => {
  return (
    <State>
      <Router>
        <Fragment>
          <div className="container-fluid">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog-list" component={Blog} />
              <Route exact path="/blog-details" component={BlogDetails} />
              <Route exact path="/create-blog" component={BlogForm} />
            </Switch>
            <Footer />
          </div>
        </Fragment>
      </Router>
    </State>
  );
};

export default App;
