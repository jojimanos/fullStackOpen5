import { useState } from "react"
import blogs from "../services/blogs"

const Blog = ({ blog, toggleBlogForm, setToggleBlogForm, blogsArray, setBlogs }) => {

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
    } catch (error) {
      console.log(error.message)
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
          Created by {blog.user?.userName}
        </p></> : null}
      <button onClick={() => { setShowDetails(!showDetails) }}>
        {showDetails === false ? "view" : "hide"}</button>
    </div>
  )
}

export default Blog