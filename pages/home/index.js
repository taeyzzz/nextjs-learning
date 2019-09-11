import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ApplicationActions from '../../actions/application'
import ImageSrc from '../../assets/images/bg.jpg'

import "../../global-style.scss"

class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('did mount');
  }

  handleGotoLoginClicked = () => {
    Router.push('/login')
  }

  handleChangeMessageClicked = () => {
    const message = this.refs.input.value
    this.props.changeMessage(message)
  }

  render(){
    console.log(this.props);
    return (
      <div>
        Home Page
        <img src={ImageSrc} width="400" height="300"/>
        <div>
          Message: {this.props.isServer ? this.props.initialPropsData.message : this.props.application.message}
          <div>
            <input type="text" ref="input"/>
            <button onClick={this.handleChangeMessageClicked}>Change</button>
          </div>
        </div>
        <button onClick={this.handleGotoLoginClicked}>Go to Login</button>
      </div>
    )
  }
}

HomePage.getInitialProps = async function({ reduxStore, req }) {
  const isServer = !!req
  // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  await reduxStore.dispatch(ApplicationActions.loadMessage())
  const state = reduxStore.getState()
  console.log("isServer", isServer);
  console.log(state);
  return {}
};

const mapStateToProps = (state) => {
  return {
    application: state.application
  }
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, ApplicationActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
