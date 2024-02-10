import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>Hello Home Page</div>
      <Link to="/Starred">
      <button>click to star</button>
      </Link>
    </div>
  );
};

export default Home;
