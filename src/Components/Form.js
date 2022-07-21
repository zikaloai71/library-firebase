import "./components.css";
import { useState } from "react";
import { addDoc} from "firebase/firestore";


function Form(props){
let [bookName , setBookName]=useState('');
let [author , setAuthorName]=useState('');
let [numberOfPages , setNumberOfPages]=useState(0);

const createCard = async()=>{
    await addDoc(props.cardRef,{
        author:author,
        bookName:bookName,
        numberOfPages:Number(numberOfPages)
    });
}
return(
    <form className="toggle-display">
    <label>Author</label>
    <input id="author" type="text" onChange={(e)=>{
        setAuthorName(e.target.value)
    }}/>
    <label>Title</label>
    <input id="title" type="text" onChange={(e)=>{
        setBookName(e.target.value)
    }}/>
    <label>Number of pages</label>
    <input id="pages" type="text" onChange={(e)=>{
        setNumberOfPages(e.target.value)
    }} />
    <button id="add-book" onClick={(e)=>{
        e.preventDefault();
        createCard()
        }}>Add Book</button>
</form>

)
}
export default Form;