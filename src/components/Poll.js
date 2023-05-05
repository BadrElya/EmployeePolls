import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { saveAnswer } from '../actions/shared'

const Poll = ({ dispatch, questions, users, auth }) => {
    const { question_id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        !auth.id && navigate('/login')
    }, [auth, navigate])

    const handleVote = answer => {
        const info = {
            authedUser: auth.id,
            qid: question_id,
            answer
        }
        dispatch(saveAnswer(info));
    }

    if (!questions[question_id]) return (<h1 data-testid='404'>404 Page Not Found</h1>)
    else return (users && <>
        <div>
            <h2>Poll by {questions[question_id].author}</h2>
            <img style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%'
            }} src={users[questions[question_id].author].avatarURL} alt="" />
            <h2>Would You Rather</h2>
            <div className='option-container'>
                <div>
                    <div className='option'>
                        <div style={{ padding: '10px' }}>{questions[question_id].optionOne['text']}</div>
                        {Object.keys(auth['answers']).includes(question_id) ? (
                            auth['answers'][question_id] === 'optionOne' ? (<button disabled className='click-disabled'>&#10003;</button>) : (<button disabled className='click-disabled'>&#x2717;</button>)
                        )
                            : (<button onClick={() => handleVote('optionOne')} className='click-button'>click</button>)}
                    </div>
                    {(questions[question_id].optionOne['votes'].length > 0 || questions[question_id].optionTwo['votes'].length > 0) && (
                        <p>Total votes: {questions[question_id].optionOne['votes'].length} ({questions[question_id].optionOne['votes'].length + questions[question_id].optionTwo['votes'].length === 0 ? 0 : 100 * questions[question_id].optionOne['votes'].length / (questions[question_id].optionOne['votes'].length + questions[question_id].optionTwo['votes'].length)}%)</p>
                    )}
                </div>
                <div>
                    <div className='option'>
                        <div style={{ padding: '10px' }}>{questions[question_id].optionTwo['text']}</div>
                        {Object.keys(auth['answers']).includes(question_id) ? (
                            auth['answers'][question_id] === 'optionTwo' ? (<button disabled className='click-disabled'>&#10003;</button>) : (<button disabled className='click-disabled'>&#x2717;</button>)
                        )
                            : (<button onClick={() => handleVote('optionTwo')} className='click-button'>click</button>)}
                    </div>
                    {(questions[question_id].optionOne['votes'].length > 0 || questions[question_id].optionTwo['votes'].length > 0) && (
                        <p>Total votes: {questions[question_id].optionTwo['votes'].length} ({(questions[question_id].optionOne['votes'].length + questions[question_id].optionTwo['votes'].length) === 0 ? 0 : (100 * questions[question_id].optionTwo['votes'].length / (questions[question_id].optionOne['votes'].length + questions[question_id].optionTwo['votes'].length)).toFixed(2)}%)</p>
                    )}
                </div>
            </div>
        </div>
    </>)
}

const mapStateToProps = ({ users, userAuth, questions }) => ({
    auth: userAuth ? users[userAuth] : { id: null },
    questions,
    users
})


export default connect(mapStateToProps)(Poll)