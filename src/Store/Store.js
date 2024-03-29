import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from '././Reducers/index'


const middleWare=[thunk]
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleWare)))

export default store