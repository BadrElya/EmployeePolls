import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionList from './QuestionList';

const MainPage = ({ answeredQuestions, unansweredQuestions, auth }) => {
  const navigate = useNavigate();
  const [selectedQuestions, setSelectedQuestions] = useState(unansweredQuestions || []);

  useEffect(() => {
    !auth && navigate('/login');
  }, [auth, navigate]);

  useEffect(() => {
    setSelectedQuestions(unansweredQuestions);
  }, [unansweredQuestions]);

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'new') {
      setSelectedQuestions(unansweredQuestions);
    } else {
      setSelectedQuestions(answeredQuestions);
    }
  };
  //Quick and dirty Solution
  return (
    <div>
      <div className="mainpage">
        <div >
          <button
            onClick={() => handleButtonClick('new')}
            style={{
              background: 'none',
              border: 'none',
              color: selectedQuestions === unansweredQuestions ? 'black' : 'gray',
              cursor: 'pointer',
              fontSize: '25px',
              marginRight: '10px',
              textDecoration: selectedQuestions === unansweredQuestions ? 'underline' : 'none',
              fontWeight: selectedQuestions === unansweredQuestions ? 'bold' : 'normal',
              paddingBottom: '20px',
            }}
          >
            New Questions
          </button>

          <button
            onClick={() => handleButtonClick('done')}
            style={{
              background: 'none',
              border: 'none',
              color: selectedQuestions === answeredQuestions ? 'black' : 'gray',
              cursor: 'pointer',
              fontSize: '25px',
              textDecoration: selectedQuestions === unansweredQuestions ? 'none' : 'underline',
              fontWeight: selectedQuestions === answeredQuestions ? 'bold' : 'normal',
              paddingBottom: '20px',
            }}
          >
            Done
          </button>
        </div>
        <QuestionList title={selectedQuestions.length > 0 ? selectedQuestions[0].title : ''} ids={selectedQuestions.length > 0 ? selectedQuestions[0].ids : []} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, userAuth, users }) => {
  if (!userAuth) {
    return {};
  }

  const answeredQuestions = Object.keys(users[userAuth].answers);
  const sortedByTimestamp = (a, b) => questions[b].timestamp - questions[a].timestamp;

  return {
    answeredQuestions: [
      {
        key: 'd2',
        title: 'Done',
        ids: Object.keys(questions).filter((k) => answeredQuestions.includes(k)).sort(sortedByTimestamp),
      },
    ],
    unansweredQuestions: [
      {
        key: 'd1',
        title: 'New Questions',
        ids: Object.keys(questions).filter((k) => !answeredQuestions.includes(k)).sort(sortedByTimestamp),
      },
    ],
    auth: users[userAuth],
  };
};

export default connect(mapStateToProps)(MainPage);