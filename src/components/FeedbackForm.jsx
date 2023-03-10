import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackEdit.edit) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = ({target: { value } }) => {
        if(value === '') {
           setBtnDisabled(true)
           setMessage(null)
        } else if(value.trim().length < 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 chracters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 9) {
            const newFeedback = {
                text: text,
                rating: rating,
            }

            if (feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>
                    How would you rate your service with us?
                </h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input 
                        onChange={handleTextChange}
                        value={text}
                        type="text" 
                        placeholder="Write a review"/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;