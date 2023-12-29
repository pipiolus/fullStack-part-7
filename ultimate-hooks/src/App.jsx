import { useState, useEffect } from "react";
import axios from "axios";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  const getProps = () => ({
    type,
    value,
    onChange,
  });

  return {
    getProps,
    clear,
  };
};

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const response = await axios.get(baseUrl);
      setResources(response.data);
    };
    getAll();
  }, [baseUrl]);

  const create = async (resource) => {
    const response = await axios.post(baseUrl, resource);
    setResources((prevResources) =>
      prevResources.concat(response.data)
    );
  };

  const service = {
    create,
  };

  return [resources, service];
};

const App = () => {
  const content = useField("text");
  const name = useField("text");
  const number = useField("text");

  const [notes, noteService] = useResource(
    "http://localhost:3005/notes"
  );
  const [persons, personService] = useResource(
    "http://localhost:3005/persons"
  );

  const handleNoteSubmit = (event) => {
    event.preventDefault();
    noteService.create({ content: content.getProps().value });
    content.clear();
  };

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    personService.create({
      name: name.getProps().value,
      number: number.getProps().value,
    });
    name.clear();
    number.clear();
  };

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content.getProps()} required />
        <button type="submit">create</button>
      </form>
      {notes.map((n) => (
        <p key={n.id}>{n.content}</p>
      ))}

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name.getProps()} required /> <br />
        number <input {...number.getProps()} required />
        <button type="submit">create</button>
      </form>
      {persons.map((n) => (
        <p key={n.id}>
          {n.name} {n.number}
        </p>
      ))}
    </div>
  );
};

export default App;
