import './styles.css';

function Button() {

   function onLearnMore() {
      alert("Let's go swimming!");
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;