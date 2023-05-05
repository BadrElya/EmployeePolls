import { RECEIVE_USERS, SAVE_ANSWER_USER, ADD_QUESTION_USER } from '../actions/users';

const users = (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTION_USER:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id]),
                },
            };
        case SAVE_ANSWER_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer,
                    },
                },
            };
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        default:
            return state;
    }
};

export default users;