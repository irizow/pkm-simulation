import type { SetStateAction } from "react";
import styles from "./intro.module.css";
interface IntroProps {
  setIsFocused: React.Dispatch<SetStateAction<boolean>>;
}
export default function Intro({ setIsFocused }: IntroProps) {
  return (
    <div onClick={() => setIsFocused(true)} className={styles.intro}>
      <p style={{ animationDelay: "0s" }}>
        Welcome to this game I'm doing to represent my life.
      </p>
      <p style={{ animationDelay: "2.5s" }}>
        This is still work in progress...
      </p>
      <p style={{ animationDelay: "4s" }}>and probably it will forever be. </p>
      <p style={{ animationDelay: "6.5s" }}>Enjoy.</p>
      <span className={styles.blink}>Press to start!</span>
    </div>
  );
}
