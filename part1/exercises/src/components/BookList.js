export default function BookList() {
   let pageTitle = "BOOKS! BOOKS! BOOKS!";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/3/3b/The_Atlas_Six.jpg";
   let book3 = "https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Dune by Frank Herbert" />
         <img src={book2} alt="The Atlas Six by Olivie Blake" />
         <img src={book3} alt="The Count of Monte Cristo by Alexander Dumas" />
      </div>      
   );
}