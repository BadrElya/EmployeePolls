
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER';
export const SAVE_ANSWER_USER = 'SAVE_ANSWER_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';


export const addQuestionUser = (question) => ({
  type: ADD_QUESTION_USER,
  question,
});

export const saveAnswerUser = ({ authedUser, qid, answer }) => ({
  type: SAVE_ANSWER_USER,
  authedUser,
  qid,
  answer,
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});



