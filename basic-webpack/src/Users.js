import React from 'react'
import axios from 'axios'

export default class Users extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      users: []
    }
  }
  componentDidMount () {
    axios.get('/api/users')
      .then(res => {
        console.log(res.data)
        this.setState({ users: res.data })
      })
      .catch(err => console.log(err))
  }
  render () {
    const users = this.state.users.map(user => <p className='card' key={user.id}>{user.username}</p>)

    return (
      <div className='masthead'>
        {users}
      </div>
    )
  }
}
