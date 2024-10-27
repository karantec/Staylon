
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-lg">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/about" className="text-yellow-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
