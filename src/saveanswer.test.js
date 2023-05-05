import {_saveQuestionAnswer} from './utils/_DATA'

describe('Test on _saveQuestionAnswer', () => {
    it('will return error when authedUser is missing', async() => {
        const data = {
            qid: '6ni6ok3ym7mf1p33lnez',
            answer: 'optionOne'
        }
        await expect(_saveQuestionAnswer(data)).rejects.toEqual('Please provide authedUser, qid, and answer')
    })

    it('will return error when qid is missing', async() => {
        const data = {
            authedUser: 'tylermcginnis',
            answer: 'optionOne'
        }
        await expect(_saveQuestionAnswer(data)).rejects.toEqual('Please provide authedUser, qid, and answer')
    })

    it('will return error when answer is missing', async() => {
        const data = {
            authedUser: 'tylermcginnis',
            qid: '6ni6ok3ym7mf1p33lnez'
        }
        await expect(_saveQuestionAnswer(data)).rejects.toEqual('Please provide authedUser, qid, and answer')
    })
})
