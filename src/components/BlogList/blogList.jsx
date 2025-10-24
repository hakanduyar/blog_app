import blogData from '../../data/blogData';
import BlogItem from './blogItem'
import './blogList.css'

const BlogList = () => {
  return (
    <div className='blog-list'>
      <h1>Blog Yazıları</h1>
      <div className='blog-items-container'>
        {blogData.map((blog) => (
            <BlogItem
          key={blog.id}
          title={blog.title}
          content={blog.content}
          author={blog.author}
          date={blog.date}
          category={blog.category}
            />
          
        ))}
      </div>
      
    </div>
  );
};

export default BlogList;