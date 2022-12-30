import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>
                    How would you rate your service with us?
                </h2>
                {/* @TODO - ADD RATING SELECT COMPONENT */}
                <div className="input-group">
                    <input 
                        onChange={handleTextChange}
                        value={text}
                        type="text" 
                        placeholder="Write a review"/>
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </Card>
    );
};

export default FeedbackForm;