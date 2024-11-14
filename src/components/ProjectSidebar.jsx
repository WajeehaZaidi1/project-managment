import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function ProjectSidebar({projects}) {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNewProjectClick = () => {
    // This will programmatically navigate to the /new-project route
    navigate("/new-project");
  };

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl h-[50rem]">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Project Sidebar
      </h2>

      {/* Button with onClick to navigate to /new-project */}
      <button
        onClick={handleNewProjectClick}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-6"
      >
        + New Project
      </button>

      {/* Sidebar items will go here */}
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
          <button
            onClick={() => navigate(`/project/${index}`)}
            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
          >
            {project.title}
          </button>
        </li>
        ))}
      </ul>
    </aside>
  );
}
