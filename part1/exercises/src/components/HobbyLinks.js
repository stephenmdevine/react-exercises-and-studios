export default function HobbyLinks() {
    let hobbyLinks = ["https://www.keystoneresort.com/", "https://dnd.wizards.com/"];
    
    return (
       <div>
        <a href = {hobbyLinks[0]}>I enjoy skiing!</a>
        <a href = {hobbyLinks[1]}>D&D is also great!</a>
       </div>      
    );
 }