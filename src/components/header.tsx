import styles from "./header.module.css"

import Logo from "../assets/Logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="ToDo Logo" />
    </header>
  )
}