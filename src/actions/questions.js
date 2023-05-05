export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_ANSWER_Q = 'SAVE_ANSWER_Q';
export const ADD_QUESTION = 'ADD_QUESTION';


export const saveAnswerQuestion = ({ authedUser, qid, answer }) => ({
    type: SAVE_ANSWER_Q,
    authedUser,
    qid,
    answer,
  });

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});