import { createStore} from 'redux'
import reducer from './reducer'
const store = createStore(reducer,{name:'yangjing'})

export default store