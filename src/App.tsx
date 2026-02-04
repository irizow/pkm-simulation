import Console from "./components/Console/Console";
import GameCanvas from "./components/GameCanvas/GameCanvas";
import styles from "./app.module.css";
function App() {
  return (
    <section className={styles.app}>
      <Console children={<GameCanvas />} />
    </section>
  );
}

export default App;
