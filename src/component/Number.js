import React from 'react'
import {connect } from 'react-redux'
import store ,{increase, decrease, add}from '../redux/index.copy'

function Number(props) {
    return (
        <div>
            {props.n}
            <button onClick={ props.onIncrease }>+</button>
            <button onClick={ props.onDecrease }>-</button>
            <button onClick={ props.onAdd }>Add</button>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        n: state
    }
}

function mapDispatchToProps(dispatch) {
    return { 
        onIncrease(){
            dispatch(increase())
        }, 
        onDecrease(){
            dispatch(decrease())
        }, 
        onAdd(){
            dispatch(add(2))
        } 
    }
}

// export default class NumberContainner extends React.Component {
//     state = mapStateToProps(store.getState());
//     render() {
//         console.log(this.state)
//         const eventHandles = mapDispatchToProps(store.dispatch);
//         store.subscribe(()=>{
//             this.setState(mapStateToProps(store.getState()))
//         })
//         return (
//             <Number {...this.state} {...eventHandles}/>
//         )
//     }
// }

//connect()返回一个高阶组件 
export default connect(mapStateToProps,mapDispatchToProps)(Number)
