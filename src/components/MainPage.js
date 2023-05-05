import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionList from './QuestionList';

const MainPage = ({ done, Newquestions, auth }) => {
  const navigate = useNavigate();

  const data = [
    {
      key: 'd1',
      title: 'New Questions',
      ids: Newquestions,
    },
    {
      key: 'd2',
      title: 'Done',
      ids: done,
    },
  ];

  useEffect(() => {
    !auth && navigate('/login');
  }, [auth, navigate]);

  return (
    <div>
      <div className="mainpage">
        {data.map((d) => (
          <div key={d.key}>
            <QuestionList title={d.title} ids={d.ids} />
          </div>
        ))}
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
    done: Object.keys(questions).filter((k) => answeredQuestions.includes(k)).sort(sortedByTimestamp),
    Newquestions: Object.keys(questions).filter((k) => !answeredQuestions.includes(k)).sort(sortedByTimestamp),
    auth: users[userAuth],
  };
};

export default connect(mapStateToProps)(MainPage);