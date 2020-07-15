import { createStore} from 'redux'
import reducer from './reducer'
const state = {
  name: 'yangjing',
  age: 18
}
const store = createStore(reducer,state)

export default store