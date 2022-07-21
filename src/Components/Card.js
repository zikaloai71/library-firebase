import "./components.css";
import db from "../firebase-config";
import {doc , deleteDoc} from "firebase/firestore";
const deleteBook = async(id)=>{
    
    const book=doc(db,'books',id);
    await deleteDoc(book);
}
function Card(props){
  
return(
<div className="card">
<li> author:{props.author} </li>
<li> title: {props.bookName}</li>
<li >number of pages:{props.numberOfPages}</li>
<button onClick={deleteBook()}>delete</button> 
</div>
)
}
export default Card;