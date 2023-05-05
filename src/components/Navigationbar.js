import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/userAuth'

const Navigationbar = ({ dispatch, auth }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <nav className='navigationbar'>
      <ul className="ul-list">
        <Link to="/">
          <li data-testid='MainPage'>Home</li>
        </Link>
        <Link to="/leaderboard">
          <li data-testid='leaderboard'>Leaderboard</li>
        </Link>
        <Link to="/add">
          <li data-testid='new'>New</li>
        </Link>
      </ul>
      <div className='logout'>
        {auth && <><img
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '5px'
          }} src={auth.avatarURL} alt="" />
          <p>{auth.id}</p></>}
        <ul className="ul-list"><li data-testid='logout' className='logout-button' onClick={handleLogout}>Logout</li></ul>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ userAuth, users }) => ({
  auth: users[userAuth],
});

export default connect(mapStateToProps)(Navigationbar)