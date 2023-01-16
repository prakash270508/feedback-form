import React, { useContext, useEffect, useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContex from "./context/feedBackContex";

export default function FeedbackForm() {
  const { handleAdd, feedbackEdit, updateFeedback } =
    useContext(FeedbackContex);

  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [message, setMessage] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleChange = (e) => {
    if (text === "") {
      setIsBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setIsBtnDisabled(true);
      setMessage("Message cannot less than 10 character");
    } else {
      setIsBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.editItem.id, newFeedback);
      } else {
        handleAdd(newFeedback);
      }
    }
    setText("");
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.editItem.text);
      setRating(feedbackEdit.editItem.rating);
      setIsBtnDisabled(false);
    }
  }, [feedbackEdit]);

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate our serivces ?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Write a review"
            />
            <Button type="submit" isDisabled={isBtnDisabled}>
              Submit
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </div>
  );
}
