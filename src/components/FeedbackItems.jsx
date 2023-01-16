import React, { useContext } from "react";
import Card from "./shared/Card";
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContex from "./context/feedBackContex";

export default function FeedbackItems({ item }) {

  const {handleDelete, handleEdit} = useContext(FeedbackContex)

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=> handleDelete(item.id)}>
        <FaTimes color="purple"/>
      </button>
      <button onClick={()=>handleEdit(item)} className="edit">
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
