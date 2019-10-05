import React from 'react'
import { connect } from 'react-redux'

import { TOGGLE } from './../actions/types'

const IsLoggedIn = ({ isLogged, dispatch }) => {

  const onIsLoggedButtonClick = () => {
    dispatch({ type: TOGGLE })
  }

  return (
    <div>
      {isLogged ? 'I am logged' : 'I am not logged'}
      <br />
      <button onClick={onIsLoggedButtonClick}>TOGGLE</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLoggedIn.isLogged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IsLoggedIn)
