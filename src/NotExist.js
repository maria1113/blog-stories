import { Link } from "react-router-dom";

const NotExist = () => {
  return (
    <div className="not-exist">
      <h2>Sorry</h2>
      <p>Cannot find this page</p>
      <Link className="go-back" to="/">
        Return to the home page
      </Link>
    </div>
  );
};

export default NotExist;
