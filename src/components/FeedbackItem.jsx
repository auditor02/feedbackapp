import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import {PropTypes} from 'prop-types'
import Card from "./shared/Card"
import Cad from "./shared/Cad"
import FeedbackContext from './context/FeedbackContext'


function FeedbackItem({ item }) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <>
       <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
       </Card>
      <Cad>
      <button onClick={() => deleteFeedback(item.id)}
          className='close'>
          <FaTimes color='purple' />
        </button>
        <button onClick={() => editFeedback(item)}  className="edit">
          <FaEdit color='purple' />
        </button>
      </Cad>
    </>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}


export default FeedbackItem