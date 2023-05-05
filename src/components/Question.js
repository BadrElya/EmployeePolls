import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Question = ({ id, questions }) => {

    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        const time = date.toLocaleString('en-US', options);
        return `${time} | ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    };

    return (
        questions && (
            <div className='question'>
                <div className='author'>{questions[id].author}</div>
                <div className='date'>{getDate(questions[id].timestamp)}</div>
                <Link to={`/questions/${id}`} style={{ width: '100%' }}>
                    <button className='question-button'>show</button>
                </Link>
            </div>
        )
    );
};

const mapStateToProps = ({ questions }) => ({
    questions,
});

export default connect(mapStateToProps)(Question);