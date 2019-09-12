import React from 'react'

import ErrorStyled from './styled'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <ErrorStyled>
        <div className="text">{this.props.statusCode}</div>
      </ErrorStyled>
    )
  }
}

export default Error
