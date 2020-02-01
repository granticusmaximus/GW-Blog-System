import React from 'react';
import Box from "@material-ui/core/Box";
import { BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./Navigation/routes";
import './App.css';
import MenuNav from './Navigation/NavBar';
import BlogPage from './Blog';
import NewPost from './Blog/NewPost';
import Post from './Blog/post';

function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <MenuNav />
      <div className="container-body">
        <Box my={5}>
          <div>
            <Route exact path={ROUTES.HOME} component={BlogPage} />
            <Route exact path={ROUTES.NEW_POST} component={NewPost} />
            <Route exact path={ROUTES.POST} component={Post} />
          </div>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
