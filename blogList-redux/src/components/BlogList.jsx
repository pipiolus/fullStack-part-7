import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div className="blogs-container">
      {blogs.map((blog) => (
        <div
          style={{
            border: "1px solid black",
            height: "5vh",
          }}
          key={blog.id}
        >
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
