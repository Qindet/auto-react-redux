import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider as ReduxProvider} from "react-redux";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import {Provider as AutoProvider} from "./components/auto-service-context/auto-service-context";
import AutoService from "./services/auto-service";
import {BrowserRouter} from "react-router-dom";

const autoService = new AutoService()


ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
        <ErrorBoundry>
            <AutoProvider value={autoService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AutoProvider>
        </ErrorBoundry>
    </ReduxProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
