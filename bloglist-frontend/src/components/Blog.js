const Blog = ({ blog }) => (
  <div>
    <h3>
      Created by {blog.user?.userName}
    </h3>
    <p>
      {blog.title}
    </p>
    <p>
      {blog.author}
    </p>
  </div>
)

export default Blog