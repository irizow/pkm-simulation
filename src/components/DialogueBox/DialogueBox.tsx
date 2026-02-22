import React, {
  useEffect,
  useState,
  useCallback,
  type SetStateAction,
} from "react";
import styles from "./dialoguebox.module.css";

export default function DialogueBox({
  dialogue,
  setDialogue,
}: {
  dialogue: string;
  setDialogue: React.Dispatch<SetStateAction<string | null>>;
}) {
  const [displayed, setDisplayed] = useState("");

  const handleAdvance = useCallback(() => {
    if (displayed.length < dialogue.length) {
      setDisplayed(dialogue);
    } else {
      setDialogue(null);
    }
  }, [displayed, dialogue, setDialogue]);

  useEffect(() => {
    setDisplayed("");
    let i = 0;

    const interval = setInterval(() => {
      i++;
      setDisplayed(dialogue.slice(0, i));

      if (i >= dialogue.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [dialogue]);

  return (
    <div onClick={handleAdvance} className={styles.dialoguebox}>
      {displayed}
    </div>
  );
}
