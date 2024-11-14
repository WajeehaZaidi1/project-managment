// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProjectSidebar from "./components/ProjectSidebar";
// import NewProject from "./components/NewProject";
// import NoProjectSelected from "./components/NoProjectSelected";

// function App() {
//   const [projects, setProjects] = useState([]);

//   const addProject = (project) => {
//     setProjects([...projects, project]);
//   };

//   return (
//     <BrowserRouter>
//       <div className="flex">
        
//         <ProjectSidebar projects={projects} />
//         <div className="flex-grow p-6">
//           <Routes>
            
//             <Route path="/select-project"
//               element={<NoProjectSelected onAddProject={addProject} />} />
//             <Route
//               path="/new-project"
//               element={<NewProject onAddProject={addProject} />}
//             />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectDetails from "./components/ProjectDetails";
function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <BrowserRouter>
      <div className="flex">
        <ProjectSidebar projects={projects} />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/select-project" />} />
            <Route
              path="/select-project"
              element={<NoProjectSelected onAddProject={addProject} />}
            />
            <Route
              path="/new-project"
              element={<NewProject onAddProject={addProject} />}
            />
              <Route path="/project/:id" element={<ProjectDetails projects={projects} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
