import { css, cx } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";

function Cards({children}) {
  const style = css({
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gap: "4",
    justifyContent: "space-between",
    py: "4"
  })

  return (
    <div className={cx(style, container())}>
      {children}
    </div>
  )
}

function Card({children, onClick}) {
  const style = css({
    w: "230px",
    h: "230px",
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