import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BlogsContainer } from "./styles/BlogContainerStyles";
import { Blog } from "./styles/BlogListStyle";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);

  return (
    <BlogsContainer>
      {blogs.map((blog) => (
        <Blog key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </Blog>
      ))}
    </BlogsContainer>
  );
};

export default BlogList;
