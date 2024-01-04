import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addLike, deleteBlog } from "../reducers/blogsReducer";
import Blog from "./Blog";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className="blogs-container">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          user={user}
          addLike={() => dispatch(addLike(blogs, blog.id))}
          removeBlog={() => dispatch(deleteBlog(blogs, blog.id))}
        />
      ))}
    </div>
  );
};

export default BlogList;
