import React from 'react'
import Router from 'next/router'

import * as ga from '../../utils/ga'

import HeaderStyled from './styled'

class Header extends React.PureComponent{
  handleLogoutClicked = () => {
    ga.event({
      action: "logout",
    })
    Router.push('/login')
  }

  render(){
    return (
      <HeaderStyled>
        Header
        <button onClick={this.handleLogoutClicked}>logout</button>
      </HeaderStyled>
    )
  }
}

export default Header
