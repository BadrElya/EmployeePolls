import { RECEIVE_QUESTIONS, SAVE_ANSWER_Q, ADD_QUESTION } from '../actions/questions'

const questions = (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };
        case SAVE_ANSWER_Q:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser]),
                    },
                },
            };
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        default:
            return state;
    }
};

export default questions;