import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import LocalStorageForm from "./components/LocalStorageForm";
import FirestoreTaskManager from "./components/FirestoreTaskManager";

function App() {
  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector(".App-header");
      const h1 = document.querySelector(".App-header h1");
      const nav = document.querySelector(".App-header nav");
      if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
        h1.classList.add("scrolled");
        nav.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        h1.classList.remove("scrolled");
        nav.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="header-content">
            <h1>Hello, I'm John Smith!</h1>
            <nav>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/storage">Storage Example</Link>
              <Link to="/task-manager">Task Manager</Link>
            </nav>
          </div>
        </header>
        <main>
          <p>
            Welcome to my portfolio website. Here you can learn more about me,
            see my projects, and get in touch.
          </p>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/storage" element={<LocalStorageForm />} />
            <Route path="/task-manager" element={<FirestoreTaskManager />} />
            <Route path="/" element={<Navigate to="/about" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
