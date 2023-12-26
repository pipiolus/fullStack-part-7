const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h1>{anecdote.content}</h1>
      <p>has {anecdote.votes} votes</p>
      <p>
        For more info see:{" "}
        <a href={anecdote.info} target="blank">
          {anecdote.info}
        </a>
      </p>
    </div>
  );
};

export default Anecdote;
