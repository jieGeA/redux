import {createStore, bindActionCreators} from 'redux'
import {createActions, handleActions} from 'redux-actions'

const actions = createActions({
    INCREASE: null,
    DECREASE: null, 
    ADD: num => num // 生成action中的payload；
})
console.log('actions', actions)
//increase... 为action创建函数
export const {increase, decrease, add} = actions;

const reducer = handleActions({
    [increase]: state => state + 1,
    [decrease]: state => state - 1,
    [add]: (state, {payload}) => state + payload
},10)

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store.getState())
// const a = {type: 'ADD',payload:5};
// store.dispatch(a);
// console.log(store.getState())

const bindActions = bindActionCreators(actions, store.dispatch);

console.log(store.getState())
bindActions.decrease()
console.log(store.getState())
bindActions.increase()
console.log(store.getState())

bindActions.add(3)

console.log(store.getState())


export default store




