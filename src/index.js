import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider as ReduxProvider} from "react-redux";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import {Provider as AutoProvider} from "./components/auto-service-context/auto-service-context";
import {BrowserRouter} from "react-router-dom";
import BmwService from "./services/bmw-service";
import WagService from "./services/wag-service";

const bmwService = new BmwService()
const wagService = new WagService()
console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
        <ErrorBoundry>
            <AutoProvider value={store.getState().serviceReducer.service}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AutoProvider>
        </ErrorBoundry>
    </ReduxProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
