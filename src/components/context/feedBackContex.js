import { createContext, useEffect, useState } from "react";

const FeedbackContex = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );

    const data = await response.json();

    setFeedBack(data);
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    editItem: {},
    edit: false,
  });

  //Add feedback
  const handleAdd = async (newFeedback) => {
    const response = await fetch(`http://localhost:5000/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedBack([data, ...feedback]);
  };

  //Delete Feebback
  const handleDelete = async (id) => {
    if (window.confirm("Do you really want to delete ?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      });

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
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedBack(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContex.Provider>
  );
};

export default FeedbackContex;
