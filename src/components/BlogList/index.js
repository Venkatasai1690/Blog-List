// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsDetails} = props

  return (
    <div className="blogs-container">
      {blogsDetails.map(eachBlog => (
        <BlogItem key={eachBlog.id} blog={eachBlog} />
      ))}
    </div>
  )
}
export default BlogList
