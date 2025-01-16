import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock book data - replace with actual data fetching
  const book = {
    id: 1,
    title: "The Digital Age",
    author: "John Smith",
    price: 29.99,
    category: "technology",
    image: "https://picsum.photos/200/300",
    description: "A comprehensive guide to the digital transformation.",
    rating: 4.5,
    stock: 15,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-slate-700">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={book.image}
                alt={book.title}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">
                {book.category}
              </div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                {book.title}
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                by {book.author}
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-600 dark:text-gray-300">
                  {book.rating} rating
                </span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {book.details}
              </p>
              <div className="mt-6 flex items-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${book.price}
                </span>
                <span className="ml-4 text-gray-600 dark:text-gray-300">
                  {book.stock} in stock
                </span>
              </div>
              <div className="mt-6">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail; 