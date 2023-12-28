import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";

const CreateNew = (props) => {
  const content = useField("text");
  const author = useField("text");
  const info = useField("url");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.getInputProps().value,
      author: author.getInputProps().value,
      info: info.getInputProps().value,
      votes: 0,
    });
    navigate("/");
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content.getInputProps()} required />
        </div>
        <div>
          author
          <input {...author.getInputProps()} required />
        </div>
        <div>
          url for more info
          <input {...info.getInputProps()} required />
        </div>
        <button type="submit">create</button>
        <button
          onClick={() => {
            content.clear(), author.clear(), info.clear();
          }}
        >
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
