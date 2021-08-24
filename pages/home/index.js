import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ApplicationActions from '../../actions/application'

import Header from '../../components/Header/dynamic'
import ApplicationLayout from '../../components/ApplicationLayout/dynamic'

import HomePageStyled from './styled'

import IMGSRC from '../../assets/images/bg.jpg'

class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  getListUser(){
    const listUser = this.props.application.listUser.map(user => {
      return (
        <div key={user.id}>
          name: {user.name}, age: {user.age}
        </div>
      )
    })
    return (
      <div className="list-user-container">
        {listUser}
      </div>
    )
  }

  render(){
    return (
      <HomePageStyled>
        <Head>
          <title>Home Page</title>
        </Head>
        <ApplicationLayout>
          {this.getListUser()}
          <Image
            src={IMGSRC}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </ApplicationLayout>
      </HomePageStyled>
    )
  }
}

HomePage.getInitialProps = async function({ store, isServer, pathname, query }) {
  // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  await store.dispatch(ApplicationActions.loadListUser())
  const state = store.getState()
  return state
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
