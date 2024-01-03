import { useState } from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Nav from "./components/Nav";
import AnecdoteList from "./components/AnecdoteList";
import Footer from "./components/Footer";
import About from "./components/About";
import CreateNew from "./components/CreateNew";
import Anecdote from "./components/Anecdote";
import Notification from "./components/Notification";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);

  const [notification, setNotification] = useState(null);

  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((a) => a.id === Number(match.params.id))
    : null;

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`${anecdote.content} successfully created!`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  /* const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  }; */

  return (
    <div className="container">
      <h1>Software anecdotes</h1>
      <Nav />
      <Notification notification={notification} />
      <Routes>
        <Route
          path="/"
          element={<AnecdoteList anecdotes={anecdotes} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/create"
          element={<CreateNew addNew={addNew} />}
        />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
