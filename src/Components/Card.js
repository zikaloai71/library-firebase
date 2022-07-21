import "./components.css";
import db from "../firebase-config";
import {doc , deleteDoc} from "firebase/firestore";


function Card(props){

    const deleteBook = async(id)=>{
    const book=doc(db,'books',id);
    await deleteDoc(book);
}
  
return(
<div className="card">
<li> author :  {props.author} </li>
<li> title :  {props.bookName}</li>
<li >number of pages : {props.numberOfPages}</li>
 <button onClick={()=>{
    deleteBook(props.cardId);
 }}>delete</button>  
</div>
)
}
export default Card;