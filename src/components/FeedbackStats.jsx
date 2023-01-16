import React, { useContext } from 'react'
import FeedbackContex from './context/feedBackContex'

export default function FeedbackStats() {

  const {feedback} =useContext(FeedbackContex)

    let average = feedback.reduce((acc, cur)=>acc +=cur.rating,0)/feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviwes</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
