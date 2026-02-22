import Console from "./components/Console/Console";
import GameCanvas from "./components/GameCanvas/GameCanvas";
import styles from "./app.module.css";
import { useRef, useState } from "react";
import { InputHandler } from "./engine/InputHandler";
import Intro from "./components/Intro/Intro";

function App() {
  const inputRef = useRef(new InputHandler());
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <section className={styles.app}>
      <Console
        input={inputRef.current}
        children={
          isFocused ? (
            <GameCanvas input={inputRef.current} />
          ) : (
            <Intro setIsFocused={setIsFocused} />
          )
        }
      />
    </section>
  );
}

export default App;
