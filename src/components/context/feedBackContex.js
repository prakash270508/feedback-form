import { createContext, useState } from "react";
//To create id in abject
import { v4 as uuidv4 } from "uuid";

const FeedbackContex = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([
    {
      id: 1,
      text: "This review is from context",
      rating: 9,
    },
    {
      id: 2,
      text: "This review is from context 2",
      rating: 7,
    },
    {
      id: 3,
      text: "This review is from context 3",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    editItem: {},
    edit: false,
  });

  //Add feedback
  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedback]);
  };

  //Delete Feebback
  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete ?")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  //Edit Feedback
  const handleEdit = (editItem) => {
    setFeedbackEdit({
      editItem,
      edit: true,
    });
  };

  //Update feedback
  const updateFeedback = (id, updItem) => {
    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContex.Provider
      value={{
        feedback,
        handleDelete,
        handleAdd,
        handleEdit,
        feedbackEdit,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContex.Provider>
  );
};

export default FeedbackContex;
