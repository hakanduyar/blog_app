import AddNewBlog from './components/BlogList/addNewBlog';
import BlogList from './components/BlogList/blogList';

const App = () => {
  return (
    <div className="app">
      <AddNewBlog/>
      <BlogList />
    </div>
  );
};

export default App;