import { useState } from "react"

const Blog = ({ blog }) => {

  const [showDetails, setShowDetails] = useState(true)

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
        </p>
        <p>
          Created by {blog.user?.userName}
        </p></> : null}
      <button onClick={() => { setShowDetails(!showDetails) }}>
        {showDetails === false ? "view" : "hide"}</button>
    </div>)
}

export default Blog