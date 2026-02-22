import type { SetStateAction } from "react";
import styles from "./intro.module.css";
interface IntroProps {
  setIsFocused: React.Dispatch<SetStateAction<boolean>>;
}
export default function Intro({ setIsFocused }: IntroProps) {
  return (
    <div onClick={() => setIsFocused(true)} className={styles.intro}>
      <span className={styles.blink}>Press to start!</span>
    </div>
  );
}
