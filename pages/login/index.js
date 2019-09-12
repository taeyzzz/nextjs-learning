import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ApplicationActions from '../../actions/application'

class LoginPage extends React.Component{
  constructor(props){
    super(props)
  }

  handleGotoHomeClicked = () => {
    Router.push('/home')
  }

  handleChangeMessageClicked = () => {
    const message = this.refs.input.value
    this.props.changeMessage(message)
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <Head>
          <title>Login Page</title>
        </Head>
        Login Page
        <div>
          Message: {this.props.application.message}
          <div>
            <input type="text" ref="input"/>
            <button onClick={this.handleChangeMessageClicked}>Change</button>
          </div>
        </div>
        <button onClick={this.handleGotoHomeClicked}>Go to Home</button>
      </div>
    )
  }
}

LoginPage.getInitialProps = async function({ store, isServer, pathname, query }) {
  await store.dispatch(ApplicationActions.loadMessage())
  const state = store.getState()
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
