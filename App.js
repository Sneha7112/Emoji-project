import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "Smiling",
  "😏": "Smirking face",
  "😂": "face with tears of joy",
  "🤣": "rolling on the floor laughing",
  "🙌": "raising hands",
  "😉": "winking face",
  "👍": "thumbs up",
  "😎": "smiling face with sunglasses",
  "🥲": "smiling face with tear",
  "😭": "Loudly Crying Face",
  "😋": "Face Savoring Delicious Food",
  "😢": "Crying Face"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this emoji in the database.";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> FIND THE EMOJI MEANING!!!</h1>
      <input onChange={emojiInputHandler} />

      <h2> {meaning}</h2>
      <h3>emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
