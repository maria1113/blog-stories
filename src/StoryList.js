import { Link } from "react-router-dom";

const StoryList = ({ stories }) => {
  return (
    <div className="stories-list">
      {stories.map((story) => (
        <div className="preview" key={story.id}>
          <Link to={`/stories/${story.id}`}>
            <h2>{story.title}</h2>
            <p>Written by {story.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
