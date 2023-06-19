import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

import UserBox from "./components/UserBox";
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <UserBox />
    </Provider>
  )
}