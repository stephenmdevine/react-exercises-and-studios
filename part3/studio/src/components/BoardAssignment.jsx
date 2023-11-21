import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "one",
         value: "spicy"
      }, 
      {
         label: "two",
         value: "grilled chicken"
      }, 
      {
         label: "three",
         value: "marinades"
      }
   ];

   const [boardName, setName] = useState("no boards yet!");

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((data) => {
            const option = (
               <option value={data.value}>{data.label}</option>
            );
            return option;
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
