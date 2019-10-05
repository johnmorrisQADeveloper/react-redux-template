import React from 'react'
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from './../actions/types'

const CounterComponent = ({ count, dispatch }) => {

  const onIncrementButtonClick = (event) => {
    dispatch({ type: INCREMENT })
  }

  const onDecrementButtonClick = (event) => {
    dispatch({ type: DECREMENT })
  }

  return (
    <div>
      This is a counter  .. value coming from  <b>redux store  = {count}</b>
      <br />
      <button onClick={onIncrementButtonClick}>Increment by 1</button>
      <button onClick={onDecrementButtonClick}>Decrement by 1</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
