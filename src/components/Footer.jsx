import { css } from "../../styled-system/css";

function Footer() {
  return (
    <footer className={css({p: "4", bg: "neutral.800", textAlign: "center"})}>
      <p className={css({color: "white"})}>
        Made by <a href="https://github.com/thomasyacoup" className={css({color: "yellow.300", _hover: {textDecoration: "underline"}})}>Thomas Yacoub</a>
      </p>
    </footer>
  )  
}

export default Footer