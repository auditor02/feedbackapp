import {PropTypes} from 'prop-types'

function Header({ value, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor:  bgColor,
    color: textColor,
  }
  
  
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{value}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
    value: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {
    value: PropTypes.string,
}

export default Header