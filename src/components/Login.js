import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuthUser } from '../actions/userAuth'

const Login = ({ dispatch, auth, users }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthUser(user));
  };
  
  useEffect(() => {
    auth && navigate(-1)
  }, [auth, navigate])

  return (
    <div>
      <h1>Employee Polls</h1>
      <img
        src={'https://media.istockphoto.com/id/1276509410/vector/diverse-adult-avatars-full-color-vector-icon-set.webp?s=2048x2048&w=is&k=20&c=utIkT0RDAouonmmT2XLnMRNObb96OBu4kH7TCQSWX1Q='}
        alt={'EmployeeImg'}
        style={{ width: 300, height: 300 }}
      />
      <h1>Log In</h1>
      <form className='form' onSubmit={handleLogin}>
        <label>
          Username
        </label>
        <input
          type='text'
          value={user}
          data-testid='user'
          className='form-text'
          onChange={(e) => setUser(e.target.value)}
        />
        <label>
          Password
        </label>
        <input
          type='password'
          value={password}
          data-testid='password'
          className='form-text'
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            data-testid='login'
            disabled={!user || !password}
            type='submit'
          >
            Submit
        </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ userAuth, users }) => {
  return {
    auth: userAuth,
    users,
  }
}

export default connect(mapStateToProps)(Login)