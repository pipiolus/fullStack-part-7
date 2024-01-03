import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";
import styled from "styled-components";

const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid Chocolate;
  border-radius: 3px;
`;

const Input = styled.input`
  margin: 0.25em;
  &:focus {
    background-color: red;
  }
`;

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
          <Input {...content.getInputProps()} required />
        </div>
        <div>
          author
          <Input {...author.getInputProps()} required />
        </div>
        <div>
          url for more info
          <Input {...info.getInputProps()} required />
        </div>
        <Button type="submit">create</Button>
        <Button
          onClick={() => {
            content.clear(), author.clear(), info.clear();
          }}
        >
          reset
        </Button>
      </form>
    </div>
  );
};

export default CreateNew;
