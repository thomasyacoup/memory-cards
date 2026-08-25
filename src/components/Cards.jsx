import { css, cx } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";

function Cards({children}) {
  const style = css({
    w: "full", 
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gap: "4",
    justifyContent: "space-between",
    flexGrow: 1,
  })

  return (
    <div className={cx(style, container())}>
      {children}
    </div>
  )
}

function Card({children, onClick}) {
  const style = css({
    w: "280px",
    h: "280px",
    bg: "neutral.800",
    border: "5px solid black",
    shadow: "8px 8px 0px 1px black"
  })
  
  return (
    <div className={style} onClick={onClick}>
      {children}
    </div>
  )
}

function CardImg({imgUrl}) {
  const sytle = css({w: "full", h: "full"})
  return <img src={imgUrl} className={sytle}/>
}

Cards.Card = Card
Cards.CardImg = CardImg

export default Cards;