import React from 'react';

import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Landing from './Pages/Landing'

let history = createBrowserHistory();

const styles = {
  bodyContainer: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
}

export default () => {
  return(
    <>
      <Router history={history}>
        <Switch>
          <div>
            <div
              style={styles.bodyContainer}
            >
              <Route
                exact
                path={'/'}
                render={() => 
                  <Landing/>
                }
              />
            </div>
          </div>
        </Switch>
      </Router> 
    </>
  )
}
