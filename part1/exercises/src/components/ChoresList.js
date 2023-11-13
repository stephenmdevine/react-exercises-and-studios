import classes from './ChoresList.module.css';

export default function ChoresList () {
   const tasks = ["Finish Graded Assignment 5", "Clean out fish tank", "Fix broken drawer"];
   return (
      <div>
         <h3 className = {classes.choresHeading}>Today's Chores</h3>
         <ul>
            <li className = {classes.choresText}>{tasks[0]}</li>
            <li className = {classes.choresText}>{tasks[1]}</li>
            <li className = {classes.choresText}>{tasks[2]}</li>
         </ul>
      </div>
   );
}