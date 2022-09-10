import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const b: string = "Moved to benefits";
const p: string = "Moved to punishments";

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <header className={styles.headerLayout}>
        {/* <Link to="benefits">
          <Button value="Move to benefits" onClick={() => console.log(b)} />
        </Link>
        <Link to="punishments">
          <Button value="Move to punishments" onClick={() => console.log(p)} />
        </Link> */}
      </header>
    );
  }
}

export default Header;
