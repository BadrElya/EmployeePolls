import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuthUser } from '../actions/userAuth'

const Login = ({ dispatch, auth }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const users = ['sarahedo','tylermcginnis','mtsamis','zoshikanlu'];
  const passwords = ['password123','abc321','xyz123','pass246']

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthUser(user));
  };

  const handleSelectChange = (e) => {
    const index = e.target.value;
    setUser(users[index]);
    setPassword(passwords[index]);
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
          Select a User
        </label>
        <select
          value={users.indexOf(user)}
          data-testid='user'
          className='form-text'
          onChange={handleSelectChange}
        >
          <option value=''>-- Select --</option>
          {users.map((u, i) => (
            <option key={u} value={i}>{u}</option>
          ))}
        </select>
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