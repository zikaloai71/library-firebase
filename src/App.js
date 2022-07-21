import "./App.css";
import db from "./firebase-config";
import Header from "./Components/Header.js";
import Form from "./Components/Form.js";
import Card from "./Components/Card.js";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";


function App() {
  let [showCards, setShowCards] = useState([]);
  let cardRef = collection(db, "books");
  useEffect(() => {
    const getCards = async () => {
      const cards = await getDocs(cardRef);
      setShowCards(cards.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCards();
  });


  return (
    <>
      <Header />
      <Form cardRef={cardRef} />
      <div className="booksContainer">
      {showCards.map((card) => {
        return (
          <Card
            author={card.author}
            bookName={card.bookName}
            numberOfPages={card.numberOfPages}
            key={card.id}
            cardId={card.id}
          />
        );
      })}
      </div>
    </>
  );
}

export default App;
