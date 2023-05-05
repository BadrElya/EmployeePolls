import {getInitialData, saveQuestionAnswer, saveQuestion} from '../utils/api'
import {receiveQuestions, saveAnswerQuestion, addQuestion} from './questions'
import {receiveUsers, saveAnswerUser, addQuestionUser} from './users'

export function fetchData () {

    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}

export function addQuestionData(question){
    return (dispatch) => {
        saveQuestion(question)
      .then((data) => {
        dispatch(addQuestion(data))
        dispatch(addQuestionUser(data))
      })
      .catch((e) => {
        console.warn("Error in actions/common/addQuestionData: ", e);
      });
    }
}

export function saveAnswer(info) {
    return (dispatch) => {
        saveQuestionAnswer(info)
      .then(() => {
        dispatch(saveAnswerQuestion(info));
        dispatch(saveAnswerUser(info));
      })
      .catch((e) => {
        console.warn("Error in actions/common/saveAnswer: ", e);
      });
    }
}


