import React, { useContext } from "react";
import FeedbackItems from "./FeedbackItems";
import FeedbackContex from "./context/feedBackContex";

export default function FeedbackList({ handleDelete }) {

  const {feedback} =useContext(FeedbackContex)

  if (!feedback || feedback.length === 0) {
    return <h1>No feed back yet</h1>;
  }

  return (
    <div className="feedback-list">
      {feedback?.map((item) => (
        <FeedbackItems key={item.id} item={item} />
      ))}
    </div>
  );
}
