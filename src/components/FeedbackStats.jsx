import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
    // Calculate ratings average
    const average = feedback.length === 0 ? 0 :
        feedback.reduce((a, { rating }) => a + rating, 0) / feedback.length
    
    return(
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4>
        </div>
    );
};

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats;