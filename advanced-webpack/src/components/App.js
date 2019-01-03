import React from 'react'
import axios from 'axios'
import './app.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      users: []
    }
  }
  componentDidMount () {
    axios.get('/api/users')
      .then(res => { this.setState({ users: res.data }, () => console.log(res.data)) })
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

export default App
