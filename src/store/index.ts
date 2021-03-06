import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function () {
  return createStore(reducers(), {}, composeWithDevTools(
    applyMiddleware(thunk)
  ))
}
