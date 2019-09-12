import React from 'react'

import Header from '../Header/dynamic'

import ApplicationStyled from './styled'

class ApplicationLayout extends React.PureComponent{
  render(){
    return(
      <ApplicationStyled>
        <Header />
        <div className="children-container">
          {this.props.children}
        </div>
      </ApplicationStyled>
    )
  }
}

export default ApplicationLayout
