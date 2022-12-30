import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback, handleDelete}) {

    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    };

    const feedbackList = feedback.map((item) => 
       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    )

    return (
        <div className="feedback-list">
            {feedbackList}  
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
};

export default FeedbackList;