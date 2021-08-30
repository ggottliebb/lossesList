import { Fragment } from "react";
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from "./App";
import Login from "./Login";
import { Context } from "./Context";

export default function Auth() {
  const [context, setContext] = useState(false);
  const user = context;
  console.log(user)
  // console.log(user.value)
  // console.log(user.state)

  // if (user.status == "fulfilled") {
  // console.log(user)}
  // useEffect(() => {
  //   // fetchTodos(filter)
  // }, [context.state])
  return (
    <Context.Provider value={[context, setContext]}>
      <BrowserRouter>
        <Switch>
          {!user &&
            <Fragment>
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Fragment>
            }
          {user &&
            <Fragment>
              <Route path="/dashboard" component={App} exact />
              <Redirect to="/dashboard" />
            </Fragment>
          }
        </Switch>
      </BrowserRouter>
    </Context.Provider>)
};