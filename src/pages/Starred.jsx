import { Link } from 'react-router-dom';

const Starred = () => {
  return (
    <div>
      <div>Hello from stared</div>
      <div>
        <Link to="/">
          <button>Go back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Starred;
