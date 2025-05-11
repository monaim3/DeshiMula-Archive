import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
