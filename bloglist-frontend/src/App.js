import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import login from './services/login'
import LoginForm from './components/loginForm'
import BlogForm from './components/blogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await login.login({ userName, password })
      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setSuccessMessage("User logged successfuly")
      setTimeout(() => {
        setSuccessMessage("")
      }, 5000)
    } catch (error) {
      setErrorMessage("Wrong credentials")
      setTimeout(() => {
        setErrorMessage("")
      }, 5000)
    }
  }

  const handleCreate = async (event) => {
    event.preventDefault()
    try {
      const blog = await blogService.create({ author: author, title: title, url: url })
      setBlogs([...blogs, blog])
      setAuthor("")
      setTitle("")
      setUrl("")
      setSuccessMessage("Blog created")
      setTimeout(() => {
        setSuccessMessage("")
      }, 5000)
    } catch (error) {
      console.log("Create blog error", error.message)
      setErrorMessage(`Error while creating the blog ${error.message}`)
      setTimeout(() => {
        setErrorMessage("")
      }, 5000)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    blogService.setToken(user.token)
    setUser(null)
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      <h2>{user ? "blogs" : "Login"}</h2>
      {errorMessage.length !== 0  && <h1 className='error'>{errorMessage}</h1>}
      {successMessage.length !== 0 && <h1 className='success'>{successMessage}</h1>}
      {user ?
        <>
          <h3>Welcome {user.userName} <button onClick={handleLogout}>Logout</button></h3>
          <BlogForm
            handleCreate={handleCreate}
            author={author}
            title={title}
            url={url}
            setAuthor={setAuthor}
            setTitle={setTitle}
            setUrl={setUrl}
          />
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
        </>
        :
        <LoginForm
          handleLogin={handleLogin}
          userName={userName}
          password={password}
          setUserName={setUserName}
          setPassword={setPassword}
        />
      }
    </div>
  )
}

export default App