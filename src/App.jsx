import useCards from "./hooks/useCards";
import { css } from '../styled-system/css'
import { useEffect, useState } from "react";
import shuffle from "./utils/shuffle";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  const [quantity, setQuantity] = useState(8)
  
  const { cards, setCards, loading } = useCards(quantity)

  const [level, setLevel] = useState(1) // 1, 2 or 3 
  const [remainCards, setRemainCards] = useState(8) // 8 -> 12 -> 16 -> win
  const [streak, setStreak] = useState(0)

  const resetGame = () => {
    setLevel(1)
    setRemainCards(8)
    setStreak(0)
    setQuantity(8)

    setCards(cards.map(card => {card.clicked = false; return card}))
  }

  const handleCardClick = async (card) => {
    if (card.clicked) return resetGame();

    card.clicked = true
    setRemainCards(remainCards - 1)
    setStreak(streak + 1)   

    const shuffledCards = shuffle(cards)
    setCards(shuffledCards)
  }

  useEffect(() => {
    if (level == 3 && remainCards == 0) {
      resetGame() // player finished the game
    }
    if (remainCards == 0) {
      const newQuantity = 8 + 4 * (level) // if you finished level 1: new cards = 8 + 4 = 12 card for level 2 
                                          // the level state still the old state and didn't change to the next level (or the next state)
      
      setLevel(level + 1)
      setRemainCards(newQuantity)
      setQuantity(newQuantity)
    }
  }, [level, remainCards])

  return (
    <main className={css({minH: "100vh", bg:"neutral.900", display: "flex", flexDir: "column", gap: "6"})}>

      <Header streak={streak} level={level} remainCards={remainCards}/>
      <Cards>
        {
          loading ? "loading" :
          cards.map(card => (
            <Cards.Card key={card.id} onClick={() => handleCardClick(card)}>
              <Cards.CardImg imgUrl={card.imgUrl} />
            </Cards.Card>
          ))
        }
      </Cards>
      <Footer />
    </main>
  );
}

export default App;
