import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';

const Books = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'fiction',
    'non-fiction',
    'science',
    'technology',
    'business'
  ];

  const books = [
    {
      id: 1,
      title: "The Digital Age",
      author: "John Smith",
      price: 29.99,
      category: "technology",
      image: "https://picsum.photos/200/300",
      description: "A comprehensive guide to the digital transformation.",
      rating: 4.5,
      stock: 15
    },
    {
      id: 2,
      title: "The Art of Business",
      author: "Sarah Johnson",
      price: 24.99,
      category: "business",
      image: "https://picsum.photos/200/301",
      description: "Learn the fundamentals of business success.",
      rating: 4.8,
      stock: 20
    },
    // Add more books as needed
  ];

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
            Book Collection
          </h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books; 