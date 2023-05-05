import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Leaderboard = ({ users, sorted, auth }) => {
  const navigate = useNavigate()

  useEffect(() => {
    !auth && navigate('/login')
  }, [auth, navigate])

  return (
    users && (
      <div className='leaderboard'>
        <table>
          <thead>
            <tr className='leaderboard-grey'>
              <th>Users</th>
              <th data-testid='answered'>Answered</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((id) => (
              <tr key={'u' + id}>
                <td>
                  <div className='column1'>
                    <img src={users[id].avatarURL} alt={users[id].name} />
                    <div className='user-info'>
                      <div>{users[id].name}</div>
                      <div className='user-id'>{users[id].id}</div>
                    </div>
                  </div>
                </td>
                <td className='column2'>{Object.keys(users[id].answers).length}</td>
                <td className='column3'>{Object.keys(users[id].questions).length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  )
}

const mapStateToProps = ({ users, userAuth }) => ({
  sorted: Object.keys(users).sort((a, b) => {
    const sumB = Object.keys(users[b].answers).length + Object.keys(users[b].questions).length
    const sumA = Object.keys(users[a].answers).length + Object.keys(users[a].questions).length
    return sumB - sumA
  }),
  users: users,
  auth: userAuth,
})

export default connect(mapStateToProps)(Leaderboard)