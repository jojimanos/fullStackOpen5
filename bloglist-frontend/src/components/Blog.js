import { useState } from "react"
import blogs from "../services/blogs"

const Blog = ({ blog, toggleBlogForm, setToggleBlogForm, blogsArray, setBlogs, setSuccessMessage }) => {

  const [showDetails, setShowDetails] = useState(true)

  const handleLikes = async () => {
    let id = blog.id
    console.log(id)
    try {
      const updatedBlog = await blogs.setLikes(
        {
          author: blog.author,
          title: blog.title,
          url: blog.url,
          likes: blog.likes + 1,
        }, id
      )

      const updatedBlogs = blogsArray.map((prevBlog) =>
        prevBlog.id === updatedBlog.id ? updatedBlog : prevBlog
      );

      setBlogs(updatedBlogs);
      setSuccessMessage("Blog updated")
      setTimeout(() => {
        setSuccessMessage("")
      }, 5000)
    } catch (error) {
      console.log(error.message)
      setSuccessMessage("There was an error while updating the blog")
      setTimeout(() => {
        setSuccessMessage("")
      }, 5000)
    }
  }

  const handleDelete = async () => {

    let id = blog.id

    try {
      window.confirm("Do you want to delete this blog?")
      await blogs.deleteBlog(id)
      const newBlogList = blogsArray.filter(b => {return b.id !== id})
      console.log(newBlogList)
      setBlogs(newBlogList)
      setSuccessMessage("Blog deleted")
      setTimeout(() => {
        setSuccessMessage("")
      }, 5000)
    } catch (error) {
      console.log(error.message)
      setSuccessMessage("There was an error while deleting the blog")
      setTimeout(() => {
        setSuccessMessage("")
      }, 5000)
    }
  }

  return (
    <div className="blog">
      <p>
        {blog.title}
      </p>
      {showDetails ? <>
        <p>
          {blog.author}
        </p>
        <p>
          {blog.url}
        </p>
        <p>
          {blog.likes}
          <button onClick={handleLikes}>like</button>
        </p>
        <p>
 {/* eslint-disable-next-line */}
          Created by {blog.user?.userName}
        </p></> : null}
      <button onClick={() => { setShowDetails(!showDetails) }}>
        {showDetails === false ? "view" : "hide"}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Blog