import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = { title, body, author };
    setIsLoading(true);
    fetch("http://localhost:8000/stories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStory),
    }).then(() => {
      console.log("New story added!");
      setIsLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>What is your story?..</h2>
      <form onSubmit={handleSubmit}>
        <label>Story title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Story body:</label>
        <textarea
          required
          rows={30}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Story author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isLoading && <button>Create a story</button>}
        {isLoading && <button disabled>Creating a story...</button>}
      </form>
    </div>
  );
};

export default Create;
