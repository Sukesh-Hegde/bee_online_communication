import { useState } from 'react'
import UserContext from './userContext'

const UserState = (props) => {
  // const host = process.env.REACT_APP_BACKEND_URL
  const host = 'http://localhost:4000'

  const userssInitial = []

  const [users, setUsers] = useState(userssInitial)

  // Get all user
  const getuser = async () => {
    const response = await fetch(`${host}/api/notes/fetchallusers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
    })
    const json = await response.json()
    setUsers(json)
  }

  // Add a user
  const addUser = async (name, registered, country, usage, payment, activity) => {
    console.log('called addUser')

    const response = await fetch(`${host}/api/users/addUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name,
        registered,
        country,
        usage,
        payment,
        activity,
      }),
    })

    const user = await response.json()
    setUsers(users.concat(user))
  }

  // Delete a user
  const deleteUser = async (id) => {
    const response = await fetch(`${host}/api/notes/deleteuser/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
    })
    const json = await response.json()

    const newUser = users.filter((user) => {
      return user._id !== id
    })
    setNotes(newUser)
  }

  // Edit a user
  const editUser = async (id, name, registered, country, usage, payment, activity) => {
    const response = await fetch(`${host}/api/notes/updateuser/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ name, registered, country, usage, payment, activity }),
    })
    const json = await response.json()

    let newUsers = JSON.parse(JSON.stringify(users))
    for (let index = 0; index < newUsers.length; index++) {
      const element = newUsers[index]
      if (element._id === id) {
        newUsers[index].name = name
        newUsers[index].registered = registered
        newUsers[index].country = country
        newUsers[index].usage = usage
        newUsers[index].payment = payment
        newUsers[index].activity = activity

        break
      }
    }
    setNotes(newUsers)
  }

  return (
    <UserContext.Provider
      value={{
        addUser,
        getuser,
        deleteUser,
        editUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
