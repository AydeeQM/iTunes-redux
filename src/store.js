import createStore from 'redux-zero'
import {playList} from './data'

const initialState = {
   playList: playList,
   currentPlay:0
}

const store = createStore(initialState)
export default store