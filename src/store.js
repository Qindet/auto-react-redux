import {createStore} from 'redux'
import reducer from "./reducers/index";

const store = createStore(reducer)
function show() {
    console.log(store.getState())
}

store.subscribe(show)
export default store