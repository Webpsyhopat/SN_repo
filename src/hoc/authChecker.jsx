import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom"

const mapStateToProps = (state) => {
  return { isAuthorised: state.userData.userData.isAuthorised }
}

let authChecker = (Component) => {

  class wrappedComp extends React.Component {

    render(){
      if (!this.props.isAuthorised) { return <Redirect to='./login' />}
      return <Component {...this.props} />
    }
 }

  return connect(mapStateToProps)(wrappedComp);
} 

export default authChecker;