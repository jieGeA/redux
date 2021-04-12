import {createStore, bindActionCreators} from 'redux'

const actionCreaters = {
    increase () {
        return {
            type: 'increase'
        }
    },
    decrease () {
        return {
            type: 'decrease'
        }
    }
}

function reducer (state = 10, action) {
    if (action.type === 'increase') {
        return state + 1
    }
    if (action.type === 'decrease') {
        return state - 1
    }
    return state
}

const store = createStore(reducer)
store.subscribe(()=>{
    console.log(`状态改变了`)
})
const action = {type: 'increase'};

console.log(store.getState())
store.dispatch(action);
console.log(store.getState())

// const bindActions = bindActionCreators(actionCreaters, store.dispatch);

// console.log(store.getState())
// bindActions.decrease()
// console.log(store.getState())
// bindActions.increase()
// console.log(store.getState())

