import "./index.scss";
import * as ROUTES from "./common/routes";
import { Route, Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";
import React from "react";
import customHistory from "./common/history";
import store from "./common/store";
import LoadingSpinner from "./container/LoadingSpinner";
import HomePage from "./container/HomePage";

const App = () => {
    return (
        <Provider store={store}>
            <Router history={customHistory}>
                <div>
                    <LoadingSpinner/>
                    <Switch>
                        <Route
                            exact
                            component={HomePage}
                            path={ROUTES.HOME}
                        />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

const rootEl = document.getElementById("root");
render(<App/>, rootEl);
