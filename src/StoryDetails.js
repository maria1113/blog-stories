import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const StoryDetails = () => {
  const { id } = useParams();
  const {
    data: story,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/stories/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/stories/" + story.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="story">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {story && (
        <article>
          <h2>{story.title}</h2>
          <p>
            <i>Written by {story.author}</i>
          </p>
          <div>
            <p>{story.body}</p>
          </div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default StoryDetails;
