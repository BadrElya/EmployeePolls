import React from 'react'
import Question from './Question'

const QuestionList = ({ title, ids }) => {

  return (
    <div className='Questionlist'>
      <div className='Questionlist-title'>{title}</div>
      <div className='Questionlist-questions'>
        {ids && ids.map(q => (
          <div key={q}>
            <Question id={q} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionList;