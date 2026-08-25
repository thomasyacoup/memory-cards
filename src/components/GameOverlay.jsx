import { css, cva } from "../../styled-system/css";

const overlayStyle = css({
  position: "fixed",
  inset: 0,
  bg: "rgba(0, 0, 0, 0.85)",
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "6",
  zIndex: 50,
});

const titleStyle = cva({
  base: {
    fontSize: "6xl",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
  variants: {
    status: {
      won: { color: "yellow.300" },
      lost: { color: "red.500" },
    },
  },
});

const messageStyle = css({
  color: "white",
  fontSize: "lg",
});

const buttonStyle = css({
  bg: "yellow.300",
  color: "black",
  fontWeight: "bold",
  px: "6",
  py: "3",
  border: "3px solid black",
  shadow: "5px 5px 0px 1px black",
  cursor: "pointer",
  _hover: { bg: "yellow.400" },
});

function GameOverlay({ status, onRestart }) {
  if (status === "playing") return null;

  const isWon = status === "won";

  return (
    <div className={overlayStyle}>
      <h2 className={titleStyle({ status })}>
        {isWon ? "You Win!" : "Game Over"}
      </h2>
      <p className={messageStyle}>
        {isWon
          ? "You cleared all 3 levels!"
          : "You clicked the same card twice."}
      </p>
      <button className={buttonStyle} onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}

export default GameOverlay;