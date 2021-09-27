// src/pages/EditProjectPage.js

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // We access the URL parameter `:id` and save it in a variable
  const projectId = props.match.params.id; // <== ADD

  // This effect will run after the initial render
  // and each time the project id coming from
  // the URL parameter `props.match.params.id` changes.
  useEffect(() => {
    // <== ADD
    axios
      .get(`${API_URL}/api/projects/${projectId}`)
      .then((response) => {
        /* 
          We update the state with the project data coming from the response.
          This way our inputs will show the actual title and description of the project during the edit.
        */
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
  }, [projectId]);

  const handleFormSubmit = (e) => {
    // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, description };

    // Make a PUT request to update the project
    axios
      .put(`${API_URL}/api/projects/${projectId}`, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        props.history.push(`/projects/${projectId}`);
      });
  };

  const deleteProject = () => {                               //  <== ADD
    // Make a DELETE request to delete the project
    axios
      .delete(`${API_URL}/api/projects/${projectId}`)
      .then(() => {
        // Once the request is resolved successfully and the project
        // is deleted navigate back to the list of projects.
        props.history.push("/projects");
      })
      .catch((err) => console.log(err));
  };  

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>

      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}

export default EditProjectPage;
