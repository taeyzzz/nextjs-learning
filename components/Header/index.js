import React from 'react'
import Router from 'next/router'

import HeaderStyled from './styled'

class Header extends React.PureComponent{
  handleLogoutClicked = () => {
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
