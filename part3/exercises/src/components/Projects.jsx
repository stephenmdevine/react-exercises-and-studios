import data from '../data.json';
import { useState } from 'react';
import './styling.css';

export default function MyProjects() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < data.projects.length - 1) {
      setIndex(index + 1);
    }
    else {
      setIndex(0);
    }
  }

  let projects = data.projects;
  let project = projects[index];

  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>{project.viewedObject}</h2>
      <img className='astroImage' src={project.photoUrl} alt={project.alt} />
      <p>A great time to capture this photo: {project.viewingTime}</p>

    </div>
  );
}
