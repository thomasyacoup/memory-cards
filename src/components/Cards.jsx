import { css, cx, cva } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";

function Cards({children}) {
  const style = css({
    w: "full", 
    display: "grid",
    gap: "4",
    alignItems: "center",
    justifyContent: 'center',
    flexGrow: 1,
    gridTemplateColumns: "repeat(2, 1fr)",
    md: {gridTemplateColumns: "repeat(4, 1fr)"},
  })

  return (
    <div className={cx(style, container())}>
      {children}
    </div>
  )
}

function Card({children, onClick, clicked}) {
  const style = cva({
    base: {
      bg: "neutral.800",
      border: "5px solid black",
      shadow: "8px 8px 0px 1px black",
      cursor: "pointer",
      transition: "transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease",
      _hover: {
        transform: "translate(-3px, -3px)",
        shadow: "11px 11px 0px 1px black",
      },
      _active: {
        transform: "translate(4px, 4px)",
        shadow: "4px 4px 0px 1px black",
      },
    },
    variants: {
      clicked: {
        true: {
          opacity: 0.45,
          borderColor: "yellow.300",
        },
      },
    },
  })

  return (
    <div className={style({clicked})} onClick={onClick}>
      {children}
    </div>
  )
}

function CardImg({imgUrl}) {
  const style = css({w: "full", h: "full", pointerEvents: "none"})
  return <img src={imgUrl} className={style}/>
}

Cards.Card = Card
Cards.CardImg = CardImg

export default Cards;