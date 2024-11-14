import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails({ projects , }) {
  const { id } = useParams();
  const project = projects[id];

  return (
    <div className="p-6 text-stone-900 bg-stone-50">
    {project ? (
      <>
        <h2 className="font-bold text-2xl mb-4">{project.title}</h2>
        <p><strong>Due Date:</strong> {project.dueDate}</p>
        <p><strong>Description:</strong> {project.description}</p>
      </>
    ) : (
      <p>No project found.</p>
    )}
  </div>
  );
}

export default ProjectDetails;
