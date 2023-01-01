import { useState, useEffect, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)
    const {feedbackEdit} = useContext(FeedbackContext);

    const handleChange = ({target: {value}}) => {
        setSelected(+value);
        select(+value)
    }

    useEffect(() => {
        if(feedbackEdit.edit) {
            setSelected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])


    const radioButtons = [1,2,3,4,5,6,7,8,9,10];

    const radioButton = (
        <>
            {radioButtons.map((num, index) => (
                <li key={index}>
                    <input 
                    type='radio'
                    id={`num${num}`}
                    name='rating'
                    value={`${num}`}
                    onChange={handleChange}
                    checked={selected === num}
                    />
                    <label htmlFor={`num${num}`}>{`${num}`}</label>
                </li>
            ))}
        </>
    )

    return (
        <ul className='rating'>
            {radioButton}
        </ul>
    );
};

export default RatingSelect;