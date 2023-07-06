
import StoryList from './StoryList';
import useFetch from './useFetch';


const Home = () => {
  const { data: stories, isLoading, error} = useFetch('http://localhost:8000/stories');
  

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {stories && <StoryList stories={stories} />}
      {error && <div>{error}</div>}
    </div>
  )
}

export default Home