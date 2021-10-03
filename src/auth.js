import { Fragment } from "react";
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from "./App";
import Login from "./Login";
import { Context } from "./Context";
// import { createBrowserHistory } from "history";

export default function Auth() {
  // const customHistory = createBrowserHistory();
  const [context, setContext] = useState(false);
  
  return (
    <Context.Provider value={[context, setContext]}>
      <BrowserRouter>
        <Switch>
          {!context.p &&
            <Fragment>
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Fragment>
            }
          {context.p &&
            <Fragment>
              <Route path="/" component={App}  />
              <Redirect to="/dashboard" />
            </Fragment>
          }
        </Switch>
      </BrowserRouter>
    </Context.Provider>)
};