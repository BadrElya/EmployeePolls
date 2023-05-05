import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addQuestionData } from '../actions/shared'

const Newquestion = ({ dispatch, auth }) => {
    const navigate = useNavigate();

    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const question = {
            optionOneText: first,
            optionTwoText: second,
            author: auth,
        };
        dispatch(addQuestionData(question));
        setFirst('');
        setSecond('');
        navigate('/');
    };

    useEffect(() => {
        !auth && navigate('/login')
    }, [auth, navigate])

    return (auth && <>
        <div className='form'>
            <h2>Would You Rather</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label>First Option</label>
                <input type="text"
                    placeholder='Option One'
                    value={first}
                    className='form-text'
                    onChange={(e) => setFirst(e.target.value)}
                />
                <label>Second Option</label>
                <input type="text"
                    placeholder='Option Two'
                    value={second}
                    className='form-text'
                    onChange={(e) => setSecond(e.target.value)}
                />
                <div className='submit-button-container'>
                    {first && second ? (
                        <button className='submit-button submit-button-enabled'>
                            Submit
                        </button>
                    ) : (
                        <button className='submit-button submit-button-disabled' disabled>
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    </>
    )
}

const mapStateToProps = ({ userAuth }) => ({
    auth: userAuth
})

export default connect(mapStateToProps)(Newquestion)