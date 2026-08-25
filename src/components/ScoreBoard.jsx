import { css, cva } from "../../styled-system/css";

function Title({children}) {
  const style = css({
    fontSize: "x-small",
    fontWeight: "bold",
    textTransform: "uppercase",
    opacity: "0.8"
  })
  
  return (
    <h3 className={style}>{children}</h3>
  )
}

function Score({children}) {
  const style = css({
    fontSize: "lg",
    fontFamily: "mono",
    fontWeight: "bold"
  })
  
  return (
    <p className={style}>{children}</p>
  )
}


function ScoreBoard({ children, variant }) {
  const style = cva({
    base: {
      display: "flex",
      flexDir: "column",
      border: "3px solid black",
      shadow: "3px 3px 0px 1px black",
      justifyContent: "center",
      px: "4",
      textAlign: "center",
    },
    variants: {
      variant: {
        primary: {
          bg: "yellow.300",
          color: "black"
        },
        muted: {
          bg: "neutral.800",
          color: "white"
        }
      }
    }
  })
  
  return (
    <div className={style({variant: variant})}>
      {children}
    </div>
  );
}

ScoreBoard.Title = Title
ScoreBoard.Score = Score

export default ScoreBoard;
