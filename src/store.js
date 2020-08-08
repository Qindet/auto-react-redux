import {createStore,applyMiddleware,compose} from 'redux'
import reducer from "./reducers/index";
import thunkMiddleware from 'redux-thunk'
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
