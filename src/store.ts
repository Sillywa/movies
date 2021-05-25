import {createStore} from "redux"

import reducer from "./pages/wants/reducer"

const store = createStore(reducer)

export default store