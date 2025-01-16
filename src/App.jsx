import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Courses from "./courses/Courses"; // Corrected import path
import { useState } from "react";
import ContactUs from './components/ContactUs';
import About from "./components/About";
import Books from "./components/Books/Books";
import BookDetail from "./components/Books/BookDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;