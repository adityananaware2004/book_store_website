import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-slate-700">
      <img 
        src={book.image} 
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {book.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          by {book.author}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            ${book.price}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-gray-600 dark:text-gray-300 ml-1">
              {book.rating}
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Link 
            to={`/book/${book.id}`}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center"
          >
            Details
          </Link>
          <button 
            onClick={() => {/* Add to cart functionality */}}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard; 