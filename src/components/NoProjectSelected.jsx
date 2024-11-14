import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Button from './ReusableComponents/Button';

function NoProjectSelected() {
  // Initialize the navigate function from useNavigate
  const navigate = useNavigate();

  // Function to navigate to the NewProject page
  const handleCreateNewProject = () => {
    navigate('/new-project'); // Navigate to the '/new-project' route
  };

  return (
    <div className="p-6 text-stone-900 bg-stone-50 text-center">
      {/* Image */}
      <img 
        src="src/assets/no-projects.png" 
        alt="No Project Selected" 
        className="mb-4 h-16 object-contain mx-auto" 
      />

      {/* Heading */}
      <h2 className="font-bold text-2xl mb-4">No Project Selected</h2>

      {/* Paragraph */}
      <p className="text-sm mb-6">
        You haven't selected a project to work on. If you're ready to start, you can create a new project or manage the current one.
      </p>

      {/* Button to Create New Project */}
      <Button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 transition-all duration-300"
        onClick={handleCreateNewProject} // Use the onClick event to trigger navigation
      >
        Create New Project
      </Button>
    </div>
  );
}

export default NoProjectSelected;
