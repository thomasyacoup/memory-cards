import { css, cx } from "../../styled-system/css"
import { container } from "../../styled-system/patterns"
import ScoreBoard from "./ui/ScoreBoard"

function Header({level, streak, remainCards}) {
  return (
    <header className={cx(css({w: "full", display: "flex", py: "2", shadow: "7px 7px 0px 1px black", border: "3px solid black", justifyContent: "space-between", alignItems: "center"}), container())}>
      <h1 className={css({color: "white", fontWeight: "bold", fontSize: "lg",md: {fontSize: "4xl"}, fontStyle: "italic"})}>Memory Cards</h1>
      <div className={css({display: "flex", gap: "4"})}>
        <ScoreBoard variant="muted">
          <ScoreBoard.Title>Remaining</ScoreBoard.Title>
          <ScoreBoard.Score>{remainCards}</ScoreBoard.Score>
        </ScoreBoard>
        <ScoreBoard variant="muted">
          <ScoreBoard.Title>Level</ScoreBoard.Title>
          <ScoreBoard.Score>{level}</ScoreBoard.Score>
        </ScoreBoard>
        <ScoreBoard variant="primary">
          <ScoreBoard.Title>Streak</ScoreBoard.Title>
          <ScoreBoard.Score>{streak}</ScoreBoard.Score>
        </ScoreBoard>
      </div>
    </header>
  )
}

export default Header