import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import {
  IFACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text
      .split(/\s/)
      .filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharLeft:
      INSTAGRAM_MAX_CHARACTERS - text.length,
    facebokCharLeft: IFACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
