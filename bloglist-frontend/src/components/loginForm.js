import PropTypes from 'prop-types'

const LoginForm = ({ handleLogin, userName, password, setUserName, setPassword }) => {
  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          username <input
            id='userName'
            type='text'
            value={userName}
            name="Username"
            onChange={(event) => { setUserName(event.target.value) }}
          />
        </div>
        <br />
        <div>
          password <input
            id='password'
            type='text'
            value={password}
            name="Password"
            onChange={(event) => { setPassword(event.target.value) }}
          />
        </div>
        <br />
        <button id='submitButton' type="submit">login</button>
      </form>
    </>
  )
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  userName: PropTypes.string,
  password: PropTypes.string
}

export default LoginForm