import Console from "./components/Console/Console";
import GameCanvas from "./components/GameCanvas/GameCanvas";
import styles from "./app.module.css";
import { useRef } from "react";
import { InputHandler } from "./engine/InputHandler";
function App() {
  const inputRef = useRef(new InputHandler());
  return (
    <section className={styles.app}>
      <Console
        input={inputRef.current}
        children={<GameCanvas input={inputRef.current} />}
      />
    </section>
  );
}

export default App;
