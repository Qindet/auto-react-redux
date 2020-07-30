import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider as ReduxProvider} from "react-redux";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import {BrowserRouter} from "react-router-dom";

// теперь контекс(сервис) достаем не из contextAPI а из Redux, поэтому НОС не нужен и Provider


ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
        <ErrorBoundry>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
        </ErrorBoundry>
    </ReduxProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
