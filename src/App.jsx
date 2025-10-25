import { useState } from 'react';
import AddNewBlog from './components/BlogList/addNewBlog';
import BlogList from './components/BlogList/blogList';
import blogData from './data/blogData';

const App = () => {

  const [blogs, setBlogs] = useState(blogData)

  const addNewBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs])
  }
  return (
    <div className="app">
      <AddNewBlog addNewBlog={addNewBlog}/>
      <BlogList blogs={blogs}/>
    </div>
  );
};

export default App;