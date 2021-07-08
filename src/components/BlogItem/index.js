// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <div className="blog-container">
      <div className="blog-details-container">
        <h1 className="title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>

      <p className="blog-description">{description}</p>
    </div>
  )
}

export default BlogItem
