import PropTypes from 'prop-types'

function Cad({ children, reverse }) {

// return <div className={'Card ${reverse && "reverse"}'}>
//     {children}
//     </div>

    return (
        <div className='Card' style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000',
        }}>
            {children}
        </div>
    )
    
    }

    Cad.defaultProps = {
        reverse: false,
    }

    Cad.propTypes = {
        children: PropTypes.node.isRequired,
        reverse: PropTypes.bool,

    }

export default Cad